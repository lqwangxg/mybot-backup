"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var request = require("request");

Promise = require("bluebird");
Promise.promisifyAll(request);
module.exports = {
  getFromAPI: getFromAPI,
  getQueryString: getQueryString
};

function getFromAPI(api, queryString, callBack) {
  var getParamString, url, kv, results, requestParam, response;
  return regeneratorRuntime.async(function getFromAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getParamString = function _ref(params) {
            var kv = [];

            if (params) {
              if (Array.isArray(params)) {
                var result = params.map(function (p) {
                  return getParamString(p);
                });
                kv = kv.concat(result);
              } else if (typeof params === "string") {
                kv.push(params);
              } else if (_typeof(params) === "object") {
                var keys = Object.keys(params);

                for (var i = 0; i < keys.length; i++) {
                  kv.push(keys[i] + "=" + params[keys[i]]);
                }
              }
            }

            return kv;
          };

          if (api.url) {
            _context.next = 4;
            break;
          }

          console.error("api.url is required.");
          return _context.abrupt("return");

        case 4:
          url = api.url;

          if (!api.url.endsWith("/")) {
            url = url + "/";
          }

          kv = [queryString];

          if (api.params) {
            results = getParamString(api.params);
            kv = kv.concat(results);
            url = url + "?" + kv.join("&");
          }

          requestParam = {
            url: encodeURI(url),
            headers: api.headers,
            json: true
          };
          _context.next = 11;
          return regeneratorRuntime.awrap(request.getAsync(requestParam));

        case 11:
          response = _context.sent;

          if (!(response.statusCode != 200)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", new Error("3td API Call failed.".concat(JSON.stringify(api))));

        case 14:
          if (callBack) {
            callBack(api, response.body);
          }

          return _context.abrupt("return", response.body);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function getQueryString(api) {
  if (!api) return "";
  var queryString = "";

  if (api.query) {
    var params = api.query;
    var kv = [];

    if (Array.isArray(params)) {
      params.forEach(function (param) {
        kv.push(param.name + param.condition + controller.vars[param.var_name]);
      });
    } else if (_typeof(params) === "object") {
      kv.push(params.name + params.condition + controller.vars[params.var_name]);
    }

    queryString = kv.join("&");
  }

  return queryString;
}