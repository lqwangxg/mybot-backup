"use strict";
exports.__esModule = true;
module.exports = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.getAction = function (message) {
        if (message && message.queryResult && message.queryResult.action) {
            return message.queryResult.action;
        }
        if (message && message.text) {
            var match = message.text.match(/movie\s+(.+)/);
            if (match) {
                return { title: match[1], name: "get-movie-info" };
            }
        }
        return "";
    };
    UtilsService.getfulfillmentText = function (message) {
        if (message && message.queryResult && message.queryResult.fulfillmentText) {
            return message.queryResult.fulfillmentText;
        }
        return "";
    };
    UtilsService.getParameters = function (message) {
        if (message && message.queryResult && message.queryResult.parameters) {
            return message.queryResult.parameters;
        }
        if (message && message.text) {
            var match = message.text.match(/movie\s+(.+)/);
            if (match) {
                return { movie: match[1] };
            }
        }
        return [];
    };
    UtilsService.getParameterValue = function (message, paramName) {
        var parameters = UtilsService.getParameters(message);
        if (parameters[paramName]) {
            return parameters[paramName];
        }
        var midParam = parameters[paramName];
        if (typeof (midParam) === "string") {
            return midParam;
        }
        if (parameters.fields && parameters.fields[paramName]) {
            midParam = parameters.fields[paramName];
        }
        if (typeof (midParam) === "string") {
            return midParam;
        }
        if (midParam && midParam.listValue) {
            midParam = midParam.listValue;
        }
        if (midParam && midParam.values) {
            midParam = midParam.values;
        }
        if (midParam && midParam[0].stringValue) {
            return midParam[0].stringValue;
        }
        return "";
    };
    UtilsService.nowTimeStamp = function () {
        var event = new Date();
        var datetimeString = event.toLocaleDateString() + ' ' + event.toLocaleTimeString() + "." + event.getMilliseconds();
        return datetimeString;
    };
    return UtilsService;
}());
