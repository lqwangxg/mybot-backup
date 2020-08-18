"use strict";
//import { BotkitMessage } from "botkit";
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
var utils = require("../service/utils");
/* This module kicks in if no Botkit Studio token has been provided */
module.exports = function (controller) {
    var botClients = [];
    //送受信前に、送受信者を確定
    function fillUserFromBotMessage(bot, message, usertype) {
        return __awaiter(this, void 0, void 0, function () {
            var localUser, reference;
            return __generator(this, function (_a) {
                //該当ユーザー情報が存在する場合、処理終了
                if (message[usertype])
                    return [2 /*return*/];
                localUser = "";
                if (message.conversation && message.conversation.id) {
                    localUser = message.conversation.id;
                }
                else if (message.recipient && message.recipient.id) {
                    localUser = message.recipient.id;
                }
                else if (bot.getConfig('reference')) {
                    reference = bot.getConfig('reference');
                    localUser = reference.user.id;
                }
                message[usertype] = localUser;
                if (!message.user) {
                    message.user = localUser;
                }
                return [2 /*return*/];
            });
        });
    }
    ;
    function registUser(bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                if (!message.author)
                    return [2 /*return*/];
                client = botClients.find(function (u) { return message.author === u.id; });
                //保存
                if (!client) {
                    client = {
                        id: message.user,
                        bot: bot,
                        context: message.context,
                        reference: message.reference
                    };
                    botClients.push(client);
                }
                return [2 /*return*/];
            });
        });
    }
    ;
    function transferMessage(message, destId, transferType) {
        return __awaiter(this, void 0, void 0, function () {
            var client, newMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = botClients.find(function (u) { return destId === u.id; });
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
    function saveMessageHistory(bot, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!controller.storage)
                    return [2 /*return*/];
                if (message.id) {
                    controller.trigger("SaveMessage", bot, message);
                }
                return [2 /*return*/];
            });
        });
    }
};
