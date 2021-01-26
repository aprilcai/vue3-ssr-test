module.exports =
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs3/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime.js");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MyBtn = Object(external_vue_["resolveComponent"])("MyBtn");

  return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", null, [Object(external_vue_["createVNode"])(_component_MyBtn, {
    "some-prop": _ctx.btnPro
  }, null, 8, ["some-prop"])]);
}
// CONCATENATED MODULE: ./packages/path-g/App.vue?vue&type=template&id=6f13a827&bindings={}

// EXTERNAL MODULE: external "@babel/runtime-corejs3/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "regenerator-runtime/runtime.js"
var runtime_js_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@babel/runtime-corejs3/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

function MyBtnvue_type_template_id_ae7ce728_bindings_someProp_props_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_vue_["openBlock"])(), Object(external_vue_["createBlock"])("div", null, Object(external_vue_["toDisplayString"])($props.someProp.data.info), 1);
}
// CONCATENATED MODULE: ./packages/path-g/MyBtn.vue?vue&type=template&id=ae7ce728&bindings={"someProp":"props"}

/* harmony default export */ var MyBtnvue_type_script_lang_js = ({
  props: {
    someProp: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  }
});
// CONCATENATED MODULE: ./packages/path-g/MyBtn.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/path-g/MyBtn.vue



MyBtnvue_type_script_lang_js.render = MyBtnvue_type_template_id_ae7ce728_bindings_someProp_props_render

/* harmony default export */ var MyBtn = (MyBtnvue_type_script_lang_js);





/* harmony default export */ var Appvue_type_script_lang_js = (Object(external_vue_["defineComponent"])({
  name: 'App',
  components: {
    MyBtn: MyBtn
  },
  setup: function setup() {
    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                btnPro: {
                  data: {
                    info: 'btn info'
                  }
                }
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
}));
// CONCATENATED MODULE: ./packages/path-g/App.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/path-g/App.vue



Appvue_type_script_lang_js.render = render

/* harmony default export */ var App = (Appvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/path-g/webpack-server-entry.js


/* harmony default export */ var webpack_server_entry = __webpack_exports__["default"] = (function () {
  var app = Object(external_vue_["createSSRApp"])(App);

  app.config.errorHandler = function () {// do report error here
  };

  return app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server-bundle.js.map