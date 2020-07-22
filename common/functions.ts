
//import { BotkitMessage } from "botkit";

import { BotWorker, BotkitMessage, Botkit } from "botkit";
const utils = require("../service/utils");

/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller: Botkit) {
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

  //送信メッセージを準備
  async function formatMessage(bot, message) {
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
    
    if(message.user && !message.author){
      message.author = message.user;
      message.data.author = message.user;
    }
    if (!message.data.author) {
      if( message.author ){
        message.data.author = message.author;
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

  async function onReceivedMessage(bot, message) {
    //author存在確認
    await fillUserFromBotMessage(bot,message, "author");

    //author登録
    await registUser(bot, message);

    //メッセージフォーマット
    await formatMessage(bot, message);
  };

  
  
  async function transferToMMCMessage(message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering) return;
    //自身へ転送しない
    if (message.author === process.env.MMC_UID) return;
    
    //管理センターへ転送
    transferMessage(message, process.env.MMC_UID, process.env.MMC_UID);
  };

  async function transferToUserGroupMessage(message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering ) return;
    if(!message.data.group)return;

    let selfId = message.author;

    message.data.group.forEach((toId) => {
      //自身に転送しない,chatbotにも転送しない
      if (selfId === toId || "bot" === toId || process.env.MMC_UID === toId) return;
      
      //お客様へ転送
      transferMessage(message, toId, 'group');
    });
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
    }else{
      // controller.storage.counters.seq(message.author, (error, resp)=>{
      //   //let seq = resp;
      //   message.id = resp.value.seq;
      //   controller.trigger("SaveMessage", bot, message);
      // })
    }
  }
};
