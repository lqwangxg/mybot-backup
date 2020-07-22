import { BotkitMessage, BotWorker } from "botkit"

module.exports = class MessageWorker {
  // bot: BotWorker;
  // message: BotkitMessage;
  // constructor(bot: BotWorker,  message: BotkitMessage){
  //   this.bot = bot;
  //   this.message = message;
  // }
  //送信メッセージを準備
  static beforeSending(bot: BotWorker,  message: BotkitMessage){
    if(message.type==="ask" || message.type ==="question"){
      message.type="message";
    }

    //送信者を確定
    //await fillUserFromBotMessage(bot, message, "reply_user");
    //送信内容フォーマット
    //await formatMessage(bot, message);
  };

}