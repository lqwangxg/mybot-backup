(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webchat"] = factory(require("vue"));
	else
		root["webchat"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "05cf":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-user-input{min-height:55px;margin:0;position:relative;display:flex;border-bottom-right-radius:10px;transition:background-color .2s ease,box-shadow .2s ease}.sc-user-input,.sc-user-input--text{bottom:0;border-bottom-left-radius:10px}.sc-user-input--text{width:98%;outline:none;text-align:left;box-sizing:border-box;padding:18px;font-size:15px;font-weight:400;line-height:1.33;white-space:pre-wrap;word-wrap:break-word;color:#565867;-webkit-font-smoothing:antialiased;max-height:200px;overflow:scroll;overflow-x:hidden;overflow-y:auto}.sc-user-input--text:empty:before{content:attr(placeholder);display:block;-webkit-filter:contrast(15%);filter:contrast(15%);outline:none;cursor:text}.sc-user-input--buttons{width:100px;position:absolute;right:30px;height:100%;display:flex;justify-content:flex-end}.sc-user-input--button:first-of-type{width:40px}.sc-user-input--button{width:30px;height:55px;margin-left:2px;margin-right:2px;display:flex;flex-direction:column;justify-content:center}.sc-user-input.active{box-shadow:none;background-color:#fff;box-shadow:0 -5px 20px 0 rgba(150,165,190,.2)}.sc-user-input--button label{position:relative;height:24px;padding-left:3px;cursor:pointer}.sc-user-input--button label:hover path{fill:#565867}.sc-user-input--button input{position:absolute;left:0;top:0;width:100%;z-index:99999;height:100%;opacity:0;cursor:pointer;overflow:hidden}.file-container{background-color:#f4f7f9;border-top-left-radius:10px;padding:5px 20px;color:#565867}.delete-file-message{font-style:normal;float:right;cursor:pointer;color:#c8cad0}.delete-file-message:hover{color:#5d5e6d}.icon-file-message{margin-right:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "06b3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-typing-indicator[data-v-9ab9d830]{text-align:center;padding:17px 20px;border-radius:6px}.sc-typing-indicator span[data-v-9ab9d830]{display:inline-block;background-color:#b6b5ba;width:10px;height:10px;border-radius:100%;margin-right:3px;-webkit-animation:bob-data-v-9ab9d830 2s infinite;animation:bob-data-v-9ab9d830 2s infinite}.sc-typing-indicator span[data-v-9ab9d830]:first-child{-webkit-animation-delay:-1s;animation-delay:-1s}.sc-typing-indicator span[data-v-9ab9d830]:nth-child(2){-webkit-animation-delay:-.85s;animation-delay:-.85s}.sc-typing-indicator span[data-v-9ab9d830]:nth-child(3){-webkit-animation-delay:-.7s;animation-delay:-.7s}@-webkit-keyframes bob-data-v-9ab9d830{10%{transform:translateY(-10px);background-color:#9e9da2}50%{transform:translateY(0);background-color:#b6b5ba}}@keyframes bob-data-v-9ab9d830{10%{transform:translateY(-10px);background-color:#9e9da2}50%{transform:translateY(0);background-color:#b6b5ba}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "073f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_1c7359f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bbff");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_1c7359f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_1c7359f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_style_index_0_id_1c7359f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0b1c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-message--emoji[data-v-4b85c8e1]{font-size:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d17":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uP3jVQAAADd0Uk5TAE9lCAXd9XA4y/9zDQJG7HYB8Hc3yHoPQ8fuezMSoYPrEcEugj0tqb6G+Lw5ifHcKk3SIAx/MjRpS8YAAADsSURBVHic7dDJDoIwEIDhQURwQNGiIBVkUQH3BfX9H00MEvHW9qj9L3RIvkxTAJlMJvu1lI7aHtWOwm67Wk9vz3pP67Jro4+m1QyWiX2D3cJgqNmjt7ZGtjYccGAYK8R26qNjE2XMY6smU3Q9AM/F6YSTVrtnPp173pz6M969Lx1Q6rqUBgK2KvAR/UCIAoQLxEUoiCMSxyQSokmE6XKZYpQI2BVJ1wDrlKz4dXXn7PXN+G8e5lhk9TErMOd6tXCz3e2bYb/bbnj04Xg6f6bz6Xhgtxe8lu25vOKFGd/uj+8fj/uNfbVMJpP9QU/STxAzeUFqVwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "1254":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-message--file[data-v-6b0efd78]{border-radius:6px;font-weight:300;font-size:14px;line-height:1.4;-webkit-font-smoothing:subpixel-antialiased}.sc-message--content.sent .sc-message--file[data-v-6b0efd78]{word-wrap:break-word}.sc-message--file-icon[data-v-6b0efd78]{text-align:center;margin-left:auto;margin-right:auto;margin-top:15px;margin-bottom:0}.sc-image[data-v-6b0efd78]{max-width:100%;min-width:100%}.sc-message--file-text[data-v-6b0efd78]{padding:17px 20px;border-radius:6px;font-weight:300;font-size:14px;line-height:1.4;white-space:pre-wrap;-webkit-font-smoothing:subpixel-antialiased}.sc-message--file-name[data-v-6b0efd78]{color:#fff;padding-left:15px;padding-right:15px;padding-top:0;font-size:x-small;text-align:center}.sc-message--file-name a[data-v-6b0efd78]{text-decoration:none;color:#ece7e7}.sc-message--file-name a[data-v-6b0efd78]:hover{color:#fff}.sc-message--content.sent .sc-message--file-text[data-v-6b0efd78]{color:#fff;background-color:#4e8cff;word-wrap:break-word}.sc-message--content.received .sc-message--file[data-v-6b0efd78]{color:#263238;background-color:#f4f7f9;margin-right:40px}.sc-message--content.received .sc-message--file-name[data-v-6b0efd78]{color:#000}.sc-message--content.received .sc-message--file a[data-v-6b0efd78]{color:rgba(43,40,40,.7)}.sc-message--content.received .sc-message--file a[data-v-6b0efd78]:hover{color:#0c0c0c}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "13bc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-chat-window[data-v-1c7359f2]{width:370px;height:calc(100% - 120px);max-height:590px;position:fixed;right:25px;bottom:100px;box-sizing:border-box;box-shadow:0 7px 40px 2px rgba(148,149,150,.1);background:#fff;display:flex;flex-direction:column;justify-content:space-between;border-radius:10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-animation:fadeIn-data-v-1c7359f2;animation:fadeIn-data-v-1c7359f2;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.sc-chat-window.closed[data-v-1c7359f2]{opacity:0;display:none;bottom:90px}@-webkit-keyframes fadeIn-data-v-1c7359f2{0%{display:none;opacity:0}to{display:flex;opacity:1}}@keyframes fadeIn-data-v-1c7359f2{0%{display:none;opacity:0}to{display:flex;opacity:1}}.sc-message--me[data-v-1c7359f2]{text-align:right}.sc-message--them[data-v-1c7359f2]{text-align:left}@media (max-width:450px){.sc-chat-window[data-v-1c7359f2]{width:100%;height:100%;max-height:100%;right:0;bottom:0;border-radius:0;transition:.1s ease-in-out}.sc-chat-window.closed[data-v-1c7359f2]{bottom:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1416":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1c61");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("fc2a9640", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "1764":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6907");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1862":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-list[data-v-4fc78982]{height:98%;overflow:auto;padding-left:5px;padding-top:10px}.img-msg[data-v-4fc78982]{border-radius:50%;width:50px;margin-right:5px}.user-element[data-v-4fc78982]{font-size:20px;vertical-align:middle}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c61":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "svg[data-v-61cb7619]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1f3f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0b1c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("713836b5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "20c8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("05cf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("32cea5ba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "21eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const htmlEscape = string => string
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

const htmlUnescape = htmlString => htmlString
	.replace(/&gt;/g, '>')
	.replace(/&lt;/g, '<')
	.replace(/&#0?39;/g, '\'')
	.replace(/&quot;/g, '"')
	.replace(/&amp;/g, '&');

exports.htmlEscape = (strings, ...values) => {
	if (typeof strings === 'string') {
		return htmlEscape(strings);
	}

	let output = strings[0];
	for (const [index, value] of values.entries()) {
		output = output + htmlEscape(String(value)) + strings[index + 1];
	}

	return output;
};

exports.htmlUnescape = (strings, ...values) => {
	if (typeof strings === 'string') {
		return htmlUnescape(strings);
	}

	let output = strings[0];
	for (const [index, value] of values.entries()) {
		output = output + htmlUnescape(String(value)) + strings[index + 1];
	}

	return output;
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25b6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6497");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("52c5d60d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "271d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-message--system[data-v-fe3c7442]{padding:8px 20px;border-radius:6px;font-weight:300;font-size:12px;line-height:1.2;white-space:pre-wrap;-webkit-font-smoothing:subpixel-antialiased;font-style:italic;opacity:.55}.sc-message--meta[data-v-fe3c7442]{font-size:xx-small;margin-bottom:0;margin-top:5px;opacity:.5;text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "3626":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-emoji-picker[data-v-4feee432]{position:absolute;bottom:50px;right:0;width:330px;max-height:215px;box-shadow:0 7px 40px 2px rgba(148,149,150,.3);background:#fff;border-radius:10px;outline:none}.sc-emoji-picker[data-v-4feee432]:after{content:\"\";width:14px;height:14px;background:#fff;position:absolute;bottom:-6px;right:55px;transform:rotate(45deg);border-radius:2px}.sc-emoji-picker--content[data-v-4feee432]{padding:10px;overflow:auto;width:100%;max-height:195px;margin-top:7px;box-sizing:border-box}.sc-emoji-picker--category[data-v-4feee432]{display:flex;flex-direction:row;flex-wrap:wrap}.sc-emoji-picker--category-title[data-v-4feee432]{min-width:100%;color:#b8c3ca;font-weight:200;font-size:13px;margin:5px;letter-spacing:1px}.sc-emoji-picker--emoji[data-v-4feee432]{margin:5px;width:30px;line-height:30px;text-align:center;cursor:pointer;vertical-align:middle;font-size:28px;transition:transform 60ms ease-out}.sc-emoji-picker--emoji[data-v-4feee432]:hover{transform:scale(1.4)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "364f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3626");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2c21b558", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3715":
/***/ (function(module, exports) {

const defaultTokens = {
  bold: { delimiter: '*', tag: 'strong' },
  italic: { delimiter: '/', tag: 'em' },
  underline: { delimiter: '_', tag: 'u' },
  strike: { delimiter: '~', tag: 'del' },
  code: { delimiter: '`', tag: 'code' },
  sup: { delimiter: '^', tag: 'sup' },
  sub: { delimiter: '¡', tag: 'sub' }
}

const openTag = tag => `<${tag}>`
const closeTag = tag => `</${tag}>`
const encloseTag = (text, tag) => `${openTag(tag)}${text}${closeTag(tag)}`
const parseToken = (text, stopDelimiter) => {
  let index = 0
  let content = ''
  while (index < text.length && text[index] !== stopDelimiter) {
    content += text[index]
    index++
  }
  if (index === text.length) {
    return ''
  } else {
    return content
  }
}

module.exports = (text, tokens = defaultTokens) => {
  tokens = Object.assign({}, defaultTokens, tokens)
  let html = ''
  let index = 0

  const consumeChar = () => {
    html += text[index]
    index++
  }
  const consumeAll = (textRemaining, delimiter) => {
    html += delimiter + textRemaining
    index += textRemaining.length
  }
  const consumeToken = token => {
    index++
    if (text[index] === ' ') {
      html += token.delimiter
      consumeChar()
    } else {
      const textRemaining = text.substr(index)
      const tokenContent = parseToken(textRemaining, token.delimiter)
      if (tokenContent.length === 0) {
        consumeAll(textRemaining, token.delimiter)
      } else {
        html += encloseTag(tokenContent, token.tag)
        index += tokenContent.length + 1
      }
    }
  }

  while (index < text.length) {
    const charCurrent = text[index]
    if (charCurrent === tokens.bold.delimiter) {
      consumeToken(tokens.bold)
    } else if (charCurrent === tokens.italic.delimiter) {
      consumeToken(tokens.italic)
    } else if (charCurrent === tokens.underline.delimiter) {
      consumeToken(tokens.underline)
    } else if (charCurrent === tokens.strike.delimiter) {
      consumeToken(tokens.strike)
    } else if (charCurrent === tokens.code.delimiter) {
      consumeToken(tokens.code)
    } else if (charCurrent === tokens.sup.delimiter) {
      consumeToken(tokens.sup)
    } else if (charCurrent === tokens.sub.delimiter) {
      consumeToken(tokens.sub)
    } else {
      consumeChar()
    }
  }

  return html
}


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "464e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-message{min-width:300px;margin:auto;padding-bottom:10px;display:flex}.sc-message .sc-message--edited{opacity:.7;word-wrap:normal;font-size:xx-small;text-align:center}.sc-message--content{width:100%;display:flex}.sc-message--content.sent{justify-content:flex-end}.sc-message--content.system{justify-content:center}.sc-message--content.sent .sc-message--avatar{display:none}.sc-message--avatar{background-repeat:no-repeat;background-size:100%;background-position:50%;min-width:30px;min-height:30px;border-radius:50%;align-self:center;margin-right:15px}.sc-message--meta{font-size:xx-small;margin-bottom:0;color:#fff;text-align:center}@media(max-width:450px){.sc-message{width:80%}}.sc-message--text{padding:5px 20px;border-radius:6px;font-weight:300;font-size:14px;text-align:left;line-height:1.4;position:relative;-webkit-font-smoothing:subpixel-antialiased}.sc-message--text .sc-message--text-body .sc-message--text-content{white-space:pre-wrap}.sc-message--text:hover .sc-message--toolbox{left:-20px;opacity:1}.sc-message--text .sc-message--toolbox{transition:left .2s ease-out 0s;white-space:normal;opacity:0;position:absolute;left:0;width:25px;top:0}.sc-message--text .sc-message--toolbox button{background:none;border:none;padding:0;margin:0;outline:none;width:100%;text-align:center;cursor:pointer}.sc-message--text .sc-message--toolbox button:focus{outline:none}.sc-message--content.sent .sc-message--text{color:#fff;background-color:#4e8cff;max-width:calc(100% - 120px);word-wrap:break-word}.sc-message--text code{font-family:Courier New,Courier,monospace!important}.sc-message--content.received .sc-message--text{color:#263238;background-color:#f4f7f9;margin-right:40px}.tooltip{display:block!important;z-index:10000}.tooltip .tooltip-inner{background:#000;color:#fff;border-radius:16px;padding:5px 10px 4px}.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#000;z-index:1}.tooltip[x-placement^=top]{margin-bottom:5px}.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=bottom]{margin-top:5px}.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.tooltip[x-placement^=right]{margin-left:5px}.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip[x-placement^=left]{margin-right:5px}.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.tooltip[aria-hidden=true]{visibility:hidden;opacity:0;transition:opacity .15s,visibility .15s}.tooltip[aria-hidden=false]{visibility:visible;opacity:1;transition:opacity .15s}.tooltip.info .tooltip-inner{background:rgba(0,68,153,.9);color:#fff;padding:24px;border-radius:5px;box-shadow:0 5px 30px rgba(0,0,0,.1)}.tooltip.info .tooltip-arrow{border-color:rgba(0,68,153,.9)}.tooltip.popover .popover-inner{background:#f9f9f9;color:#000;padding:24px;border-radius:5px;box-shadow:0 5px 30px rgba(0,0,0,.1)}.tooltip.popover .popover-arrow{border-color:#f9f9f9}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "469a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileIcons_vue_vue_type_style_index_0_id_8bde79dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("25b6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileIcons_vue_vue_type_style_index_0_id_8bde79dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileIcons_vue_vue_type_style_index_0_id_8bde79dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileIcons_vue_vue_type_style_index_0_id_8bde79dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "5026":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_4feee432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("364f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_4feee432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_4feee432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_id_4feee432_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5142":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUxpcf///////////////////////////////////////////////////////3EAnbYAAAAOdFJOUwADZ66SoQjEhnS7/gsNGQL7+wAAAKtJREFUKM+F01sOhCAQRNESFV/I/pc70Og0YJfyJbmHhBAbGGYHstw8IPV4EOGOmERYIhGpxyUAJxHSz/xlC+1FxE64qB1yj1ZID7oXsel+63ovnj2JXUXue+hvrcLugL+EdG+9XBG8X+Kl34J3YM1g/egvIvdx5EK691RIz78YEXdnQrst6m6JqemXmNo+D/WJNAyVePZWWL0WdlfB+l+UAQQReaAc65DB/wGsZgzLN0IQWAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "52f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMessage_vue_vue_type_style_index_0_id_fe3c7442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("61c7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMessage_vue_vue_type_style_index_0_id_fe3c7442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMessage_vue_vue_type_style_index_0_id_fe3c7442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemMessage_vue_vue_type_style_index_0_id_fe3c7442_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "534d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("06b3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6fe3f347", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "53ce":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6c1a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b18adaba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5b2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Launcher_vue_vue_type_style_index_0_id_35648758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f3fb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Launcher_vue_vue_type_style_index_0_id_35648758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Launcher_vue_vue_type_style_index_0_id_35648758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Launcher_vue_vue_type_style_index_0_id_35648758_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5b51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_webChat_vue_vue_type_style_index_0_id_275ada6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("abc3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_webChat_vue_vue_type_style_index_0_id_275ada6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_webChat_vue_vue_type_style_index_0_id_275ada6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_webChat_vue_vue_type_style_index_0_id_275ada6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "611a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a.chatLink[data-v-cac4baf8]{color:inherit!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "61c7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("271d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("cd670206", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6497":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#file-input[data-v-8bde79dc]{cursor:pointer}.sc-user-input--file-icon-wrapper[data-v-8bde79dc]{background:none;border:none;padding:0;margin:0;outline:none;cursor:pointer}.sc-user-input--file-icon[data-v-8bde79dc]{height:20px;width:20px;align-self:center;outline:none}.sc-user-input--file-icon:hover path[data-v-8bde79dc]{-webkit-filter:contrast(15%);filter:contrast(15%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6907":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b66c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("63b3c52f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6c1a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-suggestions-row{text-align:center;background:inherit}.sc-suggestions-element{margin:3px;padding:5px 10px 5px 10px;border:1px solid;border-radius:15px;font-size:14px;background:inherit;cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f78":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-user-input--emoji-icon-wrapper[data-v-ea9aeb78]{background:none;border:none;padding:0;margin:0;outline:none}.sc-user-input--emoji-icon-wrapper[data-v-ea9aeb78]:focus{outline:none}.sc-user-input--emoji-icon[data-v-ea9aeb78]{height:18px;cursor:pointer;align-self:center}.sc-user-input--emoji-icon-wrapper:focus .sc-user-input--emoji-icon circle[data-v-ea9aeb78],.sc-user-input--emoji-icon-wrapper:focus .sc-user-input--emoji-icon path[data-v-ea9aeb78],.sc-user-input--emoji-icon.active circle[data-v-ea9aeb78],.sc-user-input--emoji-icon.active path[data-v-ea9aeb78],.sc-user-input--emoji-icon:hover circle[data-v-ea9aeb78],.sc-user-input--emoji-icon:hover path[data-v-ea9aeb78]{-webkit-filter:contrast(15%);filter:contrast(15%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "715a":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9InN2Z18xIj4NCiAgIDxwYXRoIGlkPSJzdmdfMiIgZmlsbD0iI0U5RTlFMCIgZD0ibTM2Ljk4NSwwbC0yOS4wMjIsMGMtMC44MDgsMCAtMS40NjMsMC42NTUgLTEuNDYzLDEuOTI2bDAsNTMuMDc0YzAsMC4zNDUgMC42NTUsMSAxLjQ2MywxbDQwLjA3NCwwYzAuODA4LDAgMS40NjMsLTAuNjU1IDEuNDYzLC0xbDAsLTQyLjAyMmMwLC0wLjY5NiAtMC4wOTMsLTAuOTIgLTAuMjU3LC0xLjA4NWwtMTEuNjM2LC0xMS42MzZjLTAuMTY1LC0wLjE2NCAtMC4zODksLTAuMjU3IC0wLjYyMiwtMC4yNTd6Ii8+DQogICA8cG9seWdvbiBpZD0ic3ZnXzMiIGZpbGw9IiNEOUQ3Q0EiIHBvaW50cz0iMzcuNSwwLjE1MSAzNy41LDEyIDQ5LjM0OSwxMiAgIi8+DQogICA8cGF0aCBpZD0ic3ZnXzQiIGZpbGw9IiM5NUE1QTUiIGQ9Im00OC4wMzcsNTZsLTQwLjA3NCwwYy0wLjgwOCwwIC0xLjQ2MywtMC42NTUgLTEuNDYzLC0xLjQ2M2wwLC0xNS41MzdsNDMsMGwwLDE1LjUzN2MwLDAuODA4IC0wLjY1NSwxLjQ2MyAtMS40NjMsMS40NjN6Ii8+DQogICA8cGF0aCBpZD0ic3ZnXzkiIGZpbGw9IiNDOEJEQjgiIGQ9Im0xOC41LDEzbC02LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsNiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4NCiAgIDxwYXRoIGlkPSJzdmdfMTAiIGZpbGw9IiNDOEJEQjgiIGQ9Im0yMS41LDE4bC05LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsOSwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4NCiAgIDxwYXRoIGlkPSJzdmdfMTEiIGZpbGw9IiNDOEJEQjgiIGQ9Im0yNS41LDE4Yy0wLjI2LDAgLTAuNTIxLC0wLjExIC0wLjcxLC0wLjI5Yy0wLjE4MSwtMC4xOSAtMC4yOSwtMC40NCAtMC4yOSwtMC43MXMwLjEwOSwtMC41MiAwLjMsLTAuNzFjMC4zNiwtMC4zNyAxLjA0LC0wLjM3IDEuNDEsMGMwLjE4LDAuMTkgMC4yOSwwLjQ1IDAuMjksMC43MWMwLDAuMjYgLTAuMTEsMC41MiAtMC4yOSwwLjcxYy0wLjE5LDAuMTggLTAuNDUsMC4yOSAtMC43MSwwLjI5eiIvPg0KICAgPHBhdGggaWQ9InN2Z18xMiIgZmlsbD0iI0M4QkRCOCIgZD0ibTM3LjUsMThsLTgsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw4LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPg0KICAgPHBhdGggaWQ9InN2Z18xMyIgZmlsbD0iI0M4QkRCOCIgZD0ibTEyLjUsMzNjLTAuMjYsMCAtMC41MjEsLTAuMTEgLTAuNzEsLTAuMjljLTAuMTgxLC0wLjE5IC0wLjI5LC0wLjQ1IC0wLjI5LC0wLjcxYzAsLTAuMjYgMC4xMDksLTAuNTIgMC4yOSwtMC43MWMwLjM3LC0wLjM3IDEuMDUsLTAuMzcgMS40MiwwLjAxYzAuMTgsMC4xOCAwLjI5LDAuNDQgMC4yOSwwLjdjMCwwLjI2IC0wLjExLDAuNTIgLTAuMjksMC43MWMtMC4xOSwwLjE4IC0wLjQ1LDAuMjkgLTAuNzEsMC4yOXoiLz4NCiAgIDxwYXRoIGlkPSJzdmdfMTQiIGZpbGw9IiNDOEJEQjgiIGQ9Im0yNC41LDMzbC04LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsOCwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4NCiAgIDxwYXRoIGlkPSJzdmdfMTUiIGZpbGw9IiNDOEJEQjgiIGQ9Im00My41LDE4bC0yLDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsMiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4NCiAgIDxwYXRoIGlkPSJzdmdfMTYiIGZpbGw9IiNDOEJEQjgiIGQ9Im0zNC41LDIzbC0yMiwwYy0wLjU1MywwIC0xLC0wLjQ0OCAtMSwtMXMwLjQ0NywtMSAxLC0xbDIyLDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPg0KICAgPHBhdGggaWQ9InN2Z18xNyIgZmlsbD0iI0M4QkRCOCIgZD0ibTQzLjUsMjNsLTYsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw2LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPg0KICAgPHBhdGggaWQ9InN2Z18xOCIgZmlsbD0iI0M4QkRCOCIgZD0ibTE2LjUsMjhsLTQsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw0LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPg0KICAgPHBhdGggaWQ9InN2Z18xOSIgZmlsbD0iI0M4QkRCOCIgZD0ibTMwLjUsMjhsLTEwLDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsMTAsMGMwLjU1MywwIDEsMC40NDggMSwxcy0wLjQ0NywxIC0xLDF6Ii8+DQogICA8cGF0aCBpZD0ic3ZnXzIwIiBmaWxsPSIjQzhCREI4IiBkPSJtNDMuNSwyOGwtOSwwYy0wLjU1MywwIC0xLC0wLjQ0OCAtMSwtMXMwLjQ0NywtMSAxLC0xbDksMGMwLjU1MywwIDEsMC40NDggMSwxcy0wLjQ0NywxIC0xLDF6Ii8+DQogIDwvZz4NCiAgPGcgaWQ9InN2Z18yMSIvPg0KICA8ZyBpZD0ic3ZnXzIyIi8+DQogIDxnIGlkPSJzdmdfMjMiLz4NCiAgPGcgaWQ9InN2Z18yNCIvPg0KICA8ZyBpZD0ic3ZnXzI1Ii8+DQogIDxnIGlkPSJzdmdfMjYiLz4NCiAgPGcgaWQ9InN2Z18yNyIvPg0KICA8ZyBpZD0ic3ZnXzI4Ii8+DQogIDxnIGlkPSJzdmdfMjkiLz4NCiAgPGcgaWQ9InN2Z18zMCIvPg0KICA8ZyBpZD0ic3ZnXzMxIi8+DQogIDxnIGlkPSJzdmdfMzIiLz4NCiAgPGcgaWQ9InN2Z18zMyIvPg0KICA8ZyBpZD0ic3ZnXzM0Ii8+DQogIDxnIGlkPSJzdmdfMzUiLz4NCjwvc3ZnPg=="

/***/ }),

/***/ "732a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e609");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1e0de647", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f89":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ce93");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3e22d771", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7f96":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("611a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2933b3ea", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "8052":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_lqwan_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc3c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_lqwan_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_lqwan_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_lqwan_AppData_Roaming_npm_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8807":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb713ea3906736f3b234be815cb037be.png";

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8f6e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1254");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5675d60d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "91c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypingMessage_vue_vue_type_style_index_0_id_9ab9d830_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("534d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypingMessage_vue_vue_type_style_index_0_id_9ab9d830_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypingMessage_vue_vue_type_style_index_0_id_9ab9d830_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypingMessage_vue_vue_type_style_index_0_id_9ab9d830_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9911":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9b9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageList_vue_vue_type_style_index_0_id_094795c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f89");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageList_vue_vue_type_style_index_0_id_094795c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageList_vue_vue_type_style_index_0_id_094795c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageList_vue_vue_type_style_index_0_id_094795c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e91":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-launcher[data-v-35648758]{background-position:50%;background-repeat:no-repeat;position:fixed;right:25px;bottom:25px;box-shadow:none;cursor:pointer}.sc-launcher[data-v-35648758],.sc-launcher[data-v-35648758]:before{width:60px;height:60px;border-radius:50%;transition:box-shadow .2s ease-in-out}.sc-launcher[data-v-35648758]:before{content:\"\";position:relative;display:block}.sc-launcher .sc-closed-icon[data-v-35648758],.sc-launcher .sc-open-icon[data-v-35648758]{position:fixed;right:25px;bottom:25px}.sc-launcher .sc-closed-icon[data-v-35648758],.sc-launcher .sc-open-icon[data-v-35648758]{width:60px;height:60px;transition:opacity .1s ease-in-out,transform .1s ease-in-out}.sc-launcher .sc-open-icon[data-v-35648758]{padding:20px;box-sizing:border-box;opacity:1}.sc-launcher.opened .sc-closed-icon[data-v-35648758],.sc-launcher.opened .sc-open-icon[data-v-35648758]{transform:rotate(-90deg);opacity:1}.sc-launcher.opened[data-v-35648758]:before{box-shadow:0 0 400px 250px rgba(148,149,150,.2)}.sc-launcher[data-v-35648758]:hover{box-shadow:0 0 27px 1.5px rgba(0,0,0,.2)}.sc-new-messsages-count[data-v-35648758]{position:absolute;top:-3px;left:41px;display:flex;justify-content:center;flex-direction:column;border-radius:50%;width:22px;height:22px;background:#ff4646;color:#fff;text-align:center;margin:auto;font-size:12px;font-weight:500}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9e98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMessage_vue_vue_type_style_index_0_id_cac4baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f96");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMessage_vue_vue_type_style_index_0_id_cac4baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMessage_vue_vue_type_style_index_0_id_cac4baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextMessage_vue_vue_type_style_index_0_id_cac4baf8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a935":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6f78");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("e50246fa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "a96b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-header[data-v-e6440632]{min-height:75px;border-top-left-radius:9px;border-top-right-radius:9px;padding:10px;box-shadow:0 1px 4px rgba(0,0,0,.2);position:relative;box-sizing:border-box;display:flex}.sc-header--img[data-v-e6440632]{border-radius:50%;align-self:center;padding:10px}.sc-header--title[data-v-e6440632]{align-self:center;padding:10px;flex:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:18px}.sc-header--title.enabled[data-v-e6440632]{cursor:pointer;border-radius:5px}.sc-header--title.enabled[data-v-e6440632]:hover{box-shadow:0 2px 5px rgba(.2,.2,.5,.1)}.sc-header--close-button[data-v-e6440632]{width:40px;align-self:center;height:40px;margin-right:10px;box-sizing:border-box;cursor:pointer;border-radius:5px;margin-left:auto}.sc-header--close-button[data-v-e6440632]:hover{box-shadow:0 2px 5px rgba(.2,.2,.5,.1)}.sc-header--close-button img[data-v-e6440632]{width:100%;height:100%;padding:13px;box-sizing:border-box}@media (max-width:450px){.sc-header[data-v-e6440632]{border-radius:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "abc3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ad7e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1f694c20", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileMessage_vue_vue_type_style_index_0_id_6b0efd78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f6e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileMessage_vue_vue_type_style_index_0_id_6b0efd78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileMessage_vue_vue_type_style_index_0_id_6b0efd78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileMessage_vue_vue_type_style_index_0_id_6b0efd78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ad7e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h3[data-v-275ada6d]{margin:40px 0 0}ul[data-v-275ada6d]{list-style-type:none;padding:0}li[data-v-275ada6d]{display:inline-block;margin:0 10px}a[data-v-275ada6d]{color:#42b983}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b66c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b6e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputButton_vue_vue_type_style_index_0_id_1d0be124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("732a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputButton_vue_vue_type_style_index_0_id_1d0be124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputButton_vue_vue_type_style_index_0_id_1d0be124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputButton_vue_vue_type_style_index_0_id_1d0be124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "b867":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a96b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4c4b3c0c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bbff":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("13bc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5c0e41ba", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bc3c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("464e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("520fcb61", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "be6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e6440632_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b867");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e6440632_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e6440632_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e6440632_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bfe2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiIcon_vue_vue_type_style_index_0_id_ea9aeb78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a935");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiIcon_vue_vue_type_style_index_0_id_ea9aeb78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiIcon_vue_vue_type_style_index_0_id_ea9aeb78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiIcon_vue_vue_type_style_index_0_id_ea9aeb78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c1ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_style_index_0_id_61cb7619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1416");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_style_index_0_id_61cb7619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_style_index_0_id_61cb7619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IconBase_vue_vue_type_style_index_0_id_61cb7619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c5bc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxyZWN0IGlkPSJiYWNrZ3JvdW5kcmVjdCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTt9LmJ7ZmlsbDojNGU4Y2ZmO30uY3tjbGlwLXBhdGg6dXJsKCNhKTt9LmR7ZmlsbDojZmZmO30uZXtmaWxsOiNlZmY0Zjk7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBjbGFzcz0iYSIgZD0iTSAwIDAgSCAxNy41NTUgdiAxNy41NTUgSCAwIFoiIGlkPSJzdmdfMSIgdHJhbnNmb3JtPSIiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PGcgaWQ9InN2Z18yIiBjbGFzcz0ic2VsZWN0ZWQiIHRyYW5zZm9ybT0iIj48ZyBpZD0ic3ZnXzMiIHRyYW5zZm9ybT0iIj48ZyBjbGFzcz0iYyIgaWQ9InN2Z180IiB0cmFuc2Zvcm09IiI+PGcgaWQ9InN2Z181IiB0cmFuc2Zvcm09IiI+PHBhdGggY2xhc3M9ImQiIGQ9Ik0gMTcuNTU2IDguNzc4NDIgYSA4Ljc3OCA4Ljc3OCAwIDAgMCAtOC43NzggLTguNzc4IGEgOC43NzggOC43NzggMCAwIDAgLTguNzc4IDguNzc4IGEgOC43NDUgOC43NDUgMCAwIDAgMi4yNiA1Ljg3OSB2IDEuNDQyIGMgMCAwLjggMC40OTIgMS40NTcgMS4xIDEuNDU3IGggNS44MyBhIDAuODQzIDAuODQzIDAgMCAwIDAuMTgzIC0wLjAyIGEgOC43NzggOC43NzggMCAwIDAgOC4xODQgLTguNzU3IiBpZD0ic3ZnXzYiIHRyYW5zZm9ybT0iIi8+PC9nPjxnIGlkPSJzdmdfNyIgdHJhbnNmb3JtPSIiPjxwYXRoIGNsYXNzPSJlIiBkPSJNIDMuMTYxNDggOC45MjEgYSA5LjI5MiA5LjI5MiAwIDAgMSA2LjM4IC04Ljg4OCBjIC0wLjI1MiAtMC4wMjIgLTAuNTA2IC0wLjAzMyAtMC43NjMgLTAuMDMzIGEgOC43NzQgOC43NzQgMCAwIDAgLTguNzc4IDguNzc4IEEgOS41MDggOS41MDggMCAwIDAgMi4yMjQ0NyAxNC43MDAzIGMgMC4wMDUgMCAwIDAuMDA5IDAgMC4wMSBjIC0wLjMxMSAwLjM1MiAtMS45MjQgMi44NDkgMC4wMjEgMi44NDkgaCAyLjI1IGMgLTEuMjMgLTAuMDIyIDEuMjYzIC0yLjEwNyAwLjI2OSAtMy40OTQgYSA4LjIyNSA4LjIyNSAwIDAgMSAtMS42IC01LjE0MSIgaWQ9InN2Z184IiB0cmFuc2Zvcm09IiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "c5cb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2b42da86a228bea5b3844068614d277.png";

/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cd9b":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODgNCgkJYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0Mg0KCQlDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkNCgkJczEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "cddd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_4fc78982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcd5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_4fc78982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_4fc78982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_id_4fc78982_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ce93":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-message-list[data-v-094795c8]{border-radius:10px 10px 10px 10px/10px 10px 0 0;min-height:420px;height:75%;overflow-y:auto;background-size:100%;padding:10px 0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cec0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53ce");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dcd5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1862");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c372f4ce", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e609":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sc-user-input--button-icon-wrapper[data-v-1d0be124]{background:none;border:none;padding:0;margin:0;outline:none;cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "edbf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

;(function() {

	var root = this;
	var previous_emoji = root.EmojiConvertor;


	/**
	 * @global
	 * @namespace
	 */

	var emoji = function(){

		var self = this;

		/**
		 * The set of images to use for graphical emoji.
		 *
		 * @memberof emoji
		 * @type {string}
		 */
		self.img_set = 'apple';

		/**
		 * Configuration details for different image sets. This includes a path to a directory containing the
		 * individual images (`path`) and a URL to sprite sheets (`sheet`). All of these images can be found
		 * in the [emoji-data repository]{@link https://github.com/iamcal/emoji-data}. Using a CDN for these
		 * is not a bad idea.
		 *
		 * @memberof emoji
		 * @type {object}
		 */
		self.img_sets = {
			'apple' : {'path' : '/emoji-data/img-apple-64/', 'sheet' : '/emoji-data/sheet_apple_64.png', 'sheet_size' : 64, 'mask' : 1},
			'google' : {'path' : '/emoji-data/img-google-64/', 'sheet' : '/emoji-data/sheet_google_64.png', 'sheet_size' : 64, 'mask' : 2},
			'twitter' : {'path' : '/emoji-data/img-twitter-64/', 'sheet' : '/emoji-data/sheet_twitter_64.png', 'sheet_size' : 64, 'mask' : 4},
			'facebook' : {'path' : '/emoji-data/img-facebook-64/', 'sheet' : '/emoji-data/sheet_facebook_64.png', 'sheet_size' : 64, 'mask' : 8},
			'messenger' : {'path' : '/emoji-data/img-messenger-64/', 'sheet' : '/emoji-data/sheet_messenger_64.png', 'sheet_size' : 64, 'mask' : 16},
		};

		/**
		 * Use a CSS class instead of specifying a sprite or background image for
		 * the span representing the emoticon. This requires a CSS sheet with
		 * emoticon data-uris.
		 *
		 * @memberof emoji
		 * @type bool
		 * @todo document how to build the CSS stylesheet self requires.
		 */
		self.use_css_imgs = false;

		/**
		 * Instead of replacing emoticons with the appropriate representations,
		 * replace them with their colon string representation.
		 * @memberof emoji
		 * @type bool
		 */
		self.colons_mode = false;
		self.text_mode = false;

		/**
		 * If true, sets the "title" property on the span or image that gets
		 * inserted for the emoticon.
		 * @memberof emoji
		 * @type bool
		 */
		self.include_title = false;

		/**
		 * If true, sets the text of the span or image that gets inserted for the
		 * emoticon.
		 * @memberof emoji
		 * @type bool
		 */
		self.include_text = false;

		/**
		 * If the platform supports native emoticons, use those instead
		 * of the fallbacks.
		 * @memberof emoji
		 * @type bool
		 */
		self.allow_native = true;

		/**
		 * Wrap native with a <span class="emoji-native"></span> to allow styling
		 * @memberof emoji
		 * @type bool
		 */
		self.wrap_native = false;

		/**
		 * Set to true to use CSS sprites instead of individual images on
		 * platforms that support it.
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.use_sheet = false;

		/**
		 *
		 * Set to true to avoid black & white native Windows emoji being used.
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.avoid_ms_emoji = true;

		/**
		 *
		 * Set to true to allow :CAPITALIZATION:
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.allow_caps = false;


		/**
		 *
		 * Suffix to allow for individual image cache busting
		 *
		 * @memberof emoji
		 * @type string
		 */
		self.img_suffix = '';


		// Keeps track of what has been initialized.
		/** @private */
		self.inits = {};
		self.map = {};

		// discover the environment settings
		self.init_env();

		return self;
	}

	emoji.prototype.noConflict = function(){
		root.EmojiConvertor = previous_emoji;
		return emoji;
	}


	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing ascii emoticons
	 * (ie. `:)`)
	 *
	 * @returns {string} A new string with all emoticons in `str`
	 * replaced by a representatation that's supported by the current
	 * environtment.
	 */
	emoji.prototype.replace_emoticons = function(str){
		var self = this;
		var colonized = self.replace_emoticons_with_colons(str);
		return self.replace_colons(colonized);
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing ascii emoticons
	 * (ie. `:)`)
	 *
	 * @returns {string} A new string with all emoticons in `str`
	 * replaced by their colon string representations (ie. `:smile:`)
	 */
	emoji.prototype.replace_emoticons_with_colons = function(str){
		var self = this;
		self.init_emoticons();
		var _prev_offset = 0;
		var emoticons_with_parens = [];
		var str_replaced = str.replace(self.rx_emoticons, function(m, $1, emoticon, offset){
			var prev_offset = _prev_offset;
			_prev_offset = offset + m.length;

			var has_open_paren = emoticon.indexOf('(') !== -1;
			var has_close_paren = emoticon.indexOf(')') !== -1;

			/*
			 * Track paren-having emoticons for fixing later
			 */
			if ((has_open_paren || has_close_paren) && emoticons_with_parens.indexOf(emoticon) == -1) {
				emoticons_with_parens.push(emoticon);
			}

			/*
			 * Look for preceding open paren for emoticons that contain a close paren
			 * This prevents matching "8)" inside "(around 7 - 8)"
			 */
			if (has_close_paren && !has_open_paren) {
				var piece = str.substring(prev_offset, offset);
				if (piece.indexOf('(') !== -1 && piece.indexOf(')') === -1) return m;
			}

			/*
			 * See if we're in a numbered list
			 * This prevents matching "8)" inside "7) foo\n8) bar"
			 */
			if (m === '\n8)') {
				var before_match = str.substring(0, offset);
				if (/\n?(6\)|7\))/.test(before_match)) return m;
			}

			var val = self.data[self.map.emoticons[emoticon]][3][0];
			return val ? $1+':'+val+':' : m;
		});

		/*
		 * Come back and fix emoticons we ignored because they were inside parens.
		 * It's useful to do self at the end so we don't get tripped up by other,
		 * normal emoticons
		 */
		if (emoticons_with_parens.length) {
			var escaped_emoticons = emoticons_with_parens.map(self.escape_rx);
			var parenthetical_rx = new RegExp('(\\(.+)('+escaped_emoticons.join('|')+')(.+\\))', 'g');

			str_replaced = str_replaced.replace(parenthetical_rx, function(m, $1, emoticon, $2) {
				var val = self.data[self.map.emoticons[emoticon]][3][0];
				return val ? $1+':'+val+':'+$2 : m;
			});
		}

		return str_replaced;
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing colon string
	 * representations of emoticons (ie. `:smile:`)
	 *
	 * @returns {string} A new string with all colon string emoticons replaced
	 * with the appropriate representation.
	 */
	emoji.prototype.replace_colons = function(str){
		var self = this;
		self.init_colons();

		return str.replace(self.rx_colons, function(m){
			var idx = m.substr(1, m.length-2);
			if (self.allow_caps) idx = idx.toLowerCase();

			// special case - an emoji with a skintone modified
			if (idx.indexOf('::skin-tone-') > -1){

				var skin_tone = idx.substr(-1, 1);
				var skin_idx = 'skin-tone-'+skin_tone;
				var skin_val = self.map.colons[skin_idx];

				idx = idx.substr(0, idx.length - 13);

				var val = self.map.colons[idx];
				if (val){
					return self.replacement(val, idx, ':', {
						'idx'		: skin_val,
						'actual'	: skin_idx,
						'wrapper'	: ':'
					});
				}else{
					return ':' + idx + ':' + self.replacement(skin_val, skin_idx, ':');
				}
			}else{
				var val = self.map.colons[idx];
				return val ? self.replacement(val, idx, ':') : m;
			}
		});
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing unified unicode
	 * emoticons. (ie. 😄)
	 *
	 * @returns {string} A new string with all unicode emoticons replaced with
	 * the appropriate representation for the current environment.
	 */
	emoji.prototype.replace_unified = function(str){
		var self = this;
		self.init_unified();
		return str.replace(self.rx_unified, function(m, p1, p2){

			var val = self.map.unified[p1];
			if (val){
				var idx = null;
				if (p2 == '\uD83C\uDFFB') idx = '1f3fb';
				if (p2 == '\uD83C\uDFFC') idx = '1f3fc';
				if (p2 == '\uD83C\uDFFD') idx = '1f3fd';
				if (p2 == '\uD83C\uDFFE') idx = '1f3fe';
				if (p2 == '\uD83C\uDFFF') idx = '1f3ff';
				if (idx){
					return self.replacement(val, null, null, {
						idx	: idx,
						actual	: p2,
						wrapper	: ''
					});
					}
				return self.replacement(val);
			}

			val = self.map.unified_vars[p1];
			if (val){
				return self.replacement(val[0], null, null, {
					'idx'		: val[1],
					'actual'	: '',
					'wrapper'	: '',
				});
			}

			return m;
		});
	};

	emoji.prototype.addAliases = function(map){
		var self = this;

		self.init_colons();
		for (var i in map){
			self.map.colons[i] = map[i];
		}
	};

	emoji.prototype.removeAliases = function(list){
		var self = this;

		for (var i=0; i<list.length; i++){
			var alias = list[i];

			// first, delete the alias mapping
			delete self.map.colons[alias];

			// now reset it to the default, if one exists
			finder_block: {
				for (var j in self.data){
					for (var k=0; k<self.data[j][3].length; k++){
						if (alias == self.data[j][3][k]){
							self.map.colons[alias] = j;
							break finder_block;
						}
					}
				}
			}
		}
	};


	// Does the actual replacement of a character with the appropriate
	/** @private */
	emoji.prototype.replacement = function(idx, actual, wrapper, variation, is_extra){
		var self = this;

		var full_idx = idx;

		// for emoji with variation modifiers, set `extra` to the standalone output for the
		// modifier (used if we can't combine the glyph) and set variation_idx to key of the
		// variation modifier (used below)
		var extra = '';
		var var_idx = null;
		if (typeof variation === 'object'){
			extra = self.replacement(variation.idx, variation.actual, variation.wrapper, undefined, true);
			var_idx = variation.idx;
		}

		// deal with simple modes (colons and text) first
		wrapper = wrapper || '';
		if (self.colons_mode) return ':'+self.data[idx][3][0]+':'+extra;
		var text_name = (actual) ? wrapper+actual+wrapper : self.data[idx][8] || wrapper+self.data[idx][3][0]+wrapper;
		if (self.text_mode) return text_name + extra;

		// figure out which images and code points to use, based on the skin variations. this information is also used for
		// unified native output mode
		var img = self.find_image(idx, var_idx);

		// native modes next.
		// for variations selectors, we just need to output them raw, which `extra` will contain. since softbank and google don't
		// support skin variations, we'll keep `extra` around, every if we have a valid variation selector
		self.init_env();
		if (self.replace_mode == 'softbank' && self.allow_native && self.data[idx][1]) return self.format_native(self.data[idx][1] + extra, !is_extra);
		if (self.replace_mode == 'google'   && self.allow_native && self.data[idx][2]) return self.format_native(self.data[idx][2] + extra, !is_extra);

		// for unified (and images, below), we can use the variation info and throw away the `extra` contents
		if (img.is_var){
			extra = '';
		}
		if (self.replace_mode == 'unified' && self.allow_native) return self.format_native(img.unified + extra, !is_extra);


		// finally deal with image modes.
		// the call to .find_image() earlier checked if the image set and particular emoji supports variations,
		// otherwise we can return it as a separate image (already calculated in `extra`).
		// first we set up the params we'll use if we can't use a variation.
		var title = self.include_title ? ' title="'+(actual || self.data[idx][3][0])+'"' : '';
		var text  = self.include_text  ? wrapper+(actual || self.data[idx][3][0])+wrapper : '';

		// custom image for this glyph?
		if (self.data[idx][7]){
			img.path = self.data[idx][7];
			img.px = null;
			img.py = null;
			img.is_var = false;
		}

		// if we're displaying a variation, include it in the text
		if (img.is_var && self.include_text && variation && variation.actual && variation.wrapper) {
			text += variation.wrapper+variation.actual+variation.wrapper;
		}

		// output
		if (self.supports_css) {
			if (self.use_sheet && img.px != null && img.py != null){
				var sheet_size = self.sheet_size * (img.sheet_size+2); // size of image in pixels
				var sheet_x = 100 * (((img.px * (img.sheet_size+2)) + 1) / (sheet_size - img.sheet_size));
				var sheet_y = 100 * (((img.py * (img.sheet_size+2)) + 1) / (sheet_size - img.sheet_size));
				var sheet_sz = 100 * (sheet_size / img.sheet_size);

				var style = 'background: url('+img.sheet+');background-position:'+(sheet_x)+'% '+(sheet_y)+'%;background-size:'+sheet_sz+'% '+sheet_sz+'%';
				return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="'+style+'"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span></span>'+extra;
			}else if (self.use_css_imgs){
				return '<span class="emoji emoji-'+idx+'"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span>'+extra;
			}else{
				return '<span class="emoji emoji-sizer" style="background-image:url('+img.path+')"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span>'+extra;
			}
		}
		return '<img src="'+img.path+'" class="emoji" data-codepoints="'+img.full_idx+'" '+title+'/>'+extra;
	};

	// Wraps the output of a native endpoint, if configured
	/** @private */
	emoji.prototype.format_native = function(native, allow_wrap){
		var self = this;

		if (self.wrap_native && allow_wrap){
			return '<span class="emoji-native">'+ native + '</span>';
		}
		return native;
	};

	// Finds the best image to display, taking into account image set precedence and obsoletes
	/** @private */
	emoji.prototype.find_image = function(idx, var_idx){
		var self = this;

		// set up some initial state
		var out = {
			'path'		: '',
			'sheet'		: '',
			'sheet_size'	: 0,
			'px'		: self.data[idx][4],
			'py'		: self.data[idx][5],
			'full_idx'	: idx,
			'is_var'	: false,
			'unified'	: self.data[idx][0][0]
		};
		var use_mask = self.data[idx][6];

		// can we use a variation?
		if (var_idx && self.variations_data[idx] && self.variations_data[idx][var_idx]){
			var var_data = self.variations_data[idx][var_idx];

			out.px = var_data[1];
			out.py = var_data[2];
			out.full_idx = var_data[0];
			out.is_var = true;
			out.unified = var_data[4];
			use_mask = var_data[3];
		}

		// this matches `build/build_image.php` `in emoji-data`, so that sheet and images modes always
		// agree about the image to use.
		var try_order = [self.img_set, 'apple', 'google', 'twitter', 'facebook', 'messenger'];

		// for each image set, see if we have the image we need. otherwise check for an obsolete in
		// that image set
		for (var j=0; j<try_order.length; j++){
			if (use_mask & self.img_sets[try_order[j]].mask){
				out.path = self.img_sets[try_order[j]].path+out.full_idx+'.png' + self.img_suffix;
				// if we're not changing glyph, use our base set for sheets - it has every glyph
				out.sheet = self.img_sets[self.img_set].sheet;
				out.sheet_size = self.img_sets[self.img_set].sheet_size;
				return out;
			}
			if (self.obsoletes_data[out.full_idx]){
				var ob_data = self.obsoletes_data[out.full_idx];

				if (ob_data[3] & self.img_sets[try_order[j]].mask){
					out.path = self.img_sets[try_order[j]].path+ob_data[0]+'.png' + self.img_suffix;
					out.sheet = self.img_sets[try_order[j]].sheet;
					out.sheet_size = self.img_sets[try_order[j]].sheet_size;
					out.px = ob_data[1];
					out.py = ob_data[2];
					return out;
				}
			}
		}

		return out;
	};

	// Initializes the text emoticon data
	/** @private */
	emoji.prototype.init_emoticons = function(){
		var self = this;
		if (self.inits.emoticons) return;
		self.init_colons(); // we require this for the emoticons map
		self.inits.emoticons = 1;

		var a = [];
		self.map.emoticons = {};
		for (var i in self.emoticons_data){
			// because we never see some characters in our text except as entities, we must do some replacing
			var emoticon = i.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');

			if (!self.map.colons[self.emoticons_data[i]]) continue;

			self.map.emoticons[emoticon] = self.map.colons[self.emoticons_data[i]];
			a.push(self.escape_rx(emoticon));
		}
		self.rx_emoticons = new RegExp(('(^|\\s)('+a.join('|')+')(?=$|[\\s|\\?\\.,!])'), 'g');
	};

	// Initializes the colon string data
	/** @private */
	emoji.prototype.init_colons = function(){
		var self = this;
		if (self.inits.colons) return;
		self.inits.colons = 1;
		self.rx_colons = new RegExp('\:[a-zA-Z0-9-_+]+\:(\:skin-tone-[2-6]\:)?', 'g');
		self.map.colons = {};
		for (var i in self.data){
			for (var j=0; j<self.data[i][3].length; j++){
				self.map.colons[self.data[i][3][j]] = i;
			}
		}
	};

	// initializes the unified unicode emoticon data
	/** @private */
	emoji.prototype.init_unified = function(){
		var self = this;
		if (self.inits.unified) return;
		self.inits.unified = 1;

		var a = [];
		self.map.unified = {};
		self.map.unified_vars = {};

		for (var i in self.data){
			for (var j=0; j<self.data[i][0].length; j++){
				a.push(self.data[i][0][j].replace('*', '\\*'));
				self.map.unified[self.data[i][0][j]] = i;
			}
		}
		for (var i in self.variations_data){
			// skip simple append-style skin tones
			if (self.variations_data[i]['1f3fb'][0] == i+'-1f3fb') continue;

			for (var k in self.variations_data[i]){
				for (var j=0; j<self.variations_data[i][k][4].length; j++){
					a.push(self.variations_data[i][k][4][j].replace('*', '\\*'));
					self.map.unified_vars[self.variations_data[i][k][4][j]] = [i, k];
				}
			}
		}

		a = a.sort(function(a,b){
			 return b.length - a.length;
		});

		self.rx_unified = new RegExp('('+a.join('|')+')(\uD83C[\uDFFB-\uDFFF])?', "g");
	};

	// initializes the environment, figuring out what representation
	// of emoticons is best.
	/** @private */
	emoji.prototype.init_env = function(){
		var self = this;
		if (self.inits.env) return;
		self.inits.env = 1;
		self.replace_mode = 'img';
		self.supports_css = false;
		if (typeof(navigator) !== 'undefined') {
			var ua = navigator.userAgent;
			if (typeof window !== 'undefined' && window.getComputedStyle){
				try {
					var st = window.getComputedStyle(document.body);
					if (st['background-size'] || st['backgroundSize']){
						self.supports_css = true;
					}
				} catch(e){
					// Swallow an exception caused by hidden iFrames on Firefox
					// https://github.com/iamcal/js-emoji/issues/73
					if (ua.match(/Firefox/i)){
						self.supports_css = true;
					}
				}
			}
			if (navigator.product.match(/ReactNative/i)){
				self.replace_mode = 'unified';
				return;
			}
			if (ua.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)){
				if (ua.match(/OS\s+[12345]/i)){
					self.replace_mode = 'softbank';
					return;
				}
				if (ua.match(/OS\s+[6789]/i)){
					self.replace_mode = 'unified';
					return;
				}
			}
			if (ua.match(/Mac OS X 10[._ ](?:[789]|1\d)/i)){
				self.replace_mode = 'unified';
				return;
			}
			if (!self.avoid_ms_emoji){
				if (ua.match(/Windows NT 6.[1-9]/i) || ua.match(/Windows NT 10.[0-9]/i)){
					if (!ua.match(/Chrome/i) && !ua.match(/MSIE 8/i)){
						self.replace_mode = 'unified';
						return;
					}
				}
			}
		}

		// Need a better way to detect android devices that actually
		// support emoji.
		if (false){}
		if (self.supports_css){
			self.replace_mode = 'css';
		}
		// nothing fancy detected - use images
	};
	/** @private */
	emoji.prototype.escape_rx = function(text){
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	};
	emoji.prototype.sheet_size = 52;
	/** @private */
	emoji.prototype.data = {
		"0023-fe0f-20e3":[["\u0023\uFE0F\u20E3","\u0023\u20E3"],"\uE210","\uDBBA\uDC2C",["hash"],0,0,7,0],
		"002a-fe0f-20e3":[["\u002A\uFE0F\u20E3","\u002A\u20E3"],"","",["keycap_star"],0,1,7,0],
		"0030-fe0f-20e3":[["\u0030\uFE0F\u20E3","\u0030\u20E3"],"\uE225","\uDBBA\uDC37",["zero"],0,2,7,0],
		"0031-fe0f-20e3":[["\u0031\uFE0F\u20E3","\u0031\u20E3"],"\uE21C","\uDBBA\uDC2E",["one"],0,3,7,0],
		"0032-fe0f-20e3":[["\u0032\uFE0F\u20E3","\u0032\u20E3"],"\uE21D","\uDBBA\uDC2F",["two"],0,4,7,0],
		"0033-fe0f-20e3":[["\u0033\uFE0F\u20E3","\u0033\u20E3"],"\uE21E","\uDBBA\uDC30",["three"],0,5,7,0],
		"0034-fe0f-20e3":[["\u0034\uFE0F\u20E3","\u0034\u20E3"],"\uE21F","\uDBBA\uDC31",["four"],0,6,7,0],
		"0035-fe0f-20e3":[["\u0035\uFE0F\u20E3","\u0035\u20E3"],"\uE220","\uDBBA\uDC32",["five"],0,7,7,0],
		"0036-fe0f-20e3":[["\u0036\uFE0F\u20E3","\u0036\u20E3"],"\uE221","\uDBBA\uDC33",["six"],0,8,7,0],
		"0037-fe0f-20e3":[["\u0037\uFE0F\u20E3","\u0037\u20E3"],"\uE222","\uDBBA\uDC34",["seven"],0,9,7,0],
		"0038-fe0f-20e3":[["\u0038\uFE0F\u20E3","\u0038\u20E3"],"\uE223","\uDBBA\uDC35",["eight"],0,10,7,0],
		"0039-fe0f-20e3":[["\u0039\uFE0F\u20E3","\u0039\u20E3"],"\uE224","\uDBBA\uDC36",["nine"],0,11,7,0],
		"00a9-fe0f":[["\u00A9\uFE0F","\u00A9"],"\uE24E","\uDBBA\uDF29",["copyright"],0,12,3,0],
		"00ae-fe0f":[["\u00AE\uFE0F","\u00AE"],"\uE24F","\uDBBA\uDF2D",["registered"],0,13,3,0],
		"1f004":[["\uD83C\uDC04"],"\uE12D","\uDBBA\uDC0B",["mahjong"],0,14,31,0],
		"1f0cf":[["\uD83C\uDCCF"],"","\uDBBA\uDC12",["black_joker"],0,15,31,0],
		"1f170-fe0f":[["\uD83C\uDD70\uFE0F","\uD83C\uDD70"],"\uE532","\uDBB9\uDD0B",["a"],0,16,31,0],
		"1f171-fe0f":[["\uD83C\uDD71\uFE0F","\uD83C\uDD71"],"\uE533","\uDBB9\uDD0C",["b"],0,17,31,0],
		"1f17e-fe0f":[["\uD83C\uDD7E\uFE0F","\uD83C\uDD7E"],"\uE535","\uDBB9\uDD0E",["o2"],0,18,31,0],
		"1f17f-fe0f":[["\uD83C\uDD7F\uFE0F","\uD83C\uDD7F"],"\uE14F","\uDBB9\uDFF6",["parking"],0,19,31,0],
		"1f18e":[["\uD83C\uDD8E"],"\uE534","\uDBB9\uDD0D",["ab"],0,20,31,0],
		"1f191":[["\uD83C\uDD91"],"","\uDBBA\uDF84",["cl"],0,21,31,0],
		"1f192":[["\uD83C\uDD92"],"\uE214","\uDBBA\uDF38",["cool"],0,22,31,0],
		"1f193":[["\uD83C\uDD93"],"","\uDBBA\uDF21",["free"],0,23,31,0],
		"1f194":[["\uD83C\uDD94"],"\uE229","\uDBBA\uDF81",["id"],0,24,31,0],
		"1f195":[["\uD83C\uDD95"],"\uE212","\uDBBA\uDF36",["new"],0,25,31,0],
		"1f196":[["\uD83C\uDD96"],"","\uDBBA\uDF28",["ng"],0,26,31,0],
		"1f197":[["\uD83C\uDD97"],"\uE24D","\uDBBA\uDF27",["ok"],0,27,31,0],
		"1f198":[["\uD83C\uDD98"],"","\uDBBA\uDF4F",["sos"],0,28,31,0],
		"1f199":[["\uD83C\uDD99"],"\uE213","\uDBBA\uDF37",["up"],0,29,31,0],
		"1f19a":[["\uD83C\uDD9A"],"\uE12E","\uDBBA\uDF32",["vs"],0,30,31,0],
		"1f1e6-1f1e8":[["\uD83C\uDDE6\uD83C\uDDE8"],"","",["flag-ac"],0,31,31,0],
		"1f1e6-1f1e9":[["\uD83C\uDDE6\uD83C\uDDE9"],"","",["flag-ad"],0,32,31,0],
		"1f1e6-1f1ea":[["\uD83C\uDDE6\uD83C\uDDEA"],"","",["flag-ae"],0,33,31,0],
		"1f1e6-1f1eb":[["\uD83C\uDDE6\uD83C\uDDEB"],"","",["flag-af"],0,34,31,0],
		"1f1e6-1f1ec":[["\uD83C\uDDE6\uD83C\uDDEC"],"","",["flag-ag"],0,35,31,0],
		"1f1e6-1f1ee":[["\uD83C\uDDE6\uD83C\uDDEE"],"","",["flag-ai"],0,36,31,0],
		"1f1e6-1f1f1":[["\uD83C\uDDE6\uD83C\uDDF1"],"","",["flag-al"],0,37,31,0],
		"1f1e6-1f1f2":[["\uD83C\uDDE6\uD83C\uDDF2"],"","",["flag-am"],0,38,31,0],
		"1f1e6-1f1f4":[["\uD83C\uDDE6\uD83C\uDDF4"],"","",["flag-ao"],0,39,31,0],
		"1f1e6-1f1f6":[["\uD83C\uDDE6\uD83C\uDDF6"],"","",["flag-aq"],0,40,31,0],
		"1f1e6-1f1f7":[["\uD83C\uDDE6\uD83C\uDDF7"],"","",["flag-ar"],0,41,31,0],
		"1f1e6-1f1f8":[["\uD83C\uDDE6\uD83C\uDDF8"],"","",["flag-as"],0,42,31,0],
		"1f1e6-1f1f9":[["\uD83C\uDDE6\uD83C\uDDF9"],"","",["flag-at"],0,43,31,0],
		"1f1e6-1f1fa":[["\uD83C\uDDE6\uD83C\uDDFA"],"","",["flag-au"],0,44,31,0],
		"1f1e6-1f1fc":[["\uD83C\uDDE6\uD83C\uDDFC"],"","",["flag-aw"],0,45,31,0],
		"1f1e6-1f1fd":[["\uD83C\uDDE6\uD83C\uDDFD"],"","",["flag-ax"],0,46,31,0],
		"1f1e6-1f1ff":[["\uD83C\uDDE6\uD83C\uDDFF"],"","",["flag-az"],0,47,31,0],
		"1f1e7-1f1e6":[["\uD83C\uDDE7\uD83C\uDDE6"],"","",["flag-ba"],0,48,15,0],
		"1f1e7-1f1e7":[["\uD83C\uDDE7\uD83C\uDDE7"],"","",["flag-bb"],0,49,31,0],
		"1f1e7-1f1e9":[["\uD83C\uDDE7\uD83C\uDDE9"],"","",["flag-bd"],0,50,31,0],
		"1f1e7-1f1ea":[["\uD83C\uDDE7\uD83C\uDDEA"],"","",["flag-be"],0,51,31,0],
		"1f1e7-1f1eb":[["\uD83C\uDDE7\uD83C\uDDEB"],"","",["flag-bf"],1,0,31,0],
		"1f1e7-1f1ec":[["\uD83C\uDDE7\uD83C\uDDEC"],"","",["flag-bg"],1,1,31,0],
		"1f1e7-1f1ed":[["\uD83C\uDDE7\uD83C\uDDED"],"","",["flag-bh"],1,2,31,0],
		"1f1e7-1f1ee":[["\uD83C\uDDE7\uD83C\uDDEE"],"","",["flag-bi"],1,3,31,0],
		"1f1e7-1f1ef":[["\uD83C\uDDE7\uD83C\uDDEF"],"","",["flag-bj"],1,4,31,0],
		"1f1e7-1f1f1":[["\uD83C\uDDE7\uD83C\uDDF1"],"","",["flag-bl"],1,5,29,0],
		"1f1e7-1f1f2":[["\uD83C\uDDE7\uD83C\uDDF2"],"","",["flag-bm"],1,6,31,0],
		"1f1e7-1f1f3":[["\uD83C\uDDE7\uD83C\uDDF3"],"","",["flag-bn"],1,7,15,0],
		"1f1e7-1f1f4":[["\uD83C\uDDE7\uD83C\uDDF4"],"","",["flag-bo"],1,8,31,0],
		"1f1e7-1f1f6":[["\uD83C\uDDE7\uD83C\uDDF6"],"","",["flag-bq"],1,9,29,0],
		"1f1e7-1f1f7":[["\uD83C\uDDE7\uD83C\uDDF7"],"","",["flag-br"],1,10,31,0],
		"1f1e7-1f1f8":[["\uD83C\uDDE7\uD83C\uDDF8"],"","",["flag-bs"],1,11,31,0],
		"1f1e7-1f1f9":[["\uD83C\uDDE7\uD83C\uDDF9"],"","",["flag-bt"],1,12,31,0],
		"1f1e7-1f1fb":[["\uD83C\uDDE7\uD83C\uDDFB"],"","",["flag-bv"],1,13,31,0],
		"1f1e7-1f1fc":[["\uD83C\uDDE7\uD83C\uDDFC"],"","",["flag-bw"],1,14,31,0],
		"1f1e7-1f1fe":[["\uD83C\uDDE7\uD83C\uDDFE"],"","",["flag-by"],1,15,31,0],
		"1f1e7-1f1ff":[["\uD83C\uDDE7\uD83C\uDDFF"],"","",["flag-bz"],1,16,31,0],
		"1f1e8-1f1e6":[["\uD83C\uDDE8\uD83C\uDDE6"],"","",["flag-ca"],1,17,31,0],
		"1f1e8-1f1e8":[["\uD83C\uDDE8\uD83C\uDDE8"],"","",["flag-cc"],1,18,31,0],
		"1f1e8-1f1e9":[["\uD83C\uDDE8\uD83C\uDDE9"],"","",["flag-cd"],1,19,31,0],
		"1f1e8-1f1eb":[["\uD83C\uDDE8\uD83C\uDDEB"],"","",["flag-cf"],1,20,31,0],
		"1f1e8-1f1ec":[["\uD83C\uDDE8\uD83C\uDDEC"],"","",["flag-cg"],1,21,31,0],
		"1f1e8-1f1ed":[["\uD83C\uDDE8\uD83C\uDDED"],"","",["flag-ch"],1,22,31,0],
		"1f1e8-1f1ee":[["\uD83C\uDDE8\uD83C\uDDEE"],"","",["flag-ci"],1,23,31,0],
		"1f1e8-1f1f0":[["\uD83C\uDDE8\uD83C\uDDF0"],"","",["flag-ck"],1,24,31,0],
		"1f1e8-1f1f1":[["\uD83C\uDDE8\uD83C\uDDF1"],"","",["flag-cl"],1,25,31,0],
		"1f1e8-1f1f2":[["\uD83C\uDDE8\uD83C\uDDF2"],"","",["flag-cm"],1,26,31,0],
		"1f1e8-1f1f3":[["\uD83C\uDDE8\uD83C\uDDF3"],"\uE513","\uDBB9\uDCED",["cn","flag-cn"],1,27,31,0],
		"1f1e8-1f1f4":[["\uD83C\uDDE8\uD83C\uDDF4"],"","",["flag-co"],1,28,31,0],
		"1f1e8-1f1f5":[["\uD83C\uDDE8\uD83C\uDDF5"],"","",["flag-cp"],1,29,15,0],
		"1f1e8-1f1f7":[["\uD83C\uDDE8\uD83C\uDDF7"],"","",["flag-cr"],1,30,31,0],
		"1f1e8-1f1fa":[["\uD83C\uDDE8\uD83C\uDDFA"],"","",["flag-cu"],1,31,31,0],
		"1f1e8-1f1fb":[["\uD83C\uDDE8\uD83C\uDDFB"],"","",["flag-cv"],1,32,31,0],
		"1f1e8-1f1fc":[["\uD83C\uDDE8\uD83C\uDDFC"],"","",["flag-cw"],1,33,31,0],
		"1f1e8-1f1fd":[["\uD83C\uDDE8\uD83C\uDDFD"],"","",["flag-cx"],1,34,31,0],
		"1f1e8-1f1fe":[["\uD83C\uDDE8\uD83C\uDDFE"],"","",["flag-cy"],1,35,31,0],
		"1f1e8-1f1ff":[["\uD83C\uDDE8\uD83C\uDDFF"],"","",["flag-cz"],1,36,31,0],
		"1f1e9-1f1ea":[["\uD83C\uDDE9\uD83C\uDDEA"],"\uE50E","\uDBB9\uDCE8",["de","flag-de"],1,37,31,0],
		"1f1e9-1f1ec":[["\uD83C\uDDE9\uD83C\uDDEC"],"","",["flag-dg"],1,38,29,0],
		"1f1e9-1f1ef":[["\uD83C\uDDE9\uD83C\uDDEF"],"","",["flag-dj"],1,39,31,0],
		"1f1e9-1f1f0":[["\uD83C\uDDE9\uD83C\uDDF0"],"","",["flag-dk"],1,40,31,0],
		"1f1e9-1f1f2":[["\uD83C\uDDE9\uD83C\uDDF2"],"","",["flag-dm"],1,41,31,0],
		"1f1e9-1f1f4":[["\uD83C\uDDE9\uD83C\uDDF4"],"","",["flag-do"],1,42,31,0],
		"1f1e9-1f1ff":[["\uD83C\uDDE9\uD83C\uDDFF"],"","",["flag-dz"],1,43,31,0],
		"1f1ea-1f1e6":[["\uD83C\uDDEA\uD83C\uDDE6"],"","",["flag-ea"],1,44,29,0],
		"1f1ea-1f1e8":[["\uD83C\uDDEA\uD83C\uDDE8"],"","",["flag-ec"],1,45,31,0],
		"1f1ea-1f1ea":[["\uD83C\uDDEA\uD83C\uDDEA"],"","",["flag-ee"],1,46,31,0],
		"1f1ea-1f1ec":[["\uD83C\uDDEA\uD83C\uDDEC"],"","",["flag-eg"],1,47,31,0],
		"1f1ea-1f1ed":[["\uD83C\uDDEA\uD83C\uDDED"],"","",["flag-eh"],1,48,29,0],
		"1f1ea-1f1f7":[["\uD83C\uDDEA\uD83C\uDDF7"],"","",["flag-er"],1,49,31,0],
		"1f1ea-1f1f8":[["\uD83C\uDDEA\uD83C\uDDF8"],"\uE511","\uDBB9\uDCEB",["es","flag-es"],1,50,31,0],
		"1f1ea-1f1f9":[["\uD83C\uDDEA\uD83C\uDDF9"],"","",["flag-et"],1,51,31,0],
		"1f1ea-1f1fa":[["\uD83C\uDDEA\uD83C\uDDFA"],"","",["flag-eu"],2,0,31,0],
		"1f1eb-1f1ee":[["\uD83C\uDDEB\uD83C\uDDEE"],"","",["flag-fi"],2,1,31,0],
		"1f1eb-1f1ef":[["\uD83C\uDDEB\uD83C\uDDEF"],"","",["flag-fj"],2,2,31,0],
		"1f1eb-1f1f0":[["\uD83C\uDDEB\uD83C\uDDF0"],"","",["flag-fk"],2,3,29,0],
		"1f1eb-1f1f2":[["\uD83C\uDDEB\uD83C\uDDF2"],"","",["flag-fm"],2,4,31,0],
		"1f1eb-1f1f4":[["\uD83C\uDDEB\uD83C\uDDF4"],"","",["flag-fo"],2,5,31,0],
		"1f1eb-1f1f7":[["\uD83C\uDDEB\uD83C\uDDF7"],"\uE50D","\uDBB9\uDCE7",["fr","flag-fr"],2,6,31,0],
		"1f1ec-1f1e6":[["\uD83C\uDDEC\uD83C\uDDE6"],"","",["flag-ga"],2,7,31,0],
		"1f1ec-1f1e7":[["\uD83C\uDDEC\uD83C\uDDE7"],"\uE510","\uDBB9\uDCEA",["gb","uk","flag-gb"],2,8,31,0],
		"1f1ec-1f1e9":[["\uD83C\uDDEC\uD83C\uDDE9"],"","",["flag-gd"],2,9,31,0],
		"1f1ec-1f1ea":[["\uD83C\uDDEC\uD83C\uDDEA"],"","",["flag-ge"],2,10,31,0],
		"1f1ec-1f1eb":[["\uD83C\uDDEC\uD83C\uDDEB"],"","",["flag-gf"],2,11,29,0],
		"1f1ec-1f1ec":[["\uD83C\uDDEC\uD83C\uDDEC"],"","",["flag-gg"],2,12,31,0],
		"1f1ec-1f1ed":[["\uD83C\uDDEC\uD83C\uDDED"],"","",["flag-gh"],2,13,31,0],
		"1f1ec-1f1ee":[["\uD83C\uDDEC\uD83C\uDDEE"],"","",["flag-gi"],2,14,31,0],
		"1f1ec-1f1f1":[["\uD83C\uDDEC\uD83C\uDDF1"],"","",["flag-gl"],2,15,31,0],
		"1f1ec-1f1f2":[["\uD83C\uDDEC\uD83C\uDDF2"],"","",["flag-gm"],2,16,31,0],
		"1f1ec-1f1f3":[["\uD83C\uDDEC\uD83C\uDDF3"],"","",["flag-gn"],2,17,31,0],
		"1f1ec-1f1f5":[["\uD83C\uDDEC\uD83C\uDDF5"],"","",["flag-gp"],2,18,29,0],
		"1f1ec-1f1f6":[["\uD83C\uDDEC\uD83C\uDDF6"],"","",["flag-gq"],2,19,31,0],
		"1f1ec-1f1f7":[["\uD83C\uDDEC\uD83C\uDDF7"],"","",["flag-gr"],2,20,31,0],
		"1f1ec-1f1f8":[["\uD83C\uDDEC\uD83C\uDDF8"],"","",["flag-gs"],2,21,29,0],
		"1f1ec-1f1f9":[["\uD83C\uDDEC\uD83C\uDDF9"],"","",["flag-gt"],2,22,31,0],
		"1f1ec-1f1fa":[["\uD83C\uDDEC\uD83C\uDDFA"],"","",["flag-gu"],2,23,31,0],
		"1f1ec-1f1fc":[["\uD83C\uDDEC\uD83C\uDDFC"],"","",["flag-gw"],2,24,31,0],
		"1f1ec-1f1fe":[["\uD83C\uDDEC\uD83C\uDDFE"],"","",["flag-gy"],2,25,31,0],
		"1f1ed-1f1f0":[["\uD83C\uDDED\uD83C\uDDF0"],"","",["flag-hk"],2,26,31,0],
		"1f1ed-1f1f2":[["\uD83C\uDDED\uD83C\uDDF2"],"","",["flag-hm"],2,27,31,0],
		"1f1ed-1f1f3":[["\uD83C\uDDED\uD83C\uDDF3"],"","",["flag-hn"],2,28,31,0],
		"1f1ed-1f1f7":[["\uD83C\uDDED\uD83C\uDDF7"],"","",["flag-hr"],2,29,31,0],
		"1f1ed-1f1f9":[["\uD83C\uDDED\uD83C\uDDF9"],"","",["flag-ht"],2,30,31,0],
		"1f1ed-1f1fa":[["\uD83C\uDDED\uD83C\uDDFA"],"","",["flag-hu"],2,31,31,0],
		"1f1ee-1f1e8":[["\uD83C\uDDEE\uD83C\uDDE8"],"","",["flag-ic"],2,32,31,0],
		"1f1ee-1f1e9":[["\uD83C\uDDEE\uD83C\uDDE9"],"","",["flag-id"],2,33,31,0],
		"1f1ee-1f1ea":[["\uD83C\uDDEE\uD83C\uDDEA"],"","",["flag-ie"],2,34,31,0],
		"1f1ee-1f1f1":[["\uD83C\uDDEE\uD83C\uDDF1"],"","",["flag-il"],2,35,31,0],
		"1f1ee-1f1f2":[["\uD83C\uDDEE\uD83C\uDDF2"],"","",["flag-im"],2,36,31,0],
		"1f1ee-1f1f3":[["\uD83C\uDDEE\uD83C\uDDF3"],"","",["flag-in"],2,37,31,0],
		"1f1ee-1f1f4":[["\uD83C\uDDEE\uD83C\uDDF4"],"","",["flag-io"],2,38,31,0],
		"1f1ee-1f1f6":[["\uD83C\uDDEE\uD83C\uDDF6"],"","",["flag-iq"],2,39,31,0],
		"1f1ee-1f1f7":[["\uD83C\uDDEE\uD83C\uDDF7"],"","",["flag-ir"],2,40,31,0],
		"1f1ee-1f1f8":[["\uD83C\uDDEE\uD83C\uDDF8"],"","",["flag-is"],2,41,31,0],
		"1f1ee-1f1f9":[["\uD83C\uDDEE\uD83C\uDDF9"],"\uE50F","\uDBB9\uDCE9",["it","flag-it"],2,42,31,0],
		"1f1ef-1f1ea":[["\uD83C\uDDEF\uD83C\uDDEA"],"","",["flag-je"],2,43,31,0],
		"1f1ef-1f1f2":[["\uD83C\uDDEF\uD83C\uDDF2"],"","",["flag-jm"],2,44,31,0],
		"1f1ef-1f1f4":[["\uD83C\uDDEF\uD83C\uDDF4"],"","",["flag-jo"],2,45,31,0],
		"1f1ef-1f1f5":[["\uD83C\uDDEF\uD83C\uDDF5"],"\uE50B","\uDBB9\uDCE5",["jp","flag-jp"],2,46,31,0],
		"1f1f0-1f1ea":[["\uD83C\uDDF0\uD83C\uDDEA"],"","",["flag-ke"],2,47,31,0],
		"1f1f0-1f1ec":[["\uD83C\uDDF0\uD83C\uDDEC"],"","",["flag-kg"],2,48,31,0],
		"1f1f0-1f1ed":[["\uD83C\uDDF0\uD83C\uDDED"],"","",["flag-kh"],2,49,31,0],
		"1f1f0-1f1ee":[["\uD83C\uDDF0\uD83C\uDDEE"],"","",["flag-ki"],2,50,31,0],
		"1f1f0-1f1f2":[["\uD83C\uDDF0\uD83C\uDDF2"],"","",["flag-km"],2,51,31,0],
		"1f1f0-1f1f3":[["\uD83C\uDDF0\uD83C\uDDF3"],"","",["flag-kn"],3,0,31,0],
		"1f1f0-1f1f5":[["\uD83C\uDDF0\uD83C\uDDF5"],"","",["flag-kp"],3,1,31,0],
		"1f1f0-1f1f7":[["\uD83C\uDDF0\uD83C\uDDF7"],"\uE514","\uDBB9\uDCEE",["kr","flag-kr"],3,2,31,0],
		"1f1f0-1f1fc":[["\uD83C\uDDF0\uD83C\uDDFC"],"","",["flag-kw"],3,3,31,0],
		"1f1f0-1f1fe":[["\uD83C\uDDF0\uD83C\uDDFE"],"","",["flag-ky"],3,4,31,0],
		"1f1f0-1f1ff":[["\uD83C\uDDF0\uD83C\uDDFF"],"","",["flag-kz"],3,5,31,0],
		"1f1f1-1f1e6":[["\uD83C\uDDF1\uD83C\uDDE6"],"","",["flag-la"],3,6,31,0],
		"1f1f1-1f1e7":[["\uD83C\uDDF1\uD83C\uDDE7"],"","",["flag-lb"],3,7,31,0],
		"1f1f1-1f1e8":[["\uD83C\uDDF1\uD83C\uDDE8"],"","",["flag-lc"],3,8,31,0],
		"1f1f1-1f1ee":[["\uD83C\uDDF1\uD83C\uDDEE"],"","",["flag-li"],3,9,31,0],
		"1f1f1-1f1f0":[["\uD83C\uDDF1\uD83C\uDDF0"],"","",["flag-lk"],3,10,31,0],
		"1f1f1-1f1f7":[["\uD83C\uDDF1\uD83C\uDDF7"],"","",["flag-lr"],3,11,31,0],
		"1f1f1-1f1f8":[["\uD83C\uDDF1\uD83C\uDDF8"],"","",["flag-ls"],3,12,31,0],
		"1f1f1-1f1f9":[["\uD83C\uDDF1\uD83C\uDDF9"],"","",["flag-lt"],3,13,31,0],
		"1f1f1-1f1fa":[["\uD83C\uDDF1\uD83C\uDDFA"],"","",["flag-lu"],3,14,31,0],
		"1f1f1-1f1fb":[["\uD83C\uDDF1\uD83C\uDDFB"],"","",["flag-lv"],3,15,31,0],
		"1f1f1-1f1fe":[["\uD83C\uDDF1\uD83C\uDDFE"],"","",["flag-ly"],3,16,31,0],
		"1f1f2-1f1e6":[["\uD83C\uDDF2\uD83C\uDDE6"],"","",["flag-ma"],3,17,31,0],
		"1f1f2-1f1e8":[["\uD83C\uDDF2\uD83C\uDDE8"],"","",["flag-mc"],3,18,31,0],
		"1f1f2-1f1e9":[["\uD83C\uDDF2\uD83C\uDDE9"],"","",["flag-md"],3,19,31,0],
		"1f1f2-1f1ea":[["\uD83C\uDDF2\uD83C\uDDEA"],"","",["flag-me"],3,20,31,0],
		"1f1f2-1f1eb":[["\uD83C\uDDF2\uD83C\uDDEB"],"","",["flag-mf"],3,21,29,0],
		"1f1f2-1f1ec":[["\uD83C\uDDF2\uD83C\uDDEC"],"","",["flag-mg"],3,22,31,0],
		"1f1f2-1f1ed":[["\uD83C\uDDF2\uD83C\uDDED"],"","",["flag-mh"],3,23,31,0],
		"1f1f2-1f1f0":[["\uD83C\uDDF2\uD83C\uDDF0"],"","",["flag-mk"],3,24,31,0],
		"1f1f2-1f1f1":[["\uD83C\uDDF2\uD83C\uDDF1"],"","",["flag-ml"],3,25,31,0],
		"1f1f2-1f1f2":[["\uD83C\uDDF2\uD83C\uDDF2"],"","",["flag-mm"],3,26,31,0],
		"1f1f2-1f1f3":[["\uD83C\uDDF2\uD83C\uDDF3"],"","",["flag-mn"],3,27,31,0],
		"1f1f2-1f1f4":[["\uD83C\uDDF2\uD83C\uDDF4"],"","",["flag-mo"],3,28,31,0],
		"1f1f2-1f1f5":[["\uD83C\uDDF2\uD83C\uDDF5"],"","",["flag-mp"],3,29,31,0],
		"1f1f2-1f1f6":[["\uD83C\uDDF2\uD83C\uDDF6"],"","",["flag-mq"],3,30,29,0],
		"1f1f2-1f1f7":[["\uD83C\uDDF2\uD83C\uDDF7"],"","",["flag-mr"],3,31,31,0],
		"1f1f2-1f1f8":[["\uD83C\uDDF2\uD83C\uDDF8"],"","",["flag-ms"],3,32,31,0],
		"1f1f2-1f1f9":[["\uD83C\uDDF2\uD83C\uDDF9"],"","",["flag-mt"],3,33,31,0],
		"1f1f2-1f1fa":[["\uD83C\uDDF2\uD83C\uDDFA"],"","",["flag-mu"],3,34,31,0],
		"1f1f2-1f1fb":[["\uD83C\uDDF2\uD83C\uDDFB"],"","",["flag-mv"],3,35,31,0],
		"1f1f2-1f1fc":[["\uD83C\uDDF2\uD83C\uDDFC"],"","",["flag-mw"],3,36,31,0],
		"1f1f2-1f1fd":[["\uD83C\uDDF2\uD83C\uDDFD"],"","",["flag-mx"],3,37,31,0],
		"1f1f2-1f1fe":[["\uD83C\uDDF2\uD83C\uDDFE"],"","",["flag-my"],3,38,31,0],
		"1f1f2-1f1ff":[["\uD83C\uDDF2\uD83C\uDDFF"],"","",["flag-mz"],3,39,31,0],
		"1f1f3-1f1e6":[["\uD83C\uDDF3\uD83C\uDDE6"],"","",["flag-na"],3,40,31,0],
		"1f1f3-1f1e8":[["\uD83C\uDDF3\uD83C\uDDE8"],"","",["flag-nc"],3,41,29,0],
		"1f1f3-1f1ea":[["\uD83C\uDDF3\uD83C\uDDEA"],"","",["flag-ne"],3,42,31,0],
		"1f1f3-1f1eb":[["\uD83C\uDDF3\uD83C\uDDEB"],"","",["flag-nf"],3,43,31,0],
		"1f1f3-1f1ec":[["\uD83C\uDDF3\uD83C\uDDEC"],"","",["flag-ng"],3,44,31,0],
		"1f1f3-1f1ee":[["\uD83C\uDDF3\uD83C\uDDEE"],"","",["flag-ni"],3,45,31,0],
		"1f1f3-1f1f1":[["\uD83C\uDDF3\uD83C\uDDF1"],"","",["flag-nl"],3,46,31,0],
		"1f1f3-1f1f4":[["\uD83C\uDDF3\uD83C\uDDF4"],"","",["flag-no"],3,47,31,0],
		"1f1f3-1f1f5":[["\uD83C\uDDF3\uD83C\uDDF5"],"","",["flag-np"],3,48,31,0],
		"1f1f3-1f1f7":[["\uD83C\uDDF3\uD83C\uDDF7"],"","",["flag-nr"],3,49,31,0],
		"1f1f3-1f1fa":[["\uD83C\uDDF3\uD83C\uDDFA"],"","",["flag-nu"],3,50,31,0],
		"1f1f3-1f1ff":[["\uD83C\uDDF3\uD83C\uDDFF"],"","",["flag-nz"],3,51,31,0],
		"1f1f4-1f1f2":[["\uD83C\uDDF4\uD83C\uDDF2"],"","",["flag-om"],4,0,31,0],
		"1f1f5-1f1e6":[["\uD83C\uDDF5\uD83C\uDDE6"],"","",["flag-pa"],4,1,31,0],
		"1f1f5-1f1ea":[["\uD83C\uDDF5\uD83C\uDDEA"],"","",["flag-pe"],4,2,31,0],
		"1f1f5-1f1eb":[["\uD83C\uDDF5\uD83C\uDDEB"],"","",["flag-pf"],4,3,31,0],
		"1f1f5-1f1ec":[["\uD83C\uDDF5\uD83C\uDDEC"],"","",["flag-pg"],4,4,31,0],
		"1f1f5-1f1ed":[["\uD83C\uDDF5\uD83C\uDDED"],"","",["flag-ph"],4,5,31,0],
		"1f1f5-1f1f0":[["\uD83C\uDDF5\uD83C\uDDF0"],"","",["flag-pk"],4,6,31,0],
		"1f1f5-1f1f1":[["\uD83C\uDDF5\uD83C\uDDF1"],"","",["flag-pl"],4,7,31,0],
		"1f1f5-1f1f2":[["\uD83C\uDDF5\uD83C\uDDF2"],"","",["flag-pm"],4,8,29,0],
		"1f1f5-1f1f3":[["\uD83C\uDDF5\uD83C\uDDF3"],"","",["flag-pn"],4,9,31,0],
		"1f1f5-1f1f7":[["\uD83C\uDDF5\uD83C\uDDF7"],"","",["flag-pr"],4,10,31,0],
		"1f1f5-1f1f8":[["\uD83C\uDDF5\uD83C\uDDF8"],"","",["flag-ps"],4,11,31,0],
		"1f1f5-1f1f9":[["\uD83C\uDDF5\uD83C\uDDF9"],"","",["flag-pt"],4,12,31,0],
		"1f1f5-1f1fc":[["\uD83C\uDDF5\uD83C\uDDFC"],"","",["flag-pw"],4,13,31,0],
		"1f1f5-1f1fe":[["\uD83C\uDDF5\uD83C\uDDFE"],"","",["flag-py"],4,14,31,0],
		"1f1f6-1f1e6":[["\uD83C\uDDF6\uD83C\uDDE6"],"","",["flag-qa"],4,15,31,0],
		"1f1f7-1f1ea":[["\uD83C\uDDF7\uD83C\uDDEA"],"","",["flag-re"],4,16,29,0],
		"1f1f7-1f1f4":[["\uD83C\uDDF7\uD83C\uDDF4"],"","",["flag-ro"],4,17,31,0],
		"1f1f7-1f1f8":[["\uD83C\uDDF7\uD83C\uDDF8"],"","",["flag-rs"],4,18,31,0],
		"1f1f7-1f1fa":[["\uD83C\uDDF7\uD83C\uDDFA"],"\uE512","\uDBB9\uDCEC",["ru","flag-ru"],4,19,31,0],
		"1f1f7-1f1fc":[["\uD83C\uDDF7\uD83C\uDDFC"],"","",["flag-rw"],4,20,31,0],
		"1f1f8-1f1e6":[["\uD83C\uDDF8\uD83C\uDDE6"],"","",["flag-sa"],4,21,31,0],
		"1f1f8-1f1e7":[["\uD83C\uDDF8\uD83C\uDDE7"],"","",["flag-sb"],4,22,31,0],
		"1f1f8-1f1e8":[["\uD83C\uDDF8\uD83C\uDDE8"],"","",["flag-sc"],4,23,31,0],
		"1f1f8-1f1e9":[["\uD83C\uDDF8\uD83C\uDDE9"],"","",["flag-sd"],4,24,31,0],
		"1f1f8-1f1ea":[["\uD83C\uDDF8\uD83C\uDDEA"],"","",["flag-se"],4,25,31,0],
		"1f1f8-1f1ec":[["\uD83C\uDDF8\uD83C\uDDEC"],"","",["flag-sg"],4,26,31,0],
		"1f1f8-1f1ed":[["\uD83C\uDDF8\uD83C\uDDED"],"","",["flag-sh"],4,27,31,0],
		"1f1f8-1f1ee":[["\uD83C\uDDF8\uD83C\uDDEE"],"","",["flag-si"],4,28,31,0],
		"1f1f8-1f1ef":[["\uD83C\uDDF8\uD83C\uDDEF"],"","",["flag-sj"],4,29,31,0],
		"1f1f8-1f1f0":[["\uD83C\uDDF8\uD83C\uDDF0"],"","",["flag-sk"],4,30,31,0],
		"1f1f8-1f1f1":[["\uD83C\uDDF8\uD83C\uDDF1"],"","",["flag-sl"],4,31,31,0],
		"1f1f8-1f1f2":[["\uD83C\uDDF8\uD83C\uDDF2"],"","",["flag-sm"],4,32,31,0],
		"1f1f8-1f1f3":[["\uD83C\uDDF8\uD83C\uDDF3"],"","",["flag-sn"],4,33,31,0],
		"1f1f8-1f1f4":[["\uD83C\uDDF8\uD83C\uDDF4"],"","",["flag-so"],4,34,31,0],
		"1f1f8-1f1f7":[["\uD83C\uDDF8\uD83C\uDDF7"],"","",["flag-sr"],4,35,31,0],
		"1f1f8-1f1f8":[["\uD83C\uDDF8\uD83C\uDDF8"],"","",["flag-ss"],4,36,31,0],
		"1f1f8-1f1f9":[["\uD83C\uDDF8\uD83C\uDDF9"],"","",["flag-st"],4,37,31,0],
		"1f1f8-1f1fb":[["\uD83C\uDDF8\uD83C\uDDFB"],"","",["flag-sv"],4,38,31,0],
		"1f1f8-1f1fd":[["\uD83C\uDDF8\uD83C\uDDFD"],"","",["flag-sx"],4,39,31,0],
		"1f1f8-1f1fe":[["\uD83C\uDDF8\uD83C\uDDFE"],"","",["flag-sy"],4,40,31,0],
		"1f1f8-1f1ff":[["\uD83C\uDDF8\uD83C\uDDFF"],"","",["flag-sz"],4,41,31,0],
		"1f1f9-1f1e6":[["\uD83C\uDDF9\uD83C\uDDE6"],"","",["flag-ta"],4,42,31,0],
		"1f1f9-1f1e8":[["\uD83C\uDDF9\uD83C\uDDE8"],"","",["flag-tc"],4,43,31,0],
		"1f1f9-1f1e9":[["\uD83C\uDDF9\uD83C\uDDE9"],"","",["flag-td"],4,44,31,0],
		"1f1f9-1f1eb":[["\uD83C\uDDF9\uD83C\uDDEB"],"","",["flag-tf"],4,45,29,0],
		"1f1f9-1f1ec":[["\uD83C\uDDF9\uD83C\uDDEC"],"","",["flag-tg"],4,46,31,0],
		"1f1f9-1f1ed":[["\uD83C\uDDF9\uD83C\uDDED"],"","",["flag-th"],4,47,31,0],
		"1f1f9-1f1ef":[["\uD83C\uDDF9\uD83C\uDDEF"],"","",["flag-tj"],4,48,31,0],
		"1f1f9-1f1f0":[["\uD83C\uDDF9\uD83C\uDDF0"],"","",["flag-tk"],4,49,31,0],
		"1f1f9-1f1f1":[["\uD83C\uDDF9\uD83C\uDDF1"],"","",["flag-tl"],4,50,31,0],
		"1f1f9-1f1f2":[["\uD83C\uDDF9\uD83C\uDDF2"],"","",["flag-tm"],4,51,31,0],
		"1f1f9-1f1f3":[["\uD83C\uDDF9\uD83C\uDDF3"],"","",["flag-tn"],5,0,31,0],
		"1f1f9-1f1f4":[["\uD83C\uDDF9\uD83C\uDDF4"],"","",["flag-to"],5,1,31,0],
		"1f1f9-1f1f7":[["\uD83C\uDDF9\uD83C\uDDF7"],"","",["flag-tr"],5,2,31,0],
		"1f1f9-1f1f9":[["\uD83C\uDDF9\uD83C\uDDF9"],"","",["flag-tt"],5,3,31,0],
		"1f1f9-1f1fb":[["\uD83C\uDDF9\uD83C\uDDFB"],"","",["flag-tv"],5,4,31,0],
		"1f1f9-1f1fc":[["\uD83C\uDDF9\uD83C\uDDFC"],"","",["flag-tw"],5,5,31,0],
		"1f1f9-1f1ff":[["\uD83C\uDDF9\uD83C\uDDFF"],"","",["flag-tz"],5,6,31,0],
		"1f1fa-1f1e6":[["\uD83C\uDDFA\uD83C\uDDE6"],"","",["flag-ua"],5,7,31,0],
		"1f1fa-1f1ec":[["\uD83C\uDDFA\uD83C\uDDEC"],"","",["flag-ug"],5,8,31,0],
		"1f1fa-1f1f2":[["\uD83C\uDDFA\uD83C\uDDF2"],"","",["flag-um"],5,9,31,0],
		"1f1fa-1f1f3":[["\uD83C\uDDFA\uD83C\uDDF3"],"","",["flag-un"],5,10,14,0],
		"1f1fa-1f1f8":[["\uD83C\uDDFA\uD83C\uDDF8"],"\uE50C","\uDBB9\uDCE6",["us","flag-us"],5,11,31,0],
		"1f1fa-1f1fe":[["\uD83C\uDDFA\uD83C\uDDFE"],"","",["flag-uy"],5,12,31,0],
		"1f1fa-1f1ff":[["\uD83C\uDDFA\uD83C\uDDFF"],"","",["flag-uz"],5,13,31,0],
		"1f1fb-1f1e6":[["\uD83C\uDDFB\uD83C\uDDE6"],"","",["flag-va"],5,14,31,0],
		"1f1fb-1f1e8":[["\uD83C\uDDFB\uD83C\uDDE8"],"","",["flag-vc"],5,15,31,0],
		"1f1fb-1f1ea":[["\uD83C\uDDFB\uD83C\uDDEA"],"","",["flag-ve"],5,16,31,0],
		"1f1fb-1f1ec":[["\uD83C\uDDFB\uD83C\uDDEC"],"","",["flag-vg"],5,17,31,0],
		"1f1fb-1f1ee":[["\uD83C\uDDFB\uD83C\uDDEE"],"","",["flag-vi"],5,18,31,0],
		"1f1fb-1f1f3":[["\uD83C\uDDFB\uD83C\uDDF3"],"","",["flag-vn"],5,19,31,0],
		"1f1fb-1f1fa":[["\uD83C\uDDFB\uD83C\uDDFA"],"","",["flag-vu"],5,20,31,0],
		"1f1fc-1f1eb":[["\uD83C\uDDFC\uD83C\uDDEB"],"","",["flag-wf"],5,21,29,0],
		"1f1fc-1f1f8":[["\uD83C\uDDFC\uD83C\uDDF8"],"","",["flag-ws"],5,22,31,0],
		"1f1fd-1f1f0":[["\uD83C\uDDFD\uD83C\uDDF0"],"","",["flag-xk"],5,23,29,0],
		"1f1fe-1f1ea":[["\uD83C\uDDFE\uD83C\uDDEA"],"","",["flag-ye"],5,24,31,0],
		"1f1fe-1f1f9":[["\uD83C\uDDFE\uD83C\uDDF9"],"","",["flag-yt"],5,25,29,0],
		"1f1ff-1f1e6":[["\uD83C\uDDFF\uD83C\uDDE6"],"","",["flag-za"],5,26,31,0],
		"1f1ff-1f1f2":[["\uD83C\uDDFF\uD83C\uDDF2"],"","",["flag-zm"],5,27,31,0],
		"1f1ff-1f1fc":[["\uD83C\uDDFF\uD83C\uDDFC"],"","",["flag-zw"],5,28,31,0],
		"1f201":[["\uD83C\uDE01"],"\uE203","\uDBBA\uDF24",["koko"],5,29,31,0],
		"1f202-fe0f":[["\uD83C\uDE02\uFE0F","\uD83C\uDE02"],"\uE228","\uDBBA\uDF3F",["sa"],5,30,31,0],
		"1f21a":[["\uD83C\uDE1A"],"\uE216","\uDBBA\uDF3A",["u7121"],5,31,31,0],
		"1f22f":[["\uD83C\uDE2F"],"\uE22C","\uDBBA\uDF40",["u6307"],5,32,31,0],
		"1f232":[["\uD83C\uDE32"],"","\uDBBA\uDF2E",["u7981"],5,33,31,0],
		"1f233":[["\uD83C\uDE33"],"\uE22B","\uDBBA\uDF2F",["u7a7a"],5,34,31,0],
		"1f234":[["\uD83C\uDE34"],"","\uDBBA\uDF30",["u5408"],5,35,31,0],
		"1f235":[["\uD83C\uDE35"],"\uE22A","\uDBBA\uDF31",["u6e80"],5,36,31,0],
		"1f236":[["\uD83C\uDE36"],"\uE215","\uDBBA\uDF39",["u6709"],5,37,31,0],
		"1f237-fe0f":[["\uD83C\uDE37\uFE0F","\uD83C\uDE37"],"\uE217","\uDBBA\uDF3B",["u6708"],5,38,31,0],
		"1f238":[["\uD83C\uDE38"],"\uE218","\uDBBA\uDF3C",["u7533"],5,39,31,0],
		"1f239":[["\uD83C\uDE39"],"\uE227","\uDBBA\uDF3E",["u5272"],5,40,31,0],
		"1f23a":[["\uD83C\uDE3A"],"\uE22D","\uDBBA\uDF41",["u55b6"],5,41,31,0],
		"1f250":[["\uD83C\uDE50"],"\uE226","\uDBBA\uDF3D",["ideograph_advantage"],5,42,31,0],
		"1f251":[["\uD83C\uDE51"],"","\uDBBA\uDF50",["accept"],5,43,31,0],
		"1f300":[["\uD83C\uDF00"],"\uE443","\uDBB8\uDC05",["cyclone"],5,44,31,0],
		"1f301":[["\uD83C\uDF01"],"","\uDBB8\uDC06",["foggy"],5,45,31,0],
		"1f302":[["\uD83C\uDF02"],"\uE43C","\uDBB8\uDC07",["closed_umbrella"],5,46,31,0],
		"1f303":[["\uD83C\uDF03"],"\uE44B","\uDBB8\uDC08",["night_with_stars"],5,47,31,0],
		"1f304":[["\uD83C\uDF04"],"\uE04D","\uDBB8\uDC09",["sunrise_over_mountains"],5,48,31,0],
		"1f305":[["\uD83C\uDF05"],"\uE449","\uDBB8\uDC0A",["sunrise"],5,49,31,0],
		"1f306":[["\uD83C\uDF06"],"\uE146","\uDBB8\uDC0B",["city_sunset"],5,50,31,0],
		"1f307":[["\uD83C\uDF07"],"\uE44A","\uDBB8\uDC0C",["city_sunrise"],5,51,31,0],
		"1f308":[["\uD83C\uDF08"],"\uE44C","\uDBB8\uDC0D",["rainbow"],6,0,31,0],
		"1f309":[["\uD83C\uDF09"],"","\uDBB8\uDC10",["bridge_at_night"],6,1,31,0],
		"1f30a":[["\uD83C\uDF0A"],"\uE43E","\uDBB8\uDC38",["ocean"],6,2,31,0],
		"1f30b":[["\uD83C\uDF0B"],"","\uDBB8\uDC3A",["volcano"],6,3,31,0],
		"1f30c":[["\uD83C\uDF0C"],"","\uDBB8\uDC3B",["milky_way"],6,4,31,0],
		"1f30d":[["\uD83C\uDF0D"],"","",["earth_africa"],6,5,31,0],
		"1f30e":[["\uD83C\uDF0E"],"","",["earth_americas"],6,6,31,0],
		"1f30f":[["\uD83C\uDF0F"],"","\uDBB8\uDC39",["earth_asia"],6,7,31,0],
		"1f310":[["\uD83C\uDF10"],"","",["globe_with_meridians"],6,8,31,0],
		"1f311":[["\uD83C\uDF11"],"","\uDBB8\uDC11",["new_moon"],6,9,31,0],
		"1f312":[["\uD83C\uDF12"],"","",["waxing_crescent_moon"],6,10,31,0],
		"1f313":[["\uD83C\uDF13"],"","\uDBB8\uDC13",["first_quarter_moon"],6,11,31,0],
		"1f314":[["\uD83C\uDF14"],"","\uDBB8\uDC12",["moon","waxing_gibbous_moon"],6,12,31,0],
		"1f315":[["\uD83C\uDF15"],"","\uDBB8\uDC15",["full_moon"],6,13,31,0],
		"1f316":[["\uD83C\uDF16"],"","",["waning_gibbous_moon"],6,14,31,0],
		"1f317":[["\uD83C\uDF17"],"","",["last_quarter_moon"],6,15,31,0],
		"1f318":[["\uD83C\uDF18"],"","",["waning_crescent_moon"],6,16,31,0],
		"1f319":[["\uD83C\uDF19"],"\uE04C","\uDBB8\uDC14",["crescent_moon"],6,17,31,0],
		"1f31a":[["\uD83C\uDF1A"],"","",["new_moon_with_face"],6,18,31,0],
		"1f31b":[["\uD83C\uDF1B"],"","\uDBB8\uDC16",["first_quarter_moon_with_face"],6,19,31,0],
		"1f31c":[["\uD83C\uDF1C"],"","",["last_quarter_moon_with_face"],6,20,31,0],
		"1f31d":[["\uD83C\uDF1D"],"","",["full_moon_with_face"],6,21,31,0],
		"1f31e":[["\uD83C\uDF1E"],"","",["sun_with_face"],6,22,31,0],
		"1f31f":[["\uD83C\uDF1F"],"\uE335","\uDBBA\uDF69",["star2"],6,23,31,0],
		"1f320":[["\uD83C\uDF20"],"","\uDBBA\uDF6A",["stars"],6,24,31,0],
		"1f321-fe0f":[["\uD83C\uDF21\uFE0F","\uD83C\uDF21"],"","",["thermometer"],6,25,15,0],
		"1f324-fe0f":[["\uD83C\uDF24\uFE0F","\uD83C\uDF24"],"","",["mostly_sunny","sun_small_cloud"],6,26,15,0],
		"1f325-fe0f":[["\uD83C\uDF25\uFE0F","\uD83C\uDF25"],"","",["barely_sunny","sun_behind_cloud"],6,27,15,0],
		"1f326-fe0f":[["\uD83C\uDF26\uFE0F","\uD83C\uDF26"],"","",["partly_sunny_rain","sun_behind_rain_cloud"],6,28,15,0],
		"1f327-fe0f":[["\uD83C\uDF27\uFE0F","\uD83C\uDF27"],"","",["rain_cloud"],6,29,15,0],
		"1f328-fe0f":[["\uD83C\uDF28\uFE0F","\uD83C\uDF28"],"","",["snow_cloud"],6,30,15,0],
		"1f329-fe0f":[["\uD83C\uDF29\uFE0F","\uD83C\uDF29"],"","",["lightning","lightning_cloud"],6,31,15,0],
		"1f32a-fe0f":[["\uD83C\uDF2A\uFE0F","\uD83C\uDF2A"],"","",["tornado","tornado_cloud"],6,32,15,0],
		"1f32b-fe0f":[["\uD83C\uDF2B\uFE0F","\uD83C\uDF2B"],"","",["fog"],6,33,15,0],
		"1f32c-fe0f":[["\uD83C\uDF2C\uFE0F","\uD83C\uDF2C"],"","",["wind_blowing_face"],6,34,15,0],
		"1f32d":[["\uD83C\uDF2D"],"","",["hotdog"],6,35,15,0],
		"1f32e":[["\uD83C\uDF2E"],"","",["taco"],6,36,15,0],
		"1f32f":[["\uD83C\uDF2F"],"","",["burrito"],6,37,15,0],
		"1f330":[["\uD83C\uDF30"],"","\uDBB8\uDC4C",["chestnut"],6,38,31,0],
		"1f331":[["\uD83C\uDF31"],"","\uDBB8\uDC3E",["seedling"],6,39,31,0],
		"1f332":[["\uD83C\uDF32"],"","",["evergreen_tree"],6,40,31,0],
		"1f333":[["\uD83C\uDF33"],"","",["deciduous_tree"],6,41,31,0],
		"1f334":[["\uD83C\uDF34"],"\uE307","\uDBB8\uDC47",["palm_tree"],6,42,31,0],
		"1f335":[["\uD83C\uDF35"],"\uE308","\uDBB8\uDC48",["cactus"],6,43,31,0],
		"1f336-fe0f":[["\uD83C\uDF36\uFE0F","\uD83C\uDF36"],"","",["hot_pepper"],6,44,15,0],
		"1f337":[["\uD83C\uDF37"],"\uE304","\uDBB8\uDC3D",["tulip"],6,45,31,0],
		"1f338":[["\uD83C\uDF38"],"\uE030","\uDBB8\uDC40",["cherry_blossom"],6,46,31,0],
		"1f339":[["\uD83C\uDF39"],"\uE032","\uDBB8\uDC41",["rose"],6,47,31,0],
		"1f33a":[["\uD83C\uDF3A"],"\uE303","\uDBB8\uDC45",["hibiscus"],6,48,31,0],
		"1f33b":[["\uD83C\uDF3B"],"\uE305","\uDBB8\uDC46",["sunflower"],6,49,31,0],
		"1f33c":[["\uD83C\uDF3C"],"","\uDBB8\uDC4D",["blossom"],6,50,31,0],
		"1f33d":[["\uD83C\uDF3D"],"","\uDBB8\uDC4A",["corn"],6,51,31,0],
		"1f33e":[["\uD83C\uDF3E"],"\uE444","\uDBB8\uDC49",["ear_of_rice"],7,0,31,0],
		"1f33f":[["\uD83C\uDF3F"],"","\uDBB8\uDC4E",["herb"],7,1,31,0],
		"1f340":[["\uD83C\uDF40"],"\uE110","\uDBB8\uDC3C",["four_leaf_clover"],7,2,31,0],
		"1f341":[["\uD83C\uDF41"],"\uE118","\uDBB8\uDC3F",["maple_leaf"],7,3,31,0],
		"1f342":[["\uD83C\uDF42"],"\uE119","\uDBB8\uDC42",["fallen_leaf"],7,4,31,0],
		"1f343":[["\uD83C\uDF43"],"\uE447","\uDBB8\uDC43",["leaves"],7,5,31,0],
		"1f344":[["\uD83C\uDF44"],"","\uDBB8\uDC4B",["mushroom"],7,6,31,0],
		"1f345":[["\uD83C\uDF45"],"\uE349","\uDBB8\uDC55",["tomato"],7,7,31,0],
		"1f346":[["\uD83C\uDF46"],"\uE34A","\uDBB8\uDC56",["eggplant"],7,8,31,0],
		"1f347":[["\uD83C\uDF47"],"","\uDBB8\uDC59",["grapes"],7,9,31,0],
		"1f348":[["\uD83C\uDF48"],"","\uDBB8\uDC57",["melon"],7,10,31,0],
		"1f349":[["\uD83C\uDF49"],"\uE348","\uDBB8\uDC54",["watermelon"],7,11,31,0],
		"1f34a":[["\uD83C\uDF4A"],"\uE346","\uDBB8\uDC52",["tangerine"],7,12,31,0],
		"1f34b":[["\uD83C\uDF4B"],"","",["lemon"],7,13,31,0],
		"1f34c":[["\uD83C\uDF4C"],"","\uDBB8\uDC50",["banana"],7,14,31,0],
		"1f34d":[["\uD83C\uDF4D"],"","\uDBB8\uDC58",["pineapple"],7,15,31,0],
		"1f34e":[["\uD83C\uDF4E"],"\uE345","\uDBB8\uDC51",["apple"],7,16,31,0],
		"1f34f":[["\uD83C\uDF4F"],"","\uDBB8\uDC5B",["green_apple"],7,17,31,0],
		"1f350":[["\uD83C\uDF50"],"","",["pear"],7,18,31,0],
		"1f351":[["\uD83C\uDF51"],"","\uDBB8\uDC5A",["peach"],7,19,31,0],
		"1f352":[["\uD83C\uDF52"],"","\uDBB8\uDC4F",["cherries"],7,20,31,0],
		"1f353":[["\uD83C\uDF53"],"\uE347","\uDBB8\uDC53",["strawberry"],7,21,31,0],
		"1f354":[["\uD83C\uDF54"],"\uE120","\uDBBA\uDD60",["hamburger"],7,22,31,0],
		"1f355":[["\uD83C\uDF55"],"","\uDBBA\uDD75",["pizza"],7,23,31,0],
		"1f356":[["\uD83C\uDF56"],"","\uDBBA\uDD72",["meat_on_bone"],7,24,31,0],
		"1f357":[["\uD83C\uDF57"],"","\uDBBA\uDD76",["poultry_leg"],7,25,31,0],
		"1f358":[["\uD83C\uDF58"],"\uE33D","\uDBBA\uDD69",["rice_cracker"],7,26,31,0],
		"1f359":[["\uD83C\uDF59"],"\uE342","\uDBBA\uDD61",["rice_ball"],7,27,31,0],
		"1f35a":[["\uD83C\uDF5A"],"\uE33E","\uDBBA\uDD6A",["rice"],7,28,31,0],
		"1f35b":[["\uD83C\uDF5B"],"\uE341","\uDBBA\uDD6C",["curry"],7,29,31,0],
		"1f35c":[["\uD83C\uDF5C"],"\uE340","\uDBBA\uDD63",["ramen"],7,30,31,0],
		"1f35d":[["\uD83C\uDF5D"],"\uE33F","\uDBBA\uDD6B",["spaghetti"],7,31,31,0],
		"1f35e":[["\uD83C\uDF5E"],"\uE339","\uDBBA\uDD64",["bread"],7,32,31,0],
		"1f35f":[["\uD83C\uDF5F"],"\uE33B","\uDBBA\uDD67",["fries"],7,33,31,0],
		"1f360":[["\uD83C\uDF60"],"","\uDBBA\uDD74",["sweet_potato"],7,34,31,0],
		"1f361":[["\uD83C\uDF61"],"\uE33C","\uDBBA\uDD68",["dango"],7,35,31,0],
		"1f362":[["\uD83C\uDF62"],"\uE343","\uDBBA\uDD6D",["oden"],7,36,31,0],
		"1f363":[["\uD83C\uDF63"],"\uE344","\uDBBA\uDD6E",["sushi"],7,37,31,0],
		"1f364":[["\uD83C\uDF64"],"","\uDBBA\uDD7F",["fried_shrimp"],7,38,31,0],
		"1f365":[["\uD83C\uDF65"],"","\uDBBA\uDD73",["fish_cake"],7,39,31,0],
		"1f366":[["\uD83C\uDF66"],"\uE33A","\uDBBA\uDD66",["icecream"],7,40,31,0],
		"1f367":[["\uD83C\uDF67"],"\uE43F","\uDBBA\uDD71",["shaved_ice"],7,41,31,0],
		"1f368":[["\uD83C\uDF68"],"","\uDBBA\uDD77",["ice_cream"],7,42,31,0],
		"1f369":[["\uD83C\uDF69"],"","\uDBBA\uDD78",["doughnut"],7,43,31,0],
		"1f36a":[["\uD83C\uDF6A"],"","\uDBBA\uDD79",["cookie"],7,44,31,0],
		"1f36b":[["\uD83C\uDF6B"],"","\uDBBA\uDD7A",["chocolate_bar"],7,45,31,0],
		"1f36c":[["\uD83C\uDF6C"],"","\uDBBA\uDD7B",["candy"],7,46,31,0],
		"1f36d":[["\uD83C\uDF6D"],"","\uDBBA\uDD7C",["lollipop"],7,47,31,0],
		"1f36e":[["\uD83C\uDF6E"],"","\uDBBA\uDD7D",["custard"],7,48,31,0],
		"1f36f":[["\uD83C\uDF6F"],"","\uDBBA\uDD7E",["honey_pot"],7,49,31,0],
		"1f370":[["\uD83C\uDF70"],"\uE046","\uDBBA\uDD62",["cake"],7,50,31,0],
		"1f371":[["\uD83C\uDF71"],"\uE34C","\uDBBA\uDD6F",["bento"],7,51,31,0],
		"1f372":[["\uD83C\uDF72"],"\uE34D","\uDBBA\uDD70",["stew"],8,0,31,0],
		"1f373":[["\uD83C\uDF73"],"\uE147","\uDBBA\uDD65",["fried_egg","cooking"],8,1,31,0],
		"1f374":[["\uD83C\uDF74"],"\uE043","\uDBBA\uDD80",["fork_and_knife"],8,2,31,0],
		"1f375":[["\uD83C\uDF75"],"\uE338","\uDBBA\uDD84",["tea"],8,3,31,0],
		"1f376":[["\uD83C\uDF76"],"\uE30B","\uDBBA\uDD85",["sake"],8,4,31,0],
		"1f377":[["\uD83C\uDF77"],"","\uDBBA\uDD86",["wine_glass"],8,5,31,0],
		"1f378":[["\uD83C\uDF78"],"\uE044","\uDBBA\uDD82",["cocktail"],8,6,31,0],
		"1f379":[["\uD83C\uDF79"],"","\uDBBA\uDD88",["tropical_drink"],8,7,31,0],
		"1f37a":[["\uD83C\uDF7A"],"\uE047","\uDBBA\uDD83",["beer"],8,8,31,0],
		"1f37b":[["\uD83C\uDF7B"],"\uE30C","\uDBBA\uDD87",["beers"],8,9,31,0],
		"1f37c":[["\uD83C\uDF7C"],"","",["baby_bottle"],8,10,31,0],
		"1f37d-fe0f":[["\uD83C\uDF7D\uFE0F","\uD83C\uDF7D"],"","",["knife_fork_plate"],8,11,15,0],
		"1f37e":[["\uD83C\uDF7E"],"","",["champagne"],8,12,15,0],
		"1f37f":[["\uD83C\uDF7F"],"","",["popcorn"],8,13,15,0],
		"1f380":[["\uD83C\uDF80"],"\uE314","\uDBB9\uDD0F",["ribbon"],8,14,31,0],
		"1f381":[["\uD83C\uDF81"],"\uE112","\uDBB9\uDD10",["gift"],8,15,31,0],
		"1f382":[["\uD83C\uDF82"],"\uE34B","\uDBB9\uDD11",["birthday"],8,16,31,0],
		"1f383":[["\uD83C\uDF83"],"\uE445","\uDBB9\uDD1F",["jack_o_lantern"],8,17,31,0],
		"1f384":[["\uD83C\uDF84"],"\uE033","\uDBB9\uDD12",["christmas_tree"],8,18,31,0],
		"1f385":[["\uD83C\uDF85"],"\uE448","\uDBB9\uDD13",["santa"],8,19,31,0],
		"1f386":[["\uD83C\uDF86"],"\uE117","\uDBB9\uDD15",["fireworks"],8,25,31,0],
		"1f387":[["\uD83C\uDF87"],"\uE440","\uDBB9\uDD1D",["sparkler"],8,26,31,0],
		"1f388":[["\uD83C\uDF88"],"\uE310","\uDBB9\uDD16",["balloon"],8,27,31,0],
		"1f389":[["\uD83C\uDF89"],"\uE312","\uDBB9\uDD17",["tada"],8,28,31,0],
		"1f38a":[["\uD83C\uDF8A"],"","\uDBB9\uDD20",["confetti_ball"],8,29,31,0],
		"1f38b":[["\uD83C\uDF8B"],"","\uDBB9\uDD21",["tanabata_tree"],8,30,31,0],
		"1f38c":[["\uD83C\uDF8C"],"\uE143","\uDBB9\uDD14",["crossed_flags"],8,31,31,0],
		"1f38d":[["\uD83C\uDF8D"],"\uE436","\uDBB9\uDD18",["bamboo"],8,32,31,0],
		"1f38e":[["\uD83C\uDF8E"],"\uE438","\uDBB9\uDD19",["dolls"],8,33,31,0],
		"1f38f":[["\uD83C\uDF8F"],"\uE43B","\uDBB9\uDD1C",["flags"],8,34,31,0],
		"1f390":[["\uD83C\uDF90"],"\uE442","\uDBB9\uDD1E",["wind_chime"],8,35,31,0],
		"1f391":[["\uD83C\uDF91"],"\uE446","\uDBB8\uDC17",["rice_scene"],8,36,31,0],
		"1f392":[["\uD83C\uDF92"],"\uE43A","\uDBB9\uDD1B",["school_satchel"],8,37,31,0],
		"1f393":[["\uD83C\uDF93"],"\uE439","\uDBB9\uDD1A",["mortar_board"],8,38,31,0],
		"1f396-fe0f":[["\uD83C\uDF96\uFE0F","\uD83C\uDF96"],"","",["medal"],8,39,15,0],
		"1f397-fe0f":[["\uD83C\uDF97\uFE0F","\uD83C\uDF97"],"","",["reminder_ribbon"],8,40,15,0],
		"1f399-fe0f":[["\uD83C\uDF99\uFE0F","\uD83C\uDF99"],"","",["studio_microphone"],8,41,15,0],
		"1f39a-fe0f":[["\uD83C\uDF9A\uFE0F","\uD83C\uDF9A"],"","",["level_slider"],8,42,15,0],
		"1f39b-fe0f":[["\uD83C\uDF9B\uFE0F","\uD83C\uDF9B"],"","",["control_knobs"],8,43,15,0],
		"1f39e-fe0f":[["\uD83C\uDF9E\uFE0F","\uD83C\uDF9E"],"","",["film_frames"],8,44,15,0],
		"1f39f-fe0f":[["\uD83C\uDF9F\uFE0F","\uD83C\uDF9F"],"","",["admission_tickets"],8,45,15,0],
		"1f3a0":[["\uD83C\uDFA0"],"","\uDBB9\uDFFC",["carousel_horse"],8,46,31,0],
		"1f3a1":[["\uD83C\uDFA1"],"\uE124","\uDBB9\uDFFD",["ferris_wheel"],8,47,31,0],
		"1f3a2":[["\uD83C\uDFA2"],"\uE433","\uDBB9\uDFFE",["roller_coaster"],8,48,31,0],
		"1f3a3":[["\uD83C\uDFA3"],"","\uDBB9\uDFFF",["fishing_pole_and_fish"],8,49,31,0],
		"1f3a4":[["\uD83C\uDFA4"],"\uE03C","\uDBBA\uDC00",["microphone"],8,50,31,0],
		"1f3a5":[["\uD83C\uDFA5"],"\uE03D","\uDBBA\uDC01",["movie_camera"],8,51,31,0],
		"1f3a6":[["\uD83C\uDFA6"],"\uE507","\uDBBA\uDC02",["cinema"],9,0,31,0],
		"1f3a7":[["\uD83C\uDFA7"],"\uE30A","\uDBBA\uDC03",["headphones"],9,1,31,0],
		"1f3a8":[["\uD83C\uDFA8"],"\uE502","\uDBBA\uDC04",["art"],9,2,31,0],
		"1f3a9":[["\uD83C\uDFA9"],"\uE503","\uDBBA\uDC05",["tophat"],9,3,31,0],
		"1f3aa":[["\uD83C\uDFAA"],"","\uDBBA\uDC06",["circus_tent"],9,4,31,0],
		"1f3ab":[["\uD83C\uDFAB"],"\uE125","\uDBBA\uDC07",["ticket"],9,5,31,0],
		"1f3ac":[["\uD83C\uDFAC"],"\uE324","\uDBBA\uDC08",["clapper"],9,6,31,0],
		"1f3ad":[["\uD83C\uDFAD"],"","\uDBBA\uDC09",["performing_arts"],9,7,31,0],
		"1f3ae":[["\uD83C\uDFAE"],"","\uDBBA\uDC0A",["video_game"],9,8,31,0],
		"1f3af":[["\uD83C\uDFAF"],"\uE130","\uDBBA\uDC0C",["dart"],9,9,31,0],
		"1f3b0":[["\uD83C\uDFB0"],"\uE133","\uDBBA\uDC0D",["slot_machine"],9,10,31,0],
		"1f3b1":[["\uD83C\uDFB1"],"\uE42C","\uDBBA\uDC0E",["8ball"],9,11,31,0],
		"1f3b2":[["\uD83C\uDFB2"],"","\uDBBA\uDC0F",["game_die"],9,12,31,0],
		"1f3b3":[["\uD83C\uDFB3"],"","\uDBBA\uDC10",["bowling"],9,13,31,0],
		"1f3b4":[["\uD83C\uDFB4"],"","\uDBBA\uDC11",["flower_playing_cards"],9,14,31,0],
		"1f3b5":[["\uD83C\uDFB5"],"\uE03E","\uDBBA\uDC13",["musical_note"],9,15,31,0],
		"1f3b6":[["\uD83C\uDFB6"],"\uE326","\uDBBA\uDC14",["notes"],9,16,31,0],
		"1f3b7":[["\uD83C\uDFB7"],"\uE040","\uDBBA\uDC15",["saxophone"],9,17,31,0],
		"1f3b8":[["\uD83C\uDFB8"],"\uE041","\uDBBA\uDC16",["guitar"],9,18,31,0],
		"1f3b9":[["\uD83C\uDFB9"],"","\uDBBA\uDC17",["musical_keyboard"],9,19,31,0],
		"1f3ba":[["\uD83C\uDFBA"],"\uE042","\uDBBA\uDC18",["trumpet"],9,20,31,0],
		"1f3bb":[["\uD83C\uDFBB"],"","\uDBBA\uDC19",["violin"],9,21,31,0],
		"1f3bc":[["\uD83C\uDFBC"],"","\uDBBA\uDC1A",["musical_score"],9,22,31,0],
		"1f3bd":[["\uD83C\uDFBD"],"","\uDBB9\uDFD0",["running_shirt_with_sash"],9,23,31,0],
		"1f3be":[["\uD83C\uDFBE"],"\uE015","\uDBB9\uDFD3",["tennis"],9,24,31,0],
		"1f3bf":[["\uD83C\uDFBF"],"\uE013","\uDBB9\uDFD5",["ski"],9,25,31,0],
		"1f3c0":[["\uD83C\uDFC0"],"\uE42A","\uDBB9\uDFD6",["basketball"],9,26,31,0],
		"1f3c1":[["\uD83C\uDFC1"],"\uE132","\uDBB9\uDFD7",["checkered_flag"],9,27,31,0],
		"1f3c2":[["\uD83C\uDFC2"],"","\uDBB9\uDFD8",["snowboarder"],9,28,31,0],
		"1f3c3-200d-2640-fe0f":[["\uD83C\uDFC3\u200D\u2640\uFE0F","\uD83C\uDFC3\u200D\u2640"],"","",["woman-running"],9,34,15,0],
		"1f3c3-200d-2642-fe0f":[["\uD83C\uDFC3\u200D\u2642\uFE0F","\uD83C\uDFC3\u200D\u2642","\uD83C\uDFC3"],"","",["man-running","runner","running"],9,40,15,0],
		"1f3c4-200d-2640-fe0f":[["\uD83C\uDFC4\u200D\u2640\uFE0F","\uD83C\uDFC4\u200D\u2640"],"","",["woman-surfing"],10,0,15,0],
		"1f3c4-200d-2642-fe0f":[["\uD83C\uDFC4\u200D\u2642\uFE0F","\uD83C\uDFC4\u200D\u2642","\uD83C\uDFC4"],"","",["man-surfing","surfer"],10,6,15,0],
		"1f3c5":[["\uD83C\uDFC5"],"","",["sports_medal"],10,18,15,0],
		"1f3c6":[["\uD83C\uDFC6"],"\uE131","\uDBB9\uDFDB",["trophy"],10,19,31,0],
		"1f3c7":[["\uD83C\uDFC7"],"","",["horse_racing"],10,20,31,0],
		"1f3c8":[["\uD83C\uDFC8"],"\uE42B","\uDBB9\uDFDD",["football"],10,26,31,0],
		"1f3c9":[["\uD83C\uDFC9"],"","",["rugby_football"],10,27,31,0],
		"1f3ca-200d-2640-fe0f":[["\uD83C\uDFCA\u200D\u2640\uFE0F","\uD83C\uDFCA\u200D\u2640"],"","",["woman-swimming"],10,28,15,0],
		"1f3ca-200d-2642-fe0f":[["\uD83C\uDFCA\u200D\u2642\uFE0F","\uD83C\uDFCA\u200D\u2642","\uD83C\uDFCA"],"","",["man-swimming","swimmer"],10,34,15,0],
		"1f3cb-fe0f-200d-2640-fe0f":[["\uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F"],"","",["woman-lifting-weights"],10,46,7,0],
		"1f3cb-fe0f-200d-2642-fe0f":[["\uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F","\uD83C\uDFCB\uFE0F","\uD83C\uDFCB"],"","",["man-lifting-weights","weight_lifter"],11,0,7,0],
		"1f3cc-fe0f-200d-2640-fe0f":[["\uD83C\uDFCC\uFE0F\u200D\u2640\uFE0F"],"","",["woman-golfing"],11,12,7,0],
		"1f3cc-fe0f-200d-2642-fe0f":[["\uD83C\uDFCC\uFE0F\u200D\u2642\uFE0F","\uD83C\uDFCC\uFE0F","\uD83C\uDFCC"],"","",["man-golfing","golfer"],11,18,7,0],
		"1f3cd-fe0f":[["\uD83C\uDFCD\uFE0F","\uD83C\uDFCD"],"","",["racing_motorcycle"],11,30,15,0],
		"1f3ce-fe0f":[["\uD83C\uDFCE\uFE0F","\uD83C\uDFCE"],"","",["racing_car"],11,31,15,0],
		"1f3cf":[["\uD83C\uDFCF"],"","",["cricket_bat_and_ball"],11,32,15,0],
		"1f3d0":[["\uD83C\uDFD0"],"","",["volleyball"],11,33,15,0],
		"1f3d1":[["\uD83C\uDFD1"],"","",["field_hockey_stick_and_ball"],11,34,15,0],
		"1f3d2":[["\uD83C\uDFD2"],"","",["ice_hockey_stick_and_puck"],11,35,15,0],
		"1f3d3":[["\uD83C\uDFD3"],"","",["table_tennis_paddle_and_ball"],11,36,15,0],
		"1f3d4-fe0f":[["\uD83C\uDFD4\uFE0F","\uD83C\uDFD4"],"","",["snow_capped_mountain"],11,37,15,0],
		"1f3d5-fe0f":[["\uD83C\uDFD5\uFE0F","\uD83C\uDFD5"],"","",["camping"],11,38,15,0],
		"1f3d6-fe0f":[["\uD83C\uDFD6\uFE0F","\uD83C\uDFD6"],"","",["beach_with_umbrella"],11,39,15,0],
		"1f3d7-fe0f":[["\uD83C\uDFD7\uFE0F","\uD83C\uDFD7"],"","",["building_construction"],11,40,15,0],
		"1f3d8-fe0f":[["\uD83C\uDFD8\uFE0F","\uD83C\uDFD8"],"","",["house_buildings"],11,41,15,0],
		"1f3d9-fe0f":[["\uD83C\uDFD9\uFE0F","\uD83C\uDFD9"],"","",["cityscape"],11,42,15,0],
		"1f3da-fe0f":[["\uD83C\uDFDA\uFE0F","\uD83C\uDFDA"],"","",["derelict_house_building"],11,43,15,0],
		"1f3db-fe0f":[["\uD83C\uDFDB\uFE0F","\uD83C\uDFDB"],"","",["classical_building"],11,44,15,0],
		"1f3dc-fe0f":[["\uD83C\uDFDC\uFE0F","\uD83C\uDFDC"],"","",["desert"],11,45,15,0],
		"1f3dd-fe0f":[["\uD83C\uDFDD\uFE0F","\uD83C\uDFDD"],"","",["desert_island"],11,46,15,0],
		"1f3de-fe0f":[["\uD83C\uDFDE\uFE0F","\uD83C\uDFDE"],"","",["national_park"],11,47,15,0],
		"1f3df-fe0f":[["\uD83C\uDFDF\uFE0F","\uD83C\uDFDF"],"","",["stadium"],11,48,15,0],
		"1f3e0":[["\uD83C\uDFE0"],"\uE036","\uDBB9\uDCB0",["house"],11,49,31,0],
		"1f3e1":[["\uD83C\uDFE1"],"","\uDBB9\uDCB1",["house_with_garden"],11,50,31,0],
		"1f3e2":[["\uD83C\uDFE2"],"\uE038","\uDBB9\uDCB2",["office"],11,51,31,0],
		"1f3e3":[["\uD83C\uDFE3"],"\uE153","\uDBB9\uDCB3",["post_office"],12,0,31,0],
		"1f3e4":[["\uD83C\uDFE4"],"","",["european_post_office"],12,1,31,0],
		"1f3e5":[["\uD83C\uDFE5"],"\uE155","\uDBB9\uDCB4",["hospital"],12,2,31,0],
		"1f3e6":[["\uD83C\uDFE6"],"\uE14D","\uDBB9\uDCB5",["bank"],12,3,31,0],
		"1f3e7":[["\uD83C\uDFE7"],"\uE154","\uDBB9\uDCB6",["atm"],12,4,31,0],
		"1f3e8":[["\uD83C\uDFE8"],"\uE158","\uDBB9\uDCB7",["hotel"],12,5,31,0],
		"1f3e9":[["\uD83C\uDFE9"],"\uE501","\uDBB9\uDCB8",["love_hotel"],12,6,31,0],
		"1f3ea":[["\uD83C\uDFEA"],"\uE156","\uDBB9\uDCB9",["convenience_store"],12,7,31,0],
		"1f3eb":[["\uD83C\uDFEB"],"\uE157","\uDBB9\uDCBA",["school"],12,8,31,0],
		"1f3ec":[["\uD83C\uDFEC"],"\uE504","\uDBB9\uDCBD",["department_store"],12,9,31,0],
		"1f3ed":[["\uD83C\uDFED"],"\uE508","\uDBB9\uDCC0",["factory"],12,10,31,0],
		"1f3ee":[["\uD83C\uDFEE"],"","\uDBB9\uDCC2",["izakaya_lantern","lantern"],12,11,31,0],
		"1f3ef":[["\uD83C\uDFEF"],"\uE505","\uDBB9\uDCBE",["japanese_castle"],12,12,31,0],
		"1f3f0":[["\uD83C\uDFF0"],"\uE506","\uDBB9\uDCBF",["european_castle"],12,13,31,0],
		"1f3f3-fe0f-200d-1f308":[["\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08","\uD83C\uDFF3\u200D\uD83C\uDF08"],"","",["rainbow-flag"],12,14,31,0],
		"1f3f3-fe0f":[["\uD83C\uDFF3\uFE0F","\uD83C\uDFF3"],"","",["waving_white_flag"],12,15,15,0],
		"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f":[["\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F"],"","",["flag-england"],12,16,15,0],
		"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f":[["\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F"],"","",["flag-scotland"],12,17,15,0],
		"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f":[["\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F"],"","",["flag-wales"],12,18,15,0],
		"1f3f4":[["\uD83C\uDFF4"],"","",["waving_black_flag"],12,19,15,0],
		"1f3f5-fe0f":[["\uD83C\uDFF5\uFE0F","\uD83C\uDFF5"],"","",["rosette"],12,20,15,0],
		"1f3f7-fe0f":[["\uD83C\uDFF7\uFE0F","\uD83C\uDFF7"],"","",["label"],12,21,15,0],
		"1f3f8":[["\uD83C\uDFF8"],"","",["badminton_racquet_and_shuttlecock"],12,22,15,0],
		"1f3f9":[["\uD83C\uDFF9"],"","",["bow_and_arrow"],12,23,15,0],
		"1f3fa":[["\uD83C\uDFFA"],"","",["amphora"],12,24,15,0],
		"1f3fb":[["\uD83C\uDFFB"],"","",["skin-tone-2"],12,25,15,0],
		"1f3fc":[["\uD83C\uDFFC"],"","",["skin-tone-3"],12,26,15,0],
		"1f3fd":[["\uD83C\uDFFD"],"","",["skin-tone-4"],12,27,15,0],
		"1f3fe":[["\uD83C\uDFFE"],"","",["skin-tone-5"],12,28,15,0],
		"1f3ff":[["\uD83C\uDFFF"],"","",["skin-tone-6"],12,29,15,0],
		"1f400":[["\uD83D\uDC00"],"","",["rat"],12,30,31,0],
		"1f401":[["\uD83D\uDC01"],"","",["mouse2"],12,31,31,0],
		"1f402":[["\uD83D\uDC02"],"","",["ox"],12,32,31,0],
		"1f403":[["\uD83D\uDC03"],"","",["water_buffalo"],12,33,31,0],
		"1f404":[["\uD83D\uDC04"],"","",["cow2"],12,34,31,0],
		"1f405":[["\uD83D\uDC05"],"","",["tiger2"],12,35,31,0],
		"1f406":[["\uD83D\uDC06"],"","",["leopard"],12,36,31,0],
		"1f407":[["\uD83D\uDC07"],"","",["rabbit2"],12,37,31,0],
		"1f408":[["\uD83D\uDC08"],"","",["cat2"],12,38,31,0],
		"1f409":[["\uD83D\uDC09"],"","",["dragon"],12,39,31,0],
		"1f40a":[["\uD83D\uDC0A"],"","",["crocodile"],12,40,31,0],
		"1f40b":[["\uD83D\uDC0B"],"","",["whale2"],12,41,31,0],
		"1f40c":[["\uD83D\uDC0C"],"","\uDBB8\uDDB9",["snail"],12,42,31,0],
		"1f40d":[["\uD83D\uDC0D"],"\uE52D","\uDBB8\uDDD3",["snake"],12,43,31,0],
		"1f40e":[["\uD83D\uDC0E"],"\uE134","\uDBB9\uDFDC",["racehorse"],12,44,31,0],
		"1f40f":[["\uD83D\uDC0F"],"","",["ram"],12,45,31,0],
		"1f410":[["\uD83D\uDC10"],"","",["goat"],12,46,31,0],
		"1f411":[["\uD83D\uDC11"],"\uE529","\uDBB8\uDDCF",["sheep"],12,47,31,0],
		"1f412":[["\uD83D\uDC12"],"\uE528","\uDBB8\uDDCE",["monkey"],12,48,31,0],
		"1f413":[["\uD83D\uDC13"],"","",["rooster"],12,49,31,0],
		"1f414":[["\uD83D\uDC14"],"\uE52E","\uDBB8\uDDD4",["chicken"],12,50,31,0],
		"1f415":[["\uD83D\uDC15"],"","",["dog2"],12,51,31,0],
		"1f416":[["\uD83D\uDC16"],"","",["pig2"],13,0,31,0],
		"1f417":[["\uD83D\uDC17"],"\uE52F","\uDBB8\uDDD5",["boar"],13,1,31,0],
		"1f418":[["\uD83D\uDC18"],"\uE526","\uDBB8\uDDCC",["elephant"],13,2,31,0],
		"1f419":[["\uD83D\uDC19"],"\uE10A","\uDBB8\uDDC5",["octopus"],13,3,31,0],
		"1f41a":[["\uD83D\uDC1A"],"\uE441","\uDBB8\uDDC6",["shell"],13,4,31,0],
		"1f41b":[["\uD83D\uDC1B"],"\uE525","\uDBB8\uDDCB",["bug"],13,5,31,0],
		"1f41c":[["\uD83D\uDC1C"],"","\uDBB8\uDDDA",["ant"],13,6,31,0],
		"1f41d":[["\uD83D\uDC1D"],"","\uDBB8\uDDE1",["bee","honeybee"],13,7,31,0],
		"1f41e":[["\uD83D\uDC1E"],"","\uDBB8\uDDE2",["beetle"],13,8,31,0],
		"1f41f":[["\uD83D\uDC1F"],"\uE019","\uDBB8\uDDBD",["fish"],13,9,31,0],
		"1f420":[["\uD83D\uDC20"],"\uE522","\uDBB8\uDDC9",["tropical_fish"],13,10,31,0],
		"1f421":[["\uD83D\uDC21"],"","\uDBB8\uDDD9",["blowfish"],13,11,31,0],
		"1f422":[["\uD83D\uDC22"],"","\uDBB8\uDDDC",["turtle"],13,12,31,0],
		"1f423":[["\uD83D\uDC23"],"","\uDBB8\uDDDD",["hatching_chick"],13,13,31,0],
		"1f424":[["\uD83D\uDC24"],"\uE523","\uDBB8\uDDBA",["baby_chick"],13,14,31,0],
		"1f425":[["\uD83D\uDC25"],"","\uDBB8\uDDBB",["hatched_chick"],13,15,31,0],
		"1f426":[["\uD83D\uDC26"],"\uE521","\uDBB8\uDDC8",["bird"],13,16,31,0],
		"1f427":[["\uD83D\uDC27"],"\uE055","\uDBB8\uDDBC",["penguin"],13,17,31,0],
		"1f428":[["\uD83D\uDC28"],"\uE527","\uDBB8\uDDCD",["koala"],13,18,31,0],
		"1f429":[["\uD83D\uDC29"],"","\uDBB8\uDDD8",["poodle"],13,19,31,0],
		"1f42a":[["\uD83D\uDC2A"],"","",["dromedary_camel"],13,20,31,0],
		"1f42b":[["\uD83D\uDC2B"],"\uE530","\uDBB8\uDDD6",["camel"],13,21,31,0],
		"1f42c":[["\uD83D\uDC2C"],"\uE520","\uDBB8\uDDC7",["dolphin","flipper"],13,22,31,0],
		"1f42d":[["\uD83D\uDC2D"],"\uE053","\uDBB8\uDDC2",["mouse"],13,23,31,0],
		"1f42e":[["\uD83D\uDC2E"],"\uE52B","\uDBB8\uDDD1",["cow"],13,24,31,0],
		"1f42f":[["\uD83D\uDC2F"],"\uE050","\uDBB8\uDDC0",["tiger"],13,25,31,0],
		"1f430":[["\uD83D\uDC30"],"\uE52C","\uDBB8\uDDD2",["rabbit"],13,26,31,0],
		"1f431":[["\uD83D\uDC31"],"\uE04F","\uDBB8\uDDB8",["cat"],13,27,31,0],
		"1f432":[["\uD83D\uDC32"],"","\uDBB8\uDDDE",["dragon_face"],13,28,31,0],
		"1f433":[["\uD83D\uDC33"],"\uE054","\uDBB8\uDDC3",["whale"],13,29,31,0],
		"1f434":[["\uD83D\uDC34"],"\uE01A","\uDBB8\uDDBE",["horse"],13,30,31,0],
		"1f435":[["\uD83D\uDC35"],"\uE109","\uDBB8\uDDC4",["monkey_face"],13,31,31,0],
		"1f436":[["\uD83D\uDC36"],"\uE052","\uDBB8\uDDB7",["dog"],13,32,31,0],
		"1f437":[["\uD83D\uDC37"],"\uE10B","\uDBB8\uDDBF",["pig"],13,33,31,0],
		"1f438":[["\uD83D\uDC38"],"\uE531","\uDBB8\uDDD7",["frog"],13,34,31,0],
		"1f439":[["\uD83D\uDC39"],"\uE524","\uDBB8\uDDCA",["hamster"],13,35,31,0],
		"1f43a":[["\uD83D\uDC3A"],"\uE52A","\uDBB8\uDDD0",["wolf"],13,36,31,0],
		"1f43b":[["\uD83D\uDC3B"],"\uE051","\uDBB8\uDDC1",["bear"],13,37,31,0],
		"1f43c":[["\uD83D\uDC3C"],"","\uDBB8\uDDDF",["panda_face"],13,38,31,0],
		"1f43d":[["\uD83D\uDC3D"],"","\uDBB8\uDDE0",["pig_nose"],13,39,31,0],
		"1f43e":[["\uD83D\uDC3E"],"","\uDBB8\uDDDB",["feet","paw_prints"],13,40,31,0],
		"1f43f-fe0f":[["\uD83D\uDC3F\uFE0F","\uD83D\uDC3F"],"","",["chipmunk"],13,41,15,0],
		"1f440":[["\uD83D\uDC40"],"\uE419","\uDBB8\uDD90",["eyes"],13,42,31,0],
		"1f441-fe0f-200d-1f5e8-fe0f":[["\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F"],"","",["eye-in-speech-bubble"],13,43,3,0],
		"1f441-fe0f":[["\uD83D\uDC41\uFE0F","\uD83D\uDC41"],"","",["eye"],13,44,15,0],
		"1f442":[["\uD83D\uDC42"],"\uE41B","\uDBB8\uDD91",["ear"],13,45,31,0],
		"1f443":[["\uD83D\uDC43"],"\uE41A","\uDBB8\uDD92",["nose"],13,51,31,0],
		"1f444":[["\uD83D\uDC44"],"\uE41C","\uDBB8\uDD93",["lips"],14,5,31,0],
		"1f445":[["\uD83D\uDC45"],"","\uDBB8\uDD94",["tongue"],14,6,31,0],
		"1f446":[["\uD83D\uDC46"],"\uE22E","\uDBBA\uDF99",["point_up_2"],14,7,31,0],
		"1f447":[["\uD83D\uDC47"],"\uE22F","\uDBBA\uDF9A",["point_down"],14,13,31,0],
		"1f448":[["\uD83D\uDC48"],"\uE230","\uDBBA\uDF9B",["point_left"],14,19,31,0],
		"1f449":[["\uD83D\uDC49"],"\uE231","\uDBBA\uDF9C",["point_right"],14,25,31,0],
		"1f44a":[["\uD83D\uDC4A"],"\uE00D","\uDBBA\uDF96",["facepunch","punch"],14,31,31,0],
		"1f44b":[["\uD83D\uDC4B"],"\uE41E","\uDBBA\uDF9D",["wave"],14,37,31,0],
		"1f44c":[["\uD83D\uDC4C"],"\uE420","\uDBBA\uDF9F",["ok_hand"],14,43,31,0],
		"1f44d":[["\uD83D\uDC4D"],"\uE00E","\uDBBA\uDF97",["+1","thumbsup"],14,49,31,0],
		"1f44e":[["\uD83D\uDC4E"],"\uE421","\uDBBA\uDFA0",["-1","thumbsdown"],15,3,31,0],
		"1f44f":[["\uD83D\uDC4F"],"\uE41F","\uDBBA\uDF9E",["clap"],15,9,31,0],
		"1f450":[["\uD83D\uDC50"],"\uE422","\uDBBA\uDFA1",["open_hands"],15,15,31,0],
		"1f451":[["\uD83D\uDC51"],"\uE10E","\uDBB9\uDCD1",["crown"],15,21,31,0],
		"1f452":[["\uD83D\uDC52"],"\uE318","\uDBB9\uDCD4",["womans_hat"],15,22,31,0],
		"1f453":[["\uD83D\uDC53"],"","\uDBB9\uDCCE",["eyeglasses"],15,23,31,0],
		"1f454":[["\uD83D\uDC54"],"\uE302","\uDBB9\uDCD3",["necktie"],15,24,31,0],
		"1f455":[["\uD83D\uDC55"],"\uE006","\uDBB9\uDCCF",["shirt","tshirt"],15,25,31,0],
		"1f456":[["\uD83D\uDC56"],"","\uDBB9\uDCD0",["jeans"],15,26,31,0],
		"1f457":[["\uD83D\uDC57"],"\uE319","\uDBB9\uDCD5",["dress"],15,27,31,0],
		"1f458":[["\uD83D\uDC58"],"\uE321","\uDBB9\uDCD9",["kimono"],15,28,31,0],
		"1f459":[["\uD83D\uDC59"],"\uE322","\uDBB9\uDCDA",["bikini"],15,29,31,0],
		"1f45a":[["\uD83D\uDC5A"],"","\uDBB9\uDCDB",["womans_clothes"],15,30,31,0],
		"1f45b":[["\uD83D\uDC5B"],"","\uDBB9\uDCDC",["purse"],15,31,31,0],
		"1f45c":[["\uD83D\uDC5C"],"\uE323","\uDBB9\uDCF0",["handbag"],15,32,31,0],
		"1f45d":[["\uD83D\uDC5D"],"","\uDBB9\uDCF1",["pouch"],15,33,31,0],
		"1f45e":[["\uD83D\uDC5E"],"","\uDBB9\uDCCC",["mans_shoe","shoe"],15,34,31,0],
		"1f45f":[["\uD83D\uDC5F"],"\uE007","\uDBB9\uDCCD",["athletic_shoe"],15,35,31,0],
		"1f460":[["\uD83D\uDC60"],"\uE13E","\uDBB9\uDCD6",["high_heel"],15,36,31,0],
		"1f461":[["\uD83D\uDC61"],"\uE31A","\uDBB9\uDCD7",["sandal"],15,37,31,0],
		"1f462":[["\uD83D\uDC62"],"\uE31B","\uDBB9\uDCD8",["boot"],15,38,31,0],
		"1f463":[["\uD83D\uDC63"],"\uE536","\uDBB9\uDD53",["footprints"],15,39,31,0],
		"1f464":[["\uD83D\uDC64"],"","\uDBB8\uDD9A",["bust_in_silhouette"],15,40,31,0],
		"1f465":[["\uD83D\uDC65"],"","",["busts_in_silhouette"],15,41,31,0],
		"1f466":[["\uD83D\uDC66"],"\uE001","\uDBB8\uDD9B",["boy"],15,42,31,0],
		"1f467":[["\uD83D\uDC67"],"\uE002","\uDBB8\uDD9C",["girl"],15,48,31,0],
		"1f468-200d-1f33e":[["\uD83D\uDC68\u200D\uD83C\uDF3E"],"","",["male-farmer"],16,2,15,0],
		"1f468-200d-1f373":[["\uD83D\uDC68\u200D\uD83C\uDF73"],"","",["male-cook"],16,8,15,0],
		"1f468-200d-1f393":[["\uD83D\uDC68\u200D\uD83C\uDF93"],"","",["male-student"],16,14,15,0],
		"1f468-200d-1f3a4":[["\uD83D\uDC68\u200D\uD83C\uDFA4"],"","",["male-singer"],16,20,15,0],
		"1f468-200d-1f3a8":[["\uD83D\uDC68\u200D\uD83C\uDFA8"],"","",["male-artist"],16,26,15,0],
		"1f468-200d-1f3eb":[["\uD83D\uDC68\u200D\uD83C\uDFEB"],"","",["male-teacher"],16,32,15,0],
		"1f468-200d-1f3ed":[["\uD83D\uDC68\u200D\uD83C\uDFED"],"","",["male-factory-worker"],16,38,15,0],
		"1f468-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-boy-boy"],16,44,15,0],
		"1f468-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC66"],"","",["man-boy"],16,45,15,0],
		"1f468-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-girl-boy"],16,46,15,0],
		"1f468-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-girl-girl"],16,47,15,0],
		"1f468-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC67"],"","",["man-girl"],16,48,15,0],
		"1f468-200d-1f468-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66"],"","",["man-man-boy"],16,49,31,0],
		"1f468-200d-1f468-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-man-boy-boy"],16,50,31,0],
		"1f468-200d-1f468-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67"],"","",["man-man-girl"],16,51,31,0],
		"1f468-200d-1f468-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-man-girl-boy"],17,0,31,0],
		"1f468-200d-1f468-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-man-girl-girl"],17,1,31,0],
		"1f468-200d-1f469-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66","\uD83D\uDC6A"],"","",["man-woman-boy","family"],17,2,31,0],
		"1f468-200d-1f469-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-woman-boy-boy"],17,3,31,0],
		"1f468-200d-1f469-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["man-woman-girl"],17,4,31,0],
		"1f468-200d-1f469-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-woman-girl-boy"],17,5,31,0],
		"1f468-200d-1f469-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-woman-girl-girl"],17,6,31,0],
		"1f468-200d-1f4bb":[["\uD83D\uDC68\u200D\uD83D\uDCBB"],"","",["male-technologist"],17,7,15,0],
		"1f468-200d-1f4bc":[["\uD83D\uDC68\u200D\uD83D\uDCBC"],"","",["male-office-worker"],17,13,15,0],
		"1f468-200d-1f527":[["\uD83D\uDC68\u200D\uD83D\uDD27"],"","",["male-mechanic"],17,19,15,0],
		"1f468-200d-1f52c":[["\uD83D\uDC68\u200D\uD83D\uDD2C"],"","",["male-scientist"],17,25,15,0],
		"1f468-200d-1f680":[["\uD83D\uDC68\u200D\uD83D\uDE80"],"","",["male-astronaut"],17,31,15,0],
		"1f468-200d-1f692":[["\uD83D\uDC68\u200D\uD83D\uDE92"],"","",["male-firefighter"],17,37,15,0],
		"1f468-200d-2695-fe0f":[["\uD83D\uDC68\u200D\u2695\uFE0F","\uD83D\uDC68\u200D\u2695"],"","",["male-doctor"],17,43,15,0],
		"1f468-200d-2696-fe0f":[["\uD83D\uDC68\u200D\u2696\uFE0F","\uD83D\uDC68\u200D\u2696"],"","",["male-judge"],17,49,15,0],
		"1f468-200d-2708-fe0f":[["\uD83D\uDC68\u200D\u2708\uFE0F","\uD83D\uDC68\u200D\u2708"],"","",["male-pilot"],18,3,15,0],
		"1f468-200d-2764-fe0f-200d-1f468":[["\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68","\uD83D\uDC68\u200D\u2764\u200D\uD83D\uDC68"],"","",["man-heart-man"],18,9,31,0],
		"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468":[["\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68","\uD83D\uDC68\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC68"],"","",["man-kiss-man"],18,10,31,0],
		"1f468":[["\uD83D\uDC68"],"\uE004","\uDBB8\uDD9D",["man"],18,11,31,0],
		"1f469-200d-1f33e":[["\uD83D\uDC69\u200D\uD83C\uDF3E"],"","",["female-farmer"],18,17,15,0],
		"1f469-200d-1f373":[["\uD83D\uDC69\u200D\uD83C\uDF73"],"","",["female-cook"],18,23,15,0],
		"1f469-200d-1f393":[["\uD83D\uDC69\u200D\uD83C\uDF93"],"","",["female-student"],18,29,15,0],
		"1f469-200d-1f3a4":[["\uD83D\uDC69\u200D\uD83C\uDFA4"],"","",["female-singer"],18,35,15,0],
		"1f469-200d-1f3a8":[["\uD83D\uDC69\u200D\uD83C\uDFA8"],"","",["female-artist"],18,41,15,0],
		"1f469-200d-1f3eb":[["\uD83D\uDC69\u200D\uD83C\uDFEB"],"","",["female-teacher"],18,47,15,0],
		"1f469-200d-1f3ed":[["\uD83D\uDC69\u200D\uD83C\uDFED"],"","",["female-factory-worker"],19,1,15,0],
		"1f469-200d-1f466-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["woman-boy-boy"],19,7,15,0],
		"1f469-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC66"],"","",["woman-boy"],19,8,15,0],
		"1f469-200d-1f467-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["woman-girl-boy"],19,9,15,0],
		"1f469-200d-1f467-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["woman-girl-girl"],19,10,15,0],
		"1f469-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["woman-girl"],19,11,15,0],
		"1f469-200d-1f469-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66"],"","",["woman-woman-boy"],19,12,31,0],
		"1f469-200d-1f469-200d-1f466-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["woman-woman-boy-boy"],19,13,31,0],
		"1f469-200d-1f469-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["woman-woman-girl"],19,14,31,0],
		"1f469-200d-1f469-200d-1f467-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["woman-woman-girl-boy"],19,15,31,0],
		"1f469-200d-1f469-200d-1f467-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["woman-woman-girl-girl"],19,16,31,0],
		"1f469-200d-1f4bb":[["\uD83D\uDC69\u200D\uD83D\uDCBB"],"","",["female-technologist"],19,17,15,0],
		"1f469-200d-1f4bc":[["\uD83D\uDC69\u200D\uD83D\uDCBC"],"","",["female-office-worker"],19,23,15,0],
		"1f469-200d-1f527":[["\uD83D\uDC69\u200D\uD83D\uDD27"],"","",["female-mechanic"],19,29,15,0],
		"1f469-200d-1f52c":[["\uD83D\uDC69\u200D\uD83D\uDD2C"],"","",["female-scientist"],19,35,15,0],
		"1f469-200d-1f680":[["\uD83D\uDC69\u200D\uD83D\uDE80"],"","",["female-astronaut"],19,41,15,0],
		"1f469-200d-1f692":[["\uD83D\uDC69\u200D\uD83D\uDE92"],"","",["female-firefighter"],19,47,15,0],
		"1f469-200d-2695-fe0f":[["\uD83D\uDC69\u200D\u2695\uFE0F","\uD83D\uDC69\u200D\u2695"],"","",["female-doctor"],20,1,15,0],
		"1f469-200d-2696-fe0f":[["\uD83D\uDC69\u200D\u2696\uFE0F","\uD83D\uDC69\u200D\u2696"],"","",["female-judge"],20,7,15,0],
		"1f469-200d-2708-fe0f":[["\uD83D\uDC69\u200D\u2708\uFE0F","\uD83D\uDC69\u200D\u2708"],"","",["female-pilot"],20,13,15,0],
		"1f469-200d-2764-fe0f-200d-1f468":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC68","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC68","\uD83D\uDC91"],"","",["woman-heart-man","couple_with_heart"],20,19,15,0],
		"1f469-200d-2764-fe0f-200d-1f469":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC69"],"","",["woman-heart-woman"],20,20,31,0],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC68","\uD83D\uDC8F"],"","",["woman-kiss-man","couplekiss"],20,21,15,0],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC69"],"","",["woman-kiss-woman"],20,22,31,0],
		"1f469":[["\uD83D\uDC69"],"\uE005","\uDBB8\uDD9E",["woman"],20,23,31,0],
		"1f46b":[["\uD83D\uDC6B"],"\uE428","\uDBB8\uDDA0",["couple","man_and_woman_holding_hands"],20,30,31,0],
		"1f46c":[["\uD83D\uDC6C"],"","",["two_men_holding_hands"],20,31,31,0],
		"1f46d":[["\uD83D\uDC6D"],"","",["two_women_holding_hands"],20,32,31,0],
		"1f46e-200d-2640-fe0f":[["\uD83D\uDC6E\u200D\u2640\uFE0F","\uD83D\uDC6E\u200D\u2640"],"","",["female-police-officer"],20,33,15,0],
		"1f46e-200d-2642-fe0f":[["\uD83D\uDC6E\u200D\u2642\uFE0F","\uD83D\uDC6E\u200D\u2642","\uD83D\uDC6E"],"","",["male-police-officer","cop"],20,39,15,0],
		"1f46f-200d-2640-fe0f":[["\uD83D\uDC6F\u200D\u2640\uFE0F","\uD83D\uDC6F\u200D\u2640","\uD83D\uDC6F"],"","",["woman-with-bunny-ears-partying","dancers"],20,51,15,0],
		"1f46f-200d-2642-fe0f":[["\uD83D\uDC6F\u200D\u2642\uFE0F","\uD83D\uDC6F\u200D\u2642"],"","",["man-with-bunny-ears-partying"],21,0,15,0],
		"1f470":[["\uD83D\uDC70"],"","\uDBB8\uDDA3",["bride_with_veil"],21,2,31,0],
		"1f471-200d-2640-fe0f":[["\uD83D\uDC71\u200D\u2640\uFE0F","\uD83D\uDC71\u200D\u2640"],"","",["blond-haired-woman"],21,8,15,0],
		"1f471-200d-2642-fe0f":[["\uD83D\uDC71\u200D\u2642\uFE0F","\uD83D\uDC71\u200D\u2642","\uD83D\uDC71"],"","",["blond-haired-man","person_with_blond_hair"],21,14,15,0],
		"1f472":[["\uD83D\uDC72"],"\uE516","\uDBB8\uDDA5",["man_with_gua_pi_mao"],21,26,31,0],
		"1f473-200d-2640-fe0f":[["\uD83D\uDC73\u200D\u2640\uFE0F","\uD83D\uDC73\u200D\u2640"],"","",["woman-wearing-turban"],21,32,15,0],
		"1f473-200d-2642-fe0f":[["\uD83D\uDC73\u200D\u2642\uFE0F","\uD83D\uDC73\u200D\u2642","\uD83D\uDC73"],"","",["man-wearing-turban","man_with_turban"],21,38,15,0],
		"1f474":[["\uD83D\uDC74"],"\uE518","\uDBB8\uDDA7",["older_man"],21,50,31,0],
		"1f475":[["\uD83D\uDC75"],"\uE519","\uDBB8\uDDA8",["older_woman"],22,4,31,0],
		"1f476":[["\uD83D\uDC76"],"\uE51A","\uDBB8\uDDA9",["baby"],22,10,31,0],
		"1f477-200d-2640-fe0f":[["\uD83D\uDC77\u200D\u2640\uFE0F","\uD83D\uDC77\u200D\u2640"],"","",["female-construction-worker"],22,16,15,0],
		"1f477-200d-2642-fe0f":[["\uD83D\uDC77\u200D\u2642\uFE0F","\uD83D\uDC77\u200D\u2642","\uD83D\uDC77"],"","",["male-construction-worker","construction_worker"],22,22,15,0],
		"1f478":[["\uD83D\uDC78"],"\uE51C","\uDBB8\uDDAB",["princess"],22,34,31,0],
		"1f479":[["\uD83D\uDC79"],"","\uDBB8\uDDAC",["japanese_ogre"],22,40,31,0],
		"1f47a":[["\uD83D\uDC7A"],"","\uDBB8\uDDAD",["japanese_goblin"],22,41,31,0],
		"1f47b":[["\uD83D\uDC7B"],"\uE11B","\uDBB8\uDDAE",["ghost"],22,42,31,0],
		"1f47c":[["\uD83D\uDC7C"],"\uE04E","\uDBB8\uDDAF",["angel"],22,43,31,0],
		"1f47d":[["\uD83D\uDC7D"],"\uE10C","\uDBB8\uDDB0",["alien"],22,49,31,0],
		"1f47e":[["\uD83D\uDC7E"],"\uE12B","\uDBB8\uDDB1",["space_invader"],22,50,31,0],
		"1f47f":[["\uD83D\uDC7F"],"\uE11A","\uDBB8\uDDB2",["imp"],22,51,31,0],
		"1f480":[["\uD83D\uDC80"],"\uE11C","\uDBB8\uDDB3",["skull"],23,0,31,0],
		"1f481-200d-2640-fe0f":[["\uD83D\uDC81\u200D\u2640\uFE0F","\uD83D\uDC81\u200D\u2640","\uD83D\uDC81"],"","",["woman-tipping-hand","information_desk_person"],23,1,15,0],
		"1f481-200d-2642-fe0f":[["\uD83D\uDC81\u200D\u2642\uFE0F","\uD83D\uDC81\u200D\u2642"],"","",["man-tipping-hand"],23,7,15,0],
		"1f482-200d-2640-fe0f":[["\uD83D\uDC82\u200D\u2640\uFE0F","\uD83D\uDC82\u200D\u2640"],"","",["female-guard"],23,19,15,0],
		"1f482-200d-2642-fe0f":[["\uD83D\uDC82\u200D\u2642\uFE0F","\uD83D\uDC82\u200D\u2642","\uD83D\uDC82"],"","",["male-guard","guardsman"],23,25,15,0],
		"1f483":[["\uD83D\uDC83"],"\uE51F","\uDBB8\uDDB6",["dancer"],23,37,31,0],
		"1f484":[["\uD83D\uDC84"],"\uE31C","\uDBB8\uDD95",["lipstick"],23,43,31,0],
		"1f485":[["\uD83D\uDC85"],"\uE31D","\uDBB8\uDD96",["nail_care"],23,44,31,0],
		"1f486-200d-2640-fe0f":[["\uD83D\uDC86\u200D\u2640\uFE0F","\uD83D\uDC86\u200D\u2640","\uD83D\uDC86"],"","",["woman-getting-massage","massage"],23,50,15,0],
		"1f486-200d-2642-fe0f":[["\uD83D\uDC86\u200D\u2642\uFE0F","\uD83D\uDC86\u200D\u2642"],"","",["man-getting-massage"],24,4,15,0],
		"1f487-200d-2640-fe0f":[["\uD83D\uDC87\u200D\u2640\uFE0F","\uD83D\uDC87\u200D\u2640","\uD83D\uDC87"],"","",["woman-getting-haircut","haircut"],24,16,15,0],
		"1f487-200d-2642-fe0f":[["\uD83D\uDC87\u200D\u2642\uFE0F","\uD83D\uDC87\u200D\u2642"],"","",["man-getting-haircut"],24,22,15,0],
		"1f488":[["\uD83D\uDC88"],"\uE320","\uDBB8\uDD99",["barber"],24,34,31,0],
		"1f489":[["\uD83D\uDC89"],"\uE13B","\uDBB9\uDD09",["syringe"],24,35,31,0],
		"1f48a":[["\uD83D\uDC8A"],"\uE30F","\uDBB9\uDD0A",["pill"],24,36,31,0],
		"1f48b":[["\uD83D\uDC8B"],"\uE003","\uDBBA\uDC23",["kiss"],24,37,31,0],
		"1f48c":[["\uD83D\uDC8C"],"","\uDBBA\uDC24",["love_letter"],24,38,31,0],
		"1f48d":[["\uD83D\uDC8D"],"\uE034","\uDBBA\uDC25",["ring"],24,39,31,0],
		"1f48e":[["\uD83D\uDC8E"],"\uE035","\uDBBA\uDC26",["gem"],24,40,31,0],
		"1f490":[["\uD83D\uDC90"],"\uE306","\uDBBA\uDC28",["bouquet"],24,42,31,0],
		"1f492":[["\uD83D\uDC92"],"\uE43D","\uDBBA\uDC2A",["wedding"],24,44,31,0],
		"1f493":[["\uD83D\uDC93"],"\uE327","\uDBBA\uDF0D",["heartbeat"],24,45,31,0],
		"1f494":[["\uD83D\uDC94"],"\uE023","\uDBBA\uDF0E",["broken_heart"],24,46,31,0,"<\/3"],
		"1f495":[["\uD83D\uDC95"],"","\uDBBA\uDF0F",["two_hearts"],24,47,31,0],
		"1f496":[["\uD83D\uDC96"],"","\uDBBA\uDF10",["sparkling_heart"],24,48,31,0],
		"1f497":[["\uD83D\uDC97"],"\uE328","\uDBBA\uDF11",["heartpulse"],24,49,31,0],
		"1f498":[["\uD83D\uDC98"],"\uE329","\uDBBA\uDF12",["cupid"],24,50,31,0],
		"1f499":[["\uD83D\uDC99"],"\uE32A","\uDBBA\uDF13",["blue_heart"],24,51,31,0,"<3"],
		"1f49a":[["\uD83D\uDC9A"],"\uE32B","\uDBBA\uDF14",["green_heart"],25,0,31,0,"<3"],
		"1f49b":[["\uD83D\uDC9B"],"\uE32C","\uDBBA\uDF15",["yellow_heart"],25,1,31,0,"<3"],
		"1f49c":[["\uD83D\uDC9C"],"\uE32D","\uDBBA\uDF16",["purple_heart"],25,2,31,0,"<3"],
		"1f49d":[["\uD83D\uDC9D"],"\uE437","\uDBBA\uDF17",["gift_heart"],25,3,31,0],
		"1f49e":[["\uD83D\uDC9E"],"","\uDBBA\uDF18",["revolving_hearts"],25,4,31,0],
		"1f49f":[["\uD83D\uDC9F"],"\uE204","\uDBBA\uDF19",["heart_decoration"],25,5,31,0],
		"1f4a0":[["\uD83D\uDCA0"],"","\uDBBA\uDF55",["diamond_shape_with_a_dot_inside"],25,6,31,0],
		"1f4a1":[["\uD83D\uDCA1"],"\uE10F","\uDBBA\uDF56",["bulb"],25,7,31,0],
		"1f4a2":[["\uD83D\uDCA2"],"\uE334","\uDBBA\uDF57",["anger"],25,8,31,0],
		"1f4a3":[["\uD83D\uDCA3"],"\uE311","\uDBBA\uDF58",["bomb"],25,9,31,0],
		"1f4a4":[["\uD83D\uDCA4"],"\uE13C","\uDBBA\uDF59",["zzz"],25,10,31,0],
		"1f4a5":[["\uD83D\uDCA5"],"","\uDBBA\uDF5A",["boom","collision"],25,11,31,0],
		"1f4a6":[["\uD83D\uDCA6"],"\uE331","\uDBBA\uDF5B",["sweat_drops"],25,12,31,0],
		"1f4a7":[["\uD83D\uDCA7"],"","\uDBBA\uDF5C",["droplet"],25,13,31,0],
		"1f4a8":[["\uD83D\uDCA8"],"\uE330","\uDBBA\uDF5D",["dash"],25,14,31,0],
		"1f4a9":[["\uD83D\uDCA9"],"\uE05A","\uDBB9\uDCF4",["hankey","poop","shit"],25,15,31,0],
		"1f4aa":[["\uD83D\uDCAA"],"\uE14C","\uDBBA\uDF5E",["muscle"],25,16,31,0],
		"1f4ab":[["\uD83D\uDCAB"],"","\uDBBA\uDF5F",["dizzy"],25,22,31,0],
		"1f4ac":[["\uD83D\uDCAC"],"","\uDBB9\uDD32",["speech_balloon"],25,23,31,0],
		"1f4ad":[["\uD83D\uDCAD"],"","",["thought_balloon"],25,24,31,0],
		"1f4ae":[["\uD83D\uDCAE"],"","\uDBBA\uDF7A",["white_flower"],25,25,31,0],
		"1f4af":[["\uD83D\uDCAF"],"","\uDBBA\uDF7B",["100"],25,26,31,0],
		"1f4b0":[["\uD83D\uDCB0"],"\uE12F","\uDBB9\uDCDD",["moneybag"],25,27,31,0],
		"1f4b1":[["\uD83D\uDCB1"],"\uE149","\uDBB9\uDCDE",["currency_exchange"],25,28,31,0],
		"1f4b2":[["\uD83D\uDCB2"],"","\uDBB9\uDCE0",["heavy_dollar_sign"],25,29,31,0],
		"1f4b3":[["\uD83D\uDCB3"],"","\uDBB9\uDCE1",["credit_card"],25,30,31,0],
		"1f4b4":[["\uD83D\uDCB4"],"","\uDBB9\uDCE2",["yen"],25,31,31,0],
		"1f4b5":[["\uD83D\uDCB5"],"","\uDBB9\uDCE3",["dollar"],25,32,31,0],
		"1f4b6":[["\uD83D\uDCB6"],"","",["euro"],25,33,31,0],
		"1f4b7":[["\uD83D\uDCB7"],"","",["pound"],25,34,31,0],
		"1f4b8":[["\uD83D\uDCB8"],"","\uDBB9\uDCE4",["money_with_wings"],25,35,31,0],
		"1f4b9":[["\uD83D\uDCB9"],"\uE14A","\uDBB9\uDCDF",["chart"],25,36,31,0],
		"1f4ba":[["\uD83D\uDCBA"],"\uE11F","\uDBB9\uDD37",["seat"],25,37,31,0],
		"1f4bb":[["\uD83D\uDCBB"],"\uE00C","\uDBB9\uDD38",["computer"],25,38,31,0],
		"1f4bc":[["\uD83D\uDCBC"],"\uE11E","\uDBB9\uDD3B",["briefcase"],25,39,31,0],
		"1f4bd":[["\uD83D\uDCBD"],"\uE316","\uDBB9\uDD3C",["minidisc"],25,40,31,0],
		"1f4be":[["\uD83D\uDCBE"],"","\uDBB9\uDD3D",["floppy_disk"],25,41,31,0],
		"1f4bf":[["\uD83D\uDCBF"],"\uE126","\uDBBA\uDC1D",["cd"],25,42,31,0],
		"1f4c0":[["\uD83D\uDCC0"],"\uE127","\uDBBA\uDC1E",["dvd"],25,43,31,0],
		"1f4c1":[["\uD83D\uDCC1"],"","\uDBB9\uDD43",["file_folder"],25,44,31,0],
		"1f4c2":[["\uD83D\uDCC2"],"","\uDBB9\uDD44",["open_file_folder"],25,45,31,0],
		"1f4c3":[["\uD83D\uDCC3"],"","\uDBB9\uDD40",["page_with_curl"],25,46,31,0],
		"1f4c4":[["\uD83D\uDCC4"],"","\uDBB9\uDD41",["page_facing_up"],25,47,31,0],
		"1f4c5":[["\uD83D\uDCC5"],"","\uDBB9\uDD42",["date"],25,48,31,0],
		"1f4c6":[["\uD83D\uDCC6"],"","\uDBB9\uDD49",["calendar"],25,49,31,0],
		"1f4c7":[["\uD83D\uDCC7"],"","\uDBB9\uDD4D",["card_index"],25,50,31,0],
		"1f4c8":[["\uD83D\uDCC8"],"","\uDBB9\uDD4B",["chart_with_upwards_trend"],25,51,31,0],
		"1f4c9":[["\uD83D\uDCC9"],"","\uDBB9\uDD4C",["chart_with_downwards_trend"],26,0,31,0],
		"1f4ca":[["\uD83D\uDCCA"],"","\uDBB9\uDD4A",["bar_chart"],26,1,31,0],
		"1f4cb":[["\uD83D\uDCCB"],"","\uDBB9\uDD48",["clipboard"],26,2,31,0],
		"1f4cc":[["\uD83D\uDCCC"],"","\uDBB9\uDD4E",["pushpin"],26,3,31,0],
		"1f4cd":[["\uD83D\uDCCD"],"","\uDBB9\uDD3F",["round_pushpin"],26,4,31,0],
		"1f4ce":[["\uD83D\uDCCE"],"","\uDBB9\uDD3A",["paperclip"],26,5,31,0],
		"1f4cf":[["\uD83D\uDCCF"],"","\uDBB9\uDD50",["straight_ruler"],26,6,31,0],
		"1f4d0":[["\uD83D\uDCD0"],"","\uDBB9\uDD51",["triangular_ruler"],26,7,31,0],
		"1f4d1":[["\uD83D\uDCD1"],"","\uDBB9\uDD52",["bookmark_tabs"],26,8,31,0],
		"1f4d2":[["\uD83D\uDCD2"],"","\uDBB9\uDD4F",["ledger"],26,9,31,0],
		"1f4d3":[["\uD83D\uDCD3"],"","\uDBB9\uDD45",["notebook"],26,10,31,0],
		"1f4d4":[["\uD83D\uDCD4"],"","\uDBB9\uDD47",["notebook_with_decorative_cover"],26,11,31,0],
		"1f4d5":[["\uD83D\uDCD5"],"","\uDBB9\uDD02",["closed_book"],26,12,31,0],
		"1f4d6":[["\uD83D\uDCD6"],"\uE148","\uDBB9\uDD46",["book","open_book"],26,13,31,0],
		"1f4d7":[["\uD83D\uDCD7"],"","\uDBB9\uDCFF",["green_book"],26,14,31,0],
		"1f4d8":[["\uD83D\uDCD8"],"","\uDBB9\uDD00",["blue_book"],26,15,31,0],
		"1f4d9":[["\uD83D\uDCD9"],"","\uDBB9\uDD01",["orange_book"],26,16,31,0],
		"1f4da":[["\uD83D\uDCDA"],"","\uDBB9\uDD03",["books"],26,17,31,0],
		"1f4db":[["\uD83D\uDCDB"],"","\uDBB9\uDD04",["name_badge"],26,18,31,0],
		"1f4dc":[["\uD83D\uDCDC"],"","\uDBB9\uDCFD",["scroll"],26,19,31,0],
		"1f4dd":[["\uD83D\uDCDD"],"\uE301","\uDBB9\uDD27",["memo","pencil"],26,20,31,0],
		"1f4de":[["\uD83D\uDCDE"],"","\uDBB9\uDD24",["telephone_receiver"],26,21,31,0],
		"1f4df":[["\uD83D\uDCDF"],"","\uDBB9\uDD22",["pager"],26,22,31,0],
		"1f4e0":[["\uD83D\uDCE0"],"\uE00B","\uDBB9\uDD28",["fax"],26,23,31,0],
		"1f4e1":[["\uD83D\uDCE1"],"\uE14B","\uDBB9\uDD31",["satellite_antenna"],26,24,31,0],
		"1f4e2":[["\uD83D\uDCE2"],"\uE142","\uDBB9\uDD2F",["loudspeaker"],26,25,31,0],
		"1f4e3":[["\uD83D\uDCE3"],"\uE317","\uDBB9\uDD30",["mega"],26,26,31,0],
		"1f4e4":[["\uD83D\uDCE4"],"","\uDBB9\uDD33",["outbox_tray"],26,27,31,0],
		"1f4e5":[["\uD83D\uDCE5"],"","\uDBB9\uDD34",["inbox_tray"],26,28,31,0],
		"1f4e6":[["\uD83D\uDCE6"],"","\uDBB9\uDD35",["package"],26,29,31,0],
		"1f4e7":[["\uD83D\uDCE7"],"","\uDBBA\uDF92",["e-mail"],26,30,31,0],
		"1f4e8":[["\uD83D\uDCE8"],"","\uDBB9\uDD2A",["incoming_envelope"],26,31,31,0],
		"1f4e9":[["\uD83D\uDCE9"],"\uE103","\uDBB9\uDD2B",["envelope_with_arrow"],26,32,31,0],
		"1f4ea":[["\uD83D\uDCEA"],"","\uDBB9\uDD2C",["mailbox_closed"],26,33,31,0],
		"1f4eb":[["\uD83D\uDCEB"],"\uE101","\uDBB9\uDD2D",["mailbox"],26,34,31,0],
		"1f4ec":[["\uD83D\uDCEC"],"","",["mailbox_with_mail"],26,35,31,0],
		"1f4ed":[["\uD83D\uDCED"],"","",["mailbox_with_no_mail"],26,36,31,0],
		"1f4ee":[["\uD83D\uDCEE"],"\uE102","\uDBB9\uDD2E",["postbox"],26,37,31,0],
		"1f4ef":[["\uD83D\uDCEF"],"","",["postal_horn"],26,38,31,0],
		"1f4f0":[["\uD83D\uDCF0"],"","\uDBBA\uDC22",["newspaper"],26,39,31,0],
		"1f4f1":[["\uD83D\uDCF1"],"\uE00A","\uDBB9\uDD25",["iphone"],26,40,31,0],
		"1f4f2":[["\uD83D\uDCF2"],"\uE104","\uDBB9\uDD26",["calling"],26,41,31,0],
		"1f4f3":[["\uD83D\uDCF3"],"\uE250","\uDBBA\uDC39",["vibration_mode"],26,42,31,0],
		"1f4f4":[["\uD83D\uDCF4"],"\uE251","\uDBBA\uDC3A",["mobile_phone_off"],26,43,31,0],
		"1f4f5":[["\uD83D\uDCF5"],"","",["no_mobile_phones"],26,44,31,0],
		"1f4f6":[["\uD83D\uDCF6"],"\uE20B","\uDBBA\uDC38",["signal_strength"],26,45,31,0],
		"1f4f7":[["\uD83D\uDCF7"],"\uE008","\uDBB9\uDCEF",["camera"],26,46,31,0],
		"1f4f8":[["\uD83D\uDCF8"],"","",["camera_with_flash"],26,47,15,0],
		"1f4f9":[["\uD83D\uDCF9"],"","\uDBB9\uDCF9",["video_camera"],26,48,31,0],
		"1f4fa":[["\uD83D\uDCFA"],"\uE12A","\uDBBA\uDC1C",["tv"],26,49,31,0],
		"1f4fb":[["\uD83D\uDCFB"],"\uE128","\uDBBA\uDC1F",["radio"],26,50,31,0],
		"1f4fc":[["\uD83D\uDCFC"],"\uE129","\uDBBA\uDC20",["vhs"],26,51,31,0],
		"1f4fd-fe0f":[["\uD83D\uDCFD\uFE0F","\uD83D\uDCFD"],"","",["film_projector"],27,0,15,0],
		"1f4ff":[["\uD83D\uDCFF"],"","",["prayer_beads"],27,1,15,0],
		"1f500":[["\uD83D\uDD00"],"","",["twisted_rightwards_arrows"],27,2,31,0],
		"1f501":[["\uD83D\uDD01"],"","",["repeat"],27,3,31,0],
		"1f502":[["\uD83D\uDD02"],"","",["repeat_one"],27,4,31,0],
		"1f503":[["\uD83D\uDD03"],"","\uDBBA\uDF91",["arrows_clockwise"],27,5,31,0],
		"1f504":[["\uD83D\uDD04"],"","",["arrows_counterclockwise"],27,6,31,0],
		"1f505":[["\uD83D\uDD05"],"","",["low_brightness"],27,7,31,0],
		"1f506":[["\uD83D\uDD06"],"","",["high_brightness"],27,8,31,0],
		"1f507":[["\uD83D\uDD07"],"","",["mute"],27,9,31,0],
		"1f508":[["\uD83D\uDD08"],"","",["speaker"],27,10,31,0],
		"1f509":[["\uD83D\uDD09"],"","",["sound"],27,11,31,0],
		"1f50a":[["\uD83D\uDD0A"],"\uE141","\uDBBA\uDC21",["loud_sound"],27,12,31,0],
		"1f50b":[["\uD83D\uDD0B"],"","\uDBB9\uDCFC",["battery"],27,13,31,0],
		"1f50c":[["\uD83D\uDD0C"],"","\uDBB9\uDCFE",["electric_plug"],27,14,31,0],
		"1f50d":[["\uD83D\uDD0D"],"\uE114","\uDBBA\uDF85",["mag"],27,15,31,0],
		"1f50e":[["\uD83D\uDD0E"],"","\uDBBA\uDF8D",["mag_right"],27,16,31,0],
		"1f50f":[["\uD83D\uDD0F"],"","\uDBBA\uDF90",["lock_with_ink_pen"],27,17,31,0],
		"1f510":[["\uD83D\uDD10"],"","\uDBBA\uDF8A",["closed_lock_with_key"],27,18,31,0],
		"1f511":[["\uD83D\uDD11"],"\uE03F","\uDBBA\uDF82",["key"],27,19,31,0],
		"1f512":[["\uD83D\uDD12"],"\uE144","\uDBBA\uDF86",["lock"],27,20,31,0],
		"1f513":[["\uD83D\uDD13"],"\uE145","\uDBBA\uDF87",["unlock"],27,21,31,0],
		"1f514":[["\uD83D\uDD14"],"\uE325","\uDBB9\uDCF2",["bell"],27,22,31,0],
		"1f515":[["\uD83D\uDD15"],"","",["no_bell"],27,23,31,0],
		"1f516":[["\uD83D\uDD16"],"","\uDBBA\uDF8F",["bookmark"],27,24,31,0],
		"1f517":[["\uD83D\uDD17"],"","\uDBBA\uDF4B",["link"],27,25,31,0],
		"1f518":[["\uD83D\uDD18"],"","\uDBBA\uDF8C",["radio_button"],27,26,31,0],
		"1f519":[["\uD83D\uDD19"],"","\uDBBA\uDF8E",["back"],27,27,31,0],
		"1f51a":[["\uD83D\uDD1A"],"","\uDBB8\uDC1A",["end"],27,28,31,0],
		"1f51b":[["\uD83D\uDD1B"],"","\uDBB8\uDC19",["on"],27,29,31,0],
		"1f51c":[["\uD83D\uDD1C"],"","\uDBB8\uDC18",["soon"],27,30,31,0],
		"1f51d":[["\uD83D\uDD1D"],"\uE24C","\uDBBA\uDF42",["top"],27,31,31,0],
		"1f51e":[["\uD83D\uDD1E"],"\uE207","\uDBBA\uDF25",["underage"],27,32,31,0],
		"1f51f":[["\uD83D\uDD1F"],"","\uDBBA\uDC3B",["keycap_ten"],27,33,31,0],
		"1f520":[["\uD83D\uDD20"],"","\uDBBA\uDF7C",["capital_abcd"],27,34,31,0],
		"1f521":[["\uD83D\uDD21"],"","\uDBBA\uDF7D",["abcd"],27,35,31,0],
		"1f522":[["\uD83D\uDD22"],"","\uDBBA\uDF7E",["1234"],27,36,31,0],
		"1f523":[["\uD83D\uDD23"],"","\uDBBA\uDF7F",["symbols"],27,37,31,0],
		"1f524":[["\uD83D\uDD24"],"","\uDBBA\uDF80",["abc"],27,38,31,0],
		"1f525":[["\uD83D\uDD25"],"\uE11D","\uDBB9\uDCF6",["fire"],27,39,31,0],
		"1f526":[["\uD83D\uDD26"],"","\uDBB9\uDCFB",["flashlight"],27,40,31,0],
		"1f527":[["\uD83D\uDD27"],"","\uDBB9\uDCC9",["wrench"],27,41,31,0],
		"1f528":[["\uD83D\uDD28"],"\uE116","\uDBB9\uDCCA",["hammer"],27,42,31,0],
		"1f529":[["\uD83D\uDD29"],"","\uDBB9\uDCCB",["nut_and_bolt"],27,43,31,0],
		"1f52a":[["\uD83D\uDD2A"],"","\uDBB9\uDCFA",["hocho","knife"],27,44,31,0],
		"1f52b":[["\uD83D\uDD2B"],"\uE113","\uDBB9\uDCF5",["gun"],27,45,31,0],
		"1f52c":[["\uD83D\uDD2C"],"","",["microscope"],27,46,31,0],
		"1f52d":[["\uD83D\uDD2D"],"","",["telescope"],27,47,31,0],
		"1f52e":[["\uD83D\uDD2E"],"","\uDBB9\uDCF7",["crystal_ball"],27,48,31,0],
		"1f52f":[["\uD83D\uDD2F"],"\uE23E","\uDBB9\uDCF8",["six_pointed_star"],27,49,31,0],
		"1f530":[["\uD83D\uDD30"],"\uE209","\uDBB8\uDC44",["beginner"],27,50,31,0],
		"1f531":[["\uD83D\uDD31"],"\uE031","\uDBB9\uDCD2",["trident"],27,51,31,0],
		"1f532":[["\uD83D\uDD32"],"\uE21A","\uDBBA\uDF64",["black_square_button"],28,0,31,0],
		"1f533":[["\uD83D\uDD33"],"\uE21B","\uDBBA\uDF67",["white_square_button"],28,1,31,0],
		"1f534":[["\uD83D\uDD34"],"\uE219","\uDBBA\uDF63",["red_circle"],28,2,31,0],
		"1f535":[["\uD83D\uDD35"],"","\uDBBA\uDF64",["large_blue_circle"],28,3,31,0],
		"1f536":[["\uD83D\uDD36"],"","\uDBBA\uDF73",["large_orange_diamond"],28,4,31,0],
		"1f537":[["\uD83D\uDD37"],"","\uDBBA\uDF74",["large_blue_diamond"],28,5,31,0],
		"1f538":[["\uD83D\uDD38"],"","\uDBBA\uDF75",["small_orange_diamond"],28,6,31,0],
		"1f539":[["\uD83D\uDD39"],"","\uDBBA\uDF76",["small_blue_diamond"],28,7,31,0],
		"1f53a":[["\uD83D\uDD3A"],"","\uDBBA\uDF78",["small_red_triangle"],28,8,31,0],
		"1f53b":[["\uD83D\uDD3B"],"","\uDBBA\uDF79",["small_red_triangle_down"],28,9,31,0],
		"1f53c":[["\uD83D\uDD3C"],"","\uDBBA\uDF01",["arrow_up_small"],28,10,31,0],
		"1f53d":[["\uD83D\uDD3D"],"","\uDBBA\uDF00",["arrow_down_small"],28,11,31,0],
		"1f549-fe0f":[["\uD83D\uDD49\uFE0F","\uD83D\uDD49"],"","",["om_symbol"],28,12,15,0],
		"1f54a-fe0f":[["\uD83D\uDD4A\uFE0F","\uD83D\uDD4A"],"","",["dove_of_peace"],28,13,15,0],
		"1f54b":[["\uD83D\uDD4B"],"","",["kaaba"],28,14,15,0],
		"1f54c":[["\uD83D\uDD4C"],"","",["mosque"],28,15,15,0],
		"1f54d":[["\uD83D\uDD4D"],"","",["synagogue"],28,16,15,0],
		"1f54e":[["\uD83D\uDD4E"],"","",["menorah_with_nine_branches"],28,17,15,0],
		"1f550":[["\uD83D\uDD50"],"\uE024","\uDBB8\uDC1E",["clock1"],28,18,31,0],
		"1f551":[["\uD83D\uDD51"],"\uE025","\uDBB8\uDC1F",["clock2"],28,19,31,0],
		"1f552":[["\uD83D\uDD52"],"\uE026","\uDBB8\uDC20",["clock3"],28,20,31,0],
		"1f553":[["\uD83D\uDD53"],"\uE027","\uDBB8\uDC21",["clock4"],28,21,31,0],
		"1f554":[["\uD83D\uDD54"],"\uE028","\uDBB8\uDC22",["clock5"],28,22,31,0],
		"1f555":[["\uD83D\uDD55"],"\uE029","\uDBB8\uDC23",["clock6"],28,23,31,0],
		"1f556":[["\uD83D\uDD56"],"\uE02A","\uDBB8\uDC24",["clock7"],28,24,31,0],
		"1f557":[["\uD83D\uDD57"],"\uE02B","\uDBB8\uDC25",["clock8"],28,25,31,0],
		"1f558":[["\uD83D\uDD58"],"\uE02C","\uDBB8\uDC26",["clock9"],28,26,31,0],
		"1f559":[["\uD83D\uDD59"],"\uE02D","\uDBB8\uDC27",["clock10"],28,27,31,0],
		"1f55a":[["\uD83D\uDD5A"],"\uE02E","\uDBB8\uDC28",["clock11"],28,28,31,0],
		"1f55b":[["\uD83D\uDD5B"],"\uE02F","\uDBB8\uDC29",["clock12"],28,29,31,0],
		"1f55c":[["\uD83D\uDD5C"],"","",["clock130"],28,30,31,0],
		"1f55d":[["\uD83D\uDD5D"],"","",["clock230"],28,31,31,0],
		"1f55e":[["\uD83D\uDD5E"],"","",["clock330"],28,32,31,0],
		"1f55f":[["\uD83D\uDD5F"],"","",["clock430"],28,33,31,0],
		"1f560":[["\uD83D\uDD60"],"","",["clock530"],28,34,31,0],
		"1f561":[["\uD83D\uDD61"],"","",["clock630"],28,35,31,0],
		"1f562":[["\uD83D\uDD62"],"","",["clock730"],28,36,31,0],
		"1f563":[["\uD83D\uDD63"],"","",["clock830"],28,37,31,0],
		"1f564":[["\uD83D\uDD64"],"","",["clock930"],28,38,31,0],
		"1f565":[["\uD83D\uDD65"],"","",["clock1030"],28,39,31,0],
		"1f566":[["\uD83D\uDD66"],"","",["clock1130"],28,40,31,0],
		"1f567":[["\uD83D\uDD67"],"","",["clock1230"],28,41,31,0],
		"1f56f-fe0f":[["\uD83D\uDD6F\uFE0F","\uD83D\uDD6F"],"","",["candle"],28,42,15,0],
		"1f570-fe0f":[["\uD83D\uDD70\uFE0F","\uD83D\uDD70"],"","",["mantelpiece_clock"],28,43,15,0],
		"1f573-fe0f":[["\uD83D\uDD73\uFE0F","\uD83D\uDD73"],"","",["hole"],28,44,15,0],
		"1f574-fe0f":[["\uD83D\uDD74\uFE0F","\uD83D\uDD74"],"","",["man_in_business_suit_levitating"],28,45,15,0],
		"1f575-fe0f-200d-2640-fe0f":[["\uD83D\uDD75\uFE0F\u200D\u2640\uFE0F"],"","",["female-detective"],28,51,7,0],
		"1f575-fe0f-200d-2642-fe0f":[["\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F","\uD83D\uDD75\uFE0F","\uD83D\uDD75"],"","",["male-detective","sleuth_or_spy"],29,5,7,0],
		"1f576-fe0f":[["\uD83D\uDD76\uFE0F","\uD83D\uDD76"],"","",["dark_sunglasses"],29,17,15,0],
		"1f577-fe0f":[["\uD83D\uDD77\uFE0F","\uD83D\uDD77"],"","",["spider"],29,18,15,0],
		"1f578-fe0f":[["\uD83D\uDD78\uFE0F","\uD83D\uDD78"],"","",["spider_web"],29,19,15,0],
		"1f579-fe0f":[["\uD83D\uDD79\uFE0F","\uD83D\uDD79"],"","",["joystick"],29,20,15,0],
		"1f57a":[["\uD83D\uDD7A"],"","",["man_dancing"],29,21,15,0],
		"1f587-fe0f":[["\uD83D\uDD87\uFE0F","\uD83D\uDD87"],"","",["linked_paperclips"],29,27,15,0],
		"1f58a-fe0f":[["\uD83D\uDD8A\uFE0F","\uD83D\uDD8A"],"","",["lower_left_ballpoint_pen"],29,28,15,0],
		"1f58b-fe0f":[["\uD83D\uDD8B\uFE0F","\uD83D\uDD8B"],"","",["lower_left_fountain_pen"],29,29,15,0],
		"1f58c-fe0f":[["\uD83D\uDD8C\uFE0F","\uD83D\uDD8C"],"","",["lower_left_paintbrush"],29,30,15,0],
		"1f58d-fe0f":[["\uD83D\uDD8D\uFE0F","\uD83D\uDD8D"],"","",["lower_left_crayon"],29,31,15,0],
		"1f590-fe0f":[["\uD83D\uDD90\uFE0F","\uD83D\uDD90"],"","",["raised_hand_with_fingers_splayed"],29,32,15,0],
		"1f595":[["\uD83D\uDD95"],"","",["middle_finger","reversed_hand_with_middle_finger_extended"],29,38,15,0],
		"1f596":[["\uD83D\uDD96"],"","",["spock-hand"],29,44,15,0],
		"1f5a4":[["\uD83D\uDDA4"],"","",["black_heart"],29,50,15,0],
		"1f5a5-fe0f":[["\uD83D\uDDA5\uFE0F","\uD83D\uDDA5"],"","",["desktop_computer"],29,51,15,0],
		"1f5a8-fe0f":[["\uD83D\uDDA8\uFE0F","\uD83D\uDDA8"],"","",["printer"],30,0,15,0],
		"1f5b1-fe0f":[["\uD83D\uDDB1\uFE0F","\uD83D\uDDB1"],"","",["three_button_mouse"],30,1,15,0],
		"1f5b2-fe0f":[["\uD83D\uDDB2\uFE0F","\uD83D\uDDB2"],"","",["trackball"],30,2,15,0],
		"1f5bc-fe0f":[["\uD83D\uDDBC\uFE0F","\uD83D\uDDBC"],"","",["frame_with_picture"],30,3,15,0],
		"1f5c2-fe0f":[["\uD83D\uDDC2\uFE0F","\uD83D\uDDC2"],"","",["card_index_dividers"],30,4,15,0],
		"1f5c3-fe0f":[["\uD83D\uDDC3\uFE0F","\uD83D\uDDC3"],"","",["card_file_box"],30,5,15,0],
		"1f5c4-fe0f":[["\uD83D\uDDC4\uFE0F","\uD83D\uDDC4"],"","",["file_cabinet"],30,6,15,0],
		"1f5d1-fe0f":[["\uD83D\uDDD1\uFE0F","\uD83D\uDDD1"],"","",["wastebasket"],30,7,15,0],
		"1f5d2-fe0f":[["\uD83D\uDDD2\uFE0F","\uD83D\uDDD2"],"","",["spiral_note_pad"],30,8,15,0],
		"1f5d3-fe0f":[["\uD83D\uDDD3\uFE0F","\uD83D\uDDD3"],"","",["spiral_calendar_pad"],30,9,15,0],
		"1f5dc-fe0f":[["\uD83D\uDDDC\uFE0F","\uD83D\uDDDC"],"","",["compression"],30,10,15,0],
		"1f5dd-fe0f":[["\uD83D\uDDDD\uFE0F","\uD83D\uDDDD"],"","",["old_key"],30,11,15,0],
		"1f5de-fe0f":[["\uD83D\uDDDE\uFE0F","\uD83D\uDDDE"],"","",["rolled_up_newspaper"],30,12,15,0],
		"1f5e1-fe0f":[["\uD83D\uDDE1\uFE0F","\uD83D\uDDE1"],"","",["dagger_knife"],30,13,15,0],
		"1f5e3-fe0f":[["\uD83D\uDDE3\uFE0F","\uD83D\uDDE3"],"","",["speaking_head_in_silhouette"],30,14,15,0],
		"1f5e8-fe0f":[["\uD83D\uDDE8\uFE0F","\uD83D\uDDE8"],"","",["left_speech_bubble"],30,15,15,0],
		"1f5ef-fe0f":[["\uD83D\uDDEF\uFE0F","\uD83D\uDDEF"],"","",["right_anger_bubble"],30,16,15,0],
		"1f5f3-fe0f":[["\uD83D\uDDF3\uFE0F","\uD83D\uDDF3"],"","",["ballot_box_with_ballot"],30,17,15,0],
		"1f5fa-fe0f":[["\uD83D\uDDFA\uFE0F","\uD83D\uDDFA"],"","",["world_map"],30,18,15,0],
		"1f5fb":[["\uD83D\uDDFB"],"\uE03B","\uDBB9\uDCC3",["mount_fuji"],30,19,31,0],
		"1f5fc":[["\uD83D\uDDFC"],"\uE509","\uDBB9\uDCC4",["tokyo_tower"],30,20,31,0],
		"1f5fd":[["\uD83D\uDDFD"],"\uE51D","\uDBB9\uDCC6",["statue_of_liberty"],30,21,31,0],
		"1f5fe":[["\uD83D\uDDFE"],"","\uDBB9\uDCC7",["japan"],30,22,31,0],
		"1f5ff":[["\uD83D\uDDFF"],"","\uDBB9\uDCC8",["moyai"],30,23,31,0],
		"1f600":[["\uD83D\uDE00"],"","",["grinning"],30,24,31,0,":D"],
		"1f601":[["\uD83D\uDE01"],"\uE404","\uDBB8\uDF33",["grin"],30,25,31,0],
		"1f602":[["\uD83D\uDE02"],"\uE412","\uDBB8\uDF34",["joy"],30,26,31,0],
		"1f603":[["\uD83D\uDE03"],"\uE057","\uDBB8\uDF30",["smiley"],30,27,31,0,":)"],
		"1f604":[["\uD83D\uDE04"],"\uE415","\uDBB8\uDF38",["smile"],30,28,31,0,":)"],
		"1f605":[["\uD83D\uDE05"],"","\uDBB8\uDF31",["sweat_smile"],30,29,31,0],
		"1f606":[["\uD83D\uDE06"],"","\uDBB8\uDF32",["laughing","satisfied"],30,30,31,0],
		"1f607":[["\uD83D\uDE07"],"","",["innocent"],30,31,31,0],
		"1f608":[["\uD83D\uDE08"],"","",["smiling_imp"],30,32,31,0],
		"1f609":[["\uD83D\uDE09"],"\uE405","\uDBB8\uDF47",["wink"],30,33,31,0,";)"],
		"1f60a":[["\uD83D\uDE0A"],"\uE056","\uDBB8\uDF35",["blush"],30,34,31,0,":)"],
		"1f60b":[["\uD83D\uDE0B"],"","\uDBB8\uDF2B",["yum"],30,35,31,0],
		"1f60c":[["\uD83D\uDE0C"],"\uE40A","\uDBB8\uDF3E",["relieved"],30,36,31,0],
		"1f60d":[["\uD83D\uDE0D"],"\uE106","\uDBB8\uDF27",["heart_eyes"],30,37,31,0],
		"1f60e":[["\uD83D\uDE0E"],"","",["sunglasses"],30,38,31,0],
		"1f60f":[["\uD83D\uDE0F"],"\uE402","\uDBB8\uDF43",["smirk"],30,39,31,0],
		"1f610":[["\uD83D\uDE10"],"","",["neutral_face"],30,40,31,0],
		"1f611":[["\uD83D\uDE11"],"","",["expressionless"],30,41,31,0],
		"1f612":[["\uD83D\uDE12"],"\uE40E","\uDBB8\uDF26",["unamused"],30,42,31,0,":("],
		"1f613":[["\uD83D\uDE13"],"\uE108","\uDBB8\uDF44",["sweat"],30,43,31,0],
		"1f614":[["\uD83D\uDE14"],"\uE403","\uDBB8\uDF40",["pensive"],30,44,31,0],
		"1f615":[["\uD83D\uDE15"],"","",["confused"],30,45,31,0],
		"1f616":[["\uD83D\uDE16"],"\uE407","\uDBB8\uDF3F",["confounded"],30,46,31,0],
		"1f617":[["\uD83D\uDE17"],"","",["kissing"],30,47,31,0],
		"1f618":[["\uD83D\uDE18"],"\uE418","\uDBB8\uDF2C",["kissing_heart"],30,48,31,0],
		"1f619":[["\uD83D\uDE19"],"","",["kissing_smiling_eyes"],30,49,31,0],
		"1f61a":[["\uD83D\uDE1A"],"\uE417","\uDBB8\uDF2D",["kissing_closed_eyes"],30,50,31,0],
		"1f61b":[["\uD83D\uDE1B"],"","",["stuck_out_tongue"],30,51,31,0,":p"],
		"1f61c":[["\uD83D\uDE1C"],"\uE105","\uDBB8\uDF29",["stuck_out_tongue_winking_eye"],31,0,31,0,";p"],
		"1f61d":[["\uD83D\uDE1D"],"\uE409","\uDBB8\uDF2A",["stuck_out_tongue_closed_eyes"],31,1,31,0],
		"1f61e":[["\uD83D\uDE1E"],"\uE058","\uDBB8\uDF23",["disappointed"],31,2,31,0,":("],
		"1f61f":[["\uD83D\uDE1F"],"","",["worried"],31,3,31,0],
		"1f620":[["\uD83D\uDE20"],"\uE059","\uDBB8\uDF20",["angry"],31,4,31,0],
		"1f621":[["\uD83D\uDE21"],"\uE416","\uDBB8\uDF3D",["rage"],31,5,31,0],
		"1f622":[["\uD83D\uDE22"],"\uE413","\uDBB8\uDF39",["cry"],31,6,31,0,":'("],
		"1f623":[["\uD83D\uDE23"],"\uE406","\uDBB8\uDF3C",["persevere"],31,7,31,0],
		"1f624":[["\uD83D\uDE24"],"","\uDBB8\uDF28",["triumph"],31,8,31,0],
		"1f625":[["\uD83D\uDE25"],"\uE401","\uDBB8\uDF45",["disappointed_relieved"],31,9,31,0],
		"1f626":[["\uD83D\uDE26"],"","",["frowning"],31,10,31,0],
		"1f627":[["\uD83D\uDE27"],"","",["anguished"],31,11,31,0],
		"1f628":[["\uD83D\uDE28"],"\uE40B","\uDBB8\uDF3B",["fearful"],31,12,31,0],
		"1f629":[["\uD83D\uDE29"],"","\uDBB8\uDF21",["weary"],31,13,31,0],
		"1f62a":[["\uD83D\uDE2A"],"\uE408","\uDBB8\uDF42",["sleepy"],31,14,31,0],
		"1f62b":[["\uD83D\uDE2B"],"","\uDBB8\uDF46",["tired_face"],31,15,31,0],
		"1f62c":[["\uD83D\uDE2C"],"","",["grimacing"],31,16,31,0],
		"1f62d":[["\uD83D\uDE2D"],"\uE411","\uDBB8\uDF3A",["sob"],31,17,31,0,":'("],
		"1f62e":[["\uD83D\uDE2E"],"","",["open_mouth"],31,18,31,0],
		"1f62f":[["\uD83D\uDE2F"],"","",["hushed"],31,19,31,0],
		"1f630":[["\uD83D\uDE30"],"\uE40F","\uDBB8\uDF25",["cold_sweat"],31,20,31,0],
		"1f631":[["\uD83D\uDE31"],"\uE107","\uDBB8\uDF41",["scream"],31,21,31,0],
		"1f632":[["\uD83D\uDE32"],"\uE410","\uDBB8\uDF22",["astonished"],31,22,31,0],
		"1f633":[["\uD83D\uDE33"],"\uE40D","\uDBB8\uDF2F",["flushed"],31,23,31,0],
		"1f634":[["\uD83D\uDE34"],"","",["sleeping"],31,24,31,0],
		"1f635":[["\uD83D\uDE35"],"","\uDBB8\uDF24",["dizzy_face"],31,25,31,0],
		"1f636":[["\uD83D\uDE36"],"","",["no_mouth"],31,26,31,0],
		"1f637":[["\uD83D\uDE37"],"\uE40C","\uDBB8\uDF2E",["mask"],31,27,31,0],
		"1f638":[["\uD83D\uDE38"],"","\uDBB8\uDF49",["smile_cat"],31,28,31,0],
		"1f639":[["\uD83D\uDE39"],"","\uDBB8\uDF4A",["joy_cat"],31,29,31,0],
		"1f63a":[["\uD83D\uDE3A"],"","\uDBB8\uDF48",["smiley_cat"],31,30,31,0],
		"1f63b":[["\uD83D\uDE3B"],"","\uDBB8\uDF4C",["heart_eyes_cat"],31,31,31,0],
		"1f63c":[["\uD83D\uDE3C"],"","\uDBB8\uDF4F",["smirk_cat"],31,32,31,0],
		"1f63d":[["\uD83D\uDE3D"],"","\uDBB8\uDF4B",["kissing_cat"],31,33,31,0],
		"1f63e":[["\uD83D\uDE3E"],"","\uDBB8\uDF4E",["pouting_cat"],31,34,31,0],
		"1f63f":[["\uD83D\uDE3F"],"","\uDBB8\uDF4D",["crying_cat_face"],31,35,31,0],
		"1f640":[["\uD83D\uDE40"],"","\uDBB8\uDF50",["scream_cat"],31,36,31,0],
		"1f641":[["\uD83D\uDE41"],"","",["slightly_frowning_face"],31,37,15,0],
		"1f642":[["\uD83D\uDE42"],"","",["slightly_smiling_face"],31,38,31,0],
		"1f643":[["\uD83D\uDE43"],"","",["upside_down_face"],31,39,15,0],
		"1f644":[["\uD83D\uDE44"],"","",["face_with_rolling_eyes"],31,40,15,0],
		"1f645-200d-2640-fe0f":[["\uD83D\uDE45\u200D\u2640\uFE0F","\uD83D\uDE45\u200D\u2640","\uD83D\uDE45"],"","",["woman-gesturing-no","no_good"],31,41,15,0],
		"1f645-200d-2642-fe0f":[["\uD83D\uDE45\u200D\u2642\uFE0F","\uD83D\uDE45\u200D\u2642"],"","",["man-gesturing-no"],31,47,15,0],
		"1f646-200d-2640-fe0f":[["\uD83D\uDE46\u200D\u2640\uFE0F","\uD83D\uDE46\u200D\u2640","\uD83D\uDE46"],"","",["woman-gesturing-ok","ok_woman"],32,7,15,0],
		"1f646-200d-2642-fe0f":[["\uD83D\uDE46\u200D\u2642\uFE0F","\uD83D\uDE46\u200D\u2642"],"","",["man-gesturing-ok"],32,13,15,0],
		"1f647-200d-2640-fe0f":[["\uD83D\uDE47\u200D\u2640\uFE0F","\uD83D\uDE47\u200D\u2640"],"","",["woman-bowing"],32,25,15,0],
		"1f647-200d-2642-fe0f":[["\uD83D\uDE47\u200D\u2642\uFE0F","\uD83D\uDE47\u200D\u2642","\uD83D\uDE47"],"","",["man-bowing","bow"],32,31,15,0],
		"1f648":[["\uD83D\uDE48"],"","\uDBB8\uDF54",["see_no_evil"],32,43,31,0],
		"1f649":[["\uD83D\uDE49"],"","\uDBB8\uDF56",["hear_no_evil"],32,44,31,0],
		"1f64a":[["\uD83D\uDE4A"],"","\uDBB8\uDF55",["speak_no_evil"],32,45,31,0],
		"1f64b-200d-2640-fe0f":[["\uD83D\uDE4B\u200D\u2640\uFE0F","\uD83D\uDE4B\u200D\u2640","\uD83D\uDE4B"],"","",["woman-raising-hand","raising_hand"],32,46,15,0],
		"1f64b-200d-2642-fe0f":[["\uD83D\uDE4B\u200D\u2642\uFE0F","\uD83D\uDE4B\u200D\u2642"],"","",["man-raising-hand"],33,0,15,0],
		"1f64c":[["\uD83D\uDE4C"],"\uE427","\uDBB8\uDF58",["raised_hands"],33,12,31,0],
		"1f64d-200d-2640-fe0f":[["\uD83D\uDE4D\u200D\u2640\uFE0F","\uD83D\uDE4D\u200D\u2640","\uD83D\uDE4D"],"","",["woman-frowning","person_frowning"],33,18,15,0],
		"1f64d-200d-2642-fe0f":[["\uD83D\uDE4D\u200D\u2642\uFE0F","\uD83D\uDE4D\u200D\u2642"],"","",["man-frowning"],33,24,15,0],
		"1f64e-200d-2640-fe0f":[["\uD83D\uDE4E\u200D\u2640\uFE0F","\uD83D\uDE4E\u200D\u2640","\uD83D\uDE4E"],"","",["woman-pouting","person_with_pouting_face"],33,36,15,0],
		"1f64e-200d-2642-fe0f":[["\uD83D\uDE4E\u200D\u2642\uFE0F","\uD83D\uDE4E\u200D\u2642"],"","",["man-pouting"],33,42,15,0],
		"1f64f":[["\uD83D\uDE4F"],"\uE41D","\uDBB8\uDF5B",["pray"],34,2,31,0],
		"1f680":[["\uD83D\uDE80"],"\uE10D","\uDBB9\uDFED",["rocket"],34,8,31,0],
		"1f681":[["\uD83D\uDE81"],"","",["helicopter"],34,9,31,0],
		"1f682":[["\uD83D\uDE82"],"","",["steam_locomotive"],34,10,31,0],
		"1f683":[["\uD83D\uDE83"],"\uE01E","\uDBB9\uDFDF",["railway_car"],34,11,31,0],
		"1f684":[["\uD83D\uDE84"],"\uE435","\uDBB9\uDFE2",["bullettrain_side"],34,12,31,0],
		"1f685":[["\uD83D\uDE85"],"\uE01F","\uDBB9\uDFE3",["bullettrain_front"],34,13,31,0],
		"1f686":[["\uD83D\uDE86"],"","",["train2"],34,14,31,0],
		"1f687":[["\uD83D\uDE87"],"\uE434","\uDBB9\uDFE0",["metro"],34,15,31,0],
		"1f688":[["\uD83D\uDE88"],"","",["light_rail"],34,16,31,0],
		"1f689":[["\uD83D\uDE89"],"\uE039","\uDBB9\uDFEC",["station"],34,17,31,0],
		"1f68a":[["\uD83D\uDE8A"],"","",["tram"],34,18,31,0],
		"1f68b":[["\uD83D\uDE8B"],"","",["train"],34,19,31,0],
		"1f68c":[["\uD83D\uDE8C"],"\uE159","\uDBB9\uDFE6",["bus"],34,20,31,0],
		"1f68d":[["\uD83D\uDE8D"],"","",["oncoming_bus"],34,21,31,0],
		"1f68e":[["\uD83D\uDE8E"],"","",["trolleybus"],34,22,31,0],
		"1f68f":[["\uD83D\uDE8F"],"\uE150","\uDBB9\uDFE7",["busstop"],34,23,31,0],
		"1f690":[["\uD83D\uDE90"],"","",["minibus"],34,24,31,0],
		"1f691":[["\uD83D\uDE91"],"\uE431","\uDBB9\uDFF3",["ambulance"],34,25,31,0],
		"1f692":[["\uD83D\uDE92"],"\uE430","\uDBB9\uDFF2",["fire_engine"],34,26,31,0],
		"1f693":[["\uD83D\uDE93"],"\uE432","\uDBB9\uDFF4",["police_car"],34,27,31,0],
		"1f694":[["\uD83D\uDE94"],"","",["oncoming_police_car"],34,28,31,0],
		"1f695":[["\uD83D\uDE95"],"\uE15A","\uDBB9\uDFEF",["taxi"],34,29,31,0],
		"1f696":[["\uD83D\uDE96"],"","",["oncoming_taxi"],34,30,31,0],
		"1f697":[["\uD83D\uDE97"],"\uE01B","\uDBB9\uDFE4",["car","red_car"],34,31,31,0],
		"1f698":[["\uD83D\uDE98"],"","",["oncoming_automobile"],34,32,31,0],
		"1f699":[["\uD83D\uDE99"],"\uE42E","\uDBB9\uDFE5",["blue_car"],34,33,31,0],
		"1f69a":[["\uD83D\uDE9A"],"\uE42F","\uDBB9\uDFF1",["truck"],34,34,31,0],
		"1f69b":[["\uD83D\uDE9B"],"","",["articulated_lorry"],34,35,31,0],
		"1f69c":[["\uD83D\uDE9C"],"","",["tractor"],34,36,31,0],
		"1f69d":[["\uD83D\uDE9D"],"","",["monorail"],34,37,31,0],
		"1f69e":[["\uD83D\uDE9E"],"","",["mountain_railway"],34,38,31,0],
		"1f69f":[["\uD83D\uDE9F"],"","",["suspension_railway"],34,39,31,0],
		"1f6a0":[["\uD83D\uDEA0"],"","",["mountain_cableway"],34,40,31,0],
		"1f6a1":[["\uD83D\uDEA1"],"","",["aerial_tramway"],34,41,31,0],
		"1f6a2":[["\uD83D\uDEA2"],"\uE202","\uDBB9\uDFE8",["ship"],34,42,31,0],
		"1f6a3-200d-2640-fe0f":[["\uD83D\uDEA3\u200D\u2640\uFE0F","\uD83D\uDEA3\u200D\u2640"],"","",["woman-rowing-boat"],34,43,15,0],
		"1f6a3-200d-2642-fe0f":[["\uD83D\uDEA3\u200D\u2642\uFE0F","\uD83D\uDEA3\u200D\u2642","\uD83D\uDEA3"],"","",["man-rowing-boat","rowboat"],34,49,15,0],
		"1f6a4":[["\uD83D\uDEA4"],"\uE135","\uDBB9\uDFEE",["speedboat"],35,9,31,0],
		"1f6a5":[["\uD83D\uDEA5"],"\uE14E","\uDBB9\uDFF7",["traffic_light"],35,10,31,0],
		"1f6a6":[["\uD83D\uDEA6"],"","",["vertical_traffic_light"],35,11,31,0],
		"1f6a7":[["\uD83D\uDEA7"],"\uE137","\uDBB9\uDFF8",["construction"],35,12,31,0],
		"1f6a8":[["\uD83D\uDEA8"],"","\uDBB9\uDFF9",["rotating_light"],35,13,31,0],
		"1f6a9":[["\uD83D\uDEA9"],"","\uDBBA\uDF22",["triangular_flag_on_post"],35,14,31,0],
		"1f6aa":[["\uD83D\uDEAA"],"","\uDBB9\uDCF3",["door"],35,15,31,0],
		"1f6ab":[["\uD83D\uDEAB"],"","\uDBBA\uDF48",["no_entry_sign"],35,16,31,0],
		"1f6ac":[["\uD83D\uDEAC"],"\uE30E","\uDBBA\uDF1E",["smoking"],35,17,31,0],
		"1f6ad":[["\uD83D\uDEAD"],"\uE208","\uDBBA\uDF1F",["no_smoking"],35,18,31,0],
		"1f6ae":[["\uD83D\uDEAE"],"","",["put_litter_in_its_place"],35,19,31,0],
		"1f6af":[["\uD83D\uDEAF"],"","",["do_not_litter"],35,20,31,0],
		"1f6b0":[["\uD83D\uDEB0"],"","",["potable_water"],35,21,31,0],
		"1f6b1":[["\uD83D\uDEB1"],"","",["non-potable_water"],35,22,31,0],
		"1f6b2":[["\uD83D\uDEB2"],"\uE136","\uDBB9\uDFEB",["bike"],35,23,31,0],
		"1f6b3":[["\uD83D\uDEB3"],"","",["no_bicycles"],35,24,31,0],
		"1f6b4-200d-2640-fe0f":[["\uD83D\uDEB4\u200D\u2640\uFE0F","\uD83D\uDEB4\u200D\u2640"],"","",["woman-biking"],35,25,15,0],
		"1f6b4-200d-2642-fe0f":[["\uD83D\uDEB4\u200D\u2642\uFE0F","\uD83D\uDEB4\u200D\u2642","\uD83D\uDEB4"],"","",["man-biking","bicyclist"],35,31,15,0],
		"1f6b5-200d-2640-fe0f":[["\uD83D\uDEB5\u200D\u2640\uFE0F","\uD83D\uDEB5\u200D\u2640"],"","",["woman-mountain-biking"],35,43,15,0],
		"1f6b5-200d-2642-fe0f":[["\uD83D\uDEB5\u200D\u2642\uFE0F","\uD83D\uDEB5\u200D\u2642","\uD83D\uDEB5"],"","",["man-mountain-biking","mountain_bicyclist"],35,49,15,0],
		"1f6b6-200d-2640-fe0f":[["\uD83D\uDEB6\u200D\u2640\uFE0F","\uD83D\uDEB6\u200D\u2640"],"","",["woman-walking"],36,9,15,0],
		"1f6b6-200d-2642-fe0f":[["\uD83D\uDEB6\u200D\u2642\uFE0F","\uD83D\uDEB6\u200D\u2642","\uD83D\uDEB6"],"","",["man-walking","walking"],36,15,15,0],
		"1f6b7":[["\uD83D\uDEB7"],"","",["no_pedestrians"],36,27,31,0],
		"1f6b8":[["\uD83D\uDEB8"],"","",["children_crossing"],36,28,31,0],
		"1f6b9":[["\uD83D\uDEB9"],"\uE138","\uDBBA\uDF33",["mens"],36,29,31,0],
		"1f6ba":[["\uD83D\uDEBA"],"\uE139","\uDBBA\uDF34",["womens"],36,30,31,0],
		"1f6bb":[["\uD83D\uDEBB"],"\uE151","\uDBB9\uDD06",["restroom"],36,31,31,0],
		"1f6bc":[["\uD83D\uDEBC"],"\uE13A","\uDBBA\uDF35",["baby_symbol"],36,32,31,0],
		"1f6bd":[["\uD83D\uDEBD"],"\uE140","\uDBB9\uDD07",["toilet"],36,33,31,0],
		"1f6be":[["\uD83D\uDEBE"],"\uE309","\uDBB9\uDD08",["wc"],36,34,31,0],
		"1f6bf":[["\uD83D\uDEBF"],"","",["shower"],36,35,31,0],
		"1f6c0":[["\uD83D\uDEC0"],"\uE13F","\uDBB9\uDD05",["bath"],36,36,31,0],
		"1f6c1":[["\uD83D\uDEC1"],"","",["bathtub"],36,42,31,0],
		"1f6c2":[["\uD83D\uDEC2"],"","",["passport_control"],36,43,31,0],
		"1f6c3":[["\uD83D\uDEC3"],"","",["customs"],36,44,31,0],
		"1f6c4":[["\uD83D\uDEC4"],"","",["baggage_claim"],36,45,31,0],
		"1f6c5":[["\uD83D\uDEC5"],"","",["left_luggage"],36,46,31,0],
		"1f6cb-fe0f":[["\uD83D\uDECB\uFE0F","\uD83D\uDECB"],"","",["couch_and_lamp"],36,47,15,0],
		"1f6cc":[["\uD83D\uDECC"],"","",["sleeping_accommodation"],36,48,15,0],
		"1f6cd-fe0f":[["\uD83D\uDECD\uFE0F","\uD83D\uDECD"],"","",["shopping_bags"],37,2,15,0],
		"1f6ce-fe0f":[["\uD83D\uDECE\uFE0F","\uD83D\uDECE"],"","",["bellhop_bell"],37,3,15,0],
		"1f6cf-fe0f":[["\uD83D\uDECF\uFE0F","\uD83D\uDECF"],"","",["bed"],37,4,15,0],
		"1f6d0":[["\uD83D\uDED0"],"","",["place_of_worship"],37,5,15,0],
		"1f6d1":[["\uD83D\uDED1"],"","",["octagonal_sign"],37,6,15,0],
		"1f6d2":[["\uD83D\uDED2"],"","",["shopping_trolley"],37,7,15,0],
		"1f6e0-fe0f":[["\uD83D\uDEE0\uFE0F","\uD83D\uDEE0"],"","",["hammer_and_wrench"],37,8,15,0],
		"1f6e1-fe0f":[["\uD83D\uDEE1\uFE0F","\uD83D\uDEE1"],"","",["shield"],37,9,15,0],
		"1f6e2-fe0f":[["\uD83D\uDEE2\uFE0F","\uD83D\uDEE2"],"","",["oil_drum"],37,10,15,0],
		"1f6e3-fe0f":[["\uD83D\uDEE3\uFE0F","\uD83D\uDEE3"],"","",["motorway"],37,11,15,0],
		"1f6e4-fe0f":[["\uD83D\uDEE4\uFE0F","\uD83D\uDEE4"],"","",["railway_track"],37,12,15,0],
		"1f6e5-fe0f":[["\uD83D\uDEE5\uFE0F","\uD83D\uDEE5"],"","",["motor_boat"],37,13,15,0],
		"1f6e9-fe0f":[["\uD83D\uDEE9\uFE0F","\uD83D\uDEE9"],"","",["small_airplane"],37,14,15,0],
		"1f6eb":[["\uD83D\uDEEB"],"","",["airplane_departure"],37,15,15,0],
		"1f6ec":[["\uD83D\uDEEC"],"","",["airplane_arriving"],37,16,15,0],
		"1f6f0-fe0f":[["\uD83D\uDEF0\uFE0F","\uD83D\uDEF0"],"","",["satellite"],37,17,15,0],
		"1f6f3-fe0f":[["\uD83D\uDEF3\uFE0F","\uD83D\uDEF3"],"","",["passenger_ship"],37,18,15,0],
		"1f6f4":[["\uD83D\uDEF4"],"","",["scooter"],37,19,15,0],
		"1f6f5":[["\uD83D\uDEF5"],"","",["motor_scooter"],37,20,15,0],
		"1f6f6":[["\uD83D\uDEF6"],"","",["canoe"],37,21,15,0],
		"1f6f7":[["\uD83D\uDEF7"],"","",["sled"],37,22,15,0],
		"1f6f8":[["\uD83D\uDEF8"],"","",["flying_saucer"],37,23,15,0],
		"1f910":[["\uD83E\uDD10"],"","",["zipper_mouth_face"],37,24,15,0],
		"1f911":[["\uD83E\uDD11"],"","",["money_mouth_face"],37,25,15,0],
		"1f912":[["\uD83E\uDD12"],"","",["face_with_thermometer"],37,26,15,0],
		"1f913":[["\uD83E\uDD13"],"","",["nerd_face"],37,27,15,0],
		"1f914":[["\uD83E\uDD14"],"","",["thinking_face"],37,28,15,0],
		"1f915":[["\uD83E\uDD15"],"","",["face_with_head_bandage"],37,29,15,0],
		"1f916":[["\uD83E\uDD16"],"","",["robot_face"],37,30,15,0],
		"1f917":[["\uD83E\uDD17"],"","",["hugging_face"],37,31,15,0],
		"1f918":[["\uD83E\uDD18"],"","",["the_horns","sign_of_the_horns"],37,32,15,0],
		"1f919":[["\uD83E\uDD19"],"","",["call_me_hand"],37,38,15,0],
		"1f91a":[["\uD83E\uDD1A"],"","",["raised_back_of_hand"],37,44,15,0],
		"1f91b":[["\uD83E\uDD1B"],"","",["left-facing_fist"],37,50,15,0],
		"1f91c":[["\uD83E\uDD1C"],"","",["right-facing_fist"],38,4,15,0],
		"1f91d":[["\uD83E\uDD1D"],"","",["handshake"],38,10,15,0],
		"1f91e":[["\uD83E\uDD1E"],"","",["crossed_fingers","hand_with_index_and_middle_fingers_crossed"],38,11,15,0],
		"1f91f":[["\uD83E\uDD1F"],"","",["i_love_you_hand_sign"],38,17,15,0],
		"1f920":[["\uD83E\uDD20"],"","",["face_with_cowboy_hat"],38,23,15,0],
		"1f921":[["\uD83E\uDD21"],"","",["clown_face"],38,24,15,0],
		"1f922":[["\uD83E\uDD22"],"","",["nauseated_face"],38,25,15,0],
		"1f923":[["\uD83E\uDD23"],"","",["rolling_on_the_floor_laughing"],38,26,15,0],
		"1f924":[["\uD83E\uDD24"],"","",["drooling_face"],38,27,15,0],
		"1f925":[["\uD83E\uDD25"],"","",["lying_face"],38,28,15,0],
		"1f926-200d-2640-fe0f":[["\uD83E\uDD26\u200D\u2640\uFE0F","\uD83E\uDD26\u200D\u2640"],"","",["woman-facepalming"],38,29,15,0],
		"1f926-200d-2642-fe0f":[["\uD83E\uDD26\u200D\u2642\uFE0F","\uD83E\uDD26\u200D\u2642"],"","",["man-facepalming"],38,35,15,0],
		"1f926":[["\uD83E\uDD26"],"","",["face_palm"],38,41,7,0],
		"1f927":[["\uD83E\uDD27"],"","",["sneezing_face"],38,47,15,0],
		"1f928":[["\uD83E\uDD28"],"","",["face_with_raised_eyebrow","face_with_one_eyebrow_raised"],38,48,15,0],
		"1f929":[["\uD83E\uDD29"],"","",["star-struck","grinning_face_with_star_eyes"],38,49,15,0],
		"1f92a":[["\uD83E\uDD2A"],"","",["zany_face","grinning_face_with_one_large_and_one_small_eye"],38,50,15,0],
		"1f92b":[["\uD83E\uDD2B"],"","",["shushing_face","face_with_finger_covering_closed_lips"],38,51,15,0],
		"1f92c":[["\uD83E\uDD2C"],"","",["face_with_symbols_on_mouth","serious_face_with_symbols_covering_mouth"],39,0,15,0],
		"1f92d":[["\uD83E\uDD2D"],"","",["face_with_hand_over_mouth","smiling_face_with_smiling_eyes_and_hand_covering_mouth"],39,1,15,0],
		"1f92e":[["\uD83E\uDD2E"],"","",["face_vomiting","face_with_open_mouth_vomiting"],39,2,15,0],
		"1f92f":[["\uD83E\uDD2F"],"","",["exploding_head","shocked_face_with_exploding_head"],39,3,15,0],
		"1f930":[["\uD83E\uDD30"],"","",["pregnant_woman"],39,4,15,0],
		"1f931":[["\uD83E\uDD31"],"","",["breast-feeding"],39,10,15,0],
		"1f932":[["\uD83E\uDD32"],"","",["palms_up_together"],39,16,15,0],
		"1f933":[["\uD83E\uDD33"],"","",["selfie"],39,22,15,0],
		"1f934":[["\uD83E\uDD34"],"","",["prince"],39,28,15,0],
		"1f935":[["\uD83E\uDD35"],"","",["man_in_tuxedo"],39,34,15,0],
		"1f936":[["\uD83E\uDD36"],"","",["mrs_claus","mother_christmas"],39,40,15,0],
		"1f937-200d-2640-fe0f":[["\uD83E\uDD37\u200D\u2640\uFE0F","\uD83E\uDD37\u200D\u2640"],"","",["woman-shrugging"],39,46,15,0],
		"1f937-200d-2642-fe0f":[["\uD83E\uDD37\u200D\u2642\uFE0F","\uD83E\uDD37\u200D\u2642"],"","",["man-shrugging"],40,0,15,0],
		"1f937":[["\uD83E\uDD37"],"","",["shrug"],40,6,7,0],
		"1f938-200d-2640-fe0f":[["\uD83E\uDD38\u200D\u2640\uFE0F","\uD83E\uDD38\u200D\u2640"],"","",["woman-cartwheeling"],40,12,15,0],
		"1f938-200d-2642-fe0f":[["\uD83E\uDD38\u200D\u2642\uFE0F","\uD83E\uDD38\u200D\u2642"],"","",["man-cartwheeling"],40,18,15,0],
		"1f938":[["\uD83E\uDD38"],"","",["person_doing_cartwheel"],40,24,7,0],
		"1f939-200d-2640-fe0f":[["\uD83E\uDD39\u200D\u2640\uFE0F","\uD83E\uDD39\u200D\u2640"],"","",["woman-juggling"],40,30,7,0],
		"1f939-200d-2642-fe0f":[["\uD83E\uDD39\u200D\u2642\uFE0F","\uD83E\uDD39\u200D\u2642"],"","",["man-juggling"],40,36,7,0],
		"1f939":[["\uD83E\uDD39"],"","",["juggling"],40,42,15,0],
		"1f93a":[["\uD83E\uDD3A"],"","",["fencer"],40,48,15,0],
		"1f93c-200d-2640-fe0f":[["\uD83E\uDD3C\u200D\u2640\uFE0F","\uD83E\uDD3C\u200D\u2640"],"","",["woman-wrestling"],40,49,15,0],
		"1f93c-200d-2642-fe0f":[["\uD83E\uDD3C\u200D\u2642\uFE0F","\uD83E\uDD3C\u200D\u2642"],"","",["man-wrestling"],40,50,15,0],
		"1f93c":[["\uD83E\uDD3C"],"","",["wrestlers"],40,51,7,0],
		"1f93d-200d-2640-fe0f":[["\uD83E\uDD3D\u200D\u2640\uFE0F","\uD83E\uDD3D\u200D\u2640"],"","",["woman-playing-water-polo"],41,0,15,0],
		"1f93d-200d-2642-fe0f":[["\uD83E\uDD3D\u200D\u2642\uFE0F","\uD83E\uDD3D\u200D\u2642"],"","",["man-playing-water-polo"],41,6,15,0],
		"1f93d":[["\uD83E\uDD3D"],"","",["water_polo"],41,12,7,0],
		"1f93e-200d-2640-fe0f":[["\uD83E\uDD3E\u200D\u2640\uFE0F","\uD83E\uDD3E\u200D\u2640"],"","",["woman-playing-handball"],41,18,15,0],
		"1f93e-200d-2642-fe0f":[["\uD83E\uDD3E\u200D\u2642\uFE0F","\uD83E\uDD3E\u200D\u2642"],"","",["man-playing-handball"],41,24,15,0],
		"1f93e":[["\uD83E\uDD3E"],"","",["handball"],41,30,7,0],
		"1f940":[["\uD83E\uDD40"],"","",["wilted_flower"],41,36,15,0],
		"1f941":[["\uD83E\uDD41"],"","",["drum_with_drumsticks"],41,37,15,0],
		"1f942":[["\uD83E\uDD42"],"","",["clinking_glasses"],41,38,15,0],
		"1f943":[["\uD83E\uDD43"],"","",["tumbler_glass"],41,39,15,0],
		"1f944":[["\uD83E\uDD44"],"","",["spoon"],41,40,15,0],
		"1f945":[["\uD83E\uDD45"],"","",["goal_net"],41,41,15,0],
		"1f947":[["\uD83E\uDD47"],"","",["first_place_medal"],41,42,15,0],
		"1f948":[["\uD83E\uDD48"],"","",["second_place_medal"],41,43,15,0],
		"1f949":[["\uD83E\uDD49"],"","",["third_place_medal"],41,44,15,0],
		"1f94a":[["\uD83E\uDD4A"],"","",["boxing_glove"],41,45,15,0],
		"1f94b":[["\uD83E\uDD4B"],"","",["martial_arts_uniform"],41,46,15,0],
		"1f94c":[["\uD83E\uDD4C"],"","",["curling_stone"],41,47,15,0],
		"1f950":[["\uD83E\uDD50"],"","",["croissant"],41,48,15,0],
		"1f951":[["\uD83E\uDD51"],"","",["avocado"],41,49,15,0],
		"1f952":[["\uD83E\uDD52"],"","",["cucumber"],41,50,15,0],
		"1f953":[["\uD83E\uDD53"],"","",["bacon"],41,51,15,0],
		"1f954":[["\uD83E\uDD54"],"","",["potato"],42,0,15,0],
		"1f955":[["\uD83E\uDD55"],"","",["carrot"],42,1,15,0],
		"1f956":[["\uD83E\uDD56"],"","",["baguette_bread"],42,2,15,0],
		"1f957":[["\uD83E\uDD57"],"","",["green_salad"],42,3,15,0],
		"1f958":[["\uD83E\uDD58"],"","",["shallow_pan_of_food"],42,4,15,0],
		"1f959":[["\uD83E\uDD59"],"","",["stuffed_flatbread"],42,5,15,0],
		"1f95a":[["\uD83E\uDD5A"],"","",["egg"],42,6,15,0],
		"1f95b":[["\uD83E\uDD5B"],"","",["glass_of_milk"],42,7,15,0],
		"1f95c":[["\uD83E\uDD5C"],"","",["peanuts"],42,8,15,0],
		"1f95d":[["\uD83E\uDD5D"],"","",["kiwifruit"],42,9,15,0],
		"1f95e":[["\uD83E\uDD5E"],"","",["pancakes"],42,10,15,0],
		"1f95f":[["\uD83E\uDD5F"],"","",["dumpling"],42,11,15,0],
		"1f960":[["\uD83E\uDD60"],"","",["fortune_cookie"],42,12,15,0],
		"1f961":[["\uD83E\uDD61"],"","",["takeout_box"],42,13,15,0],
		"1f962":[["\uD83E\uDD62"],"","",["chopsticks"],42,14,15,0],
		"1f963":[["\uD83E\uDD63"],"","",["bowl_with_spoon"],42,15,15,0],
		"1f964":[["\uD83E\uDD64"],"","",["cup_with_straw"],42,16,15,0],
		"1f965":[["\uD83E\uDD65"],"","",["coconut"],42,17,15,0],
		"1f966":[["\uD83E\uDD66"],"","",["broccoli"],42,18,15,0],
		"1f967":[["\uD83E\uDD67"],"","",["pie"],42,19,15,0],
		"1f968":[["\uD83E\uDD68"],"","",["pretzel"],42,20,15,0],
		"1f969":[["\uD83E\uDD69"],"","",["cut_of_meat"],42,21,15,0],
		"1f96a":[["\uD83E\uDD6A"],"","",["sandwich"],42,22,15,0],
		"1f96b":[["\uD83E\uDD6B"],"","",["canned_food"],42,23,15,0],
		"1f980":[["\uD83E\uDD80"],"","",["crab"],42,24,15,0],
		"1f981":[["\uD83E\uDD81"],"","",["lion_face"],42,25,15,0],
		"1f982":[["\uD83E\uDD82"],"","",["scorpion"],42,26,15,0],
		"1f983":[["\uD83E\uDD83"],"","",["turkey"],42,27,15,0],
		"1f984":[["\uD83E\uDD84"],"","",["unicorn_face"],42,28,15,0],
		"1f985":[["\uD83E\uDD85"],"","",["eagle"],42,29,15,0],
		"1f986":[["\uD83E\uDD86"],"","",["duck"],42,30,15,0],
		"1f987":[["\uD83E\uDD87"],"","",["bat"],42,31,15,0],
		"1f988":[["\uD83E\uDD88"],"","",["shark"],42,32,15,0],
		"1f989":[["\uD83E\uDD89"],"","",["owl"],42,33,15,0],
		"1f98a":[["\uD83E\uDD8A"],"","",["fox_face"],42,34,15,0],
		"1f98b":[["\uD83E\uDD8B"],"","",["butterfly"],42,35,15,0],
		"1f98c":[["\uD83E\uDD8C"],"","",["deer"],42,36,15,0],
		"1f98d":[["\uD83E\uDD8D"],"","",["gorilla"],42,37,15,0],
		"1f98e":[["\uD83E\uDD8E"],"","",["lizard"],42,38,15,0],
		"1f98f":[["\uD83E\uDD8F"],"","",["rhinoceros"],42,39,15,0],
		"1f990":[["\uD83E\uDD90"],"","",["shrimp"],42,40,15,0],
		"1f991":[["\uD83E\uDD91"],"","",["squid"],42,41,15,0],
		"1f992":[["\uD83E\uDD92"],"","",["giraffe_face"],42,42,15,0],
		"1f993":[["\uD83E\uDD93"],"","",["zebra_face"],42,43,15,0],
		"1f994":[["\uD83E\uDD94"],"","",["hedgehog"],42,44,15,0],
		"1f995":[["\uD83E\uDD95"],"","",["sauropod"],42,45,15,0],
		"1f996":[["\uD83E\uDD96"],"","",["t-rex"],42,46,15,0],
		"1f997":[["\uD83E\uDD97"],"","",["cricket"],42,47,15,0],
		"1f9c0":[["\uD83E\uDDC0"],"","",["cheese_wedge"],42,48,15,0],
		"1f9d0":[["\uD83E\uDDD0"],"","",["face_with_monocle"],42,49,15,0],
		"1f9d1":[["\uD83E\uDDD1"],"","",["adult"],42,50,15,0],
		"1f9d2":[["\uD83E\uDDD2"],"","",["child"],43,4,15,0],
		"1f9d3":[["\uD83E\uDDD3"],"","",["older_adult"],43,10,15,0],
		"1f9d4":[["\uD83E\uDDD4"],"","",["bearded_person"],43,16,15,0],
		"1f9d5":[["\uD83E\uDDD5"],"","",["person_with_headscarf"],43,22,15,0],
		"1f9d6-200d-2640-fe0f":[["\uD83E\uDDD6\u200D\u2640\uFE0F","\uD83E\uDDD6\u200D\u2640"],"","",["woman_in_steamy_room"],43,28,15,0],
		"1f9d6-200d-2642-fe0f":[["\uD83E\uDDD6\u200D\u2642\uFE0F","\uD83E\uDDD6\u200D\u2642","\uD83E\uDDD6"],"","",["man_in_steamy_room","person_in_steamy_room"],43,34,15,0],
		"1f9d7-200d-2640-fe0f":[["\uD83E\uDDD7\u200D\u2640\uFE0F","\uD83E\uDDD7\u200D\u2640","\uD83E\uDDD7"],"","",["woman_climbing","person_climbing"],43,46,15,0],
		"1f9d7-200d-2642-fe0f":[["\uD83E\uDDD7\u200D\u2642\uFE0F","\uD83E\uDDD7\u200D\u2642"],"","",["man_climbing"],44,0,15,0],
		"1f9d8-200d-2640-fe0f":[["\uD83E\uDDD8\u200D\u2640\uFE0F","\uD83E\uDDD8\u200D\u2640","\uD83E\uDDD8"],"","",["woman_in_lotus_position","person_in_lotus_position"],44,12,15,0],
		"1f9d8-200d-2642-fe0f":[["\uD83E\uDDD8\u200D\u2642\uFE0F","\uD83E\uDDD8\u200D\u2642"],"","",["man_in_lotus_position"],44,18,15,0],
		"1f9d9-200d-2640-fe0f":[["\uD83E\uDDD9\u200D\u2640\uFE0F","\uD83E\uDDD9\u200D\u2640","\uD83E\uDDD9"],"","",["female_mage","mage"],44,30,15,0],
		"1f9d9-200d-2642-fe0f":[["\uD83E\uDDD9\u200D\u2642\uFE0F","\uD83E\uDDD9\u200D\u2642"],"","",["male_mage"],44,36,15,0],
		"1f9da-200d-2640-fe0f":[["\uD83E\uDDDA\u200D\u2640\uFE0F","\uD83E\uDDDA\u200D\u2640","\uD83E\uDDDA"],"","",["female_fairy","fairy"],44,48,15,0],
		"1f9da-200d-2642-fe0f":[["\uD83E\uDDDA\u200D\u2642\uFE0F","\uD83E\uDDDA\u200D\u2642"],"","",["male_fairy"],45,2,15,0],
		"1f9db-200d-2640-fe0f":[["\uD83E\uDDDB\u200D\u2640\uFE0F","\uD83E\uDDDB\u200D\u2640","\uD83E\uDDDB"],"","",["female_vampire","vampire"],45,14,15,0],
		"1f9db-200d-2642-fe0f":[["\uD83E\uDDDB\u200D\u2642\uFE0F","\uD83E\uDDDB\u200D\u2642"],"","",["male_vampire"],45,20,15,0],
		"1f9dc-200d-2640-fe0f":[["\uD83E\uDDDC\u200D\u2640\uFE0F","\uD83E\uDDDC\u200D\u2640"],"","",["mermaid"],45,32,15,0],
		"1f9dc-200d-2642-fe0f":[["\uD83E\uDDDC\u200D\u2642\uFE0F","\uD83E\uDDDC\u200D\u2642","\uD83E\uDDDC"],"","",["merman","merperson"],45,38,15,0],
		"1f9dd-200d-2640-fe0f":[["\uD83E\uDDDD\u200D\u2640\uFE0F","\uD83E\uDDDD\u200D\u2640"],"","",["female_elf"],45,50,15,0],
		"1f9dd-200d-2642-fe0f":[["\uD83E\uDDDD\u200D\u2642\uFE0F","\uD83E\uDDDD\u200D\u2642","\uD83E\uDDDD"],"","",["male_elf","elf"],46,4,15,0],
		"1f9de-200d-2640-fe0f":[["\uD83E\uDDDE\u200D\u2640\uFE0F","\uD83E\uDDDE\u200D\u2640"],"","",["female_genie"],46,16,15,0],
		"1f9de-200d-2642-fe0f":[["\uD83E\uDDDE\u200D\u2642\uFE0F","\uD83E\uDDDE\u200D\u2642","\uD83E\uDDDE"],"","",["male_genie","genie"],46,17,15,0],
		"1f9df-200d-2640-fe0f":[["\uD83E\uDDDF\u200D\u2640\uFE0F","\uD83E\uDDDF\u200D\u2640"],"","",["female_zombie"],46,19,15,0],
		"1f9df-200d-2642-fe0f":[["\uD83E\uDDDF\u200D\u2642\uFE0F","\uD83E\uDDDF\u200D\u2642","\uD83E\uDDDF"],"","",["male_zombie","zombie"],46,20,15,0],
		"1f9e0":[["\uD83E\uDDE0"],"","",["brain"],46,22,15,0],
		"1f9e1":[["\uD83E\uDDE1"],"","",["orange_heart"],46,23,15,0],
		"1f9e2":[["\uD83E\uDDE2"],"","",["billed_cap"],46,24,15,0],
		"1f9e3":[["\uD83E\uDDE3"],"","",["scarf"],46,25,15,0],
		"1f9e4":[["\uD83E\uDDE4"],"","",["gloves"],46,26,15,0],
		"1f9e5":[["\uD83E\uDDE5"],"","",["coat"],46,27,15,0],
		"1f9e6":[["\uD83E\uDDE6"],"","",["socks"],46,28,15,0],
		"203c-fe0f":[["\u203C\uFE0F","\u203C"],"","\uDBBA\uDF06",["bangbang"],46,29,31,0],
		"2049-fe0f":[["\u2049\uFE0F","\u2049"],"","\uDBBA\uDF05",["interrobang"],46,30,31,0],
		"2122-fe0f":[["\u2122\uFE0F","\u2122"],"\uE537","\uDBBA\uDF2A",["tm"],46,31,31,0],
		"2139-fe0f":[["\u2139\uFE0F","\u2139"],"","\uDBBA\uDF47",["information_source"],46,32,31,0],
		"2194-fe0f":[["\u2194\uFE0F","\u2194"],"","\uDBBA\uDEF6",["left_right_arrow"],46,33,31,0],
		"2195-fe0f":[["\u2195\uFE0F","\u2195"],"","\uDBBA\uDEF7",["arrow_up_down"],46,34,31,0],
		"2196-fe0f":[["\u2196\uFE0F","\u2196"],"\uE237","\uDBBA\uDEF2",["arrow_upper_left"],46,35,31,0],
		"2197-fe0f":[["\u2197\uFE0F","\u2197"],"\uE236","\uDBBA\uDEF0",["arrow_upper_right"],46,36,31,0],
		"2198-fe0f":[["\u2198\uFE0F","\u2198"],"\uE238","\uDBBA\uDEF1",["arrow_lower_right"],46,37,31,0],
		"2199-fe0f":[["\u2199\uFE0F","\u2199"],"\uE239","\uDBBA\uDEF3",["arrow_lower_left"],46,38,31,0],
		"21a9-fe0f":[["\u21A9\uFE0F","\u21A9"],"","\uDBBA\uDF83",["leftwards_arrow_with_hook"],46,39,31,0],
		"21aa-fe0f":[["\u21AA\uFE0F","\u21AA"],"","\uDBBA\uDF88",["arrow_right_hook"],46,40,31,0],
		"231a":[["\u231A"],"","\uDBB8\uDC1D",["watch"],46,41,31,0],
		"231b":[["\u231B"],"","\uDBB8\uDC1C",["hourglass"],46,42,31,0],
		"2328-fe0f":[["\u2328\uFE0F","\u2328"],"","",["keyboard"],46,43,15,0],
		"23cf-fe0f":[["\u23CF\uFE0F","\u23CF"],"","",["eject"],46,44,15,0],
		"23e9":[["\u23E9"],"\uE23C","\uDBBA\uDEFE",["fast_forward"],46,45,31,0],
		"23ea":[["\u23EA"],"\uE23D","\uDBBA\uDEFF",["rewind"],46,46,31,0],
		"23eb":[["\u23EB"],"","\uDBBA\uDF03",["arrow_double_up"],46,47,31,0],
		"23ec":[["\u23EC"],"","\uDBBA\uDF02",["arrow_double_down"],46,48,31,0],
		"23ed-fe0f":[["\u23ED\uFE0F","\u23ED"],"","",["black_right_pointing_double_triangle_with_vertical_bar"],46,49,15,0],
		"23ee-fe0f":[["\u23EE\uFE0F","\u23EE"],"","",["black_left_pointing_double_triangle_with_vertical_bar"],46,50,15,0],
		"23ef-fe0f":[["\u23EF\uFE0F","\u23EF"],"","",["black_right_pointing_triangle_with_double_vertical_bar"],46,51,15,0],
		"23f0":[["\u23F0"],"","\uDBB8\uDC2A",["alarm_clock"],47,0,31,0],
		"23f1-fe0f":[["\u23F1\uFE0F","\u23F1"],"","",["stopwatch"],47,1,15,0],
		"23f2-fe0f":[["\u23F2\uFE0F","\u23F2"],"","",["timer_clock"],47,2,15,0],
		"23f3":[["\u23F3"],"","\uDBB8\uDC1B",["hourglass_flowing_sand"],47,3,31,0],
		"23f8-fe0f":[["\u23F8\uFE0F","\u23F8"],"","",["double_vertical_bar"],47,4,15,0],
		"23f9-fe0f":[["\u23F9\uFE0F","\u23F9"],"","",["black_square_for_stop"],47,5,15,0],
		"23fa-fe0f":[["\u23FA\uFE0F","\u23FA"],"","",["black_circle_for_record"],47,6,15,0],
		"24c2-fe0f":[["\u24C2\uFE0F","\u24C2"],"","\uDBB9\uDFE1",["m"],47,7,31,0],
		"25aa-fe0f":[["\u25AA\uFE0F","\u25AA"],"","\uDBBA\uDF6E",["black_small_square"],47,8,31,0],
		"25ab-fe0f":[["\u25AB\uFE0F","\u25AB"],"","\uDBBA\uDF6D",["white_small_square"],47,9,31,0],
		"25b6-fe0f":[["\u25B6\uFE0F","\u25B6"],"\uE23A","\uDBBA\uDEFC",["arrow_forward"],47,10,31,0],
		"25c0-fe0f":[["\u25C0\uFE0F","\u25C0"],"\uE23B","\uDBBA\uDEFD",["arrow_backward"],47,11,31,0],
		"25fb-fe0f":[["\u25FB\uFE0F","\u25FB"],"","\uDBBA\uDF71",["white_medium_square"],47,12,31,0],
		"25fc-fe0f":[["\u25FC\uFE0F","\u25FC"],"","\uDBBA\uDF72",["black_medium_square"],47,13,31,0],
		"25fd":[["\u25FD"],"","\uDBBA\uDF6F",["white_medium_small_square"],47,14,31,0],
		"25fe":[["\u25FE"],"","\uDBBA\uDF70",["black_medium_small_square"],47,15,31,0],
		"2600-fe0f":[["\u2600\uFE0F","\u2600"],"\uE04A","\uDBB8\uDC00",["sunny"],47,16,31,0],
		"2601-fe0f":[["\u2601\uFE0F","\u2601"],"\uE049","\uDBB8\uDC01",["cloud"],47,17,31,0],
		"2602-fe0f":[["\u2602\uFE0F","\u2602"],"","",["umbrella"],47,18,15,0],
		"2603-fe0f":[["\u2603\uFE0F","\u2603"],"","",["snowman"],47,19,15,0],
		"2604-fe0f":[["\u2604\uFE0F","\u2604"],"","",["comet"],47,20,15,0],
		"260e-fe0f":[["\u260E\uFE0F","\u260E"],"\uE009","\uDBB9\uDD23",["phone","telephone"],47,21,31,0],
		"2611-fe0f":[["\u2611\uFE0F","\u2611"],"","\uDBBA\uDF8B",["ballot_box_with_check"],47,22,31,0],
		"2614":[["\u2614"],"\uE04B","\uDBB8\uDC02",["umbrella_with_rain_drops"],47,23,31,0],
		"2615":[["\u2615"],"\uE045","\uDBBA\uDD81",["coffee"],47,24,31,0],
		"2618-fe0f":[["\u2618\uFE0F","\u2618"],"","",["shamrock"],47,25,15,0],
		"261d-fe0f":[["\u261D\uFE0F","\u261D"],"\uE00F","\uDBBA\uDF98",["point_up"],47,26,31,0],
		"2620-fe0f":[["\u2620\uFE0F","\u2620"],"","",["skull_and_crossbones"],47,32,15,0],
		"2622-fe0f":[["\u2622\uFE0F","\u2622"],"","",["radioactive_sign"],47,33,15,0],
		"2623-fe0f":[["\u2623\uFE0F","\u2623"],"","",["biohazard_sign"],47,34,15,0],
		"2626-fe0f":[["\u2626\uFE0F","\u2626"],"","",["orthodox_cross"],47,35,15,0],
		"262a-fe0f":[["\u262A\uFE0F","\u262A"],"","",["star_and_crescent"],47,36,15,0],
		"262e-fe0f":[["\u262E\uFE0F","\u262E"],"","",["peace_symbol"],47,37,15,0],
		"262f-fe0f":[["\u262F\uFE0F","\u262F"],"","",["yin_yang"],47,38,15,0],
		"2638-fe0f":[["\u2638\uFE0F","\u2638"],"","",["wheel_of_dharma"],47,39,15,0],
		"2639-fe0f":[["\u2639\uFE0F","\u2639"],"","",["white_frowning_face"],47,40,15,0],
		"263a-fe0f":[["\u263A\uFE0F","\u263A"],"\uE414","\uDBB8\uDF36",["relaxed"],47,41,31,0],
		"2640-fe0f":[["\u2640\uFE0F","\u2640"],"","",["female_sign"],47,42,14,0],
		"2642-fe0f":[["\u2642\uFE0F","\u2642"],"","",["male_sign"],47,43,14,0],
		"2648":[["\u2648"],"\uE23F","\uDBB8\uDC2B",["aries"],47,44,31,0],
		"2649":[["\u2649"],"\uE240","\uDBB8\uDC2C",["taurus"],47,45,31,0],
		"264a":[["\u264A"],"\uE241","\uDBB8\uDC2D",["gemini"],47,46,31,0],
		"264b":[["\u264B"],"\uE242","\uDBB8\uDC2E",["cancer"],47,47,31,0],
		"264c":[["\u264C"],"\uE243","\uDBB8\uDC2F",["leo"],47,48,31,0],
		"264d":[["\u264D"],"\uE244","\uDBB8\uDC30",["virgo"],47,49,31,0],
		"264e":[["\u264E"],"\uE245","\uDBB8\uDC31",["libra"],47,50,31,0],
		"264f":[["\u264F"],"\uE246","\uDBB8\uDC32",["scorpius"],47,51,31,0],
		"2650":[["\u2650"],"\uE247","\uDBB8\uDC33",["sagittarius"],48,0,31,0],
		"2651":[["\u2651"],"\uE248","\uDBB8\uDC34",["capricorn"],48,1,31,0],
		"2652":[["\u2652"],"\uE249","\uDBB8\uDC35",["aquarius"],48,2,31,0],
		"2653":[["\u2653"],"\uE24A","\uDBB8\uDC36",["pisces"],48,3,31,0],
		"2660-fe0f":[["\u2660\uFE0F","\u2660"],"\uE20E","\uDBBA\uDF1B",["spades"],48,4,31,0],
		"2663-fe0f":[["\u2663\uFE0F","\u2663"],"\uE20F","\uDBBA\uDF1D",["clubs"],48,5,31,0],
		"2665-fe0f":[["\u2665\uFE0F","\u2665"],"\uE20C","\uDBBA\uDF1A",["hearts"],48,6,31,0],
		"2666-fe0f":[["\u2666\uFE0F","\u2666"],"\uE20D","\uDBBA\uDF1C",["diamonds"],48,7,31,0],
		"2668-fe0f":[["\u2668\uFE0F","\u2668"],"\uE123","\uDBB9\uDFFA",["hotsprings"],48,8,31,0],
		"267b-fe0f":[["\u267B\uFE0F","\u267B"],"","\uDBBA\uDF2C",["recycle"],48,9,31,0],
		"267f":[["\u267F"],"\uE20A","\uDBBA\uDF20",["wheelchair"],48,10,31,0],
		"2692-fe0f":[["\u2692\uFE0F","\u2692"],"","",["hammer_and_pick"],48,11,15,0],
		"2693":[["\u2693"],"","\uDBB9\uDCC1",["anchor"],48,12,31,0],
		"2694-fe0f":[["\u2694\uFE0F","\u2694"],"","",["crossed_swords"],48,13,15,0],
		"2695-fe0f":[["\u2695\uFE0F","\u2695"],"","",["medical_symbol","staff_of_aesculapius"],48,14,14,0],
		"2696-fe0f":[["\u2696\uFE0F","\u2696"],"","",["scales"],48,15,15,0],
		"2697-fe0f":[["\u2697\uFE0F","\u2697"],"","",["alembic"],48,16,15,0],
		"2699-fe0f":[["\u2699\uFE0F","\u2699"],"","",["gear"],48,17,15,0],
		"269b-fe0f":[["\u269B\uFE0F","\u269B"],"","",["atom_symbol"],48,18,15,0],
		"269c-fe0f":[["\u269C\uFE0F","\u269C"],"","",["fleur_de_lis"],48,19,15,0],
		"26a0-fe0f":[["\u26A0\uFE0F","\u26A0"],"\uE252","\uDBBA\uDF23",["warning"],48,20,31,0],
		"26a1":[["\u26A1"],"\uE13D","\uDBB8\uDC04",["zap"],48,21,31,0],
		"26aa":[["\u26AA"],"","\uDBBA\uDF65",["white_circle"],48,22,31,0],
		"26ab":[["\u26AB"],"","\uDBBA\uDF66",["black_circle"],48,23,31,0],
		"26b0-fe0f":[["\u26B0\uFE0F","\u26B0"],"","",["coffin"],48,24,15,0],
		"26b1-fe0f":[["\u26B1\uFE0F","\u26B1"],"","",["funeral_urn"],48,25,15,0],
		"26bd":[["\u26BD"],"\uE018","\uDBB9\uDFD4",["soccer"],48,26,31,0],
		"26be":[["\u26BE"],"\uE016","\uDBB9\uDFD1",["baseball"],48,27,31,0],
		"26c4":[["\u26C4"],"\uE048","\uDBB8\uDC03",["snowman_without_snow"],48,28,31,0],
		"26c5":[["\u26C5"],"","\uDBB8\uDC0F",["partly_sunny"],48,29,31,0],
		"26c8-fe0f":[["\u26C8\uFE0F","\u26C8"],"","",["thunder_cloud_and_rain"],48,30,15,0],
		"26ce":[["\u26CE"],"\uE24B","\uDBB8\uDC37",["ophiuchus"],48,31,31,0],
		"26cf-fe0f":[["\u26CF\uFE0F","\u26CF"],"","",["pick"],48,32,15,0],
		"26d1-fe0f":[["\u26D1\uFE0F","\u26D1"],"","",["helmet_with_white_cross"],48,33,15,0],
		"26d3-fe0f":[["\u26D3\uFE0F","\u26D3"],"","",["chains"],48,34,15,0],
		"26d4":[["\u26D4"],"","\uDBBA\uDF26",["no_entry"],48,35,31,0],
		"26e9-fe0f":[["\u26E9\uFE0F","\u26E9"],"","",["shinto_shrine"],48,36,15,0],
		"26ea":[["\u26EA"],"\uE037","\uDBB9\uDCBB",["church"],48,37,31,0],
		"26f0-fe0f":[["\u26F0\uFE0F","\u26F0"],"","",["mountain"],48,38,15,0],
		"26f1-fe0f":[["\u26F1\uFE0F","\u26F1"],"","",["umbrella_on_ground"],48,39,15,0],
		"26f2":[["\u26F2"],"\uE121","\uDBB9\uDCBC",["fountain"],48,40,31,0],
		"26f3":[["\u26F3"],"\uE014","\uDBB9\uDFD2",["golf"],48,41,31,0],
		"26f4-fe0f":[["\u26F4\uFE0F","\u26F4"],"","",["ferry"],48,42,15,0],
		"26f5":[["\u26F5"],"\uE01C","\uDBB9\uDFEA",["boat","sailboat"],48,43,31,0],
		"26f7-fe0f":[["\u26F7\uFE0F","\u26F7"],"","",["skier"],48,44,15,0],
		"26f8-fe0f":[["\u26F8\uFE0F","\u26F8"],"","",["ice_skate"],48,45,15,0],
		"26f9-fe0f-200d-2640-fe0f":[["\u26F9\uFE0F\u200D\u2640\uFE0F"],"","",["woman-bouncing-ball"],48,46,7,0],
		"26f9-fe0f-200d-2642-fe0f":[["\u26F9\uFE0F\u200D\u2642\uFE0F","\u26F9\uFE0F","\u26F9"],"","",["man-bouncing-ball","person_with_ball"],49,0,7,0],
		"26fa":[["\u26FA"],"\uE122","\uDBB9\uDFFB",["tent"],49,12,31,0],
		"26fd":[["\u26FD"],"\uE03A","\uDBB9\uDFF5",["fuelpump"],49,13,31,0],
		"2702-fe0f":[["\u2702\uFE0F","\u2702"],"\uE313","\uDBB9\uDD3E",["scissors"],49,14,31,0],
		"2705":[["\u2705"],"","\uDBBA\uDF4A",["white_check_mark"],49,15,31,0],
		"2708-fe0f":[["\u2708\uFE0F","\u2708"],"\uE01D","\uDBB9\uDFE9",["airplane"],49,16,31,0],
		"2709-fe0f":[["\u2709\uFE0F","\u2709"],"","\uDBB9\uDD29",["email","envelope"],49,17,31,0],
		"270a":[["\u270A"],"\uE010","\uDBBA\uDF93",["fist"],49,18,31,0],
		"270b":[["\u270B"],"\uE012","\uDBBA\uDF95",["hand","raised_hand"],49,24,31,0],
		"270c-fe0f":[["\u270C\uFE0F","\u270C"],"\uE011","\uDBBA\uDF94",["v"],49,30,31,0],
		"270d-fe0f":[["\u270D\uFE0F","\u270D"],"","",["writing_hand"],49,36,15,0],
		"270f-fe0f":[["\u270F\uFE0F","\u270F"],"","\uDBB9\uDD39",["pencil2"],49,42,31,0],
		"2712-fe0f":[["\u2712\uFE0F","\u2712"],"","\uDBB9\uDD36",["black_nib"],49,43,31,0],
		"2714-fe0f":[["\u2714\uFE0F","\u2714"],"","\uDBBA\uDF49",["heavy_check_mark"],49,44,31,0],
		"2716-fe0f":[["\u2716\uFE0F","\u2716"],"","\uDBBA\uDF53",["heavy_multiplication_x"],49,45,31,0],
		"271d-fe0f":[["\u271D\uFE0F","\u271D"],"","",["latin_cross"],49,46,15,0],
		"2721-fe0f":[["\u2721\uFE0F","\u2721"],"","",["star_of_david"],49,47,15,0],
		"2728":[["\u2728"],"\uE32E","\uDBBA\uDF60",["sparkles"],49,48,31,0],
		"2733-fe0f":[["\u2733\uFE0F","\u2733"],"\uE206","\uDBBA\uDF62",["eight_spoked_asterisk"],49,49,31,0],
		"2734-fe0f":[["\u2734\uFE0F","\u2734"],"\uE205","\uDBBA\uDF61",["eight_pointed_black_star"],49,50,31,0],
		"2744-fe0f":[["\u2744\uFE0F","\u2744"],"","\uDBB8\uDC0E",["snowflake"],49,51,31,0],
		"2747-fe0f":[["\u2747\uFE0F","\u2747"],"","\uDBBA\uDF77",["sparkle"],50,0,31,0],
		"274c":[["\u274C"],"\uE333","\uDBBA\uDF45",["x"],50,1,31,0],
		"274e":[["\u274E"],"","\uDBBA\uDF46",["negative_squared_cross_mark"],50,2,31,0],
		"2753":[["\u2753"],"\uE020","\uDBBA\uDF09",["question"],50,3,31,0],
		"2754":[["\u2754"],"\uE336","\uDBBA\uDF0A",["grey_question"],50,4,31,0],
		"2755":[["\u2755"],"\uE337","\uDBBA\uDF0B",["grey_exclamation"],50,5,31,0],
		"2757":[["\u2757"],"\uE021","\uDBBA\uDF04",["exclamation","heavy_exclamation_mark"],50,6,31,0],
		"2763-fe0f":[["\u2763\uFE0F","\u2763"],"","",["heavy_heart_exclamation_mark_ornament"],50,7,15,0],
		"2764-fe0f":[["\u2764\uFE0F","\u2764"],"\uE022","\uDBBA\uDF0C",["heart"],50,8,31,0,"<3"],
		"2795":[["\u2795"],"","\uDBBA\uDF51",["heavy_plus_sign"],50,9,31,0],
		"2796":[["\u2796"],"","\uDBBA\uDF52",["heavy_minus_sign"],50,10,31,0],
		"2797":[["\u2797"],"","\uDBBA\uDF54",["heavy_division_sign"],50,11,31,0],
		"27a1-fe0f":[["\u27A1\uFE0F","\u27A1"],"\uE234","\uDBBA\uDEFA",["arrow_right"],50,12,31,0],
		"27b0":[["\u27B0"],"","\uDBBA\uDF08",["curly_loop"],50,13,31,0],
		"27bf":[["\u27BF"],"\uE211","\uDBBA\uDC2B",["loop"],50,14,31,0],
		"2934-fe0f":[["\u2934\uFE0F","\u2934"],"","\uDBBA\uDEF4",["arrow_heading_up"],50,15,31,0],
		"2935-fe0f":[["\u2935\uFE0F","\u2935"],"","\uDBBA\uDEF5",["arrow_heading_down"],50,16,31,0],
		"2b05-fe0f":[["\u2B05\uFE0F","\u2B05"],"\uE235","\uDBBA\uDEFB",["arrow_left"],50,17,31,0],
		"2b06-fe0f":[["\u2B06\uFE0F","\u2B06"],"\uE232","\uDBBA\uDEF8",["arrow_up"],50,18,31,0],
		"2b07-fe0f":[["\u2B07\uFE0F","\u2B07"],"\uE233","\uDBBA\uDEF9",["arrow_down"],50,19,31,0],
		"2b1b":[["\u2B1B"],"","\uDBBA\uDF6C",["black_large_square"],50,20,31,0],
		"2b1c":[["\u2B1C"],"","\uDBBA\uDF6B",["white_large_square"],50,21,31,0],
		"2b50":[["\u2B50"],"\uE32F","\uDBBA\uDF68",["star"],50,22,31,0],
		"2b55":[["\u2B55"],"\uE332","\uDBBA\uDF44",["o"],50,23,31,0],
		"3030-fe0f":[["\u3030\uFE0F","\u3030"],"","\uDBBA\uDF07",["wavy_dash"],50,24,31,0],
		"303d-fe0f":[["\u303D\uFE0F","\u303D"],"\uE12C","\uDBBA\uDC1B",["part_alternation_mark"],50,25,31,0],
		"3297-fe0f":[["\u3297\uFE0F","\u3297"],"\uE30D","\uDBBA\uDF43",["congratulations"],50,26,31,0],
		"3299-fe0f":[["\u3299\uFE0F","\u3299"],"\uE315","\uDBBA\uDF2B",["secret"],50,27,31,0]
	};
	/** @private */
	emoji.prototype.emoticons_data = {
		":o)":"monkey_face",
		"<\/3":"broken_heart",
		"=)":"smiley",
		"=-)":"smiley",
		"C:":"smile",
		"c:":"smile",
		":D":"smile",
		":-D":"smile",
		":>":"laughing",
		":->":"laughing",
		";)":"wink",
		";-)":"wink",
		"8)":"sunglasses",
		":|":"neutral_face",
		":-|":"neutral_face",
		":\\":"confused",
		":-\\":"confused",
		":\/":"confused",
		":-\/":"confused",
		":*":"kissing_heart",
		":-*":"kissing_heart",
		":p":"stuck_out_tongue",
		":-p":"stuck_out_tongue",
		":P":"stuck_out_tongue",
		":-P":"stuck_out_tongue",
		":b":"stuck_out_tongue",
		":-b":"stuck_out_tongue",
		";p":"stuck_out_tongue_winking_eye",
		";-p":"stuck_out_tongue_winking_eye",
		";b":"stuck_out_tongue_winking_eye",
		";-b":"stuck_out_tongue_winking_eye",
		";P":"stuck_out_tongue_winking_eye",
		";-P":"stuck_out_tongue_winking_eye",
		"):":"disappointed",
		":(":"disappointed",
		":-(":"disappointed",
		">:(":"angry",
		">:-(":"angry",
		":'(":"cry",
		"D:":"anguished",
		":o":"open_mouth",
		":-o":"open_mouth",
		":O":"open_mouth",
		":-O":"open_mouth",
		":)":"slightly_smiling_face",
		"(:":"slightly_smiling_face",
		":-)":"slightly_smiling_face",
		"<3":"heart"
	};
	/** @private */
	emoji.prototype.variations_data = {
		"1f385":{"1f3fb":["1f385-1f3fb",8,20,31,["\uD83C\uDF85\uD83C\uDFFB"]],"1f3fc":["1f385-1f3fc",8,21,31,["\uD83C\uDF85\uD83C\uDFFC"]],"1f3fd":["1f385-1f3fd",8,22,31,["\uD83C\uDF85\uD83C\uDFFD"]],"1f3fe":["1f385-1f3fe",8,23,31,["\uD83C\uDF85\uD83C\uDFFE"]],"1f3ff":["1f385-1f3ff",8,24,31,["\uD83C\uDF85\uD83C\uDFFF"]]},
		"1f3c2":{"1f3fb":["1f3c2-1f3fb",9,29,31,["\uD83C\uDFC2\uD83C\uDFFB"]],"1f3fc":["1f3c2-1f3fc",9,30,31,["\uD83C\uDFC2\uD83C\uDFFC"]],"1f3fd":["1f3c2-1f3fd",9,31,31,["\uD83C\uDFC2\uD83C\uDFFD"]],"1f3fe":["1f3c2-1f3fe",9,32,31,["\uD83C\uDFC2\uD83C\uDFFE"]],"1f3ff":["1f3c2-1f3ff",9,33,31,["\uD83C\uDFC2\uD83C\uDFFF"]]},
		"1f3c3-200d-2640-fe0f":{"1f3fb":["1f3c3-1f3fb-200d-2640-fe0f",9,35,7,["\uD83C\uDFC3\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3c3-1f3fc-200d-2640-fe0f",9,36,7,["\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3c3-1f3fd-200d-2640-fe0f",9,37,7,["\uD83C\uDFC3\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3c3-1f3fe-200d-2640-fe0f",9,38,7,["\uD83C\uDFC3\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3c3-1f3ff-200d-2640-fe0f",9,39,7,["\uD83C\uDFC3\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3c3-200d-2642-fe0f":{"1f3fb":["1f3c3-1f3fb-200d-2642-fe0f",9,41,7,["\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFB"]],"1f3fc":["1f3c3-1f3fc-200d-2642-fe0f",9,42,7,["\uD83C\uDFC3\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFC"]],"1f3fd":["1f3c3-1f3fd-200d-2642-fe0f",9,43,7,["\uD83C\uDFC3\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFD"]],"1f3fe":["1f3c3-1f3fe-200d-2642-fe0f",9,44,7,["\uD83C\uDFC3\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFE"]],"1f3ff":["1f3c3-1f3ff-200d-2642-fe0f",9,45,7,["\uD83C\uDFC3\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFF"]]},
		"1f3c4-200d-2640-fe0f":{"1f3fb":["1f3c4-1f3fb-200d-2640-fe0f",10,1,7,["\uD83C\uDFC4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3c4-1f3fc-200d-2640-fe0f",10,2,7,["\uD83C\uDFC4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3c4-1f3fd-200d-2640-fe0f",10,3,7,["\uD83C\uDFC4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3c4-1f3fe-200d-2640-fe0f",10,4,7,["\uD83C\uDFC4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3c4-1f3ff-200d-2640-fe0f",10,5,7,["\uD83C\uDFC4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3c4-200d-2642-fe0f":{"1f3fb":["1f3c4-1f3fb-200d-2642-fe0f",10,7,7,["\uD83C\uDFC4\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFB"]],"1f3fc":["1f3c4-1f3fc-200d-2642-fe0f",10,8,7,["\uD83C\uDFC4\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFC"]],"1f3fd":["1f3c4-1f3fd-200d-2642-fe0f",10,9,7,["\uD83C\uDFC4\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFD"]],"1f3fe":["1f3c4-1f3fe-200d-2642-fe0f",10,10,7,["\uD83C\uDFC4\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFE"]],"1f3ff":["1f3c4-1f3ff-200d-2642-fe0f",10,11,7,["\uD83C\uDFC4\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFF"]]},
		"1f3c7":{"1f3fb":["1f3c7-1f3fb",10,21,31,["\uD83C\uDFC7\uD83C\uDFFB"]],"1f3fc":["1f3c7-1f3fc",10,22,31,["\uD83C\uDFC7\uD83C\uDFFC"]],"1f3fd":["1f3c7-1f3fd",10,23,31,["\uD83C\uDFC7\uD83C\uDFFD"]],"1f3fe":["1f3c7-1f3fe",10,24,31,["\uD83C\uDFC7\uD83C\uDFFE"]],"1f3ff":["1f3c7-1f3ff",10,25,31,["\uD83C\uDFC7\uD83C\uDFFF"]]},
		"1f3ca-200d-2640-fe0f":{"1f3fb":["1f3ca-1f3fb-200d-2640-fe0f",10,29,7,["\uD83C\uDFCA\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3ca-1f3fc-200d-2640-fe0f",10,30,7,["\uD83C\uDFCA\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3ca-1f3fd-200d-2640-fe0f",10,31,7,["\uD83C\uDFCA\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3ca-1f3fe-200d-2640-fe0f",10,32,7,["\uD83C\uDFCA\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3ca-1f3ff-200d-2640-fe0f",10,33,7,["\uD83C\uDFCA\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3ca-200d-2642-fe0f":{"1f3fb":["1f3ca-1f3fb-200d-2642-fe0f",10,35,7,["\uD83C\uDFCA\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFB"]],"1f3fc":["1f3ca-1f3fc-200d-2642-fe0f",10,36,7,["\uD83C\uDFCA\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFC"]],"1f3fd":["1f3ca-1f3fd-200d-2642-fe0f",10,37,7,["\uD83C\uDFCA\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFD"]],"1f3fe":["1f3ca-1f3fe-200d-2642-fe0f",10,38,7,["\uD83C\uDFCA\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFE"]],"1f3ff":["1f3ca-1f3ff-200d-2642-fe0f",10,39,7,["\uD83C\uDFCA\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFF"]]},
		"1f3cb-fe0f-200d-2640-fe0f":{"1f3fb":["1f3cb-1f3fb-200d-2640-fe0f",10,47,7,["\uD83C\uDFCB\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3cb-1f3fc-200d-2640-fe0f",10,48,7,["\uD83C\uDFCB\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3cb-1f3fd-200d-2640-fe0f",10,49,7,["\uD83C\uDFCB\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3cb-1f3fe-200d-2640-fe0f",10,50,7,["\uD83C\uDFCB\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3cb-1f3ff-200d-2640-fe0f",10,51,7,["\uD83C\uDFCB\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3cb-fe0f-200d-2642-fe0f":{"1f3fb":["1f3cb-1f3fb-200d-2642-fe0f",11,1,7,["\uD83C\uDFCB\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFB"]],"1f3fc":["1f3cb-1f3fc-200d-2642-fe0f",11,2,7,["\uD83C\uDFCB\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFC"]],"1f3fd":["1f3cb-1f3fd-200d-2642-fe0f",11,3,7,["\uD83C\uDFCB\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFD"]],"1f3fe":["1f3cb-1f3fe-200d-2642-fe0f",11,4,7,["\uD83C\uDFCB\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFE"]],"1f3ff":["1f3cb-1f3ff-200d-2642-fe0f",11,5,7,["\uD83C\uDFCB\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFF"]]},
		"1f3cc-fe0f-200d-2640-fe0f":{"1f3fb":["1f3cc-1f3fb-200d-2640-fe0f",11,13,7,["\uD83C\uDFCC\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3cc-1f3fc-200d-2640-fe0f",11,14,7,["\uD83C\uDFCC\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3cc-1f3fd-200d-2640-fe0f",11,15,7,["\uD83C\uDFCC\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3cc-1f3fe-200d-2640-fe0f",11,16,7,["\uD83C\uDFCC\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3cc-1f3ff-200d-2640-fe0f",11,17,7,["\uD83C\uDFCC\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3cc-fe0f-200d-2642-fe0f":{"1f3fb":["1f3cc-1f3fb-200d-2642-fe0f",11,19,7,["\uD83C\uDFCC\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFB"]],"1f3fc":["1f3cc-1f3fc-200d-2642-fe0f",11,20,7,["\uD83C\uDFCC\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFC"]],"1f3fd":["1f3cc-1f3fd-200d-2642-fe0f",11,21,7,["\uD83C\uDFCC\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFD"]],"1f3fe":["1f3cc-1f3fe-200d-2642-fe0f",11,22,7,["\uD83C\uDFCC\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFE"]],"1f3ff":["1f3cc-1f3ff-200d-2642-fe0f",11,23,7,["\uD83C\uDFCC\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFF"]]},
		"1f442":{"1f3fb":["1f442-1f3fb",13,46,31,["\uD83D\uDC42\uD83C\uDFFB"]],"1f3fc":["1f442-1f3fc",13,47,31,["\uD83D\uDC42\uD83C\uDFFC"]],"1f3fd":["1f442-1f3fd",13,48,31,["\uD83D\uDC42\uD83C\uDFFD"]],"1f3fe":["1f442-1f3fe",13,49,31,["\uD83D\uDC42\uD83C\uDFFE"]],"1f3ff":["1f442-1f3ff",13,50,31,["\uD83D\uDC42\uD83C\uDFFF"]]},
		"1f443":{"1f3fb":["1f443-1f3fb",14,0,31,["\uD83D\uDC43\uD83C\uDFFB"]],"1f3fc":["1f443-1f3fc",14,1,31,["\uD83D\uDC43\uD83C\uDFFC"]],"1f3fd":["1f443-1f3fd",14,2,31,["\uD83D\uDC43\uD83C\uDFFD"]],"1f3fe":["1f443-1f3fe",14,3,31,["\uD83D\uDC43\uD83C\uDFFE"]],"1f3ff":["1f443-1f3ff",14,4,31,["\uD83D\uDC43\uD83C\uDFFF"]]},
		"1f446":{"1f3fb":["1f446-1f3fb",14,8,31,["\uD83D\uDC46\uD83C\uDFFB"]],"1f3fc":["1f446-1f3fc",14,9,31,["\uD83D\uDC46\uD83C\uDFFC"]],"1f3fd":["1f446-1f3fd",14,10,31,["\uD83D\uDC46\uD83C\uDFFD"]],"1f3fe":["1f446-1f3fe",14,11,31,["\uD83D\uDC46\uD83C\uDFFE"]],"1f3ff":["1f446-1f3ff",14,12,31,["\uD83D\uDC46\uD83C\uDFFF"]]},
		"1f447":{"1f3fb":["1f447-1f3fb",14,14,31,["\uD83D\uDC47\uD83C\uDFFB"]],"1f3fc":["1f447-1f3fc",14,15,31,["\uD83D\uDC47\uD83C\uDFFC"]],"1f3fd":["1f447-1f3fd",14,16,31,["\uD83D\uDC47\uD83C\uDFFD"]],"1f3fe":["1f447-1f3fe",14,17,31,["\uD83D\uDC47\uD83C\uDFFE"]],"1f3ff":["1f447-1f3ff",14,18,31,["\uD83D\uDC47\uD83C\uDFFF"]]},
		"1f448":{"1f3fb":["1f448-1f3fb",14,20,31,["\uD83D\uDC48\uD83C\uDFFB"]],"1f3fc":["1f448-1f3fc",14,21,31,["\uD83D\uDC48\uD83C\uDFFC"]],"1f3fd":["1f448-1f3fd",14,22,31,["\uD83D\uDC48\uD83C\uDFFD"]],"1f3fe":["1f448-1f3fe",14,23,31,["\uD83D\uDC48\uD83C\uDFFE"]],"1f3ff":["1f448-1f3ff",14,24,31,["\uD83D\uDC48\uD83C\uDFFF"]]},
		"1f449":{"1f3fb":["1f449-1f3fb",14,26,31,["\uD83D\uDC49\uD83C\uDFFB"]],"1f3fc":["1f449-1f3fc",14,27,31,["\uD83D\uDC49\uD83C\uDFFC"]],"1f3fd":["1f449-1f3fd",14,28,31,["\uD83D\uDC49\uD83C\uDFFD"]],"1f3fe":["1f449-1f3fe",14,29,31,["\uD83D\uDC49\uD83C\uDFFE"]],"1f3ff":["1f449-1f3ff",14,30,31,["\uD83D\uDC49\uD83C\uDFFF"]]},
		"1f44a":{"1f3fb":["1f44a-1f3fb",14,32,31,["\uD83D\uDC4A\uD83C\uDFFB"]],"1f3fc":["1f44a-1f3fc",14,33,31,["\uD83D\uDC4A\uD83C\uDFFC"]],"1f3fd":["1f44a-1f3fd",14,34,31,["\uD83D\uDC4A\uD83C\uDFFD"]],"1f3fe":["1f44a-1f3fe",14,35,31,["\uD83D\uDC4A\uD83C\uDFFE"]],"1f3ff":["1f44a-1f3ff",14,36,31,["\uD83D\uDC4A\uD83C\uDFFF"]]},
		"1f44b":{"1f3fb":["1f44b-1f3fb",14,38,31,["\uD83D\uDC4B\uD83C\uDFFB"]],"1f3fc":["1f44b-1f3fc",14,39,31,["\uD83D\uDC4B\uD83C\uDFFC"]],"1f3fd":["1f44b-1f3fd",14,40,31,["\uD83D\uDC4B\uD83C\uDFFD"]],"1f3fe":["1f44b-1f3fe",14,41,31,["\uD83D\uDC4B\uD83C\uDFFE"]],"1f3ff":["1f44b-1f3ff",14,42,31,["\uD83D\uDC4B\uD83C\uDFFF"]]},
		"1f44c":{"1f3fb":["1f44c-1f3fb",14,44,31,["\uD83D\uDC4C\uD83C\uDFFB"]],"1f3fc":["1f44c-1f3fc",14,45,31,["\uD83D\uDC4C\uD83C\uDFFC"]],"1f3fd":["1f44c-1f3fd",14,46,31,["\uD83D\uDC4C\uD83C\uDFFD"]],"1f3fe":["1f44c-1f3fe",14,47,31,["\uD83D\uDC4C\uD83C\uDFFE"]],"1f3ff":["1f44c-1f3ff",14,48,31,["\uD83D\uDC4C\uD83C\uDFFF"]]},
		"1f44d":{"1f3fb":["1f44d-1f3fb",14,50,31,["\uD83D\uDC4D\uD83C\uDFFB"]],"1f3fc":["1f44d-1f3fc",14,51,31,["\uD83D\uDC4D\uD83C\uDFFC"]],"1f3fd":["1f44d-1f3fd",15,0,31,["\uD83D\uDC4D\uD83C\uDFFD"]],"1f3fe":["1f44d-1f3fe",15,1,31,["\uD83D\uDC4D\uD83C\uDFFE"]],"1f3ff":["1f44d-1f3ff",15,2,31,["\uD83D\uDC4D\uD83C\uDFFF"]]},
		"1f44e":{"1f3fb":["1f44e-1f3fb",15,4,31,["\uD83D\uDC4E\uD83C\uDFFB"]],"1f3fc":["1f44e-1f3fc",15,5,31,["\uD83D\uDC4E\uD83C\uDFFC"]],"1f3fd":["1f44e-1f3fd",15,6,31,["\uD83D\uDC4E\uD83C\uDFFD"]],"1f3fe":["1f44e-1f3fe",15,7,31,["\uD83D\uDC4E\uD83C\uDFFE"]],"1f3ff":["1f44e-1f3ff",15,8,31,["\uD83D\uDC4E\uD83C\uDFFF"]]},
		"1f44f":{"1f3fb":["1f44f-1f3fb",15,10,31,["\uD83D\uDC4F\uD83C\uDFFB"]],"1f3fc":["1f44f-1f3fc",15,11,31,["\uD83D\uDC4F\uD83C\uDFFC"]],"1f3fd":["1f44f-1f3fd",15,12,31,["\uD83D\uDC4F\uD83C\uDFFD"]],"1f3fe":["1f44f-1f3fe",15,13,31,["\uD83D\uDC4F\uD83C\uDFFE"]],"1f3ff":["1f44f-1f3ff",15,14,31,["\uD83D\uDC4F\uD83C\uDFFF"]]},
		"1f450":{"1f3fb":["1f450-1f3fb",15,16,31,["\uD83D\uDC50\uD83C\uDFFB"]],"1f3fc":["1f450-1f3fc",15,17,31,["\uD83D\uDC50\uD83C\uDFFC"]],"1f3fd":["1f450-1f3fd",15,18,31,["\uD83D\uDC50\uD83C\uDFFD"]],"1f3fe":["1f450-1f3fe",15,19,31,["\uD83D\uDC50\uD83C\uDFFE"]],"1f3ff":["1f450-1f3ff",15,20,31,["\uD83D\uDC50\uD83C\uDFFF"]]},
		"1f466":{"1f3fb":["1f466-1f3fb",15,43,31,["\uD83D\uDC66\uD83C\uDFFB"]],"1f3fc":["1f466-1f3fc",15,44,31,["\uD83D\uDC66\uD83C\uDFFC"]],"1f3fd":["1f466-1f3fd",15,45,31,["\uD83D\uDC66\uD83C\uDFFD"]],"1f3fe":["1f466-1f3fe",15,46,31,["\uD83D\uDC66\uD83C\uDFFE"]],"1f3ff":["1f466-1f3ff",15,47,31,["\uD83D\uDC66\uD83C\uDFFF"]]},
		"1f467":{"1f3fb":["1f467-1f3fb",15,49,31,["\uD83D\uDC67\uD83C\uDFFB"]],"1f3fc":["1f467-1f3fc",15,50,31,["\uD83D\uDC67\uD83C\uDFFC"]],"1f3fd":["1f467-1f3fd",15,51,31,["\uD83D\uDC67\uD83C\uDFFD"]],"1f3fe":["1f467-1f3fe",16,0,31,["\uD83D\uDC67\uD83C\uDFFE"]],"1f3ff":["1f467-1f3ff",16,1,31,["\uD83D\uDC67\uD83C\uDFFF"]]},
		"1f468-200d-1f33e":{"1f3fb":["1f468-1f3fb-200d-1f33e",16,3,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f468-1f3fc-200d-1f33e",16,4,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f468-1f3fd-200d-1f33e",16,5,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f468-1f3fe-200d-1f33e",16,6,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f468-1f3ff-200d-1f33e",16,7,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f468-200d-1f373":{"1f3fb":["1f468-1f3fb-200d-1f373",16,9,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f468-1f3fc-200d-1f373",16,10,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f468-1f3fd-200d-1f373",16,11,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f468-1f3fe-200d-1f373",16,12,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f468-1f3ff-200d-1f373",16,13,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f468-200d-1f393":{"1f3fb":["1f468-1f3fb-200d-1f393",16,15,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f468-1f3fc-200d-1f393",16,16,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f468-1f3fd-200d-1f393",16,17,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f468-1f3fe-200d-1f393",16,18,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f468-1f3ff-200d-1f393",16,19,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f468-200d-1f3a4":{"1f3fb":["1f468-1f3fb-200d-1f3a4",16,21,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f468-1f3fc-200d-1f3a4",16,22,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f468-1f3fd-200d-1f3a4",16,23,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f468-1f3fe-200d-1f3a4",16,24,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f468-1f3ff-200d-1f3a4",16,25,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f468-200d-1f3a8":{"1f3fb":["1f468-1f3fb-200d-1f3a8",16,27,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f468-1f3fc-200d-1f3a8",16,28,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f468-1f3fd-200d-1f3a8",16,29,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f468-1f3fe-200d-1f3a8",16,30,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f468-1f3ff-200d-1f3a8",16,31,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f468-200d-1f3eb":{"1f3fb":["1f468-1f3fb-200d-1f3eb",16,33,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f468-1f3fc-200d-1f3eb",16,34,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f468-1f3fd-200d-1f3eb",16,35,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f468-1f3fe-200d-1f3eb",16,36,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f468-1f3ff-200d-1f3eb",16,37,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f468-200d-1f3ed":{"1f3fb":["1f468-1f3fb-200d-1f3ed",16,39,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f468-1f3fc-200d-1f3ed",16,40,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f468-1f3fd-200d-1f3ed",16,41,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f468-1f3fe-200d-1f3ed",16,42,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f468-1f3ff-200d-1f3ed",16,43,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f468-200d-1f4bb":{"1f3fb":["1f468-1f3fb-200d-1f4bb",17,8,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f468-1f3fc-200d-1f4bb",17,9,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f468-1f3fd-200d-1f4bb",17,10,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f468-1f3fe-200d-1f4bb",17,11,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f468-1f3ff-200d-1f4bb",17,12,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f468-200d-1f4bc":{"1f3fb":["1f468-1f3fb-200d-1f4bc",17,14,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f468-1f3fc-200d-1f4bc",17,15,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f468-1f3fd-200d-1f4bc",17,16,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f468-1f3fe-200d-1f4bc",17,17,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f468-1f3ff-200d-1f4bc",17,18,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f468-200d-1f527":{"1f3fb":["1f468-1f3fb-200d-1f527",17,20,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f468-1f3fc-200d-1f527",17,21,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f468-1f3fd-200d-1f527",17,22,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f468-1f3fe-200d-1f527",17,23,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f468-1f3ff-200d-1f527",17,24,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f468-200d-1f52c":{"1f3fb":["1f468-1f3fb-200d-1f52c",17,26,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f468-1f3fc-200d-1f52c",17,27,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f468-1f3fd-200d-1f52c",17,28,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f468-1f3fe-200d-1f52c",17,29,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f468-1f3ff-200d-1f52c",17,30,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f468-200d-1f680":{"1f3fb":["1f468-1f3fb-200d-1f680",17,32,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f468-1f3fc-200d-1f680",17,33,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f468-1f3fd-200d-1f680",17,34,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f468-1f3fe-200d-1f680",17,35,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f468-1f3ff-200d-1f680",17,36,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f468-200d-1f692":{"1f3fb":["1f468-1f3fb-200d-1f692",17,38,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f468-1f3fc-200d-1f692",17,39,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f468-1f3fd-200d-1f692",17,40,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f468-1f3fe-200d-1f692",17,41,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f468-1f3ff-200d-1f692",17,42,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f468-200d-2695-fe0f":{"1f3fb":["1f468-1f3fb-200d-2695-fe0f",17,44,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2695-fe0f",17,45,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2695-fe0f",17,46,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2695-fe0f",17,47,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2695-fe0f",17,48,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f468-200d-2696-fe0f":{"1f3fb":["1f468-1f3fb-200d-2696-fe0f",17,50,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2696-fe0f",17,51,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2696-fe0f",18,0,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2696-fe0f",18,1,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2696-fe0f",18,2,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f468-200d-2708-fe0f":{"1f3fb":["1f468-1f3fb-200d-2708-fe0f",18,4,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2708-fe0f",18,5,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2708-fe0f",18,6,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2708-fe0f",18,7,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2708-fe0f",18,8,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f468":{"1f3fb":["1f468-1f3fb",18,12,31,["\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc":["1f468-1f3fc",18,13,31,["\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd":["1f468-1f3fd",18,14,31,["\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe":["1f468-1f3fe",18,15,31,["\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff":["1f468-1f3ff",18,16,31,["\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f469-200d-1f33e":{"1f3fb":["1f469-1f3fb-200d-1f33e",18,18,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f469-1f3fc-200d-1f33e",18,19,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f469-1f3fd-200d-1f33e",18,20,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f469-1f3fe-200d-1f33e",18,21,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f469-1f3ff-200d-1f33e",18,22,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f469-200d-1f373":{"1f3fb":["1f469-1f3fb-200d-1f373",18,24,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f469-1f3fc-200d-1f373",18,25,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f469-1f3fd-200d-1f373",18,26,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f469-1f3fe-200d-1f373",18,27,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f469-1f3ff-200d-1f373",18,28,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f469-200d-1f393":{"1f3fb":["1f469-1f3fb-200d-1f393",18,30,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f469-1f3fc-200d-1f393",18,31,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f469-1f3fd-200d-1f393",18,32,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f469-1f3fe-200d-1f393",18,33,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f469-1f3ff-200d-1f393",18,34,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f469-200d-1f3a4":{"1f3fb":["1f469-1f3fb-200d-1f3a4",18,36,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f469-1f3fc-200d-1f3a4",18,37,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f469-1f3fd-200d-1f3a4",18,38,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f469-1f3fe-200d-1f3a4",18,39,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f469-1f3ff-200d-1f3a4",18,40,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f469-200d-1f3a8":{"1f3fb":["1f469-1f3fb-200d-1f3a8",18,42,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f469-1f3fc-200d-1f3a8",18,43,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f469-1f3fd-200d-1f3a8",18,44,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f469-1f3fe-200d-1f3a8",18,45,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f469-1f3ff-200d-1f3a8",18,46,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f469-200d-1f3eb":{"1f3fb":["1f469-1f3fb-200d-1f3eb",18,48,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f469-1f3fc-200d-1f3eb",18,49,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f469-1f3fd-200d-1f3eb",18,50,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f469-1f3fe-200d-1f3eb",18,51,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f469-1f3ff-200d-1f3eb",19,0,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f469-200d-1f3ed":{"1f3fb":["1f469-1f3fb-200d-1f3ed",19,2,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f469-1f3fc-200d-1f3ed",19,3,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f469-1f3fd-200d-1f3ed",19,4,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f469-1f3fe-200d-1f3ed",19,5,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f469-1f3ff-200d-1f3ed",19,6,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f469-200d-1f4bb":{"1f3fb":["1f469-1f3fb-200d-1f4bb",19,18,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f469-1f3fc-200d-1f4bb",19,19,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f469-1f3fd-200d-1f4bb",19,20,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f469-1f3fe-200d-1f4bb",19,21,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f469-1f3ff-200d-1f4bb",19,22,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f469-200d-1f4bc":{"1f3fb":["1f469-1f3fb-200d-1f4bc",19,24,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f469-1f3fc-200d-1f4bc",19,25,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f469-1f3fd-200d-1f4bc",19,26,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f469-1f3fe-200d-1f4bc",19,27,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f469-1f3ff-200d-1f4bc",19,28,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f469-200d-1f527":{"1f3fb":["1f469-1f3fb-200d-1f527",19,30,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f469-1f3fc-200d-1f527",19,31,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f469-1f3fd-200d-1f527",19,32,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f469-1f3fe-200d-1f527",19,33,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f469-1f3ff-200d-1f527",19,34,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f469-200d-1f52c":{"1f3fb":["1f469-1f3fb-200d-1f52c",19,36,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f469-1f3fc-200d-1f52c",19,37,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f469-1f3fd-200d-1f52c",19,38,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f469-1f3fe-200d-1f52c",19,39,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f469-1f3ff-200d-1f52c",19,40,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f469-200d-1f680":{"1f3fb":["1f469-1f3fb-200d-1f680",19,42,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f469-1f3fc-200d-1f680",19,43,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f469-1f3fd-200d-1f680",19,44,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f469-1f3fe-200d-1f680",19,45,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f469-1f3ff-200d-1f680",19,46,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f469-200d-1f692":{"1f3fb":["1f469-1f3fb-200d-1f692",19,48,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f469-1f3fc-200d-1f692",19,49,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f469-1f3fd-200d-1f692",19,50,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f469-1f3fe-200d-1f692",19,51,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f469-1f3ff-200d-1f692",20,0,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f469-200d-2695-fe0f":{"1f3fb":["1f469-1f3fb-200d-2695-fe0f",20,2,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2695-fe0f",20,3,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2695-fe0f",20,4,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2695-fe0f",20,5,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2695-fe0f",20,6,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f469-200d-2696-fe0f":{"1f3fb":["1f469-1f3fb-200d-2696-fe0f",20,8,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2696-fe0f",20,9,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2696-fe0f",20,10,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2696-fe0f",20,11,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2696-fe0f",20,12,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f469-200d-2708-fe0f":{"1f3fb":["1f469-1f3fb-200d-2708-fe0f",20,14,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2708-fe0f",20,15,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2708-fe0f",20,16,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2708-fe0f",20,17,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2708-fe0f",20,18,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f469":{"1f3fb":["1f469-1f3fb",20,24,31,["\uD83D\uDC69\uD83C\uDFFB"]],"1f3fc":["1f469-1f3fc",20,25,31,["\uD83D\uDC69\uD83C\uDFFC"]],"1f3fd":["1f469-1f3fd",20,26,31,["\uD83D\uDC69\uD83C\uDFFD"]],"1f3fe":["1f469-1f3fe",20,27,31,["\uD83D\uDC69\uD83C\uDFFE"]],"1f3ff":["1f469-1f3ff",20,28,31,["\uD83D\uDC69\uD83C\uDFFF"]]},
		"1f46e-200d-2640-fe0f":{"1f3fb":["1f46e-1f3fb-200d-2640-fe0f",20,34,7,["\uD83D\uDC6E\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f46e-1f3fc-200d-2640-fe0f",20,35,7,["\uD83D\uDC6E\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f46e-1f3fd-200d-2640-fe0f",20,36,7,["\uD83D\uDC6E\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f46e-1f3fe-200d-2640-fe0f",20,37,7,["\uD83D\uDC6E\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f46e-1f3ff-200d-2640-fe0f",20,38,7,["\uD83D\uDC6E\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f46e-200d-2642-fe0f":{"1f3fb":["1f46e-1f3fb-200d-2642-fe0f",20,40,7,["\uD83D\uDC6E\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFB"]],"1f3fc":["1f46e-1f3fc-200d-2642-fe0f",20,41,7,["\uD83D\uDC6E\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFC"]],"1f3fd":["1f46e-1f3fd-200d-2642-fe0f",20,42,7,["\uD83D\uDC6E\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFD"]],"1f3fe":["1f46e-1f3fe-200d-2642-fe0f",20,43,7,["\uD83D\uDC6E\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFE"]],"1f3ff":["1f46e-1f3ff-200d-2642-fe0f",20,44,7,["\uD83D\uDC6E\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFF"]]},
		"1f470":{"1f3fb":["1f470-1f3fb",21,3,31,["\uD83D\uDC70\uD83C\uDFFB"]],"1f3fc":["1f470-1f3fc",21,4,31,["\uD83D\uDC70\uD83C\uDFFC"]],"1f3fd":["1f470-1f3fd",21,5,31,["\uD83D\uDC70\uD83C\uDFFD"]],"1f3fe":["1f470-1f3fe",21,6,31,["\uD83D\uDC70\uD83C\uDFFE"]],"1f3ff":["1f470-1f3ff",21,7,31,["\uD83D\uDC70\uD83C\uDFFF"]]},
		"1f471-200d-2640-fe0f":{"1f3fb":["1f471-1f3fb-200d-2640-fe0f",21,9,7,["\uD83D\uDC71\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f471-1f3fc-200d-2640-fe0f",21,10,7,["\uD83D\uDC71\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f471-1f3fd-200d-2640-fe0f",21,11,7,["\uD83D\uDC71\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f471-1f3fe-200d-2640-fe0f",21,12,7,["\uD83D\uDC71\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f471-1f3ff-200d-2640-fe0f",21,13,7,["\uD83D\uDC71\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f471-200d-2642-fe0f":{"1f3fb":["1f471-1f3fb-200d-2642-fe0f",21,15,7,["\uD83D\uDC71\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFB"]],"1f3fc":["1f471-1f3fc-200d-2642-fe0f",21,16,7,["\uD83D\uDC71\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFC"]],"1f3fd":["1f471-1f3fd-200d-2642-fe0f",21,17,7,["\uD83D\uDC71\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFD"]],"1f3fe":["1f471-1f3fe-200d-2642-fe0f",21,18,7,["\uD83D\uDC71\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFE"]],"1f3ff":["1f471-1f3ff-200d-2642-fe0f",21,19,7,["\uD83D\uDC71\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFF"]]},
		"1f472":{"1f3fb":["1f472-1f3fb",21,27,31,["\uD83D\uDC72\uD83C\uDFFB"]],"1f3fc":["1f472-1f3fc",21,28,31,["\uD83D\uDC72\uD83C\uDFFC"]],"1f3fd":["1f472-1f3fd",21,29,31,["\uD83D\uDC72\uD83C\uDFFD"]],"1f3fe":["1f472-1f3fe",21,30,31,["\uD83D\uDC72\uD83C\uDFFE"]],"1f3ff":["1f472-1f3ff",21,31,31,["\uD83D\uDC72\uD83C\uDFFF"]]},
		"1f473-200d-2640-fe0f":{"1f3fb":["1f473-1f3fb-200d-2640-fe0f",21,33,7,["\uD83D\uDC73\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f473-1f3fc-200d-2640-fe0f",21,34,7,["\uD83D\uDC73\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f473-1f3fd-200d-2640-fe0f",21,35,7,["\uD83D\uDC73\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f473-1f3fe-200d-2640-fe0f",21,36,7,["\uD83D\uDC73\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f473-1f3ff-200d-2640-fe0f",21,37,7,["\uD83D\uDC73\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f473-200d-2642-fe0f":{"1f3fb":["1f473-1f3fb-200d-2642-fe0f",21,39,7,["\uD83D\uDC73\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFB"]],"1f3fc":["1f473-1f3fc-200d-2642-fe0f",21,40,7,["\uD83D\uDC73\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFC"]],"1f3fd":["1f473-1f3fd-200d-2642-fe0f",21,41,7,["\uD83D\uDC73\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFD"]],"1f3fe":["1f473-1f3fe-200d-2642-fe0f",21,42,7,["\uD83D\uDC73\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFE"]],"1f3ff":["1f473-1f3ff-200d-2642-fe0f",21,43,7,["\uD83D\uDC73\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFF"]]},
		"1f474":{"1f3fb":["1f474-1f3fb",21,51,31,["\uD83D\uDC74\uD83C\uDFFB"]],"1f3fc":["1f474-1f3fc",22,0,31,["\uD83D\uDC74\uD83C\uDFFC"]],"1f3fd":["1f474-1f3fd",22,1,31,["\uD83D\uDC74\uD83C\uDFFD"]],"1f3fe":["1f474-1f3fe",22,2,31,["\uD83D\uDC74\uD83C\uDFFE"]],"1f3ff":["1f474-1f3ff",22,3,31,["\uD83D\uDC74\uD83C\uDFFF"]]},
		"1f475":{"1f3fb":["1f475-1f3fb",22,5,31,["\uD83D\uDC75\uD83C\uDFFB"]],"1f3fc":["1f475-1f3fc",22,6,31,["\uD83D\uDC75\uD83C\uDFFC"]],"1f3fd":["1f475-1f3fd",22,7,31,["\uD83D\uDC75\uD83C\uDFFD"]],"1f3fe":["1f475-1f3fe",22,8,31,["\uD83D\uDC75\uD83C\uDFFE"]],"1f3ff":["1f475-1f3ff",22,9,31,["\uD83D\uDC75\uD83C\uDFFF"]]},
		"1f476":{"1f3fb":["1f476-1f3fb",22,11,31,["\uD83D\uDC76\uD83C\uDFFB"]],"1f3fc":["1f476-1f3fc",22,12,31,["\uD83D\uDC76\uD83C\uDFFC"]],"1f3fd":["1f476-1f3fd",22,13,31,["\uD83D\uDC76\uD83C\uDFFD"]],"1f3fe":["1f476-1f3fe",22,14,31,["\uD83D\uDC76\uD83C\uDFFE"]],"1f3ff":["1f476-1f3ff",22,15,31,["\uD83D\uDC76\uD83C\uDFFF"]]},
		"1f477-200d-2640-fe0f":{"1f3fb":["1f477-1f3fb-200d-2640-fe0f",22,17,7,["\uD83D\uDC77\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f477-1f3fc-200d-2640-fe0f",22,18,7,["\uD83D\uDC77\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f477-1f3fd-200d-2640-fe0f",22,19,7,["\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f477-1f3fe-200d-2640-fe0f",22,20,7,["\uD83D\uDC77\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f477-1f3ff-200d-2640-fe0f",22,21,7,["\uD83D\uDC77\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f477-200d-2642-fe0f":{"1f3fb":["1f477-1f3fb-200d-2642-fe0f",22,23,7,["\uD83D\uDC77\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFB"]],"1f3fc":["1f477-1f3fc-200d-2642-fe0f",22,24,7,["\uD83D\uDC77\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFC"]],"1f3fd":["1f477-1f3fd-200d-2642-fe0f",22,25,7,["\uD83D\uDC77\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFD"]],"1f3fe":["1f477-1f3fe-200d-2642-fe0f",22,26,7,["\uD83D\uDC77\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFE"]],"1f3ff":["1f477-1f3ff-200d-2642-fe0f",22,27,7,["\uD83D\uDC77\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFF"]]},
		"1f478":{"1f3fb":["1f478-1f3fb",22,35,31,["\uD83D\uDC78\uD83C\uDFFB"]],"1f3fc":["1f478-1f3fc",22,36,31,["\uD83D\uDC78\uD83C\uDFFC"]],"1f3fd":["1f478-1f3fd",22,37,31,["\uD83D\uDC78\uD83C\uDFFD"]],"1f3fe":["1f478-1f3fe",22,38,31,["\uD83D\uDC78\uD83C\uDFFE"]],"1f3ff":["1f478-1f3ff",22,39,31,["\uD83D\uDC78\uD83C\uDFFF"]]},
		"1f47c":{"1f3fb":["1f47c-1f3fb",22,44,31,["\uD83D\uDC7C\uD83C\uDFFB"]],"1f3fc":["1f47c-1f3fc",22,45,31,["\uD83D\uDC7C\uD83C\uDFFC"]],"1f3fd":["1f47c-1f3fd",22,46,31,["\uD83D\uDC7C\uD83C\uDFFD"]],"1f3fe":["1f47c-1f3fe",22,47,31,["\uD83D\uDC7C\uD83C\uDFFE"]],"1f3ff":["1f47c-1f3ff",22,48,31,["\uD83D\uDC7C\uD83C\uDFFF"]]},
		"1f481-200d-2640-fe0f":{"1f3fb":["1f481-1f3fb-200d-2640-fe0f",23,2,7,["\uD83D\uDC81\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFB"]],"1f3fc":["1f481-1f3fc-200d-2640-fe0f",23,3,7,["\uD83D\uDC81\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFC"]],"1f3fd":["1f481-1f3fd-200d-2640-fe0f",23,4,7,["\uD83D\uDC81\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFD"]],"1f3fe":["1f481-1f3fe-200d-2640-fe0f",23,5,7,["\uD83D\uDC81\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFE"]],"1f3ff":["1f481-1f3ff-200d-2640-fe0f",23,6,7,["\uD83D\uDC81\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFF"]]},
		"1f481-200d-2642-fe0f":{"1f3fb":["1f481-1f3fb-200d-2642-fe0f",23,8,7,["\uD83D\uDC81\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f481-1f3fc-200d-2642-fe0f",23,9,7,["\uD83D\uDC81\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f481-1f3fd-200d-2642-fe0f",23,10,7,["\uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f481-1f3fe-200d-2642-fe0f",23,11,7,["\uD83D\uDC81\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f481-1f3ff-200d-2642-fe0f",23,12,7,["\uD83D\uDC81\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f482-200d-2640-fe0f":{"1f3fb":["1f482-1f3fb-200d-2640-fe0f",23,20,7,["\uD83D\uDC82\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f482-1f3fc-200d-2640-fe0f",23,21,7,["\uD83D\uDC82\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f482-1f3fd-200d-2640-fe0f",23,22,7,["\uD83D\uDC82\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f482-1f3fe-200d-2640-fe0f",23,23,7,["\uD83D\uDC82\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f482-1f3ff-200d-2640-fe0f",23,24,7,["\uD83D\uDC82\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f482-200d-2642-fe0f":{"1f3fb":["1f482-1f3fb-200d-2642-fe0f",23,26,7,["\uD83D\uDC82\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFB"]],"1f3fc":["1f482-1f3fc-200d-2642-fe0f",23,27,7,["\uD83D\uDC82\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFC"]],"1f3fd":["1f482-1f3fd-200d-2642-fe0f",23,28,7,["\uD83D\uDC82\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFD"]],"1f3fe":["1f482-1f3fe-200d-2642-fe0f",23,29,7,["\uD83D\uDC82\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFE"]],"1f3ff":["1f482-1f3ff-200d-2642-fe0f",23,30,7,["\uD83D\uDC82\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFF"]]},
		"1f483":{"1f3fb":["1f483-1f3fb",23,38,31,["\uD83D\uDC83\uD83C\uDFFB"]],"1f3fc":["1f483-1f3fc",23,39,31,["\uD83D\uDC83\uD83C\uDFFC"]],"1f3fd":["1f483-1f3fd",23,40,31,["\uD83D\uDC83\uD83C\uDFFD"]],"1f3fe":["1f483-1f3fe",23,41,31,["\uD83D\uDC83\uD83C\uDFFE"]],"1f3ff":["1f483-1f3ff",23,42,31,["\uD83D\uDC83\uD83C\uDFFF"]]},
		"1f485":{"1f3fb":["1f485-1f3fb",23,45,31,["\uD83D\uDC85\uD83C\uDFFB"]],"1f3fc":["1f485-1f3fc",23,46,31,["\uD83D\uDC85\uD83C\uDFFC"]],"1f3fd":["1f485-1f3fd",23,47,31,["\uD83D\uDC85\uD83C\uDFFD"]],"1f3fe":["1f485-1f3fe",23,48,31,["\uD83D\uDC85\uD83C\uDFFE"]],"1f3ff":["1f485-1f3ff",23,49,31,["\uD83D\uDC85\uD83C\uDFFF"]]},
		"1f486-200d-2640-fe0f":{"1f3fb":["1f486-1f3fb-200d-2640-fe0f",23,51,7,["\uD83D\uDC86\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFB"]],"1f3fc":["1f486-1f3fc-200d-2640-fe0f",24,0,7,["\uD83D\uDC86\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFC"]],"1f3fd":["1f486-1f3fd-200d-2640-fe0f",24,1,7,["\uD83D\uDC86\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFD"]],"1f3fe":["1f486-1f3fe-200d-2640-fe0f",24,2,7,["\uD83D\uDC86\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFE"]],"1f3ff":["1f486-1f3ff-200d-2640-fe0f",24,3,7,["\uD83D\uDC86\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFF"]]},
		"1f486-200d-2642-fe0f":{"1f3fb":["1f486-1f3fb-200d-2642-fe0f",24,5,7,["\uD83D\uDC86\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f486-1f3fc-200d-2642-fe0f",24,6,7,["\uD83D\uDC86\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f486-1f3fd-200d-2642-fe0f",24,7,7,["\uD83D\uDC86\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f486-1f3fe-200d-2642-fe0f",24,8,7,["\uD83D\uDC86\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f486-1f3ff-200d-2642-fe0f",24,9,7,["\uD83D\uDC86\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f487-200d-2640-fe0f":{"1f3fb":["1f487-1f3fb-200d-2640-fe0f",24,17,7,["\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFB"]],"1f3fc":["1f487-1f3fc-200d-2640-fe0f",24,18,7,["\uD83D\uDC87\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFC"]],"1f3fd":["1f487-1f3fd-200d-2640-fe0f",24,19,7,["\uD83D\uDC87\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFD"]],"1f3fe":["1f487-1f3fe-200d-2640-fe0f",24,20,7,["\uD83D\uDC87\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFE"]],"1f3ff":["1f487-1f3ff-200d-2640-fe0f",24,21,7,["\uD83D\uDC87\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFF"]]},
		"1f487-200d-2642-fe0f":{"1f3fb":["1f487-1f3fb-200d-2642-fe0f",24,23,7,["\uD83D\uDC87\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f487-1f3fc-200d-2642-fe0f",24,24,7,["\uD83D\uDC87\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f487-1f3fd-200d-2642-fe0f",24,25,7,["\uD83D\uDC87\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f487-1f3fe-200d-2642-fe0f",24,26,7,["\uD83D\uDC87\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f487-1f3ff-200d-2642-fe0f",24,27,7,["\uD83D\uDC87\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f4aa":{"1f3fb":["1f4aa-1f3fb",25,17,31,["\uD83D\uDCAA\uD83C\uDFFB"]],"1f3fc":["1f4aa-1f3fc",25,18,31,["\uD83D\uDCAA\uD83C\uDFFC"]],"1f3fd":["1f4aa-1f3fd",25,19,31,["\uD83D\uDCAA\uD83C\uDFFD"]],"1f3fe":["1f4aa-1f3fe",25,20,31,["\uD83D\uDCAA\uD83C\uDFFE"]],"1f3ff":["1f4aa-1f3ff",25,21,31,["\uD83D\uDCAA\uD83C\uDFFF"]]},
		"1f574-fe0f":{"1f3fb":["1f574-1f3fb",28,46,15,["\uD83D\uDD74\uD83C\uDFFB"]],"1f3fc":["1f574-1f3fc",28,47,15,["\uD83D\uDD74\uD83C\uDFFC"]],"1f3fd":["1f574-1f3fd",28,48,15,["\uD83D\uDD74\uD83C\uDFFD"]],"1f3fe":["1f574-1f3fe",28,49,15,["\uD83D\uDD74\uD83C\uDFFE"]],"1f3ff":["1f574-1f3ff",28,50,15,["\uD83D\uDD74\uD83C\uDFFF"]]},
		"1f575-fe0f-200d-2640-fe0f":{"1f3fb":["1f575-1f3fb-200d-2640-fe0f",29,0,7,["\uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f575-1f3fc-200d-2640-fe0f",29,1,7,["\uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f575-1f3fd-200d-2640-fe0f",29,2,7,["\uD83D\uDD75\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f575-1f3fe-200d-2640-fe0f",29,3,7,["\uD83D\uDD75\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f575-1f3ff-200d-2640-fe0f",29,4,7,["\uD83D\uDD75\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f575-fe0f-200d-2642-fe0f":{"1f3fb":["1f575-1f3fb-200d-2642-fe0f",29,6,7,["\uD83D\uDD75\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFB"]],"1f3fc":["1f575-1f3fc-200d-2642-fe0f",29,7,7,["\uD83D\uDD75\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFC"]],"1f3fd":["1f575-1f3fd-200d-2642-fe0f",29,8,7,["\uD83D\uDD75\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFD"]],"1f3fe":["1f575-1f3fe-200d-2642-fe0f",29,9,7,["\uD83D\uDD75\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFE"]],"1f3ff":["1f575-1f3ff-200d-2642-fe0f",29,10,7,["\uD83D\uDD75\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFF"]]},
		"1f57a":{"1f3fb":["1f57a-1f3fb",29,22,15,["\uD83D\uDD7A\uD83C\uDFFB"]],"1f3fc":["1f57a-1f3fc",29,23,15,["\uD83D\uDD7A\uD83C\uDFFC"]],"1f3fd":["1f57a-1f3fd",29,24,15,["\uD83D\uDD7A\uD83C\uDFFD"]],"1f3fe":["1f57a-1f3fe",29,25,15,["\uD83D\uDD7A\uD83C\uDFFE"]],"1f3ff":["1f57a-1f3ff",29,26,15,["\uD83D\uDD7A\uD83C\uDFFF"]]},
		"1f590-fe0f":{"1f3fb":["1f590-1f3fb",29,33,15,["\uD83D\uDD90\uD83C\uDFFB"]],"1f3fc":["1f590-1f3fc",29,34,15,["\uD83D\uDD90\uD83C\uDFFC"]],"1f3fd":["1f590-1f3fd",29,35,15,["\uD83D\uDD90\uD83C\uDFFD"]],"1f3fe":["1f590-1f3fe",29,36,15,["\uD83D\uDD90\uD83C\uDFFE"]],"1f3ff":["1f590-1f3ff",29,37,15,["\uD83D\uDD90\uD83C\uDFFF"]]},
		"1f595":{"1f3fb":["1f595-1f3fb",29,39,15,["\uD83D\uDD95\uD83C\uDFFB"]],"1f3fc":["1f595-1f3fc",29,40,15,["\uD83D\uDD95\uD83C\uDFFC"]],"1f3fd":["1f595-1f3fd",29,41,15,["\uD83D\uDD95\uD83C\uDFFD"]],"1f3fe":["1f595-1f3fe",29,42,15,["\uD83D\uDD95\uD83C\uDFFE"]],"1f3ff":["1f595-1f3ff",29,43,15,["\uD83D\uDD95\uD83C\uDFFF"]]},
		"1f596":{"1f3fb":["1f596-1f3fb",29,45,15,["\uD83D\uDD96\uD83C\uDFFB"]],"1f3fc":["1f596-1f3fc",29,46,15,["\uD83D\uDD96\uD83C\uDFFC"]],"1f3fd":["1f596-1f3fd",29,47,15,["\uD83D\uDD96\uD83C\uDFFD"]],"1f3fe":["1f596-1f3fe",29,48,15,["\uD83D\uDD96\uD83C\uDFFE"]],"1f3ff":["1f596-1f3ff",29,49,15,["\uD83D\uDD96\uD83C\uDFFF"]]},
		"1f645-200d-2640-fe0f":{"1f3fb":["1f645-1f3fb-200d-2640-fe0f",31,42,7,["\uD83D\uDE45\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFB"]],"1f3fc":["1f645-1f3fc-200d-2640-fe0f",31,43,7,["\uD83D\uDE45\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFC"]],"1f3fd":["1f645-1f3fd-200d-2640-fe0f",31,44,7,["\uD83D\uDE45\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFD"]],"1f3fe":["1f645-1f3fe-200d-2640-fe0f",31,45,7,["\uD83D\uDE45\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFE"]],"1f3ff":["1f645-1f3ff-200d-2640-fe0f",31,46,7,["\uD83D\uDE45\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFF"]]},
		"1f645-200d-2642-fe0f":{"1f3fb":["1f645-1f3fb-200d-2642-fe0f",31,48,7,["\uD83D\uDE45\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f645-1f3fc-200d-2642-fe0f",31,49,7,["\uD83D\uDE45\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f645-1f3fd-200d-2642-fe0f",31,50,7,["\uD83D\uDE45\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f645-1f3fe-200d-2642-fe0f",31,51,7,["\uD83D\uDE45\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f645-1f3ff-200d-2642-fe0f",32,0,7,["\uD83D\uDE45\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f646-200d-2640-fe0f":{"1f3fb":["1f646-1f3fb-200d-2640-fe0f",32,8,7,["\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFB"]],"1f3fc":["1f646-1f3fc-200d-2640-fe0f",32,9,7,["\uD83D\uDE46\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFC"]],"1f3fd":["1f646-1f3fd-200d-2640-fe0f",32,10,7,["\uD83D\uDE46\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFD"]],"1f3fe":["1f646-1f3fe-200d-2640-fe0f",32,11,7,["\uD83D\uDE46\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFE"]],"1f3ff":["1f646-1f3ff-200d-2640-fe0f",32,12,7,["\uD83D\uDE46\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFF"]]},
		"1f646-200d-2642-fe0f":{"1f3fb":["1f646-1f3fb-200d-2642-fe0f",32,14,7,["\uD83D\uDE46\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f646-1f3fc-200d-2642-fe0f",32,15,7,["\uD83D\uDE46\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f646-1f3fd-200d-2642-fe0f",32,16,7,["\uD83D\uDE46\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f646-1f3fe-200d-2642-fe0f",32,17,7,["\uD83D\uDE46\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f646-1f3ff-200d-2642-fe0f",32,18,7,["\uD83D\uDE46\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f647-200d-2640-fe0f":{"1f3fb":["1f647-1f3fb-200d-2640-fe0f",32,26,7,["\uD83D\uDE47\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f647-1f3fc-200d-2640-fe0f",32,27,7,["\uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f647-1f3fd-200d-2640-fe0f",32,28,7,["\uD83D\uDE47\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f647-1f3fe-200d-2640-fe0f",32,29,7,["\uD83D\uDE47\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f647-1f3ff-200d-2640-fe0f",32,30,7,["\uD83D\uDE47\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f647-200d-2642-fe0f":{"1f3fb":["1f647-1f3fb-200d-2642-fe0f",32,32,7,["\uD83D\uDE47\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFB"]],"1f3fc":["1f647-1f3fc-200d-2642-fe0f",32,33,7,["\uD83D\uDE47\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFC"]],"1f3fd":["1f647-1f3fd-200d-2642-fe0f",32,34,7,["\uD83D\uDE47\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFD"]],"1f3fe":["1f647-1f3fe-200d-2642-fe0f",32,35,7,["\uD83D\uDE47\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFE"]],"1f3ff":["1f647-1f3ff-200d-2642-fe0f",32,36,7,["\uD83D\uDE47\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFF"]]},
		"1f64b-200d-2640-fe0f":{"1f3fb":["1f64b-1f3fb-200d-2640-fe0f",32,47,7,["\uD83D\uDE4B\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFB"]],"1f3fc":["1f64b-1f3fc-200d-2640-fe0f",32,48,7,["\uD83D\uDE4B\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFC"]],"1f3fd":["1f64b-1f3fd-200d-2640-fe0f",32,49,7,["\uD83D\uDE4B\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFD"]],"1f3fe":["1f64b-1f3fe-200d-2640-fe0f",32,50,7,["\uD83D\uDE4B\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFE"]],"1f3ff":["1f64b-1f3ff-200d-2640-fe0f",32,51,7,["\uD83D\uDE4B\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFF"]]},
		"1f64b-200d-2642-fe0f":{"1f3fb":["1f64b-1f3fb-200d-2642-fe0f",33,1,7,["\uD83D\uDE4B\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64b-1f3fc-200d-2642-fe0f",33,2,7,["\uD83D\uDE4B\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64b-1f3fd-200d-2642-fe0f",33,3,7,["\uD83D\uDE4B\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64b-1f3fe-200d-2642-fe0f",33,4,7,["\uD83D\uDE4B\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64b-1f3ff-200d-2642-fe0f",33,5,7,["\uD83D\uDE4B\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64c":{"1f3fb":["1f64c-1f3fb",33,13,31,["\uD83D\uDE4C\uD83C\uDFFB"]],"1f3fc":["1f64c-1f3fc",33,14,31,["\uD83D\uDE4C\uD83C\uDFFC"]],"1f3fd":["1f64c-1f3fd",33,15,31,["\uD83D\uDE4C\uD83C\uDFFD"]],"1f3fe":["1f64c-1f3fe",33,16,31,["\uD83D\uDE4C\uD83C\uDFFE"]],"1f3ff":["1f64c-1f3ff",33,17,31,["\uD83D\uDE4C\uD83C\uDFFF"]]},
		"1f64d-200d-2640-fe0f":{"1f3fb":["1f64d-1f3fb-200d-2640-fe0f",33,19,7,["\uD83D\uDE4D\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFB"]],"1f3fc":["1f64d-1f3fc-200d-2640-fe0f",33,20,7,["\uD83D\uDE4D\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFC"]],"1f3fd":["1f64d-1f3fd-200d-2640-fe0f",33,21,7,["\uD83D\uDE4D\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFD"]],"1f3fe":["1f64d-1f3fe-200d-2640-fe0f",33,22,7,["\uD83D\uDE4D\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFE"]],"1f3ff":["1f64d-1f3ff-200d-2640-fe0f",33,23,7,["\uD83D\uDE4D\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFF"]]},
		"1f64d-200d-2642-fe0f":{"1f3fb":["1f64d-1f3fb-200d-2642-fe0f",33,25,7,["\uD83D\uDE4D\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64d-1f3fc-200d-2642-fe0f",33,26,7,["\uD83D\uDE4D\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64d-1f3fd-200d-2642-fe0f",33,27,7,["\uD83D\uDE4D\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64d-1f3fe-200d-2642-fe0f",33,28,7,["\uD83D\uDE4D\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64d-1f3ff-200d-2642-fe0f",33,29,7,["\uD83D\uDE4D\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64e-200d-2640-fe0f":{"1f3fb":["1f64e-1f3fb-200d-2640-fe0f",33,37,7,["\uD83D\uDE4E\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFB"]],"1f3fc":["1f64e-1f3fc-200d-2640-fe0f",33,38,7,["\uD83D\uDE4E\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFC"]],"1f3fd":["1f64e-1f3fd-200d-2640-fe0f",33,39,7,["\uD83D\uDE4E\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFD"]],"1f3fe":["1f64e-1f3fe-200d-2640-fe0f",33,40,7,["\uD83D\uDE4E\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFE"]],"1f3ff":["1f64e-1f3ff-200d-2640-fe0f",33,41,7,["\uD83D\uDE4E\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFF"]]},
		"1f64e-200d-2642-fe0f":{"1f3fb":["1f64e-1f3fb-200d-2642-fe0f",33,43,7,["\uD83D\uDE4E\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64e-1f3fc-200d-2642-fe0f",33,44,7,["\uD83D\uDE4E\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64e-1f3fd-200d-2642-fe0f",33,45,7,["\uD83D\uDE4E\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64e-1f3fe-200d-2642-fe0f",33,46,7,["\uD83D\uDE4E\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64e-1f3ff-200d-2642-fe0f",33,47,7,["\uD83D\uDE4E\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64f":{"1f3fb":["1f64f-1f3fb",34,3,31,["\uD83D\uDE4F\uD83C\uDFFB"]],"1f3fc":["1f64f-1f3fc",34,4,31,["\uD83D\uDE4F\uD83C\uDFFC"]],"1f3fd":["1f64f-1f3fd",34,5,31,["\uD83D\uDE4F\uD83C\uDFFD"]],"1f3fe":["1f64f-1f3fe",34,6,31,["\uD83D\uDE4F\uD83C\uDFFE"]],"1f3ff":["1f64f-1f3ff",34,7,31,["\uD83D\uDE4F\uD83C\uDFFF"]]},
		"1f6a3-200d-2640-fe0f":{"1f3fb":["1f6a3-1f3fb-200d-2640-fe0f",34,44,7,["\uD83D\uDEA3\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6a3-1f3fc-200d-2640-fe0f",34,45,7,["\uD83D\uDEA3\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6a3-1f3fd-200d-2640-fe0f",34,46,7,["\uD83D\uDEA3\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6a3-1f3fe-200d-2640-fe0f",34,47,7,["\uD83D\uDEA3\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6a3-1f3ff-200d-2640-fe0f",34,48,7,["\uD83D\uDEA3\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6a3-200d-2642-fe0f":{"1f3fb":["1f6a3-1f3fb-200d-2642-fe0f",34,50,7,["\uD83D\uDEA3\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFB"]],"1f3fc":["1f6a3-1f3fc-200d-2642-fe0f",34,51,7,["\uD83D\uDEA3\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFC"]],"1f3fd":["1f6a3-1f3fd-200d-2642-fe0f",35,0,7,["\uD83D\uDEA3\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFD"]],"1f3fe":["1f6a3-1f3fe-200d-2642-fe0f",35,1,7,["\uD83D\uDEA3\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFE"]],"1f3ff":["1f6a3-1f3ff-200d-2642-fe0f",35,2,7,["\uD83D\uDEA3\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFF"]]},
		"1f6b4-200d-2640-fe0f":{"1f3fb":["1f6b4-1f3fb-200d-2640-fe0f",35,26,7,["\uD83D\uDEB4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b4-1f3fc-200d-2640-fe0f",35,27,7,["\uD83D\uDEB4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b4-1f3fd-200d-2640-fe0f",35,28,7,["\uD83D\uDEB4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b4-1f3fe-200d-2640-fe0f",35,29,7,["\uD83D\uDEB4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b4-1f3ff-200d-2640-fe0f",35,30,7,["\uD83D\uDEB4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b4-200d-2642-fe0f":{"1f3fb":["1f6b4-1f3fb-200d-2642-fe0f",35,32,7,["\uD83D\uDEB4\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFB"]],"1f3fc":["1f6b4-1f3fc-200d-2642-fe0f",35,33,7,["\uD83D\uDEB4\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFC"]],"1f3fd":["1f6b4-1f3fd-200d-2642-fe0f",35,34,7,["\uD83D\uDEB4\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFD"]],"1f3fe":["1f6b4-1f3fe-200d-2642-fe0f",35,35,7,["\uD83D\uDEB4\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFE"]],"1f3ff":["1f6b4-1f3ff-200d-2642-fe0f",35,36,7,["\uD83D\uDEB4\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFF"]]},
		"1f6b5-200d-2640-fe0f":{"1f3fb":["1f6b5-1f3fb-200d-2640-fe0f",35,44,7,["\uD83D\uDEB5\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b5-1f3fc-200d-2640-fe0f",35,45,7,["\uD83D\uDEB5\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b5-1f3fd-200d-2640-fe0f",35,46,7,["\uD83D\uDEB5\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b5-1f3fe-200d-2640-fe0f",35,47,7,["\uD83D\uDEB5\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b5-1f3ff-200d-2640-fe0f",35,48,7,["\uD83D\uDEB5\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b5-200d-2642-fe0f":{"1f3fb":["1f6b5-1f3fb-200d-2642-fe0f",35,50,7,["\uD83D\uDEB5\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFB"]],"1f3fc":["1f6b5-1f3fc-200d-2642-fe0f",35,51,7,["\uD83D\uDEB5\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFC"]],"1f3fd":["1f6b5-1f3fd-200d-2642-fe0f",36,0,7,["\uD83D\uDEB5\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFD"]],"1f3fe":["1f6b5-1f3fe-200d-2642-fe0f",36,1,7,["\uD83D\uDEB5\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFE"]],"1f3ff":["1f6b5-1f3ff-200d-2642-fe0f",36,2,7,["\uD83D\uDEB5\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFF"]]},
		"1f6b6-200d-2640-fe0f":{"1f3fb":["1f6b6-1f3fb-200d-2640-fe0f",36,10,7,["\uD83D\uDEB6\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b6-1f3fc-200d-2640-fe0f",36,11,7,["\uD83D\uDEB6\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b6-1f3fd-200d-2640-fe0f",36,12,7,["\uD83D\uDEB6\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b6-1f3fe-200d-2640-fe0f",36,13,7,["\uD83D\uDEB6\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b6-1f3ff-200d-2640-fe0f",36,14,7,["\uD83D\uDEB6\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b6-200d-2642-fe0f":{"1f3fb":["1f6b6-1f3fb-200d-2642-fe0f",36,16,7,["\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFB"]],"1f3fc":["1f6b6-1f3fc-200d-2642-fe0f",36,17,7,["\uD83D\uDEB6\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFC"]],"1f3fd":["1f6b6-1f3fd-200d-2642-fe0f",36,18,7,["\uD83D\uDEB6\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFD"]],"1f3fe":["1f6b6-1f3fe-200d-2642-fe0f",36,19,7,["\uD83D\uDEB6\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFE"]],"1f3ff":["1f6b6-1f3ff-200d-2642-fe0f",36,20,7,["\uD83D\uDEB6\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFF"]]},
		"1f6c0":{"1f3fb":["1f6c0-1f3fb",36,37,31,["\uD83D\uDEC0\uD83C\uDFFB"]],"1f3fc":["1f6c0-1f3fc",36,38,31,["\uD83D\uDEC0\uD83C\uDFFC"]],"1f3fd":["1f6c0-1f3fd",36,39,31,["\uD83D\uDEC0\uD83C\uDFFD"]],"1f3fe":["1f6c0-1f3fe",36,40,31,["\uD83D\uDEC0\uD83C\uDFFE"]],"1f3ff":["1f6c0-1f3ff",36,41,31,["\uD83D\uDEC0\uD83C\uDFFF"]]},
		"1f6cc":{"1f3fb":["1f6cc-1f3fb",36,49,15,["\uD83D\uDECC\uD83C\uDFFB"]],"1f3fc":["1f6cc-1f3fc",36,50,15,["\uD83D\uDECC\uD83C\uDFFC"]],"1f3fd":["1f6cc-1f3fd",36,51,15,["\uD83D\uDECC\uD83C\uDFFD"]],"1f3fe":["1f6cc-1f3fe",37,0,15,["\uD83D\uDECC\uD83C\uDFFE"]],"1f3ff":["1f6cc-1f3ff",37,1,15,["\uD83D\uDECC\uD83C\uDFFF"]]},
		"1f918":{"1f3fb":["1f918-1f3fb",37,33,15,["\uD83E\uDD18\uD83C\uDFFB"]],"1f3fc":["1f918-1f3fc",37,34,15,["\uD83E\uDD18\uD83C\uDFFC"]],"1f3fd":["1f918-1f3fd",37,35,15,["\uD83E\uDD18\uD83C\uDFFD"]],"1f3fe":["1f918-1f3fe",37,36,15,["\uD83E\uDD18\uD83C\uDFFE"]],"1f3ff":["1f918-1f3ff",37,37,15,["\uD83E\uDD18\uD83C\uDFFF"]]},
		"1f919":{"1f3fb":["1f919-1f3fb",37,39,15,["\uD83E\uDD19\uD83C\uDFFB"]],"1f3fc":["1f919-1f3fc",37,40,15,["\uD83E\uDD19\uD83C\uDFFC"]],"1f3fd":["1f919-1f3fd",37,41,15,["\uD83E\uDD19\uD83C\uDFFD"]],"1f3fe":["1f919-1f3fe",37,42,15,["\uD83E\uDD19\uD83C\uDFFE"]],"1f3ff":["1f919-1f3ff",37,43,15,["\uD83E\uDD19\uD83C\uDFFF"]]},
		"1f91a":{"1f3fb":["1f91a-1f3fb",37,45,15,["\uD83E\uDD1A\uD83C\uDFFB"]],"1f3fc":["1f91a-1f3fc",37,46,15,["\uD83E\uDD1A\uD83C\uDFFC"]],"1f3fd":["1f91a-1f3fd",37,47,15,["\uD83E\uDD1A\uD83C\uDFFD"]],"1f3fe":["1f91a-1f3fe",37,48,15,["\uD83E\uDD1A\uD83C\uDFFE"]],"1f3ff":["1f91a-1f3ff",37,49,15,["\uD83E\uDD1A\uD83C\uDFFF"]]},
		"1f91b":{"1f3fb":["1f91b-1f3fb",37,51,15,["\uD83E\uDD1B\uD83C\uDFFB"]],"1f3fc":["1f91b-1f3fc",38,0,15,["\uD83E\uDD1B\uD83C\uDFFC"]],"1f3fd":["1f91b-1f3fd",38,1,15,["\uD83E\uDD1B\uD83C\uDFFD"]],"1f3fe":["1f91b-1f3fe",38,2,15,["\uD83E\uDD1B\uD83C\uDFFE"]],"1f3ff":["1f91b-1f3ff",38,3,15,["\uD83E\uDD1B\uD83C\uDFFF"]]},
		"1f91c":{"1f3fb":["1f91c-1f3fb",38,5,15,["\uD83E\uDD1C\uD83C\uDFFB"]],"1f3fc":["1f91c-1f3fc",38,6,15,["\uD83E\uDD1C\uD83C\uDFFC"]],"1f3fd":["1f91c-1f3fd",38,7,15,["\uD83E\uDD1C\uD83C\uDFFD"]],"1f3fe":["1f91c-1f3fe",38,8,15,["\uD83E\uDD1C\uD83C\uDFFE"]],"1f3ff":["1f91c-1f3ff",38,9,15,["\uD83E\uDD1C\uD83C\uDFFF"]]},
		"1f91e":{"1f3fb":["1f91e-1f3fb",38,12,15,["\uD83E\uDD1E\uD83C\uDFFB"]],"1f3fc":["1f91e-1f3fc",38,13,15,["\uD83E\uDD1E\uD83C\uDFFC"]],"1f3fd":["1f91e-1f3fd",38,14,15,["\uD83E\uDD1E\uD83C\uDFFD"]],"1f3fe":["1f91e-1f3fe",38,15,15,["\uD83E\uDD1E\uD83C\uDFFE"]],"1f3ff":["1f91e-1f3ff",38,16,15,["\uD83E\uDD1E\uD83C\uDFFF"]]},
		"1f91f":{"1f3fb":["1f91f-1f3fb",38,18,15,["\uD83E\uDD1F\uD83C\uDFFB"]],"1f3fc":["1f91f-1f3fc",38,19,15,["\uD83E\uDD1F\uD83C\uDFFC"]],"1f3fd":["1f91f-1f3fd",38,20,15,["\uD83E\uDD1F\uD83C\uDFFD"]],"1f3fe":["1f91f-1f3fe",38,21,15,["\uD83E\uDD1F\uD83C\uDFFE"]],"1f3ff":["1f91f-1f3ff",38,22,15,["\uD83E\uDD1F\uD83C\uDFFF"]]},
		"1f926-200d-2640-fe0f":{"1f3fb":["1f926-1f3fb-200d-2640-fe0f",38,30,7,["\uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f926-1f3fc-200d-2640-fe0f",38,31,7,["\uD83E\uDD26\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f926-1f3fd-200d-2640-fe0f",38,32,7,["\uD83E\uDD26\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f926-1f3fe-200d-2640-fe0f",38,33,7,["\uD83E\uDD26\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f926-1f3ff-200d-2640-fe0f",38,34,7,["\uD83E\uDD26\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f926-200d-2642-fe0f":{"1f3fb":["1f926-1f3fb-200d-2642-fe0f",38,36,7,["\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f926-1f3fc-200d-2642-fe0f",38,37,7,["\uD83E\uDD26\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f926-1f3fd-200d-2642-fe0f",38,38,7,["\uD83E\uDD26\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f926-1f3fe-200d-2642-fe0f",38,39,7,["\uD83E\uDD26\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f926-1f3ff-200d-2642-fe0f",38,40,7,["\uD83E\uDD26\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f926":{"1f3fb":["1f926-1f3fb",38,42,7,["\uD83E\uDD26\uD83C\uDFFB"]],"1f3fc":["1f926-1f3fc",38,43,7,["\uD83E\uDD26\uD83C\uDFFC"]],"1f3fd":["1f926-1f3fd",38,44,7,["\uD83E\uDD26\uD83C\uDFFD"]],"1f3fe":["1f926-1f3fe",38,45,7,["\uD83E\uDD26\uD83C\uDFFE"]],"1f3ff":["1f926-1f3ff",38,46,7,["\uD83E\uDD26\uD83C\uDFFF"]]},
		"1f930":{"1f3fb":["1f930-1f3fb",39,5,15,["\uD83E\uDD30\uD83C\uDFFB"]],"1f3fc":["1f930-1f3fc",39,6,15,["\uD83E\uDD30\uD83C\uDFFC"]],"1f3fd":["1f930-1f3fd",39,7,15,["\uD83E\uDD30\uD83C\uDFFD"]],"1f3fe":["1f930-1f3fe",39,8,15,["\uD83E\uDD30\uD83C\uDFFE"]],"1f3ff":["1f930-1f3ff",39,9,15,["\uD83E\uDD30\uD83C\uDFFF"]]},
		"1f931":{"1f3fb":["1f931-1f3fb",39,11,15,["\uD83E\uDD31\uD83C\uDFFB"]],"1f3fc":["1f931-1f3fc",39,12,15,["\uD83E\uDD31\uD83C\uDFFC"]],"1f3fd":["1f931-1f3fd",39,13,15,["\uD83E\uDD31\uD83C\uDFFD"]],"1f3fe":["1f931-1f3fe",39,14,15,["\uD83E\uDD31\uD83C\uDFFE"]],"1f3ff":["1f931-1f3ff",39,15,15,["\uD83E\uDD31\uD83C\uDFFF"]]},
		"1f932":{"1f3fb":["1f932-1f3fb",39,17,15,["\uD83E\uDD32\uD83C\uDFFB"]],"1f3fc":["1f932-1f3fc",39,18,15,["\uD83E\uDD32\uD83C\uDFFC"]],"1f3fd":["1f932-1f3fd",39,19,15,["\uD83E\uDD32\uD83C\uDFFD"]],"1f3fe":["1f932-1f3fe",39,20,15,["\uD83E\uDD32\uD83C\uDFFE"]],"1f3ff":["1f932-1f3ff",39,21,15,["\uD83E\uDD32\uD83C\uDFFF"]]},
		"1f933":{"1f3fb":["1f933-1f3fb",39,23,15,["\uD83E\uDD33\uD83C\uDFFB"]],"1f3fc":["1f933-1f3fc",39,24,15,["\uD83E\uDD33\uD83C\uDFFC"]],"1f3fd":["1f933-1f3fd",39,25,15,["\uD83E\uDD33\uD83C\uDFFD"]],"1f3fe":["1f933-1f3fe",39,26,15,["\uD83E\uDD33\uD83C\uDFFE"]],"1f3ff":["1f933-1f3ff",39,27,15,["\uD83E\uDD33\uD83C\uDFFF"]]},
		"1f934":{"1f3fb":["1f934-1f3fb",39,29,15,["\uD83E\uDD34\uD83C\uDFFB"]],"1f3fc":["1f934-1f3fc",39,30,15,["\uD83E\uDD34\uD83C\uDFFC"]],"1f3fd":["1f934-1f3fd",39,31,15,["\uD83E\uDD34\uD83C\uDFFD"]],"1f3fe":["1f934-1f3fe",39,32,15,["\uD83E\uDD34\uD83C\uDFFE"]],"1f3ff":["1f934-1f3ff",39,33,15,["\uD83E\uDD34\uD83C\uDFFF"]]},
		"1f935":{"1f3fb":["1f935-1f3fb",39,35,15,["\uD83E\uDD35\uD83C\uDFFB"]],"1f3fc":["1f935-1f3fc",39,36,15,["\uD83E\uDD35\uD83C\uDFFC"]],"1f3fd":["1f935-1f3fd",39,37,15,["\uD83E\uDD35\uD83C\uDFFD"]],"1f3fe":["1f935-1f3fe",39,38,15,["\uD83E\uDD35\uD83C\uDFFE"]],"1f3ff":["1f935-1f3ff",39,39,15,["\uD83E\uDD35\uD83C\uDFFF"]]},
		"1f936":{"1f3fb":["1f936-1f3fb",39,41,15,["\uD83E\uDD36\uD83C\uDFFB"]],"1f3fc":["1f936-1f3fc",39,42,15,["\uD83E\uDD36\uD83C\uDFFC"]],"1f3fd":["1f936-1f3fd",39,43,15,["\uD83E\uDD36\uD83C\uDFFD"]],"1f3fe":["1f936-1f3fe",39,44,15,["\uD83E\uDD36\uD83C\uDFFE"]],"1f3ff":["1f936-1f3ff",39,45,15,["\uD83E\uDD36\uD83C\uDFFF"]]},
		"1f937-200d-2640-fe0f":{"1f3fb":["1f937-1f3fb-200d-2640-fe0f",39,47,7,["\uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f937-1f3fc-200d-2640-fe0f",39,48,7,["\uD83E\uDD37\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f937-1f3fd-200d-2640-fe0f",39,49,7,["\uD83E\uDD37\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f937-1f3fe-200d-2640-fe0f",39,50,7,["\uD83E\uDD37\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f937-1f3ff-200d-2640-fe0f",39,51,7,["\uD83E\uDD37\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f937-200d-2642-fe0f":{"1f3fb":["1f937-1f3fb-200d-2642-fe0f",40,1,7,["\uD83E\uDD37\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f937-1f3fc-200d-2642-fe0f",40,2,7,["\uD83E\uDD37\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f937-1f3fd-200d-2642-fe0f",40,3,7,["\uD83E\uDD37\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f937-1f3fe-200d-2642-fe0f",40,4,7,["\uD83E\uDD37\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f937-1f3ff-200d-2642-fe0f",40,5,7,["\uD83E\uDD37\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f937":{"1f3fb":["1f937-1f3fb",40,7,7,["\uD83E\uDD37\uD83C\uDFFB"]],"1f3fc":["1f937-1f3fc",40,8,7,["\uD83E\uDD37\uD83C\uDFFC"]],"1f3fd":["1f937-1f3fd",40,9,7,["\uD83E\uDD37\uD83C\uDFFD"]],"1f3fe":["1f937-1f3fe",40,10,7,["\uD83E\uDD37\uD83C\uDFFE"]],"1f3ff":["1f937-1f3ff",40,11,7,["\uD83E\uDD37\uD83C\uDFFF"]]},
		"1f938-200d-2640-fe0f":{"1f3fb":["1f938-1f3fb-200d-2640-fe0f",40,13,7,["\uD83E\uDD38\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f938-1f3fc-200d-2640-fe0f",40,14,7,["\uD83E\uDD38\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f938-1f3fd-200d-2640-fe0f",40,15,7,["\uD83E\uDD38\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f938-1f3fe-200d-2640-fe0f",40,16,7,["\uD83E\uDD38\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f938-1f3ff-200d-2640-fe0f",40,17,7,["\uD83E\uDD38\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f938-200d-2642-fe0f":{"1f3fb":["1f938-1f3fb-200d-2642-fe0f",40,19,7,["\uD83E\uDD38\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f938-1f3fc-200d-2642-fe0f",40,20,7,["\uD83E\uDD38\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f938-1f3fd-200d-2642-fe0f",40,21,7,["\uD83E\uDD38\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f938-1f3fe-200d-2642-fe0f",40,22,7,["\uD83E\uDD38\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f938-1f3ff-200d-2642-fe0f",40,23,7,["\uD83E\uDD38\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f938":{"1f3fb":["1f938-1f3fb",40,25,7,["\uD83E\uDD38\uD83C\uDFFB"]],"1f3fc":["1f938-1f3fc",40,26,7,["\uD83E\uDD38\uD83C\uDFFC"]],"1f3fd":["1f938-1f3fd",40,27,7,["\uD83E\uDD38\uD83C\uDFFD"]],"1f3fe":["1f938-1f3fe",40,28,7,["\uD83E\uDD38\uD83C\uDFFE"]],"1f3ff":["1f938-1f3ff",40,29,7,["\uD83E\uDD38\uD83C\uDFFF"]]},
		"1f939-200d-2640-fe0f":{"1f3fb":["1f939-1f3fb-200d-2640-fe0f",40,31,7,["\uD83E\uDD39\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f939-1f3fc-200d-2640-fe0f",40,32,7,["\uD83E\uDD39\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f939-1f3fd-200d-2640-fe0f",40,33,7,["\uD83E\uDD39\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f939-1f3fe-200d-2640-fe0f",40,34,7,["\uD83E\uDD39\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f939-1f3ff-200d-2640-fe0f",40,35,7,["\uD83E\uDD39\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f939-200d-2642-fe0f":{"1f3fb":["1f939-1f3fb-200d-2642-fe0f",40,37,7,["\uD83E\uDD39\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f939-1f3fc-200d-2642-fe0f",40,38,7,["\uD83E\uDD39\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f939-1f3fd-200d-2642-fe0f",40,39,7,["\uD83E\uDD39\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f939-1f3fe-200d-2642-fe0f",40,40,7,["\uD83E\uDD39\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f939-1f3ff-200d-2642-fe0f",40,41,7,["\uD83E\uDD39\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f939":{"1f3fb":["1f939-1f3fb",40,43,15,["\uD83E\uDD39\uD83C\uDFFB"]],"1f3fc":["1f939-1f3fc",40,44,15,["\uD83E\uDD39\uD83C\uDFFC"]],"1f3fd":["1f939-1f3fd",40,45,15,["\uD83E\uDD39\uD83C\uDFFD"]],"1f3fe":["1f939-1f3fe",40,46,15,["\uD83E\uDD39\uD83C\uDFFE"]],"1f3ff":["1f939-1f3ff",40,47,15,["\uD83E\uDD39\uD83C\uDFFF"]]},
		"1f93d-200d-2640-fe0f":{"1f3fb":["1f93d-1f3fb-200d-2640-fe0f",41,1,7,["\uD83E\uDD3D\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f93d-1f3fc-200d-2640-fe0f",41,2,7,["\uD83E\uDD3D\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f93d-1f3fd-200d-2640-fe0f",41,3,7,["\uD83E\uDD3D\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f93d-1f3fe-200d-2640-fe0f",41,4,7,["\uD83E\uDD3D\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f93d-1f3ff-200d-2640-fe0f",41,5,7,["\uD83E\uDD3D\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f93d-200d-2642-fe0f":{"1f3fb":["1f93d-1f3fb-200d-2642-fe0f",41,7,7,["\uD83E\uDD3D\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f93d-1f3fc-200d-2642-fe0f",41,8,7,["\uD83E\uDD3D\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f93d-1f3fd-200d-2642-fe0f",41,9,7,["\uD83E\uDD3D\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f93d-1f3fe-200d-2642-fe0f",41,10,7,["\uD83E\uDD3D\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f93d-1f3ff-200d-2642-fe0f",41,11,7,["\uD83E\uDD3D\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f93d":{"1f3fb":["1f93d-1f3fb",41,13,7,["\uD83E\uDD3D\uD83C\uDFFB"]],"1f3fc":["1f93d-1f3fc",41,14,7,["\uD83E\uDD3D\uD83C\uDFFC"]],"1f3fd":["1f93d-1f3fd",41,15,7,["\uD83E\uDD3D\uD83C\uDFFD"]],"1f3fe":["1f93d-1f3fe",41,16,7,["\uD83E\uDD3D\uD83C\uDFFE"]],"1f3ff":["1f93d-1f3ff",41,17,7,["\uD83E\uDD3D\uD83C\uDFFF"]]},
		"1f93e-200d-2640-fe0f":{"1f3fb":["1f93e-1f3fb-200d-2640-fe0f",41,19,7,["\uD83E\uDD3E\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f93e-1f3fc-200d-2640-fe0f",41,20,7,["\uD83E\uDD3E\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f93e-1f3fd-200d-2640-fe0f",41,21,7,["\uD83E\uDD3E\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f93e-1f3fe-200d-2640-fe0f",41,22,7,["\uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f93e-1f3ff-200d-2640-fe0f",41,23,7,["\uD83E\uDD3E\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f93e-200d-2642-fe0f":{"1f3fb":["1f93e-1f3fb-200d-2642-fe0f",41,25,7,["\uD83E\uDD3E\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f93e-1f3fc-200d-2642-fe0f",41,26,7,["\uD83E\uDD3E\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f93e-1f3fd-200d-2642-fe0f",41,27,7,["\uD83E\uDD3E\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f93e-1f3fe-200d-2642-fe0f",41,28,7,["\uD83E\uDD3E\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f93e-1f3ff-200d-2642-fe0f",41,29,7,["\uD83E\uDD3E\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f93e":{"1f3fb":["1f93e-1f3fb",41,31,7,["\uD83E\uDD3E\uD83C\uDFFB"]],"1f3fc":["1f93e-1f3fc",41,32,7,["\uD83E\uDD3E\uD83C\uDFFC"]],"1f3fd":["1f93e-1f3fd",41,33,7,["\uD83E\uDD3E\uD83C\uDFFD"]],"1f3fe":["1f93e-1f3fe",41,34,7,["\uD83E\uDD3E\uD83C\uDFFE"]],"1f3ff":["1f93e-1f3ff",41,35,7,["\uD83E\uDD3E\uD83C\uDFFF"]]},
		"1f9d1":{"1f3fb":["1f9d1-1f3fb",42,51,15,["\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fc":["1f9d1-1f3fc",43,0,15,["\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fd":["1f9d1-1f3fd",43,1,15,["\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fe":["1f9d1-1f3fe",43,2,15,["\uD83E\uDDD1\uD83C\uDFFE"]],"1f3ff":["1f9d1-1f3ff",43,3,15,["\uD83E\uDDD1\uD83C\uDFFF"]]},
		"1f9d2":{"1f3fb":["1f9d2-1f3fb",43,5,15,["\uD83E\uDDD2\uD83C\uDFFB"]],"1f3fc":["1f9d2-1f3fc",43,6,15,["\uD83E\uDDD2\uD83C\uDFFC"]],"1f3fd":["1f9d2-1f3fd",43,7,15,["\uD83E\uDDD2\uD83C\uDFFD"]],"1f3fe":["1f9d2-1f3fe",43,8,15,["\uD83E\uDDD2\uD83C\uDFFE"]],"1f3ff":["1f9d2-1f3ff",43,9,15,["\uD83E\uDDD2\uD83C\uDFFF"]]},
		"1f9d3":{"1f3fb":["1f9d3-1f3fb",43,11,15,["\uD83E\uDDD3\uD83C\uDFFB"]],"1f3fc":["1f9d3-1f3fc",43,12,15,["\uD83E\uDDD3\uD83C\uDFFC"]],"1f3fd":["1f9d3-1f3fd",43,13,15,["\uD83E\uDDD3\uD83C\uDFFD"]],"1f3fe":["1f9d3-1f3fe",43,14,15,["\uD83E\uDDD3\uD83C\uDFFE"]],"1f3ff":["1f9d3-1f3ff",43,15,15,["\uD83E\uDDD3\uD83C\uDFFF"]]},
		"1f9d4":{"1f3fb":["1f9d4-1f3fb",43,17,15,["\uD83E\uDDD4\uD83C\uDFFB"]],"1f3fc":["1f9d4-1f3fc",43,18,15,["\uD83E\uDDD4\uD83C\uDFFC"]],"1f3fd":["1f9d4-1f3fd",43,19,15,["\uD83E\uDDD4\uD83C\uDFFD"]],"1f3fe":["1f9d4-1f3fe",43,20,15,["\uD83E\uDDD4\uD83C\uDFFE"]],"1f3ff":["1f9d4-1f3ff",43,21,15,["\uD83E\uDDD4\uD83C\uDFFF"]]},
		"1f9d5":{"1f3fb":["1f9d5-1f3fb",43,23,15,["\uD83E\uDDD5\uD83C\uDFFB"]],"1f3fc":["1f9d5-1f3fc",43,24,15,["\uD83E\uDDD5\uD83C\uDFFC"]],"1f3fd":["1f9d5-1f3fd",43,25,15,["\uD83E\uDDD5\uD83C\uDFFD"]],"1f3fe":["1f9d5-1f3fe",43,26,15,["\uD83E\uDDD5\uD83C\uDFFE"]],"1f3ff":["1f9d5-1f3ff",43,27,15,["\uD83E\uDDD5\uD83C\uDFFF"]]},
		"1f9d6-200d-2640-fe0f":{"1f3fb":["1f9d6-1f3fb-200d-2640-fe0f",43,29,7,["\uD83E\uDDD6\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9d6-1f3fc-200d-2640-fe0f",43,30,7,["\uD83E\uDDD6\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9d6-1f3fd-200d-2640-fe0f",43,31,7,["\uD83E\uDDD6\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9d6-1f3fe-200d-2640-fe0f",43,32,7,["\uD83E\uDDD6\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9d6-1f3ff-200d-2640-fe0f",43,33,7,["\uD83E\uDDD6\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9d6-200d-2642-fe0f":{"1f3fb":["1f9d6-1f3fb-200d-2642-fe0f",43,35,7,["\uD83E\uDDD6\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFB"]],"1f3fc":["1f9d6-1f3fc-200d-2642-fe0f",43,36,7,["\uD83E\uDDD6\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFC"]],"1f3fd":["1f9d6-1f3fd-200d-2642-fe0f",43,37,7,["\uD83E\uDDD6\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFD"]],"1f3fe":["1f9d6-1f3fe-200d-2642-fe0f",43,38,7,["\uD83E\uDDD6\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFE"]],"1f3ff":["1f9d6-1f3ff-200d-2642-fe0f",43,39,7,["\uD83E\uDDD6\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFF"]]},
		"1f9d7-200d-2640-fe0f":{"1f3fb":["1f9d7-1f3fb-200d-2640-fe0f",43,47,7,["\uD83E\uDDD7\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFB"]],"1f3fc":["1f9d7-1f3fc-200d-2640-fe0f",43,48,7,["\uD83E\uDDD7\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFC"]],"1f3fd":["1f9d7-1f3fd-200d-2640-fe0f",43,49,7,["\uD83E\uDDD7\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFD"]],"1f3fe":["1f9d7-1f3fe-200d-2640-fe0f",43,50,7,["\uD83E\uDDD7\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFE"]],"1f3ff":["1f9d7-1f3ff-200d-2640-fe0f",43,51,7,["\uD83E\uDDD7\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFF"]]},
		"1f9d7-200d-2642-fe0f":{"1f3fb":["1f9d7-1f3fb-200d-2642-fe0f",44,1,7,["\uD83E\uDDD7\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d7-1f3fc-200d-2642-fe0f",44,2,7,["\uD83E\uDDD7\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d7-1f3fd-200d-2642-fe0f",44,3,7,["\uD83E\uDDD7\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d7-1f3fe-200d-2642-fe0f",44,4,7,["\uD83E\uDDD7\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d7-1f3ff-200d-2642-fe0f",44,5,7,["\uD83E\uDDD7\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9d8-200d-2640-fe0f":{"1f3fb":["1f9d8-1f3fb-200d-2640-fe0f",44,13,7,["\uD83E\uDDD8\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFB"]],"1f3fc":["1f9d8-1f3fc-200d-2640-fe0f",44,14,7,["\uD83E\uDDD8\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFC"]],"1f3fd":["1f9d8-1f3fd-200d-2640-fe0f",44,15,7,["\uD83E\uDDD8\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFD"]],"1f3fe":["1f9d8-1f3fe-200d-2640-fe0f",44,16,7,["\uD83E\uDDD8\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFE"]],"1f3ff":["1f9d8-1f3ff-200d-2640-fe0f",44,17,7,["\uD83E\uDDD8\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFF"]]},
		"1f9d8-200d-2642-fe0f":{"1f3fb":["1f9d8-1f3fb-200d-2642-fe0f",44,19,7,["\uD83E\uDDD8\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d8-1f3fc-200d-2642-fe0f",44,20,7,["\uD83E\uDDD8\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d8-1f3fd-200d-2642-fe0f",44,21,7,["\uD83E\uDDD8\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d8-1f3fe-200d-2642-fe0f",44,22,7,["\uD83E\uDDD8\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d8-1f3ff-200d-2642-fe0f",44,23,7,["\uD83E\uDDD8\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9d9-200d-2640-fe0f":{"1f3fb":["1f9d9-1f3fb-200d-2640-fe0f",44,31,7,["\uD83E\uDDD9\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFB"]],"1f3fc":["1f9d9-1f3fc-200d-2640-fe0f",44,32,7,["\uD83E\uDDD9\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFC"]],"1f3fd":["1f9d9-1f3fd-200d-2640-fe0f",44,33,7,["\uD83E\uDDD9\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFD"]],"1f3fe":["1f9d9-1f3fe-200d-2640-fe0f",44,34,7,["\uD83E\uDDD9\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFE"]],"1f3ff":["1f9d9-1f3ff-200d-2640-fe0f",44,35,7,["\uD83E\uDDD9\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFF"]]},
		"1f9d9-200d-2642-fe0f":{"1f3fb":["1f9d9-1f3fb-200d-2642-fe0f",44,37,7,["\uD83E\uDDD9\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d9-1f3fc-200d-2642-fe0f",44,38,7,["\uD83E\uDDD9\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d9-1f3fd-200d-2642-fe0f",44,39,7,["\uD83E\uDDD9\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d9-1f3fe-200d-2642-fe0f",44,40,7,["\uD83E\uDDD9\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d9-1f3ff-200d-2642-fe0f",44,41,7,["\uD83E\uDDD9\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9da-200d-2640-fe0f":{"1f3fb":["1f9da-1f3fb-200d-2640-fe0f",44,49,7,["\uD83E\uDDDA\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFB"]],"1f3fc":["1f9da-1f3fc-200d-2640-fe0f",44,50,7,["\uD83E\uDDDA\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFC"]],"1f3fd":["1f9da-1f3fd-200d-2640-fe0f",44,51,7,["\uD83E\uDDDA\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFD"]],"1f3fe":["1f9da-1f3fe-200d-2640-fe0f",45,0,7,["\uD83E\uDDDA\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFE"]],"1f3ff":["1f9da-1f3ff-200d-2640-fe0f",45,1,7,["\uD83E\uDDDA\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFF"]]},
		"1f9da-200d-2642-fe0f":{"1f3fb":["1f9da-1f3fb-200d-2642-fe0f",45,3,7,["\uD83E\uDDDA\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9da-1f3fc-200d-2642-fe0f",45,4,7,["\uD83E\uDDDA\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9da-1f3fd-200d-2642-fe0f",45,5,7,["\uD83E\uDDDA\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9da-1f3fe-200d-2642-fe0f",45,6,7,["\uD83E\uDDDA\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9da-1f3ff-200d-2642-fe0f",45,7,7,["\uD83E\uDDDA\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9db-200d-2640-fe0f":{"1f3fb":["1f9db-1f3fb-200d-2640-fe0f",45,15,7,["\uD83E\uDDDB\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFB"]],"1f3fc":["1f9db-1f3fc-200d-2640-fe0f",45,16,7,["\uD83E\uDDDB\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFC"]],"1f3fd":["1f9db-1f3fd-200d-2640-fe0f",45,17,7,["\uD83E\uDDDB\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFD"]],"1f3fe":["1f9db-1f3fe-200d-2640-fe0f",45,18,7,["\uD83E\uDDDB\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFE"]],"1f3ff":["1f9db-1f3ff-200d-2640-fe0f",45,19,7,["\uD83E\uDDDB\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFF"]]},
		"1f9db-200d-2642-fe0f":{"1f3fb":["1f9db-1f3fb-200d-2642-fe0f",45,21,7,["\uD83E\uDDDB\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9db-1f3fc-200d-2642-fe0f",45,22,7,["\uD83E\uDDDB\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9db-1f3fd-200d-2642-fe0f",45,23,7,["\uD83E\uDDDB\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9db-1f3fe-200d-2642-fe0f",45,24,7,["\uD83E\uDDDB\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9db-1f3ff-200d-2642-fe0f",45,25,7,["\uD83E\uDDDB\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9dc-200d-2640-fe0f":{"1f3fb":["1f9dc-1f3fb-200d-2640-fe0f",45,33,7,["\uD83E\uDDDC\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9dc-1f3fc-200d-2640-fe0f",45,34,7,["\uD83E\uDDDC\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9dc-1f3fd-200d-2640-fe0f",45,35,7,["\uD83E\uDDDC\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9dc-1f3fe-200d-2640-fe0f",45,36,7,["\uD83E\uDDDC\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9dc-1f3ff-200d-2640-fe0f",45,37,7,["\uD83E\uDDDC\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9dc-200d-2642-fe0f":{"1f3fb":["1f9dc-1f3fb-200d-2642-fe0f",45,39,7,["\uD83E\uDDDC\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFB"]],"1f3fc":["1f9dc-1f3fc-200d-2642-fe0f",45,40,7,["\uD83E\uDDDC\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFC"]],"1f3fd":["1f9dc-1f3fd-200d-2642-fe0f",45,41,7,["\uD83E\uDDDC\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFD"]],"1f3fe":["1f9dc-1f3fe-200d-2642-fe0f",45,42,7,["\uD83E\uDDDC\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFE"]],"1f3ff":["1f9dc-1f3ff-200d-2642-fe0f",45,43,7,["\uD83E\uDDDC\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFF"]]},
		"1f9dd-200d-2640-fe0f":{"1f3fb":["1f9dd-1f3fb-200d-2640-fe0f",45,51,7,["\uD83E\uDDDD\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9dd-1f3fc-200d-2640-fe0f",46,0,7,["\uD83E\uDDDD\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9dd-1f3fd-200d-2640-fe0f",46,1,7,["\uD83E\uDDDD\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9dd-1f3fe-200d-2640-fe0f",46,2,7,["\uD83E\uDDDD\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9dd-1f3ff-200d-2640-fe0f",46,3,7,["\uD83E\uDDDD\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9dd-200d-2642-fe0f":{"1f3fb":["1f9dd-1f3fb-200d-2642-fe0f",46,5,7,["\uD83E\uDDDD\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFB"]],"1f3fc":["1f9dd-1f3fc-200d-2642-fe0f",46,6,7,["\uD83E\uDDDD\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFC"]],"1f3fd":["1f9dd-1f3fd-200d-2642-fe0f",46,7,7,["\uD83E\uDDDD\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFD"]],"1f3fe":["1f9dd-1f3fe-200d-2642-fe0f",46,8,7,["\uD83E\uDDDD\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFE"]],"1f3ff":["1f9dd-1f3ff-200d-2642-fe0f",46,9,7,["\uD83E\uDDDD\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFF"]]},
		"261d-fe0f":{"1f3fb":["261d-1f3fb",47,27,31,["\u261D\uD83C\uDFFB"]],"1f3fc":["261d-1f3fc",47,28,31,["\u261D\uD83C\uDFFC"]],"1f3fd":["261d-1f3fd",47,29,31,["\u261D\uD83C\uDFFD"]],"1f3fe":["261d-1f3fe",47,30,31,["\u261D\uD83C\uDFFE"]],"1f3ff":["261d-1f3ff",47,31,31,["\u261D\uD83C\uDFFF"]]},
		"26f9-fe0f-200d-2640-fe0f":{"1f3fb":["26f9-1f3fb-200d-2640-fe0f",48,47,7,["\u26F9\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["26f9-1f3fc-200d-2640-fe0f",48,48,7,["\u26F9\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["26f9-1f3fd-200d-2640-fe0f",48,49,7,["\u26F9\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["26f9-1f3fe-200d-2640-fe0f",48,50,7,["\u26F9\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["26f9-1f3ff-200d-2640-fe0f",48,51,7,["\u26F9\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"26f9-fe0f-200d-2642-fe0f":{"1f3fb":["26f9-1f3fb-200d-2642-fe0f",49,1,7,["\u26F9\uD83C\uDFFB\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFB"]],"1f3fc":["26f9-1f3fc-200d-2642-fe0f",49,2,7,["\u26F9\uD83C\uDFFC\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFC"]],"1f3fd":["26f9-1f3fd-200d-2642-fe0f",49,3,7,["\u26F9\uD83C\uDFFD\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFD"]],"1f3fe":["26f9-1f3fe-200d-2642-fe0f",49,4,7,["\u26F9\uD83C\uDFFE\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFE"]],"1f3ff":["26f9-1f3ff-200d-2642-fe0f",49,5,7,["\u26F9\uD83C\uDFFF\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFF"]]},
		"270a":{"1f3fb":["270a-1f3fb",49,19,31,["\u270A\uD83C\uDFFB"]],"1f3fc":["270a-1f3fc",49,20,31,["\u270A\uD83C\uDFFC"]],"1f3fd":["270a-1f3fd",49,21,31,["\u270A\uD83C\uDFFD"]],"1f3fe":["270a-1f3fe",49,22,31,["\u270A\uD83C\uDFFE"]],"1f3ff":["270a-1f3ff",49,23,31,["\u270A\uD83C\uDFFF"]]},
		"270b":{"1f3fb":["270b-1f3fb",49,25,31,["\u270B\uD83C\uDFFB"]],"1f3fc":["270b-1f3fc",49,26,31,["\u270B\uD83C\uDFFC"]],"1f3fd":["270b-1f3fd",49,27,31,["\u270B\uD83C\uDFFD"]],"1f3fe":["270b-1f3fe",49,28,31,["\u270B\uD83C\uDFFE"]],"1f3ff":["270b-1f3ff",49,29,31,["\u270B\uD83C\uDFFF"]]},
		"270c-fe0f":{"1f3fb":["270c-1f3fb",49,31,31,["\u270C\uD83C\uDFFB"]],"1f3fc":["270c-1f3fc",49,32,31,["\u270C\uD83C\uDFFC"]],"1f3fd":["270c-1f3fd",49,33,31,["\u270C\uD83C\uDFFD"]],"1f3fe":["270c-1f3fe",49,34,31,["\u270C\uD83C\uDFFE"]],"1f3ff":["270c-1f3ff",49,35,31,["\u270C\uD83C\uDFFF"]]},
		"270d-fe0f":{"1f3fb":["270d-1f3fb",49,37,15,["\u270D\uD83C\uDFFB"]],"1f3fc":["270d-1f3fc",49,38,15,["\u270D\uD83C\uDFFC"]],"1f3fd":["270d-1f3fd",49,39,15,["\u270D\uD83C\uDFFD"]],"1f3fe":["270d-1f3fe",49,40,15,["\u270D\uD83C\uDFFE"]],"1f3ff":["270d-1f3ff",49,41,15,["\u270D\uD83C\uDFFF"]]}
	};
	/** @private */
	emoji.prototype.obsoletes_data = {
		"1f3c3-200d-2642-fe0f":["1f3c3",9,46,23],
		"1f3c3-1f3fb-200d-2642-fe0f":["1f3c3-1f3fb",9,47,23],
		"1f3c3-1f3fc-200d-2642-fe0f":["1f3c3-1f3fc",9,48,23],
		"1f3c3-1f3fd-200d-2642-fe0f":["1f3c3-1f3fd",9,49,23],
		"1f3c3-1f3fe-200d-2642-fe0f":["1f3c3-1f3fe",9,50,23],
		"1f3c3-1f3ff-200d-2642-fe0f":["1f3c3-1f3ff",9,51,23],
		"1f3c4-200d-2642-fe0f":["1f3c4",10,12,23],
		"1f3c4-1f3fb-200d-2642-fe0f":["1f3c4-1f3fb",10,13,23],
		"1f3c4-1f3fc-200d-2642-fe0f":["1f3c4-1f3fc",10,14,23],
		"1f3c4-1f3fd-200d-2642-fe0f":["1f3c4-1f3fd",10,15,23],
		"1f3c4-1f3fe-200d-2642-fe0f":["1f3c4-1f3fe",10,16,23],
		"1f3c4-1f3ff-200d-2642-fe0f":["1f3c4-1f3ff",10,17,23],
		"1f3ca-200d-2642-fe0f":["1f3ca",10,40,23],
		"1f3ca-1f3fb-200d-2642-fe0f":["1f3ca-1f3fb",10,41,23],
		"1f3ca-1f3fc-200d-2642-fe0f":["1f3ca-1f3fc",10,42,23],
		"1f3ca-1f3fd-200d-2642-fe0f":["1f3ca-1f3fd",10,43,23],
		"1f3ca-1f3fe-200d-2642-fe0f":["1f3ca-1f3fe",10,44,23],
		"1f3ca-1f3ff-200d-2642-fe0f":["1f3ca-1f3ff",10,45,23],
		"1f3cb-fe0f-200d-2642-fe0f":["1f3cb-fe0f",11,6,7],
		"1f3cb-1f3fb-200d-2642-fe0f":["1f3cb-1f3fb",11,7,7],
		"1f3cb-1f3fc-200d-2642-fe0f":["1f3cb-1f3fc",11,8,7],
		"1f3cb-1f3fd-200d-2642-fe0f":["1f3cb-1f3fd",11,9,7],
		"1f3cb-1f3fe-200d-2642-fe0f":["1f3cb-1f3fe",11,10,7],
		"1f3cb-1f3ff-200d-2642-fe0f":["1f3cb-1f3ff",11,11,7],
		"1f3cc-fe0f-200d-2642-fe0f":["1f3cc-fe0f",11,24,7],
		"1f3cc-1f3fb-200d-2642-fe0f":["1f3cc-1f3fb",11,25,7],
		"1f3cc-1f3fc-200d-2642-fe0f":["1f3cc-1f3fc",11,26,7],
		"1f3cc-1f3fd-200d-2642-fe0f":["1f3cc-1f3fd",11,27,7],
		"1f3cc-1f3fe-200d-2642-fe0f":["1f3cc-1f3fe",11,28,7],
		"1f3cc-1f3ff-200d-2642-fe0f":["1f3cc-1f3ff",11,29,7],
		"1f468-200d-1f469-200d-1f466":["1f46a",20,29,23],
		"1f46e-200d-2642-fe0f":["1f46e",20,45,23],
		"1f46e-1f3fb-200d-2642-fe0f":["1f46e-1f3fb",20,46,23],
		"1f46e-1f3fc-200d-2642-fe0f":["1f46e-1f3fc",20,47,23],
		"1f46e-1f3fd-200d-2642-fe0f":["1f46e-1f3fd",20,48,23],
		"1f46e-1f3fe-200d-2642-fe0f":["1f46e-1f3fe",20,49,23],
		"1f46e-1f3ff-200d-2642-fe0f":["1f46e-1f3ff",20,50,23],
		"1f46f-200d-2640-fe0f":["1f46f",21,1,23],
		"1f471-200d-2642-fe0f":["1f471",21,20,23],
		"1f471-1f3fb-200d-2642-fe0f":["1f471-1f3fb",21,21,23],
		"1f471-1f3fc-200d-2642-fe0f":["1f471-1f3fc",21,22,23],
		"1f471-1f3fd-200d-2642-fe0f":["1f471-1f3fd",21,23,23],
		"1f471-1f3fe-200d-2642-fe0f":["1f471-1f3fe",21,24,23],
		"1f471-1f3ff-200d-2642-fe0f":["1f471-1f3ff",21,25,23],
		"1f473-200d-2642-fe0f":["1f473",21,44,23],
		"1f473-1f3fb-200d-2642-fe0f":["1f473-1f3fb",21,45,23],
		"1f473-1f3fc-200d-2642-fe0f":["1f473-1f3fc",21,46,23],
		"1f473-1f3fd-200d-2642-fe0f":["1f473-1f3fd",21,47,23],
		"1f473-1f3fe-200d-2642-fe0f":["1f473-1f3fe",21,48,23],
		"1f473-1f3ff-200d-2642-fe0f":["1f473-1f3ff",21,49,23],
		"1f477-200d-2642-fe0f":["1f477",22,28,23],
		"1f477-1f3fb-200d-2642-fe0f":["1f477-1f3fb",22,29,23],
		"1f477-1f3fc-200d-2642-fe0f":["1f477-1f3fc",22,30,23],
		"1f477-1f3fd-200d-2642-fe0f":["1f477-1f3fd",22,31,23],
		"1f477-1f3fe-200d-2642-fe0f":["1f477-1f3fe",22,32,23],
		"1f477-1f3ff-200d-2642-fe0f":["1f477-1f3ff",22,33,23],
		"1f481-200d-2640-fe0f":["1f481",23,13,23],
		"1f481-1f3fb-200d-2640-fe0f":["1f481-1f3fb",23,14,23],
		"1f481-1f3fc-200d-2640-fe0f":["1f481-1f3fc",23,15,23],
		"1f481-1f3fd-200d-2640-fe0f":["1f481-1f3fd",23,16,23],
		"1f481-1f3fe-200d-2640-fe0f":["1f481-1f3fe",23,17,23],
		"1f481-1f3ff-200d-2640-fe0f":["1f481-1f3ff",23,18,23],
		"1f482-200d-2642-fe0f":["1f482",23,31,23],
		"1f482-1f3fb-200d-2642-fe0f":["1f482-1f3fb",23,32,23],
		"1f482-1f3fc-200d-2642-fe0f":["1f482-1f3fc",23,33,23],
		"1f482-1f3fd-200d-2642-fe0f":["1f482-1f3fd",23,34,23],
		"1f482-1f3fe-200d-2642-fe0f":["1f482-1f3fe",23,35,23],
		"1f482-1f3ff-200d-2642-fe0f":["1f482-1f3ff",23,36,23],
		"1f486-200d-2640-fe0f":["1f486",24,10,23],
		"1f486-1f3fb-200d-2640-fe0f":["1f486-1f3fb",24,11,23],
		"1f486-1f3fc-200d-2640-fe0f":["1f486-1f3fc",24,12,23],
		"1f486-1f3fd-200d-2640-fe0f":["1f486-1f3fd",24,13,23],
		"1f486-1f3fe-200d-2640-fe0f":["1f486-1f3fe",24,14,23],
		"1f486-1f3ff-200d-2640-fe0f":["1f486-1f3ff",24,15,23],
		"1f487-200d-2640-fe0f":["1f487",24,28,23],
		"1f487-1f3fb-200d-2640-fe0f":["1f487-1f3fb",24,29,23],
		"1f487-1f3fc-200d-2640-fe0f":["1f487-1f3fc",24,30,23],
		"1f487-1f3fd-200d-2640-fe0f":["1f487-1f3fd",24,31,23],
		"1f487-1f3fe-200d-2640-fe0f":["1f487-1f3fe",24,32,23],
		"1f487-1f3ff-200d-2640-fe0f":["1f487-1f3ff",24,33,23],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468":["1f48f",24,41,23],
		"1f469-200d-2764-fe0f-200d-1f468":["1f491",24,43,23],
		"1f575-fe0f-200d-2642-fe0f":["1f575-fe0f",29,11,7],
		"1f575-1f3fb-200d-2642-fe0f":["1f575-1f3fb",29,12,7],
		"1f575-1f3fc-200d-2642-fe0f":["1f575-1f3fc",29,13,7],
		"1f575-1f3fd-200d-2642-fe0f":["1f575-1f3fd",29,14,7],
		"1f575-1f3fe-200d-2642-fe0f":["1f575-1f3fe",29,15,7],
		"1f575-1f3ff-200d-2642-fe0f":["1f575-1f3ff",29,16,7],
		"1f645-200d-2640-fe0f":["1f645",32,1,23],
		"1f645-1f3fb-200d-2640-fe0f":["1f645-1f3fb",32,2,23],
		"1f645-1f3fc-200d-2640-fe0f":["1f645-1f3fc",32,3,23],
		"1f645-1f3fd-200d-2640-fe0f":["1f645-1f3fd",32,4,23],
		"1f645-1f3fe-200d-2640-fe0f":["1f645-1f3fe",32,5,23],
		"1f645-1f3ff-200d-2640-fe0f":["1f645-1f3ff",32,6,23],
		"1f646-200d-2640-fe0f":["1f646",32,19,23],
		"1f646-1f3fb-200d-2640-fe0f":["1f646-1f3fb",32,20,23],
		"1f646-1f3fc-200d-2640-fe0f":["1f646-1f3fc",32,21,23],
		"1f646-1f3fd-200d-2640-fe0f":["1f646-1f3fd",32,22,23],
		"1f646-1f3fe-200d-2640-fe0f":["1f646-1f3fe",32,23,23],
		"1f646-1f3ff-200d-2640-fe0f":["1f646-1f3ff",32,24,23],
		"1f647-200d-2642-fe0f":["1f647",32,37,23],
		"1f647-1f3fb-200d-2642-fe0f":["1f647-1f3fb",32,38,23],
		"1f647-1f3fc-200d-2642-fe0f":["1f647-1f3fc",32,39,23],
		"1f647-1f3fd-200d-2642-fe0f":["1f647-1f3fd",32,40,23],
		"1f647-1f3fe-200d-2642-fe0f":["1f647-1f3fe",32,41,23],
		"1f647-1f3ff-200d-2642-fe0f":["1f647-1f3ff",32,42,23],
		"1f64b-200d-2640-fe0f":["1f64b",33,6,23],
		"1f64b-1f3fb-200d-2640-fe0f":["1f64b-1f3fb",33,7,23],
		"1f64b-1f3fc-200d-2640-fe0f":["1f64b-1f3fc",33,8,23],
		"1f64b-1f3fd-200d-2640-fe0f":["1f64b-1f3fd",33,9,23],
		"1f64b-1f3fe-200d-2640-fe0f":["1f64b-1f3fe",33,10,23],
		"1f64b-1f3ff-200d-2640-fe0f":["1f64b-1f3ff",33,11,23],
		"1f64d-200d-2640-fe0f":["1f64d",33,30,23],
		"1f64d-1f3fb-200d-2640-fe0f":["1f64d-1f3fb",33,31,23],
		"1f64d-1f3fc-200d-2640-fe0f":["1f64d-1f3fc",33,32,23],
		"1f64d-1f3fd-200d-2640-fe0f":["1f64d-1f3fd",33,33,23],
		"1f64d-1f3fe-200d-2640-fe0f":["1f64d-1f3fe",33,34,23],
		"1f64d-1f3ff-200d-2640-fe0f":["1f64d-1f3ff",33,35,23],
		"1f64e-200d-2640-fe0f":["1f64e",33,48,23],
		"1f64e-1f3fb-200d-2640-fe0f":["1f64e-1f3fb",33,49,23],
		"1f64e-1f3fc-200d-2640-fe0f":["1f64e-1f3fc",33,50,23],
		"1f64e-1f3fd-200d-2640-fe0f":["1f64e-1f3fd",33,51,23],
		"1f64e-1f3fe-200d-2640-fe0f":["1f64e-1f3fe",34,0,23],
		"1f64e-1f3ff-200d-2640-fe0f":["1f64e-1f3ff",34,1,23],
		"1f6a3-200d-2642-fe0f":["1f6a3",35,3,23],
		"1f6a3-1f3fb-200d-2642-fe0f":["1f6a3-1f3fb",35,4,7],
		"1f6a3-1f3fc-200d-2642-fe0f":["1f6a3-1f3fc",35,5,7],
		"1f6a3-1f3fd-200d-2642-fe0f":["1f6a3-1f3fd",35,6,7],
		"1f6a3-1f3fe-200d-2642-fe0f":["1f6a3-1f3fe",35,7,7],
		"1f6a3-1f3ff-200d-2642-fe0f":["1f6a3-1f3ff",35,8,7],
		"1f6b4-200d-2642-fe0f":["1f6b4",35,37,23],
		"1f6b4-1f3fb-200d-2642-fe0f":["1f6b4-1f3fb",35,38,23],
		"1f6b4-1f3fc-200d-2642-fe0f":["1f6b4-1f3fc",35,39,23],
		"1f6b4-1f3fd-200d-2642-fe0f":["1f6b4-1f3fd",35,40,23],
		"1f6b4-1f3fe-200d-2642-fe0f":["1f6b4-1f3fe",35,41,23],
		"1f6b4-1f3ff-200d-2642-fe0f":["1f6b4-1f3ff",35,42,23],
		"1f6b5-200d-2642-fe0f":["1f6b5",36,3,23],
		"1f6b5-1f3fb-200d-2642-fe0f":["1f6b5-1f3fb",36,4,23],
		"1f6b5-1f3fc-200d-2642-fe0f":["1f6b5-1f3fc",36,5,23],
		"1f6b5-1f3fd-200d-2642-fe0f":["1f6b5-1f3fd",36,6,23],
		"1f6b5-1f3fe-200d-2642-fe0f":["1f6b5-1f3fe",36,7,23],
		"1f6b5-1f3ff-200d-2642-fe0f":["1f6b5-1f3ff",36,8,23],
		"1f6b6-200d-2642-fe0f":["1f6b6",36,21,23],
		"1f6b6-1f3fb-200d-2642-fe0f":["1f6b6-1f3fb",36,22,23],
		"1f6b6-1f3fc-200d-2642-fe0f":["1f6b6-1f3fc",36,23,23],
		"1f6b6-1f3fd-200d-2642-fe0f":["1f6b6-1f3fd",36,24,23],
		"1f6b6-1f3fe-200d-2642-fe0f":["1f6b6-1f3fe",36,25,23],
		"1f6b6-1f3ff-200d-2642-fe0f":["1f6b6-1f3ff",36,26,23],
		"1f9d6-200d-2642-fe0f":["1f9d6",43,40,15],
		"1f9d6-1f3fb-200d-2642-fe0f":["1f9d6-1f3fb",43,41,15],
		"1f9d6-1f3fc-200d-2642-fe0f":["1f9d6-1f3fc",43,42,15],
		"1f9d6-1f3fd-200d-2642-fe0f":["1f9d6-1f3fd",43,43,15],
		"1f9d6-1f3fe-200d-2642-fe0f":["1f9d6-1f3fe",43,44,15],
		"1f9d6-1f3ff-200d-2642-fe0f":["1f9d6-1f3ff",43,45,15],
		"1f9d7-200d-2640-fe0f":["1f9d7",44,6,15],
		"1f9d7-1f3fb-200d-2640-fe0f":["1f9d7-1f3fb",44,7,15],
		"1f9d7-1f3fc-200d-2640-fe0f":["1f9d7-1f3fc",44,8,15],
		"1f9d7-1f3fd-200d-2640-fe0f":["1f9d7-1f3fd",44,9,15],
		"1f9d7-1f3fe-200d-2640-fe0f":["1f9d7-1f3fe",44,10,15],
		"1f9d7-1f3ff-200d-2640-fe0f":["1f9d7-1f3ff",44,11,15],
		"1f9d8-200d-2640-fe0f":["1f9d8",44,24,15],
		"1f9d8-1f3fb-200d-2640-fe0f":["1f9d8-1f3fb",44,25,15],
		"1f9d8-1f3fc-200d-2640-fe0f":["1f9d8-1f3fc",44,26,15],
		"1f9d8-1f3fd-200d-2640-fe0f":["1f9d8-1f3fd",44,27,15],
		"1f9d8-1f3fe-200d-2640-fe0f":["1f9d8-1f3fe",44,28,15],
		"1f9d8-1f3ff-200d-2640-fe0f":["1f9d8-1f3ff",44,29,15],
		"1f9d9-200d-2640-fe0f":["1f9d9",44,42,15],
		"1f9d9-1f3fb-200d-2640-fe0f":["1f9d9-1f3fb",44,43,15],
		"1f9d9-1f3fc-200d-2640-fe0f":["1f9d9-1f3fc",44,44,15],
		"1f9d9-1f3fd-200d-2640-fe0f":["1f9d9-1f3fd",44,45,15],
		"1f9d9-1f3fe-200d-2640-fe0f":["1f9d9-1f3fe",44,46,15],
		"1f9d9-1f3ff-200d-2640-fe0f":["1f9d9-1f3ff",44,47,15],
		"1f9da-200d-2640-fe0f":["1f9da",45,8,15],
		"1f9da-1f3fb-200d-2640-fe0f":["1f9da-1f3fb",45,9,7],
		"1f9da-1f3fc-200d-2640-fe0f":["1f9da-1f3fc",45,10,7],
		"1f9da-1f3fd-200d-2640-fe0f":["1f9da-1f3fd",45,11,7],
		"1f9da-1f3fe-200d-2640-fe0f":["1f9da-1f3fe",45,12,7],
		"1f9da-1f3ff-200d-2640-fe0f":["1f9da-1f3ff",45,13,7],
		"1f9db-200d-2640-fe0f":["1f9db",45,26,15],
		"1f9db-1f3fb-200d-2640-fe0f":["1f9db-1f3fb",45,27,7],
		"1f9db-1f3fc-200d-2640-fe0f":["1f9db-1f3fc",45,28,7],
		"1f9db-1f3fd-200d-2640-fe0f":["1f9db-1f3fd",45,29,7],
		"1f9db-1f3fe-200d-2640-fe0f":["1f9db-1f3fe",45,30,7],
		"1f9db-1f3ff-200d-2640-fe0f":["1f9db-1f3ff",45,31,7],
		"1f9dc-200d-2642-fe0f":["1f9dc",45,44,15],
		"1f9dc-1f3fb-200d-2642-fe0f":["1f9dc-1f3fb",45,45,15],
		"1f9dc-1f3fc-200d-2642-fe0f":["1f9dc-1f3fc",45,46,15],
		"1f9dc-1f3fd-200d-2642-fe0f":["1f9dc-1f3fd",45,47,15],
		"1f9dc-1f3fe-200d-2642-fe0f":["1f9dc-1f3fe",45,48,15],
		"1f9dc-1f3ff-200d-2642-fe0f":["1f9dc-1f3ff",45,49,15],
		"1f9dd-200d-2642-fe0f":["1f9dd",46,10,15],
		"1f9dd-1f3fb-200d-2642-fe0f":["1f9dd-1f3fb",46,11,15],
		"1f9dd-1f3fc-200d-2642-fe0f":["1f9dd-1f3fc",46,12,15],
		"1f9dd-1f3fd-200d-2642-fe0f":["1f9dd-1f3fd",46,13,15],
		"1f9dd-1f3fe-200d-2642-fe0f":["1f9dd-1f3fe",46,14,15],
		"1f9dd-1f3ff-200d-2642-fe0f":["1f9dd-1f3ff",46,15,15],
		"1f9de-200d-2642-fe0f":["1f9de",46,18,15],
		"1f9df-200d-2642-fe0f":["1f9df",46,21,15],
		"26f9-fe0f-200d-2642-fe0f":["26f9-fe0f",49,6,7],
		"26f9-1f3fb-200d-2642-fe0f":["26f9-1f3fb",49,7,7],
		"26f9-1f3fc-200d-2642-fe0f":["26f9-1f3fc",49,8,7],
		"26f9-1f3fd-200d-2642-fe0f":["26f9-1f3fd",49,9,7],
		"26f9-1f3fe-200d-2642-fe0f":["26f9-1f3fe",49,10,7],
		"26f9-1f3ff-200d-2642-fe0f":["26f9-1f3ff",49,11,7]
	};


	// export
	if (true){
		if ( true && module.exports){
			exports = module.exports = emoji;
		}
		exports.EmojiConvertor = emoji;
	}else {}

}).call(function(){
	return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f357":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiMessage_vue_vue_type_style_index_0_id_4b85c8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1f3f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiMessage_vue_vue_type_style_index_0_id_4b85c8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiMessage_vue_vue_type_style_index_0_id_4b85c8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiMessage_vue_vue_type_style_index_0_id_4b85c8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f3fb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9e91");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3d1913f4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f71f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("20c8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fa53":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNDc0OS40OCAtNTAyMCAzNS4wMzYgMzUuMDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM0ZThjZmY7fS5je2NsaXAtcGF0aDp1cmwoI2EpO30uZHtmaWxsOiNmZmY7fS5le2ZpbGw6I2VmZjRmOTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0zOTkuNDc5SDE3LjU1NXYxNy41NTVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzk5LjQ3OSkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4NiAtNTA3NSkiPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSIxNy41MTgiIGN5PSIxNy41MTgiIHI9IjE3LjUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM2LjUyIDU1KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4xMyA2NCkiPjxnIGNsYXNzPSJjIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0zODEuOTI0LTE5MC45NjJhOC43NzgsOC43NzgsMCwwLDAtOC43NzgtOC43NzgsOC43NzgsOC43NzgsMCwwLDAtOC43NzgsOC43NzgsOC43NDUsOC43NDUsMCwwLDAsMi4yNiw1Ljg3OXYxLjQ0MmMwLC44LjQ5MiwxLjQ1NywxLjEsMS40NTdoNS44M2EuODQzLjg0MywwLDAsMCwuMTgzLS4wMiw4Ljc3OCw4Ljc3OCwwLDAsMCw4LjE4NC04Ljc1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjQ3OSAxOTkuNzQpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLTY4Ljc2My0xOTQuMDc5YTkuMjkyLDkuMjkyLDAsMCwxLDYuMzgtOC44ODhjLS4yNTItLjAyMi0uNTA2LS4wMzMtLjc2My0uMDMzYTguNzc0LDguNzc0LDAsMCwwLTguNzc4LDguNzc4QTkuNTA4LDkuNTA4LDAsMCwwLTY5LjctMTg4LjNjLjAwNSwwLDAsLjAwOSwwLC4wMS0uMzExLjM1Mi0xLjkyNCwyLjg0OS4wMjEsMi44NDloMi4yNWMtMS4yMy0uMDIyLDEuMjYzLTIuMTA3LjI2OS0zLjQ5NGE4LjIyNSw4LjIyNSwwLDAsMS0xLjYtNS4xNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjkyNCAyMDMpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/view/chat.vue?vue&type=template&id=9b67f656&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"chat"}},[_c('web-chat',{attrs:{"themeColors":_vm.availableColors,"ws_url":_vm.chat_server_ws_url,"participants":_vm.participants,"username":_vm.username}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/chat.vue?vue&type=template&id=9b67f656&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/webChat.vue?vue&type=template&id=275ada6d&scoped=true&
var webChatvue_type_template_id_275ada6d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Launcher',{attrs:{"always-scroll-to-bottom":_vm.alwaysScrollToBottom,"close":_vm.closeChat,"colors":_vm.colors,"is-open":_vm.isChatOpen,"message-list":_vm.messageList,"message-styling":_vm.messageStyling,"new-messages-count":_vm.newMessagesCount,"on-message-was-sent":_vm.sendMessage,"open":_vm.openChat,"participants":_vm.participants,"show-close-button":true,"show-launcher":true,"show-emoji":false,"show-file":false,"showTypingIndicator":_vm.showTypingIndicator,"showEdition":true,"showDeletion":true,"title":_vm.title,"titleImageUrl":_vm.titleImageUrl},on:{"onType":_vm.handleOnType,"edit":_vm.editMessage,"remove":_vm.removeMessage},scopedSlots:_vm._u([{key:"text-message-toolbox",fn:function(scopedProps){return [(!scopedProps.me && scopedProps.message.type==='text')?_c('button',{on:{"click":function($event){$event.preventDefault();return _vm.like(scopedProps.message.id)}}},[_vm._v(" 👍 ")]):_vm._e()]}},{key:"text-message-body",fn:function(scopedProps){return [_c('p',{staticClass:"sc-message--text-content",domProps:{"innerHTML":_vm._s(scopedProps.messageText)}}),(scopedProps.message.data.meta)?_c('p',{staticClass:"sc-message--meta",style:({color: scopedProps.messageColors.color})},[_vm._v(_vm._s(scopedProps.message.data.meta))]):_vm._e(),(scopedProps.message.isEdited || scopedProps.message.liked)?_c('p',{staticClass:"sc-message--edited"},[(scopedProps.message.isEdited)?[_vm._v("✎")]:_vm._e(),(scopedProps.message.liked)?[_vm._v("👍")]:_vm._e()],2):_vm._e()]}},{key:"system-message-body",fn:function(ref){
var message = ref.message;
return [_vm._v(" [System]: "+_vm._s(message.text)+" ")]}}])})],1)}
var webChatvue_type_template_id_275ada6d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/webChat.vue?vue&type=template&id=275ada6d&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Launcher.vue?vue&type=template&id=35648758&scoped=true&
var Launchervue_type_template_id_35648758_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showLauncher)?_c('div',{staticClass:"sc-launcher",class:{opened: _vm.isOpen},style:({backgroundColor: _vm.colors.launcher.bg}),on:{"click":function($event){$event.preventDefault();_vm.isOpen ? _vm.close() : _vm.openAndFocus()}}},[(_vm.newMessagesCount > 0 && !_vm.isOpen)?_c('div',{staticClass:"sc-new-messsages-count"},[_vm._v(" "+_vm._s(_vm.newMessagesCount)+" ")]):_vm._e(),(_vm.isOpen)?_c('img',{staticClass:"sc-closed-icon",attrs:{"src":_vm.icons.close.img,"alt":_vm.icons.close.name}}):_c('img',{staticClass:"sc-open-icon",attrs:{"src":_vm.icons.open.img,"alt":_vm.icons.open.name}})]):_vm._e(),_c('ChatWindow',{attrs:{"show-launcher":_vm.showLauncher,"show-close-button":_vm.showCloseButton,"message-list":_vm.messageList,"on-user-input-submit":_vm.onMessageWasSent,"participants":_vm.participants,"title":_vm.chatWindowTitle,"title-image-url":_vm.titleImageUrl,"is-open":_vm.isOpen,"on-close":_vm.close,"show-emoji":_vm.showEmoji,"show-file":_vm.showFile,"show-edition":_vm.showEdition,"show-deletion":_vm.showDeletion,"placeholder":_vm.placeholder,"show-typing-indicator":_vm.showTypingIndicator,"colors":_vm.colors,"always-scroll-to-bottom":_vm.alwaysScrollToBottom,"message-styling":_vm.messageStyling,"disable-user-list-toggle":_vm.disableUserListToggle},on:{"scrollToTop":function($event){return _vm.$emit('scrollToTop')},"onType":function($event){return _vm.$emit('onType')},"edit":function($event){return _vm.$emit('edit', $event)},"remove":function($event){return _vm.$emit('remove', $event)}},scopedSlots:_vm._u([{key:"header",fn:function(){return [_vm._t("header")]},proxy:true},{key:"user-avatar",fn:function(scopedProps){return [_vm._t("user-avatar",null,{"user":scopedProps.user,"message":scopedProps.message})]}},{key:"text-message-body",fn:function(scopedProps){return [_vm._t("text-message-body",null,{"message":scopedProps.message,"messageText":scopedProps.messageText,"messageColors":scopedProps.messageColors,"me":scopedProps.me})]}},{key:"system-message-body",fn:function(scopedProps){return [_vm._t("system-message-body",null,{"message":scopedProps.message})]}},{key:"text-message-toolbox",fn:function(scopedProps){return [_vm._t("text-message-toolbox",null,{"message":scopedProps.message,"me":scopedProps.me})]}}],null,true)})],1)}
var Launchervue_type_template_id_35648758_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/Launcher.vue?vue&type=template&id=35648758&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/ChatWindow.vue?vue&type=template&id=1c7359f2&scoped=true&
var ChatWindowvue_type_template_id_1c7359f2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-chat-window",class:{opened: _vm.isOpen, closed: !_vm.isOpen}},[_c('Header',{attrs:{"show-close-button":_vm.showCloseButton,"title":_vm.title,"image-url":_vm.titleImageUrl,"on-close":_vm.onClose,"colors":_vm.colors,"disable-user-list-toggle":_vm.disableUserListToggle},on:{"userList":_vm.handleUserListToggle}},[[_vm._t("header")]],2),(_vm.showUserList)?_c('UserList',{attrs:{"colors":_vm.colors,"participants":_vm.participants}}):_vm._e(),(!_vm.showUserList)?_c('MessageList',{attrs:{"messages":_vm.messages,"participants":_vm.participants,"show-typing-indicator":_vm.showTypingIndicator,"colors":_vm.colors,"always-scroll-to-bottom":_vm.alwaysScrollToBottom,"show-edition":_vm.showEdition,"show-deletion":_vm.showDeletion,"message-styling":_vm.messageStyling},on:{"scrollToTop":function($event){return _vm.$emit('scrollToTop')},"remove":function($event){return _vm.$emit('remove', $event)}},scopedSlots:_vm._u([{key:"user-avatar",fn:function(scopedProps){return [_vm._t("user-avatar",null,{"user":scopedProps.user,"message":scopedProps.message})]}},{key:"text-message-body",fn:function(scopedProps){return [_vm._t("text-message-body",null,{"message":scopedProps.message,"messageText":scopedProps.messageText,"messageColors":scopedProps.messageColors,"me":scopedProps.me})]}},{key:"system-message-body",fn:function(scopedProps){return [_vm._t("system-message-body",null,{"message":scopedProps.message})]}},{key:"text-message-toolbox",fn:function(scopedProps){return [_vm._t("text-message-toolbox",null,{"message":scopedProps.message,"me":scopedProps.me})]}}],null,true)}):_vm._e(),(!_vm.showUserList)?_c('UserInput',{attrs:{"show-emoji":_vm.showEmoji,"on-submit":_vm.onUserInputSubmit,"suggestions":_vm.getSuggestions(),"show-file":_vm.showFile,"placeholder":_vm.placeholder,"colors":_vm.colors},on:{"onType":function($event){return _vm.$emit('onType')},"edit":function($event){return _vm.$emit('edit', $event)}}}):_vm._e()],1)}
var ChatWindowvue_type_template_id_1c7359f2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/ChatWindow.vue?vue&type=template&id=1c7359f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Header.vue?vue&type=template&id=e6440632&scoped=true&
var Headervue_type_template_id_e6440632_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-header",style:({background: _vm.colors.header.bg, color: _vm.colors.header.text})},[_vm._t("default",[(_vm.imageUrl)?_c('img',{staticClass:"sc-header--img",attrs:{"src":_vm.imageUrl,"alt":""}}):_vm._e(),(!_vm.disableUserListToggle)?_c('div',{staticClass:"sc-header--title enabled",on:{"click":_vm.toggleUserList}},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_c('div',{staticClass:"sc-header--title"},[_vm._v(_vm._s(_vm.title))])]),(_vm.showCloseButton)?_c('div',{staticClass:"sc-header--close-button",on:{"click":_vm.onClose}},[_c('img',{attrs:{"src":_vm.icons.close.img,"alt":_vm.icons.close.name}})]):_vm._e()],2)}
var Headervue_type_template_id_e6440632_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/Header.vue?vue&type=template&id=e6440632&scoped=true&

// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/close-icon-big.png
var close_icon_big = __webpack_require__("5142");
var close_icon_big_default = /*#__PURE__*/__webpack_require__.n(close_icon_big);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: {
    icons: {
      type: Object,
      default: function _default() {
        return {
          close: {
            img: close_icon_big_default.a,
            name: 'default'
          }
        };
      }
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    },
    showCloseButton: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      inUserList: false
    };
  },
  methods: {
    toggleUserList: function toggleUserList() {
      this.inUserList = !this.inUserList;
      this.$emit('userList', this.inUserList);
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/Header.vue?vue&type=style&index=0&id=e6440632&scoped=true&lang=css&
var Headervue_type_style_index_0_id_e6440632_scoped_true_lang_css_ = __webpack_require__("be6a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue_chat_plugin/Header.vue






/* normalize component */

var component = normalizeComponent(
  vue_chat_plugin_Headervue_type_script_lang_js_,
  Headervue_type_template_id_e6440632_scoped_true_render,
  Headervue_type_template_id_e6440632_scoped_true_staticRenderFns,
  false,
  null,
  "e6440632",
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/MessageList.vue?vue&type=template&id=094795c8&scoped=true&
var MessageListvue_type_template_id_094795c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scrollList",staticClass:"sc-message-list",style:({backgroundColor: _vm.colors.messageList.bg}),on:{"scroll":_vm.handleScroll}},[_vm._l((_vm.messages),function(message,idx){return _c('Message',{key:idx,attrs:{"message":message,"user":_vm.profile(message.author),"colors":_vm.colors,"message-styling":_vm.messageStyling,"show-edition":_vm.showEdition,"show-deletion":_vm.showDeletion},on:{"remove":function($event){return _vm.$emit('remove', message)}},scopedSlots:_vm._u([{key:"user-avatar",fn:function(scopedProps){return [_vm._t("user-avatar",null,{"user":scopedProps.user,"message":scopedProps.message})]}},{key:"text-message-body",fn:function(scopedProps){return [_vm._t("text-message-body",null,{"message":scopedProps.message,"messageText":scopedProps.messageText,"messageColors":scopedProps.messageColors,"me":scopedProps.me})]}},{key:"system-message-body",fn:function(scopedProps){return [_vm._t("system-message-body",null,{"message":scopedProps.message})]}},{key:"text-message-toolbox",fn:function(scopedProps){return [_vm._t("text-message-toolbox",null,{"message":scopedProps.message,"me":scopedProps.me})]}}],null,true)})}),_c('Message',{directives:[{name:"show",rawName:"v-show",value:(_vm.showTypingIndicator !== ''),expression:"showTypingIndicator !== ''"}],attrs:{"message":{author: _vm.showTypingIndicator, type: 'typing'},"user":_vm.profile(_vm.showTypingIndicator),"colors":_vm.colors,"message-styling":_vm.messageStyling,"show-edition":_vm.showEdition,"show-deletion":_vm.showDeletion}})],2)}
var MessageListvue_type_template_id_094795c8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/MessageList.vue?vue&type=template&id=094795c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Message.vue?vue&type=template&id=4900fe50&
var Messagevue_type_template_id_4900fe50_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-message"},[_c('div',{staticClass:"sc-message--content",class:{
      sent: _vm.message.author === _vm.mmc_uid,
      received: _vm.message.author !== _vm.mmc_uid && _vm.message.type !== 'system',
      system: _vm.message.type === 'system'
    }},[_vm._t("user-avatar",[(_vm.message.type !== 'system' && _vm.authorName && _vm.authorName !== _vm.mmc_uid)?_c('div',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.authorName),expression:"authorName"}],staticClass:"sc-message--avatar",style:({
          backgroundImage: ("url(" + _vm.chatImageUrl + ")")
        }),attrs:{"title":_vm.authorName}}):_vm._e()],{"message":_vm.message,"user":_vm.user}),(_vm.message.type === 'text')?_c('TextMessage',{attrs:{"message":_vm.message,"message-colors":_vm.messageColors,"message-styling":_vm.messageStyling,"show-edition":_vm.showEdition,"show-deletion":_vm.showDeletion},on:{"remove":function($event){return _vm.$emit('remove')}},scopedSlots:_vm._u([{key:"default",fn:function(scopedProps){return [_vm._t("text-message-body",null,{"message":scopedProps.message,"messageText":scopedProps.messageText,"messageColors":scopedProps.messageColors,"me":scopedProps.me})]}},{key:"text-message-toolbox",fn:function(scopedProps){return [_vm._t("text-message-toolbox",null,{"message":scopedProps.message,"me":scopedProps.me})]}}],null,true)}):(_vm.message.type === 'emoji')?_c('EmojiMessage',{attrs:{"data":_vm.message.data}}):(_vm.message.type === 'file')?_c('FileMessage',{attrs:{"data":_vm.message.data,"message-colors":_vm.messageColors}}):(_vm.message.type === 'typing')?_c('TypingMessage',{attrs:{"message-colors":_vm.messageColors}}):(_vm.message.type === 'system')?_c('SystemMessage',{attrs:{"data":_vm.message.data,"message-colors":_vm.messageColors}},[_vm._t("system-message-body",null,{"message":_vm.message.data})],2):_vm._e()],2)])}
var Messagevue_type_template_id_4900fe50_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/Message.vue?vue&type=template&id=4900fe50&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/TextMessage.vue?vue&type=template&id=cac4baf8&scoped=true&
var TextMessagevue_type_template_id_cac4baf8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-message--text",style:(_vm.messageColors)},[[_c('div',{staticClass:"sc-message--toolbox",style:({background: _vm.messageColors.backgroundColor})},[(_vm.showEdition && _vm.me && _vm.message.id != null && _vm.message.id != undefined)?_c('button',{attrs:{"disabled":_vm.isEditing},on:{"click":_vm.edit}},[_c('IconBase',{attrs:{"color":_vm.isEditing ? 'black' : _vm.messageColors.color,"width":"10","icon-name":"edit"}},[_c('IconEdit')],1)],1):_vm._e(),(_vm.showDeletion && _vm.me && _vm.message.id != null && _vm.message.id != undefined)?_c('button',{on:{"click":function($event){return _vm.$emit('remove')}}},[_c('IconBase',{attrs:{"color":_vm.messageColors.color,"width":"10","icon-name":"remove"}},[_c('IconCross')],1)],1):_vm._e(),_vm._t("text-message-toolbox",null,{"message":_vm.message,"me":_vm.me})],2)],_vm._t("default",[_c('p',{staticClass:"sc-message--text-content",domProps:{"innerHTML":_vm._s(_vm.messageText)}}),(_vm.message.data.meta)?_c('p',{staticClass:"sc-message--meta",style:({color: _vm.messageColors.color})},[_vm._v(" "+_vm._s(_vm.message.data.meta)+" ")]):_vm._e(),(_vm.message.isEdited)?_c('p',{staticClass:"sc-message--edited"},[_c('IconBase',{attrs:{"width":"10","icon-name":"edited"}},[_c('IconEdit')],1),_vm._v(" edited ")],1):_vm._e()],{"message":_vm.message,"messageText":_vm.messageText,"messageColors":_vm.messageColors,"me":_vm.me})],2)}
var TextMessagevue_type_template_id_cac4baf8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/TextMessage.vue?vue&type=template&id=cac4baf8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__("9911");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/components/IconBase.vue?vue&type=template&id=61cb7619&scoped=true&
var IconBasevue_type_template_id_61cb7619_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":_vm.width,"height":_vm.height,"viewBox":"0 0 18 18","aria-labelledby":_vm.iconName,"role":"presentation"}},[_c('title',{attrs:{"id":_vm.iconName,"lang":"en"}},[_vm._v(_vm._s(_vm.iconName))]),_c('g',{attrs:{"fill":_vm.iconColor}},[_vm._t("default")],2)])}
var IconBasevue_type_template_id_61cb7619_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/components/IconBase.vue?vue&type=template&id=61cb7619&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/components/IconBase.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var IconBasevue_type_script_lang_js_ = ({
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/components/IconBase.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IconBasevue_type_script_lang_js_ = (IconBasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/components/IconBase.vue?vue&type=style&index=0&id=61cb7619&scoped=true&lang=css&
var IconBasevue_type_style_index_0_id_61cb7619_scoped_true_lang_css_ = __webpack_require__("c1ca");

// CONCATENATED MODULE: ./src/vue_chat_plugin/components/IconBase.vue






/* normalize component */

var IconBase_component = normalizeComponent(
  components_IconBasevue_type_script_lang_js_,
  IconBasevue_type_template_id_61cb7619_scoped_true_render,
  IconBasevue_type_template_id_61cb7619_scoped_true_staticRenderFns,
  false,
  null,
  "61cb7619",
  null
  
)

/* harmony default export */ var IconBase = (IconBase_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/components/icons/IconEdit.vue?vue&type=template&id=1def110c&
var IconEditvue_type_template_id_1def110c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('path',{attrs:{"d":"M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"}})}
var IconEditvue_type_template_id_1def110c_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconEdit.vue?vue&type=template&id=1def110c&

// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconEdit.vue

var script = {}


/* normalize component */

var IconEdit_component = normalizeComponent(
  script,
  IconEditvue_type_template_id_1def110c_render,
  IconEditvue_type_template_id_1def110c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconEdit = (IconEdit_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/components/icons/IconCross.vue?vue&type=template&id=549bcf9f&
var IconCrossvue_type_template_id_549bcf9f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('path',{attrs:{"d":"M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"}})}
var IconCrossvue_type_template_id_549bcf9f_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconCross.vue?vue&type=template&id=549bcf9f&

// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconCross.vue

var IconCross_script = {}


/* normalize component */

var IconCross_component = normalizeComponent(
  IconCross_script,
  IconCrossvue_type_template_id_549bcf9f_render,
  IconCrossvue_type_template_id_549bcf9f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconCross = (IconCross_component.exports);
// EXTERNAL MODULE: ./node_modules/escape-goat/index.js
var escape_goat = __webpack_require__("21eb");

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/utils.js
/**
 * Assigns (shallow copies) the properties of `src` onto `dest`, if the
 * corresponding property on `dest` === `undefined`.
 *
 * @param {Object} dest The destination object.
 * @param {Object} src The source object.
 * @return {Object} The destination object (`dest`)
 */
function defaults(dest, src) {
    for (var prop in src) {
        if (src.hasOwnProperty(prop) && dest[prop] === undefined) {
            dest[prop] = src[prop];
        }
    }
    return dest;
}
/**
 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
 * end of the string (by default, two periods: '..'). If the `str` length does not exceed
 * `len`, the string will be returned unchanged.
 *
 * @param {String} str The string to truncate and add an ellipsis to.
 * @param {Number} truncateLen The length to truncate the string at.
 * @param {String} [ellipsisChars=...] The ellipsis character(s) to add to the end of `str`
 *   when truncated. Defaults to '...'
 */
function ellipsis(str, truncateLen, ellipsisChars) {
    var ellipsisLength;
    if (str.length > truncateLen) {
        if (ellipsisChars == null) {
            ellipsisChars = '&hellip;';
            ellipsisLength = 3;
        }
        else {
            ellipsisLength = ellipsisChars.length;
        }
        str = str.substring(0, truncateLen - ellipsisLength) + ellipsisChars;
    }
    return str;
}
/**
 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
 *
 * @param {Array} arr The array to find an element of.
 * @param {*} element The element to find in the array, and return the index of.
 * @return {Number} The index of the `element`, or -1 if it was not found.
 */
function indexOf(arr, element) {
    if (Array.prototype.indexOf) {
        return arr.indexOf(element);
    }
    else {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === element)
                return i;
        }
        return -1;
    }
}
/**
 * Removes array elements based on a filtering function. Mutates the input
 * array.
 *
 * Using this instead of the ES5 Array.prototype.filter() function, to allow
 * Autolinker compatibility with IE8, and also to prevent creating many new
 * arrays in memory for filtering.
 *
 * @param {Array} arr The array to remove elements from. This array is
 *   mutated.
 * @param {Function} fn A function which should return `true` to
 *   remove an element.
 * @return {Array} The mutated input `arr`.
 */
function remove(arr, fn) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (fn(arr[i]) === true) {
            arr.splice(i, 1);
        }
    }
}
/**
 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
 * with a regular expression that contains capturing parenthesis.
 *
 * For example:
 *
 *     // Modern browsers:
 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
 *
 *     // Old IE (including IE8):
 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
 *
 * This method emulates the functionality of modern browsers for the old IE case.
 *
 * @param {String} str The string to split.
 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
 *   character(s) will be spliced into the array, as in the "modern browsers" example in the
 *   description of this method.
 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
 *   Note #2: for simplicity's sake, the regular expression does not need
 *   to contain capturing parenthesis - it will be assumed that any match has them.
 * @return {String[]} The split array of strings, with the splitting character(s) included.
 */
function splitAndCapture(str, splitRegex) {
    if (!splitRegex.global)
        throw new Error("`splitRegex` must have the 'g' flag set");
    var result = [], lastIdx = 0, match;
    while (match = splitRegex.exec(str)) {
        result.push(str.substring(lastIdx, match.index));
        result.push(match[0]); // push the splitting char(s)
        lastIdx = match.index + match[0].length;
    }
    result.push(str.substring(lastIdx));
    return result;
}
/**
 * Function that should never be called but is used to check that every
 * enum value is handled using TypeScript's 'never' type.
 */
function throwUnhandledCaseError(theValue) {
    throw new Error("Unhandled case for value: '" + theValue + "'");
}

//# sourceMappingURL=utils.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/html-tag.js

/**
 * @class Autolinker.HtmlTag
 * @extends Object
 *
 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
 *
 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
 *
 * ## Examples
 *
 * Example instantiation:
 *
 *     var tag = new Autolinker.HtmlTag( {
 *         tagName : 'a',
 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
 *         innerHtml : 'Google'
 *     } );
 *
 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
 *
 *     // Individual accessor methods
 *     tag.getTagName();                 // 'a'
 *     tag.getAttr( 'href' );            // 'http://google.com'
 *     tag.hasClass( 'external-link' );  // true
 *
 *
 * Using mutator methods (which may be used in combination with instantiation config properties):
 *
 *     var tag = new Autolinker.HtmlTag();
 *     tag.setTagName( 'a' );
 *     tag.setAttr( 'href', 'http://google.com' );
 *     tag.addClass( 'external-link' );
 *     tag.setInnerHtml( 'Google' );
 *
 *     tag.getTagName();                 // 'a'
 *     tag.getAttr( 'href' );            // 'http://google.com'
 *     tag.hasClass( 'external-link' );  // true
 *
 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>
 *
 *
 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
 *
 *     var html = Autolinker.link( "Test google.com", {
 *         replaceFn : function( match ) {
 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
 *             tag.setAttr( 'rel', 'nofollow' );
 *
 *             return tag;
 *         }
 *     } );
 *
 *     // generated html:
 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
 *
 *
 * ## Example use with a new tag for the replacement
 *
 *     var html = Autolinker.link( "Test google.com", {
 *         replaceFn : function( match ) {
 *             var tag = new Autolinker.HtmlTag( {
 *                 tagName : 'button',
 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
 *             } );
 *
 *             return tag;
 *         }
 *     } );
 *
 *     // generated html:
 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
 */
var html_tag_HtmlTag = /** @class */ (function () {
    /**
     * @method constructor
     * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
     */
    function HtmlTag(cfg) {
        if (cfg === void 0) { cfg = {}; }
        /**
         * @cfg {String} tagName
         *
         * The tag name. Ex: 'a', 'button', etc.
         *
         * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toAnchorString}
         * is executed.
         */
        this.tagName = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Object.<String, String>} attrs
         *
         * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
         * values are the attribute values.
         */
        this.attrs = {}; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {String} innerHTML
         *
         * The inner HTML for the tag.
         */
        this.innerHTML = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @protected
         * @property {RegExp} whitespaceRegex
         *
         * Regular expression used to match whitespace in a string of CSS classes.
         */
        this.whitespaceRegex = /\s+/; // default value just to get the above doc comment in the ES5 output and documentation generator
        this.tagName = cfg.tagName || '';
        this.attrs = cfg.attrs || {};
        this.innerHTML = cfg.innerHtml || cfg.innerHTML || ''; // accept either the camelCased form or the fully capitalized acronym as in the DOM
    }
    /**
     * Sets the tag name that will be used to generate the tag with.
     *
     * @param {String} tagName
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.setTagName = function (tagName) {
        this.tagName = tagName;
        return this;
    };
    /**
     * Retrieves the tag name.
     *
     * @return {String}
     */
    HtmlTag.prototype.getTagName = function () {
        return this.tagName || '';
    };
    /**
     * Sets an attribute on the HtmlTag.
     *
     * @param {String} attrName The attribute name to set.
     * @param {String} attrValue The attribute value to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.setAttr = function (attrName, attrValue) {
        var tagAttrs = this.getAttrs();
        tagAttrs[attrName] = attrValue;
        return this;
    };
    /**
     * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
     *
     * @param {String} attrName The attribute name to retrieve.
     * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
     */
    HtmlTag.prototype.getAttr = function (attrName) {
        return this.getAttrs()[attrName];
    };
    /**
     * Sets one or more attributes on the HtmlTag.
     *
     * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.setAttrs = function (attrs) {
        Object.assign(this.getAttrs(), attrs);
        return this;
    };
    /**
     * Retrieves the attributes Object (map) for the HtmlTag.
     *
     * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
     */
    HtmlTag.prototype.getAttrs = function () {
        return this.attrs || (this.attrs = {});
    };
    /**
     * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
     *
     * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.setClass = function (cssClass) {
        return this.setAttr('class', cssClass);
    };
    /**
     * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
     *
     * @param {String} cssClass One or more space-separated CSS classes to add.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.addClass = function (cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, classes = (!classAttr) ? [] : classAttr.split(whitespaceRegex), newClasses = cssClass.split(whitespaceRegex), newClass;
        while (newClass = newClasses.shift()) {
            if (indexOf(classes, newClass) === -1) {
                classes.push(newClass);
            }
        }
        this.getAttrs()['class'] = classes.join(" ");
        return this;
    };
    /**
     * Convenience method to remove one or more CSS classes from the HtmlTag.
     *
     * @param {String} cssClass One or more space-separated CSS classes to remove.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.removeClass = function (cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, classes = (!classAttr) ? [] : classAttr.split(whitespaceRegex), removeClasses = cssClass.split(whitespaceRegex), removeClass;
        while (classes.length && (removeClass = removeClasses.shift())) {
            var idx = indexOf(classes, removeClass);
            if (idx !== -1) {
                classes.splice(idx, 1);
            }
        }
        this.getAttrs()['class'] = classes.join(" ");
        return this;
    };
    /**
     * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
     * there are multiple.
     *
     * @return {String}
     */
    HtmlTag.prototype.getClass = function () {
        return this.getAttrs()['class'] || "";
    };
    /**
     * Convenience method to check if the tag has a CSS class or not.
     *
     * @param {String} cssClass The CSS class to check for.
     * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
     */
    HtmlTag.prototype.hasClass = function (cssClass) {
        return (' ' + this.getClass() + ' ').indexOf(' ' + cssClass + ' ') !== -1;
    };
    /**
     * Sets the inner HTML for the tag.
     *
     * @param {String} html The inner HTML to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.setInnerHTML = function (html) {
        this.innerHTML = html;
        return this;
    };
    /**
     * Backwards compatibility method name.
     *
     * @param {String} html The inner HTML to set.
     * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
     */
    HtmlTag.prototype.setInnerHtml = function (html) {
        return this.setInnerHTML(html);
    };
    /**
     * Retrieves the inner HTML for the tag.
     *
     * @return {String}
     */
    HtmlTag.prototype.getInnerHTML = function () {
        return this.innerHTML || "";
    };
    /**
     * Backward compatibility method name.
     *
     * @return {String}
     */
    HtmlTag.prototype.getInnerHtml = function () {
        return this.getInnerHTML();
    };
    /**
     * Override of superclass method used to generate the HTML string for the tag.
     *
     * @return {String}
     */
    HtmlTag.prototype.toAnchorString = function () {
        var tagName = this.getTagName(), attrsStr = this.buildAttrsStr();
        attrsStr = (attrsStr) ? ' ' + attrsStr : ''; // prepend a space if there are actually attributes
        return ['<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>'].join("");
    };
    /**
     * Support method for {@link #toAnchorString}, returns the string space-separated key="value" pairs, used to populate
     * the stringified HtmlTag.
     *
     * @protected
     * @return {String} Example return: `attr1="value1" attr2="value2"`
     */
    HtmlTag.prototype.buildAttrsStr = function () {
        if (!this.attrs)
            return ""; // no `attrs` Object (map) has been set, return empty string
        var attrs = this.getAttrs(), attrsArr = [];
        for (var prop in attrs) {
            if (attrs.hasOwnProperty(prop)) {
                attrsArr.push(prop + '="' + attrs[prop] + '"');
            }
        }
        return attrsArr.join(" ");
    };
    return HtmlTag;
}());


//# sourceMappingURL=html-tag.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/truncate/truncate-smart.js
/**
 * Date: 2015-10-05
 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
 *
 * A truncation feature, where the ellipsis will be placed at a section within
 * the URL making it still somewhat human readable.
 *
 * @param {String} url						 A URL.
 * @param {Number} truncateLen		 The maximum length of the truncated output URL string.
 * @param {String} ellipsisChars	 The characters to place within the url, e.g. "...".
 * @return {String} The truncated URL.
 */
function truncateSmart(url, truncateLen, ellipsisChars) {
    var ellipsisLengthBeforeParsing;
    var ellipsisLength;
    if (ellipsisChars == null) {
        ellipsisChars = '&hellip;';
        ellipsisLength = 3;
        ellipsisLengthBeforeParsing = 8;
    }
    else {
        ellipsisLength = ellipsisChars.length;
        ellipsisLengthBeforeParsing = ellipsisChars.length;
    }
    var parse_url = function (url) {
        var urlObj = {};
        var urlSub = url;
        var match = urlSub.match(/^([a-z]+):\/\//i);
        if (match) {
            urlObj.scheme = match[1];
            urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);
        if (match) {
            urlObj.host = match[1];
            urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);
        if (match) {
            urlObj.path = match[1];
            urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^\?(.*?)(?=(#|$))/i);
        if (match) {
            urlObj.query = match[1];
            urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^#(.*?)$/i);
        if (match) {
            urlObj.fragment = match[1];
            //urlSub = urlSub.substr(match[0].length);  -- not used. Uncomment if adding another block.
        }
        return urlObj;
    };
    var buildUrl = function (urlObj) {
        var url = "";
        if (urlObj.scheme && urlObj.host) {
            url += urlObj.scheme + "://";
        }
        if (urlObj.host) {
            url += urlObj.host;
        }
        if (urlObj.path) {
            url += "/" + urlObj.path;
        }
        if (urlObj.query) {
            url += "?" + urlObj.query;
        }
        if (urlObj.fragment) {
            url += "#" + urlObj.fragment;
        }
        return url;
    };
    var buildSegment = function (segment, remainingAvailableLength) {
        var remainingAvailableLengthHalf = remainingAvailableLength / 2, startOffset = Math.ceil(remainingAvailableLengthHalf), endOffset = (-1) * Math.floor(remainingAvailableLengthHalf), end = "";
        if (endOffset < 0) {
            end = segment.substr(endOffset);
        }
        return segment.substr(0, startOffset) + ellipsisChars + end;
    };
    if (url.length <= truncateLen) {
        return url;
    }
    var availableLength = truncateLen - ellipsisLength;
    var urlObj = parse_url(url);
    // Clean up the URL
    if (urlObj.query) {
        var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
        if (matchQuery) {
            // Malformed URL; two or more "?". Removed any content behind the 2nd.
            urlObj.query = urlObj.query.substr(0, matchQuery[1].length);
            url = buildUrl(urlObj);
        }
    }
    if (url.length <= truncateLen) {
        return url;
    }
    if (urlObj.host) {
        urlObj.host = urlObj.host.replace(/^www\./, "");
        url = buildUrl(urlObj);
    }
    if (url.length <= truncateLen) {
        return url;
    }
    // Process and build the URL
    var str = "";
    if (urlObj.host) {
        str += urlObj.host;
    }
    if (str.length >= availableLength) {
        if (urlObj.host.length == truncateLen) {
            return (urlObj.host.substr(0, (truncateLen - ellipsisLength)) + ellipsisChars).substr(0, availableLength + ellipsisLengthBeforeParsing);
        }
        return buildSegment(str, availableLength).substr(0, availableLength + ellipsisLengthBeforeParsing);
    }
    var pathAndQuery = "";
    if (urlObj.path) {
        pathAndQuery += "/" + urlObj.path;
    }
    if (urlObj.query) {
        pathAndQuery += "?" + urlObj.query;
    }
    if (pathAndQuery) {
        if ((str + pathAndQuery).length >= availableLength) {
            if ((str + pathAndQuery).length == truncateLen) {
                return (str + pathAndQuery).substr(0, truncateLen);
            }
            var remainingAvailableLength = availableLength - str.length;
            return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, availableLength + ellipsisLengthBeforeParsing);
        }
        else {
            str += pathAndQuery;
        }
    }
    if (urlObj.fragment) {
        var fragment = "#" + urlObj.fragment;
        if ((str + fragment).length >= availableLength) {
            if ((str + fragment).length == truncateLen) {
                return (str + fragment).substr(0, truncateLen);
            }
            var remainingAvailableLength2 = availableLength - str.length;
            return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, availableLength + ellipsisLengthBeforeParsing);
        }
        else {
            str += fragment;
        }
    }
    if (urlObj.scheme && urlObj.host) {
        var scheme = urlObj.scheme + "://";
        if ((str + scheme).length < availableLength) {
            return (scheme + str).substr(0, truncateLen);
        }
    }
    if (str.length <= truncateLen) {
        return str;
    }
    var end = "";
    if (availableLength > 0) {
        end = str.substr((-1) * Math.floor(availableLength / 2));
    }
    return (str.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
}

//# sourceMappingURL=truncate-smart.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/truncate/truncate-middle.js
/**
 * Date: 2015-10-05
 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)
 *
 * A truncation feature, where the ellipsis will be placed in the dead-center of the URL.
 *
 * @param {String} url             A URL.
 * @param {Number} truncateLen     The maximum length of the truncated output URL string.
 * @param {String} ellipsisChars   The characters to place within the url, e.g. "..".
 * @return {String} The truncated URL.
 */
function truncateMiddle(url, truncateLen, ellipsisChars) {
    if (url.length <= truncateLen) {
        return url;
    }
    var ellipsisLengthBeforeParsing;
    var ellipsisLength;
    if (ellipsisChars == null) {
        ellipsisChars = '&hellip;';
        ellipsisLengthBeforeParsing = 8;
        ellipsisLength = 3;
    }
    else {
        ellipsisLengthBeforeParsing = ellipsisChars.length;
        ellipsisLength = ellipsisChars.length;
    }
    var availableLength = truncateLen - ellipsisLength;
    var end = "";
    if (availableLength > 0) {
        end = url.substr((-1) * Math.floor(availableLength / 2));
    }
    return (url.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
}

//# sourceMappingURL=truncate-middle.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/truncate/truncate-end.js

/**
 * A truncation feature where the ellipsis will be placed at the end of the URL.
 *
 * @param {String} anchorText
 * @param {Number} truncateLen The maximum length of the truncated output URL string.
 * @param {String} ellipsisChars The characters to place within the url, e.g. "..".
 * @return {String} The truncated URL.
 */
function truncateEnd(anchorText, truncateLen, ellipsisChars) {
    return ellipsis(anchorText, truncateLen, ellipsisChars);
}

//# sourceMappingURL=truncate-end.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/anchor-tag-builder.js




/**
 * @protected
 * @class Autolinker.AnchorTagBuilder
 * @extends Object
 *
 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is
 * found.
 *
 * Normally this class is instantiated, configured, and used internally by an
 * {@link Autolinker} instance, but may actually be used indirectly in a
 * {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag}
 * instances which may be modified before returning from the
 * {@link Autolinker#replaceFn replaceFn}. For example:
 *
 *     var html = Autolinker.link( "Test google.com", {
 *         replaceFn : function( match ) {
 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance
 *             tag.setAttr( 'rel', 'nofollow' );
 *
 *             return tag;
 *         }
 *     } );
 *
 *     // generated html:
 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
 */
var anchor_tag_builder_AnchorTagBuilder = /** @class */ (function () {
    /**
     * @method constructor
     * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
     */
    function AnchorTagBuilder(cfg) {
        if (cfg === void 0) { cfg = {}; }
        /**
         * @cfg {Boolean} newWindow
         * @inheritdoc Autolinker#newWindow
         */
        this.newWindow = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Object} truncate
         * @inheritdoc Autolinker#truncate
         */
        this.truncate = {}; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {String} className
         * @inheritdoc Autolinker#className
         */
        this.className = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        this.newWindow = cfg.newWindow || false;
        this.truncate = cfg.truncate || {};
        this.className = cfg.className || '';
    }
    /**
     * Generates the actual anchor (&lt;a&gt;) tag to use in place of the
     * matched text, via its `match` object.
     *
     * @param {Autolinker.match.Match} match The Match instance to generate an
     *   anchor tag from.
     * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
     */
    AnchorTagBuilder.prototype.build = function (match) {
        return new html_tag_HtmlTag({
            tagName: 'a',
            attrs: this.createAttrs(match),
            innerHtml: this.processAnchorText(match.getAnchorText())
        });
    };
    /**
     * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;)
     *   tag being generated.
     *
     * @protected
     * @param {Autolinker.match.Match} match The Match instance to generate an
     *   anchor tag from.
     * @return {Object} A key/value Object (map) of the anchor tag's attributes.
     */
    AnchorTagBuilder.prototype.createAttrs = function (match) {
        var attrs = {
            'href': match.getAnchorHref() // we'll always have the `href` attribute
        };
        var cssClass = this.createCssClass(match);
        if (cssClass) {
            attrs['class'] = cssClass;
        }
        if (this.newWindow) {
            attrs['target'] = "_blank";
            attrs['rel'] = "noopener noreferrer"; // Issue #149. See https://mathiasbynens.github.io/rel-noopener/
        }
        if (this.truncate) {
            if (this.truncate.length && this.truncate.length < match.getAnchorText().length) {
                attrs['title'] = match.getAnchorHref();
            }
        }
        return attrs;
    };
    /**
     * Creates the CSS class that will be used for a given anchor tag, based on
     * the `matchType` and the {@link #className} config.
     *
     * Example returns:
     *
     * - ""                                      // no {@link #className}
     * - "myLink myLink-url"                     // url match
     * - "myLink myLink-email"                   // email match
     * - "myLink myLink-phone"                   // phone match
     * - "myLink myLink-hashtag"                 // hashtag match
     * - "myLink myLink-mention myLink-twitter"  // mention match with Twitter service
     *
     * @protected
     * @param {Autolinker.match.Match} match The Match instance to generate an
     *   anchor tag from.
     * @return {String} The CSS class string for the link. Example return:
     *   "myLink myLink-url". If no {@link #className} was configured, returns
     *   an empty string.
     */
    AnchorTagBuilder.prototype.createCssClass = function (match) {
        var className = this.className;
        if (!className) {
            return "";
        }
        else {
            var returnClasses = [className], cssClassSuffixes = match.getCssClassSuffixes();
            for (var i = 0, len = cssClassSuffixes.length; i < len; i++) {
                returnClasses.push(className + '-' + cssClassSuffixes[i]);
            }
            return returnClasses.join(' ');
        }
    };
    /**
     * Processes the `anchorText` by truncating the text according to the
     * {@link #truncate} config.
     *
     * @private
     * @param {String} anchorText The anchor tag's text (i.e. what will be
     *   displayed).
     * @return {String} The processed `anchorText`.
     */
    AnchorTagBuilder.prototype.processAnchorText = function (anchorText) {
        anchorText = this.doTruncate(anchorText);
        return anchorText;
    };
    /**
     * Performs the truncation of the `anchorText` based on the {@link #truncate}
     * option. If the `anchorText` is longer than the length specified by the
     * {@link #truncate} option, the truncation is performed based on the
     * `location` property. See {@link #truncate} for details.
     *
     * @private
     * @param {String} anchorText The anchor tag's text (i.e. what will be
     *   displayed).
     * @return {String} The truncated anchor text.
     */
    AnchorTagBuilder.prototype.doTruncate = function (anchorText) {
        var truncate = this.truncate;
        if (!truncate || !truncate.length)
            return anchorText;
        var truncateLength = truncate.length, truncateLocation = truncate.location;
        if (truncateLocation === 'smart') {
            return truncateSmart(anchorText, truncateLength);
        }
        else if (truncateLocation === 'middle') {
            return truncateMiddle(anchorText, truncateLength);
        }
        else {
            return truncateEnd(anchorText, truncateLength);
        }
    };
    return AnchorTagBuilder;
}());


//# sourceMappingURL=anchor-tag-builder.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/match.js
/**
 * @abstract
 * @class Autolinker.match.Match
 *
 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a
 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
 *
 * For example:
 *
 *     var input = "...";  // string with URLs, Email Addresses, and Mentions (Twitter, Instagram, Soundcloud)
 *
 *     var linkedText = Autolinker.link( input, {
 *         replaceFn : function( match ) {
 *             console.log( "href = ", match.getAnchorHref() );
 *             console.log( "text = ", match.getAnchorText() );
 *
 *             switch( match.getType() ) {
 *                 case 'url' :
 *                     console.log( "url: ", match.getUrl() );
 *
 *                 case 'email' :
 *                     console.log( "email: ", match.getEmail() );
 *
 *                 case 'mention' :
 *                     console.log( "mention: ", match.getMention() );
 *             }
 *         }
 *     } );
 *
 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
 */
var Match = /** @class */ (function () {
    /**
     * @member Autolinker.match.Match
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match
     *   instance, specified in an Object (map).
     */
    function Match(cfg) {
        /**
         * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)
         *
         * Reference to the AnchorTagBuilder instance to use to generate an anchor
         * tag for the Match.
         */
        this.__jsduckDummyDocProp = null; // property used just to get the above doc comment into the ES5 output and documentation generator
        /**
         * @cfg {String} matchedText (required)
         *
         * The original text that was matched by the {@link Autolinker.matcher.Matcher}.
         */
        this.matchedText = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Number} offset (required)
         *
         * The offset of where the match was made in the input string.
         */
        this.offset = 0; // default value just to get the above doc comment in the ES5 output and documentation generator
        this.tagBuilder = cfg.tagBuilder;
        this.matchedText = cfg.matchedText;
        this.offset = cfg.offset;
    }
    /**
     * Returns the original text that was matched.
     *
     * @return {String}
     */
    Match.prototype.getMatchedText = function () {
        return this.matchedText;
    };
    /**
     * Sets the {@link #offset} of where the match was made in the input string.
     *
     * A {@link Autolinker.matcher.Matcher} will be fed only HTML text nodes,
     * and will therefore set an original offset that is relative to the HTML
     * text node itself. However, we want this offset to be relative to the full
     * HTML input string, and thus if using {@link Autolinker#parse} (rather
     * than calling a {@link Autolinker.matcher.Matcher} directly), then this
     * offset is corrected after the Matcher itself has done its job.
     *
     * @param {Number} offset
     */
    Match.prototype.setOffset = function (offset) {
        this.offset = offset;
    };
    /**
     * Returns the offset of where the match was made in the input string. This
     * is the 0-based index of the match.
     *
     * @return {Number}
     */
    Match.prototype.getOffset = function () {
        return this.offset;
    };
    /**
     * Returns the CSS class suffix(es) for this match.
     *
     * A CSS class suffix is appended to the {@link Autolinker#className} in
     * the {@link Autolinker.AnchorTagBuilder} when a match is translated into
     * an anchor tag.
     *
     * For example, if {@link Autolinker#className} was configured as 'myLink',
     * and this method returns `[ 'url' ]`, the final class name of the element
     * will become: 'myLink myLink-url'.
     *
     * The match may provide multiple CSS class suffixes to be appended to the
     * {@link Autolinker#className} in order to facilitate better styling
     * options for different match criteria. See {@link Autolinker.match.Mention}
     * for an example.
     *
     * By default, this method returns a single array with the match's
     * {@link #getType type} name, but may be overridden by subclasses.
     *
     * @return {String[]}
     */
    Match.prototype.getCssClassSuffixes = function () {
        return [this.getType()];
    };
    /**
     * Builds and returns an {@link Autolinker.HtmlTag} instance based on the
     * Match.
     *
     * This can be used to easily generate anchor tags from matches, and either
     * return their HTML string, or modify them before doing so.
     *
     * Example Usage:
     *
     *     var tag = match.buildTag();
     *     tag.addClass( 'cordova-link' );
     *     tag.setAttr( 'target', '_system' );
     *
     *     tag.toAnchorString();  // <a href="http://google.com" class="cordova-link" target="_system">Google</a>
     *
     * Example Usage in {@link Autolinker#replaceFn}:
     *
     *     var html = Autolinker.link( "Test google.com", {
     *         replaceFn : function( match ) {
     *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance
     *             tag.setAttr( 'rel', 'nofollow' );
     *
     *             return tag;
     *         }
     *     } );
     *
     *     // generated html:
     *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
     */
    Match.prototype.buildTag = function () {
        return this.tagBuilder.build(this);
    };
    return Match;
}());


//# sourceMappingURL=match.js.map

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/email-match.js


/**
 * @class Autolinker.match.Email
 * @extends Autolinker.match.Match
 *
 * Represents a Email match found in an input string which should be Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
var email_match_EmailMatch = /** @class */ (function (_super) {
    __extends(EmailMatch, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match
     *   instance, specified in an Object (map).
     */
    function EmailMatch(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {String} email (required)
         *
         * The email address that was matched.
         */
        _this.email = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        _this.email = cfg.email;
        return _this;
    }
    /**
     * Returns a string name for the type of match that this class represents.
     * For the case of EmailMatch, returns 'email'.
     *
     * @return {String}
     */
    EmailMatch.prototype.getType = function () {
        return 'email';
    };
    /**
     * Returns the email address that was matched.
     *
     * @return {String}
     */
    EmailMatch.prototype.getEmail = function () {
        return this.email;
    };
    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    EmailMatch.prototype.getAnchorHref = function () {
        return 'mailto:' + this.email;
    };
    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    EmailMatch.prototype.getAnchorText = function () {
        return this.email;
    };
    return EmailMatch;
}(Match));


//# sourceMappingURL=email-match.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/hashtag-match.js


/**
 * @class Autolinker.match.Hashtag
 * @extends Autolinker.match.Match
 *
 * Represents a Hashtag match found in an input string which should be
 * Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more
 * details.
 */
var hashtag_match_HashtagMatch = /** @class */ (function (_super) {
    __extends(HashtagMatch, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match
     *   instance, specified in an Object (map).
     */
    function HashtagMatch(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {String} serviceName
         *
         * The service to point hashtag matches to. See {@link Autolinker#hashtag}
         * for available values.
         */
        _this.serviceName = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {String} hashtag (required)
         *
         * The HashtagMatch that was matched, without the '#'.
         */
        _this.hashtag = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        _this.serviceName = cfg.serviceName;
        _this.hashtag = cfg.hashtag;
        return _this;
    }
    /**
     * Returns a string name for the type of match that this class represents.
     * For the case of HashtagMatch, returns 'hashtag'.
     *
     * @return {String}
     */
    HashtagMatch.prototype.getType = function () {
        return 'hashtag';
    };
    /**
     * Returns the configured {@link #serviceName} to point the HashtagMatch to.
     * Ex: 'facebook', 'twitter'.
     *
     * @return {String}
     */
    HashtagMatch.prototype.getServiceName = function () {
        return this.serviceName;
    };
    /**
     * Returns the matched hashtag, without the '#' character.
     *
     * @return {String}
     */
    HashtagMatch.prototype.getHashtag = function () {
        return this.hashtag;
    };
    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    HashtagMatch.prototype.getAnchorHref = function () {
        var serviceName = this.serviceName, hashtag = this.hashtag;
        switch (serviceName) {
            case 'twitter':
                return 'https://twitter.com/hashtag/' + hashtag;
            case 'facebook':
                return 'https://www.facebook.com/hashtag/' + hashtag;
            case 'instagram':
                return 'https://instagram.com/explore/tags/' + hashtag;
            default: // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
                throw new Error('Unknown service name to point hashtag to: ' + serviceName);
        }
    };
    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    HashtagMatch.prototype.getAnchorText = function () {
        return '#' + this.hashtag;
    };
    return HashtagMatch;
}(Match));


//# sourceMappingURL=hashtag-match.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/mention-match.js


/**
 * @class Autolinker.match.Mention
 * @extends Autolinker.match.Match
 *
 * Represents a Mention match found in an input string which should be Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
var mention_match_MentionMatch = /** @class */ (function (_super) {
    __extends(MentionMatch, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match
     *   instance, specified in an Object (map).
     */
    function MentionMatch(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {String} serviceName
         *
         * The service to point mention matches to. See {@link Autolinker#mention}
         * for available values.
         */
        _this.serviceName = 'twitter'; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {String} mention (required)
         *
         * The Mention that was matched, without the '@' character.
         */
        _this.mention = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        _this.mention = cfg.mention;
        _this.serviceName = cfg.serviceName;
        return _this;
    }
    /**
     * Returns a string name for the type of match that this class represents.
     * For the case of MentionMatch, returns 'mention'.
     *
     * @return {String}
     */
    MentionMatch.prototype.getType = function () {
        return 'mention';
    };
    /**
     * Returns the mention, without the '@' character.
     *
     * @return {String}
     */
    MentionMatch.prototype.getMention = function () {
        return this.mention;
    };
    /**
     * Returns the configured {@link #serviceName} to point the mention to.
     * Ex: 'instagram', 'twitter', 'soundcloud'.
     *
     * @return {String}
     */
    MentionMatch.prototype.getServiceName = function () {
        return this.serviceName;
    };
    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    MentionMatch.prototype.getAnchorHref = function () {
        switch (this.serviceName) {
            case 'twitter':
                return 'https://twitter.com/' + this.mention;
            case 'instagram':
                return 'https://instagram.com/' + this.mention;
            case 'soundcloud':
                return 'https://soundcloud.com/' + this.mention;
            default: // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.
                throw new Error('Unknown service name to point mention to: ' + this.serviceName);
        }
    };
    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    MentionMatch.prototype.getAnchorText = function () {
        return '@' + this.mention;
    };
    /**
     * Returns the CSS class suffixes that should be used on a tag built with
     * the match. See {@link Autolinker.match.Match#getCssClassSuffixes} for
     * details.
     *
     * @return {String[]}
     */
    MentionMatch.prototype.getCssClassSuffixes = function () {
        var cssClassSuffixes = _super.prototype.getCssClassSuffixes.call(this), serviceName = this.getServiceName();
        if (serviceName) {
            cssClassSuffixes.push(serviceName);
        }
        return cssClassSuffixes;
    };
    return MentionMatch;
}(Match));


//# sourceMappingURL=mention-match.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/phone-match.js


/**
 * @class Autolinker.match.Phone
 * @extends Autolinker.match.Match
 *
 * Represents a Phone number match found in an input string which should be
 * Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more
 * details.
 */
var phone_match_PhoneMatch = /** @class */ (function (_super) {
    __extends(PhoneMatch, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match
     *   instance, specified in an Object (map).
     */
    function PhoneMatch(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @protected
         * @property {String} number (required)
         *
         * The phone number that was matched, without any delimiter characters.
         *
         * Note: This is a string to allow for prefixed 0's.
         */
        _this.number = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @protected
         * @property  {Boolean} plusSign (required)
         *
         * `true` if the matched phone number started with a '+' sign. We'll include
         * it in the `tel:` URL if so, as this is needed for international numbers.
         *
         * Ex: '+1 (123) 456 7879'
         */
        _this.plusSign = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        _this.number = cfg.number;
        _this.plusSign = cfg.plusSign;
        return _this;
    }
    /**
     * Returns a string name for the type of match that this class represents.
     * For the case of PhoneMatch, returns 'phone'.
     *
     * @return {String}
     */
    PhoneMatch.prototype.getType = function () {
        return 'phone';
    };
    /**
     * Returns the phone number that was matched as a string, without any
     * delimiter characters.
     *
     * Note: This is a string to allow for prefixed 0's.
     *
     * @return {String}
     */
    PhoneMatch.prototype.getPhoneNumber = function () {
        return this.number;
    };
    /**
     * Alias of {@link #getPhoneNumber}, returns the phone number that was
     * matched as a string, without any delimiter characters.
     *
     * Note: This is a string to allow for prefixed 0's.
     *
     * @return {String}
     */
    PhoneMatch.prototype.getNumber = function () {
        return this.getPhoneNumber();
    };
    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    PhoneMatch.prototype.getAnchorHref = function () {
        return 'tel:' + (this.plusSign ? '+' : '') + this.number;
    };
    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    PhoneMatch.prototype.getAnchorText = function () {
        return this.matchedText;
    };
    return PhoneMatch;
}(Match));


//# sourceMappingURL=phone-match.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/url-match.js


/**
 * @class Autolinker.match.Url
 * @extends Autolinker.match.Match
 *
 * Represents a Url match found in an input string which should be Autolinked.
 *
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
 */
var url_match_UrlMatch = /** @class */ (function (_super) {
    __extends(UrlMatch, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match
     *   instance, specified in an Object (map).
     */
    function UrlMatch(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {String} url (required)
         *
         * The url that was matched.
         */
        _this.url = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {"scheme"/"www"/"tld"} urlMatchType (required)
         *
         * The type of URL match that this class represents. This helps to determine
         * if the match was made in the original text with a prefixed scheme (ex:
         * 'http://www.google.com'), a prefixed 'www' (ex: 'www.google.com'), or
         * was matched by a known top-level domain (ex: 'google.com').
         */
        _this.urlMatchType = 'scheme'; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} protocolUrlMatch (required)
         *
         * `true` if the URL is a match which already has a protocol (i.e.
         * 'http://'), `false` if the match was from a 'www' or known TLD match.
         */
        _this.protocolUrlMatch = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} protocolRelativeMatch (required)
         *
         * `true` if the URL is a protocol-relative match. A protocol-relative match
         * is a URL that starts with '//', and will be either http:// or https://
         * based on the protocol that the site is loaded under.
         */
        _this.protocolRelativeMatch = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Object} stripPrefix (required)
         *
         * The Object form of {@link Autolinker#cfg-stripPrefix}.
         */
        _this.stripPrefix = { scheme: true, www: true }; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} stripTrailingSlash (required)
         * @inheritdoc Autolinker#cfg-stripTrailingSlash
         */
        _this.stripTrailingSlash = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} decodePercentEncoding (required)
         * @inheritdoc Autolinker#cfg-decodePercentEncoding
         */
        _this.decodePercentEncoding = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @private
         * @property {RegExp} schemePrefixRegex
         *
         * A regular expression used to remove the 'http://' or 'https://' from
         * URLs.
         */
        _this.schemePrefixRegex = /^(https?:\/\/)?/i;
        /**
         * @private
         * @property {RegExp} wwwPrefixRegex
         *
         * A regular expression used to remove the 'www.' from URLs.
         */
        _this.wwwPrefixRegex = /^(https?:\/\/)?(www\.)?/i;
        /**
         * @private
         * @property {RegExp} protocolRelativeRegex
         *
         * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
         * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
         */
        _this.protocolRelativeRegex = /^\/\//;
        /**
         * @private
         * @property {Boolean} protocolPrepended
         *
         * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
         * {@link #url} did not have a protocol)
         */
        _this.protocolPrepended = false;
        _this.urlMatchType = cfg.urlMatchType;
        _this.url = cfg.url;
        _this.protocolUrlMatch = cfg.protocolUrlMatch;
        _this.protocolRelativeMatch = cfg.protocolRelativeMatch;
        _this.stripPrefix = cfg.stripPrefix;
        _this.stripTrailingSlash = cfg.stripTrailingSlash;
        _this.decodePercentEncoding = cfg.decodePercentEncoding;
        return _this;
    }
    /**
     * Returns a string name for the type of match that this class represents.
     * For the case of UrlMatch, returns 'url'.
     *
     * @return {String}
     */
    UrlMatch.prototype.getType = function () {
        return 'url';
    };
    /**
     * Returns a string name for the type of URL match that this class
     * represents.
     *
     * This helps to determine if the match was made in the original text with a
     * prefixed scheme (ex: 'http://www.google.com'), a prefixed 'www' (ex:
     * 'www.google.com'), or was matched by a known top-level domain (ex:
     * 'google.com').
     *
     * @return {"scheme"/"www"/"tld"}
     */
    UrlMatch.prototype.getUrlMatchType = function () {
        return this.urlMatchType;
    };
    /**
     * Returns the url that was matched, assuming the protocol to be 'http://' if the original
     * match was missing a protocol.
     *
     * @return {String}
     */
    UrlMatch.prototype.getUrl = function () {
        var url = this.url;
        // if the url string doesn't begin with a protocol, assume 'http://'
        if (!this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended) {
            url = this.url = 'http://' + url;
            this.protocolPrepended = true;
        }
        return url;
    };
    /**
     * Returns the anchor href that should be generated for the match.
     *
     * @return {String}
     */
    UrlMatch.prototype.getAnchorHref = function () {
        var url = this.getUrl();
        return url.replace(/&amp;/g, '&'); // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html
    };
    /**
     * Returns the anchor text that should be generated for the match.
     *
     * @return {String}
     */
    UrlMatch.prototype.getAnchorText = function () {
        var anchorText = this.getMatchedText();
        if (this.protocolRelativeMatch) {
            // Strip off any protocol-relative '//' from the anchor text
            anchorText = this.stripProtocolRelativePrefix(anchorText);
        }
        if (this.stripPrefix.scheme) {
            anchorText = this.stripSchemePrefix(anchorText);
        }
        if (this.stripPrefix.www) {
            anchorText = this.stripWwwPrefix(anchorText);
        }
        if (this.stripTrailingSlash) {
            anchorText = this.removeTrailingSlash(anchorText); // remove trailing slash, if there is one
        }
        if (this.decodePercentEncoding) {
            anchorText = this.removePercentEncoding(anchorText);
        }
        return anchorText;
    };
    // ---------------------------------------
    // Utility Functionality
    /**
     * Strips the scheme prefix (such as "http://" or "https://") from the given
     * `url`.
     *
     * @private
     * @param {String} url The text of the anchor that is being generated, for
     *   which to strip off the url scheme.
     * @return {String} The `url`, with the scheme stripped.
     */
    UrlMatch.prototype.stripSchemePrefix = function (url) {
        return url.replace(this.schemePrefixRegex, '');
    };
    /**
     * Strips the 'www' prefix from the given `url`.
     *
     * @private
     * @param {String} url The text of the anchor that is being generated, for
     *   which to strip off the 'www' if it exists.
     * @return {String} The `url`, with the 'www' stripped.
     */
    UrlMatch.prototype.stripWwwPrefix = function (url) {
        return url.replace(this.wwwPrefixRegex, '$1'); // leave any scheme ($1), it one exists
    };
    /**
     * Strips any protocol-relative '//' from the anchor text.
     *
     * @private
     * @param {String} text The text of the anchor that is being generated, for which to strip off the
     *   protocol-relative prefix (such as stripping off "//")
     * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
     */
    UrlMatch.prototype.stripProtocolRelativePrefix = function (text) {
        return text.replace(this.protocolRelativeRegex, '');
    };
    /**
     * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
     *
     * @private
     * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
     *   slash ('/') that may exist.
     * @return {String} The `anchorText`, with the trailing slash removed.
     */
    UrlMatch.prototype.removeTrailingSlash = function (anchorText) {
        if (anchorText.charAt(anchorText.length - 1) === '/') {
            anchorText = anchorText.slice(0, -1);
        }
        return anchorText;
    };
    /**
     * Decodes percent-encoded characters from the given `anchorText`, in
     * preparation for the text to be displayed.
     *
     * @private
     * @param {String} anchorText The text of the anchor that is being
     *   generated, for which to decode any percent-encoded characters.
     * @return {String} The `anchorText`, with the percent-encoded characters
     *   decoded.
     */
    UrlMatch.prototype.removePercentEncoding = function (anchorText) {
        // First, convert a few of the known % encodings to the corresponding
        // HTML entities that could accidentally be interpretted as special
        // HTML characters
        var preProcessedEntityAnchorText = anchorText
            .replace(/%22/gi, '&quot;') // " char
            .replace(/%26/gi, '&amp;') // & char
            .replace(/%27/gi, '&#39;') // ' char
            .replace(/%3C/gi, '&lt;') // < char
            .replace(/%3E/gi, '&gt;'); // > char
        try {
            // Now attempt to decode the rest of the anchor text
            return decodeURIComponent(preProcessedEntityAnchorText);
        }
        catch (e) { // Invalid % escape sequence in the anchor text
            return preProcessedEntityAnchorText;
        }
    };
    return UrlMatch;
}(Match));


//# sourceMappingURL=url-match.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/matcher.js
/**
 * @abstract
 * @class Autolinker.matcher.Matcher
 *
 * An abstract class and interface for individual matchers to find matches in
 * an input string with linkified versions of them.
 *
 * Note that Matchers do not take HTML into account - they must be fed the text
 * nodes of any HTML string, which is handled by {@link Autolinker#parse}.
 */
var Matcher = /** @class */ (function () {
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Matcher
     *   instance, specified in an Object (map).
     */
    function Matcher(cfg) {
        /**
         * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)
         *
         * Reference to the AnchorTagBuilder instance to use to generate HTML tags
         * for {@link Autolinker.match.Match Matches}.
         */
        this.__jsduckDummyDocProp = null; // property used just to get the above doc comment into the ES5 output and documentation generator
        this.tagBuilder = cfg.tagBuilder;
    }
    return Matcher;
}());


//# sourceMappingURL=matcher.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/regex-lib.js
/*
 * This file builds and stores a library of the common regular expressions used
 * by the Autolinker utility.
 *
 * Other regular expressions may exist ad-hoc, but these are generally the
 * regular expressions that are shared between source files.
 */
/**
 * Regular expression to match upper and lowercase ASCII letters
 */
var letterRe = /[A-Za-z]/;
/**
 * Regular expression to match ASCII digits
 */
var digitRe = /[\d]/;
/**
 * Regular expression to match everything *except* ASCII digits
 */
var nonDigitRe = /[\D]/;
/**
 * Regular expression to match whitespace
 */
var whitespaceRe = /\s/;
/**
 * Regular expression to match quote characters
 */
var quoteRe = /['"]/;
/**
 * Regular expression to match the range of ASCII control characters (0-31), and
 * the backspace char (127)
 */
var controlCharsRe = /[\x00-\x1F\x7F]/;
/**
 * The string form of a regular expression that would match all of the
 * alphabetic ("letter") chars in the unicode character set when placed in a
 * RegExp character class (`[]`). This includes all international alphabetic
 * characters.
 *
 * These would be the characters matched by unicode regex engines `\p{L}`
 * escape ("all letters").
 *
 * Taken from the XRegExp library: http://xregexp.com/ (thanks @https://github.com/slevithan)
 * Specifically: http://xregexp.com/v/3.2.0/xregexp-all.js, the 'Letter'
 *   regex's bmp
 *
 * VERY IMPORTANT: This set of characters is defined inside of a Regular
 *   Expression literal rather than a string literal to prevent UglifyJS from
 *   compressing the unicode escape sequences into their actual unicode
 *   characters. If Uglify compresses these into the unicode characters
 *   themselves, this results in the error "Range out of order in character
 *   class" when these characters are used inside of a Regular Expression
 *   character class (`[]`). See usages of this const. Alternatively, we can set
 *   the UglifyJS option `ascii_only` to true for the build, but that doesn't
 *   help others who are pulling in Autolinker into their own build and running
 *   UglifyJS themselves.
 */
var alphaCharsStr = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/
    .source; // see note in above variable description
/**
 * The string form of a regular expression that would match all emoji characters
 * Based on the emoji regex defined in this article: https://thekevinscott.com/emojis-in-javascript/
 */
var emojiStr = /\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/
    .source;
/**
 * The string form of a regular expression that would match all of the
 * combining mark characters in the unicode character set when placed in a
 * RegExp character class (`[]`).
 *
 * These would be the characters matched by unicode regex engines `\p{M}`
 * escape ("all marks").
 *
 * Taken from the XRegExp library: http://xregexp.com/ (thanks @https://github.com/slevithan)
 * Specifically: http://xregexp.com/v/3.2.0/xregexp-all.js, the 'Mark'
 *   regex's bmp
 *
 * VERY IMPORTANT: This set of characters is defined inside of a Regular
 *   Expression literal rather than a string literal to prevent UglifyJS from
 *   compressing the unicode escape sequences into their actual unicode
 *   characters. If Uglify compresses these into the unicode characters
 *   themselves, this results in the error "Range out of order in character
 *   class" when these characters are used inside of a Regular Expression
 *   character class (`[]`). See usages of this const. Alternatively, we can set
 *   the UglifyJS option `ascii_only` to true for the build, but that doesn't
 *   help others who are pulling in Autolinker into their own build and running
 *   UglifyJS themselves.
 */
var marksStr = /\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/
    .source; // see note in above variable description
/**
 * The string form of a regular expression that would match all of the
 * alphabetic ("letter") chars, emoji, and combining marks in the unicode character set
 * when placed in a RegExp character class (`[]`). This includes all
 * international alphabetic characters.
 *
 * These would be the characters matched by unicode regex engines `\p{L}\p{M}`
 * escapes and emoji characters.
 */
var alphaCharsAndMarksStr = alphaCharsStr + emojiStr + marksStr;
/**
 * The string form of a regular expression that would match all of the
 * decimal number chars in the unicode character set when placed in a RegExp
 * character class (`[]`).
 *
 * These would be the characters matched by unicode regex engines `\p{Nd}`
 * escape ("all decimal numbers")
 *
 * Taken from the XRegExp library: http://xregexp.com/ (thanks @https://github.com/slevithan)
 * Specifically: http://xregexp.com/v/3.2.0/xregexp-all.js, the 'Decimal_Number'
 *   regex's bmp
 *
 * VERY IMPORTANT: This set of characters is defined inside of a Regular
 *   Expression literal rather than a string literal to prevent UglifyJS from
 *   compressing the unicode escape sequences into their actual unicode
 *   characters. If Uglify compresses these into the unicode characters
 *   themselves, this results in the error "Range out of order in character
 *   class" when these characters are used inside of a Regular Expression
 *   character class (`[]`). See usages of this const. Alternatively, we can set
 *   the UglifyJS option `ascii_only` to true for the build, but that doesn't
 *   help others who are pulling in Autolinker into their own build and running
 *   UglifyJS themselves.
 */
var decimalNumbersStr = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/
    .source; // see note in above variable description
/**
 * The string form of a regular expression that would match all of the
 * letters and decimal number chars in the unicode character set when placed in
 * a RegExp character class (`[]`).
 *
 * These would be the characters matched by unicode regex engines
 * `[\p{L}\p{Nd}]` escape ("all letters and decimal numbers")
 */
var alphaNumericCharsStr = alphaCharsAndMarksStr + decimalNumbersStr;
/**
 * The string form of a regular expression that would match all of the
 * letters, combining marks, and decimal number chars in the unicode character
 * set when placed in a RegExp character class (`[]`).
 *
 * These would be the characters matched by unicode regex engines
 * `[\p{L}\p{M}\p{Nd}]` escape ("all letters, combining marks, and decimal
 * numbers")
 */
var alphaNumericAndMarksCharsStr = alphaCharsAndMarksStr + decimalNumbersStr;
// Simplified IP regular expression
var ipStr = '(?:[' + decimalNumbersStr + ']{1,3}\\.){3}[' + decimalNumbersStr + ']{1,3}';
// Protected domain label which do not allow "-" character on the beginning and the end of a single label
var domainLabelStr = '[' + alphaNumericAndMarksCharsStr + '](?:[' + alphaNumericAndMarksCharsStr + '\\-]{0,61}[' + alphaNumericAndMarksCharsStr + '])?';
var getDomainLabelStr = function (group) {
    return '(?=(' + domainLabelStr + '))\\' + group;
};
/**
 * A function to match domain names of a URL or email address.
 * Ex: 'google', 'yahoo', 'some-other-company', etc.
 */
var getDomainNameStr = function (group) {
    return '(?:' + getDomainLabelStr(group) + '(?:\\.' + getDomainLabelStr(group + 1) + '){0,126}|' + ipStr + ')';
};
/**
 * A regular expression to match domain names of a URL or email address.
 * Ex: 'google', 'yahoo', 'some-other-company', etc.
 */
var domainNameRegex = new RegExp('[' + alphaNumericAndMarksCharsStr + '.\\-]*[' + alphaNumericAndMarksCharsStr + '\\-]');
/**
 * A regular expression that is simply the character class of the characters
 * that may be used in a domain name, minus the '-' or '.'
 */
var domainNameCharRegex = new RegExp("[" + alphaNumericAndMarksCharsStr + "]");

//# sourceMappingURL=regex-lib.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/tld-regex.js
// NOTE: THIS IS A GENERATED FILE
// To update with the latest TLD list, run `npm run update-tld-regex` or `yarn update-tld-regex` (depending on which you have installed)
var tldRegex = /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|spreadbetting|travelchannel|wolterskluwer|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|rightathome|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pbt977c|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nationwide|newholland|nextdirect|onyourside|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|telefonica|university|vistaprint|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|fujixerox|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|honeywell|institute|insurance|kuokgroup|ladbrokes|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--tckwe|xn--vhquv|yodobashi|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|chrysler|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|esurance|etisalat|everbank|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|movistar|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|symantec|training|uconnect|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|cartier|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|iselect|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lancome|lanxess|lasalle|latrobe|leclerc|liaison|limited|lincoln|markets|metlife|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|shriram|singles|staples|starhub|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|اتصالات|الجزائر|العليان|پاکستان|كاثوليك|موبايلي|இந்தியா|abarth|abbott|abbvie|active|africa|agency|airbus|airtel|alipay|alsace|alstom|anquan|aramco|author|bayern|beauty|berlin|bharti|blanco|bostik|boston|broker|camera|career|caseih|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|mobily|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|piaget|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|warman|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|dodge|drive|dubai|earth|edeka|email|epost|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|intel|irish|iveco|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|lupin|macys|mango|media|miami|money|mopar|movie|nadex|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|zippo|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|adac|aero|aigo|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|doha|duck|duns|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scor|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bnl|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceb|ceo|cfa|cfd|com|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jcp|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|srl|srt|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ストア|セール|みんな|中文网|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|工行|广东|微博|慈善|手机|手表|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|珠宝|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/;

//# sourceMappingURL=tld-regex.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/email-matcher.js






// For debugging: search for other "For debugging" lines
// import CliTable from 'cli-table';
// RegExp objects which are shared by all instances of EmailMatcher. These are
// here to avoid re-instantiating the RegExp objects if `Autolinker.link()` is
// called multiple times, thus instantiating EmailMatcher and its RegExp 
// objects each time (which is very expensive - see https://github.com/gregjacobs/Autolinker.js/issues/314). 
// See descriptions of the properties where they are used for details about them
var email_matcher_localPartCharRegex = new RegExp("[" + alphaNumericAndMarksCharsStr + "!#$%&'*+/=?^_`{|}~-]");
var email_matcher_strictTldRegex = new RegExp("^" + tldRegex.source + "$");
/**
 * @class Autolinker.matcher.Email
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find email matches in an input string.
 *
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
 */
var email_matcher_EmailMatcher = /** @class */ (function (_super) {
    __extends(EmailMatcher, _super);
    function EmailMatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Valid characters that can be used in the "local" part of an email address,
         * i.e. the "name" part of "name@site.com"
         */
        _this.localPartCharRegex = email_matcher_localPartCharRegex;
        /**
         * Stricter TLD regex which adds a beginning and end check to ensure
         * the string is a valid TLD
         */
        _this.strictTldRegex = email_matcher_strictTldRegex;
        return _this;
    }
    /**
     * @inheritdoc
     */
    EmailMatcher.prototype.parseMatches = function (text) {
        var tagBuilder = this.tagBuilder, localPartCharRegex = this.localPartCharRegex, strictTldRegex = this.strictTldRegex, matches = [], len = text.length, noCurrentEmailMatch = new CurrentEmailMatch();
        // for matching a 'mailto:' prefix
        var mailtoTransitions = {
            'm': 'a',
            'a': 'i',
            'i': 'l',
            'l': 't',
            't': 'o',
            'o': ':',
        };
        var charIdx = 0, state = 0 /* NonEmailMatch */, currentEmailMatch = noCurrentEmailMatch;
        // For debugging: search for other "For debugging" lines
        // const table = new CliTable( {
        // 	head: [ 'charIdx', 'char', 'state', 'charIdx', 'currentEmailAddress.idx', 'hasDomainDot' ]
        // } );
        while (charIdx < len) {
            var char = text.charAt(charIdx);
            // For debugging: search for other "For debugging" lines
            // table.push( 
            // 	[ charIdx, char, State[ state ], charIdx, currentEmailAddress.idx, currentEmailAddress.hasDomainDot ] 
            // );
            switch (state) {
                case 0 /* NonEmailMatch */:
                    stateNonEmailAddress(char);
                    break;
                case 1 /* Mailto */:
                    stateMailTo(text.charAt(charIdx - 1), char);
                    break;
                case 2 /* LocalPart */:
                    stateLocalPart(char);
                    break;
                case 3 /* LocalPartDot */:
                    stateLocalPartDot(char);
                    break;
                case 4 /* AtSign */:
                    stateAtSign(char);
                    break;
                case 5 /* DomainChar */:
                    stateDomainChar(char);
                    break;
                case 6 /* DomainHyphen */:
                    stateDomainHyphen(char);
                    break;
                case 7 /* DomainDot */:
                    stateDomainDot(char);
                    break;
                default:
                    throwUnhandledCaseError(state);
            }
            // For debugging: search for other "For debugging" lines
            // table.push( 
            // 	[ charIdx, char, State[ state ], charIdx, currentEmailAddress.idx, currentEmailAddress.hasDomainDot ] 
            // );
            charIdx++;
        }
        // Capture any valid match at the end of the string
        captureMatchIfValidAndReset();
        // For debugging: search for other "For debugging" lines
        //console.log( '\n' + table.toString() );
        return matches;
        // Handles the state when we're not in an email address
        function stateNonEmailAddress(char) {
            if (char === 'm') {
                beginEmailMatch(1 /* Mailto */);
            }
            else if (localPartCharRegex.test(char)) {
                beginEmailMatch();
            }
            else {
                // not an email address character, continue
            }
        }
        // Handles if we're reading a 'mailto:' prefix on the string
        function stateMailTo(prevChar, char) {
            if (prevChar === ':') {
                // We've reached the end of the 'mailto:' prefix
                if (localPartCharRegex.test(char)) {
                    state = 2 /* LocalPart */;
                    currentEmailMatch = new CurrentEmailMatch(__assign({}, currentEmailMatch, { hasMailtoPrefix: true }));
                }
                else {
                    // we've matched 'mailto:' but didn't get anything meaningful
                    // immediately afterwards (for example, we encountered a 
                    // space character, or an '@' character which formed 'mailto:@'
                    resetToNonEmailMatchState();
                }
            }
            else if (mailtoTransitions[prevChar] === char) {
                // We're currently reading the 'mailto:' prefix, stay in
                // Mailto state
            }
            else if (localPartCharRegex.test(char)) {
                // We we're reading a prefix of 'mailto:', but encountered a
                // different character that didn't continue the prefix
                state = 2 /* LocalPart */;
            }
            else if (char === '.') {
                // We we're reading a prefix of 'mailto:', but encountered a
                // dot character
                state = 3 /* LocalPartDot */;
            }
            else if (char === '@') {
                // We we're reading a prefix of 'mailto:', but encountered a
                // an @ character
                state = 4 /* AtSign */;
            }
            else {
                // not an email address character, return to "NonEmailAddress" state
                resetToNonEmailMatchState();
            }
        }
        // Handles the state when we're currently in the "local part" of an 
        // email address (as opposed to the "domain part")
        function stateLocalPart(char) {
            if (char === '.') {
                state = 3 /* LocalPartDot */;
            }
            else if (char === '@') {
                state = 4 /* AtSign */;
            }
            else if (localPartCharRegex.test(char)) {
                // stay in the "local part" of the email address
            }
            else {
                // not an email address character, return to "NonEmailAddress" state
                resetToNonEmailMatchState();
            }
        }
        // Handles the state where we've read 
        function stateLocalPartDot(char) {
            if (char === '.') {
                // We read a second '.' in a row, not a valid email address 
                // local part
                resetToNonEmailMatchState();
            }
            else if (char === '@') {
                // We read the '@' character immediately after a dot ('.'), not 
                // an email address
                resetToNonEmailMatchState();
            }
            else if (localPartCharRegex.test(char)) {
                state = 2 /* LocalPart */;
            }
            else {
                // Anything else, not an email address
                resetToNonEmailMatchState();
            }
        }
        function stateAtSign(char) {
            if (domainNameCharRegex.test(char)) {
                state = 5 /* DomainChar */;
            }
            else {
                // Anything else, not an email address
                resetToNonEmailMatchState();
            }
        }
        function stateDomainChar(char) {
            if (char === '.') {
                state = 7 /* DomainDot */;
            }
            else if (char === '-') {
                state = 6 /* DomainHyphen */;
            }
            else if (domainNameCharRegex.test(char)) {
                // Stay in the DomainChar state
            }
            else {
                // Anything else, we potentially matched if the criteria has
                // been met
                captureMatchIfValidAndReset();
            }
        }
        function stateDomainHyphen(char) {
            if (char === '-' || char === '.') {
                // Not valid to have two hyphens ("--") or hypen+dot ("-.")
                captureMatchIfValidAndReset();
            }
            else if (domainNameCharRegex.test(char)) {
                state = 5 /* DomainChar */;
            }
            else {
                // Anything else
                captureMatchIfValidAndReset();
            }
        }
        function stateDomainDot(char) {
            if (char === '.' || char === '-') {
                // not valid to have two dots ("..") or dot+hypen (".-")
                captureMatchIfValidAndReset();
            }
            else if (domainNameCharRegex.test(char)) {
                state = 5 /* DomainChar */;
                // After having read a '.' and then a valid domain character,
                // we now know that the domain part of the email is valid, and
                // we have found at least a partial EmailMatch (however, the
                // email address may have additional characters from this point)
                currentEmailMatch = new CurrentEmailMatch(__assign({}, currentEmailMatch, { hasDomainDot: true }));
            }
            else {
                // Anything else
                captureMatchIfValidAndReset();
            }
        }
        function beginEmailMatch(newState) {
            if (newState === void 0) { newState = 2 /* LocalPart */; }
            state = newState;
            currentEmailMatch = new CurrentEmailMatch({ idx: charIdx });
        }
        function resetToNonEmailMatchState() {
            state = 0 /* NonEmailMatch */;
            currentEmailMatch = noCurrentEmailMatch;
        }
        /*
         * Captures the current email address as an EmailMatch if it's valid,
         * and resets the state to read another email address.
         */
        function captureMatchIfValidAndReset() {
            if (currentEmailMatch.hasDomainDot) { // we need at least one dot in the domain to be considered a valid email address
                var matchedText = text.slice(currentEmailMatch.idx, charIdx);
                // If we read a '.' or '-' char that ended the email address
                // (valid domain name characters, but only valid email address
                // characters if they are followed by something else), strip 
                // it off now
                if (/[-.]$/.test(matchedText)) {
                    matchedText = matchedText.slice(0, -1);
                }
                var emailAddress = currentEmailMatch.hasMailtoPrefix
                    ? matchedText.slice('mailto:'.length)
                    : matchedText;
                // if the email address has a valid TLD, add it to the list of matches
                if (doesEmailHaveValidTld(emailAddress)) {
                    matches.push(new email_match_EmailMatch({
                        tagBuilder: tagBuilder,
                        matchedText: matchedText,
                        offset: currentEmailMatch.idx,
                        email: emailAddress
                    }));
                }
            }
            resetToNonEmailMatchState();
            /**
             * Determines if the given email address has a valid TLD or not
             * @param {string} emailAddress - email address
             * @return {Boolean} - true is email have valid TLD, false otherwise
             */
            function doesEmailHaveValidTld(emailAddress) {
                var emailAddressTld = emailAddress.split('.').pop() || '';
                var emailAddressNormalized = emailAddressTld.toLowerCase();
                var isValidTld = strictTldRegex.test(emailAddressNormalized);
                return isValidTld;
            }
        }
    };
    return EmailMatcher;
}(Matcher));

var CurrentEmailMatch = /** @class */ (function () {
    function CurrentEmailMatch(cfg) {
        if (cfg === void 0) { cfg = {}; }
        this.idx = cfg.idx !== undefined ? cfg.idx : -1;
        this.hasMailtoPrefix = !!cfg.hasMailtoPrefix;
        this.hasDomainDot = !!cfg.hasDomainDot;
    }
    return CurrentEmailMatch;
}());

//# sourceMappingURL=email-matcher.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/url-match-validator.js

/**
 * @private
 * @class Autolinker.matcher.UrlMatchValidator
 * @singleton
 *
 * Used by Autolinker to filter out false URL positives from the
 * {@link Autolinker.matcher.Url UrlMatcher}.
 *
 * Due to the limitations of regular expressions (including the missing feature
 * of look-behinds in JS regular expressions), we cannot always determine the
 * validity of a given match. This class applies a bit of additional logic to
 * filter out any false positives that have been matched by the
 * {@link Autolinker.matcher.Url UrlMatcher}.
 */
var url_match_validator_UrlMatchValidator = /** @class */ (function () {
    function UrlMatchValidator() {
    }
    /**
     * Determines if a given URL match found by the {@link Autolinker.matcher.Url UrlMatcher}
     * is valid. Will return `false` for:
     *
     * 1) URL matches which do not have at least have one period ('.') in the
     *    domain name (effectively skipping over matches like "abc:def").
     *    However, URL matches with a protocol will be allowed (ex: 'http://localhost')
     * 2) URL matches which do not have at least one word character in the
     *    domain name (effectively skipping over matches like "git:1.0").
     *    However, URL matches with a protocol will be allowed (ex: 'intra-net://271219.76')
     * 3) A protocol-relative url match (a URL beginning with '//') whose
     *    previous character is a word character (effectively skipping over
     *    strings like "abc//google.com")
     *
     * Otherwise, returns `true`.
     *
     * @param {String} urlMatch The matched URL, if there was one. Will be an
     *   empty string if the match is not a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol
     *   match. Ex: 'http://yahoo.com'. This is used to match something like
     *   'http://localhost', where we won't double check that the domain name
     *   has at least one '.' in it.
     * @return {Boolean} `true` if the match given is valid and should be
     *   processed, or `false` if the match is invalid and/or should just not be
     *   processed.
     */
    UrlMatchValidator.isValid = function (urlMatch, protocolUrlMatch) {
        if ((protocolUrlMatch && !this.isValidUriScheme(protocolUrlMatch)) ||
            this.urlMatchDoesNotHaveProtocolOrDot(urlMatch, protocolUrlMatch) || // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
            (this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch, protocolUrlMatch) && // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
                !this.isValidIpAddress(urlMatch)) || // Except if it's an IP address
            this.containsMultipleDots(urlMatch)) {
            return false;
        }
        return true;
    };
    UrlMatchValidator.isValidIpAddress = function (uriSchemeMatch) {
        var newRegex = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source);
        var uriScheme = uriSchemeMatch.match(newRegex);
        return uriScheme !== null;
    };
    UrlMatchValidator.containsMultipleDots = function (urlMatch) {
        var stringBeforeSlash = urlMatch;
        if (this.hasFullProtocolRegex.test(urlMatch)) {
            stringBeforeSlash = urlMatch.split('://')[1];
        }
        return stringBeforeSlash.split('/')[0].indexOf("..") > -1;
    };
    /**
     * Determines if the URI scheme is a valid scheme to be autolinked. Returns
     * `false` if the scheme is 'javascript:' or 'vbscript:'
     *
     * @private
     * @param {String} uriSchemeMatch The match URL string for a full URI scheme
     *   match. Ex: 'http://yahoo.com' or 'mailto:a@a.com'.
     * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
     */
    UrlMatchValidator.isValidUriScheme = function (uriSchemeMatch) {
        var uriSchemeMatchArr = uriSchemeMatch.match(this.uriSchemeRegex), uriScheme = uriSchemeMatchArr && uriSchemeMatchArr[0].toLowerCase();
        return (uriScheme !== 'javascript:' && uriScheme !== 'vbscript:');
    };
    /**
     * Determines if a URL match does not have either:
     *
     * a) a full protocol (i.e. 'http://'), or
     * b) at least one dot ('.') in the domain name (for a non-full-protocol
     *    match).
     *
     * Either situation is considered an invalid URL (ex: 'git:d' does not have
     * either the '://' part, or at least one dot in the domain name. If the
     * match was 'git:abc.com', we would consider this valid.)
     *
     * @private
     * @param {String} urlMatch The matched URL, if there was one. Will be an
     *   empty string if the match is not a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol
     *   match. Ex: 'http://yahoo.com'. This is used to match something like
     *   'http://localhost', where we won't double check that the domain name
     *   has at least one '.' in it.
     * @return {Boolean} `true` if the URL match does not have a full protocol,
     *   or at least one dot ('.') in a non-full-protocol match.
     */
    UrlMatchValidator.urlMatchDoesNotHaveProtocolOrDot = function (urlMatch, protocolUrlMatch) {
        return (!!urlMatch && (!protocolUrlMatch || !this.hasFullProtocolRegex.test(protocolUrlMatch)) && urlMatch.indexOf('.') === -1);
    };
    /**
     * Determines if a URL match does not have either:
     *
     * a) a full protocol (i.e. 'http://'), or
     * b) at least one word character after the protocol (i.e. in the domain name)
     *
     * At least one letter character must exist in the domain name after a
     * protocol match. Ex: skip over something like "git:1.0"
     *
     * @private
     * @param {String} urlMatch The matched URL, if there was one. Will be an
     *   empty string if the match is not a URL match.
     * @param {String} protocolUrlMatch The match URL string for a protocol
     *   match. Ex: 'http://yahoo.com'. This is used to know whether or not we
     *   have a protocol in the URL string, in order to check for a word
     *   character after the protocol separator (':').
     * @return {Boolean} `true` if the URL match does not have a full protocol, or
     * at least one word character in it, `false` otherwise.
     */
    UrlMatchValidator.urlMatchDoesNotHaveAtLeastOneWordChar = function (urlMatch, protocolUrlMatch) {
        if (urlMatch && protocolUrlMatch) {
            return !this.hasFullProtocolRegex.test(protocolUrlMatch) && !this.hasWordCharAfterProtocolRegex.test(urlMatch);
        }
        else {
            return false;
        }
    };
    /**
     * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
     *
     * @private
     * @property {RegExp} hasFullProtocolRegex
     */
    UrlMatchValidator.hasFullProtocolRegex = /^[A-Za-z][-.+A-Za-z0-9]*:\/\//;
    /**
     * Regex to find the URI scheme, such as 'mailto:'.
     *
     * This is used to filter out 'javascript:' and 'vbscript:' schemes.
     *
     * @private
     * @property {RegExp} uriSchemeRegex
     */
    UrlMatchValidator.uriSchemeRegex = /^[A-Za-z][-.+A-Za-z0-9]*:/;
    /**
     * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
     *
     * @private
     * @property {RegExp} hasWordCharAfterProtocolRegex
     */
    UrlMatchValidator.hasWordCharAfterProtocolRegex = new RegExp(":[^\\s]*?[" + alphaCharsStr + "]");
    /**
     * Regex to determine if the string is a valid IP address
     *
     * @private
     * @property {RegExp} ipRegex
     */
    UrlMatchValidator.ipRegex = /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/;
    return UrlMatchValidator;
}());


//# sourceMappingURL=url-match-validator.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/url-matcher.js






// RegExp objects which are shared by all instances of UrlMatcher. These are
// here to avoid re-instantiating the RegExp objects if `Autolinker.link()` is
// called multiple times, thus instantiating UrlMatcher and its RegExp 
// objects each time (which is very expensive - see https://github.com/gregjacobs/Autolinker.js/issues/314). 
// See descriptions of the properties where they are used for details about them
var url_matcher_matcherRegex = (function () {
    var schemeRegex = /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/, // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
    wwwRegex = /(?:www\.)/, // starting with 'www.'
    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
    // http://blog.codinghorror.com/the-problem-with-urls/
    urlSuffixRegex = new RegExp('[/?#](?:[' + alphaNumericAndMarksCharsStr + '\\-+&@#/%=~_()|\'$*\\[\\]{}?!:,.;^\u2713]*[' + alphaNumericAndMarksCharsStr + '\\-+&@#/%=~_()|\'$*\\[\\]{}\u2713])?');
    return new RegExp([
        '(?:',
        '(',
        schemeRegex.source,
        getDomainNameStr(2),
        ')',
        '|',
        '(',
        '(//)?',
        wwwRegex.source,
        getDomainNameStr(6),
        ')',
        '|',
        '(',
        '(//)?',
        getDomainNameStr(10) + '\\.',
        tldRegex.source,
        '(?![-' + alphaNumericCharsStr + '])',
        ')',
        ')',
        '(?::[0-9]+)?',
        '(?:' + urlSuffixRegex.source + ')?' // match for path, query string, and/or hash anchor - optional
    ].join(""), 'gi');
})();
var wordCharRegExp = new RegExp('[' + alphaNumericAndMarksCharsStr + ']');
/**
 * @class Autolinker.matcher.Url
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find URL matches in an input string.
 *
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.
 */
var url_matcher_UrlMatcher = /** @class */ (function (_super) {
    __extends(UrlMatcher, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match instance,
     *   specified in an Object (map).
     */
    function UrlMatcher(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {Object} stripPrefix (required)
         *
         * The Object form of {@link Autolinker#cfg-stripPrefix}.
         */
        _this.stripPrefix = { scheme: true, www: true }; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} stripTrailingSlash (required)
         * @inheritdoc Autolinker#stripTrailingSlash
         */
        _this.stripTrailingSlash = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} decodePercentEncoding (required)
         * @inheritdoc Autolinker#decodePercentEncoding
         */
        _this.decodePercentEncoding = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @protected
         * @property {RegExp} matcherRegex
         *
         * The regular expression to match URLs with an optional scheme, port
         * number, path, query string, and hash anchor.
         *
         * Example matches:
         *
         *     http://google.com
         *     www.google.com
         *     google.com/path/to/file?q1=1&q2=2#myAnchor
         *
         *
         * This regular expression will have the following capturing groups:
         *
         * 1.  Group that matches a scheme-prefixed URL (i.e. 'http://google.com').
         *     This is used to match scheme URLs with just a single word, such as
         *     'http://localhost', where we won't double check that the domain name
         *     has at least one dot ('.') in it.
         * 2.  Group that matches a 'www.' prefixed URL. This is only matched if the
         *     'www.' text was not prefixed by a scheme (i.e.: not prefixed by
         *     'http://', 'ftp:', etc.)
         * 3.  A protocol-relative ('//') match for the case of a 'www.' prefixed
         *     URL. Will be an empty string if it is not a protocol-relative match.
         *     We need to know the character before the '//' in order to determine
         *     if it is a valid match or the // was in a string we don't want to
         *     auto-link.
         * 4.  Group that matches a known TLD (top level domain), when a scheme
         *     or 'www.'-prefixed domain is not matched.
         * 5.  A protocol-relative ('//') match for the case of a known TLD prefixed
         *     URL. Will be an empty string if it is not a protocol-relative match.
         *     See #3 for more info.
         */
        _this.matcherRegex = url_matcher_matcherRegex;
        /**
         * A regular expression to use to check the character before a protocol-relative
         * URL match. We don't want to match a protocol-relative URL if it is part
         * of another word.
         *
         * For example, we want to match something like "Go to: //google.com",
         * but we don't want to match something like "abc//google.com"
         *
         * This regular expression is used to test the character before the '//'.
         *
         * @protected
         * @type {RegExp} wordCharRegExp
         */
        _this.wordCharRegExp = wordCharRegExp;
        _this.stripPrefix = cfg.stripPrefix;
        _this.stripTrailingSlash = cfg.stripTrailingSlash;
        _this.decodePercentEncoding = cfg.decodePercentEncoding;
        return _this;
    }
    /**
     * @inheritdoc
     */
    UrlMatcher.prototype.parseMatches = function (text) {
        var matcherRegex = this.matcherRegex, stripPrefix = this.stripPrefix, stripTrailingSlash = this.stripTrailingSlash, decodePercentEncoding = this.decodePercentEncoding, tagBuilder = this.tagBuilder, matches = [], match;
        var _loop_1 = function () {
            var matchStr = match[0], schemeUrlMatch = match[1], wwwUrlMatch = match[4], wwwProtocolRelativeMatch = match[5], 
            //tldUrlMatch = match[ 8 ],  -- not needed at the moment
            tldProtocolRelativeMatch = match[9], offset = match.index, protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch, prevChar = text.charAt(offset - 1);
            if (!url_match_validator_UrlMatchValidator.isValid(matchStr, schemeUrlMatch)) {
                return "continue";
            }
            // If the match is preceded by an '@' character, then it is either
            // an email address or a username. Skip these types of matches.
            if (offset > 0 && prevChar === '@') {
                return "continue";
            }
            // If it's a protocol-relative '//' match, but the character before the '//'
            // was a word character (i.e. a letter/number), then we found the '//' in the
            // middle of another word (such as "asdf//asdf.com"). In this case, skip the
            // match.
            if (offset > 0 && protocolRelativeMatch && this_1.wordCharRegExp.test(prevChar)) {
                return "continue";
            }
            // If the URL ends with a question mark, don't include the question
            // mark as part of the URL. We'll assume the question mark was the
            // end of a sentence, such as: "Going to google.com?"
            if (/\?$/.test(matchStr)) {
                matchStr = matchStr.substr(0, matchStr.length - 1);
            }
            // Handle a closing parenthesis or square bracket at the end of the 
            // match, and exclude it if there is not a matching open parenthesis 
            // or square bracket in the match itself.
            if (this_1.matchHasUnbalancedClosingParen(matchStr)) {
                matchStr = matchStr.substr(0, matchStr.length - 1); // remove the trailing ")"
            }
            else {
                // Handle an invalid character after the TLD
                var pos = this_1.matchHasInvalidCharAfterTld(matchStr, schemeUrlMatch);
                if (pos > -1) {
                    matchStr = matchStr.substr(0, pos); // remove the trailing invalid chars
                }
            }
            // The autolinker accepts many characters in a url's scheme (like `fake://test.com`).
            // However, in cases where a URL is missing whitespace before an obvious link,
            // (for example: `nowhitespacehttp://www.test.com`), we only want the match to start
            // at the http:// part. We will check if the match contains a common scheme and then 
            // shift the match to start from there. 		
            var foundCommonScheme = ['http://', 'https://'].find(function (commonScheme) { return !!schemeUrlMatch && schemeUrlMatch.indexOf(commonScheme) !== -1; });
            if (foundCommonScheme) {
                // If we found an overmatched URL, we want to find the index
                // of where the match should start and shift the match to
                // start from the beginning of the common scheme
                var indexOfSchemeStart = matchStr.indexOf(foundCommonScheme);
                matchStr = matchStr.substr(indexOfSchemeStart);
                schemeUrlMatch = schemeUrlMatch.substr(indexOfSchemeStart);
                offset = offset + indexOfSchemeStart;
            }
            var urlMatchType = schemeUrlMatch ? 'scheme' : (wwwUrlMatch ? 'www' : 'tld'), protocolUrlMatch = !!schemeUrlMatch;
            matches.push(new url_match_UrlMatch({
                tagBuilder: tagBuilder,
                matchedText: matchStr,
                offset: offset,
                urlMatchType: urlMatchType,
                url: matchStr,
                protocolUrlMatch: protocolUrlMatch,
                protocolRelativeMatch: !!protocolRelativeMatch,
                stripPrefix: stripPrefix,
                stripTrailingSlash: stripTrailingSlash,
                decodePercentEncoding: decodePercentEncoding,
            }));
        };
        var this_1 = this;
        while ((match = matcherRegex.exec(text)) !== null) {
            _loop_1();
        }
        return matches;
    };
    /**
     * Determines if a match found has an unmatched closing parenthesis,
     * square bracket or curly bracket. If so, the symbol will be removed
     * from the match itself, and appended after the generated anchor tag.
     *
     * A match may have an extra closing parenthesis at the end of the match
     * because the regular expression must include parenthesis for URLs such as
     * "wikipedia.com/something_(disambiguation)", which should be auto-linked.
     *
     * However, an extra parenthesis *will* be included when the URL itself is
     * wrapped in parenthesis, such as in the case of:
     *     "(wikipedia.com/something_(disambiguation))"
     * In this case, the last closing parenthesis should *not* be part of the
     * URL itself, and this method will return `true`.
     *
     * For square brackets in URLs such as in PHP arrays, the same behavior as
     * parenthesis discussed above should happen:
     *     "[http://www.example.com/foo.php?bar[]=1&bar[]=2&bar[]=3]"
     * The closing square bracket should not be part of the URL itself, and this
     * method will return `true`.
     *
     * @protected
     * @param {String} matchStr The full match string from the {@link #matcherRegex}.
     * @return {Boolean} `true` if there is an unbalanced closing parenthesis or
     *   square bracket at the end of the `matchStr`, `false` otherwise.
     */
    UrlMatcher.prototype.matchHasUnbalancedClosingParen = function (matchStr) {
        var endChar = matchStr.charAt(matchStr.length - 1);
        var startChar;
        if (endChar === ')') {
            startChar = '(';
        }
        else if (endChar === ']') {
            startChar = '[';
        }
        else if (endChar === '}') {
            startChar = '{';
        }
        else {
            return false; // not a close parenthesis or square bracket
        }
        // Find if there are the same number of open braces as close braces in
        // the URL string, minus the last character (which we have already 
        // determined to be either ')', ']' or '}'
        var numOpenBraces = 0;
        for (var i = 0, len = matchStr.length - 1; i < len; i++) {
            var char = matchStr.charAt(i);
            if (char === startChar) {
                numOpenBraces++;
            }
            else if (char === endChar) {
                numOpenBraces = Math.max(numOpenBraces - 1, 0);
            }
        }
        // If the number of open braces matches the number of close braces in
        // the URL minus the last character, then the match has *unbalanced*
        // braces because of the last character. Example of unbalanced braces
        // from the regex match:
        //     "http://example.com?a[]=1]"
        if (numOpenBraces === 0) {
            return true;
        }
        return false;
    };
    /**
     * Determine if there's an invalid character after the TLD in a URL. Valid
     * characters after TLD are ':/?#'. Exclude scheme matched URLs from this
     * check.
     *
     * @protected
     * @param {String} urlMatch The matched URL, if there was one. Will be an
     *   empty string if the match is not a URL match.
     * @param {String} schemeUrlMatch The match URL string for a scheme
     *   match. Ex: 'http://yahoo.com'. This is used to match something like
     *   'http://localhost', where we won't double check that the domain name
     *   has at least one '.' in it.
     * @return {Number} the position where the invalid character was found. If
     *   no such character was found, returns -1
     */
    UrlMatcher.prototype.matchHasInvalidCharAfterTld = function (urlMatch, schemeUrlMatch) {
        if (!urlMatch) {
            return -1;
        }
        var offset = 0;
        if (schemeUrlMatch) {
            offset = urlMatch.indexOf(':');
            urlMatch = urlMatch.slice(offset);
        }
        var re = new RegExp("^((.?\/\/)?[-." + alphaNumericAndMarksCharsStr + "]*[-" + alphaNumericAndMarksCharsStr + "]\\.[-" + alphaNumericAndMarksCharsStr + "]+)");
        var res = re.exec(urlMatch);
        if (res === null) {
            return -1;
        }
        offset += res[1].length;
        urlMatch = urlMatch.slice(res[1].length);
        if (/^[^-.A-Za-z0-9:\/?#]/.test(urlMatch)) {
            return offset;
        }
        return -1;
    };
    return UrlMatcher;
}(Matcher));


//# sourceMappingURL=url-matcher.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/hashtag-matcher.js




// RegExp objects which are shared by all instances of HashtagMatcher. These are
// here to avoid re-instantiating the RegExp objects if `Autolinker.link()` is
// called multiple times, thus instantiating HashtagMatcher and its RegExp 
// objects each time (which is very expensive - see https://github.com/gregjacobs/Autolinker.js/issues/314). 
// See descriptions of the properties where they are used for details about them
var hashtag_matcher_matcherRegex = new RegExp("#[_" + alphaNumericAndMarksCharsStr + "]{1,139}(?![_" + alphaNumericAndMarksCharsStr + "])", 'g'); // lookahead used to make sure we don't match something above 139 characters
var hashtag_matcher_nonWordCharRegex = new RegExp('[^' + alphaNumericAndMarksCharsStr + ']');
/**
 * @class Autolinker.matcher.Hashtag
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find HashtagMatch matches in an input string.
 */
var hashtag_matcher_HashtagMatcher = /** @class */ (function (_super) {
    __extends(HashtagMatcher, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match instance,
     *   specified in an Object (map).
     */
    function HashtagMatcher(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {String} serviceName
         *
         * The service to point hashtag matches to. See {@link Autolinker#hashtag}
         * for available values.
         */
        _this.serviceName = 'twitter'; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * The regular expression to match Hashtags. Example match:
         *
         *     #asdf
         *
         * @protected
         * @property {RegExp} matcherRegex
         */
        _this.matcherRegex = hashtag_matcher_matcherRegex;
        /**
         * The regular expression to use to check the character before a username match to
         * make sure we didn't accidentally match an email address.
         *
         * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
         *
         * @protected
         * @property {RegExp} nonWordCharRegex
         */
        _this.nonWordCharRegex = hashtag_matcher_nonWordCharRegex;
        _this.serviceName = cfg.serviceName;
        return _this;
    }
    /**
     * @inheritdoc
     */
    HashtagMatcher.prototype.parseMatches = function (text) {
        var matcherRegex = this.matcherRegex, nonWordCharRegex = this.nonWordCharRegex, serviceName = this.serviceName, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
            var offset = match.index, prevChar = text.charAt(offset - 1);
            // If we found the match at the beginning of the string, or we found the match
            // and there is a whitespace char in front of it (meaning it is not a '#' char
            // in the middle of a word), then it is a hashtag match.
            if (offset === 0 || nonWordCharRegex.test(prevChar)) {
                var matchedText = match[0], hashtag = match[0].slice(1); // strip off the '#' character at the beginning
                matches.push(new hashtag_match_HashtagMatch({
                    tagBuilder: tagBuilder,
                    matchedText: matchedText,
                    offset: offset,
                    serviceName: serviceName,
                    hashtag: hashtag
                }));
            }
        }
        return matches;
    };
    return HashtagMatcher;
}(Matcher));


//# sourceMappingURL=hashtag-matcher.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/phone-matcher.js




// RegExp objects which are shared by all instances of PhoneMatcher. These are
// here to avoid re-instantiating the RegExp objects if `Autolinker.link()` is
// called multiple times, thus instantiating PhoneMatcher and its RegExp 
// objects each time (which is very expensive - see https://github.com/gregjacobs/Autolinker.js/issues/314). 
// See descriptions of the properties where they are used for details about them
var phoneMatcherRegex = /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/g;
/**
 * @class Autolinker.matcher.Phone
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find Phone number matches in an input string.
 *
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more
 * details.
 */
var phone_matcher_PhoneMatcher = /** @class */ (function (_super) {
    __extends(PhoneMatcher, _super);
    function PhoneMatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The regular expression to match Phone numbers. Example matches:
         *
         *     (123) 456-7890
         *     123 456 7890
         *     123-456-7890
         *     +18004441234,,;,10226420346#
         *     +1 (800) 444 1234
         *     10226420346#
         *     1-800-444-1234,1022,64,20346#
         *
         * This regular expression has the following capturing groups:
         *
         * 1 or 2. The prefixed '+' sign, if there is one.
         *
         * @protected
         * @property {RegExp} matcherRegex
         */
        _this.matcherRegex = phoneMatcherRegex;
        return _this;
    }
    /**
     * @inheritdoc
     */
    PhoneMatcher.prototype.parseMatches = function (text) {
        var matcherRegex = this.matcherRegex, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
            // Remove non-numeric values from phone number string
            var matchedText = match[0], cleanNumber = matchedText.replace(/[^0-9,;#]/g, ''), // strip out non-digit characters exclude comma semicolon and #
            plusSign = !!(match[1] || match[2]), // match[ 1 ] or match[ 2 ] is the prefixed plus sign, if there is one
            before = match.index == 0 ? '' : text.substr(match.index - 1, 1), after = text.substr(match.index + matchedText.length, 1), contextClear = !before.match(/\d/) && !after.match(/\d/);
            if (this.testMatch(match[3]) && this.testMatch(matchedText) && contextClear) {
                matches.push(new phone_match_PhoneMatch({
                    tagBuilder: tagBuilder,
                    matchedText: matchedText,
                    offset: match.index,
                    number: cleanNumber,
                    plusSign: plusSign
                }));
            }
        }
        return matches;
    };
    PhoneMatcher.prototype.testMatch = function (text) {
        return nonDigitRe.test(text);
    };
    return PhoneMatcher;
}(Matcher));


//# sourceMappingURL=phone-matcher.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/mention-matcher.js




// RegExp objects which are shared by all instances of MentionMatcher. These are
// here to avoid re-instantiating the RegExp objects if `Autolinker.link()` is
// called multiple times, thus instantiating MentionMatcher and its RegExp 
// objects each time (which is very expensive - see https://github.com/gregjacobs/Autolinker.js/issues/314). 
// See descriptions of the properties where they are used for details about them
var twitterRegex = new RegExp("@[_" + alphaNumericAndMarksCharsStr + "]{1,50}(?![_" + alphaNumericAndMarksCharsStr + "])", 'g'); // lookahead used to make sure we don't match something above 50 characters
var instagramRegex = new RegExp("@[_." + alphaNumericAndMarksCharsStr + "]{1,30}(?![_" + alphaNumericAndMarksCharsStr + "])", 'g'); // lookahead used to make sure we don't match something above 30 characters
var soundcloudRegex = new RegExp("@[-_." + alphaNumericAndMarksCharsStr + "]{1,50}(?![-_" + alphaNumericAndMarksCharsStr + "])", 'g'); // lookahead used to make sure we don't match something above 50 characters
var mention_matcher_nonWordCharRegex = new RegExp('[^' + alphaNumericAndMarksCharsStr + ']');
/**
 * @class Autolinker.matcher.Mention
 * @extends Autolinker.matcher.Matcher
 *
 * Matcher to find/replace username matches in an input string.
 */
var mention_matcher_MentionMatcher = /** @class */ (function (_super) {
    __extends(MentionMatcher, _super);
    /**
     * @method constructor
     * @param {Object} cfg The configuration properties for the Match instance,
     *   specified in an Object (map).
     */
    function MentionMatcher(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @cfg {'twitter'/'instagram'/'soundcloud'} protected
         *
         * The name of service to link @mentions to.
         *
         * Valid values are: 'twitter', 'instagram', or 'soundcloud'
         */
        _this.serviceName = 'twitter'; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * Hash of regular expression to match username handles. Example match:
         *
         *     @asdf
         *
         * @private
         * @property {Object} matcherRegexes
         */
        _this.matcherRegexes = {
            'twitter': twitterRegex,
            'instagram': instagramRegex,
            'soundcloud': soundcloudRegex
        };
        /**
         * The regular expression to use to check the character before a username match to
         * make sure we didn't accidentally match an email address.
         *
         * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.
         *
         * @private
         * @property {RegExp} nonWordCharRegex
         */
        _this.nonWordCharRegex = mention_matcher_nonWordCharRegex;
        _this.serviceName = cfg.serviceName;
        return _this;
    }
    /**
     * @inheritdoc
     */
    MentionMatcher.prototype.parseMatches = function (text) {
        var serviceName = this.serviceName, matcherRegex = this.matcherRegexes[this.serviceName], nonWordCharRegex = this.nonWordCharRegex, tagBuilder = this.tagBuilder, matches = [], match;
        if (!matcherRegex) {
            return matches;
        }
        while ((match = matcherRegex.exec(text)) !== null) {
            var offset = match.index, prevChar = text.charAt(offset - 1);
            // If we found the match at the beginning of the string, or we found the match
            // and there is a whitespace char in front of it (meaning it is not an email
            // address), then it is a username match.
            if (offset === 0 || nonWordCharRegex.test(prevChar)) {
                var matchedText = match[0].replace(/\.+$/g, ''), // strip off trailing .
                mention = matchedText.slice(1); // strip off the '@' character at the beginning
                matches.push(new mention_match_MentionMatch({
                    tagBuilder: tagBuilder,
                    matchedText: matchedText,
                    offset: offset,
                    serviceName: serviceName,
                    mention: mention
                }));
            }
        }
        return matches;
    };
    return MentionMatcher;
}(Matcher));


//# sourceMappingURL=mention-matcher.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/htmlParser/parse-html.js



// For debugging: search for other "For debugging" lines
// import CliTable from 'cli-table';
/**
 * Parses an HTML string, calling the callbacks to notify of tags and text.
 *
 * ## History
 *
 * This file previously used a regular expression to find html tags in the input
 * text. Unfortunately, we ran into a bunch of catastrophic backtracking issues
 * with certain input text, causing Autolinker to either hang or just take a
 * really long time to parse the string.
 *
 * The current code is intended to be a O(n) algorithm that walks through
 * the string in one pass, and tries to be as cheap as possible. We don't need
 * to implement the full HTML spec, but rather simply determine where the string
 * looks like an HTML tag, and where it looks like text (so that we can autolink
 * that).
 *
 * This state machine parser is intended just to be a simple but performant
 * parser of HTML for the subset of requirements we have. We simply need to:
 *
 * 1. Determine where HTML tags are
 * 2. Determine the tag name (Autolinker specifically only cares about <a>,
 *    <script>, and <style> tags, so as not to link any text within them)
 *
 * We don't need to:
 *
 * 1. Create a parse tree
 * 2. Auto-close tags with invalid markup
 * 3. etc.
 *
 * The other intention behind this is that we didn't want to add external
 * dependencies on the Autolinker utility which would increase its size. For
 * instance, adding htmlparser2 adds 125kb to the minified output file,
 * increasing its final size from 47kb to 172kb (at the time of writing). It
 * also doesn't work exactly correctly, treating the string "<3 blah blah blah"
 * as an HTML tag.
 *
 * Reference for HTML spec:
 *
 *     https://www.w3.org/TR/html51/syntax.html#sec-tokenization
 *
 * @param {String} html The HTML to parse
 * @param {Object} callbacks
 * @param {Function} callbacks.onOpenTag Callback function to call when an open
 *   tag is parsed. Called with the tagName as its argument.
 * @param {Function} callbacks.onCloseTag Callback function to call when a close
 *   tag is parsed. Called with the tagName as its argument. If a self-closing
 *   tag is found, `onCloseTag` is called immediately after `onOpenTag`.
 * @param {Function} callbacks.onText Callback function to call when text (i.e
 *   not an HTML tag) is parsed. Called with the text (string) as its first
 *   argument, and offset (number) into the string as its second.
 */
function parseHtml(html, _a) {
    var onOpenTag = _a.onOpenTag, onCloseTag = _a.onCloseTag, onText = _a.onText, onComment = _a.onComment, onDoctype = _a.onDoctype;
    var noCurrentTag = new CurrentTag();
    var charIdx = 0, len = html.length, state = 0 /* Data */, currentDataIdx = 0, // where the current data start index is
    currentTag = noCurrentTag; // describes the current tag that is being read
    // For debugging: search for other "For debugging" lines
    // const table = new CliTable( {
    // 	head: [ 'charIdx', 'char', 'state', 'currentDataIdx', 'currentOpenTagIdx', 'tag.type' ]
    // } );
    while (charIdx < len) {
        var char = html.charAt(charIdx);
        // For debugging: search for other "For debugging" lines
        // ALSO: Temporarily remove the 'const' keyword on the State enum
        // table.push( 
        // 	[ charIdx, char, State[ state ], currentDataIdx, currentTag.idx, currentTag.idx === -1 ? '' : currentTag.type ] 
        // );
        switch (state) {
            case 0 /* Data */:
                stateData(char);
                break;
            case 1 /* TagOpen */:
                stateTagOpen(char);
                break;
            case 2 /* EndTagOpen */:
                stateEndTagOpen(char);
                break;
            case 3 /* TagName */:
                stateTagName(char);
                break;
            case 4 /* BeforeAttributeName */:
                stateBeforeAttributeName(char);
                break;
            case 5 /* AttributeName */:
                stateAttributeName(char);
                break;
            case 6 /* AfterAttributeName */:
                stateAfterAttributeName(char);
                break;
            case 7 /* BeforeAttributeValue */:
                stateBeforeAttributeValue(char);
                break;
            case 8 /* AttributeValueDoubleQuoted */:
                stateAttributeValueDoubleQuoted(char);
                break;
            case 9 /* AttributeValueSingleQuoted */:
                stateAttributeValueSingleQuoted(char);
                break;
            case 10 /* AttributeValueUnquoted */:
                stateAttributeValueUnquoted(char);
                break;
            case 11 /* AfterAttributeValueQuoted */:
                stateAfterAttributeValueQuoted(char);
                break;
            case 12 /* SelfClosingStartTag */:
                stateSelfClosingStartTag(char);
                break;
            case 13 /* MarkupDeclarationOpenState */:
                stateMarkupDeclarationOpen(char);
                break;
            case 14 /* CommentStart */:
                stateCommentStart(char);
                break;
            case 15 /* CommentStartDash */:
                stateCommentStartDash(char);
                break;
            case 16 /* Comment */:
                stateComment(char);
                break;
            case 17 /* CommentEndDash */:
                stateCommentEndDash(char);
                break;
            case 18 /* CommentEnd */:
                stateCommentEnd(char);
                break;
            case 19 /* CommentEndBang */:
                stateCommentEndBang(char);
                break;
            case 20 /* Doctype */:
                stateDoctype(char);
                break;
            default:
                throwUnhandledCaseError(state);
        }
        // For debugging: search for other "For debugging" lines
        // ALSO: Temporarily remove the 'const' keyword on the State enum
        // table.push( 
        // 	[ charIdx, char, State[ state ], currentDataIdx, currentTag.idx, currentTag.idx === -1 ? '' : currentTag.type ] 
        // );
        charIdx++;
    }
    if (currentDataIdx < charIdx) {
        emitText();
    }
    // For debugging: search for other "For debugging" lines
    // console.log( '\n' + table.toString() );
    // Called when non-tags are being read (i.e. the text around HTML †ags)
    // https://www.w3.org/TR/html51/syntax.html#data-state
    function stateData(char) {
        if (char === '<') {
            startNewTag();
        }
    }
    // Called after a '<' is read from the Data state
    // https://www.w3.org/TR/html51/syntax.html#tag-open-state
    function stateTagOpen(char) {
        if (char === '!') {
            state = 13 /* MarkupDeclarationOpenState */;
        }
        else if (char === '/') {
            state = 2 /* EndTagOpen */;
            currentTag = new CurrentTag(__assign({}, currentTag, { isClosing: true }));
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else if (letterRe.test(char)) {
            // tag name start (and no '/' read)
            state = 3 /* TagName */;
            currentTag = new CurrentTag(__assign({}, currentTag, { isOpening: true }));
        }
        else {
            // Any other 
            state = 0 /* Data */;
            currentTag = noCurrentTag;
        }
    }
    // After a '<x', '</x' sequence is read (where 'x' is a letter character), 
    // this is to continue reading the tag name
    // https://www.w3.org/TR/html51/syntax.html#tag-name-state
    function stateTagName(char) {
        if (whitespaceRe.test(char)) {
            currentTag = new CurrentTag(__assign({}, currentTag, { name: captureTagName() }));
            state = 4 /* BeforeAttributeName */;
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else if (char === '/') {
            currentTag = new CurrentTag(__assign({}, currentTag, { name: captureTagName() }));
            state = 12 /* SelfClosingStartTag */;
        }
        else if (char === '>') {
            currentTag = new CurrentTag(__assign({}, currentTag, { name: captureTagName() }));
            emitTagAndPreviousTextNode(); // resets to Data state as well
        }
        else if (!letterRe.test(char) && !digitRe.test(char) && char !== ':') {
            // Anything else that does not form an html tag. Note: the colon 
            // character is accepted for XML namespaced tags
            resetToDataState();
        }
        else {
            // continue reading tag name
        }
    }
    // Called after the '/' is read from a '</' sequence
    // https://www.w3.org/TR/html51/syntax.html#end-tag-open-state
    function stateEndTagOpen(char) {
        if (char === '>') { // parse error. Encountered "</>". Skip it without treating as a tag
            resetToDataState();
        }
        else if (letterRe.test(char)) {
            state = 3 /* TagName */;
        }
        else {
            // some other non-tag-like character, don't treat this as a tag
            resetToDataState();
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#before-attribute-name-state
    function stateBeforeAttributeName(char) {
        if (whitespaceRe.test(char)) {
            // stay in BeforeAttributeName state - continue reading chars
        }
        else if (char === '/') {
            state = 12 /* SelfClosingStartTag */;
        }
        else if (char === '>') {
            emitTagAndPreviousTextNode(); // resets to Data state as well
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else if (char === "=" || quoteRe.test(char) || controlCharsRe.test(char)) {
            // "Parse error" characters that, according to the spec, should be
            // appended to the attribute name, but we'll treat these characters
            // as not forming a real HTML tag
            resetToDataState();
        }
        else {
            // Any other char, start of a new attribute name
            state = 5 /* AttributeName */;
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#attribute-name-state
    function stateAttributeName(char) {
        if (whitespaceRe.test(char)) {
            state = 6 /* AfterAttributeName */;
        }
        else if (char === '/') {
            state = 12 /* SelfClosingStartTag */;
        }
        else if (char === '=') {
            state = 7 /* BeforeAttributeValue */;
        }
        else if (char === '>') {
            emitTagAndPreviousTextNode(); // resets to Data state as well
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else if (quoteRe.test(char)) {
            // "Parse error" characters that, according to the spec, should be
            // appended to the attribute name, but we'll treat these characters
            // as not forming a real HTML tag
            resetToDataState();
        }
        else {
            // anything else: continue reading attribute name
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#after-attribute-name-state
    function stateAfterAttributeName(char) {
        if (whitespaceRe.test(char)) {
            // ignore the character - continue reading
        }
        else if (char === '/') {
            state = 12 /* SelfClosingStartTag */;
        }
        else if (char === '=') {
            state = 7 /* BeforeAttributeValue */;
        }
        else if (char === '>') {
            emitTagAndPreviousTextNode();
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else if (quoteRe.test(char)) {
            // "Parse error" characters that, according to the spec, should be
            // appended to the attribute name, but we'll treat these characters
            // as not forming a real HTML tag
            resetToDataState();
        }
        else {
            // Any other character, start a new attribute in the current tag
            state = 5 /* AttributeName */;
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#before-attribute-value-state
    function stateBeforeAttributeValue(char) {
        if (whitespaceRe.test(char)) {
            // ignore the character - continue reading
        }
        else if (char === "\"") {
            state = 8 /* AttributeValueDoubleQuoted */;
        }
        else if (char === "'") {
            state = 9 /* AttributeValueSingleQuoted */;
        }
        else if (/[>=`]/.test(char)) {
            // Invalid chars after an '=' for an attribute value, don't count 
            // the current tag as an HTML tag
            resetToDataState();
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else {
            // Any other character, consider it an unquoted attribute value
            state = 10 /* AttributeValueUnquoted */;
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#attribute-value-double-quoted-state
    function stateAttributeValueDoubleQuoted(char) {
        if (char === "\"") { // end the current double-quoted attribute
            state = 11 /* AfterAttributeValueQuoted */;
        }
        else {
            // consume the character as part of the double-quoted attribute value
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#attribute-value-single-quoted-state
    function stateAttributeValueSingleQuoted(char) {
        if (char === "'") { // end the current single-quoted attribute
            state = 11 /* AfterAttributeValueQuoted */;
        }
        else {
            // consume the character as part of the double-quoted attribute value
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#attribute-value-unquoted-state
    function stateAttributeValueUnquoted(char) {
        if (whitespaceRe.test(char)) {
            state = 4 /* BeforeAttributeName */;
        }
        else if (char === '>') {
            emitTagAndPreviousTextNode();
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else {
            // Any other character, treat it as part of the attribute value
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#after-attribute-value-quoted-state
    function stateAfterAttributeValueQuoted(char) {
        if (whitespaceRe.test(char)) {
            state = 4 /* BeforeAttributeName */;
        }
        else if (char === '/') {
            state = 12 /* SelfClosingStartTag */;
        }
        else if (char === '>') {
            emitTagAndPreviousTextNode();
        }
        else if (char === '<') {
            // start of another tag (ignore the previous, incomplete one)
            startNewTag();
        }
        else {
            // Any other character, "parse error". Spec says to switch to the
            // BeforeAttributeState and re-consume the character, as it may be
            // the start of a new attribute name
            state = 4 /* BeforeAttributeName */;
            reconsumeCurrentCharacter();
        }
    }
    // A '/' has just been read in the current tag (presumably for '/>'), and 
    // this handles the next character
    // https://www.w3.org/TR/html51/syntax.html#self-closing-start-tag-state
    function stateSelfClosingStartTag(char) {
        if (char === '>') {
            currentTag = new CurrentTag(__assign({}, currentTag, { isClosing: true }));
            emitTagAndPreviousTextNode(); // resets to Data state as well
        }
        else {
            state = 4 /* BeforeAttributeName */;
        }
    }
    // https://www.w3.org/TR/html51/syntax.html#markup-declaration-open-state
    // (HTML Comments or !DOCTYPE)
    function stateMarkupDeclarationOpen(char) {
        if (html.substr(charIdx, 2) === '--') { // html comment
            charIdx += 2; // "consume" characters
            currentTag = new CurrentTag(__assign({}, currentTag, { type: 'comment' }));
            state = 14 /* CommentStart */;
        }
        else if (html.substr(charIdx, 7).toUpperCase() === 'DOCTYPE') {
            charIdx += 7; // "consume" characters
            currentTag = new CurrentTag(__assign({}, currentTag, { type: 'doctype' }));
            state = 20 /* Doctype */;
        }
        else {
            // At this point, the spec specifies that the state machine should
            // enter the "bogus comment" state, in which case any character(s) 
            // after the '<!' that were read should become an HTML comment up
            // until the first '>' that is read (or EOF). Instead, we'll assume
            // that a user just typed '<!' as part of text data
            resetToDataState();
        }
    }
    // Handles after the sequence '<!--' has been read
    // https://www.w3.org/TR/html51/syntax.html#comment-start-state
    function stateCommentStart(char) {
        if (char === '-') {
            // We've read the sequence '<!---' at this point (3 dashes)
            state = 15 /* CommentStartDash */;
        }
        else if (char === '>') {
            // At this point, we'll assume the comment wasn't a real comment
            // so we'll just emit it as data. We basically read the sequence 
            // '<!-->'
            resetToDataState();
        }
        else {
            // Any other char, take it as part of the comment
            state = 16 /* Comment */;
        }
    }
    // We've read the sequence '<!---' at this point (3 dashes)
    // https://www.w3.org/TR/html51/syntax.html#comment-start-dash-state
    function stateCommentStartDash(char) {
        if (char === '-') {
            // We've read '<!----' (4 dashes) at this point
            state = 18 /* CommentEnd */;
        }
        else if (char === '>') {
            // At this point, we'll assume the comment wasn't a real comment
            // so we'll just emit it as data. We basically read the sequence 
            // '<!--->'
            resetToDataState();
        }
        else {
            // Anything else, take it as a valid comment
            state = 16 /* Comment */;
        }
    }
    // Currently reading the comment's text (data)
    // https://www.w3.org/TR/html51/syntax.html#comment-state
    function stateComment(char) {
        if (char === '-') {
            state = 17 /* CommentEndDash */;
        }
        else {
            // Any other character, stay in the Comment state
        }
    }
    // When we we've read the first dash inside a comment, it may signal the
    // end of the comment if we read another dash
    // https://www.w3.org/TR/html51/syntax.html#comment-end-dash-state
    function stateCommentEndDash(char) {
        if (char === '-') {
            state = 18 /* CommentEnd */;
        }
        else {
            // Wasn't a dash, must still be part of the comment
            state = 16 /* Comment */;
        }
    }
    // After we've read two dashes inside a comment, it may signal the end of 
    // the comment if we then read a '>' char
    // https://www.w3.org/TR/html51/syntax.html#comment-end-state
    function stateCommentEnd(char) {
        if (char === '>') {
            emitTagAndPreviousTextNode();
        }
        else if (char === '!') {
            state = 19 /* CommentEndBang */;
        }
        else if (char === '-') {
            // A 3rd '-' has been read: stay in the CommentEnd state
        }
        else {
            // Anything else, switch back to the comment state since we didn't
            // read the full "end comment" sequence (i.e. '-->')
            state = 16 /* Comment */;
        }
    }
    // We've read the sequence '--!' inside of a comment
    // https://www.w3.org/TR/html51/syntax.html#comment-end-bang-state
    function stateCommentEndBang(char) {
        if (char === '-') {
            // We read the sequence '--!-' inside of a comment. The last dash
            // could signify that the comment is going to close
            state = 17 /* CommentEndDash */;
        }
        else if (char === '>') {
            // End of comment with the sequence '--!>'
            emitTagAndPreviousTextNode();
        }
        else {
            // The '--!' was not followed by a '>', continue reading the 
            // comment's text
            state = 16 /* Comment */;
        }
    }
    /**
     * For DOCTYPES in particular, we don't care about the attributes. Just
     * advance to the '>' character and emit the tag, unless we find a '<'
     * character in which case we'll start a new tag.
     *
     * Example doctype tag:
     *    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
     *
     * Actual spec: https://www.w3.org/TR/html51/syntax.html#doctype-state
     */
    function stateDoctype(char) {
        if (char === '>') {
            emitTagAndPreviousTextNode();
        }
        else if (char === '<') {
            startNewTag();
        }
        else {
            // stay in the Doctype state
        }
    }
    /**
     * Resets the state back to the Data state, and removes the current tag.
     *
     * We'll generally run this function whenever a "parse error" is
     * encountered, where the current tag that is being read no longer looks
     * like a real HTML tag.
     */
    function resetToDataState() {
        state = 0 /* Data */;
        currentTag = noCurrentTag;
    }
    /**
     * Starts a new HTML tag at the current index, ignoring any previous HTML
     * tag that was being read.
     *
     * We'll generally run this function whenever we read a new '<' character,
     * including when we read a '<' character inside of an HTML tag that we were
     * previously reading.
     */
    function startNewTag() {
        state = 1 /* TagOpen */;
        currentTag = new CurrentTag({ idx: charIdx });
    }
    /**
     * Once we've decided to emit an open tag, that means we can also emit the
     * text node before it.
     */
    function emitTagAndPreviousTextNode() {
        var textBeforeTag = html.slice(currentDataIdx, currentTag.idx);
        if (textBeforeTag) {
            // the html tag was the first element in the html string, or two 
            // tags next to each other, in which case we should not emit a text 
            // node
            onText(textBeforeTag, currentDataIdx);
        }
        if (currentTag.type === 'comment') {
            onComment(currentTag.idx);
        }
        else if (currentTag.type === 'doctype') {
            onDoctype(currentTag.idx);
        }
        else {
            if (currentTag.isOpening) {
                onOpenTag(currentTag.name, currentTag.idx);
            }
            if (currentTag.isClosing) { // note: self-closing tags will emit both opening and closing
                onCloseTag(currentTag.name, currentTag.idx);
            }
        }
        // Since we just emitted a tag, reset to the data state for the next char
        resetToDataState();
        currentDataIdx = charIdx + 1;
    }
    function emitText() {
        var text = html.slice(currentDataIdx, charIdx);
        onText(text, currentDataIdx);
        currentDataIdx = charIdx + 1;
    }
    /**
     * Captures the tag name from the start of the tag to the current character
     * index, and converts it to lower case
     */
    function captureTagName() {
        var startIdx = currentTag.idx + (currentTag.isClosing ? 2 : 1);
        return html.slice(startIdx, charIdx).toLowerCase();
    }
    /**
     * Causes the main loop to re-consume the current character, such as after
     * encountering a "parse error" that changed state and needs to reconsume
     * the same character in that new state.
     */
    function reconsumeCurrentCharacter() {
        charIdx--;
    }
}
var CurrentTag = /** @class */ (function () {
    function CurrentTag(cfg) {
        if (cfg === void 0) { cfg = {}; }
        this.idx = cfg.idx !== undefined ? cfg.idx : -1;
        this.type = cfg.type || 'tag';
        this.name = cfg.name || '';
        this.isOpening = !!cfg.isOpening;
        this.isClosing = !!cfg.isClosing;
    }
    return CurrentTag;
}());

//# sourceMappingURL=parse-html.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/autolinker.js
















/**
 * @class Autolinker
 * @extends Object
 *
 * Utility class used to process a given string of text, and wrap the matches in
 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
 *
 * Any of the configuration options may be provided in an Object provided
 * to the Autolinker constructor, which will configure how the {@link #link link()}
 * method will process the links.
 *
 * For example:
 *
 *     var autolinker = new Autolinker( {
 *         newWindow : false,
 *         truncate  : 30
 *     } );
 *
 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
 *
 *
 * The {@link #static-link static link()} method may also be used to inline
 * options into a single call, which may be more convenient for one-off uses.
 * For example:
 *
 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
 *         newWindow : false,
 *         truncate  : 30
 *     } );
 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
 *
 *
 * ## Custom Replacements of Links
 *
 * If the configuration options do not provide enough flexibility, a {@link #replaceFn}
 * may be provided to fully customize the output of Autolinker. This function is
 * called once for each URL/Email/Phone#/Hashtag/Mention (Twitter, Instagram, Soundcloud)
 * match that is encountered.
 *
 * For example:
 *
 *     var input = "...";  // string with URLs, Email Addresses, Phone #s, Hashtags, and Mentions (Twitter, Instagram, Soundcloud)
 *
 *     var linkedText = Autolinker.link( input, {
 *         replaceFn : function( match ) {
 *             console.log( "href = ", match.getAnchorHref() );
 *             console.log( "text = ", match.getAnchorText() );
 *
 *             switch( match.getType() ) {
 *                 case 'url' :
 *                     console.log( "url: ", match.getUrl() );
 *
 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
 *                         var tag = match.buildTag();  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
 *                         tag.setAttr( 'rel', 'nofollow' );
 *                         tag.addClass( 'external-link' );
 *
 *                         return tag;
 *
 *                     } else {
 *                         return true;  // let Autolinker perform its normal anchor tag replacement
 *                     }
 *
 *                 case 'email' :
 *                     var email = match.getEmail();
 *                     console.log( "email: ", email );
 *
 *                     if( email === "my@own.address" ) {
 *                         return false;  // don't auto-link this particular email address; leave as-is
 *                     } else {
 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
 *                     }
 *
 *                 case 'phone' :
 *                     var phoneNumber = match.getPhoneNumber();
 *                     console.log( phoneNumber );
 *
 *                     return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';
 *
 *                 case 'hashtag' :
 *                     var hashtag = match.getHashtag();
 *                     console.log( hashtag );
 *
 *                     return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';
 *
 *                 case 'mention' :
 *                     var mention = match.getMention();
 *                     console.log( mention );
 *
 *                     return '<a href="http://newplace.to.link.mention.to/">' + mention + '</a>';
 *             }
 *         }
 *     } );
 *
 *
 * The function may return the following values:
 *
 * - `true` (Boolean): Allow Autolinker to replace the match as it normally
 *   would.
 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
 * - Any String: If a string is returned from the function, the string will be
 *   used directly as the replacement HTML for the match.
 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify
 *   an HTML tag before writing out its HTML text.
 */
var autolinker_Autolinker = /** @class */ (function () {
    /**
     * @method constructor
     * @param {Object} [cfg] The configuration options for the Autolinker instance,
     *   specified in an Object (map).
     */
    function Autolinker(cfg) {
        if (cfg === void 0) { cfg = {}; }
        /**
         * The Autolinker version number exposed on the instance itself.
         *
         * Ex: 0.25.1
         */
        this.version = Autolinker.version;
        /**
         * @cfg {Boolean/Object} [urls]
         *
         * `true` if URLs should be automatically linked, `false` if they should not
         * be. Defaults to `true`.
         *
         * Examples:
         *
         *     urls: true
         *
         *     // or
         *
         *     urls: {
         *         schemeMatches : true,
         *         wwwMatches    : true,
         *         tldMatches    : true
         *     }
         *
         * As shown above, this option also accepts an Object form with 3 properties
         * to allow for more customization of what exactly gets linked. All default
         * to `true`:
         *
         * @cfg {Boolean} [urls.schemeMatches] `true` to match URLs found prefixed
         *   with a scheme, i.e. `http://google.com`, or `other+scheme://google.com`,
         *   `false` to prevent these types of matches.
         * @cfg {Boolean} [urls.wwwMatches] `true` to match urls found prefixed with
         *   `'www.'`, i.e. `www.google.com`. `false` to prevent these types of
         *   matches. Note that if the URL had a prefixed scheme, and
         *   `schemeMatches` is true, it will still be linked.
         * @cfg {Boolean} [urls.tldMatches] `true` to match URLs with known top
         *   level domains (.com, .net, etc.) that are not prefixed with a scheme or
         *   `'www.'`. This option attempts to match anything that looks like a URL
         *   in the given text. Ex: `google.com`, `asdf.org/?page=1`, etc. `false`
         *   to prevent these types of matches.
         */
        this.urls = {}; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} [email=true]
         *
         * `true` if email addresses should be automatically linked, `false` if they
         * should not be.
         */
        this.email = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} [phone=true]
         *
         * `true` if Phone numbers ("(555)555-5555") should be automatically linked,
         * `false` if they should not be.
         */
        this.phone = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean/String} [hashtag=false]
         *
         * A string for the service name to have hashtags (ex: "#myHashtag")
         * auto-linked to. The currently-supported values are:
         *
         * - 'twitter'
         * - 'facebook'
         * - 'instagram'
         *
         * Pass `false` to skip auto-linking of hashtags.
         */
        this.hashtag = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {String/Boolean} [mention=false]
         *
         * A string for the service name to have mentions (ex: "@myuser")
         * auto-linked to. The currently supported values are:
         *
         * - 'twitter'
         * - 'instagram'
         * - 'soundcloud'
         *
         * Defaults to `false` to skip auto-linking of mentions.
         */
        this.mention = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} [newWindow=true]
         *
         * `true` if the links should open in a new window, `false` otherwise.
         */
        this.newWindow = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean/Object} [stripPrefix=true]
         *
         * `true` if 'http://' (or 'https://') and/or the 'www.' should be stripped
         * from the beginning of URL links' text, `false` otherwise. Defaults to
         * `true`.
         *
         * Examples:
         *
         *     stripPrefix: true
         *
         *     // or
         *
         *     stripPrefix: {
         *         scheme : true,
         *         www    : true
         *     }
         *
         * As shown above, this option also accepts an Object form with 2 properties
         * to allow for more customization of what exactly is prevented from being
         * displayed. Both default to `true`:
         *
         * @cfg {Boolean} [stripPrefix.scheme] `true` to prevent the scheme part of
         *   a URL match from being displayed to the user. Example:
         *   `'http://google.com'` will be displayed as `'google.com'`. `false` to
         *   not strip the scheme. NOTE: Only an `'http://'` or `'https://'` scheme
         *   will be removed, so as not to remove a potentially dangerous scheme
         *   (such as `'file://'` or `'javascript:'`)
         * @cfg {Boolean} [stripPrefix.www] www (Boolean): `true` to prevent the
         *   `'www.'` part of a URL match from being displayed to the user. Ex:
         *   `'www.google.com'` will be displayed as `'google.com'`. `false` to not
         *   strip the `'www'`.
         */
        this.stripPrefix = { scheme: true, www: true }; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} [stripTrailingSlash=true]
         *
         * `true` to remove the trailing slash from URL matches, `false` to keep
         *  the trailing slash.
         *
         *  Example when `true`: `http://google.com/` will be displayed as
         *  `http://google.com`.
         */
        this.stripTrailingSlash = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} [decodePercentEncoding=true]
         *
         * `true` to decode percent-encoded characters in URL matches, `false` to keep
         *  the percent-encoded characters.
         *
         *  Example when `true`: `https://en.wikipedia.org/wiki/San_Jos%C3%A9` will
         *  be displayed as `https://en.wikipedia.org/wiki/San_José`.
         */
        this.decodePercentEncoding = true; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Number/Object} [truncate=0]
         *
         * ## Number Form
         *
         * A number for how many characters matched text should be truncated to
         * inside the text of a link. If the matched text is over this number of
         * characters, it will be truncated to this length by adding a two period
         * ellipsis ('..') to the end of the string.
         *
         * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file'
         * truncated to 25 characters might look something like this:
         * 'yahoo.com/some/long/pat..'
         *
         * Example Usage:
         *
         *     truncate: 25
         *
         *
         *  Defaults to `0` for "no truncation."
         *
         *
         * ## Object Form
         *
         * An Object may also be provided with two properties: `length` (Number) and
         * `location` (String). `location` may be one of the following: 'end'
         * (default), 'middle', or 'smart'.
         *
         * Example Usage:
         *
         *     truncate: { length: 25, location: 'middle' }
         *
         * @cfg {Number} [truncate.length=0] How many characters to allow before
         *   truncation will occur. Defaults to `0` for "no truncation."
         * @cfg {"end"/"middle"/"smart"} [truncate.location="end"]
         *
         * - 'end' (default): will truncate up to the number of characters, and then
         *   add an ellipsis at the end. Ex: 'yahoo.com/some/long/pat..'
         * - 'middle': will truncate and add the ellipsis in the middle. Ex:
         *   'yahoo.com/s..th/to/a/file'
         * - 'smart': for URLs where the algorithm attempts to strip out unnecessary
         *   parts first (such as the 'www.', then URL scheme, hash, etc.),
         *   attempting to make the URL human-readable before looking for a good
         *   point to insert the ellipsis if it is still too long. Ex:
         *   'yahoo.com/some..to/a/file'. For more details, see
         *   {@link Autolinker.truncate.TruncateSmart}.
         */
        this.truncate = { length: 0, location: 'end' }; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {String} className
         *
         * A CSS class name to add to the generated links. This class will be added
         * to all links, as well as this class plus match suffixes for styling
         * url/email/phone/hashtag/mention links differently.
         *
         * For example, if this config is provided as "myLink", then:
         *
         * - URL links will have the CSS classes: "myLink myLink-url"
         * - Email links will have the CSS classes: "myLink myLink-email", and
         * - Phone links will have the CSS classes: "myLink myLink-phone"
         * - Hashtag links will have the CSS classes: "myLink myLink-hashtag"
         * - Mention links will have the CSS classes: "myLink myLink-mention myLink-[type]"
         *   where [type] is either "instagram", "twitter" or "soundcloud"
         */
        this.className = ''; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Function} replaceFn
         *
         * A function to individually process each match found in the input string.
         *
         * See the class's description for usage.
         *
         * The `replaceFn` can be called with a different context object (`this`
         * reference) using the {@link #context} cfg.
         *
         * This function is called with the following parameter:
         *
         * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which
         *   can be used to retrieve information about the match that the `replaceFn`
         *   is currently processing. See {@link Autolinker.match.Match} subclasses
         *   for details.
         */
        this.replaceFn = null; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Object} context
         *
         * The context object (`this` reference) to call the `replaceFn` with.
         *
         * Defaults to this Autolinker instance.
         */
        this.context = undefined; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @cfg {Boolean} [sanitizeHtml=false]
         *
         * `true` to HTML-encode the start and end brackets of existing HTML tags found
         * in the input string. This will escape `<` and `>` characters to `&lt;` and
         * `&gt;`, respectively.
         *
         * Setting this to `true` will prevent XSS (Cross-site Scripting) attacks,
         * but will remove the significance of existing HTML tags in the input string. If
         * you would like to maintain the significance of existing HTML tags while also
         * making the output HTML string safe, leave this option as `false` and use a
         * tool like https://github.com/cure53/DOMPurify (or others) on the input string
         * before running Autolinker.
         */
        this.sanitizeHtml = false; // default value just to get the above doc comment in the ES5 output and documentation generator
        /**
         * @private
         * @property {Autolinker.matcher.Matcher[]} matchers
         *
         * The {@link Autolinker.matcher.Matcher} instances for this Autolinker
         * instance.
         *
         * This is lazily created in {@link #getMatchers}.
         */
        this.matchers = null;
        /**
         * @private
         * @property {Autolinker.AnchorTagBuilder} tagBuilder
         *
         * The AnchorTagBuilder instance used to build match replacement anchor tags.
         * Note: this is lazily instantiated in the {@link #getTagBuilder} method.
         */
        this.tagBuilder = null;
        // Note: when `this.something` is used in the rhs of these assignments,
        //       it refers to the default values set above the constructor
        this.urls = this.normalizeUrlsCfg(cfg.urls);
        this.email = typeof cfg.email === 'boolean' ? cfg.email : this.email;
        this.phone = typeof cfg.phone === 'boolean' ? cfg.phone : this.phone;
        this.hashtag = cfg.hashtag || this.hashtag;
        this.mention = cfg.mention || this.mention;
        this.newWindow = typeof cfg.newWindow === 'boolean' ? cfg.newWindow : this.newWindow;
        this.stripPrefix = this.normalizeStripPrefixCfg(cfg.stripPrefix);
        this.stripTrailingSlash = typeof cfg.stripTrailingSlash === 'boolean' ? cfg.stripTrailingSlash : this.stripTrailingSlash;
        this.decodePercentEncoding = typeof cfg.decodePercentEncoding === 'boolean' ? cfg.decodePercentEncoding : this.decodePercentEncoding;
        this.sanitizeHtml = cfg.sanitizeHtml || false;
        // Validate the value of the `mention` cfg
        var mention = this.mention;
        if (mention !== false && mention !== 'twitter' && mention !== 'instagram' && mention !== 'soundcloud') {
            throw new Error("invalid `mention` cfg - see docs");
        }
        // Validate the value of the `hashtag` cfg
        var hashtag = this.hashtag;
        if (hashtag !== false && hashtag !== 'twitter' && hashtag !== 'facebook' && hashtag !== 'instagram') {
            throw new Error("invalid `hashtag` cfg - see docs");
        }
        this.truncate = this.normalizeTruncateCfg(cfg.truncate);
        this.className = cfg.className || this.className;
        this.replaceFn = cfg.replaceFn || this.replaceFn;
        this.context = cfg.context || this;
    }
    /**
     * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles,
     * Hashtags, and Mentions found in the given chunk of HTML. Does not link URLs
     * found within HTML tags.
     *
     * For instance, if given the text: `You should go to http://www.yahoo.com`,
     * then the result will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
     *
     * Example:
     *
     *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
     *     // Produces: "Go to <a href="http://google.com">google.com</a>"
     *
     * @static
     * @param {String} textOrHtml The HTML or text to find matches within (depending
     *   on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #mention},
     *   {@link #hashtag}, and {@link #mention} options are enabled).
     * @param {Object} [options] Any of the configuration options for the Autolinker
     *   class, specified in an Object (map). See the class description for an
     *   example call.
     * @return {String} The HTML text, with matches automatically linked.
     */
    Autolinker.link = function (textOrHtml, options) {
        var autolinker = new Autolinker(options);
        return autolinker.link(textOrHtml);
    };
    /**
     * Parses the input `textOrHtml` looking for URLs, email addresses, phone
     * numbers, username handles, and hashtags (depending on the configuration
     * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
     * objects describing those matches (without making any replacements).
     *
     * Note that if parsing multiple pieces of text, it is slightly more efficient
     * to create an Autolinker instance, and use the instance-level {@link #parse}
     * method.
     *
     * Example:
     *
     *     var matches = Autolinker.parse( "Hello google.com, I am asdf@asdf.com", {
     *         urls: true,
     *         email: true
     *     } );
     *
     *     console.log( matches.length );           // 2
     *     console.log( matches[ 0 ].getType() );   // 'url'
     *     console.log( matches[ 0 ].getUrl() );    // 'google.com'
     *     console.log( matches[ 1 ].getType() );   // 'email'
     *     console.log( matches[ 1 ].getEmail() );  // 'asdf@asdf.com'
     *
     * @static
     * @param {String} textOrHtml The HTML or text to find matches within
     *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},
     *   {@link #hashtag}, and {@link #mention} options are enabled).
     * @param {Object} [options] Any of the configuration options for the Autolinker
     *   class, specified in an Object (map). See the class description for an
     *   example call.
     * @return {Autolinker.match.Match[]} The array of Matches found in the
     *   given input `textOrHtml`.
     */
    Autolinker.parse = function (textOrHtml, options) {
        var autolinker = new Autolinker(options);
        return autolinker.parse(textOrHtml);
    };
    /**
     * Normalizes the {@link #urls} config into an Object with 3 properties:
     * `schemeMatches`, `wwwMatches`, and `tldMatches`, all Booleans.
     *
     * See {@link #urls} config for details.
     *
     * @private
     * @param {Boolean/Object} urls
     * @return {Object}
     */
    Autolinker.prototype.normalizeUrlsCfg = function (urls) {
        if (urls == null)
            urls = true; // default to `true`
        if (typeof urls === 'boolean') {
            return { schemeMatches: urls, wwwMatches: urls, tldMatches: urls };
        }
        else { // object form
            return {
                schemeMatches: typeof urls.schemeMatches === 'boolean' ? urls.schemeMatches : true,
                wwwMatches: typeof urls.wwwMatches === 'boolean' ? urls.wwwMatches : true,
                tldMatches: typeof urls.tldMatches === 'boolean' ? urls.tldMatches : true
            };
        }
    };
    /**
     * Normalizes the {@link #stripPrefix} config into an Object with 2
     * properties: `scheme`, and `www` - both Booleans.
     *
     * See {@link #stripPrefix} config for details.
     *
     * @private
     * @param {Boolean/Object} stripPrefix
     * @return {Object}
     */
    Autolinker.prototype.normalizeStripPrefixCfg = function (stripPrefix) {
        if (stripPrefix == null)
            stripPrefix = true; // default to `true`
        if (typeof stripPrefix === 'boolean') {
            return { scheme: stripPrefix, www: stripPrefix };
        }
        else { // object form
            return {
                scheme: typeof stripPrefix.scheme === 'boolean' ? stripPrefix.scheme : true,
                www: typeof stripPrefix.www === 'boolean' ? stripPrefix.www : true
            };
        }
    };
    /**
     * Normalizes the {@link #truncate} config into an Object with 2 properties:
     * `length` (Number), and `location` (String).
     *
     * See {@link #truncate} config for details.
     *
     * @private
     * @param {Number/Object} truncate
     * @return {Object}
     */
    Autolinker.prototype.normalizeTruncateCfg = function (truncate) {
        if (typeof truncate === 'number') {
            return { length: truncate, location: 'end' };
        }
        else { // object, or undefined/null
            return defaults(truncate || {}, {
                length: Number.POSITIVE_INFINITY,
                location: 'end'
            });
        }
    };
    /**
     * Parses the input `textOrHtml` looking for URLs, email addresses, phone
     * numbers, username handles, and hashtags (depending on the configuration
     * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
     * objects describing those matches (without making any replacements).
     *
     * This method is used by the {@link #link} method, but can also be used to
     * simply do parsing of the input in order to discover what kinds of links
     * there are and how many.
     *
     * Example usage:
     *
     *     var autolinker = new Autolinker( {
     *         urls: true,
     *         email: true
     *     } );
     *
     *     var matches = autolinker.parse( "Hello google.com, I am asdf@asdf.com" );
     *
     *     console.log( matches.length );           // 2
     *     console.log( matches[ 0 ].getType() );   // 'url'
     *     console.log( matches[ 0 ].getUrl() );    // 'google.com'
     *     console.log( matches[ 1 ].getType() );   // 'email'
     *     console.log( matches[ 1 ].getEmail() );  // 'asdf@asdf.com'
     *
     * @param {String} textOrHtml The HTML or text to find matches within
     *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},
     *   {@link #hashtag}, and {@link #mention} options are enabled).
     * @return {Autolinker.match.Match[]} The array of Matches found in the
     *   given input `textOrHtml`.
     */
    Autolinker.prototype.parse = function (textOrHtml) {
        var _this = this;
        var skipTagNames = ['a', 'style', 'script'], skipTagsStackCount = 0, // used to only Autolink text outside of anchor/script/style tags. We don't want to autolink something that is already linked inside of an <a> tag, for instance
        matches = [];
        // Find all matches within the `textOrHtml` (but not matches that are
        // already nested within <a>, <style> and <script> tags)
        parseHtml(textOrHtml, {
            onOpenTag: function (tagName) {
                if (skipTagNames.indexOf(tagName) >= 0) {
                    skipTagsStackCount++;
                }
            },
            onText: function (text, offset) {
                // Only process text nodes that are not within an <a>, <style> or <script> tag
                if (skipTagsStackCount === 0) {
                    // "Walk around" common HTML entities. An '&nbsp;' (for example)
                    // could be at the end of a URL, but we don't want to 
                    // include the trailing '&' in the URL. See issue #76
                    // TODO: Handle HTML entities separately in parseHtml() and
                    // don't emit them as "text" except for &amp; entities
                    var htmlCharacterEntitiesRegex = /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi;
                    var textSplit = splitAndCapture(text, htmlCharacterEntitiesRegex);
                    var currentOffset_1 = offset;
                    textSplit.forEach(function (splitText, i) {
                        // even number matches are text, odd numbers are html entities
                        if (i % 2 === 0) {
                            var textNodeMatches = _this.parseText(splitText, currentOffset_1);
                            matches.push.apply(matches, textNodeMatches);
                        }
                        currentOffset_1 += splitText.length;
                    });
                }
            },
            onCloseTag: function (tagName) {
                if (skipTagNames.indexOf(tagName) >= 0) {
                    skipTagsStackCount = Math.max(skipTagsStackCount - 1, 0); // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
                }
            },
            onComment: function (offset) { },
            onDoctype: function (offset) { },
        });
        // After we have found all matches, remove subsequent matches that
        // overlap with a previous match. This can happen for instance with URLs,
        // where the url 'google.com/#link' would match '#link' as a hashtag.
        matches = this.compactMatches(matches);
        // And finally, remove matches for match types that have been turned
        // off. We needed to have all match types turned on initially so that
        // things like hashtags could be filtered out if they were really just
        // part of a URL match (for instance, as a named anchor).
        matches = this.removeUnwantedMatches(matches);
        return matches;
    };
    /**
     * After we have found all matches, we need to remove matches that overlap
     * with a previous match. This can happen for instance with URLs, where the
     * url 'google.com/#link' would match '#link' as a hashtag. Because the
     * '#link' part is contained in a larger match that comes before the HashTag
     * match, we'll remove the HashTag match.
     *
     * @private
     * @param {Autolinker.match.Match[]} matches
     * @return {Autolinker.match.Match[]}
     */
    Autolinker.prototype.compactMatches = function (matches) {
        // First, the matches need to be sorted in order of offset
        matches.sort(function (a, b) { return a.getOffset() - b.getOffset(); });
        for (var i = 0; i < matches.length - 1; i++) {
            var match = matches[i], offset = match.getOffset(), matchedTextLength = match.getMatchedText().length, endIdx = offset + matchedTextLength;
            if (i + 1 < matches.length) {
                // Remove subsequent matches that equal offset with current match
                if (matches[i + 1].getOffset() === offset) {
                    var removeIdx = matches[i + 1].getMatchedText().length > matchedTextLength ? i : i + 1;
                    matches.splice(removeIdx, 1);
                    continue;
                }
                // Remove subsequent matches that overlap with the current match
                if (matches[i + 1].getOffset() < endIdx) {
                    matches.splice(i + 1, 1);
                }
            }
        }
        return matches;
    };
    /**
     * Removes matches for matchers that were turned off in the options. For
     * example, if {@link #hashtag hashtags} were not to be matched, we'll
     * remove them from the `matches` array here.
     *
     * Note: we *must* use all Matchers on the input string, and then filter
     * them out later. For example, if the options were `{ url: false, hashtag: true }`,
     * we wouldn't want to match the text '#link' as a HashTag inside of the text
     * 'google.com/#link'. The way the algorithm works is that we match the full
     * URL first (which prevents the accidental HashTag match), and then we'll
     * simply throw away the URL match.
     *
     * @private
     * @param {Autolinker.match.Match[]} matches The array of matches to remove
     *   the unwanted matches from. Note: this array is mutated for the
     *   removals.
     * @return {Autolinker.match.Match[]} The mutated input `matches` array.
     */
    Autolinker.prototype.removeUnwantedMatches = function (matches) {
        if (!this.hashtag)
            remove(matches, function (match) { return match.getType() === 'hashtag'; });
        if (!this.email)
            remove(matches, function (match) { return match.getType() === 'email'; });
        if (!this.phone)
            remove(matches, function (match) { return match.getType() === 'phone'; });
        if (!this.mention)
            remove(matches, function (match) { return match.getType() === 'mention'; });
        if (!this.urls.schemeMatches) {
            remove(matches, function (m) { return m.getType() === 'url' && m.getUrlMatchType() === 'scheme'; });
        }
        if (!this.urls.wwwMatches) {
            remove(matches, function (m) { return m.getType() === 'url' && m.getUrlMatchType() === 'www'; });
        }
        if (!this.urls.tldMatches) {
            remove(matches, function (m) { return m.getType() === 'url' && m.getUrlMatchType() === 'tld'; });
        }
        return matches;
    };
    /**
     * Parses the input `text` looking for URLs, email addresses, phone
     * numbers, username handles, and hashtags (depending on the configuration
     * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}
     * objects describing those matches.
     *
     * This method processes a **non-HTML string**, and is used to parse and
     * match within the text nodes of an HTML string. This method is used
     * internally by {@link #parse}.
     *
     * @private
     * @param {String} text The text to find matches within (depending on if the
     *   {@link #urls}, {@link #email}, {@link #phone},
     *   {@link #hashtag}, and {@link #mention} options are enabled). This must be a non-HTML string.
     * @param {Number} [offset=0] The offset of the text node within the
     *   original string. This is used when parsing with the {@link #parse}
     *   method to generate correct offsets within the {@link Autolinker.match.Match}
     *   instances, but may be omitted if calling this method publicly.
     * @return {Autolinker.match.Match[]} The array of Matches found in the
     *   given input `text`.
     */
    Autolinker.prototype.parseText = function (text, offset) {
        if (offset === void 0) { offset = 0; }
        offset = offset || 0;
        var matchers = this.getMatchers(), matches = [];
        for (var i = 0, numMatchers = matchers.length; i < numMatchers; i++) {
            var textMatches = matchers[i].parseMatches(text);
            // Correct the offset of each of the matches. They are originally
            // the offset of the match within the provided text node, but we
            // need to correct them to be relative to the original HTML input
            // string (i.e. the one provided to #parse).
            for (var j = 0, numTextMatches = textMatches.length; j < numTextMatches; j++) {
                textMatches[j].setOffset(offset + textMatches[j].getOffset());
            }
            matches.push.apply(matches, textMatches);
        }
        return matches;
    };
    /**
     * Automatically links URLs, Email addresses, Phone numbers, Hashtags,
     * and Mentions (Twitter, Instagram, Soundcloud) found in the given chunk of HTML. Does not link
     * URLs found within HTML tags.
     *
     * For instance, if given the text: `You should go to http://www.yahoo.com`,
     * then the result will be `You should go to
     * &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
     *
     * This method finds the text around any HTML elements in the input
     * `textOrHtml`, which will be the text that is processed. Any original HTML
     * elements will be left as-is, as well as the text that is already wrapped
     * in anchor (&lt;a&gt;) tags.
     *
     * @param {String} textOrHtml The HTML or text to autolink matches within
     *   (depending on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #hashtag}, and {@link #mention} options are enabled).
     * @return {String} The HTML, with matches automatically linked.
     */
    Autolinker.prototype.link = function (textOrHtml) {
        if (!textOrHtml) {
            return "";
        } // handle `null` and `undefined` (for JavaScript users that don't have TypeScript support)
        /* We would want to sanitize the start and end characters of a tag
         * before processing the string in order to avoid an XSS scenario.
         * This behaviour can be changed by toggling the sanitizeHtml option.
         */
        if (this.sanitizeHtml) {
            textOrHtml = textOrHtml
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }
        var matches = this.parse(textOrHtml), newHtml = [], lastIndex = 0;
        for (var i = 0, len = matches.length; i < len; i++) {
            var match = matches[i];
            newHtml.push(textOrHtml.substring(lastIndex, match.getOffset()));
            newHtml.push(this.createMatchReturnVal(match));
            lastIndex = match.getOffset() + match.getMatchedText().length;
        }
        newHtml.push(textOrHtml.substring(lastIndex)); // handle the text after the last match
        return newHtml.join('');
    };
    /**
     * Creates the return string value for a given match in the input string.
     *
     * This method handles the {@link #replaceFn}, if one was provided.
     *
     * @private
     * @param {Autolinker.match.Match} match The Match object that represents
     *   the match.
     * @return {String} The string that the `match` should be replaced with.
     *   This is usually the anchor tag string, but may be the `matchStr` itself
     *   if the match is not to be replaced.
     */
    Autolinker.prototype.createMatchReturnVal = function (match) {
        // Handle a custom `replaceFn` being provided
        var replaceFnResult;
        if (this.replaceFn) {
            replaceFnResult = this.replaceFn.call(this.context, match); // Autolinker instance is the context
        }
        if (typeof replaceFnResult === 'string') {
            return replaceFnResult; // `replaceFn` returned a string, use that
        }
        else if (replaceFnResult === false) {
            return match.getMatchedText(); // no replacement for the match
        }
        else if (replaceFnResult instanceof html_tag_HtmlTag) {
            return replaceFnResult.toAnchorString();
        }
        else { // replaceFnResult === true, or no/unknown return value from function
            // Perform Autolinker's default anchor tag generation
            var anchorTag = match.buildTag(); // returns an Autolinker.HtmlTag instance
            return anchorTag.toAnchorString();
        }
    };
    /**
     * Lazily instantiates and returns the {@link Autolinker.matcher.Matcher}
     * instances for this Autolinker instance.
     *
     * @private
     * @return {Autolinker.matcher.Matcher[]}
     */
    Autolinker.prototype.getMatchers = function () {
        if (!this.matchers) {
            var tagBuilder = this.getTagBuilder();
            var matchers = [
                new hashtag_matcher_HashtagMatcher({ tagBuilder: tagBuilder, serviceName: this.hashtag }),
                new email_matcher_EmailMatcher({ tagBuilder: tagBuilder }),
                new phone_matcher_PhoneMatcher({ tagBuilder: tagBuilder }),
                new mention_matcher_MentionMatcher({ tagBuilder: tagBuilder, serviceName: this.mention }),
                new url_matcher_UrlMatcher({ tagBuilder: tagBuilder, stripPrefix: this.stripPrefix, stripTrailingSlash: this.stripTrailingSlash, decodePercentEncoding: this.decodePercentEncoding })
            ];
            return (this.matchers = matchers);
        }
        else {
            return this.matchers;
        }
    };
    /**
     * Returns the {@link #tagBuilder} instance for this Autolinker instance,
     * lazily instantiating it if it does not yet exist.
     *
     * @private
     * @return {Autolinker.AnchorTagBuilder}
     */
    Autolinker.prototype.getTagBuilder = function () {
        var tagBuilder = this.tagBuilder;
        if (!tagBuilder) {
            tagBuilder = this.tagBuilder = new anchor_tag_builder_AnchorTagBuilder({
                newWindow: this.newWindow,
                truncate: this.truncate,
                className: this.className
            });
        }
        return tagBuilder;
    };
    /**
     * @static
     * @property {String} version
     *
     * The Autolinker version number in the form major.minor.patch
     *
     * Ex: 0.25.1
     */
    Autolinker.version = '3.14.1';
    /**
     * For backwards compatibility with Autolinker 1.x, the AnchorTagBuilder
     * class is provided as a static on the Autolinker class.
     */
    Autolinker.AnchorTagBuilder = anchor_tag_builder_AnchorTagBuilder;
    /**
     * For backwards compatibility with Autolinker 1.x, the HtmlTag class is
     * provided as a static on the Autolinker class.
     */
    Autolinker.HtmlTag = html_tag_HtmlTag;
    /**
     * For backwards compatibility with Autolinker 1.x, the Matcher classes are
     * provided as statics on the Autolinker class.
     */
    Autolinker.matcher = {
        Email: email_matcher_EmailMatcher,
        Hashtag: hashtag_matcher_HashtagMatcher,
        Matcher: Matcher,
        Mention: mention_matcher_MentionMatcher,
        Phone: phone_matcher_PhoneMatcher,
        Url: url_matcher_UrlMatcher
    };
    /**
     * For backwards compatibility with Autolinker 1.x, the Match classes are
     * provided as statics on the Autolinker class.
     */
    Autolinker.match = {
        Email: email_match_EmailMatch,
        Hashtag: hashtag_match_HashtagMatch,
        Match: Match,
        Mention: mention_match_MentionMatch,
        Phone: phone_match_PhoneMatch,
        Url: url_match_UrlMatch
    };
    return Autolinker;
}());
/* harmony default export */ var autolinker = (autolinker_Autolinker);

//# sourceMappingURL=autolinker.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/match/index.js







//# sourceMappingURL=index.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/matcher/index.js







//# sourceMappingURL=index.js.map

// CONCATENATED MODULE: ./node_modules/autolinker/dist/es2015/index.js
// WARNING: This file is modified a bit when it is compiled into index.js in 
// order to support nodejs interoperability with require('autolinker') directly. 
// This is done by the buildSrcFixCommonJsIndexTask() function in the gulpfile. 
// See that function for more details.








//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/vue_chat_plugin/store/index.js

/* harmony default export */ var store = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.observable({
  editMessage: null,
  currentUser: null
}));
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/TextMessage.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var fmt = __webpack_require__("3715");

/* harmony default export */ var TextMessagevue_type_script_lang_js_ = ({
  components: {
    IconBase: IconBase,
    IconCross: IconCross,
    IconEdit: IconEdit
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showEdition: {
      type: Boolean,
      required: true
    },
    showDeletion: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      store: store
    };
  },
  computed: {
    messageText: function messageText() {
      var escaped = Object(escape_goat["htmlEscape"])(this.message.data.text);
      return autolinker.link(this.messageStyling ? fmt(escaped) : escaped, {
        className: 'chatLink',
        truncate: {
          length: 50,
          location: 'smart'
        }
      });
    },
    currentUserId: function currentUserId() {
      if (!this.store.currentUser) {
        return this.$MMC_UID;
      }

      return this.store.currentUser.id;
    },
    me: function me() {
      return this.message.author === this.currentUserId;
    },
    isEditing: function isEditing() {
      return (store.editMessage && store.editMessage.id) == this.message.id;
    }
  },
  methods: {
    edit: function edit() {
      this.store.editMessage = this.message;
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/TextMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_TextMessagevue_type_script_lang_js_ = (TextMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/messages/TextMessage.vue?vue&type=style&index=0&id=cac4baf8&scoped=true&lang=css&
var TextMessagevue_type_style_index_0_id_cac4baf8_scoped_true_lang_css_ = __webpack_require__("9e98");

// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/TextMessage.vue






/* normalize component */

var TextMessage_component = normalizeComponent(
  messages_TextMessagevue_type_script_lang_js_,
  TextMessagevue_type_template_id_cac4baf8_scoped_true_render,
  TextMessagevue_type_template_id_cac4baf8_scoped_true_staticRenderFns,
  false,
  null,
  "cac4baf8",
  null
  
)

/* harmony default export */ var TextMessage = (TextMessage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/FileMessage.vue?vue&type=template&id=6b0efd78&scoped=true&
var FileMessagevue_type_template_id_6b0efd78_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-message--file",style:(_vm.messageColors)},[_c('div',{staticClass:"sc-message--file-icon"},[_c('img',{staticClass:"sc-image",attrs:{"src":_vm.data.file.url}})]),_c('div',{staticClass:"sc-message--file-name",style:(_vm.messageColors)},[_c('a',{attrs:{"href":_vm.data.file.url ? _vm.data.file.url : '#',"target":"_blank"}},[_vm._v(_vm._s(_vm.data.file.name || ''))])]),_c('div',{staticClass:"sc-message--file-text",style:(_vm.messageColors)},[_vm._v(" "+_vm._s(_vm.data.text)+" "),(_vm.data.meta)?_c('p',{staticClass:"sc-message--meta",style:(_vm.messageColors)},[_vm._v(" "+_vm._s(_vm.data.meta)+" ")]):_vm._e()])])}
var FileMessagevue_type_template_id_6b0efd78_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/FileMessage.vue?vue&type=template&id=6b0efd78&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/FileMessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FileMessagevue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/FileMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_FileMessagevue_type_script_lang_js_ = (FileMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/messages/FileMessage.vue?vue&type=style&index=0&id=6b0efd78&scoped=true&lang=css&
var FileMessagevue_type_style_index_0_id_6b0efd78_scoped_true_lang_css_ = __webpack_require__("ad6c");

// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/FileMessage.vue






/* normalize component */

var FileMessage_component = normalizeComponent(
  messages_FileMessagevue_type_script_lang_js_,
  FileMessagevue_type_template_id_6b0efd78_scoped_true_render,
  FileMessagevue_type_template_id_6b0efd78_scoped_true_staticRenderFns,
  false,
  null,
  "6b0efd78",
  null
  
)

/* harmony default export */ var FileMessage = (FileMessage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/EmojiMessage.vue?vue&type=template&id=4b85c8e1&scoped=true&
var EmojiMessagevue_type_template_id_4b85c8e1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-message--emoji"},[_vm._v(_vm._s(_vm.data.emoji))])}
var EmojiMessagevue_type_template_id_4b85c8e1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/EmojiMessage.vue?vue&type=template&id=4b85c8e1&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/EmojiMessage.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var EmojiMessagevue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/EmojiMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_EmojiMessagevue_type_script_lang_js_ = (EmojiMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/messages/EmojiMessage.vue?vue&type=style&index=0&id=4b85c8e1&scoped=true&lang=css&
var EmojiMessagevue_type_style_index_0_id_4b85c8e1_scoped_true_lang_css_ = __webpack_require__("f357");

// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/EmojiMessage.vue






/* normalize component */

var EmojiMessage_component = normalizeComponent(
  messages_EmojiMessagevue_type_script_lang_js_,
  EmojiMessagevue_type_template_id_4b85c8e1_scoped_true_render,
  EmojiMessagevue_type_template_id_4b85c8e1_scoped_true_staticRenderFns,
  false,
  null,
  "4b85c8e1",
  null
  
)

/* harmony default export */ var EmojiMessage = (EmojiMessage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/TypingMessage.vue?vue&type=template&id=9ab9d830&scoped=true&
var TypingMessagevue_type_template_id_9ab9d830_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-typing-indicator",style:(_vm.messageColors)},[_c('span'),_c('span'),_c('span')])}
var TypingMessagevue_type_template_id_9ab9d830_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/TypingMessage.vue?vue&type=template&id=9ab9d830&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/TypingMessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var TypingMessagevue_type_script_lang_js_ = ({
  props: {
    messageColors: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/TypingMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_TypingMessagevue_type_script_lang_js_ = (TypingMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/messages/TypingMessage.vue?vue&type=style&index=0&id=9ab9d830&scoped=true&lang=css&
var TypingMessagevue_type_style_index_0_id_9ab9d830_scoped_true_lang_css_ = __webpack_require__("91c2");

// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/TypingMessage.vue






/* normalize component */

var TypingMessage_component = normalizeComponent(
  messages_TypingMessagevue_type_script_lang_js_,
  TypingMessagevue_type_template_id_9ab9d830_scoped_true_render,
  TypingMessagevue_type_template_id_9ab9d830_scoped_true_staticRenderFns,
  false,
  null,
  "9ab9d830",
  null
  
)

/* harmony default export */ var TypingMessage = (TypingMessage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/SystemMessage.vue?vue&type=template&id=fe3c7442&scoped=true&
var SystemMessagevue_type_template_id_fe3c7442_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-message--system",style:(_vm.messageColors)},[_vm._t("default",[_vm._v(" "+_vm._s(_vm.data.text)+" "),(_vm.data.meta)?_c('p',{staticClass:"sc-message--meta",style:({color: _vm.messageColors.color})},[_vm._v(" "+_vm._s(_vm.data.meta)+" ")]):_vm._e()],{"message":_vm.data})],2)}
var SystemMessagevue_type_template_id_fe3c7442_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/SystemMessage.vue?vue&type=template&id=fe3c7442&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/messages/SystemMessage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SystemMessagevue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/SystemMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var messages_SystemMessagevue_type_script_lang_js_ = (SystemMessagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/messages/SystemMessage.vue?vue&type=style&index=0&id=fe3c7442&scoped=true&lang=css&
var SystemMessagevue_type_style_index_0_id_fe3c7442_scoped_true_lang_css_ = __webpack_require__("52f8");

// CONCATENATED MODULE: ./src/vue_chat_plugin/messages/SystemMessage.vue






/* normalize component */

var SystemMessage_component = normalizeComponent(
  messages_SystemMessagevue_type_script_lang_js_,
  SystemMessagevue_type_template_id_fe3c7442_scoped_true_render,
  SystemMessagevue_type_template_id_fe3c7442_scoped_true_staticRenderFns,
  false,
  null,
  "fe3c7442",
  null
  
)

/* harmony default export */ var SystemMessage = (SystemMessage_component.exports);
// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/chat-icon.svg
var chat_icon = __webpack_require__("fa53");
var chat_icon_default = /*#__PURE__*/__webpack_require__.n(chat_icon);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Message.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Messagevue_type_script_lang_js_ = ({
  components: {
    TextMessage: TextMessage,
    FileMessage: FileMessage,
    EmojiMessage: EmojiMessage,
    TypingMessage: TypingMessage,
    SystemMessage: SystemMessage
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    showEdition: {
      type: Boolean,
      required: true
    },
    showDeletion: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      store: store
    };
  },
  computed: {
    mmc_uid: function mmc_uid() {
      if (!this.store.currentUser) {
        return this.$MMC_UID;
      }

      return this.store.currentUser.id;
    },
    authorName: function authorName() {
      return this.user && this.user.name;
    },
    chatImageUrl: function chatImageUrl() {
      return this.user && this.user.imageUrl || chat_icon_default.a;
    },
    messageColors: function messageColors() {
      return this.message.author === this.mmc_uid ? this.sentColorsStyle : this.receivedColorsStyle;
    },
    receivedColorsStyle: function receivedColorsStyle() {
      return {
        color: this.colors.receivedMessage.text,
        backgroundColor: this.colors.receivedMessage.bg
      };
    },
    sentColorsStyle: function sentColorsStyle() {
      return {
        color: this.colors.sentMessage.text,
        backgroundColor: this.colors.sentMessage.bg
      };
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/Message.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_Messagevue_type_script_lang_js_ = (Messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/Message.vue?vue&type=style&index=0&lang=scss&
var Messagevue_type_style_index_0_lang_scss_ = __webpack_require__("8052");

// CONCATENATED MODULE: ./src/vue_chat_plugin/Message.vue






/* normalize component */

var Message_component = normalizeComponent(
  vue_chat_plugin_Messagevue_type_script_lang_js_,
  Messagevue_type_template_id_4900fe50_render,
  Messagevue_type_template_id_4900fe50_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Message = (Message_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/MessageList.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MessageListvue_type_script_lang_js_ = ({
  components: {
    Message: Message
  },
  props: {
    participants: {
      type: Array,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showEdition: {
      type: Boolean,
      required: true
    },
    showDeletion: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    defaultChatIcon: function defaultChatIcon() {
      return chat_icon_default.a;
    }
  },
  mounted: function mounted() {
    this.$nextTick(this._scrollDown());
  },
  updated: function updated() {
    if (this.shouldScrollToBottom()) this.$nextTick(this._scrollDown());
  },
  methods: {
    _scrollDown: function _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight;
    },
    handleScroll: function handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.$emit('scrollToTop');
      }
    },
    shouldScrollToBottom: function shouldScrollToBottom() {
      var scrollTop = this.$refs.scrollList.scrollTop;
      var scrollable = scrollTop > this.$refs.scrollList.scrollHeight - 600;
      return this.alwaysScrollToBottom || scrollable;
    },
    profile: function profile(author) {
      var profile = this.participants.find(function (profile) {
        return profile.id === author;
      }); // A profile may not be found for system messages or messages by 'me'

      return profile || {
        imageUrl: '',
        name: ''
      };
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/MessageList.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_MessageListvue_type_script_lang_js_ = (MessageListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/MessageList.vue?vue&type=style&index=0&id=094795c8&scoped=true&lang=css&
var MessageListvue_type_style_index_0_id_094795c8_scoped_true_lang_css_ = __webpack_require__("9b9b");

// CONCATENATED MODULE: ./src/vue_chat_plugin/MessageList.vue






/* normalize component */

var MessageList_component = normalizeComponent(
  vue_chat_plugin_MessageListvue_type_script_lang_js_,
  MessageListvue_type_template_id_094795c8_scoped_true_render,
  MessageListvue_type_template_id_094795c8_scoped_true_staticRenderFns,
  false,
  null,
  "094795c8",
  null
  
)

/* harmony default export */ var MessageList = (MessageList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/UserInput.vue?vue&type=template&id=bd4e8318&
var UserInputvue_type_template_id_bd4e8318_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Suggestions',{attrs:{"suggestions":_vm.suggestions,"colors":_vm.colors},on:{"sendSuggestion":_vm._submitSuggestion}}),(_vm.file)?_c('div',{staticClass:"file-container",style:({
      backgroundColor: _vm.colors.userInput.text,
      color: _vm.colors.userInput.bg
    })},[_c('span',{staticClass:"icon-file-message"},[_c('img',{attrs:{"src":_vm.icons.file.img,"alt":_vm.icons.file.name,"height":"15"}})]),_vm._v(" "+_vm._s(_vm.file.name)+" "),_c('span',{staticClass:"delete-file-message",on:{"click":function($event){return _vm.cancelFile()}}},[_c('img',{attrs:{"src":_vm.icons.closeSvg.img,"alt":_vm.icons.closeSvg.name,"height":"10","title":"Remove the file"}})])]):_vm._e(),_c('form',{staticClass:"sc-user-input",class:{active: _vm.inputActive},style:({background: _vm.colors.userInput.bg})},[_c('div',{ref:"userInput",staticClass:"sc-user-input--text",style:({color: _vm.colors.userInput.text}),attrs:{"role":"button","tabIndex":"0","contentEditable":"true","placeholder":_vm.placeholder},on:{"focus":function($event){return _vm.setInputActive(true)},"blur":function($event){return _vm.setInputActive(false)},"keydown":_vm.handleKey,"focusUserInput":function($event){return _vm.focusUserInput()}}}),_c('div',{staticClass:"sc-user-input--buttons"},[_c('div',{staticClass:"sc-user-input--button"}),(_vm.showEmoji && !_vm.isEditing)?_c('div',{staticClass:"sc-user-input--button"},[_c('EmojiIcon',{attrs:{"on-emoji-picked":_vm._handleEmojiPicked,"color":_vm.colors.userInput.text}})],1):_vm._e(),(_vm.showFile && !_vm.isEditing)?_c('div',{staticClass:"sc-user-input--button"},[_c('FileIcons',{attrs:{"on-change":_vm._handleFileSubmit,"color":_vm.colors.userInput.text}})],1):_vm._e(),(_vm.isEditing)?_c('div',{staticClass:"sc-user-input--button"},[_c('UserInputButton',{attrs:{"color":_vm.colors.userInput.text,"tooltip":"cancel"},nativeOn:{"click":function($event){$event.preventDefault();return _vm._editFinish($event)}}},[_c('IconCross')],1)],1):_vm._e(),_c('div',{staticClass:"sc-user-input--button"},[(_vm.isEditing)?_c('UserInputButton',{attrs:{"color":_vm.colors.userInput.text,"tooltip":"Edit"},nativeOn:{"click":function($event){$event.preventDefault();return _vm._editText($event)}}},[_c('IconOk')],1):_c('UserInputButton',{attrs:{"color":_vm.colors.userInput.text,"tooltip":"Send"},nativeOn:{"click":function($event){$event.preventDefault();return _vm._submitText($event)}}},[_c('IconSend')],1)],1)])])],1)}
var UserInputvue_type_template_id_bd4e8318_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/UserInput.vue?vue&type=template&id=bd4e8318&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/icons/EmojiIcon.vue?vue&type=template&id=ea9aeb78&scoped=true&
var EmojiIconvue_type_template_id_ea9aeb78_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-user-input--picker-wrapper"},[(_vm.isActive)?_c('EmojiPicker',{attrs:{"on-emoji-picked":_vm.onEmojiPicked,"on-blur":_vm._handlePickerBlur}}):_vm._e(),_c('button',{staticClass:"sc-user-input--emoji-icon-wrapper",on:{"click":function($event){$event.preventDefault();return _vm._openPicker($event)}}},[_c('svg',{staticClass:"sc-user-input--emoji-icon",class:{active: _vm.isActive},attrs:{"id":"Layer_2","version":"1.1","xmlns":"http://www.w3.org/2000/svg","x":"0px","y":"0px","width":"37.393px","height":"37.393px","viewBox":"0 0 37.393 37.393","enableBackground":"new 0 0 37.393 37.393"}},[_c('g',[_c('path',{style:({fill: _vm.color}),attrs:{"d":"M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696\n            C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696\n            c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"}})]),_c('g',[_c('circle',{style:({fill: _vm.color}),attrs:{"cx":"12.379","cy":"14.359","r":"1.938"}})]),_c('g',[_c('circle',{style:({fill: _vm.color}),attrs:{"cx":"24.371","cy":"14.414","r":"1.992"}})]),_c('g',[_c('path',{style:({fill: _vm.color}),attrs:{"d":"M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373\n            c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497\n            c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"}})])])])],1)}
var EmojiIconvue_type_template_id_ea9aeb78_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/icons/EmojiIcon.vue?vue&type=template&id=ea9aeb78&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/EmojiPicker.vue?vue&type=template&id=4feee432&scoped=true&
var EmojiPickervue_type_template_id_4feee432_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"domNode",staticClass:"sc-emoji-picker",attrs:{"tabIndex":"0"},on:{"blur":_vm.onBlur}},[_c('div',{staticClass:"sc-emoji-picker--content"},_vm._l((_vm.emojiData),function(category){return _c('div',{key:category.name,staticClass:"sc-emoji-picker--category"},[_c('div',{staticClass:"sc-emoji-picker--category-title"},[_vm._v(_vm._s(category.name))]),_vm._l((category.emojis),function(emoji){return _c('span',{key:emoji,staticClass:"sc-emoji-picker--emoji",on:{"click":function($event){return _vm.emojiClicked(emoji)}}},[_vm._v(" "+_vm._s(emoji)+" ")])})],2)}),0)])}
var EmojiPickervue_type_template_id_4feee432_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/EmojiPicker.vue?vue&type=template&id=4feee432&scoped=true&

// EXTERNAL MODULE: ./node_modules/emoji-js/lib/emoji.js
var emoji = __webpack_require__("edbf");
var emoji_default = /*#__PURE__*/__webpack_require__.n(emoji);

// CONCATENATED MODULE: ./src/vue_chat_plugin/emojiData.js
/* harmony default export */ var emojiData = ([{
  name: 'People',
  emojis: ['😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '👿', '😮', '😬', '😐', '😕', '😯', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '💬', '👣']
}, {
  name: 'Nature',
  emojis: ['🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐎', '🐲', '🐡', '🐫', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌰', '🌱', '🌼', '🌑', '🌓', '🌔', '🌕', '🌛', '🌙', '🌏', '🌋', '🌌', '🌠', '⛅', '⛄', '🌀', '🌁', '🌈', '🌊']
}, {
  name: 'Objects',
  emojis: ['🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔔', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔌', '🔋', '🔍', '🛀', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💳', '💸', '📲', '📧', '📥', '📤', '📩', '📨', '📫', '📪', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '📌', '📎', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🎳', '⛳', '🏁', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '🍵', '🍶', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍍', '🍠', '🍆', '🍅', '🌽']
}, {
  name: 'Places',
  emojis: ['🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚀', '💺', '🚉', '🚄', '🚅', '🚇', '🚃', '🚌', '🚙', '🚗', '🚕', '🚚', '🚨', '🚓', '🚒', '🚑', '🚲', '💈', '🚏', '🎫', '🚥', '🚧', '🔰', '⛽', '🏮', '🎰', '🗿', '🎪', '🎭', '📍', '🚩']
}, {
  name: 'Symbols',
  emojis: ['🔟', '🔢', '🔣', '🔠', '🔡', '🔤', '🔼', '🔽', '⏪', '⏩', '⏫', '⏬', '🆗', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚭', '🈸', '🉑', '🆑', '🆘', '🆔', '🚫', '🔞', '⛔', '❎', '✅', '💟', '🆚', '📳', '📴', '🆎', '💠', '⛎', '🔯', '🏧', '💹', '💲', '💱', '❌', '❗', '❓', '❕', '❔', '⭕', '🔝', '🔚', '🔙', '🔛', '🔜', '🔃', '🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '➕', '➖', '➗', '💮', '💯', '🔘', '🔗', '➰', '🔱', '🔺', '🔲', '🔳', '🔴', '🔵', '🔻', '⬜', '⬛', '🔶', '🔷', '🔸', '🔹']
}]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/EmojiPicker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var EmojiPickervue_type_script_lang_js_ = ({
  props: {
    onBlur: {
      type: Function,
      required: true
    },
    onEmojiPicked: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      emojiData: emojiData,
      emojiConvertor: new emoji_default.a()
    };
  },
  mounted: function mounted() {
    var elem = this.$refs.domNode;
    elem.style.opacity = 0;
    window.requestAnimationFrame(function () {
      elem.style.transition = 'opacity 350ms';
      elem.style.opacity = 1;
    });
    this.$refs.domNode.focus();
    this.emojiConvertor.init_env();
  },
  methods: {
    emojiClicked: function emojiClicked(emoji) {
      this.onEmojiPicked(emoji);
      this.$refs.domNode.blur();
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/EmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_EmojiPickervue_type_script_lang_js_ = (EmojiPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/EmojiPicker.vue?vue&type=style&index=0&id=4feee432&scoped=true&lang=css&
var EmojiPickervue_type_style_index_0_id_4feee432_scoped_true_lang_css_ = __webpack_require__("5026");

// CONCATENATED MODULE: ./src/vue_chat_plugin/EmojiPicker.vue






/* normalize component */

var EmojiPicker_component = normalizeComponent(
  vue_chat_plugin_EmojiPickervue_type_script_lang_js_,
  EmojiPickervue_type_template_id_4feee432_scoped_true_render,
  EmojiPickervue_type_template_id_4feee432_scoped_true_staticRenderFns,
  false,
  null,
  "4feee432",
  null
  
)

/* harmony default export */ var EmojiPicker = (EmojiPicker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/icons/EmojiIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EmojiIconvue_type_script_lang_js_ = ({
  components: {
    EmojiPicker: EmojiPicker
  },
  props: {
    onEmojiPicked: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  methods: {
    _openPicker: function _openPicker() {
      this.isActive = !this.isActive;
    },
    _handlePickerBlur: function _handlePickerBlur() {
      this.isActive = false;
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/icons/EmojiIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_EmojiIconvue_type_script_lang_js_ = (EmojiIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/icons/EmojiIcon.vue?vue&type=style&index=0&id=ea9aeb78&scoped=true&lang=css&
var EmojiIconvue_type_style_index_0_id_ea9aeb78_scoped_true_lang_css_ = __webpack_require__("bfe2");

// CONCATENATED MODULE: ./src/vue_chat_plugin/icons/EmojiIcon.vue






/* normalize component */

var EmojiIcon_component = normalizeComponent(
  icons_EmojiIconvue_type_script_lang_js_,
  EmojiIconvue_type_template_id_ea9aeb78_scoped_true_render,
  EmojiIconvue_type_template_id_ea9aeb78_scoped_true_staticRenderFns,
  false,
  null,
  "ea9aeb78",
  null
  
)

/* harmony default export */ var EmojiIcon = (EmojiIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/icons/FileIcons.vue?vue&type=template&id=8bde79dc&scoped=true&
var FileIconsvue_type_template_id_8bde79dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"relative"}},[_c('button',{staticClass:"sc-user-input--file-icon-wrapper",attrs:{"type":"button"}},[_c('svg',{staticClass:"sc-user-input--file-icon",attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","x":"0px","y":"0px","width":"24px","height":"24px","viewBox":"0 0 37.393 37.393","enableBackground":"new 0 0 37.393 37.393"}},[_c('path',{style:({fill: _vm.color}),attrs:{"d":"M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z"}})]),_c('input',{attrs:{"id":"file-input","type":"file"},on:{"change":_vm._handleChange,"click":_vm._handleClick}})])])}
var FileIconsvue_type_template_id_8bde79dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/icons/FileIcons.vue?vue&type=template&id=8bde79dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/icons/FileIcons.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FileIconsvue_type_script_lang_js_ = ({
  props: {
    onChange: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    _handleClick: function _handleClick(e) {
      e.target.value = null;
    },
    _handleChange: function _handleChange(e) {
      this.onChange(e.target.files[0]);
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/icons/FileIcons.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_FileIconsvue_type_script_lang_js_ = (FileIconsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/icons/FileIcons.vue?vue&type=style&index=0&id=8bde79dc&scoped=true&lang=css&
var FileIconsvue_type_style_index_0_id_8bde79dc_scoped_true_lang_css_ = __webpack_require__("469a");

// CONCATENATED MODULE: ./src/vue_chat_plugin/icons/FileIcons.vue






/* normalize component */

var FileIcons_component = normalizeComponent(
  icons_FileIconsvue_type_script_lang_js_,
  FileIconsvue_type_template_id_8bde79dc_scoped_true_render,
  FileIconsvue_type_template_id_8bde79dc_scoped_true_staticRenderFns,
  false,
  null,
  "8bde79dc",
  null
  
)

/* harmony default export */ var FileIcons = (FileIcons_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/UserInputButton.vue?vue&type=template&id=1d0be124&scoped=true&
var UserInputButtonvue_type_template_id_1d0be124_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"sc-user-input--button-icon-wrapper"},[_c('IconBase',{attrs:{"color":_vm.color,"width":"20","height":"20","icon-name":_vm.tooltip}},[_vm._t("default")],2)],1)}
var UserInputButtonvue_type_template_id_1d0be124_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/UserInputButton.vue?vue&type=template&id=1d0be124&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/UserInputButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var UserInputButtonvue_type_script_lang_js_ = ({
  components: {
    IconBase: IconBase
  },
  props: {
    color: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/UserInputButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_UserInputButtonvue_type_script_lang_js_ = (UserInputButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/UserInputButton.vue?vue&type=style&index=0&id=1d0be124&scoped=true&lang=css&
var UserInputButtonvue_type_style_index_0_id_1d0be124_scoped_true_lang_css_ = __webpack_require__("b6e8");

// CONCATENATED MODULE: ./src/vue_chat_plugin/UserInputButton.vue






/* normalize component */

var UserInputButton_component = normalizeComponent(
  vue_chat_plugin_UserInputButtonvue_type_script_lang_js_,
  UserInputButtonvue_type_template_id_1d0be124_scoped_true_render,
  UserInputButtonvue_type_template_id_1d0be124_scoped_true_staticRenderFns,
  false,
  null,
  "1d0be124",
  null
  
)

/* harmony default export */ var UserInputButton = (UserInputButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Suggestions.vue?vue&type=template&id=e66b6602&
var Suggestionsvue_type_template_id_e66b6602_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sc-suggestions-row",style:({background: _vm.colors.messageList.bg})},_vm._l((_vm.suggestions),function(suggestion,idx){return _c('button',{key:idx,staticClass:"sc-suggestions-element",style:({
      borderColor: _vm.colors.sentMessage.bg,
      color: _vm.colors.sentMessage.bg
    }),on:{"click":function($event){return _vm.$emit('sendSuggestion', suggestion)}}},[_vm._v(" "+_vm._s(suggestion)+" ")])}),0)}
var Suggestionsvue_type_template_id_e66b6602_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/Suggestions.vue?vue&type=template&id=e66b6602&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Suggestions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Suggestionsvue_type_script_lang_js_ = ({
  props: {
    suggestions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/Suggestions.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_Suggestionsvue_type_script_lang_js_ = (Suggestionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/Suggestions.vue?vue&type=style&index=0&lang=css&
var Suggestionsvue_type_style_index_0_lang_css_ = __webpack_require__("cec0");

// CONCATENATED MODULE: ./src/vue_chat_plugin/Suggestions.vue






/* normalize component */

var Suggestions_component = normalizeComponent(
  vue_chat_plugin_Suggestionsvue_type_script_lang_js_,
  Suggestionsvue_type_template_id_e66b6602_render,
  Suggestionsvue_type_template_id_e66b6602_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Suggestions = (Suggestions_component.exports);
// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/file.svg
var file = __webpack_require__("715a");
var file_default = /*#__PURE__*/__webpack_require__.n(file);

// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/close.svg
var assets_close = __webpack_require__("cd9b");
var close_default = /*#__PURE__*/__webpack_require__.n(assets_close);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/components/icons/IconOk.vue?vue&type=template&id=7b55ad93&
var IconOkvue_type_template_id_7b55ad93_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('path',{attrs:{"d":"M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"}})}
var IconOkvue_type_template_id_7b55ad93_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconOk.vue?vue&type=template&id=7b55ad93&

// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconOk.vue

var IconOk_script = {}


/* normalize component */

var IconOk_component = normalizeComponent(
  IconOk_script,
  IconOkvue_type_template_id_7b55ad93_render,
  IconOkvue_type_template_id_7b55ad93_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconOk = (IconOk_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/components/icons/IconSend.vue?vue&type=template&id=b6b187e0&
var IconSendvue_type_template_id_b6b187e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('path',{attrs:{"d":"M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"}})}
var IconSendvue_type_template_id_b6b187e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconSend.vue?vue&type=template&id=b6b187e0&

// CONCATENATED MODULE: ./src/vue_chat_plugin/components/icons/IconSend.vue

var IconSend_script = {}


/* normalize component */

var IconSend_component = normalizeComponent(
  IconSend_script,
  IconSendvue_type_template_id_b6b187e0_render,
  IconSendvue_type_template_id_b6b187e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IconSend = (IconSend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/UserInput.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var UserInputvue_type_script_lang_js_ = ({
  components: {
    EmojiIcon: EmojiIcon,
    FileIcons: FileIcons,
    UserInputButton: UserInputButton,
    Suggestions: Suggestions,
    IconCross: IconCross,
    IconOk: IconOk,
    IconSend: IconSend
  },
  props: {
    icons: {
      type: Object,
      default: function _default() {
        return {
          file: {
            img: file_default.a,
            name: 'default'
          },
          closeSvg: {
            img: close_default.a,
            name: 'default'
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    suggestions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showFile: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    onSubmit: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Write something...'
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      file: null,
      inputActive: false,
      store: store
    };
  },
  computed: {
    editMessageId: function editMessageId() {
      return this.isEditing && store.editMessage.id;
    },
    isEditing: function isEditing() {
      return store.editMessage && store.editMessage.id;
    },
    currentUserId: function currentUserId() {
      if (!this.store.currentUser) {
        return this.$MMC_UID;
      }

      return this.store.currentUser.id;
    }
  },
  watch: {
    editMessageId: function editMessageId() {
      if (store.editMessage != null && store.editMessage != undefined) {
        this.$refs.userInput.focus();
        this.$refs.userInput.textContent = store.editMessage.data.text;
      } else {
        this.$refs.userInput.textContent = '';
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('focusUserInput', function () {
      if (_this.$refs.userInput) {
        _this.focusUserInput();
      }
    });
  },
  methods: {
    cancelFile: function cancelFile() {
      this.file = null;
    },
    setInputActive: function setInputActive(onoff) {
      this.inputActive = onoff;
    },
    handleKey: function handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        if (!this.isEditing) {
          this._submitText(event);
        } else {
          this._editText(event);
        }

        this._editFinish();

        event.preventDefault();
      } else if (event.keyCode === 27) {
        this._editFinish();

        event.preventDefault();
      }

      this.$emit('onType');
    },
    focusUserInput: function focusUserInput() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$refs.userInput.focus();
      });
    },
    _submitSuggestion: function _submitSuggestion(suggestion) {
      this.onSubmit({
        author: this.currentUserId,
        type: 'text',
        data: {
          text: suggestion
        }
      });
    },
    _checkSubmitSuccess: function _checkSubmitSuccess(success) {
      if (Promise !== undefined) {
        Promise.resolve(success).then(function (wasSuccessful) {
          if (wasSuccessful === undefined || wasSuccessful) {
            this.file = null;
            this.$refs.userInput.innerHTML = '';
          }
        }.bind(this));
      } else {
        this.file = null;
        this.$refs.userInput.innerHTML = '';
      }
    },
    _submitText: function _submitText(event) {
      var text = this.$refs.userInput.textContent;
      var file = this.file;

      if (file) {
        this._submitTextWhenFile(event, text, file);
      } else {
        if (text && text.length > 0) {
          this._checkSubmitSuccess(this.onSubmit({
            author: this.currentUserId,
            type: 'text',
            data: {
              text: text
            }
          }));
        }
      }
    },
    _submitTextWhenFile: function _submitTextWhenFile(event, text, file) {
      if (text && text.length > 0) {
        this._checkSubmitSuccess(this.onSubmit({
          author: this.currentUserId,
          type: 'file',
          data: {
            text: text,
            file: file
          }
        }));
      } else {
        this._checkSubmitSuccess(this.onSubmit({
          author: this.currentUserId,
          type: 'file',
          data: {
            file: file
          }
        }));
      }
    },
    _editText: function _editText() {
      var text = this.$refs.userInput.textContent;

      if (text && text.length) {
        this.$emit('edit', {
          author: this.currentUserId,
          type: 'text',
          id: store.editMessage.id,
          data: {
            text: text
          }
        });

        this._editFinish();
      }
    },
    _handleEmojiPicked: function _handleEmojiPicked(emoji) {
      this._checkSubmitSuccess(this.onSubmit({
        author: this.currentUserId,
        type: 'emoji',
        data: {
          emoji: emoji
        }
      }));
    },
    _handleFileSubmit: function _handleFileSubmit(file) {
      this.file = file;
    },
    _editFinish: function _editFinish() {
      this.store.editMessage = null;
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/UserInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_UserInputvue_type_script_lang_js_ = (UserInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/UserInput.vue?vue&type=style&index=0&lang=css&
var UserInputvue_type_style_index_0_lang_css_ = __webpack_require__("f71f");

// CONCATENATED MODULE: ./src/vue_chat_plugin/UserInput.vue






/* normalize component */

var UserInput_component = normalizeComponent(
  vue_chat_plugin_UserInputvue_type_script_lang_js_,
  UserInputvue_type_template_id_bd4e8318_render,
  UserInputvue_type_template_id_bd4e8318_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UserInput = (UserInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"184271a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/UserList.vue?vue&type=template&id=4fc78982&scoped=true&
var UserListvue_type_template_id_4fc78982_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-list",style:({background: _vm.userListColor.userList.bg})},[_c('table',{staticStyle:{"padding-top":"5px"}},[_c('tbody',_vm._l((_vm.showUserList),function(user){return _c('tr',{key:user.id},[_c('td',{staticStyle:{"text-align":"center"}},[_c('img',{staticClass:"img-msg",attrs:{"src":user.imageUrl},on:{"click":function($event){return _vm.onSelect(user)}}})]),_c('td',{staticClass:"user-element",style:({color: _vm.userListColor.userList.text})},[_c('el-badge',{attrs:{"value":user.newMessageCount,"hidden":user.newMessageCount<1}},[_c('el-link',{attrs:{"type":"primary","underline":false},on:{"click":function($event){return _vm.onSelect(user)}}},[_vm._v(_vm._s(user.name))])],1)],1)])}),0)])])}
var UserListvue_type_template_id_4fc78982_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue_chat_plugin/UserList.vue?vue&type=template&id=4fc78982&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/UserList.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UserListvue_type_script_lang_js_ = ({
  props: {
    participants: {
      type: Array,
      required: true
    },
    colors: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    userListColor: function userListColor() {
      var defaultColors = {
        userList: {
          bg: '#FFFFFF',
          text: '#000000'
        }
      };
      return Object.assign(defaultColors, this.colors);
    },
    showUserList: function showUserList() {
      return this.participants.filter(function (user) {
        return !user.hidden;
      });
    }
  },
  methods: {
    onSelect: function onSelect(user) {
      user.newMessageCount = 0;
      this.$emit("userClick", user);
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/UserList.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_UserListvue_type_script_lang_js_ = (UserListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/UserList.vue?vue&type=style&index=0&id=4fc78982&scoped=true&lang=css&
var UserListvue_type_style_index_0_id_4fc78982_scoped_true_lang_css_ = __webpack_require__("cddd");

// CONCATENATED MODULE: ./src/vue_chat_plugin/UserList.vue






/* normalize component */

var UserList_component = normalizeComponent(
  vue_chat_plugin_UserListvue_type_script_lang_js_,
  UserListvue_type_template_id_4fc78982_scoped_true_render,
  UserListvue_type_template_id_4fc78982_scoped_true_staticRenderFns,
  false,
  null,
  "4fc78982",
  null
  
)

/* harmony default export */ var UserList = (UserList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/ChatWindow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ChatWindowvue_type_script_lang_js_ = ({
  components: {
    Header: Header,
    MessageList: MessageList,
    UserInput: UserInput,
    UserList: UserList
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showFile: {
      type: Boolean,
      default: false
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    titleImageUrl: {
      type: String,
      default: ''
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isOpen: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: 'Write a message...'
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    },
    showEdition: {
      type: Boolean,
      required: true
    },
    showDeletion: {
      type: Boolean,
      required: true
    },
    isMessageCenter: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      showUserList: false
    };
  },
  computed: {
    messages: function messages() {
      var messages = this.messageList;
      return messages;
    }
  },
  methods: {
    handleUserListToggle: function handleUserListToggle(showUserList) {
      if (!this.isMessageCenter) return false;
      this.showUserList = showUserList;
    },
    getSuggestions: function getSuggestions() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : [];
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/ChatWindow.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_ChatWindowvue_type_script_lang_js_ = (ChatWindowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/ChatWindow.vue?vue&type=style&index=0&id=1c7359f2&scoped=true&lang=css&
var ChatWindowvue_type_style_index_0_id_1c7359f2_scoped_true_lang_css_ = __webpack_require__("073f");

// CONCATENATED MODULE: ./src/vue_chat_plugin/ChatWindow.vue






/* normalize component */

var ChatWindow_component = normalizeComponent(
  vue_chat_plugin_ChatWindowvue_type_script_lang_js_,
  ChatWindowvue_type_template_id_1c7359f2_scoped_true_render,
  ChatWindowvue_type_template_id_1c7359f2_scoped_true_staticRenderFns,
  false,
  null,
  "1c7359f2",
  null
  
)

/* harmony default export */ var ChatWindow = (ChatWindow_component.exports);
// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/close-icon.png
var close_icon = __webpack_require__("0d17");
var close_icon_default = /*#__PURE__*/__webpack_require__.n(close_icon);

// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/logo-no-bg.svg
var logo_no_bg = __webpack_require__("c5bc");
var logo_no_bg_default = /*#__PURE__*/__webpack_require__.n(logo_no_bg);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/Launcher.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Launchervue_type_script_lang_js_ = ({
  components: {
    ChatWindow: ChatWindow
  },
  props: {
    icons: {
      type: Object,
      default: function _default() {
        return {
          open: {
            img: logo_no_bg_default.a,
            name: 'default'
          },
          close: {
            img: close_icon_default.a,
            name: 'default'
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: false
    },
    showEdition: {
      type: Boolean,
      default: false
    },
    showDeletion: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    open: {
      type: Function,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    showFile: {
      type: Boolean,
      default: false
    },
    showLauncher: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    titleImageUrl: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    onMessageWasSent: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    newMessagesCount: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    placeholder: {
      type: String,
      default: 'Write a message...'
    },
    showTypingIndicator: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    colors: {
      type: Object,
      validator: function validator(c) {
        return 'header' in c && 'bg' in c.header && 'text' in c.header && 'launcher' in c && 'bg' in c.launcher && 'messageList' in c && 'bg' in c.messageList && 'sentMessage' in c && 'bg' in c.sentMessage && 'text' in c.sentMessage && 'receivedMessage' in c && 'bg' in c.receivedMessage && 'text' in c.receivedMessage && 'userInput' in c && 'bg' in c.userInput && 'text' in c.userInput;
      },
      default: function _default() {
        return {
          header: {
            bg: '#4e8cff',
            text: '#ffffff'
          },
          launcher: {
            bg: '#4e8cff'
          },
          messageList: {
            bg: '#ffffff'
          },
          sentMessage: {
            bg: '#4e8cff',
            text: '#ffffff'
          },
          receivedMessage: {
            bg: '#f4f7f9',
            text: '#ffffff'
          },
          userInput: {
            bg: '#f4f7f9',
            text: '#565867'
          }
        };
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    messageStyling: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    chatWindowTitle: function chatWindowTitle() {
      if (this.title !== '') {
        return this.title;
      }

      if (this.participants.length === 0) {
        return 'You';
      } else if (this.participants.length > 1) {
        return 'You, ' + this.participants[0].name + ' & others';
      } else {
        return 'You & ' + this.participants[0].name;
      }
    }
  },
  methods: {
    openAndFocus: function openAndFocus() {
      this.open();
      this.$root.$emit('focusUserInput');
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/Launcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_Launchervue_type_script_lang_js_ = (Launchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/Launcher.vue?vue&type=style&index=0&id=35648758&scoped=true&lang=css&
var Launchervue_type_style_index_0_id_35648758_scoped_true_lang_css_ = __webpack_require__("5b2d");

// CONCATENATED MODULE: ./src/vue_chat_plugin/Launcher.vue






/* normalize component */

var Launcher_component = normalizeComponent(
  vue_chat_plugin_Launchervue_type_script_lang_js_,
  Launchervue_type_template_id_35648758_scoped_true_render,
  Launchervue_type_template_id_35648758_scoped_true_staticRenderFns,
  false,
  null,
  "35648758",
  null
  
)

/* harmony default export */ var Launcher = (Launcher_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./src/vue_chat_plugin/ChatMessage.js







var ChatMessage_ChatMessage = function ChatMessage(msg) {
  _classCallCheck(this, ChatMessage);

  _defineProperty(this, "author", "bot");

  _defineProperty(this, "type", "text");

  _defineProperty(this, "data", {
    text: "",
    group: ["bot"]
  });

  _defineProperty(this, "suggestions", []);

  _defineProperty(this, "text", "");

  _defineProperty(this, "addChatGroup", function (id) {
    if (this.data.group.includes(id)) {
      return;
    }

    this.data.group.push(id);
  });

  //既存情報を保存
  Object.assign(this, msg);

  if (msg.type === "message") {
    this.type = "text";
  }

  if (typeof msg === "string") {
    this.text = msg;
  }

  if (msg.text) {
    this.text = msg.text;
  } else if (msg.data && msg.data.text) {
    this.text = msg.data.text;
  }

  if (this.text) {
    this.data.text = this.text;
  } else if (this.data.text && !this.text) {
    this.text = this.data.text;
  }

  if (msg.user) {
    this.author = msg.user;
  } else if (msg.author) {
    this.author = msg.author;
  }

  if (msg.quick_replies) {
    this.suggestions = msg.quick_replies.map(function (x) {
      return x.payload;
    });
  }

  if (!this.data.group) {
    this.data.group = ["bot"];
  }

  if (!this.data.group.includes(this.author)) {
    this.data.group.push(this.author);
  }
};


// CONCATENATED MODULE: ./src/vue_chat_plugin/client.js










/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// import showdown from "showdown"
// var converter = new showdown.Converter();
// converter.setOption('openLinksInNewWindow', true);

/* harmony default export */ var client = ({
  config: {
    ws_url: (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host,
    reconnect_timeout: 3000,
    max_reconnect: 5,
    enable_history: false
  },
  options: {
    use_sockets: true
  },
  reconnect_count: 0,
  guid: null,
  current_user: null,
  //画面表示オブジェクト
  element: null,
  on: function on(event, handler) {
    //eventが発生した場合、handlerで処理
    this.element.$on(event, function (details) {
      handler(event, details);
    });
  },
  trigger: function trigger(event, details) {
    // client内部eventが発生、外へ知らせ
    //console.log("trigger====>eventType", event, " message:", details);
    this.element.$emit(event, details);
  },
  request: function request(url, body) {
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
  send: function send(msg, e) {
    var that = this;
    if (e) e.preventDefault();

    if (!msg) {
      return;
    }

    msg.user = that.current_user.id, msg.user_profile = that.current_user, msg.channel = this.options.use_sockets ? {
      type: "socket",
      id: that.current_user.id
    } : {
      type: "webhook",
      id: that.current_user.id
    };
    that.deliverMessage(msg);
    return false;
  },
  deliverMessage: function deliverMessage(message) {
    console.log("deliverMessage To ChatBotServer===>", message);

    if (this.options.use_sockets) {
      this.trySendMessage(message);
    } else {
      this.webhook(message);
    }
  },
  trySendMessage: function trySendMessage(message) {
    if (this.socket.readyState === 1) {
      this.socket.send(JSON.stringify(message));
      return true;
    } else {
      setTimeout(this.trySendMessage(message), 100);
    }
  },
  getHistory: function getHistory() {
    var that = this;

    if (that.guid) {
      that.request("/botkit/history", {
        user: that.guid
      }).then(function (history) {
        if (history.success) {
          that.trigger("history_loaded", history.history);
        } else {
          that.trigger("history_error", new Error(history.error));
        }
      }).catch(function (err) {
        that.trigger("history_error", err);
      });
    }
  },
  webhook: function webhook(message) {
    var that = this;
    that.request("/api/messages", message).then(function (messages) {
      messages.forEach(function (message) {
        that.trigger(message.type, message);
      });
    }).catch(function (err) {
      that.trigger("webhook_error", err);
    });
  },
  connect: function connect(userid, ws_url) {
    var that = this;

    if (!userid) {
      userid = Math.random().toString().substr(2, 6);
    } //同じ端末に同時に複数のクライアントを接続できるため


    var cookieID = "botkit_userid_" + userid;
    this.setCookie(cookieID, userid, 1);
    that.current_user = {
      id: userid,
      timezone_offset: new Date().getTimezoneOffset()
    }; //console.log("client connect :", userid);
    // connect to the chat server!

    if (ws_url) {
      that.config.ws_url = ws_url.replace("http", "ws");
    }

    if (that.options.use_sockets) {
      that.connectWebsocket(that.config.ws_url);
    } else {
      that.connectWebhook();
    }
  },
  connectWebhook: function connectWebhook() {
    var that = this;
    var connectEvent = "hello";

    if (this.getCookie("botkit_guid")) {
      that.guid = this.getCookie("botkit_guid");
    } else {
      that.guid = that.generate_guid();
      this.setCookie("botkit_guid", that.guid, 1);
    }

    if (this.options.enable_history) {
      that.getHistory();
    } // connect immediately


    that.trigger("connected", {});
    that.webhook({
      type: connectEvent,
      user: that.guid,
      channel: {
        type: "webhook",
        id: that.current_user.id
      }
    });
  },
  connectWebsocket: function connectWebsocket(ws_url) {
    var that = this; // Create WebSocket connection.

    that.socket = new WebSocket(ws_url);
    var connectEvent = "hello";

    if (this.getCookie("botkit_guid")) {
      that.guid = this.getCookie("botkit_guid");
    }

    if (this.options.enable_history) {
      that.getHistory();
    } //console.log("ws_url:", ws_url);
    // Connection opened


    that.socket.addEventListener("open", function (event) {
      console.log("CONNECTED TO SOCKET");
      that.reconnect_count = 0;
      that.trigger("connected", event);
      var msg = new ChatMessage_ChatMessage({
        type: connectEvent,
        user: that.current_user.id,
        channel: "socket",
        user_profile: that.current_user ? that.current_user : null
      });
      that.deliverMessage(msg);
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
    }); // Listen for messages

    that.socket.addEventListener("message", function (event) {
      var message = null;

      try {
        message = JSON.parse(event.data);
      } catch (err) {
        that.trigger("socket_error", err);
        return;
      }

      var msg = new ChatMessage_ChatMessage(message);
      console.log("addEventListener==message=> ", msg);
      that.trigger(message.type, msg);
    });
  },
  sendEvent: function sendEvent(event) {
    if (this.parent_window) {
      this.parent_window.postMessage(event, "*");
    }
  },
  setCookie: function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie: function getCookie(cname) {
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
  }
});
// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/logo.png
var logo = __webpack_require__("fb95");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue_chat_plugin/webChat.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var webChatvue_type_script_lang_js_ = ({
  components: {
    Launcher: Launcher
  },
  props: {
    username: {
      type: String
    },
    participants: {
      type: Array,
      required: true
    },
    messageHistory: {
      type: Array
    },
    themeColors: {
      type: Object,
      required: true
    },
    ws_url: {
      type: String
    }
  },
  data: function data() {
    return {
      store: store,
      title: '',
      titleImageUrl: logo_default.a,
      messageList: [],
      newMessagesCount: 0,
      isChatOpen: false,
      showTypingIndicator: '',
      colors: null,
      chosenColor: null,
      alwaysScrollToBottom: true,
      messageStyling: true,
      userIsTyping: false,
      chatbot: client,
      guestImageUrl: "./assets/guest.png"
    };
  },
  created: function created() {
    if (!this.store.currentUser) {
      this.store.currentUser = {};
    }

    var userid = this.username;

    if (!userid) {
      userid = Math.random().toString().substr(2, 6);
    }

    this.store.currentUser.id = userid;
    this.setColor('blue');
    this.messageList = this.messageHistory ? this.messageHistory : [];
  },
  mounted: function mounted() {
    this.messageList.forEach(function (x) {
      return x.liked = false;
    });
    this.chatbot.element = this;
    this.chatbot.on('disconnected', this.onDisConnected);
    this.chatbot.on('connected', this.onConnected);
    this.chatbot.on('message', this.onReceived);
    this.chatbot.on('event', this.onReceived);
    this.chatbot.on('text', this.onReceived);
  },
  methods: {
    onConnected: function onConnected() {
      this.chat_connected = true;
      var message = {
        type: "system",
        user: this.store.currentUser.id,
        text: this.store.currentUser.id + '様がサーバに接続できました。'
      };
      var msg = new ChatMessage_ChatMessage(message);
      this.title = "ようこそ、" + this.store.currentUser.id + "様";
      console.log(msg);
      this.chatbot.sendEvent({
        name: 'connected'
      });
      this.messageList.push(msg); //頭から追加
    },
    onDisConnected: function onDisConnected() {
      this.chat_connected = false;
      var message = {
        type: "system",
        user: this.store.currentUser.id,
        text: "ネットワークが切断されました。"
      };
      var msg = new ChatMessage_ChatMessage(message);
      console.log(msg);
      this.messageList.push(msg); //頭から追加
    },
    onReceived: function onReceived(event, message) {
      if (message.type === "message") {
        message.type = "text";
      }

      var msg = new ChatMessage_ChatMessage(message);
      this.messageList.push(msg);
    },
    handleTyping: function handleTyping(text) {
      this.showTypingIndicator = text.length > 0 ? this.participants[this.participants.length - 1].id : '';
    },
    sendMessage: function sendMessage(message) {
      this.messageList = [].concat(_toConsumableArray(this.messageList), [Object.assign({}, message)]);
      console.log("sendMessage from User=====:", message);
      var msg = new ChatMessage_ChatMessage(message);
      this.chatbot.send(msg);
    },
    openChat: function openChat() {
      this.isChatOpen = true;
      this.newMessagesCount = 0;
      this.chatbot.connect(this.store.currentUser.id, this.ws_url);
    },
    closeChat: function closeChat() {
      this.isChatOpen = false;
    },
    setColor: function setColor(color) {
      this.colors = this.themeColors[color];
      this.chosenColor = color;
    },
    showStylingInfo: function showStylingInfo() {
      this.$modal.show('dialog', {
        title: 'Info',
        text: 'You can use *word* to <strong>boldify</strong>, /word/ to <em>emphasize</em>, _word_ to <u>underline</u>, `code` to <code>write = code;</code>, ~this~ to <del>delete</del> and ^sup^ or ¡sub¡ to write <sup>sup</sup> and <sub>sub</sub>'
      });
    },
    messageStylingToggled: function messageStylingToggled(e) {
      this.messageStyling = e.target.checked;
    },
    handleOnType: function handleOnType() {
      this.$root.$emit('onType');
      this.userIsTyping = true;
    },
    editMessage: function editMessage(message) {
      var m = this.messageList.find(function (m) {
        return m.id === message.id;
      });
      m.isEdited = true;
      m.data.text = message.data.text;
    },
    removeMessage: function removeMessage(message) {
      if (confirm('Delete?')) {
        var m = this.messageList.find(function (m) {
          return m.id === message.id;
        });
        m.type = 'system';
        m.data.text = 'This message has been removed';
      }
    },
    like: function like(id) {
      var m = this.messageList.findIndex(function (m) {
        return m.id === id;
      });
      var msg = this.messageList[m];
      msg.liked = !msg.liked;
      this.$set(this.messageList, m, msg);
    }
  },
  computed: {
    isAdmin: function isAdmin() {
      return this.userid === "admin";
    },
    linkColor: function linkColor() {
      return this.chosenColor === 'dark' ? this.colors.sentMessage.text : this.colors.launcher.bg;
    },
    backgroundColor: function backgroundColor() {
      return this.chosenColor === 'dark' ? this.colors.messageList.bg : '#fff';
    }
  }
});
// CONCATENATED MODULE: ./src/vue_chat_plugin/webChat.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_chat_plugin_webChatvue_type_script_lang_js_ = (webChatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue_chat_plugin/webChat.vue?vue&type=style&index=0&id=275ada6d&scoped=true&lang=css&
var webChatvue_type_style_index_0_id_275ada6d_scoped_true_lang_css_ = __webpack_require__("5b51");

// CONCATENATED MODULE: ./src/vue_chat_plugin/webChat.vue






/* normalize component */

var webChat_component = normalizeComponent(
  vue_chat_plugin_webChatvue_type_script_lang_js_,
  webChatvue_type_template_id_275ada6d_scoped_true_render,
  webChatvue_type_template_id_275ada6d_scoped_true_staticRenderFns,
  false,
  null,
  "275ada6d",
  null
  
)

/* harmony default export */ var webChat = (webChat_component.exports);
// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/information.png
var information = __webpack_require__("8807");
var information_default = /*#__PURE__*/__webpack_require__.n(information);

// EXTERNAL MODULE: ./src/vue_chat_plugin/assets/chatbot.png
var chatbot = __webpack_require__("c5cb");
var chatbot_default = /*#__PURE__*/__webpack_require__.n(chatbot);

// CONCATENATED MODULE: ./src/data/chatProfiles.js
 //import GuestIcon from "../vue_chat_plugin/assets/guest.png";


/* harmony default export */ var chatProfiles = ([{
  id: 'bot',
  name: 'ChatBot',
  imageUrl: chatbot_default.a,
  hidden: true
}, {
  id: 'information',
  name: 'information',
  imageUrl: information_default.a
}]);
// CONCATENATED MODULE: ./src/data/messageHistory.js
/* harmony default export */ var messageHistory = ([{
  type: "system",
  id: 13,
  data: {
    text: "You have been transferred to another operator",
    meta: "04-07-2018 15:57"
  }
}, {
  type: "file",
  author: "support",
  id: 14,
  data: {
    text: "No forget the story. ",
    file: {
      name: "awesome",
      url: "https://github.com/lqwangxg/resources/blob/master/gif/happy.gif?raw=true"
    },
    meta: "✓✓ Read"
  }
}, {
  type: "emoji",
  author: "me",
  id: 17,
  data: {
    emoji: "\uD83D\uDE0B"
  }
}, {
  type: "text",
  author: "me",
  id: 19,
  data: {
    text: "...or not?",
    meta: "✓ Delivered"
  }
}, {
  type: "system",
  id: 20,
  data: {
    text: "User changed security key",
    meta: "04-08-2018 15:57"
  }
}]);
// CONCATENATED MODULE: ./src/data/colors.js
/* harmony default export */ var colors = ({
  red: {
    header: {
      bg: '#D32F2F',
      text: '#fff'
    },
    launcher: {
      bg: '#D32F2F'
    },
    messageList: {
      bg: '#fff'
    },
    sentMessage: {
      bg: '#F44336',
      text: '#fff'
    },
    receivedMessage: {
      bg: '#eaeaea',
      text: '#222222'
    },
    userInput: {
      bg: '#fff',
      text: '#212121'
    },
    userList: {
      bg: '#fff',
      text: '#212121'
    }
  },
  green: {
    header: {
      bg: '#388E3C',
      text: '#fff'
    },
    launcher: {
      bg: '#388E3C'
    },
    messageList: {
      bg: '#fff'
    },
    sentMessage: {
      bg: '#4CAF50',
      text: '#fff'
    },
    receivedMessage: {
      bg: '#eaeaea',
      text: '#222222'
    },
    userInput: {
      bg: '#fff',
      text: '#212121'
    },
    userList: {
      bg: '#fff',
      text: '#212121'
    }
  },
  blue: {
    header: {
      bg: '#4e8cff',
      text: '#ffffff'
    },
    launcher: {
      bg: '#4e8cff'
    },
    messageList: {
      bg: '#ffffff'
    },
    sentMessage: {
      bg: '#4e8cff',
      text: '#ffffff'
    },
    receivedMessage: {
      bg: '#eaeaea',
      text: '#222222'
    },
    userInput: {
      bg: '#e4ffff',
      text: '#565867'
    },
    userList: {
      bg: '#fff',
      text: '#212121'
    }
  },
  dark: {
    header: {
      bg: '#34495e',
      text: '#ecf0f1'
    },
    launcher: {
      bg: '#34495e'
    },
    messageList: {
      bg: '#2c3e50'
    },
    sentMessage: {
      bg: '#7f8c8d',
      text: '#ecf0f1'
    },
    receivedMessage: {
      bg: '#95a5a6',
      text: '#ecf0f1'
    },
    userInput: {
      bg: '#34495e',
      text: '#ecf0f1'
    },
    userList: {
      bg: '#2c3e50',
      text: '#ecf0f1'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/view/chat.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var chatvue_type_script_lang_js_ = ({
  name: "chat",
  props: {
    ws_url: {
      type: String
    },
    username: {
      type: String
    }
  },
  components: {
    webChat: webChat
  },
  data: function data() {
    return {
      participants: chatProfiles,
      messageHistory: messageHistory,
      availableColors: colors
    };
  },
  computed: {
    chat_server_ws_url: function chat_server_ws_url() {
      var url = this.$WS_URL;
      console.log("chatserver_url====>:", url);

      if (this.ws_url) {
        url = this.ws_url;
      }

      return url;
    }
  }
});
// CONCATENATED MODULE: ./src/view/chat.vue?vue&type=script&lang=js&
 /* harmony default export */ var view_chatvue_type_script_lang_js_ = (chatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/view/chat.vue?vue&type=style&index=0&lang=css&
var chatvue_type_style_index_0_lang_css_ = __webpack_require__("1764");

// CONCATENATED MODULE: ./src/view/chat.vue






/* normalize component */

var chat_component = normalizeComponent(
  view_chatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chat = (chat_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (chat);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fb95":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAApCAYAAABA4LXdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAArKSURBVGhD7VoJeI1XGo59qZ3xKG0fVdTYptTQsZUy06mHUjMytmI6xmy2GUutY1pLp0FtkQRJJGkiKUKWEkJESahEaYhdJNYgIZGEEOGd7/3Pvbn3v0nkj+Si8+R9nu/JzT3ff/5z3nPOt53rgDLYDWXk2hFl5NoRLy65OTlAejpw/jxw8CCwbRvw9deAqyuwahWwdCmwbJn67OkJbNkC7N8PnDoFpKYC9+8Djx+bOns+eDHIJRGJiUBoKDB/PjByJNC5M9CgAVCjBlC9OlClClCpElC+vIxahl2QlCsHVK0K1KsHdOgAODoCM2YAPj7AkSPA7dtAbq7ppfaHjOg5ISUF2LULmD4d6NkTaNJEScuWwHvvAePGKaJdXABfX7Uzd+4EIiKUbN8ObN4MeHkBy5crEocMATp1Aho1AipW1BNP0lu0AEaMAJydgbg4ICvLNBj74NmSe+eOInTiRLUz27cHBg4EFi4EgoKACxeAjAxlEp4Gjx4pwq5dA8LDgZUrgTFjgDZtgGrV9GTXqqUWlQsYGwtkZ5s6KT08G3IvXVK2ctAgoHdvYMoUReaNG/Y/piSc5oC7/fPPgR49gDp19ETzfy4yT8jNm6YHSw77kpuUBCxeDAweDIwfr2xqWpqp8TmBOzsqCpg9W50ca/PBzzxRdJJc+BLCPuRyp9AW0m46OSkP/gwdiWHQfLi7A716KYdpJpmOsWtXwN8fuHfPpFx8lC65DH0OHQLmzQPWrFHm4KcAhnwM87p310cjdIJDhwLx8SbF4qH0yKVDoB11cwPOnjV9+RMDIxietFdftRBMYZQREKDsdzFQOuQyTt2zB4iOfnpP/yKBMfH77+sJZqy9YIGaq0EYIjf30WNcuZGFxGuZSLKSxKuZSL3zQB2r5GRNlzlRSlq21matS2EfD3PV6uc8fIRL17Py6Wh9pt9HRlZOXh+379wvNNnKvJuTrw+zZN3LwS3pi5+pZwi0sQkJyqFNmqR3eDQZEybISzNNyk+GIXJD9yXhlX6+eGOgP1p8FJAnr3+4AcNnRyDDauA5OY8weUk0mg7YoNN9Y5A/msnzgRESywp8vj2r9dl8kEWHwudmu8TC+9szpnZ/dPp4Cz6YsB1LfeNw/ZbFwXCBJi6Oxmv9/XR9sE++a2tkIua6xqLJB77o9kkw+k0Mw1d+x3DjdgFO6uFDYNMmlcDUrw/MmqXicoZvzAytdzETHwMwRG7i1Qx8PHcPKv1yLRzau8DhF65K2rmgVg9PRMVdN2nKqcnJxZDpu+DQerVFr736O2xWBC5ckSRBcO5SOgZMDtP3R2ntjDHzInHg2HV0/1Mwyr3lpnTkXWzv+scgnE6yhHPhBy+jzZCNcGhr1Q/fJ/97hZ5B0N5ENP61DxzayHjYx1uu6DJ6K+LP3zL1IOCxWLQIqFxZkVe7tqpdmCMFhm3W5LKdGV4RMESuGeO/jFKDfHuNRWSwc1xiTBqK3D/MFHI5SbNOBzfUfnc9jltPSBAti1L1V+5ae56uEDnq32K/Banp2egxNkSRxbaOIvL+oTN34/4DS2i3yPOo/n3Uk3F5Bp/W2jftTkB5boyOpve0XY0+fw1FWqaYNIKpdM2aFvKmTVPfm0E7O2yYpZ3i4WFqLByiZRx7D19DlS42ZMik3hkdpNnFR2Kbk5IzhNzd+snK7qvTaz1OJEj8a4WYEzdRvatHoeQS/+CCcsfl9eWKRr/x0e1eJ+8ftXfk6diQe+R0Cmp097S8R0iu3GUdNkUkSqv4ABaKrImzJZe4eFFFDWYd1jWKgGgZx93sh+gwPNCykygy4Je6eWD3oSvaUd8efVHssA25okNy423IPRR/A9WKIHe8ky25bqjf2wuHT1rS1C+9nkzuUZIr5sv2PfPcj0rCI+FX27YW0igNG6pKmm3i89lnqr15cxW2FYFikUvMXh2jHau8QVKEyGnLD2o2jjJybkSpkTtBHJaOXFnY9o6bkJxqcUpFkZtv52r9uGCa82HgiiQ6jRvryaUwSmA4FhxsiQ5Y4OnYEdi4Uf1fBIpF7okLtzVvX0N2qm6gMrE3Bwfgt+O3wUMmROdXGuQybBsxRxaK5NJeSp8V3l6LlQH6jOmpdq60L/Q+JoZdQq5WrfKTa5YKFYAuXYB16xTJrE0YLMLL08bhGXIam8U5dPskSNtBeQOlyMBrdPdAwM7zJSZ3zH8itZh4sc+PqCcmgMRWlwVt9btvsExCqQfiNK1RFLmHxbbTdOW9R/7WlJ0c/v1VaZW+bG1uYdK/vypGGYQ8YRyc2CQ5pgvcj+iPKkUm91o/P8SdvaV2WwnIHTv/O/iFnUMFkiSLSJ2PpuxEsIRVdJq2KJzcM1q76+YT6jsK3yXvGCljzDZHHKwx89ajIEJtpW9f4JY+6ikMom0cyzYcQ1vHjdgWdRF1JLSyJWXw1HDcyXog8WzJHBp37s3b2VoUwBCO7RUklHpFkoF/fXUwXxJQMLluWqKyPuQM6vaUPkxxbjUJ/Ti+y9dtsiweeyYPBRFqKytWmB56MkTTOFb4H0ctGeipxDT0/kuoRkTeZOTofuUrNkxQUJz7NDb3gWRgjjOkL/MpIYHS/rcv9otpsBRRCiPXK/Ss2OfjWjLi+Oku/P2/+xHyXRIy70k2ZgbtJ5MFZmg7dgB9+ujLjwUJS5QGSqiiaRxmcpNT76oJmckVcuqKbYyJvyljfVxq5BITnGyiBTnuP+vjjVixo2YUZXMz5DQ9lIUqEAypeEPC0ItgMZ9pMAv8zMQKIpdVMwN1XtE0Du6Cmj3W47qEQZxc7Z4mDyx2sefYYNyRjIcevjTJ1bJCa3LlhFTsvA6+YpPNKIrcJ4K3zjQHAwbo79H4OTIS6NcvP7mMcw3cuRWLXPPOvXrzruYM3v1zsNq9MpFPVx3SdOjJS5Vc250r5FYScjfsKCVy6f2ZNPDCcu9e05dW4J0a7/2syeWVvQEUi9wp4kyqdnXHmaR07f8v1ktOTychBG2PUrcOtJPDZku0YB2qycTr9vLSbLU1YiXLYoj1JHLHLdynJ1cWrWFfby0xMMPJO64Act00Z1YkSO7LLyvSuEv5gxJbsPRoJpZlx8BAU8OTYZjcEwlpaPahvzY5HlU6lB9OpchO9tTiz2spdzU9euHe40Ly7VySuG2/5OdW+CY8QYsCtATBrEty50VqNWSSz765CzXC2KfIVMkGc3NVSEYbP3npAf37tH5ctXJjQaGbDtbkUkaNkklcNjUKWDhv187SzntBOj8DMERu3LlbaNbfDw5vrlKlxJ874/fifVPTstFTPPHwWRGaHu0w66la2GMr8kwdWYiQfYpgPznW1d5x177X6bVcidGycxnnvkSTwfbWIkJWgz4+mLM6VrPtBIkjseVIPsdl3Y/2jAv6Tw7TVdDygTaXPyJhuZGmgQQ2bQqEhakfm9Stq77jTQR3MGu8BmGIXFbyZzrHaBNhnDlpSTTcAk9qJmDHgUuIiGGmIwsuWdUC9x8weYnSs5Z/yrPTV3yPY7JQxOGTKfL9Aflerzdp8QFs3JWAfUeSJVKIwtRlB7U+WbM4c1GZIzMYRQXuuSDjitb1YRYW0tduPZW3ywsEyWJhnPd/vPvjVQ7TXUYP/BUPr9pZJePv1Z7LHdr/GxjDUnj8S/CTgDJy7Ygycu2IMnLtiDJy7Ygycu2IMnLtiDJy7Ygycu0G4H9wroOkYeEuAgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ })["default"];
});