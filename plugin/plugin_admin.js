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
        //送信者は必須項目、送信者不明の場合、警告ログを出力し、メッセージを破棄
        if (!message.author) {
            console.warn("送信者不明のメッセージが届いた、", message);
            return;
        }
        //controller.redis.test(message.author);
        //受信メッセージより、受信者を確定
        //comFunc.onReceivedMessage(bot:BotWorker, message: BotkitMessage);
        //console.log("receive message------>",message, UtilsService.nowTimeStamp());
        // //情報転送
        // if(message.author != controller.MMC_UID){
        //   //管理センターへ転送
        //   controller.transferToMMCMessage(message);
        // }else{
        //   //グループへ転送
        //   controller.transferToUserGroupMessage(message);
        // }
        next();
    });
    controller.middleware.send.use(function (bot, message, next) {
        //１，内製メッセージ(hello, help等jsonファイルに記載)
        // 内容テキストだけの場合、ユーザ情報等補足が必要
        //beforeSendingMessage(bot:BotWorker, message: BotkitMessage);
        //saveMessageHistory(bot:BotWorker, message: BotkitMessage);
        //messageWoker
        if (message.type === "ask" || message.type === "question") {
            message.type = "message";
        }
        //console.log("send message------>",message);
        next();
        //==============================================
        //２，受信者はMMCではなく、転送メッセージでもない場合、MMCへ転送
        // if(message.reply_user != controller.MMC_UID && !message.channelData.isTranfering){
        //   controller.transferToMMCMessage(message);
        // }
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
