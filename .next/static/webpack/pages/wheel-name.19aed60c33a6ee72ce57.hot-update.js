webpackHotUpdate_N_E("pages/wheel-name",{

/***/ "./components/random/WheelName.js":
/*!****************************************!*\
  !*** ./components/random/WheelName.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prize_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prize-wheel */ \"./node_modules/prize-wheel/prize-wheel.js\");\n/* harmony import */ var prize_wheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prize_wheel__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbook/Git/random-project/components/random/WheelName.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar settings = {\n  el: \"#wheel\",\n  // Canvas ID\n  members: [\"Hamburgers\", \"Tacos\", \"Steak\", \"Burritos\"],\n  // Array of members\n  colors: [\"#C7181D\", \"#FCB937\", \"#A1B836\", \"#371979\"],\n  // Background color of each member\n  radius: 250 // wheel radius\n\n};\n\nvar WheelName = function WheelName(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var wheel = new prize_wheel__WEBPACK_IMPORTED_MODULE_2___default.a(settings);\n    wheel.init();\n    wheel.spin(function (member) {\n      alert(member);\n    });\n  }, []);\n  return __jsx(\"canvas\", {\n    id: \"wheel\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(WheelName, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = WheelName;\nWheelName.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelName);\n\nvar _c;\n\n$RefreshReg$(_c, \"WheelName\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5kb20vV2hlZWxOYW1lLmpzPzUxZGQiXSwibmFtZXMiOlsic2V0dGluZ3MiLCJlbCIsIm1lbWJlcnMiLCJjb2xvcnMiLCJyYWRpdXMiLCJXaGVlbE5hbWUiLCJwcm9wcyIsInVzZUVmZmVjdCIsIndoZWVsIiwiUHJpemVXaGVlbCIsImluaXQiLCJzcGluIiwibWVtYmVyIiwiYWxlcnQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFFBQVEsR0FBRztBQUNiQyxJQUFFLEVBQUUsUUFEUztBQUNDO0FBQ2RDLFNBQU8sRUFBRSxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLE9BQXhCLEVBQWlDLFVBQWpDLENBRkk7QUFFMEM7QUFDdkRDLFFBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBSEs7QUFHeUM7QUFDdERDLFFBQU0sRUFBRSxHQUpLLENBSUE7O0FBSkEsQ0FBZjs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxrREFBSixDQUFlVCxRQUFmLENBQVo7QUFDQVEsU0FBSyxDQUFDRSxJQUFOO0FBRUFGLFNBQUssQ0FBQ0csSUFBTixDQUFXLFVBQVVDLE1BQVYsRUFBa0I7QUFDM0JDLFdBQUssQ0FBQ0QsTUFBRCxDQUFMO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxTQUFPO0FBQVEsTUFBRSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FYRDs7R0FBTVAsUzs7S0FBQUEsUztBQWFOQSxTQUFTLENBQUNTLFNBQVYsR0FBc0IsRUFBdEI7QUFFZVQsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3JhbmRvbS9XaGVlbE5hbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUHJpemVXaGVlbCBmcm9tIFwicHJpemUtd2hlZWxcIjtcblxudmFyIHNldHRpbmdzID0ge1xuICBlbDogXCIjd2hlZWxcIiwgLy8gQ2FudmFzIElEXG4gIG1lbWJlcnM6IFtcIkhhbWJ1cmdlcnNcIiwgXCJUYWNvc1wiLCBcIlN0ZWFrXCIsIFwiQnVycml0b3NcIl0sIC8vIEFycmF5IG9mIG1lbWJlcnNcbiAgY29sb3JzOiBbXCIjQzcxODFEXCIsIFwiI0ZDQjkzN1wiLCBcIiNBMUI4MzZcIiwgXCIjMzcxOTc5XCJdLCAvLyBCYWNrZ3JvdW5kIGNvbG9yIG9mIGVhY2ggbWVtYmVyXG4gIHJhZGl1czogMjUwLCAvLyB3aGVlbCByYWRpdXNcbn07XG5cbmNvbnN0IFdoZWVsTmFtZSA9IChwcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB3aGVlbCA9IG5ldyBQcml6ZVdoZWVsKHNldHRpbmdzKTtcbiAgICB3aGVlbC5pbml0KCk7XG5cbiAgICB3aGVlbC5zcGluKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgIGFsZXJ0KG1lbWJlcik7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGNhbnZhcyBpZD1cIndoZWVsXCI+PC9jYW52YXM+O1xufTtcblxuV2hlZWxOYW1lLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBXaGVlbE5hbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/random/WheelName.js\n");

/***/ }),

