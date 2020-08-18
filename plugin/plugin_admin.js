"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var UtilsService = require("../service/utils");
module.exports = function (controller) {
    controller.middleware.receive.use(function (bot, message, next) {
        //if the sender of message.user is null, omit the message.
        if (!message.user) {
            console.warn("送信者不明のメッセージが届いた、破棄されています。", message);
            return;
        }
        //受信メッセージより、受信者を確定
        formatReceiveMessage(bot, message);
        //if it's a new guest id, save the id into userlist 
        registUser(bot, message);
        console.log("receive message------>", UtilsService.nowTimeStamp(), message);
        //情報転送
        if (message.author != controller.MMC_UID) {
            //管理センターへ転送
            transferToMMCMessage(bot, message);
        }
        else {
            //グループへ転送
            transferToUserMessage(bot, message);
        }
        next();
    });
    /**
     *
     * @param bot
     * @param message
     */
    function formatReceiveMessage(bot, message) {
        var localUser = "";
        if (message.conversation && message.conversation.id) {
            localUser = message.conversation.id;
        }
        else if (message.recipient && message.recipient.id) {
            localUser = message.recipient.id;
        }
        else if (bot.getConfig('reference')) {
            var reference = bot.getConfig('reference');
            localUser = reference.user.id;
        }
        if (!message.user) {
            message.user = localUser;
        }
        //bot.controller.dialogSet.find("")
    }
    ;
    /**
     *
     * @param bot
     * @param message
     */
    function registUser(bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                if (!message.author)
                    return [2 /*return*/];
                client = bot.controller.botClients.find(function (u) { return message.author === u.id; });
                //保存
                if (!client) {
                    client = {
                        id: message.user,
                        bot: bot,
                        context: message.context,
                        reference: message.reference
                    };
                    bot.controller.botClients.push(client);
                }
                return [2 /*return*/];
            });
        });
    }
    ;
    function transferToMMCMessage(bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //転送メッセージの場合、再転送しない
                if (message.isTranfering)
                    return [2 /*return*/];
                //自身へ転送しない
                if (message.author === process.env.MMC_UID)
                    return [2 /*return*/];
                //管理センターへ転送
                transferMessage(bot, message, process.env.MMC_UID, process.env.MMC_UID);
                return [2 /*return*/];
            });
        });
    }
    function transferMessage(bot, message, destId, transferType) {
        return __awaiter(this, void 0, void 0, function () {
            var client, newMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = bot.controller.botClients.find(function (u) { return destId === u.id; });
                        if (!client) return [3 /*break*/, 3];
                        newMessage = {
                            type: message.type,
                            text: message.text,
                            isTranfering: true,
                            data: message.data,
                            channelData: {
                                type: message.type,
                                text: message.text,
                                isTranfering: true,
                                transferType: transferType,
                                author: message.author,
                                reply_user: message.reply_user
                            }
                        };
                        return [4 /*yield*/, client.bot.changeContext(client.reference)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client.bot.say(newMessage)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function transferToUserMessage(bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //転送メッセージの場合、再転送しない
                if (message.isTranfering)
                    return [2 /*return*/];
                return [2 /*return*/];
            });
        });
    }
    ;
    /**
     * Format channelData before message sending.
     * @param bot
     * @param message
     */
    function formatSendMessage(bot, message) {
        if (message.isTranfering) {
            return;
        }
        if (!message.channelData) {
            message.channelData = {};
        }
        if (message.recipient && message.recipient.id) {
            message.channelData.recipient = message.recipient.id;
        }
        message.channelData.timestamp = UtilsService.nowTimeStamp();
        if (message.from && message.from.id) {
            message.channelData.author = message.from.id;
        }
    }
    ;
    controller.middleware.send.use(function (bot, message, next) {
        //１，内製メッセージ(hello, help等jsonファイルに記載)
        // 内容テキストだけの場合、ユーザ情報等補足が必要
        formatSendMessage(bot, message);
        //messageWoker
        if (message.type === "ask" || message.type === "question") {
            message.type = "message";
        }
        //console.log("send message------>",message);
        next();
        //==============================================
        //２，受信者はMMCではなく、転送メッセージでもない場合、MMCへ転送
        if (message.reply_user != controller.MMC_UID && !message.channelData.isTranfering) {
            transferToMMCMessage(bot, message);
        }
    });
    controller.on("SaveMessage", function (bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, content;
            return __generator(this, function (_a) {
                filter = { author: message.author, id: message.id };
                content = {
                    type: message.type,
                    text: message.text,
                    data: message.data,
                    author: message.author,
                    timestamp: message.incoming_message.timestamp ? message.incoming_message.timestamp : UtilsService.nowTimeStamp()
                };
                return [2 /*return*/];
            });
        });
    });
    controller.on("SaveUserProfie", function (bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("SaveUserProfie=========<message>", message);
                return [2 /*return*/];
            });
        });
    });
};
