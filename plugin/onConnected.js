/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function(controller) {
  
  //初回接続、再度接続の場合、クライアントの登録
  controller.on('hello,welcome_back', async (bot, message)=>{
    
    let client = controller.botClients.find(element => message.user === element.user);
    //保存
    if(!client){
      client = {user: message.user, bot: bot, message: message};
      controller.botClients.push(client);
    };
    
    // オンラインお知らせ
    if(message.user != "admin"){
      controller.tranferToMMC(bot, message, "online");
    }
  })
  
}
