module.exports = function(controller) {

  //ユーザからのメッセージを管理センターへ転送
  controller.on('message,text', controller.transferMessage);
  //ユーザからのメッセージを管理センターへ転送
  controller.on('transfer', controller.transferMessage);

}