/***/ "./node_modules/prize-wheel/prize-wheel.js":
/*!*************************************************!*\
  !*** ./node_modules/prize-wheel/prize-wheel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(root) {\n  'use strict';\n\n  function _merge(obj1,obj2){\n    var obj3 = {};\n    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }\n    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }\n    return obj3;\n  }\n\n  var PrizeWheel = function(options) {\n    var _this = this,\n        defaults,\n        s,\n        ctx,\n        canvas;\n\n   defaults = {\n      el: null,\n      members: ['Member 1', 'Member 2', 'Member 3', 'Member 4'],\n      colors: ['#C7181D', '#FCB937', '#A1B836', '#371979', '#C7181D', '#FCB937', '#A1B836', '#371979'],\n      radius: 250,\n      startAngle: 0,\n      textRadius: 160\n    };\n\n    // s for settings\n    s = _merge(defaults, options);\n\n    s.width = s.height = s.radius * 2;\n    s.insideRadius = (s.width / 5);\n    s.outsideRadius = (s.width / 2) - 10;\n\n    s.startAngle = (s.startAngle === 'random' ? Math.floor(Math.random() * 360) : s.startAngle);\n    s.arc = Math.PI / (s.members.length / (s.members.length / (s.members.length / 2)));\n    s.spinTimeout =  null;\n    s.spinTime =  0;\n    s.spinTimeTotal =  0;\n    s.spinAngleStart =  null;\n\n    this.draw = function() {\n        var angle,\n            text,\n            i;\n\n        canvas = document.querySelector(s.el);\n        canvas.width = s.width;\n        canvas.height = s.height;\n        if (canvas.getContext) {\n\n          ctx = canvas.getContext('2d');\n          ctx.clearRect(0, 0, s.width, s.height);\n\n          ctx.strokeStyle = 'black';\n          ctx.lineWidth = 2;\n\n          ctx.font = '16px sans-serif';\n\n          for (i = 0; i < s.members.length; i++) {\n            angle = s.startAngle + i * s.arc;\n\n            ctx.fillStyle = s.colors[i];\n            ctx.beginPath();\n            ctx.arc(s.width / 2, s.height / 2, s.outsideRadius, angle, angle + s.arc, false);\n            ctx.arc(s.width / 2, s.height / 2, s.insideRadius, angle + s.arc, angle, true);\n            ctx.stroke();\n            ctx.fill();\n            ctx.save();\n\n            ctx.shadowOffsetX = -1;\n            ctx.shadowOffsetY = -1;\n            ctx.shadowBlur = 0;\n            ctx.fillStyle = \"black\";\n            ctx.translate((s.width / 2) + Math.cos(angle + s.arc / 2) * s.textRadius, (s.height / 2) + Math.sin(angle + s.arc / 2) * s.textRadius);\n            ctx.rotate(s.angle + s.arc / 2 + Math.PI / 2);\n            text = s.members[i];\n            ctx.fillText(text, -ctx.measureText(text).width / 2, 0);\n            ctx.restore();\n          }\n\n          //Arrow\n          ctx.fillStyle = \"black\";\n          ctx.beginPath();\n          ctx.moveTo(s.radius - 4, s.radius - (s.outsideRadius + 5));\n          ctx.lineTo(s.radius + 4, s.radius - (s.outsideRadius + 5));\n          ctx.lineTo(s.radius + 4, s.radius - (s.outsideRadius - 5));\n          ctx.lineTo(s.radius + 9, s.radius - (s.outsideRadius - 5));\n          ctx.lineTo(s.radius + 0, s.radius - (s.outsideRadius - 13));\n          ctx.lineTo(s.radius - 9, s.radius - (s.outsideRadius - 5));\n          ctx.lineTo(s.radius - 4, s.radius - (s.outsideRadius - 5));\n          ctx.lineTo(s.radius - 4, s.radius - (s.outsideRadius + 5));\n          ctx.fill();\n        }\n      };\n\n      this.easeOut = function(t, b, c, d) {\n        var ts,\n            tc;\n\n        ts = (t/=d)*t;\n        tc = ts*t;\n        return b+c*(tc + -3*ts + 3*t);\n      };\n\n      this.rotate = function() {\n        var spinAngle;\n        s.spinTime += 30;\n        if((s.spinTime + 5000) >= s.spinTimeTotal) {\n          _this.stop();\n          return;\n        }\n        spinAngle = s.spinAngleStart - _this.easeOut(s.spinTime, 0, s.spinAngleStart, s.spinTimeTotal);\n        s.startAngle += (spinAngle * Math.PI / 180);\n        _this.draw();\n        s.spinTimeout = setTimeout(_this.rotate, 30);\n      };\n\n      this.spin = function(cb) {\n          _this.cb = cb;\n          s.spinAngleStart = Math.random() * 10 + 10;\n          s.spinTime = 0;\n          s.spinTimeTotal = Math.random() * 3 + 4 * 3000;\n          _this.rotate();\n      };\n\n      this.stop = function() {\n        var degrees;\n        var arcd;\n        var index;\n\n        clearTimeout(s.spinTimeout);\n        degrees = s.startAngle * 180 / Math.PI + 90;\n        arcd = s.arc * 180 / Math.PI;\n        index = Math.floor((360 - degrees % 360) / arcd);\n        ctx.save();\n        _this.done(s.members[index]);\n      };\n\n      this.done = function(member) {\n        _this.cb(member);\n      };\n\n    return {\n      init: _this.draw,\n      spin: _this.spin\n    };\n  };\n\n  if (true) {\n    if ( true && module.exports) {\n      exports = module.exports = PrizeWheel;\n    }\n    exports.PrizeWheel = PrizeWheel;\n  } else {}\n\n})(this);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXplLXdoZWVsL3ByaXplLXdoZWVsLmpzPzBhNmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGlDQUFpQztBQUNqRSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsc0JBQXNCO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQThCO0FBQ3BDLFFBQVEsS0FBNkI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLEVBTU47O0FBRUgsQ0FBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9wcml6ZS13aGVlbC9wcml6ZS13aGVlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihyb290KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfbWVyZ2Uob2JqMSxvYmoyKXtcbiAgICB2YXIgb2JqMyA9IHt9O1xuICAgIGZvciAodmFyIGF0dHJuYW1lIGluIG9iajEpIHsgb2JqM1thdHRybmFtZV0gPSBvYmoxW2F0dHJuYW1lXTsgfVxuICAgIGZvciAodmFyIGF0dHJuYW1lIGluIG9iajIpIHsgb2JqM1thdHRybmFtZV0gPSBvYmoyW2F0dHJuYW1lXTsgfVxuICAgIHJldHVybiBvYmozO1xuICB9XG5cbiAgdmFyIFByaXplV2hlZWwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgZGVmYXVsdHMsXG4gICAgICAgIHMsXG4gICAgICAgIGN0eCxcbiAgICAgICAgY2FudmFzO1xuXG4gICBkZWZhdWx0cyA9IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgbWVtYmVyczogWydNZW1iZXIgMScsICdNZW1iZXIgMicsICdNZW1iZXIgMycsICdNZW1iZXIgNCddLFxuICAgICAgY29sb3JzOiBbJyNDNzE4MUQnLCAnI0ZDQjkzNycsICcjQTFCODM2JywgJyMzNzE5NzknLCAnI0M3MTgxRCcsICcjRkNCOTM3JywgJyNBMUI4MzYnLCAnIzM3MTk3OSddLFxuICAgICAgcmFkaXVzOiAyNTAsXG4gICAgICBzdGFydEFuZ2xlOiAwLFxuICAgICAgdGV4dFJhZGl1czogMTYwXG4gICAgfTtcblxuICAgIC8vIHMgZm9yIHNldHRpbmdzXG4gICAgcyA9IF9tZXJnZShkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICBzLndpZHRoID0gcy5oZWlnaHQgPSBzLnJhZGl1cyAqIDI7XG4gICAgcy5pbnNpZGVSYWRpdXMgPSAocy53aWR0aCAvIDUpO1xuICAgIHMub3V0c2lkZVJhZGl1cyA9IChzLndpZHRoIC8gMikgLSAxMDtcblxuICAgIHMuc3RhcnRBbmdsZSA9IChzLnN0YXJ0QW5nbGUgPT09ICdyYW5kb20nID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKSA6IHMuc3RhcnRBbmdsZSk7XG4gICAgcy5hcmMgPSBNYXRoLlBJIC8gKHMubWVtYmVycy5sZW5ndGggLyAocy5tZW1iZXJzLmxlbmd0aCAvIChzLm1lbWJlcnMubGVuZ3RoIC8gMikpKTtcbiAgICBzLnNwaW5UaW1lb3V0ID0gIG51bGw7XG4gICAgcy5zcGluVGltZSA9ICAwO1xuICAgIHMuc3BpblRpbWVUb3RhbCA9ICAwO1xuICAgIHMuc3BpbkFuZ2xlU3RhcnQgPSAgbnVsbDtcblxuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYW5nbGUsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHMuZWwpO1xuICAgICAgICBjYW52YXMud2lkdGggPSBzLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcy5oZWlnaHQ7XG4gICAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuXG4gICAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLndpZHRoLCBzLmhlaWdodCk7XG5cbiAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuXG4gICAgICAgICAgY3R4LmZvbnQgPSAnMTZweCBzYW5zLXNlcmlmJztcblxuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzLm1lbWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFuZ2xlID0gcy5zdGFydEFuZ2xlICsgaSAqIHMuYXJjO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gcy5jb2xvcnNbaV07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHMud2lkdGggLyAyLCBzLmhlaWdodCAvIDIsIHMub3V0c2lkZVJhZGl1cywgYW5nbGUsIGFuZ2xlICsgcy5hcmMsIGZhbHNlKTtcbiAgICAgICAgICAgIGN0eC5hcmMocy53aWR0aCAvIDIsIHMuaGVpZ2h0IC8gMiwgcy5pbnNpZGVSYWRpdXMsIGFuZ2xlICsgcy5hcmMsIGFuZ2xlLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IC0xO1xuICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAtMTtcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKChzLndpZHRoIC8gMikgKyBNYXRoLmNvcyhhbmdsZSArIHMuYXJjIC8gMikgKiBzLnRleHRSYWRpdXMsIChzLmhlaWdodCAvIDIpICsgTWF0aC5zaW4oYW5nbGUgKyBzLmFyYyAvIDIpICogcy50ZXh0UmFkaXVzKTtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUocy5hbmdsZSArIHMuYXJjIC8gMiArIE1hdGguUEkgLyAyKTtcbiAgICAgICAgICAgIHRleHQgPSBzLm1lbWJlcnNbaV07XG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgLWN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCAvIDIsIDApO1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL0Fycm93XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY3R4Lm1vdmVUbyhzLnJhZGl1cyAtIDQsIHMucmFkaXVzIC0gKHMub3V0c2lkZVJhZGl1cyArIDUpKTtcbiAgICAgICAgICBjdHgubGluZVRvKHMucmFkaXVzICsgNCwgcy5yYWRpdXMgLSAocy5vdXRzaWRlUmFkaXVzICsgNSkpO1xuICAgICAgICAgIGN0eC5saW5lVG8ocy5yYWRpdXMgKyA0LCBzLnJhZGl1cyAtIChzLm91dHNpZGVSYWRpdXMgLSA1KSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhzLnJhZGl1cyArIDksIHMucmFkaXVzIC0gKHMub3V0c2lkZVJhZGl1cyAtIDUpKTtcbiAgICAgICAgICBjdHgubGluZVRvKHMucmFkaXVzICsgMCwgcy5yYWRpdXMgLSAocy5vdXRzaWRlUmFkaXVzIC0gMTMpKTtcbiAgICAgICAgICBjdHgubGluZVRvKHMucmFkaXVzIC0gOSwgcy5yYWRpdXMgLSAocy5vdXRzaWRlUmFkaXVzIC0gNSkpO1xuICAgICAgICAgIGN0eC5saW5lVG8ocy5yYWRpdXMgLSA0LCBzLnJhZGl1cyAtIChzLm91dHNpZGVSYWRpdXMgLSA1KSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhzLnJhZGl1cyAtIDQsIHMucmFkaXVzIC0gKHMub3V0c2lkZVJhZGl1cyArIDUpKTtcbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmVhc2VPdXQgPSBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG4gICAgICAgIHZhciB0cyxcbiAgICAgICAgICAgIHRjO1xuXG4gICAgICAgIHRzID0gKHQvPWQpKnQ7XG4gICAgICAgIHRjID0gdHMqdDtcbiAgICAgICAgcmV0dXJuIGIrYyoodGMgKyAtMyp0cyArIDMqdCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3BpbkFuZ2xlO1xuICAgICAgICBzLnNwaW5UaW1lICs9IDMwO1xuICAgICAgICBpZigocy5zcGluVGltZSArIDUwMDApID49IHMuc3BpblRpbWVUb3RhbCkge1xuICAgICAgICAgIF90aGlzLnN0b3AoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3BpbkFuZ2xlID0gcy5zcGluQW5nbGVTdGFydCAtIF90aGlzLmVhc2VPdXQocy5zcGluVGltZSwgMCwgcy5zcGluQW5nbGVTdGFydCwgcy5zcGluVGltZVRvdGFsKTtcbiAgICAgICAgcy5zdGFydEFuZ2xlICs9IChzcGluQW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgX3RoaXMuZHJhdygpO1xuICAgICAgICBzLnNwaW5UaW1lb3V0ID0gc2V0VGltZW91dChfdGhpcy5yb3RhdGUsIDMwKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc3BpbiA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgICAgX3RoaXMuY2IgPSBjYjtcbiAgICAgICAgICBzLnNwaW5BbmdsZVN0YXJ0ID0gTWF0aC5yYW5kb20oKSAqIDEwICsgMTA7XG4gICAgICAgICAgcy5zcGluVGltZSA9IDA7XG4gICAgICAgICAgcy5zcGluVGltZVRvdGFsID0gTWF0aC5yYW5kb20oKSAqIDMgKyA0ICogMzAwMDtcbiAgICAgICAgICBfdGhpcy5yb3RhdGUoKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVncmVlcztcbiAgICAgICAgdmFyIGFyY2Q7XG4gICAgICAgIHZhciBpbmRleDtcblxuICAgICAgICBjbGVhclRpbWVvdXQocy5zcGluVGltZW91dCk7XG4gICAgICAgIGRlZ3JlZXMgPSBzLnN0YXJ0QW5nbGUgKiAxODAgLyBNYXRoLlBJICsgOTA7XG4gICAgICAgIGFyY2QgPSBzLmFyYyAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcigoMzYwIC0gZGVncmVlcyAlIDM2MCkgLyBhcmNkKTtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgX3RoaXMuZG9uZShzLm1lbWJlcnNbaW5kZXhdKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZG9uZSA9IGZ1bmN0aW9uKG1lbWJlcikge1xuICAgICAgICBfdGhpcy5jYihtZW1iZXIpO1xuICAgICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbml0OiBfdGhpcy5kcmF3LFxuICAgICAgc3BpbjogX3RoaXMuc3BpblxuICAgIH07XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHJpemVXaGVlbDtcbiAgICB9XG4gICAgZXhwb3J0cy5Qcml6ZVdoZWVsID0gUHJpemVXaGVlbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFByaXplV2hlZWw7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Qcml6ZVdoZWVsID0gUHJpemVXaGVlbDtcbiAgfVxuXG59KSh0aGlzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/prize-wheel/prize-wheel.js\n");

/***/ })

})