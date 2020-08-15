import { Botkit } from "botkit";

const utils = require("../service/utils");
const detectTextIntent = require("../service/df-intent");

module.exports = function(controller: Botkit) {

  //ユーザからのメッセージを解析
  controller.on('message,text',  onUnknowMessageReceived);
  
  async function onUnknowMessageReceived(bot, message){
    //管理センターからのメッセージの場合、    
    if (message.user === process.env.MMC_UID){
      //admin ->bot -> user
      controller.trigger('fallback', bot, message);
      return;
    }
    //伝送メッセージを無視
    if (message.isTranfering ) return;
    //伝送メッセージを無視
    if (message.channelData && message.channelData.isTranfering) return;

    console.log(`onUnknowMessageReceived =============>:`, message);
    
    bot.reply(message, {
      reply_user: message.user,
      text: "お問い合わせ内容を一旦預かりさせて頂きます。ご連絡情報を頂いた場合、後日こちらよりご連絡させ頂きます。ありがとうございました。",
      fulfillmentText: message.fulfillmentText,
    });

    // let ret = await detectTextIntent([message.text]);

    // Object.assign(message, ret);
    // message.actionName = utils.getAction(ret);
    // message.fulfillmentText = utils.getfulfillmentText(ret);
    // message.parameters = utils.getParameters(ret);

    // // GOOGLE DialogFlowより回答が来た場合、ユーザへ返す
    // if(message.fulfillmentText){
    //   bot.reply(message, {
    //     reply_user: message.user,
    //     text: message.fulfillmentText,
    //     fulfillmentText: message.fulfillmentText,
    //   });
    //   return;
    // }
  }  

}