this["wp"] = this["wp"] || {}; this["wp"]["dataControls"] =
/******/ (function(modules) { // webpackBootstrap
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
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 413);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 317);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ 18:
=======
/***/ 17:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

<<<<<<< HEAD
// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js

=======
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664



function _toConsumableArray(arr) {
<<<<<<< HEAD
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
=======
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || _nonIterableSpread();
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

/***/ }),

<<<<<<< HEAD
/***/ 35:
=======
/***/ 30:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
<<<<<<< HEAD
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
=======
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

/***/ }),

<<<<<<< HEAD
/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 413:
=======
/***/ 317:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiFetch", function() { return apiFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__unstableSyncSelect", function() { return __unstableSyncSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/**
 * Dispatches a control action for triggering an api fetch call.
 *
 * @param {Object} request Arguments for the fetch request.
 *
 * @example
 * ```js
 * import { apiFetch } from '@wordpress/data-controls';
 *
 * // Action generator using apiFetch
<<<<<<< HEAD
 * export function* myAction() {
 * 	const path = '/v2/my-api/items';
 * 	const items = yield apiFetch( { path } );
 * 	// do something with the items.
=======
 * export function* myAction {
 *		const path = '/v2/my-api/items';
 *		const items = yield apiFetch( { path } );
 *		// do something with the items.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */

var apiFetch = function apiFetch(request) {
  return {
    type: 'API_FETCH',
    request: request
  };
};
/**
 * Dispatches a control action for triggering a registry select.
 *
 * Note: when this control action is handled, it automatically considers
 * selectors that may have a resolver. It will await and return the resolved
 * value when the selector has not been resolved yet.
 *
 * @param {string} storeKey      The key for the store the selector belongs to
 * @param {string} selectorName  The name of the selector
 * @param {Array}  args          Arguments for the select.
 *
 * @example
 * ```js
 * import { select } from '@wordpress/data-controls';
 *
 * // Action generator using select
<<<<<<< HEAD
 * export function* myAction() {
 * 	const isSidebarOpened = yield select( 'core/edit-post', 'isEditorSideBarOpened' );
 * 	// do stuff with the result from the select.
=======
 * export function* myAction {
 *		const isSidebarOpened = yield select( 'core/edit-post', 'isEditorSideBarOpened' );
 *		// do stuff with the result from the select.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */

function select(storeKey, selectorName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return {
    type: 'SELECT',
    storeKey: storeKey,
    selectorName: selectorName,
    args: args
  };
}
/**
<<<<<<< HEAD
 * Dispatches a control action for triggering a registry select.
 *
 * Note: This functions like the `select` control, but does not wait
 * for resolvers.
 *
 * @param {string} storeKey     The key for the store the selector belongs to.
 * @param {string} selectorName The name of the selector.
 * @param {Array}  args         Arguments for the select.
 *
 * @example
 * ```js
 * import { __unstableSyncSelect } from '@wordpress/data-controls';
 *
 * // Action generator using `__unstableSyncSelect`.
 * export function* myAction() {
 * 	const isEditorSideBarOpened = yield __unstableSyncSelect( 'core/edit-post', 'isEditorSideBarOpened' );
 * 	// Do stuff with the result from the `__unstableSyncSelect`.
 * }
 * ```
 *
 * @return {Object} The control descriptor.
 */

function __unstableSyncSelect(storeKey, selectorName) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return {
    type: 'SYNC_SELECT',
    storeKey: storeKey,
    selectorName: selectorName,
    args: args
  };
}
/**
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * Dispatches a control action for triggering a registry dispatch.
 *
 * @param {string} storeKey    The key for the store the action belongs to
 * @param {string} actionName  The name of the action to dispatch
 * @param {Array}  args        Arguments for the dispatch action.
 *
 * @example
 * ```js
 * import { dispatch } from '@wordpress/data-controls';
 *
 * // Action generator using dispatch
<<<<<<< HEAD
 * export function* myAction() {
 * 	yield dispatch( 'core/edit-post', 'togglePublishSidebar' );
 * 	// do some other things.
=======
 * export function* myAction {
 *   yield dispatch( 'core/edit-post' ).togglePublishSidebar();
 *   // do some other things.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * }
 * ```
 *
 * @return {Object}  The control descriptor.
 */

