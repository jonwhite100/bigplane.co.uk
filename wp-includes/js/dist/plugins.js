this["wp"] = this["wp"] || {}; this["wp"]["plugins"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 461);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 363);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

<<<<<<< HEAD
/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
=======
/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
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
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

/***/ }),

<<<<<<< HEAD
/***/ 19:
=======
/***/ 11:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

<<<<<<< HEAD
/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
=======
/***/ 12:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

<<<<<<< HEAD
/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });
=======
/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
<<<<<<< HEAD
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

<<<<<<< HEAD
/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
=======
/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

/***/ }),

<<<<<<< HEAD
/***/ 32:
=======
/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 27:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

<<<<<<< HEAD
/***/ 40:
=======
/***/ 31:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
<<<<<<< HEAD
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
=======
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    };
  }

  return _typeof(obj);
}

/***/ }),

<<<<<<< HEAD
/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var plugins = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plugins);


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PluginArea", function() { return /* reexport */ plugin_area; });
__webpack_require__.d(__webpack_exports__, "withPluginContext", function() { return /* reexport */ plugin_context_withPluginContext; });
__webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return /* reexport */ registerPlugin; });
__webpack_require__.d(__webpack_exports__, "unregisterPlugin", function() { return /* reexport */ unregisterPlugin; });
__webpack_require__.d(__webpack_exports__, "getPlugin", function() { return /* reexport */ getPlugin; });
__webpack_require__.d(__webpack_exports__, "getPlugins", function() { return /* reexport */ getPlugins; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(22);
=======
/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(15);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

<<<<<<< HEAD
// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(9);
=======
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(18);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(8);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-context/index.js



/**
 * WordPress dependencies
 */



var _createContext = Object(external_this_wp_element_["createContext"])({
  name: null,
  icon: null
}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;


/**
 * A Higher Order Component used to inject Plugin context to the
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
<<<<<<< HEAD
 * @return {WPComponent} Enhanced component with injected context as props.
=======
 * @return {Component} Enhanced component with injected context as props.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */

var plugin_context_withPluginContext = function withPluginContext(mapContextToProps) {
  return Object(external_this_wp_compose_["createHigherOrderComponent"])(function (OriginalComponent) {
    return function (props) {
      return Object(external_this_wp_element_["createElement"])(Consumer, null, function (context) {
        return Object(external_this_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withPluginContext');
};

<<<<<<< HEAD
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/plugins.js
var plugins = __webpack_require__(420);
=======
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(31);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/api/index.js



<<<<<<< HEAD
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * WordPress dependencies
 */

<<<<<<< HEAD

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/**
 * External dependencies
 */


/**
<<<<<<< HEAD
 * Defined behavior of a plugin type.
 *
 * @typedef {Object} WPPlugin
 *
 * @property {string}                    name   A string identifying the plugin. Must be
 *                                              unique across all registered plugins.
 *                                              unique across all registered plugins.
 * @property {string|WPElement|Function} icon   An icon to be shown in the UI. It can
 *                                              be a slug of the Dashicon, or an element
 *                                              (or function returning an element) if you
 *                                              choose to render your own SVG.
 * @property {Function}                  render A component containing the UI elements
 *                                              to be rendered.
 */

/**
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * Plugin definitions keyed by plugin name.
 *
 * @type {Object.<string,WPPlugin>}
 */

<<<<<<< HEAD
var api_plugins = {};
/**
 * Registers a plugin to the editor.
 *
 * @param {string}   name     A string identifying the plugin.Must be
 *                            unique across all registered plugins.
 * @param {WPPlugin} settings The settings for this plugin.
 *
 * @example
 * <caption>ES5</caption>
=======
var plugins = {};
/**
 * Registers a plugin to the editor.
 *
 * @param {string}                    name            A string identifying the plugin. Must be unique across all registered plugins.
 * @param {Object}                    settings        The settings for this plugin.
 * @param {string|WPElement|Function} settings.icon   An icon to be shown in the UI. It can be a slug of the Dashicon,
 * or an element (or function returning an element) if you choose to render your own SVG.
 * @param {Function}                  settings.render A component containing the UI elements to be rendered.
 *
 * @example <caption>ES5</caption>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var Fragment = wp.element.Fragment;
 * var PluginSidebar = wp.editPost.PluginSidebar;
 * var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
 * var registerPlugin = wp.plugins.registerPlugin;
<<<<<<< HEAD
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 *
 * function Component() {
 * 	return el(
 * 		Fragment,
 * 		{},
 * 		el(
 * 			PluginSidebarMoreMenuItem,
 * 			{
 * 				target: 'sidebar-name',
 * 			},
 * 			'My Sidebar'
 * 		),
 * 		el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'sidebar-name',
 * 				title: 'My Sidebar',
 * 			},
 * 			'Content of the sidebar'
 * 		)
 * 	);
 * }
 * registerPlugin( 'plugin-name', {
<<<<<<< HEAD
 * 	icon: moreIcon,
=======
 * 	icon: 'smiley',
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * 	render: Component,
 * } );
 * ```
 *
<<<<<<< HEAD
 * @example
 * <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
 * import { registerPlugin } from '@wordpress/plugins';
 * import { more } from '@wordpress/icons';
=======
 * @example <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
 * const { registerPlugin } = wp.plugins;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 *
 * const Component = () => (
 * 	<>
 * 		<PluginSidebarMoreMenuItem
 * 			target="sidebar-name"
 * 		>
 * 			My Sidebar
 * 		</PluginSidebarMoreMenuItem>
 * 		<PluginSidebar
 * 			name="sidebar-name"
 * 			title="My Sidebar"
 * 		>
 * 			Content of the sidebar
 * 		</PluginSidebar>
 * 	</>
 * );
 *
 * registerPlugin( 'plugin-name', {
<<<<<<< HEAD
 * 	icon: more,
=======
 * 	icon: 'smiley',
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * 	render: Component,
 * } );
 * ```
 *
<<<<<<< HEAD
 * @return {WPPlugin} The final plugin settings object.
=======
 * @return {Object} The final plugin settings object.
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 */

function registerPlugin(name, settings) {
  if (Object(esm_typeof["a" /* default */])(settings) !== 'object') {
    console.error('No settings object provided!');
    return null;
  }

  if (typeof name !== 'string') {
    console.error('Plugin names must be strings.');
    return null;
  }

  if (!/^[a-z][a-z0-9-]*$/.test(name)) {
    console.error('Plugin names must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".');
    return null;
  }

<<<<<<< HEAD
  if (api_plugins[name]) {
=======
  if (plugins[name]) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    console.error("Plugin \"".concat(name, "\" is already registered."));
  }

  settings = Object(external_this_wp_hooks_["applyFilters"])('plugins.registerPlugin', settings, name);

<<<<<<< HEAD
  if (!Object(external_this_lodash_["isFunction"])(settings.render)) {
=======
  if (!Object(external_lodash_["isFunction"])(settings.render)) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    console.error('The "render" property must be specified and must be a valid function.');
    return null;
  }

<<<<<<< HEAD
  api_plugins[name] = _objectSpread({
    name: name,
    icon: plugins["a" /* default */]
=======
  plugins[name] = Object(objectSpread["a" /* default */])({
    name: name,
    icon: 'admin-plugins'
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
  }, settings);
  Object(external_this_wp_hooks_["doAction"])('plugins.pluginRegistered', settings, name);
  return settings;
}
/**
 * Unregisters a plugin by name.
 *
 * @param {string} name Plugin name.
 *
<<<<<<< HEAD
 * @example
 * <caption>ES5</caption>
=======
 * @example <caption>ES5</caption>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * ```js
 * // Using ES5 syntax
 * var unregisterPlugin = wp.plugins.unregisterPlugin;
 *
 * unregisterPlugin( 'plugin-name' );
 * ```
 *
<<<<<<< HEAD
 * @example
 * <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * import { unregisterPlugin } from '@wordpress/plugins';
=======
 * @example <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * const { unregisterPlugin } = wp.plugins;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 *
 * unregisterPlugin( 'plugin-name' );
 * ```
 *
 * @return {?WPPlugin} The previous plugin settings object, if it has been
 *                     successfully unregistered; otherwise `undefined`.
 */

function unregisterPlugin(name) {
<<<<<<< HEAD
  if (!api_plugins[name]) {
=======
  if (!plugins[name]) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    console.error('Plugin "' + name + '" is not registered.');
    return;
  }

<<<<<<< HEAD
  var oldPlugin = api_plugins[name];
  delete api_plugins[name];
=======
  var oldPlugin = plugins[name];
  delete plugins[name];
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
  Object(external_this_wp_hooks_["doAction"])('plugins.pluginUnregistered', oldPlugin, name);
  return oldPlugin;
}
/**
 * Returns a registered plugin settings.
 *
 * @param {string} name Plugin name.
 *
<<<<<<< HEAD
 * @return {?WPPlugin} Plugin setting.
 */

function getPlugin(name) {
  return api_plugins[name];
=======
 * @return {?Object} Plugin setting.
 */

function getPlugin(name) {
  return plugins[name];
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}
/**
 * Returns all registered plugins.
 *
<<<<<<< HEAD
 * @return {WPPlugin[]} Plugin settings.
 */

function getPlugins() {
  return Object.values(api_plugins);
=======
 * @return {Array} Plugin settings.
 */

function getPlugins() {
  return Object.values(plugins);
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/plugin-area/index.js








<<<<<<< HEAD
function _createSuper(Derived) { return function () { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

=======
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/**
 * A component that renders all plugin fills in a hidden div.
 *
<<<<<<< HEAD
 * @example
 * <caption>ES5</caption>
=======
 * @example <caption>ES5</caption>
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var PluginArea = wp.plugins.PluginArea;
 *
 * function Layout() {
 * 	return el(
 * 		'div',
 * 		{},
 * 		'Content of the page',
 * 		PluginArea
 * 	);
 * }
 * ```
 *
<<<<<<< HEAD
 * @example
 * <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * import { PluginArea } from '@wordpress/plugins';
=======
 * @example <caption>ESNext</caption>
 * ```js
 * // Using ESNext syntax
 * const { PluginArea } = wp.plugins;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
 *
 * const Layout = () => (
 * 	<div>
 * 		Content of the page
 * 		<PluginArea />
 * 	</div>
 * );
 * ```
 *
<<<<<<< HEAD
 * @return {WPComponent} The component to be rendered.
 */

var plugin_area_PluginArea = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(PluginArea, _Component);

  var _super = _createSuper(PluginArea);

=======
 * @return {WPElement} Plugin area.
 */

var plugin_area_PluginArea =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PluginArea, _Component);

>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
  function PluginArea() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PluginArea);

<<<<<<< HEAD
    _this = _super.apply(this, arguments);
=======
    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PluginArea).apply(this, arguments));
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
    _this.setPlugins = _this.setPlugins.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = _this.getCurrentPluginsState();
    return _this;
  }

  Object(createClass["a" /* default */])(PluginArea, [{
    key: "getCurrentPluginsState",
    value: function getCurrentPluginsState() {
      return {
<<<<<<< HEAD
        plugins: Object(external_this_lodash_["map"])(getPlugins(), function (_ref) {
=======
        plugins: Object(external_lodash_["map"])(getPlugins(), function (_ref) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
          var icon = _ref.icon,
              name = _ref.name,
              render = _ref.render;
          return {
            Plugin: render,
            context: {
              name: name,
              icon: icon
            }
          };
        })
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(external_this_wp_hooks_["addAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered', this.setPlugins);
      Object(external_this_wp_hooks_["addAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered', this.setPlugins);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(external_this_wp_hooks_["removeAction"])('plugins.pluginRegistered', 'core/plugins/plugin-area/plugins-registered');
      Object(external_this_wp_hooks_["removeAction"])('plugins.pluginUnregistered', 'core/plugins/plugin-area/plugins-unregistered');
    }
  }, {
    key: "setPlugins",
    value: function setPlugins() {
      this.setState(this.getCurrentPluginsState);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(external_this_wp_element_["createElement"])("div", {
        style: {
          display: 'none'
        }
<<<<<<< HEAD
      }, Object(external_this_lodash_["map"])(this.state.plugins, function (_ref2) {
=======
      }, Object(external_lodash_["map"])(this.state.plugins, function (_ref2) {
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
        var context = _ref2.context,
            Plugin = _ref2.Plugin;
        return Object(external_this_wp_element_["createElement"])(Provider, {
          key: context.name,
          value: context
        }, Object(external_this_wp_element_["createElement"])(Plugin, null));
      }));
    }
  }]);

  return PluginArea;
}(external_this_wp_element_["Component"]);

/* harmony default export */ var plugin_area = (plugin_area_PluginArea);

// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/components/index.js



// CONCATENATED MODULE: ./node_modules/@wordpress/plugins/build-module/index.js
<<<<<<< HEAD
=======
/* concated harmony reexport PluginArea */__webpack_require__.d(__webpack_exports__, "PluginArea", function() { return plugin_area; });
/* concated harmony reexport withPluginContext */__webpack_require__.d(__webpack_exports__, "withPluginContext", function() { return plugin_context_withPluginContext; });
/* concated harmony reexport registerPlugin */__webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return registerPlugin; });
/* concated harmony reexport unregisterPlugin */__webpack_require__.d(__webpack_exports__, "unregisterPlugin", function() { return unregisterPlugin; });
/* concated harmony reexport getPlugin */__webpack_require__.d(__webpack_exports__, "getPlugin", function() { return getPlugin; });
/* concated harmony reexport getPlugins */__webpack_require__.d(__webpack_exports__, "getPlugins", function() { return getPlugins; });
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664




/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
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
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

/***/ }),

<<<<<<< HEAD
/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
=======
/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
}

/***/ }),

<<<<<<< HEAD
/***/ 9:
=======
/***/ 8:
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ })

/******/ });