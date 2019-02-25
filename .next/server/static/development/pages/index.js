module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bus-routes.js":
/*!**********************************!*\
  !*** ./components/bus-routes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./constants.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./components/icon.js");
var _jsxFileName = "/Users/patrick/Development/dreadful_design/transit/components/bus-routes.js";




var routes = [{
  number: 66,
  eta: "3 mins",
  transfer: false,
  selected: true
}, {
  number: 87,
  eta: "7 mins",
  transfer: false,
  selected: false
}, {
  number: 44,
  eta: "5 mins",
  transfer: false,
  selected: false
}, {
  number: 56,
  eta: "9 mins",
  transfer: true,
  selected: false
}, {
  number: 58,
  eta: "4 mins",
  transfer: false,
  selected: false
}, {
  number: 112,
  eta: "12 mins",
  transfer: false,
  selected: false
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusRoutes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
      key: i,
      onClick: function onClick(e) {
        return console.log(e.target);
      },
      className: route.selected && "selected",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "bus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "# ", route.number)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "timer-sand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, route.eta))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "directions-fork",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, route.transfer ? "Transfer" : "Direct"))));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
});
var BusRoutes = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "bus-routes__BusRoutes",
  componentId: "zeez52-0"
})(["position:relative;overflow-x:auto;display:flex;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;scroll-padding-left:2rem;padding-left:2rem;padding-right:2rem;margin-top:auto;padding-bottom:1rem;margin-bottom:1rem;&::-webkit-scrollbar{display:none;}.padding{width:1px;flex:0 0 auto;}"]);
var Route = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "bus-routes__Route",
  componentId: "zeez52-1"
})(["scroll-snap-align:start;flex:0 0 auto;width:16rem;height:16rem;background:", ";border-radius:2px;box-shadow:0 12px 0 -6px rgba(0,0,0,0.1);padding:2rem;display:flex;flex-direction:column;justify-content:space-between;&.selected{background:", ";color:", ";}.mdi{color:", ";margin-right:1rem;}> span{display:flex;align-items:center;margin-top:1rem;}&:not(:last-of-type){margin-right:2rem;}"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_100, _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_900, _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].blue_100, _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_500);

/***/ }),

/***/ "./components/icon.js":
/*!****************************!*\
  !*** ./components/icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.attrs(function (_ref) {
  var name = _ref.name;
  return {
    className: "mdi mdi-".concat(name)
  };
}).withConfig({
  displayName: "icon",
  componentId: "sc-1dfl4qk-0"
})(["font-size:2rem;"]));

/***/ }),

/***/ "./components/search-bar.js":
/*!**********************************!*\
  !*** ./components/search-bar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./constants.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "search-bar",
  componentId: "pia2ed-0"
})(["position:relative;background:", ";margin-top:2rem;border-radius:2px;box-shadow:0 12px 0 -6px rgba(0,0,0,0.1);width:100%;input{all:unset;font-size:1.5rem;box-sizing:border-box;display:block;width:calc(100% - 4rem);margin-left:6rem;padding:2rem 0;}&::before{content:\"\";position:absolute;top:2.25rem;left:2.25rem;border:4px solid ", ";width:0.75rem;height:0.75rem;}&::after{content:\"\";position:absolute;bottom:2.25rem;left:2.25rem;border:4px solid ", ";width:0.75rem;height:0.75rem;border-radius:50%;}.source{border-bottom:1px solid ", ";}.dotted-line{position:absolute;left:2.85rem;top:50%;height:1.5rem;transform:translateY(-50%);border-left:1px dashed ", ";}"], _constants_js__WEBPACK_IMPORTED_MODULE_1__["colors"].grey_100, _constants_js__WEBPACK_IMPORTED_MODULE_1__["colors"].blue_500, _constants_js__WEBPACK_IMPORTED_MODULE_1__["colors"].green_500, _constants_js__WEBPACK_IMPORTED_MODULE_1__["colors"].grey_300, _constants_js__WEBPACK_IMPORTED_MODULE_1__["colors"].grey_500));

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: colors, apiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKey", function() { return apiKey; });
var colors = {
  blue_100: "#F2F2FF",
  blue_300: "#8F8DF4",
  blue_500: "#3330EA",
  blue_700: "#1412A9",
  blue_900: "#060533",
  green_100: "#E6FFF5",
  green_300: "#A4F5D6",
  green_500: "#67EBB8",
  green_700: "#20AE78",
  green_900: "#06402A",
  grey_100: "#F9F9FF",
  grey_300: "#E2E2E8",
  grey_500: "#CBCBD0",
  grey_700: "#565659",
  grey_900: "#252526"
};
var apiKey = "iX8ztmhTKsrgQsi4wZWRYMaeg";

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./constants.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon */ "./components/icon.js");
/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search-bar */ "./components/search-bar.js");
/* harmony import */ var _components_bus_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/bus-routes */ "./components/bus-routes.js");
var _jsxFileName = "/Users/patrick/Development/dreadful_design/transit/pages/index.js";







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var container = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var map = useMapBox(container);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    ref: container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wallet, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$ "), "47.50"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "wallet-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_search_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "source",
    value: "Your Location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "destination",
    value: "900 N Franklin St",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dotted-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_bus_routes__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
});
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "pages__Main",
  componentId: "sc-1aowl44-0"
})(["min-height:100vh;background:", ";display:flex;flex-direction:column;"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_300);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "pages__Header",
  componentId: "sc-1aowl44-1"
})(["padding:2rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;.mdi-menu{width:5rem;height:5rem;display:flex;align-items:center;justify-content:center;}"]);
var Wallet = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Wallet",
  componentId: "sc-1aowl44-2"
})(["display:flex;align-items:center;padding:1rem;background:", ";border-radius:2px;box-shadow:0 12px 0 -6px rgba(0,0,0,0.1);.mdi{margin-left:1rem;color:", ";}"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_100, _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_500);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrick/Development/dreadful_design/transit/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map