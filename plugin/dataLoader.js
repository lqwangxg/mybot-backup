'use strict';

let fs = require("fs");

module.exports = async function (controller) {

  let buildPath = require("path");
  let initQADataPath = buildPath.join(__dirname, "init_data");

  fs.readdirSync(initQADataPath).forEach((file) => {
    var filePath = buildPath.join(initQADataPath, file);
    fs.readFile(filePath, (err, data) => {
      if (err){
        console.log(err);
      }else {
        var json = JSON.parse(data);
        //your code using json object
        var isRightAdapter = false;
        if(json.adapter && Array.isArray(json.adapter)){
          if(json.adapter.includes("default")){
            isRightAdapter= true;
          }else{
            if (json.adapter.includes(controller.adapter.name)) {
              isRightAdapter= true;
            }
          }
        }else{
          isRightAdapter= true;
        }
        if(isRightAdapter){
          hearsFromJson(controller, json);
        }
      }
    })
  });

  async function hearsFromJson(controller, json){
    if(!json){
      return;
    }
    //console.log('json====================>', json.hears);
    if(json.hears && Array.isArray(json.hears)){
      json.hears.forEach(qa => hearsQA(controller, qa));
    }
  }

  async function hearsQA(controller, qa){
    //console.log('json==qa====================>', qa);
    if(!qa.events){
      return;
    }
    if(!qa.keywords){
      if(Array.isArray(qa.keywords)){
        qa.keywords = qa.keywords.map(key=>{
          if(key.match(/^\/.+\/$/i)){
            return new RegExp(key);
          }else{
            return key;
          }
        })
      }
      controller.hears(qa.keywords, qa.events, async function(bot, message) {
        //await bot.beginDialog('iot');
        await replyMessage(bot, message, qa.replys);
      });
    }else{
      controller.on(qa.events, async function(bot, message) {
        //await bot.beginDialog('iot');
        await replyMessage(bot, message, qa.replys);
      });
    }
  }
  
  async function replyMessage(bot, message, replys){
    if(!replys){
      return;
    }

    if(typeof(replys)==="string"){
      await bot.reply(message, {
        type:"text",
        text: replys
      });
      return;
    }
    if(Array.isArray(replys)){
      replys.forEach(txt => {
        replyMessage(bot, message, txt)
      });
      return;
    }
    if(typeof(replys)==="object"){
      await bot.reply(message, {
        type:"text",
        text: replys.text,
        quick_replies: replys.quick_replies
      });
      return;
    }
    

    
  }

}