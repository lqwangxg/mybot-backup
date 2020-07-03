module.exports = function(controller) {
  
  controller.middleware.receive.use(function(bot, message, next) {
    //送信者は必須項目、送信者不明の場合、警告ログを出力し、メッセージを破棄
    controller.convertMessage(bot, message);

    if(!message.channelData.author) {
      console.warn("送信者不明のメッセージが届いた、", message);
      return;
    }

    //送信転送：転送先が指定される場合、転送する
    controller.transferGroupMessage(message); 

    next();
  });

  controller.middleware.send.use(function(bot, message, next) {
    
    //１，内製メッセージ(hello, help等jsonファイルに記載)
    // 内容テキストだけの場合、ユーザ情報等補足が必要
    controller.convertMessage(bot, message);
    
    //==============================================
    //２，ChatBotよりお客様へ送信する場合、転送フラグを立てる場合、転送不要
    //if(message.)


    // if(message.)
    // controller.transferMessage(bot, message);
    // console.log("send ==========message", message.channelData, message.data);
    
    next();
  });
  
}
