webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./constants.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon */ "./components/icon.js");
/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search-bar */ "./components/search-bar.js");
var _jsxFileName = "/Users/patrick/Development/dreadful_design/transit/pages/index.js";





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wallet, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "$ "), "47.50"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "wallet-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_search_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "source",
    value: "Your Location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "destination",
    value: "900 N Franklin St",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dotted-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BusRoutes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
});
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "pages__Main",
  componentId: "sc-1aowl44-0"
})(["min-height:100vh;background:", ";display:flex;flex-direction:column;"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_300);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "pages__Header",
  componentId: "sc-1aowl44-1"
})(["padding:2rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;.mdi-menu{width:5rem;height:5rem;display:flex;align-items:center;justify-content:center;}"]);
var Wallet = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Wallet",
  componentId: "sc-1aowl44-2"
})(["display:flex;align-items:center;padding:1rem;background:", ";border-radius:2px;box-shadow:0 9px 0 -6px rgba(0,0,0,0.1);.mdi{margin-left:1rem;color:", ";}"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_100, _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_500);
var BusRoutes = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__BusRoutes",
  componentId: "sc-1aowl44-3"
})(["position:relative;overflow-x:auto;display:flex;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;scroll-padding-left:2rem;scroll-padding-right:2rem;padding-left:2rem;padding-right:2rem;margin-top:auto;margin-bottom:2rem &::-webkit-scrollbar{display:none;}.padding{width:1px;flex:0 0 auto;}"]);
var Route = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Route",
  componentId: "sc-1aowl44-4"
})(["scroll-snap-align:start;flex:0 0 auto;width:20rem;height:20rem;background:", ";&:not(:last-of-type){margin-right:2rem;}"], _constants_js__WEBPACK_IMPORTED_MODULE_2__["colors"].grey_100);

/***/ })

})
//# sourceMappingURL=index.js.74c0aebabeb748d365a6.hot-update.js.map