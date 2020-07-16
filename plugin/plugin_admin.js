
module.exports = function(controller) {
  
  controller.middleware.receive.use(function(bot, message, next) {
    //送信者は必須項目、送信者不明の場合、警告ログを出力し、メッセージを破棄
    if(!message.author) {
      console.warn("送信者不明のメッセージが届いた、", message);
      return;
    }
    //controller.redis.test(message.author);
    
    //受信メッセージより、受信者を確定
    controller.onReceivedMessage(bot, message);
    //controller.saveMessageHistory(message);
    
    
    //情報転送
    if(message.author != controller.MMC_UID){
      //管理センターへ転送
      controller.transferToMMCMessage(message);
    }else{
      //グループへ転送
      controller.transferToUserGroupMessage(message);
    }
    //console.log("receive ==========message", message);
    next();
    //console.log("receive message===============>:",message.type, message.author, message.reply_user, message.text);
  });

  controller.middleware.send.use(function(bot, message, next) {
    
    //１，内製メッセージ(hello, help等jsonファイルに記載)
    // 内容テキストだけの場合、ユーザ情報等補足が必要
    controller.beforeSendingMessage(bot, message);
    controller.saveMessageHistory(bot, message);
    
    next();

    //==============================================
    //２，受信者はMMCではなく、転送メッセージでもない場合、MMCへ転送
    if(message.reply_user != controller.MMC_UID && !message.channelData.isTranfering){
      controller.transferToMMCMessage(message);
    }
    
  });
  
}