function dispatch(storeKey, actionName) {
<<<<<<< HEAD
  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
=======
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
  }

  return {
    type: 'DISPATCH',
    storeKey: storeKey,
    actionName: actionName,
    args: args
  };
}
/**
<<<<<<< HEAD
=======
 * Utility for returning a promise that handles a selector with a resolver.
 *
 * @param {Object} registry             The data registry.
 * @param {Object} options
 * @param {string} options.storeKey     The store the selector belongs to
 * @param {string} options.selectorName The selector name
 * @param {Array}  options.args         The arguments fed to the selector
 *
 * @return {Promise}  A promise for resolving the given selector.
 */

var resolveSelect = function resolveSelect(registry, _ref) {
  var storeKey = _ref.storeKey,
      selectorName = _ref.selectorName,
      args = _ref.args;
  return new Promise(function (resolve) {
    var hasFinished = function hasFinished() {
      return registry.select('core/data').hasFinishedResolution(storeKey, selectorName, args);
    };

    var getResult = function getResult() {
      return registry.select(storeKey)[selectorName].apply(null, args);
    }; // trigger the selector (to trigger the resolver)


    var result = getResult();

    if (hasFinished()) {
      return resolve(result);
    }

    var unsubscribe = registry.subscribe(function () {
      if (hasFinished()) {
        unsubscribe();
        resolve(getResult());
      }
    });
  });
};
/**
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * The default export is what you use to register the controls with your custom
 * store.
 *
 * @example
 * ```js
 * // WordPress dependencies
 * import { controls } from '@wordpress/data-controls';
 * import { registerStore } from '@wordpress/data';
 *
 * // Internal dependencies
 * import reducer from './reducer';
 * import * as selectors from './selectors';
 * import * as actions from './actions';
 * import * as resolvers from './resolvers';
 *
<<<<<<< HEAD
 * registerStore( 'my-custom-store', {
=======
 * registerStore ( 'my-custom-store', {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * 	reducer,
 * 	controls,
 * 	actions,
 * 	selectors,
 * 	resolvers,
 * } );
 * ```
 *
 * @return {Object} An object for registering the default controls with the
 *                  store.
 */

<<<<<<< HEAD
var controls = {
  API_FETCH: function API_FETCH(_ref) {
    var request = _ref.request;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()(request);
  },
  SELECT: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["createRegistryControl"])(function (registry) {
    return function (_ref2) {
      var _registry;

      var storeKey = _ref2.storeKey,
          selectorName = _ref2.selectorName,
          args = _ref2.args;
      return (_registry = registry[registry.select(storeKey)[selectorName].hasResolver ? '__experimentalResolveSelect' : 'select'](storeKey))[selectorName].apply(_registry, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args));
    };
  }),
  SYNC_SELECT: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["createRegistryControl"])(function (registry) {
=======

var controls = {
  API_FETCH: function API_FETCH(_ref2) {
    var request = _ref2.request;
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()(request);
  },
  SELECT: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["createRegistryControl"])(function (registry) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    return function (_ref3) {
      var _registry$select;

      var storeKey = _ref3.storeKey,
          selectorName = _ref3.selectorName,
          args = _ref3.args;
<<<<<<< HEAD
      return (_registry$select = registry.select(storeKey))[selectorName].apply(_registry$select, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args));
=======
      return registry.select(storeKey)[selectorName].hasResolver ? resolveSelect(registry, {
        storeKey: storeKey,
        selectorName: selectorName,
        args: args
      }) : (_registry$select = registry.select(storeKey))[selectorName].apply(_registry$select, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args));
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    };
  }),
  DISPATCH: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["createRegistryControl"])(function (registry) {
    return function (_ref4) {
      var _registry$dispatch;

      var storeKey = _ref4.storeKey,
          actionName = _ref4.actionName,
          args = _ref4.args;
      return (_registry$dispatch = registry.dispatch(storeKey))[actionName].apply(_registry$dispatch, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(args));
    };
  })
};


/***/ }),

<<<<<<< HEAD
/***/ 45:
=======
/***/ 34:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

<<<<<<< HEAD
=======
/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ })

/******/ });