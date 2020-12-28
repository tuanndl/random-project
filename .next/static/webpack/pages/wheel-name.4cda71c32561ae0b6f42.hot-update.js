webpackHotUpdate_N_E("pages/wheel-name",{

/***/ "./components/random/WheelName.js":
false,

/***/ "./components/random/WheelName/WheelName.js":
/*!**************************************************!*\
  !*** ./components/random/WheelName/WheelName.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prize_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prize-wheel */ \"./node_modules/prize-wheel/prize-wheel.js\");\n/* harmony import */ var prize_wheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prize_wheel__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbook/Git/random-project/components/random/WheelName/WheelName.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar settings = {\n  el: \"#wheel\",\n  // Canvas ID\n  members: [\"Hamburgers\", \"Tacos\", \"Steak\", \"Burritos\", \"TUAN\"],\n  // Array of members\n  colors: [\"#C7181D\", \"#FCB937\", \"#A1B836\", \"#371979\", \"#301979\"],\n  // Background color of each member\n  radius: 300 // wheel radius\n\n};\n\nvar WheelName = function WheelName(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var wheel = new prize_wheel__WEBPACK_IMPORTED_MODULE_2___default.a(settings);\n    wheel.init();\n    wheel.spin(function (member) {\n      alert(member);\n    });\n  }, []);\n  return __jsx(\"canvas\", {\n    id: \"wheel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(WheelName, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = WheelName;\nWheelName.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelName);\n\nvar _c;\n\n$RefreshReg$(_c, \"WheelName\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5kb20vV2hlZWxOYW1lL1doZWVsTmFtZS5qcz80YTEzIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZWwiLCJtZW1iZXJzIiwiY29sb3JzIiwicmFkaXVzIiwiV2hlZWxOYW1lIiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJ3aGVlbCIsIlByaXplV2hlZWwiLCJpbml0Iiwic3BpbiIsIm1lbWJlciIsImFsZXJ0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUc7QUFDYkMsSUFBRSxFQUFFLFFBRFM7QUFDQztBQUNkQyxTQUFPLEVBQUUsQ0FBQyxZQUFELEVBQWUsT0FBZixFQUF3QixPQUF4QixFQUFpQyxVQUFqQyxFQUE2QyxNQUE3QyxDQUZJO0FBRWtEO0FBQy9EQyxRQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxDQUhLO0FBR29EO0FBQ2pFQyxRQUFNLEVBQUUsR0FKSyxDQUlBOztBQUpBLENBQWY7O0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzNCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsa0RBQUosQ0FBZVQsUUFBZixDQUFaO0FBQ0FRLFNBQUssQ0FBQ0UsSUFBTjtBQUVBRixTQUFLLENBQUNHLElBQU4sQ0FBVyxVQUFVQyxNQUFWLEVBQWtCO0FBQzNCQyxXQUFLLENBQUNELE1BQUQsQ0FBTDtBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FBTztBQUFRLE1BQUUsRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBWEQ7O0dBQU1QLFM7O0tBQUFBLFM7QUFhTkEsU0FBUyxDQUFDUyxTQUFWLEdBQXNCLEVBQXRCO0FBRWVULHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yYW5kb20vV2hlZWxOYW1lL1doZWVsTmFtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBQcml6ZVdoZWVsIGZyb20gXCJwcml6ZS13aGVlbFwiO1xuXG52YXIgc2V0dGluZ3MgPSB7XG4gIGVsOiBcIiN3aGVlbFwiLCAvLyBDYW52YXMgSURcbiAgbWVtYmVyczogW1wiSGFtYnVyZ2Vyc1wiLCBcIlRhY29zXCIsIFwiU3RlYWtcIiwgXCJCdXJyaXRvc1wiLCBcIlRVQU5cIl0sIC8vIEFycmF5IG9mIG1lbWJlcnNcbiAgY29sb3JzOiBbXCIjQzcxODFEXCIsIFwiI0ZDQjkzN1wiLCBcIiNBMUI4MzZcIiwgXCIjMzcxOTc5XCIsIFwiIzMwMTk3OVwiXSwgLy8gQmFja2dyb3VuZCBjb2xvciBvZiBlYWNoIG1lbWJlclxuICByYWRpdXM6IDMwMCwgLy8gd2hlZWwgcmFkaXVzXG59O1xuXG5jb25zdCBXaGVlbE5hbWUgPSAocHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgd2hlZWwgPSBuZXcgUHJpemVXaGVlbChzZXR0aW5ncyk7XG4gICAgd2hlZWwuaW5pdCgpO1xuXG4gICAgd2hlZWwuc3BpbihmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICBhbGVydChtZW1iZXIpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxjYW52YXMgaWQ9XCJ3aGVlbFwiPjwvY2FudmFzPjtcbn07XG5cbldoZWVsTmFtZS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgV2hlZWxOYW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/random/WheelName/WheelName.js\n");

/***/ }),

/***/ "./components/random/index.js":
/*!************************************!*\
  !*** ./components/random/index.js ***!
  \************************************/
/*! exports provided: RandomNumber, WheelName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Number_RandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Number/RandomNumber */ \"./components/random/Number/RandomNumber.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RandomNumber\", function() { return _Number_RandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _WheelName_WheelName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WheelName/WheelName */ \"./components/random/WheelName/WheelName.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WheelName\", function() { return _WheelName_WheelName__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5kb20vaW5kZXguanM/NWJjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JhbmRvbS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgUmFuZG9tTnVtYmVyIH0gZnJvbSBcIi4vTnVtYmVyL1JhbmRvbU51bWJlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaGVlbE5hbWUgfSBmcm9tIFwiLi9XaGVlbE5hbWUvV2hlZWxOYW1lXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/random/index.js\n");

/***/ })

})