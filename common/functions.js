/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function(controller) {
  
  controller.fillUser = async function(bot, message){
    //ユーザへの送信メッセージをセンターへ転送
    if(!message.channelData){
      message.channelData= {};
    }

    if(!message.channelData.user){
      message.channelData.user= "bot";
    }

    if(!message.reply_user){
      if(message.conversation && message.conversation.id){
        message.channelData.reply_user = message.conversation.id;
      }else if(message.recipient && message.recipient.id){
        message.channelData.reply_user = message.recipient.id;
      }else if(bot._config && bot._config.reference && bot._config.reference.user && bot._config.reference.user.id){
        message.channelData.reply_user = bot._config.reference.user.id;
      }
    }
    if(!message.channelData.groupId){
      message.channelData.groupId = message.channelData.reply_user;
    }
    if(!message.channelData.group){
      message.channelData.group = [];
    }
    if(!message.channelData.group.includes(message.channelData.user)){
      message.channelData.group.push(message.channelData.user);
    }
    if(!message.channelData.group.includes(message.channelData.reply_user)){
      message.channelData.group.push(message.channelData.reply_user);
    }
  }
  
  controller.transferMessage = async function(bot, message){
    controller.fillUser(bot, message);
    console.log("transferMessage===========>",message.channelData.reply_user, message.text);
    
    message.isTranfering = true;
    
    if(message.channelData.reply_user != "admin"){
      controller.tranferToMMC(bot, message, "message");
    //}else
      //controller.tranferToUser(bot, message, "message");
    }
  }

  controller.tranferToMMC = async function (bot, message, event){
    let admin = controller.botClients.find(element => "admin" === element.user);
    if(!admin){
      // //管理センターはOfflineのため、伝送できません。
      // bot.say({
      //   text:"只今人工受付時間外です、メッセージを下さい。",
      //   reply_user: message.user
      // });
      return;
    }

    console.log("tranferToMMC  ===========>",message.channelData.reply_user, message.text);
    await admin.bot.changeContext(admin.message.reference);
    //admin.bot.say(message);
    admin.bot.say({
      type:"notified",
      event: event,
      text: message.text,
      channelData:{
        user: "bot",
        reply_user: admin.user,
        origin_user: message.channelData.reply_user,
      },
      channel:message.channel,
      incomming_message:message.incomming_message,
      reference: message.reference
    }); 
  }

  controller.tranferToUser = async function (bot, message, event){
    let client = controller.botClients.find(element => message.origin_user === element.user);
    if(client){
      // if(!event){
      //   if(message.event){
      //     event = message.event;
      //   }else{
      //     event = "unknown";
      //   }
      // }
      console.log("tranferToUser  ===========>",message.channelData.reply_user, message.text);
      await client.bot.changeContext(client.message.reference);

      //client.bot.say(message);
      client.bot.say({
        type:"notified",
        event: event,
        text: message.text, 
        channelData:{
          user: "bot",
          reply_user: message.reply_user,
          origin_user: message.user,
        },
        channel:message.channel,
        incomming_message:message.incomming_message,
        reference: message.reference
      });
    }
  }

}
