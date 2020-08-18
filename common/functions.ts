
//import { BotkitMessage } from "botkit";

import { BotWorker, BotkitMessage, Botkit } from "botkit";
const utils = require("../service/utils");

/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller: any) {
  let botClients =[];
  //送受信前に、送受信者を確定
  async function fillUserFromBotMessage (bot: BotWorker, message: BotkitMessage, usertype: string) {
    //該当ユーザー情報が存在する場合、処理終了
    if(message[usertype])return;

    let localUser = "";
    if (message.conversation && message.conversation.id) {
      localUser = message.conversation.id;
    } else if (message.recipient && message.recipient.id) {
      localUser = message.recipient.id;
    } else if (bot.getConfig('reference')) {
      let reference = bot.getConfig('reference');
      localUser = reference.user.id;
    }
    message[usertype] = localUser;
    if(!message.user){
      message.user = localUser;
    }
  };

  async function registUser(bot, message) {
    if(!message.author)return;
    let client = botClients.find((u) => message.author === u.id);
    //保存
    if (!client) {
      client = {
        id: message.user,
        bot: bot,
        context: message.context,
        reference: message.reference,
      };
      botClients.push(client);
    }
  };
  
  async function transferMessage (message, destId, transferType) {
    let client = botClients.find((u) => destId === u.id);
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
          transferType: transferType,
          author: message.author,
          reply_user: message.reply_user,
        },
      };

      await client.bot.changeContext(client.reference);
      await client.bot.say(newMessage);
    }
  }
  
  async function saveMessageHistory(bot, message){
    if(!controller.storage)return;
    if(message.id){
      controller.trigger("SaveMessage", bot, message);
    }
  }
};
