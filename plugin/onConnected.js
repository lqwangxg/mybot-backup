/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller) {
  //初回接続、再度接続の場合、クライアントの登録
  controller.on("hello", async (bot, message) => {
    console.log("hello======>", message.user);
    controller.transferToMMCMessage(message);
  });

  
};
