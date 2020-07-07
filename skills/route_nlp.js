const utils = require("../service/utils");
const detectTextIntent = require("../service/df-intent");
const getMovieDetail = require("../service/movie");

module.exports = function(controller) {

  //ユーザからのメッセージを解析
  controller.on('message,text',  onUnknowMessageReceived);
  
  async function onUnknowMessageReceived(bot, message){
    //管理センターからのメッセージの場合、    
    if (message.user === controller.MMC_UID){
      //admin ->bot -> user
      controller.trigger('fallback', bot, message);
      return;
    }
    //伝送メッセージを無視
    if (message.isTranfering ) return;
    //伝送メッセージを無視
    if (message.channelData && message.channelData.isTranfering) return;

    console.log(`onUnknowMessageReceived =============>:`, message);
    
    let ret = await detectTextIntent([message.text]);

    Object.assign(message, ret);
    message.actionName = utils.getAction(ret);
    message.fulfillmentText = utils.getfulfillmentText(ret);
    message.parameters = utils.getParameters(ret);

    // GOOGLE DialogFlowより回答が来た場合、ユーザへ返す
    if(message.fulfillmentText){
      bot.reply(message, {
        reply_user: message.user,
        text: message.fulfillmentText,
        fulfillmentText: message.fulfillmentText,
      });
      return;
    }
    if (message.actionName && message.parameters){
      //映画の情報を取得する
      const title = utils.getParameterValue(message, "movie");
      if(title){
        const movie = await getMovieDetail(title);
        onMovieBack(movie, bot, message);
      }else{
        console.log("unknown===action:", message.actionName);
        controller.trigger('unknown', bot, message);
      }
    }else{
      controller.trigger('unknown', bot, message);
    }
  }
  
  async function onMovieBack(movie, bot, message){
    const text =`${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}`;
    console.log(`movie=============:${JSON.stringify(movie)}`);
    console.log(`text=============:${text}`);
    const jsonBody = { 
      text: text, 
      "fulfillmentText": text,
      "payload": {
        "google": {
          "expectUserResponse": true,
          "richResponse": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": text
                }
              }
            ]
          }
        }
      }
    };
    await bot.reply(message, jsonBody);
  }

}