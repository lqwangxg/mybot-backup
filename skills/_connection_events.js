/* This module kicks in if no Botkit Studio token has been provided */
//const utils = require("../service/utils");
const { BotkitConversation } = require("botkit");
const util = require('../service/utils');

module.exports = function(controller) {
  
  //初回接続、再度接続、途中helpの場合、ヘルプディスクへmessage_received
  controller.on('hello,welcome_back', onboarding);
  
  
  //controller.hears(['help','ヘルプ'], 'message_received', onboarding);
  
  async function onboarding(bot, message) {
    console.log(`onboarding :${message.type}, ${message.user} `);
    await bot.reply(message, util.botSay({
      text:`こんにちは、MBP Smartec ロボです。 `,
      typingDelay: 1000,
      quick_replies: [
        {
          title: 'iot関連',
          payload: 'iot関連',
        },
        {
          title: 'bigdata関連',
          payload: 'bigdata関連',
        },
        {
          title: '会社案内',
          payload: '会社案内',
        },{
          title: '事業内容',
          payload: '事業内容',
        },{
          title: '最新ニュース',
          payload: '最新ニュース',
        },{
          title: 'ログイン',
          payload: 'ログイン',
        }
      ]
    }));

  }

}
