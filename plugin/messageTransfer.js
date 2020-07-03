module.exports = function(controller) {

  // //ユーザからのメッセージを管理センターへ転送
  // controller.on('message,text', controller.transferMessage);
  // //ユーザからのメッセージを管理センターへ転送
  // controller.on('transfer', controller.transferMessage);

  // controller.hears(/^\w[\w\.\-]*\w@\w[\w\.\-]*\w$/, 'message,user_say,text', async function(bot, message) {
  //   console.log("メールアドレスを受信できた。。。", message.text, message.channelData);
  //   controller.transferMessage(bot, message);
  // });
  // controller.hears(/^[\+\d\-\*\#]*\d$/, 'message,user_say,text', async function(bot, message) {
  //   console.log("電話番号を受信できた。。。", message.text, message.channelData);
  //   controller.transferMessage(bot, message);
  // });
}
