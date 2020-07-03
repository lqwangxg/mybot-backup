/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller) {
  //初回接続、再度接続の場合、クライアントの登録
  controller.on("hello", async (bot, message) => {
    console.log("hello======>", message.user);
    controller.registUser(bot, message);
  });

  controller.on("closed", async (bot, message) => {
    console.warn("closed==★★★====>", message);
    //controller.registUser(bot, message);
  });

  controller.on("error", async (bot, message) => {
    console.error("error==★★★====>", message);
    //controller.registUser(bot, message);
  });

  controller.on("transfer_message", async (bot, message) => {
    console.error("transfer_message ====>", message);
    bot.say(message);
  });


};
