//  __   __  ___        ___
// |__) /  \  |  |__/ |  |  
// |__) \__/  |  |  \ |  |  

// This is the main file for the webbot bot.

// Import Botkit's core features
const { Botkit } = require('botkit');
const { BotkitCMSHelper } = require('botkit-plugin-cms');

// Import a platform-specific adapter for web.

const { WebAdapter } = require('botbuilder-adapter-web');

const { MongoDbStorage } = require('botbuilder-storage-mongodb');

// Load process.env values from .env file
require('dotenv').config();

let storage = null;
if (process.env.MONGO_URI) {
    storage = new MongoDbStorage({
        url : process.env.MONGO_URI,        
    });
}


const adapter = new WebAdapter({});


const controller = new Botkit({
    webhook_uri: '/api/messages',

    adapter: adapter,

    storage: storage
});
// クライアント配列
controller.botClients = [];
controller.MMC_UID = process.env.MMC_UID;

if (process.env.CMS_URI) {
    controller.usePlugin(new BotkitCMSHelper({
        uri: process.env.CMS_URI,
        token: process.env.CMS_TOKEN,
    }));
}

// Once the bot has booted up its internal services, you can use them to do stuff.
controller.ready(() => {
    //共通関数等のロード
    // var commonPath = require("path").join(__dirname, "common");
    // require("fs").readdirSync(commonPath).forEach(function(file) {
    //   require("./common/" + file)(controller); 
    // });

    //load customize plugins
    var pluginPath = require("path").join(__dirname, "plugin");
    require("fs").readdirSync(pluginPath).forEach(function(file) {
      if(file.match(/\w+\.js/)){
        require("./plugin/" + file)(controller); 
      }
    });

    // load traditional developer-created local custom feature modules
    controller.loadModules(__dirname + '/features');
    // load traditional developer-created local custom feature modules
    controller.loadModules(__dirname + '/skills');
    if (controller.storage) {
      //controller.storage.history = {};
      controller.storage.ensureConnected().then(
        (client)=>{
          //console.log("controller.storage.connect============<client>",client);
          controller.storage.db = client.db(controller.storage.config.database);
          require("./service/MongoStorage")(controller);   
        }
      );
    }

    /* catch-all that uses the CMS to trigger dialogs */
    if (controller.plugins.cms) {
        controller.on('message,direct_message,text', async (bot, message) => {
            let results = false;
            results = await controller.plugins.cms.testTrigger(bot, message);

            if (results !== false) {
                // do not continue middleware!
                return false;
            }
        });
    }

});





