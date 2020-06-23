'use strict';

let fs = require("fs");
const { BotkitConversation } = require("botkit");

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
    //Conversation Dialog Regist
    if(json.dialogs && Array.isArray(json.dialogs)){
      json.dialogs.forEach(dialog=> registDilaog(controller, dialog));
    }

    if(json.hears && Array.isArray(json.hears)){
      json.hears.forEach(qa => hearsQA(controller, qa));
    }

  }
  async function registDilaog(controller, dialog){
    if(!dialog.name || !dialog.confirms){
      return; 
    }
    let convo = new BotkitConversation(dialog.name, controller);
    dialog.confirms.forEach(confirm=>addConfirm(convo, confirm));
    controller.addDialog(convo);
  }
  async function addConfirm(convo, confirm){
    if(confirm.type==="ask"){
      if(Array.isArray(confirm.handlers)){
        let handlers =[];
        confirm.handlers.forEach(handler=>{
          convertHandler(handler);
          console.log("addConfirm------>handler:", handler)
          handlers.push(handler);
        });
        
        convo.ask({
          text:confirm.text,
          quick_replies:confirm.quick_replies
        }, handlers, confirm.params)

      }else{
        convertHandler(confirm.handlers);
        convo.ask({
          text:confirm.text,
          quick_replies:confirm.quick_replies
        }, confirm.handlers, confirm.params)
      }
      
    }else if(confirm.type==="question"){
      if(Array.isArray(confirm.handlers)){
        let handlers =[];
        confirm.handlers.forEach(handler=>{
          convertHandler(handler);
          console.log("addConfirm------>handler:", handler)
          handlers.push(handler);
        });
        
        convo.addQuestion({
          text:confirm.text,
          quick_replies:confirm.quick_replies
        }, handlers, confirm.params, confirm.thread_name)

      }else{
        convertHandler(confirm.handlers);
        convo.addQuestion({
          text:confirm.text,
          quick_replies:confirm.quick_replies
        }, confirm.handlers, confirm.params, confirm.thread_name);
      }
    }else if(confirm.type==="action"){
      if(confirm.thread_name){
        convo.addAction(confirm.action,confirm.thread_name);
      }else{
        convo.addAction(confirm.action);
      }
    }
  }
  async function convertHandler(handler){
    if(handler.type==="regex" && handler.pattern){
      handler.pattern = new RegExp(handler.pattern);
    }
    if(handler.thread_name){
      handler.handler = async(response, convo, bot) => {
        await convo.gotoThread(handler.thread_name);
      }
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
        if(qa.replys){
          await replyMessage(bot, message, qa.replys);
        }
        if(qa.dialog){
          await bot.beginDialog(qa.dialog);
        }
      });
    }else{
      controller.on(qa.events, async function(bot, message) {
        if(qa.replys){
          await replyMessage(bot, message, qa.replys);
        }
        if(qa.dialog){
          await bot.beginDialog(qa.dialog);
        }
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