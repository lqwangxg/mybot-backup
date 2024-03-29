module.exports = function(controller) {

  /* 
   * A NOTE ABOUT SECURITY AND PRIVACY
   * PLEASE READ!
   * 
   * This plugin creates a sample endpoint which demonstrates a method
   * for loading message history to display in the chat widget so that
   * the UI can restore itself between sessions.
   * Note that this is DISABLED by default because there is no authentication
   * mechanism in place, and revealing message history could potentially reveal
   * PII and other sensitive material.
   * 
   * Do not use this plugin if your bot will deal with any sort of sensitive
   * information. You *must* validate the user's identity before displaying
   * sensitive message history.
   */

  if (controller.storage) {
    // expose history as an endpoint
    controller.webserver.post('/botkit/history', function(req, res) {
      if (req.body.user) {
        // IMPORTANT: The identify of this user should be validated before returning message history!
        controller.storage.histories.find(req.body.user, 10).then(function(history) {
          console.log("history find ok======>:", history);
          res.json({success: true, history: history.map(function(h) { return h.message; })});
        }).catch(function(err) {
          console.error("history find error===>:", error);
          res.json({success: false, history: [], error: err});
        })
      } else {
        res.json({success: false, history: [], error: 'no user specified'});
      }
    });
 
    // function logMessage(message, user) {
    //   if (message.type == 'text' || message.type == 'message' || message.type == 'message_received') {
    //     // controller.storage.histories.save(message, (error)=>{
    //     //   console.log("履歴をMONGODBに保存結果：",error);
    //     // })
    //   }
    // }
 
    // // log incoming messages to the user history
    // controller.middleware.receive.use(function(bot, message, next) {
    //     controller.storage.users.get(message.user, function(err, user) {
    //         console.log('message.user====>', message.user);
    //     });
    //     next();
    // });
 
 
    // controller.middleware.format.use(function(bot, message, platform_message, next) {
    //     controller.storage.users.get(message.to, function(err, user) {
    //         logMessage(platform_message,user);
    //     });
    //     next();
    // });
 
  } else {
    console.log("Configure a MONGO_URI to enable message history");
    controller.webserver.post('/botkit/history', function(req, res) {
      res.json({success:true, history: []});
    });
  }

  controller.webserver.post('/botkit/history', function(req, res) {
    res.json({success:true, history: []});
  });


}
