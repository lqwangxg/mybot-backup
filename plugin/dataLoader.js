'use strict';
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
var fs = require("fs");
var buildPath = require("path");
var initQADataPath = buildPath.join(__dirname, "init_data");
var _a = require("../service/3rdApi"), getFromAPI = _a.getFromAPI, getQueryString = _a.getQueryString;
var BotkitConversation = require("botkit").BotkitConversation;
var Mustache = require('mustache');
module.exports = function (controller) {
    return __awaiter(this, void 0, void 0, function () {
        //====================================================
        function isValidAdapter(controller, json) {
            return __awaiter(this, void 0, void 0, function () {
                var isRightAdapter;
                return __generator(this, function (_a) {
                    isRightAdapter = false;
                    if (json.adapter) {
                        if (Array.isArray(json.adapter)) {
                            if (json.adapter.includes("default")) {
                                isRightAdapter = true;
                            }
                            else if (json.adapter.includes(controller.adapter.name)) {
                                isRightAdapter = true;
                            }
                        }
                        else if ("string" === typeof (json.adapter)) {
                            if (json.adapter === controller.adapter.name) {
                                isRightAdapter = true;
                            }
                        }
                    }
                    else {
                        isRightAdapter = true;
                    }
                    return [2 /*return*/, isRightAdapter];
                });
            });
        }
        //====================================================
        function triggerOnFromJson(controller, json) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if ("on" != json.type || !json.script) {
                        return [2 /*return*/];
                    }
                    if (Array.isArray(json.script)) {
                        json.script.forEach(function (script) { return AddOnTriggerScript(controller, script); });
                    }
                    else {
                        AddOnTriggerScript(controller, json.script);
                    }
                    return [2 /*return*/];
                });
            });
        }
        function AddOnTriggerScript(controller, script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    controller.on(script.events, function (bot, message) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("On Trigger Script received, ★reply=====>: ", script);
                                        if (!script.replys) return [3 /*break*/, 2];
                                        return [4 /*yield*/, replyMessage(bot, message, script.replys)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (!script.dialog) return [3 /*break*/, 4];
                                        return [4 /*yield*/, bot.beginDialog(script.dialog)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
                });
            });
        }
        //====================================================
        function hearsFromJson(controller, json) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if ("hears" != json.type || !json.script) {
                        return [2 /*return*/];
                    }
                    if (Array.isArray(json.script)) {
                        json.script.forEach(function (script) { return AddHearTriggerScript(controller, script); });
                    }
                    else {
                        AddHearTriggerScript(controller, json.script);
                    }
                    return [2 /*return*/];
                });
            });
        }
        function AddHearTriggerScript(controller, script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    script.keywords = convertToRegex(script.keywords, null);
                    controller.hears(script.keywords, script.events, function (bot, message) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("AddHearTriggerScript: ", script);
                                        if (!(script.required && script.required.key && script.required.dialog
                                            && !isRequiredValid(controller, script.required.key))) return [3 /*break*/, 2];
                                        console.log(" heard message:", message);
                                        controller.vars.lastMessage = {
                                            type: message.type,
                                            text: message.text,
                                            user: message.user,
                                            channel: message.channel,
                                            value: message.value,
                                            data: { text: message.data.text },
                                            user_profile: message.user_profile,
                                            reply_user: message.reply_user
                                        };
                                        return [4 /*yield*/, bot.beginDialog(script.required.dialog)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                    case 2:
                                        if (!script.replys) return [3 /*break*/, 4];
                                        return [4 /*yield*/, replyMessage(bot, message, script.replys)];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        if (!script.dialog) return [3 /*break*/, 6];
                                        return [4 /*yield*/, bot.beginDialog(script.dialog)];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
                });
            });
        }
        function isRequiredValid(controller, key) {
            if (Array.isArray(key)) {
                return key.every(function (key) { return !!controller.vars[key]; });
            }
            else {
                return !!controller.vars[key];
            }
        }
        //====================================================
        function dialogFromJson(controller, json) {
            return __awaiter(this, void 0, void 0, function () {
                var convo;
                return __generator(this, function (_a) {
                    if ("dialog" != json.type || !json.script || !json.id) {
                        return [2 /*return*/];
                    }
                    convo = new BotkitConversation(json.id, controller);
                    json.script.forEach(function (s) { return addScript(convo, s); });
                    controller.addDialog(convo);
                    return [2 /*return*/];
                });
            });
        }
        function addScript(convo, script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    addAction(convo, script);
                    addAsk(convo, script);
                    addMessage(convo, script);
                    addQuestion(convo, script);
                    addBefore(convo, script.before, script.thread_name);
                    addAfter(convo, script);
                    addVarValid(script);
                    return [2 /*return*/];
                });
            });
        }
        //====================================================  
        function addAction(convo, script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if ("action" != script.type) {
                        return [2 /*return*/];
                    }
                    //console.log("addAction===================> :", confirm)
                    if (script.thread_name) {
                        convo.addAction(script.action, script.thread_name);
                    }
                    else {
                        convo.addAction(script.action);
                    }
                    return [2 /*return*/];
                });
            });
        }
        function addAsk(convo, script) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if ("ask" != script.type) {
                                return [2 /*return*/];
                            }
                            if (Array.isArray(script.collect.options)) {
                                script.collect.options = script.collect.options.map(function (option) {
                                    return toHandler(option);
                                });
                            }
                            else {
                                script.collect.options = toHandler(script.collect.options);
                            }
                            //console.log("addAsk===================> :", confirm)
                            if (!script.collect || !script.collect.options || script.collect.options.length === 0) {
                                convo.ask(script, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    return [2 /*return*/];
                                }); }); }, script.collect.key);
                            }
                            else {
                                convo.ask(script, script.collect.options, script.collect.key);
                            }
                            //console.log("addAsk key====================>:", script.collect.key);
                            return [4 /*yield*/, onVarChange(convo, script.collect.key)];
                        case 1:
                            //console.log("addAsk key====================>:", script.collect.key);
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function addQuestion(convo, script) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if ("question" != script.type) {
                                return [2 /*return*/];
                            }
                            if (script.collect && script.collect.options) {
                                if (Array.isArray(script.collect.options)) {
                                    script.collect.options = script.collect.options.map(function (option) {
                                        return toHandler(option);
                                    });
                                }
                                else {
                                    script.collect.options = toHandler(script.collect.options);
                                }
                            }
                            //console.log("addQuestion===================> :", confirm)
                            if (!script.collect || !script.collect.options || script.collect.options.length === 0) {
                                convo.addQuestion(script, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    return [2 /*return*/];
                                }); }); }, script.collect.key, script.thread_name);
                            }
                            else {
                                convo.addQuestion(script, script.collect.options, script.collect.key, script.thread_name);
                            }
                            //console.log("addQuestion key=========>:", script.collect.key, "==next==>", script.thread_name);
                            return [4 /*yield*/, onVarChange(convo, script.collect.key)];
                        case 1:
                            //console.log("addQuestion key=========>:", script.collect.key, "==next==>", script.thread_name);
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function addMessage(convo, script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if ("message" != script.type) {
                        return [2 /*return*/];
                    }
                    //console.log("addMessage===================> :", confirm)
                    if (script.thread_name) {
                        convo.addMessage(script, script.thread_name);
                    }
                    else {
                        convo.addMessage(script);
                    }
                    return [2 /*return*/];
                });
            });
        }
        function addVarValid(script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if ("variables" != script.type) {
                                return [2 /*return*/];
                            }
                            if (!controller.validateHandlers) {
                                controller.validateHandlers = [];
                            }
                            return [4 /*yield*/, convertToRegex(script.valid, function (option) {
                                    var opt = controller.validateHandlers.includes(option);
                                    if (!opt) {
                                        controller.validateHandlers.push(option);
                                    }
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function addBefore(convo, before, script_thread_name) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!before) {
                                return [2 /*return*/];
                            }
                            if (!Array.isArray(before)) return [3 /*break*/, 1];
                            before.forEach(function (before) {
                                addBefore(convo, before, script_thread_name);
                            });
                            return [3 /*break*/, 3];
                        case 1: 
                        //指定Threadへ飛ばす前の処理
                        return [4 /*yield*/, convo.before(script_thread_name, function (convoBefore, bot) { return __awaiter(_this, void 0, void 0, function () {
                                var varValue, convoVarValue, option;
                                return __generator(this, function (_a) {
                                    console.log("before====from=> :", script_thread_name);
                                    //対応変数がまだない場合、処理しない
                                    if (controller.vars[before.key]) {
                                        varValue = controller.vars[before.key];
                                    }
                                    if (convoBefore.vars[before.key]) {
                                        convoVarValue = convoBefore.vars[before.key];
                                    }
                                    console.log("before===varValue,convoVarValue>", varValue, convoVarValue);
                                    if (!varValue && !convoVarValue)
                                        return [2 /*return*/];
                                    if (!convoVarValue) {
                                        convoBefore.setVar(before.key, varValue);
                                        convoVarValue = varValue;
                                    }
                                    if (convoVarValue.type === "event")
                                        return [2 /*return*/];
                                    option = controller.validateHandlers.find(function (v) { return v.key === before.key; });
                                    if (!option)
                                        return [2 /*return*/];
                                    //入力チェック正常、かつ飛ばす区分がTrueの場合、before.thread_nameへ
                                    if (option.type === "regex") {
                                        if (option.pattern.test(varValue) && before.skip_on_valid) {
                                            convoBefore.gotoThread(before.thread_name);
                                        }
                                    }
                                    else if (option.type === "string") {
                                        if (option.pattern === varValue && before.skip_on_valid) {
                                            convoBefore.gotoThread(before.thread_name);
                                        }
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                        case 2:
                            //指定Threadへ飛ばす前の処理
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        function addAfter(convo, script) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!script.after) {
                        return [2 /*return*/];
                    }
                    //console.log("addAfter======confirm> :", script)
                    convo.after(function (results, bot) {
                        //外部apiを呼出
                        if (script.after.api) {
                            var api = script.after.api;
                            var queryString = getQueryString(api);
                            getFromAPI(api, queryString, callBackAPI);
                        }
                        //Triggerがある場合
                        if (script.after.trigger) {
                            controller.trigger(script.after.trigger, bot, results);
                        }
                    });
                    return [2 /*return*/];
                });
            });
        }
        function callBackAPI(api, result) {
            return __awaiter(this, void 0, void 0, function () {
                var textTempalte, text;
                return __generator(this, function (_a) {
                    if (result.Response) {
                        textTempalte = api.callback.text;
                        text = Mustache.render(textTempalte, result);
                        result.renderText = text;
                        controller.vars[api.callback.result_name] = result;
                        controller.vars[api.callback.detail_name] = result.renderText;
                    }
                    return [2 /*return*/];
                });
            });
        }
        function onVarChange(convo, key) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if ("string" === typeof (key)) {
                        convo.onChange(key, function (response, convo, bot) { return __awaiter(_this, void 0, void 0, function () {
                            var value, v;
                            return __generator(this, function (_a) {
                                value = response;
                                v = controller.validateHandlers.find(function (k) { return k.key === key; });
                                if (v) {
                                    if (v.pattern.test(value)) {
                                        controller.vars[key] = value;
                                    }
                                    else {
                                        controller.vars[key] = "";
                                        convo.gotoThread(v.fault_thread_name);
                                    }
                                }
                                else {
                                    controller.vars[key] = response;
                                }
                                //let kv = 
                                console.log("onVarChange===================[" + key + "]:[" + controller.vars[key] + "], " + response);
                                return [2 /*return*/];
                            });
                        }); });
                    }
                    else if (Array.isArray(key)) {
                        key.forEach(function (k) { return onVarChange(convo, k); });
                    }
                    return [2 /*return*/];
                });
            });
        }
        //====================================================
        function convertToRegex(option, callback) {
            if (!option)
                return option;
            if (Array.isArray(option)) {
                option = option.map(function (op) { return convertToRegex(op, callback); });
                return option;
            }
            // if (typeof(option) === 'string' && option.match(/^\/(.+)\/$/)) {
            //   //文字列にRegexパターンが存在する場合、Regexとする
            //   option = new RegExp(option.substring(1,option.length-1));
            // }else
            if (option.type === "regex" && option.pattern) {
                option.pattern = new RegExp(option.pattern);
            }
            if (callback) {
                callback(option);
            }
            return option;
        }
        function toHandler(option) {
            var _this = this;
            if (!option)
                return option;
            // Regexの場合、Regexに変換
            option = convertToRegex(option, null);
            if (option.thread_name) {
                option.handler = function (response, convo, bot) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("ask/question callback_handler answer============>>>>>>>:", option.thread_name, response);
                                return [4 /*yield*/, convo.gotoThread(option.thread_name)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
            }
            return option;
        }
        function replyMessage(bot, message, replys) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!replys) {
                                return [2 /*return*/];
                            }
                            if (!(typeof (replys) === "string")) return [3 /*break*/, 2];
                            return [4 /*yield*/, bot.reply(message, {
                                    type: "text",
                                    text: replys
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            if (Array.isArray(replys)) {
                                replys.forEach(function (txt) {
                                    replyMessage(bot, message, txt);
                                });
                                return [2 /*return*/];
                            }
                            if (!(typeof (replys) === "object")) return [3 /*break*/, 4];
                            return [4 /*yield*/, bot.reply(message, {
                                    type: "text",
                                    text: replys.text,
                                    quick_replies: replys.quick_replies,
                                    file: replys.file
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            if (!controller.vars) {
                controller.vars = {};
            }
            // type optionType =
            // {
            //   type: "string"|"regex",
            //   pattern: string | RegExp,
            //   thread_name?:string 
            // } | Array<optionType>;
            //====================================================
            fs.readdirSync(initQADataPath).forEach(function (file) {
                var filePath = buildPath.join(initQADataPath, file);
                console.log("filePath:", filePath);
                fs.readFile(filePath, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        var json = JSON.parse(data);
                        var isRightAdapter = isValidAdapter(controller, json);
                        if (isRightAdapter) {
                            // init trigger on
                            triggerOnFromJson(controller, json);
                            // init trigger hears
                            hearsFromJson(controller, json);
                            // init dialog 
                            dialogFromJson(controller, json);
                        }
                    }
                });
            });
            return [2 /*return*/];
        });
    });
};
