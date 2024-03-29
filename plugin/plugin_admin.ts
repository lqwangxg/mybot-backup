import { Botkit, BotWorker, BotkitMessage } from "botkit";
const UtilsService = require("../service/utils");

module.exports = function(controller: any) {

  controller.middleware.receive.use(function(bot:BotWorker, message: BotkitMessage, next) {
    //if the sender of message.user is null, omit the message.
    if(!message.user) {
      console.warn("送信者不明のメッセージが届いた、破棄されています。", message);
      return;
    }
    
    //受信メッセージより、受信者を確定
    formatReceiveMessage(bot, message);
    //if it's a new guest id, save the id into userlist 
    registUser(bot,message);
    
    console.log("receive message------>", UtilsService.nowTimeStamp(), message);
    
    //情報転送
    if(message.author != controller.MMC_UID){
      //管理センターへ転送
      transferToMMCMessage(bot, message);
    }else{
      //グループへ転送
      transferToUserMessage(bot, message);
    }
    next();
    
  });

  /**
   * 
   * @param bot 
   * @param message 
   */
  function formatReceiveMessage (bot: BotWorker, message: BotkitMessage) {
    let localUser = "";
    if (message.conversation && message.conversation.id) {
      localUser = message.conversation.id;
    } else if (message.recipient && message.recipient.id) {
      localUser = message.recipient.id;
    } else if (bot.getConfig('reference')) {
      let reference = bot.getConfig('reference');
      localUser = reference.user.id;
    }

    if(!message.user){
      message.user = localUser;
    }
    //bot.controller.dialogSet.find("")
  };
  
  /**
   * 
   * @param bot 
   * @param message 
   */
  async function registUser(bot, message) {
    if(!message.author)return;
    let client = bot.controller.botClients.find((u) => message.author === u.id);
    //保存
    if (!client) {
      client = {
        id: message.user,
        bot: bot,
        context: message.context,
        reference: message.reference,
      };
      bot.controller.botClients.push(client);
    }
  };

  async function transferToMMCMessage(bot,message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering) return;

    //自身へ転送しない
    if (message.author === process.env.MMC_UID) return;
    
    //管理センターへ転送
    transferMessage(bot, message, process.env.MMC_UID, process.env.MMC_UID);
  }
  
  async function transferMessage (bot,message, destId, transferType) {
    let client = bot.controller.botClients.find((u) => destId === u.id);
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
  async function transferToUserMessage(bot, message) {
    //転送メッセージの場合、再転送しない
    if (message.isTranfering ) return;

    // if(!message.data.group)return;
    // let selfId = message.author;

    // message.data.group.forEach((toId) => {
    //   //自身に転送しない,chatbotにも転送しない
    //   if (selfId === toId || "bot" === toId || process.env.MMC_UID === toId) return;
      
    //   //お客様へ転送
    //   transferMessage(bot, message, toId, 'group');
    // });
  };

  /**
   * Format channelData before message sending.
   * @param bot 
   * @param message 
   */
  function formatSendMessage(bot, message) {
    if(message.isTranfering){
      return;
    }

    if (!message.channelData) {
      message.channelData = {};
    }
    
    if(message.recipient && message.recipient.id){
      message.channelData.recipient = message.recipient.id;
    }
    message.channelData.timestamp = UtilsService.nowTimeStamp();
    if(message.from && message.from.id){
      message.channelData.author = message.from.id;
    }
  };

  controller.middleware.send.use(function(bot:BotWorker, message: BotkitMessage, next) {
    
    //１，内製メッセージ(hello, help等jsonファイルに記載)
    // 内容テキストだけの場合、ユーザ情報等補足が必要
    formatSendMessage(bot, message);
    
    //messageWoker
    if(message.type==="ask" || message.type ==="question"){
      message.type="message";
    }

    //console.log("send message------>",message);
    next();

    //==============================================
    //２，受信者はMMCではなく、転送メッセージでもない場合、MMCへ転送
    if(message.reply_user != controller.MMC_UID && !message.channelData.isTranfering){
      transferToMMCMessage(bot, message);
    }
    
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
