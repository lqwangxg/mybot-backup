/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// var converter = new showdown.Converter();
// converter.setOption("openLinksInNewWindow", true);

// for saving default userid.
const user_cookieid = "default_botkit_user_cookieid";

var Botkit = {
  config: {
    ws_url:
      (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host,
    reconnect_timeout: 3000,
    max_reconnect: 5,
    enable_history: false,
  },

  options: {
    use_sockets: true,
    hostUrl:""
  },

  reconnect_count: 0,
  guid: null,
  current_user: null,
  element: null, //画面表示オブジェクト

  connect: function (userid) {
    var that = this;
    //外部設定が可能
    if(that.options.hostUrl){
      this.config.ws_url = that.options.hostUrl.replace("http","ws");
    }
    //ユーザーIDの保存
    this.saveLoginUser(userid);

    console.log("that.config.ws_url:" + that.config.ws_url);
    // connect to the chat server!
    if (that.options.use_sockets) {
      that.connectWebsocket(that.config.ws_url);
    } else {
      that.connectWebhook();
    }
  },
  saveLoginUser: function(userid){
    {
      if (!userid) {
        userid = Math.random().toString().substr(2, 6);
      }
      
      //同じ端末に同時に複数のクライアントを接続できるため
      const cookieID = "botkit_userid_" + userid;
      Botkit.setCookie(cookieID, userid, 1);
      this.current_user = {
        id: userid,
        timezone_offset: new Date().getTimezoneOffset(),
      };
    }    
  },
  connectWebhook: function () {
    var that = this;
    if (Botkit.getCookie("botkit_guid")) {
      that.guid = Botkit.getCookie("botkit_guid");
      connectEvent = "welcome_back";
    } else {
      that.guid = that.generate_guid();
      Botkit.setCookie("botkit_guid", that.guid, 1);
    }

    if (this.options.enable_history) {
      that.getHistory();
    }

    // connect immediately
    that.trigger("connected", {});
    that.webhook({
      type: connectEvent,
      user: that.guid,
      channel: { type: "webhook", id: that.current_user.id },
    });
  },
  connectWebsocket: function (ws_url) {
    var that = this;
    // Create WebSocket connection.
    that.socket = new WebSocket(ws_url);

    var connectEvent = "hello";
    if (Botkit.getCookie("botkit_guid")) {
      that.guid = Botkit.getCookie("botkit_guid");
      connectEvent = "welcome_back";
    }

    if (this.options.enable_history) {
      that.getHistory();
    }

    // Connection opened
    that.socket.addEventListener("open", function (event) {
      console.log("CONNECTED TO SOCKET");
      that.reconnect_count = 0;
      that.trigger("connected", event);
      that.deliverMessage({
        type: connectEvent,
        user: that.current_user.id,
        channel: "socket",
        user_profile: that.current_user ? that.current_user : null,
      });
    });

    that.socket.addEventListener("error", function (event) {
      console.error("ERROR", event);
    });

    that.socket.addEventListener("close", function (event) {
      console.log("SOCKET CLOSED!");
      that.trigger("disconnected", event);
      if (that.reconnect_count < that.config.max_reconnect) {
        setTimeout(function () {
          console.log("RECONNECTING ATTEMPT ", ++that.reconnect_count);
          that.connectWebsocket(that.config.ws_url);
        }, that.config.reconnect_timeout);
      } else {
        console.log("socket addEventListener closed...");
      }
    });

    // Listen for messages
    that.socket.addEventListener("message", function (event) {
      var message = null;
      try {
        message = JSON.parse(event.data);
        console.log("socket.addEventListener====message:", message);
      } catch (err) {
        that.trigger("socket_error", err);
        return;
      }

      that.trigger(message.type, message);
    });
  },
  on: function (event, handler) {
    //eventが発生した場合、handlerで処理
    this.element.$on(event, function (details) {
      handler(event, details);
    });
  },
  trigger: function (event, details) {
    // client内部eventが発生、外へ知らせ
    //console.log("trigger from client ====>", event, details);
    this.element.$emit(event, details);
  },
  request: function (url, body) {
    var that = this;
    return new Promise(function (resolve, reject) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
            var response = xmlhttp.responseText;
            if (response != "") {
              var message = null;
              try {
                message = JSON.parse(response);
              } catch (err) {
                reject(err);
                return;
              }
              resolve(message);
            } else {
              resolve([]);
            }
          } else {
            reject(new Error("status_" + xmlhttp.status));
          }
        }
      };

      xmlhttp.open("POST", url, true);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(body));
    });
  },
  send: function (msg, e) {
    var that = this;
    if (e) e.preventDefault();
    if (!msg) {
      return;
    }
    if (typeof msg === "string") {
      msg = { text: msg };
    }

    var message = {
      type: msg.type ? msg.type : "user_say",
      user: that.current_user.id,
      user_profile: that.current_user,
      channel: this.options.use_sockets
        ? { type: "socket", id: that.current_user.id }
        : { type: "webhook", id: that.current_user.id },
    };

    Object.assign(message, msg);

    that.deliverMessage(message);
    that.trigger("sent", message);

    return false;
  },
  deliverMessage: function (message) {
    console.log("deliverMessage socket.send===>", message);
    if (this.options.use_sockets) {
      this.socket.send(JSON.stringify(message));
    } else {
      this.webhook(message);
    }
  },
  getHistory: function (guid) {
    var that = this;
    if (that.guid) {
      that
        .request("/botkit/history", {
          user: that.guid,
        })
        .then(function (history) {
          if (history.success) {
            that.trigger("history_loaded", history.history);
          } else {
            that.trigger("history_error", new Error(history.error));
          }
        })
        .catch(function (err) {
          that.trigger("history_error", err);
        });
    }
  },
  webhook: function (message) {
    var that = this;

    that
      .request("/api/messages", message)
      .then(function (messages) {
        messages.forEach((message) => {
          that.trigger(message.type, message);
        });
      })
      .catch(function (err) {
        that.trigger("webhook_error", err);
      });
  },
  quickReply: function (payload) {
    this.send(payload);
  },
  // triggerScript: function (script, thread) {
  //     this.deliverMessage({
  //         type: 'trigger',
  //         user: this.guid,
  //         channel: 'socket',
  //         script: script,
  //         thread: thread
  //     });
  // },
  // receiveCommand: function (event) {
  //     switch (event.data.name) {
  //         case 'trigger':
  //             // tell Botkit to trigger a specific script/thread
  //             console.log('TRIGGER', event.data.script, event.data.thread);
  //             Botkit.triggerScript(event.data.script, event.data.thread);
  //             break;
  //         case 'identify':
  //             // link this account info to this user
  //             console.log('IDENTIFY', event.data.user);
  //             Botkit.identifyUser(event.data.user);
  //             break;
  //         case 'connect':
  //             // link this account info to this user
  //             Botkit.connect(event.data.user);
  //             break;
  //         default:
  //             console.log('UNKNOWN COMMAND', event.data);
  //     }
  // },
  //   identifyUser: function (user) {

  //     user.timezone_offset = new Date().getTimezoneOffset();

  //     this.guid = user.id;
  //     Botkit.setCookie('botkit_guid', user.id, 1);

  //     this.current_user = user;

  //     this.deliverMessage({
  //         type: 'identify',
  //         user: user.id,
  //         channel: 'socket',
  //         user_profile: user,
  //     });
  // },
  sendEvent: function (event) {
    if (this.parent_window) {
      this.parent_window.postMessage(event, "*");
    }
  },
  setCookie: function (cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie: function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
};
