"use strict";
exports.__esModule = true;
module.exports = /** @class */ (function () {
    function MessageWorker() {
    }
    // bot: BotWorker;
    // message: BotkitMessage;
    // constructor(bot: BotWorker,  message: BotkitMessage){
    //   this.bot = bot;
    //   this.message = message;
    // }
    //送信メッセージを準備
    MessageWorker.beforeSending = function (bot, message) {
        if (message.type === "ask" || message.type === "question") {
            message.type = "message";
        }
        //送信者を確定
        //await fillUserFromBotMessage(bot, message, "reply_user");
        //送信内容フォーマット
        //await formatMessage(bot, message);
    };
    ;
    return MessageWorker;
}());
