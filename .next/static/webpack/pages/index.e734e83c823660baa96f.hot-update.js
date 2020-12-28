webpackHotUpdate_N_E("pages/index",{

/***/ "./components/random/WheelName.js":
/*!****************************************!*\
  !*** ./components/random/WheelName.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbook/Git/random-project/components/random/WheelName.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar settings = {\n  el: \"#wheel\",\n  // Canvas ID\n  members: [\"Hamburgers\", \"Tacos\", \"Steak\", \"Burritos\"],\n  // Array of members\n  colors: [\"#C7181D\", \"#FCB937\", \"#A1B836\", \"#371979\"],\n  // Background color of each member\n  radius: 250 // wheel radius\n\n};\n\nvar WheelName = function WheelName(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var wheel = new PrizeWheel(settings); // Initialize the wheel\n\n    wheel.init(); // Spin the wheel with a callback after it is done\n\n    wheel.spin(function (member) {\n      alert(member);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }, \"WheelName\");\n};\n\n_s(WheelName, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = WheelName;\nWheelName.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelName);\n\nvar _c;\n\n$RefreshReg$(_c, \"WheelName\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5kb20vV2hlZWxOYW1lLmpzPzUxZGQiXSwibmFtZXMiOlsic2V0dGluZ3MiLCJlbCIsIm1lbWJlcnMiLCJjb2xvcnMiLCJyYWRpdXMiLCJXaGVlbE5hbWUiLCJwcm9wcyIsInVzZUVmZmVjdCIsIndoZWVsIiwiUHJpemVXaGVlbCIsImluaXQiLCJzcGluIiwibWVtYmVyIiwiYWxlcnQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHO0FBQ2JDLElBQUUsRUFBRSxRQURTO0FBQ0M7QUFDZEMsU0FBTyxFQUFFLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsT0FBeEIsRUFBaUMsVUFBakMsQ0FGSTtBQUUwQztBQUN2REMsUUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsQ0FISztBQUd5QztBQUN0REMsUUFBTSxFQUFFLEdBSkssQ0FJQTs7QUFKQSxDQUFmOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMzQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsS0FBSyxHQUFHLElBQUlDLFVBQUosQ0FBZVQsUUFBZixDQUFaLENBRGMsQ0FFZDs7QUFDQVEsU0FBSyxDQUFDRSxJQUFOLEdBSGMsQ0FLZDs7QUFDQUYsU0FBSyxDQUFDRyxJQUFOLENBQVcsVUFBVUMsTUFBVixFQUFrQjtBQUMzQkMsV0FBSyxDQUFDRCxNQUFELENBQUw7QUFDRCxLQUZEO0FBR0QsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNELENBYkQ7O0dBQU1QLFM7O0tBQUFBLFM7QUFlTkEsU0FBUyxDQUFDUyxTQUFWLEdBQXNCLEVBQXRCO0FBRWVULHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yYW5kb20vV2hlZWxOYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG52YXIgc2V0dGluZ3MgPSB7XG4gIGVsOiBcIiN3aGVlbFwiLCAvLyBDYW52YXMgSURcbiAgbWVtYmVyczogW1wiSGFtYnVyZ2Vyc1wiLCBcIlRhY29zXCIsIFwiU3RlYWtcIiwgXCJCdXJyaXRvc1wiXSwgLy8gQXJyYXkgb2YgbWVtYmVyc1xuICBjb2xvcnM6IFtcIiNDNzE4MURcIiwgXCIjRkNCOTM3XCIsIFwiI0ExQjgzNlwiLCBcIiMzNzE5NzlcIl0sIC8vIEJhY2tncm91bmQgY29sb3Igb2YgZWFjaCBtZW1iZXJcbiAgcmFkaXVzOiAyNTAsIC8vIHdoZWVsIHJhZGl1c1xufTtcblxuY29uc3QgV2hlZWxOYW1lID0gKHByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHdoZWVsID0gbmV3IFByaXplV2hlZWwoc2V0dGluZ3MpO1xuICAgIC8vIEluaXRpYWxpemUgdGhlIHdoZWVsXG4gICAgd2hlZWwuaW5pdCgpO1xuXG4gICAgLy8gU3BpbiB0aGUgd2hlZWwgd2l0aCBhIGNhbGxiYWNrIGFmdGVyIGl0IGlzIGRvbmVcbiAgICB3aGVlbC5zcGluKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgIGFsZXJ0KG1lbWJlcik7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj5XaGVlbE5hbWU8L2Rpdj47XG59O1xuXG5XaGVlbE5hbWUucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFdoZWVsTmFtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/random/WheelName.js\n");

/***/ })

})