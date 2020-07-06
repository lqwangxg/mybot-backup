module.exports = function(botkit) {

  return {
      // The name of the plugin. Used to log messages at boot time.
      name: 'mbps-plugin',
      // initialize this module. called at load time.
      init: function(controller) {
          // do things like:

          // expose the methods from this plugin as controller.plugins.myplugin.<method>
          controller.addPluginExtension('mbps', this);

          // make locally bundled content public on the webservice:
          //controller.publicFolder('/public/mbps', __dirname + '/public');

          // add a web route
          // controller.webserver.get('/myplugin', async(req, res) => { 
          //      Use a local handlebars view (bundled with plugin) to render a page
          //      (hbs must be installed and initialized by plugin)
          //      res.render(controller.getLocalView(__dirname + '/views/main'));
          // });

          // can also define normal handlers
          // controller.on('event', async(bot, message) => { ... });
      },
      // Any middlewares that should be automatically bound
      // Can include more than 1 of each kind.
      middlewares: {
          ingest: [
              (bot, message, next) => { next(); }
          ],
          receive: [
              (bot, message, next) => { next(); }
          ],
          send: [
              (bot, message, next) => { next(); }
          ]
      },
      // this method will live at controller.plugins.myplugin.customMethod()
      customMethod: async() => {}
  }
}