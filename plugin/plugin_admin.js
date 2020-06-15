module.exports = function(controller) {
  
  controller.middleware.receive.use(function(bot, message, next) {
    console.log("middleware.receive======type/text:", message.type, message.text);
    //ユーザからの受信メッセージをセンターへ転送
    if(message.user){
      if(message.user!="admin"){
        //ユーザからの情報だけ、センターへ転送、センターからには無視
        controller.trigger('to_mmc', bot, message);
      }else if(message.origin_user && message.origin_user !="admin"){
        //センターからの情報を特定ユーザへ転送
        controller.trigger('to_user', bot, message);
      }
    }
    
    next();
  });

  controller.middleware.send.use(function(bot, message, next) {
    console.log("middleware.send=========type/event/text:", message.type, message.event, message.text);
    //ユーザへの送信メッセージをセンターへ転送
    if(message.reply_user){
      if(message.reply_user!="admin"){
        //ユーザへ送る情報をセンターへ転送、センターへ送る情報を既存通り
        controller.trigger('to_mmc', bot, message);
      }
      
    }
    
    next();
  });

  controller.transferMessage = function(message, dest, callback){
    //転送内容がなければ、転送しない
    if(!message.text) return;
    //転送不要の場合、転送しない
    if(message.transferSkip)return;
    //目的地未設定防止
    if(!dest) return;

    if(typeof(dest) == "string"){
      dest = [dest];
    }

    //受信者存在しなければ、ディフォルト:admin
    for (var e = 0; e < dest.length; e++) {
      //宛先を取得
      const destBot = controller.botClients.find(element => dest[e] === element.user);
      //送信先が見つからない場合、飛ばす
      if(!destBot)continue;
      
      let messageToC = {};
      Object.assign(messageToC, message);
      //メッセージタイプ設定、Client側のon(eventType, callback)処理の為
      messageToC.type = "message";
      messageToC.dest = dest[e];
      messageToC.transferSkip = true; //重複送信防止
      
      if(message.askHuman){
        //人工応答を希望する場合、
        messageToC.from = "ChatBot";
        transferSay(destBot, messageToC, callback);
      }else if(message.answerUser){
        //人工応答から回答する場合、
        messageToC.from = "ChatBot";
        transferSay(destBot, messageToC, callback);
      }else if(message.isSend){
        //送信メッセージをセンターお知らせ
        messageToC.from = "ChatBot";
        transferSay(destBot, messageToC, callback);
      }else if(message.isReceive){
        //受信メッセージをセンターお知らせ
        messageToC.to = "ChatBot";
        transferSay(destBot, messageToC, callback);
      }
    
    }

    function transferSay(bot, message, callback){
      bot.say(message, (err, msg)=>{
        if(err){
          console.error(err);
        }
        //後始末処理があるかもしれません
        if(callback){
          callback(bot, message);
        }

        //後片付け
        message.askHuman = false;
        message.answerUser = false;
        
        console.log(`====transfer from:${message.user}, to:${message.to}, dest:${dest}, text:${message.text}`);
      });
    }

    function transferAsk(bot, message, callback){
      bot.startConversation(message, function(err, convo) {
        // set up member threads
        convo.ask({ text: message.text }, [
          {
            pattern : '.*',
            callback: function(res, convo) {
              console.log("============transferAsk in addQuestion===========res===", res);
              //callBackTransfer(res, convo);
              convo.gotoThread('callBackTransfer');
              convo.next();
            }
          },
          {
            default: true,
            callback: function(res, convo) {
              convo.next();
            }
          }
        ]);

        convo.addQuestion({
          text:`回答内容:[${message.text}]、\nそのままユーザ様へ転送しても宜しいでしょうか？`,
          quick_replies: [
            {
              title: 'はい',
              payload: 'はい'
            },
            {
              title: 'いいえ',
              payload: 'いいえ'
            }
          ]
        },[{
            pattern: 'はい',
            callback: function(res, convo){
              convo.gotoThread('callBackTransferYes');
              console.log("==========callback====callBackTransferYes=========", res);
              convo.next();
            }
          },
          {
            default: true,
            callback: function(res, convo) {
              convo.next(); 
            }
          }
        ], {}, "callBackTransfer");

        convo.addQuestion({
          text:`回答内容:[${message.text}]、\nそのままユーザ様へ転送しても宜しいでしょうか？`,
          quick_replies: [
            {
              title: 'はい',
              payload: 'はい'
            },
            {
              title: 'いいえ',
              payload: 'いいえ'
            }
          ]
        },[{
            pattern: 'はい',
            callback: function(res, convo){
              console.log("==========callback====callBackTransferYes=========", res);
              callBackTransferYes(res,convo);
              convo.next();
            }
          },
          {
            default: true,
            callback: function(res, convo) {convo.next(); }
          }
        ], {}, "callBackTransferYes");

      });

      function callBackTransferYes(message, convo){
        convo.say({text:"ユーザに転送します。", transferSkip: true});
        
        let msg ={};
        Object.assign(msg, message);
        msg.transferFromHuman = true;
        console.log("====================callBackTransferYes=========", message);
        
        convo.next();
      }
    }
  }
}
