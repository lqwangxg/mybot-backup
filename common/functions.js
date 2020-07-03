/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller) {
  controller.convertMessage = async function (bot, message) {
    //ユーザへの送信メッセージをセンターへ転送
    if (!message.data) {
      message.data = {};
    }
    if(!message.text){
      message.text ="";
    }
    if (!message.data.text && message.text) {
      message.data.text = message.text;
    }
    
    if (!message.channelData) {
      message.channelData = {};
    }

    if (!message.channelData.author && message.user) {
      if (message.user) {
        message.channelData.author = message.user;
      } else {
        message.channelData.author = "bot";
      }
    }

    if (!message.channelData.reply_user) {
      if (message.conversation && message.conversation.id) {
        message.channelData.reply_user = message.conversation.id;
      } else if (message.recipient && message.recipient.id) {
        message.channelData.reply_user = message.recipient.id;
      } else if (
        bot._config &&
        bot._config.reference &&
        bot._config.reference.user &&
        bot._config.reference.user.id
      ) {
        message.channelData.reply_user = bot._config.reference.user.id;
      }
    }

    if (!message.channelData.group) {
      message.channelData.group = [];
    }
    if (
      message.channelData.user &&
      !message.channelData.group.includes(message.channelData.user)
    ) {
      message.channelData.group.push(message.channelData.user);
    }
    if (
      message.channelData.reply_user &&
      !message.channelData.group.includes(message.channelData.reply_user)
    ) {
      message.channelData.group.push(message.channelData.reply_user);
    }
  };

  controller.registUser = async function (bot, message) {
    let client = controller.botClients.find((u) => message.user === u.id);
    //保存
    if (!client) {
      client = {
        id: message.user,
        bot: bot,
        context: message.context,
        reference: message.reference,
      };
      controller.botClients.push(client);
    }
  };

  controller.transferToMMCMessage = async function (message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering || message.channelData.isTranfering) return;

    let mmc = controller.botClients.find((c) => controller.MMC_UID === c.id);
    if (!mmc) {
      //管理センターがオフラインの場合、処理終了
      return;
    }

    let newMessage = {
      type: message.type,
      event: event,
      text: message.text,
      channelData: {
        type: message.type,
        text: message.text,
        isTranfering: true,
        user: message.channelData.reply_user,
        reply_user: message.channelData.user,
      },
    };
    //await mmc.bot.changeContext(mmc.reference);
    //await mmc.bot.say(newMessage);
    controller.trigger("transfer_message", mmc.bot, newMessage);
  };

  controller.transferGroupMessage = async function (message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering) return;
    if(!message.channelData.group)return;

    let selfId = message.channelData.author;

    message.channelData.group.forEach((toId) => {
      //自身に転送しない,chatbotにも転送しない
      if (selfId === toId || "bot" === toId) return;

      let client = controller.botClients.find((u) => toId === u.user);
      if (client) {
        let newMessage = {
          type: message.type,
          text: message.text,
          isTranfering: true,
          channelData: {
            type: message.type,
            text: message.text,
            isTranfering: true,
            user: message.channelData.reply_user,
            reply_user: message.channelData.user,
          },
        };

        // await client.bot.changeContext(client.message.reference);
        // await admin.bot.say(newMessage);
        controller.trigger("transfer_message", client.bot, newMessage);
      }
    });
  };
};
