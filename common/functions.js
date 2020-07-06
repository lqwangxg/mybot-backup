/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller) {
  //送受信前に、送受信者を確定
  controller.fillUserFromBotMessage = async function  (bot, message, usertype) {
    //該当ユーザー情報が存在する場合、処理終了
    if(message[usertype])return;

    let localUser = "";
    if (message.conversation && message.conversation.id) {
      localUser = message.conversation.id;
    } else if (message.recipient && message.recipient.id) {
      localUser = message.recipient.id;
    } else if (
      bot._config &&
      bot._config.reference &&
      bot._config.reference.user &&
      bot._config.reference.user.id
    ) {
      localUser = bot._config.reference.user.id;
    }
    message[usertype] = localUser;
    if(!message.user){
      message.user = localUser;
    }
  };

  //送信メッセージを準備
  controller.formatMessage = async function (bot, message) {
    //ユーザへの送信メッセージをセンターへ転送
    if(!message.text){
      message.text ="";
    }
    if (!message.data) {
      message.data = {};
    }
    if (!message.data.text && message.text) {
      message.data.text = message.text;
    }
    
    if(message.user){
      message.author = message.user;
      message.data.author = message.user;
    }
    if (!message.data.author) {
      if( message.author ){
        message.data.author = message.author;
      }else{
        message.author ="bot";
        message.data.author = "bot";
      }
    }
    if (!message.data.reply_user) {
      if( message.reply_user ){
        message.data.reply_user = message.reply_user;
      }else{
        message.reply_user ="bot";
        message.data.reply_user = "bot";
      }
    }
    if (!message.data.reply_user && message.reply_user) {
      message.data.reply_user = message.reply_user;
    }   
    if (!message.data.group) {
      message.data.group = ["bot"];
    }

    if (
      message.data.author &&
      !message.data.group.includes(message.data.author)
    ) {
      message.data.group.push(message.data.author);
    }
    if (
      message.data.reply_user &&
      !message.data.group.includes(message.data.reply_user)
    ) {
      message.data.group.push(message.data.reply_user);
    }
    if (!message.channelData) {
      message.channelData = {};
    }
    //データ保存
    Object.assign(message.channelData, message.data);
  };

  controller.registUser = async function (bot, message) {
    if(!message.author)return;
    let client = controller.botClients.find((u) => message.author === u.id);
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

  controller.onReceivedMessage = async function (bot, message) {
    //author存在確認
    await controller.fillUserFromBotMessage(bot,message, "author");

    //author登録
    await controller.registUser(bot, message);

    //メッセージフォーマット
    await controller.formatMessage(bot, message);
  };

  //送信メッセージを準備
  controller.beforeSendingMessage = async function (bot, message) {
    //送信者を確定
    await controller.fillUserFromBotMessage(bot, message, "reply_user");
    //送信内容フォーマット
    await controller.formatMessage(bot, message);
  };
  
  controller.transferToMMCMessage = async function (message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering) return;
    //自身へ転送しない
    if (message.author === controller.MMC_UID) return;

    //管理センターへ転送
    transferMessage(message, controller.MMC_UID);
  };

  controller.transferToUserGroupMessage = async function (message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering ) return;
    if(!message.data.group)return;

    let selfId = message.author;

    message.data.group.forEach((toId) => {
      //自身に転送しない,chatbotにも転送しない
      if (selfId === toId || "bot" === toId) return;
      
      //お客様へ転送
      transferMessage(message, toId);      
    });
  };
  async function transferMessage (message, destId) {
    let client = controller.botClients.find((u) => destId === u.id);
    if (client) {
      let newMessage = {
        type: message.type,
        text: message.text,
        isTranfering: true,
        data: message.data,
        channelData: {
          type: message.type,
          text: message.text,
          isTranfering: true,
          reply_user: message.reply_user,
        },
      };

      await client.bot.changeContext(client.reference);
      await client.bot.say(newMessage);
    }
  }
};
