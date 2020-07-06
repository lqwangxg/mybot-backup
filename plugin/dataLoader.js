'use strict';

let fs = require("fs");
let buildPath = require("path");
let initQADataPath = buildPath.join(__dirname, "init_data");

const { BotkitConversation } = require("botkit");

module.exports = async function (controller) {
  if(!controller.vars){
    controller.vars = {};
  }
  //====================================================
  fs.readdirSync(initQADataPath).forEach((file) => {
    var filePath = buildPath.join(initQADataPath, file);
    console.log("filePath:", filePath);

    fs.readFile(filePath, (err, data) => {
      if (err){
        console.log(err);
      }else {
        var json = JSON.parse(data);
        let isRightAdapter = isValidAdapter(controller, json);
        if(isRightAdapter){
          // init trigger on
          triggerOnFromJson(controller, json);

          // init trigger hears
          hearsFromJson(controller, json);

          // init dialog 
          dialogFromJson(controller, json);
        }
      }
    })
  });
  //====================================================
  async function isValidAdapter(controller, json){
    //your code using json object
    var isRightAdapter = false;
    if(json.adapter){
      if(Array.isArray(json.adapter)){
        if(json.adapter.includes("default")){
          isRightAdapter= true;
        }else if (json.adapter.includes(controller.adapter.name)) {
          isRightAdapter= true;
        }
      }else if ("string" === typeof(json.adapter)) {
        if (json.adapter === controller.adapter.name) {
          isRightAdapter= true;
        }
      }
    }else{
      isRightAdapter= true;
    }
    return isRightAdapter;
  }
  //====================================================
  async function triggerOnFromJson(controller, json){
    if("on" != json.type || !json.script){
      return;
    }

    if(Array.isArray(json.script)){
      json.script.forEach(script=> AddOnTriggerScript(controller, script));
    }else{
      AddOnTriggerScript(controller, json.script)
    }
  }

  async function AddOnTriggerScript(controller, script){
    controller.on(script.events, async function(bot, message) {
      console.log("On Trigger Script received, ★reply=====>: ", script);
      if(script.replys){
        await replyMessage(bot, message, script.replys);
      }
      if(script.dialog){
        await bot.beginDialog(script.dialog);
      }
    });
  }
  //====================================================
  async function hearsFromJson(controller, json){
    if("hears" != json.type || !json.script){
      return;
    }
    
    if(Array.isArray(json.script)){
      json.script.forEach(script=> AddHearTriggerScript(controller, script));
    }else{
      AddHearTriggerScript(controller, json.script)
    }
  }

  async function AddHearTriggerScript(controller, script){
    script.keywords = convertToRegex(script.keywords);
    controller.hears(script.keywords, script.events, async function(bot, message) {
      console.log("AddHearTriggerScript: ", script);
      if(script.required && script.required.key && script.required.dialog 
        && !isRequiredValid(controller, script.required.key)){
        console.log(" heard message:", message);
        controller.vars.lastMessage = {
          type: message.type,
          text: message.text,
          user: message.user,
          channel: message.channel,
          value: message.value,
          data: {text: message.data.text},
          user_profile: message.user_profile,
          reply_user: message.reply_user 
        };
        
        //Object.assign(controller.vars.lastMessage.reference, message.reference); 
        await bot.beginDialog(script.required.dialog);
        return;
      }

      if(script.replys){
        await replyMessage(bot, message, script.replys);
      }
      if(script.dialog){
        await bot.beginDialog(script.dialog);
      }
    });
  }
  function isRequiredValid(controller, key){
    if(Array.isArray(key)){
      return key.every(key=> !!controller.vars[key]);
    }else{
      return !!controller.vars[key]
    }
  }
  //====================================================
  async function dialogFromJson(controller, json){
    if("dialog" != json.type || !json.script || !json.id){
      return;
    }

    let convo = new BotkitConversation(json.id, controller);
    json.script.forEach(s=>addScript(convo, s));
    controller.addDialog(convo);
  }
  async function addScript(convo, script){
    addAction(convo, script);
    addAsk(convo, script);    
    addMessage(convo, script);
    addQuestion(convo, script);
    
    addBefore(convo, script.before, script.thread_name);
    addAfter(convo, script);    
  }
  //====================================================  
  async function addAction(convo, script){
    if("action" != script.type){
      return;
    }

    //console.log("addAction===================> :", confirm)
    if(script.thread_name){
      convo.addAction(script.action, script.thread_name);
    }else{
      convo.addAction(script.action);
    }
  }
  async function addAsk(convo, script){
    if("ask" != script.type){
      return;
    }

    if(Array.isArray(script.collect.options)){
      script.collect.options = script.collect.options.map(option=>{
        return convertAnswerHandler(option);
      });
    }else{
      script.collect.options = convertAnswerHandler(script.collect.options);
    }
    //console.log("addAsk===================> :", confirm)
    if(!script.collect || !script.collect.options || script.collect.options.length === 0){
      convo.ask({
        user: convo.id,
        text:script.text,
        quick_replies:script.quick_replies
      }, async()=>{}, script.collect.key);
    }else{
      convo.ask({
        user: convo.id,
        text:script.text,
        quick_replies:script.quick_replies
      }, script.collect.options, script.collect.key)
    }
    console.log("addAsk key====================>:", script.collect.key);
    await onVarChange(convo, script.collect.key);
  }
  async function addQuestion(convo, script){
    if("question" != script.type){
      return;
    }
    if(script.collect && script.collect.options){
      if(Array.isArray(script.collect.options)){
        script.collect.options = script.collect.options.map(option=>{
          return convertAnswerHandler(option);
        });
      }else{
        script.collect.options = convertAnswerHandler(script.collect.options);
      }
    }

    //console.log("addQuestion===================> :", confirm)
    if(!script.collect || !script.collect.options || script.collect.options.length === 0){
      convo.addQuestion({
        user: convo.id,
        text:script.text,
        quick_replies:script.quick_replies
      }, async ()=>{}, script.collect.key, script.thread_name)
    }else{
      convo.addQuestion({
        user: convo.id,
        text:script.text,
        quick_replies:script.quick_replies
      }, script.collect.options, script.collect.key, script.thread_name)
    }
    console.log("addQuestion key=========>:", script.collect.key, "==next==>", script.thread_name);
    await onVarChange(convo, script.collect.key);
  }
  async function addMessage(convo, script){
    if("message" != script.type){
      return;
    }
    
    //console.log("addMessage===================> :", confirm)
    if(script.thread_name){
      convo.addMessage(
        {
          user: convo.id,
          text:script.text
        }, 
        script.thread_name);
    }else{
      convo.addMessage({
        user: convo.id,
        text:script.text
      });
    }
  }
  
  async function addBefore(convo, before, thread_name){
    if(!before){
      return;
    }

    console.log("addBefore=================from=> :", thread_name, "==>next:", before.thread_name)
    if(Array.isArray(before)){
      before.forEach(before=>{
        addBefore(convo, before, thread_name);
      });
    }else{
      
      //指定Threadへ飛ばす前の処理
      await convo.before(thread_name, async (convoBefore, bot)=>{
        console.log("before======> :", thread_name, before.thread_name, controller.vars)
        
        let varValue = "";
        //対応変数がまだない場合、処理しない
        if(controller.vars[before.key]){
          varValue = controller.vars[before.key];
        }else if(convoBefore.vars[before.key]){
          varValue = convoBefore.vars[before.key];
        }
        console.log("before=============> :", thread_name, before.thread_name, varValue, convoBefore);
        if(!varValue)return;

        var option = convertToRegex(before);
        //入力チェック正常の場合、before.thread_nameへ
        if(option.type==="regex" && option.pattern.test(varValue)){
          console.log("before======> :",thread_name, " goto==> ",before.thread_name);
          convoBefore.gotoThread(before.thread_name);
          return;
        }
        //入力チェック正常の場合、before.thread_nameへ
        if(option.type==="string" && option.pattern === varValue){
          console.log("before======> :",thread_name, " goto==> ",before.thread_name);
          convoBefore.gotoThread(before.thread_name);
          return;
        }
      });
    }
  }
 
  async function addAfter(convo, script){
    if(!script.after){
      return;
    }
    console.log("addAfter======confirm> :", script)
    
    let datakey = "datakey";
    // if(script.keywords){
    //   datakey = script.keywords;
    // }else if(script.action){
    //   datakey = script.action;
    // }else if(script.thread_name){
    //   datakey = script.thread_name;
    // }

    convo.after((results, bot)=>{
      controller.vars[datakey] = results;
      console.log(`after ==========> key:${datakey}, result:${results}`);
    });
  }

  async function onVarChange(convo, key){
    if("string" === typeof(key)){
      convo.onChange(key, async(response)=>{
        controller.vars[key] = response;
        //console.log(`onVarChange===========================[${key}]:[${JSON.stringify(response)}]`);
      });
    }else if(Array.isArray(key)){
      key.forEach(key => {
        convo.onChange(key, async(response)=>{
          controller.vars[key] = response;
          //console.log(`onVarChange=========================[${key}]:[${JSON.stringify(response)}]`);
        });
      });
    }
  }

  //====================================================
  function convertToRegex(option){
    if(!option)return option;
    
    if (typeof(option) === 'string' && option.match(/^\/(.+)\/$/)) {
      option = new RegExp(option.substring(1,option.length-1));
    }else if(option.type==="regex" && option.pattern){
      option.pattern = new RegExp(option.pattern);
    }else if (Array.isArray(option)){
      option = option.map(op => convertToRegex(op));
    }
    //console.log("convertToRegex:",   option)
    return option;
  }
  function convertAnswerHandler(option){
    if(!option)return option;

    // Regexの場合、Regexに変換
    option = convertToRegex(option);

    if(option.thread_name){
      option.handler = async(response, convo, bot) => {
        console.log("convertAnswerHandler answer============>>>>>>>:", option.thread_name, response);
        await convo.gotoThread(option.thread_name);
      }
    }
    return option;
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