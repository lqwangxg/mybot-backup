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
      console.log("AddTriggerScript: ", script);
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
    json.script.forEach(confirm=>addConfirm(convo, confirm));
    controller.addDialog(convo);
  }
  async function addConfirm(convo, confirm){
    addAction(convo, confirm);
    addAsk(convo, confirm);    
    addMessage(convo, confirm);
    addQuestion(convo, confirm);
    
    addBefore(convo, confirm.before, confirm.thread_name);
    addAfter(convo, confirm);
    
  }
  //====================================================  
  async function addAction(convo, confirm){
    if("action" != confirm.type){
      return;
    }

    //console.log("addAction===================> :", confirm)
    if(confirm.thread_name){
      convo.addAction(confirm.action,confirm.thread_name);
    }else{
      convo.addAction(confirm.action);
    }
  }
  async function addAsk(convo, confirm){
    if("ask" != confirm.type){
      return;
    }

    if(Array.isArray(confirm.collect.options)){
      confirm.collect.options = confirm.collect.options.map(option=>{
        return convertAnswerHandler(option);
      });
    }else{
      confirm.collect.options = convertAnswerHandler(confirm.collect.options);
    }
    //console.log("addAsk===================> :", confirm)
    if(confirm.collect.options.length===0){
      convo.ask({
        text:confirm.text,
        quick_replies:confirm.quick_replies
      }, async()=>{}, confirm.collect.key);
    }else{
      convo.ask({
        text:confirm.text,
        quick_replies:confirm.quick_replies
      }, confirm.collect.options, confirm.collect.key)
    }
    await onVarChange(convo, confirm.collect.key);
  }
  async function addQuestion(convo, confirm){
    if("question" != confirm.type){
      return;
    }
    if(confirm.collect && confirm.collect.options){
      if(Array.isArray(confirm.collect.options)){
        confirm.collect.options = confirm.collect.options.map(option=>{
          return convertAnswerHandler(option);
        });
      }else{
        confirm.collect.options = convertAnswerHandler(confirm.collect.options);
      }
    }

    //console.log("addQuestion===================> :", confirm)
    if(confirm.collect.options.length===0){
      convo.addQuestion({
        text:confirm.text,
        quick_replies:confirm.quick_replies
      }, async()=>{}, confirm.collect.key, confirm.thread_name)
    }else{
      convo.addQuestion({
        text:confirm.text,
        quick_replies:confirm.quick_replies
      }, confirm.collect.options, confirm.collect.key, confirm.thread_name)
    }
    await onVarChange(convo, confirm.collect.key);
  }
  async function addMessage(convo, confirm){
    if("message" != confirm.type){
      return;
    }
    
    //console.log("addMessage===================> :", confirm)
    if(confirm.thread_name){
      convo.addMessage(confirm.text,confirm.thread_name);
    }else{
      convo.addMessage(confirm.text);
    }
  }
  
  async function addBefore(convo, before, thread_name){
    if(!before){
      return;
    }

    console.log("addBefore===================> :", thread_name, before)
    if(Array.isArray(before)){
      before.forEach(before=>{
        addBefore(convo, before, thread_name);
      });
    }else{
      //データがない場合、処理対象外
      if(!before.key){
        return;
      }
      //指定Threadへ飛ばす前の処理
      await convo.before(thread_name, async (convoBefore, bot)=>{
        console.log("before======> :", thread_name, before.thread_name, controller.vars)

        //対応変数がまだない場合、処理しない
        if(!controller.vars[before.key]){
          return;
        }

        let varValue = controller.vars[key];
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
 
  async function addAfter(convo, confirm){
    //console.log("addAfter======confirm> :", confirm)

    if(!confirm.after){
      return;
    }
    let datakey = "datakey";
    if(confirm.keywords){
      datakey = confirm.keywords;
    }else if(confirm.action){
      datakey = confirm.action;
    }else if(confirm.thread_name){
      datakey = confirm.thread_name;
    }

    await convo.after((results, bot)=>{
      controller.vars[datakey] = results;
      console.log(`after ==========> key:${datakey}, result:${results}`);
    });
  }

  async function onVarChange(convo, key){
    if("string" === key){
      convo.onChange(key, async(response, convo, bot)=>{
        controller.vars[key] = response;
        console.log(`onVarChange======[${key}]:[${response}]`);
      });
    }else if(Array.isArray(key)){
      key.forEach(key => {
        convo.onChange(key, async(response, convo, bot)=>{
          controller.vars[key] = response;
          console.log(`onVarChange======[${key}]:[${response}]`);
        });
      });
    }
  }

  //====================================================
  function convertToRegex(message){
    if (typeof message === 'string' && message.match(/^\/(.+)\/$/)) {
      message = new RegExp(message.substring(1,message.length-1));
    }else if(message.type==="regex" && message.pattern){
      message.pattern = new RegExp(message.pattern);
    }else if (Array.isArray(message)){
      message = message.map(msg => convertToRegex(msg));
    }
    return message;
  }
  function convertAnswerHandler(message){
    // Regexの場合、Regexに変換
    message = convertToRegex(message);

    if(message.thread_name){
      message.handler = async(response, convo, bot) => {
        await convo.gotoThread(message.thread_name);
      }
    }
    return message;
  }
  function convertBeforeHandler(message){
    // Regexの場合、Regexに変換
    message = convertToRegex(message);

    if(message.thread_name){
      message.handler = async(convo, bot) => {
        await convo.gotoThread(message.thread_name);
      }
    }
    return message;
  }

  function convertAfterHandler(message){
    // Regexの場合、Regexに変換
    message = convertToRegex(message);

    if(message.thread_name){
      message.handler = async(response, bot) => {
        await convo.gotoThread(message.thread_name);
      }
    }
    return message;
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