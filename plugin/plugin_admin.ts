import { Botkit, BotWorker, BotkitMessage } from "botkit";
const UtilsService = require("../service/utils");

module.exports = function(controller: Botkit) {

  controller.middleware.receive.use(function(bot:BotWorker, message: BotkitMessage, next) {
    //送信者は必須項目、送信者不明の場合、警告ログを出力し、メッセージを破棄
    if(!message.author) {
      console.warn("送信者不明のメッセージが届いた、", message);
      return;
    }
    //controller.redis.test(message.author);
    
    //受信メッセージより、受信者を確定
    //comFunc.onReceivedMessage(bot:BotWorker, message: BotkitMessage);
    console.log("receive message------>",message, UtilsService.nowTimeStamp());
   
    // //情報転送
    // if(message.author != controller.MMC_UID){
    //   //管理センターへ転送
    //   controller.transferToMMCMessage(message);
    // }else{
    //   //グループへ転送
    //   controller.transferToUserGroupMessage(message);
    // }
    next();
    
  });

  controller.middleware.send.use(function(bot:BotWorker, message: BotkitMessage, next) {
    
    //１，内製メッセージ(hello, help等jsonファイルに記載)
    // 内容テキストだけの場合、ユーザ情報等補足が必要
    //beforeSendingMessage(bot:BotWorker, message: BotkitMessage);
    //saveMessageHistory(bot:BotWorker, message: BotkitMessage);
    //messageWoker
    if(message.type==="ask" || message.type ==="question"){
      message.type="message";
    }

    console.log("send message------>",message);
    next();

    //==============================================
    //２，受信者はMMCではなく、転送メッセージでもない場合、MMCへ転送
    // if(message.reply_user != controller.MMC_UID && !message.channelData.isTranfering){
    //   controller.transferToMMCMessage(message);
    // }
    
  });
  
  
  controller.on("SaveMessage", async function(bot:BotWorker, message: BotkitMessage){
    
    // if(!message.incoming_message){
    //   message.incoming_message = {};
    // }
    let filter = { author: message.author, id: message.id };
    let content = {
      type: message.type,
      text: message.text,
      data: message.data,
      author: message.author,
      timestamp: message.incoming_message.timestamp?message.incoming_message.timestamp: UtilsService.nowTimeStamp()
    }
    // controller.storage.histories.save(filter, content, (error, resp)=>{
    //   if(error){
    //     throw error;
    //   }
    // });
  })

  controller.on("SaveUserProfie", async function(bot:BotWorker, message: BotkitMessage){
    console.log("SaveUserProfie=========<message>", message);
    // let filter = { id: message.user};
    // //ユーザ情報存在しない場合、処理終了
    // let user_profile;

    // if(message.user_profile){
    //   Object.assign(user_profile, message.user_profile);
    // }
    // user_profile.id = "";
    // if(message.user){
    //   user_profile.id = message.user;
    // }
    // user_profile.name = "";
    // if(message.username){
    //   user_profile.name = message.username;
    // }
    // user_profile.mail = "";
    // if(message.mail && message.mail != "回答無し"){
    //   user_profile.mail = message.mail
    // }
    // user_profile.telno = "";
    // if(message.telno && message.telno != "回答無し"){
    //   user_profile.telno = message.telno
    // }
    // if(message.channel){
    //   user_profile.channel = message.channel;
    // }
    // user_profile.timestamp = UtilsService.nowTimeStamp();

    // let content = {
    //   name: message.username?message.user_profile.name:message.user_profile.id,
    //   mail: message.user_profile.mail?message.user_profile.mail:'',
    //   telno: message.user_profile.telno?message.user_profile.telno:'',
    //   dispname: message.user_profile.dispname?message.user_profile.dispname:'',
    //   timestamp: message.user_profile.timestamp?message.user_profile.timestamp: new Date()
    // }

    // controller.storage.users.save(filter, user_profile, (error, resp)=>{
    //   if(error){
    //     throw error;
    //   }
    // });
  })
}
