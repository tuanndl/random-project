module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: HomeScreen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeScreen\", function() { return HomeScreen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ \"./components/random/index.js\");\nvar _jsxFileName = \"/Users/macbook/Git/random-project/components/Home.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import ActionCreator from \"../redux/actionCreators\";\n\nclass HomeScreen extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }\n    }, __jsx(_random__WEBPACK_IMPORTED_MODULE_2__[\"RandomNumber\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  translate: state.translate\n}); // const mapDispatchToProps = dispatch => ({\n//   translRequest: (lang, mode) => dispatch(ActionCreator.translationRequest(lang, mode)),\n// });\n// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(HomeScreen)); // export default HomeScreen;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUuanM/MWJkZiJdLCJuYW1lcyI6WyJIb21lU2NyZWVuIiwiQ29tcG9uZW50IiwicmVuZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0cmFuc2xhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBRU8sTUFBTUEsVUFBTixTQUF5QkMsK0NBQXpCLENBQW1DO0FBQ3hDQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRDs7QUFQdUM7O0FBVTFDLE1BQU1DLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDQyxXQUFTLEVBQUVELEtBQUssQ0FBQ0M7QUFEaUIsQ0FBWixDQUF4QixDLENBSUE7QUFDQTtBQUNBO0FBRUE7OztBQUNlQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJILFVBQXpCLENBQWYsRSxDQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ib21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJhbmRvbU51bWJlciB9IGZyb20gXCIuL3JhbmRvbVwiO1xuXG4vLyBpbXBvcnQgQWN0aW9uQ3JlYXRvciBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uQ3JlYXRvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEhvbWVTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPFJhbmRvbU51bWJlciAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdHJhbnNsYXRlOiBzdGF0ZS50cmFuc2xhdGUsXG59KTtcblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbi8vICAgdHJhbnNsUmVxdWVzdDogKGxhbmcsIG1vZGUpID0+IGRpc3BhdGNoKEFjdGlvbkNyZWF0b3IudHJhbnNsYXRpb25SZXF1ZXN0KGxhbmcsIG1vZGUpKSxcbi8vIH0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lU2NyZWVuKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lU2NyZWVuKTtcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVTY3JlZW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ }),

/***/ "./components/footer/Footer.js":
/*!*************************************!*\
  !*** ./components/footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/macbook/Git/random-project/components/footer/Footer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Footer = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 10\n    }\n  }, \"Footer\");\n};\n\nFooter.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXIuanM/YzUwOSJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFDeEIsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxDQUZEOztBQUlBRCxNQUFNLENBQUNFLFNBQVAsR0FBbUIsRUFBbkI7QUFFZUYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPGRpdj5Gb290ZXI8L2Rpdj47XG59O1xuXG5Gb290ZXIucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/Footer.js\n");

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./components/footer/Footer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5qcz9hYTI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer/index.js\n");

/***/ }),

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ \"./components/header/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/macbook/Git/random-project/components/header/Header.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Header = props => {\n  return __jsx(\"div\", {\n    className: \"header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"header--title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"RANDOM\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }));\n};\n\nHeader.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanM/MDc3YyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBUEQ7O0FBU0FELE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQixFQUFuQjtBQUVlRixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IFwiLi9IZWFkZXIuc2Nzc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItLXRpdGxlXCI+UkFORE9NPC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/Header.js\n");

/***/ }),

/***/ "./components/header/Header.scss":
/*!***************************************!*\
  !*** ./components/header/Header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/Header.scss\n");

/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./components/header/Header.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcz80MzI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/index.js\n");

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Home, Footer, Header, RandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./components/Home.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./components/footer/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _footer__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"]; });\n\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./components/header/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"]; });\n\n/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random */ \"./components/random/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RandomNumber\", function() { return _random__WEBPACK_IMPORTED_MODULE_3__[\"RandomNumber\"]; });\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzPzdiZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBIb21lIH0gZnJvbSBcIi4vSG9tZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZm9vdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9oZWFkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JhbmRvbVwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n");

/***/ }),

/***/ "./components/random/RandomNumber.js":
/*!*******************************************!*\
  !*** ./components/random/RandomNumber.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RandomNumber_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RandomNumber.scss */ \"./components/random/RandomNumber.scss\");\n/* harmony import */ var _RandomNumber_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RandomNumber_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/macbook/Git/random-project/components/random/RandomNumber.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst randomNumber = props => {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    min: 1,\n    max: 100\n  });\n  const {\n    0: result,\n    1: setResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const onChange = e => {\n    let {\n      name,\n      value\n    } = e.target;\n    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {\n      [name]: parseInt(value)\n    }));\n  };\n\n  const getRandomInt = max => {\n    return Math.floor(Math.random() * Math.floor(max));\n  };\n\n  const random = () => {\n    let {\n      max,\n      min\n    } = state;\n\n    if (min > max) {\n      max = min + 1;\n    }\n\n    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {\n      max\n    }));\n    return setResult(getRandomInt(max - min) + min);\n  };\n\n  return __jsx(\"div\", {\n    className: \"random--number\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Quay s\\u1ED1 ng\\u1EABu nhi\\xEAn\"), __jsx(\"div\", {\n    className: \"random--div\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Min:\"), __jsx(\"input\", {\n    name: \"min\",\n    value: state.min,\n    onChange: onChange,\n    type: \"number\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Max:\"), __jsx(\"input\", {\n    name: \"max\",\n    value: state.max,\n    onChange: onChange,\n    type: \"number\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    className: \"btn-sm\",\n    onClick: random,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Quay s\\u1ED1\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"result\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"K\\u1EBFt qu\\u1EA3: \", __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 20\n    }\n  }, result !== null ? result : \"\"))));\n};\n\nrandomNumber.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (randomNumber);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhbmRvbS9SYW5kb21OdW1iZXIuanM/ZWFhMiJdLCJuYW1lcyI6WyJyYW5kb21OdW1iZXIiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsIm1pbiIsIm1heCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJwYXJzZUludCIsImdldFJhbmRvbUludCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM5QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUM7QUFBRUMsT0FBRyxFQUFFLENBQVA7QUFBVUMsT0FBRyxFQUFFO0FBQWYsR0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosc0RBQVEsQ0FBQyxJQUFELENBQXBDOztBQUVBLFFBQU1LLFFBQVEsR0FBSUMsQ0FBRCxJQUFPO0FBQ3RCLFFBQUk7QUFBRUMsVUFBRjtBQUFRQztBQUFSLFFBQWtCRixDQUFDLENBQUNHLE1BQXhCO0FBQ0FWLFlBQVEsQ0FBRVcsSUFBRCxvQ0FBZ0JBLElBQWhCO0FBQXNCLE9BQUNILElBQUQsR0FBUUksUUFBUSxDQUFDSCxLQUFEO0FBQXRDLE1BQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsUUFBTUksWUFBWSxHQUFJVixHQUFELElBQVM7QUFDNUIsV0FBT1csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVdaLEdBQVgsQ0FBM0IsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTWEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBSTtBQUFFYixTQUFGO0FBQU9EO0FBQVAsUUFBZUgsS0FBbkI7O0FBQ0EsUUFBSUcsR0FBRyxHQUFHQyxHQUFWLEVBQWU7QUFDYkEsU0FBRyxHQUFHRCxHQUFHLEdBQUcsQ0FBWjtBQUNEOztBQUVERixZQUFRLENBQUVXLElBQUQsb0NBQWdCQSxJQUFoQjtBQUFzQlI7QUFBdEIsTUFBRCxDQUFSO0FBRUEsV0FBT0UsU0FBUyxDQUFDUSxZQUFZLENBQUNWLEdBQUcsR0FBR0QsR0FBUCxDQUFaLEdBQTBCQSxHQUEzQixDQUFoQjtBQUNELEdBVEQ7O0FBV0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERixFQUVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLEtBQVo7QUFBa0IsU0FBSyxFQUFFSCxLQUFLLENBQUNHLEdBQS9CO0FBQW9DLFlBQVEsRUFBRUksUUFBOUM7QUFBd0QsUUFBSSxFQUFDLFFBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLEtBQVo7QUFBa0IsU0FBSyxFQUFFUCxLQUFLLENBQUNJLEdBQS9CO0FBQW9DLFlBQVEsRUFBRUcsUUFBOUM7QUFBd0QsUUFBSSxFQUFDLFFBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQU5GLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBRVUsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVhGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPWixNQUFNLEtBQUssSUFBWCxHQUFrQkEsTUFBbEIsR0FBMkIsRUFBbEMsQ0FEWCxDQURGLENBakJGLENBREY7QUF5QkQsQ0FqREQ7O0FBbURBUCxZQUFZLENBQUNvQixTQUFiLEdBQXlCLEVBQXpCO0FBRWVwQiwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmFuZG9tL1JhbmRvbU51bWJlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgXCIuL1JhbmRvbU51bWJlci5zY3NzXCI7XG5cbmNvbnN0IHJhbmRvbU51bWJlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHsgbWluOiAxLCBtYXg6IDEwMCB9KTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogcGFyc2VJbnQodmFsdWUpIH0pKTtcbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21JbnQgPSAobWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tID0gKCkgPT4ge1xuICAgIGxldCB7IG1heCwgbWluIH0gPSBzdGF0ZTtcbiAgICBpZiAobWluID4gbWF4KSB7XG4gICAgICBtYXggPSBtaW4gKyAxO1xuICAgIH1cblxuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBtYXggfSkpO1xuXG4gICAgcmV0dXJuIHNldFJlc3VsdChnZXRSYW5kb21JbnQobWF4IC0gbWluKSArIG1pbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmRvbS0tbnVtYmVyXCI+XG4gICAgICA8aDM+UXVheSBz4buRIG5n4bqrdSBuaGnDqm48L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5kb20tLWRpdlwiPlxuICAgICAgICA8bGFiZWw+TWluOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwibWluXCIgdmFsdWU9e3N0YXRlLm1pbn0gb25DaGFuZ2U9e29uQ2hhbmdlfSB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPk1heDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm1heFwiIHZhbHVlPXtzdGF0ZS5tYXh9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gdHlwZT1cIm51bWJlclwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc21cIiBvbkNsaWNrPXtyYW5kb219PlxuICAgICAgICAgIFF1YXkgc+G7kVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgICAgICBL4bq/dCBxdeG6ozogPHNwYW4+e3Jlc3VsdCAhPT0gbnVsbCA/IHJlc3VsdCA6IFwiXCJ9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnJhbmRvbU51bWJlci5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tTnVtYmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/random/RandomNumber.js\n");

/***/ }),

/***/ "./components/random/RandomNumber.scss":
/*!*********************************************!*\
  !*** ./components/random/RandomNumber.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmFuZG9tL1JhbmRvbU51bWJlci5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/random/RandomNumber.scss\n");

/***/ }),

/***/ "./components/random/index.js":
/*!************************************!*\
  !*** ./components/random/index.js ***!
  \************************************/
/*! exports provided: RandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RandomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomNumber */ \"./components/random/RandomNumber.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RandomNumber\", function() { return _RandomNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhbmRvbS9pbmRleC5qcz81YmNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yYW5kb20vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIFJhbmRvbU51bWJlciB9IGZyb20gXCIuL1JhbmRvbU51bWJlclwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/random/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actionCreators */ \"./redux/actionCreators.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\nvar _jsxFileName = \"/Users/macbook/Git/random-project/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  static async getInitialProps({\n    ctx\n  }) {\n    const {\n      store,\n      isServer\n    } = ctx;\n    store.dispatch(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].translationRequest(\"es\"));\n    return {\n      isServer\n    };\n  }\n\n  componentDidMount() {\n    const {\n      dispatch,\n      isServer,\n      translate\n    } = this.props;\n\n    if (isServer && !translate) {\n      dispatch(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].translationRequest(\"es\"));\n    }\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }, \"My website\"), __jsx(\"meta\", {\n      name: \"title\",\n      content: \"my website\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      description: \"Here is the description\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      rel: \"preconnect\",\n      href: \"https://fonts.gstatic.com\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    }), __jsx(\"link\", {\n      href: \"https://fonts.googleapis.com/css2?family=Anton&display=swap\",\n      rel: \"stylesheet\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    })), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Home\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__[\"Footer\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])()(Index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic3RvcmUiLCJpc1NlcnZlciIsImRpc3BhdGNoIiwiQWN0aW9uQ3JlYXRvciIsInRyYW5zbGF0aW9uUmVxdWVzdCIsImNvbXBvbmVudERpZE1vdW50IiwidHJhbnNsYXRlIiwicHJvcHMiLCJyZW5kZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQzVCLGVBQWFDLGVBQWIsQ0FBNkI7QUFBRUM7QUFBRixHQUE3QixFQUFzQztBQUNwQyxVQUFNO0FBQUVDLFdBQUY7QUFBU0M7QUFBVCxRQUFzQkYsR0FBNUI7QUFFQUMsU0FBSyxDQUFDRSxRQUFOLENBQWVDLDZEQUFhLENBQUNDLGtCQUFkLENBQWlDLElBQWpDLENBQWY7QUFFQSxXQUFPO0FBQUVIO0FBQUYsS0FBUDtBQUNEOztBQUVESSxtQkFBaUIsR0FBRztBQUNsQixVQUFNO0FBQUVILGNBQUY7QUFBWUQsY0FBWjtBQUFzQks7QUFBdEIsUUFBb0MsS0FBS0MsS0FBL0M7O0FBRUEsUUFBSU4sUUFBUSxJQUFJLENBQUNLLFNBQWpCLEVBQTRCO0FBQzFCSixjQUFRLENBQUNDLDZEQUFhLENBQUNDLGtCQUFkLENBQWlDLElBQWpDLENBQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRURJLFFBQU0sR0FBRztBQUNQLFdBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBbUIsYUFBTyxFQUFDLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQU0saUJBQVcsRUFBQyx5QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUU7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsMkJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFO0FBQ0UsVUFBSSxFQUFDLDZEQURQO0FBRUUsU0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBREYsRUFZRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFaRixFQWNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRGLEVBZ0JFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWhCRixDQURGO0FBb0JEOztBQXRDMkI7O0FBeUNmQywwSEFBTyxHQUFHYixLQUFILENBQXRCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgQWN0aW9uQ3JlYXRvciBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uQ3JlYXRvcnNcIjtcblxuaW1wb3J0IHsgSG9tZSwgSGVhZGVyLCBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBjdHggfSkge1xuICAgIGNvbnN0IHsgc3RvcmUsIGlzU2VydmVyIH0gPSBjdHg7XG5cbiAgICBzdG9yZS5kaXNwYXRjaChBY3Rpb25DcmVhdG9yLnRyYW5zbGF0aW9uUmVxdWVzdChcImVzXCIpKTtcblxuICAgIHJldHVybiB7IGlzU2VydmVyIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc3BhdGNoLCBpc1NlcnZlciwgdHJhbnNsYXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzU2VydmVyICYmICF0cmFuc2xhdGUpIHtcbiAgICAgIGRpc3BhdGNoKEFjdGlvbkNyZWF0b3IudHJhbnNsYXRpb25SZXF1ZXN0KFwiZXNcIikpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TXkgd2Vic2l0ZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIm15IHdlYnNpdGVcIiAvPlxuICAgICAgICAgIDxtZXRhIGRlc2NyaXB0aW9uPVwiSGVyZSBpcyB0aGUgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiPjwvbGluaz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPEhvbWUgLz5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEluZGV4KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./redux/actionCreators.js":
/*!*********************************!*\
  !*** ./redux/actionCreators.js ***!
  \*********************************/
/*! exports provided: Types, Creators, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return Types; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Creators\", function() { return Creators; });\n/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxsauce */ \"reduxsauce\");\n/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  Types,\n  Creators\n} = Object(reduxsauce__WEBPACK_IMPORTED_MODULE_0__[\"createActions\"])({\n  translationRequest: [\"language\", \"mode\"],\n  translationSuccess: [\"translation\"],\n  translationFailure: [\"error\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Creators);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25DcmVhdG9ycy5qcz8xZmRiIl0sIm5hbWVzIjpbIlR5cGVzIiwiQ3JlYXRvcnMiLCJjcmVhdGVBY3Rpb25zIiwidHJhbnNsYXRpb25SZXF1ZXN0IiwidHJhbnNsYXRpb25TdWNjZXNzIiwidHJhbnNsYXRpb25GYWlsdXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNO0FBQUVBLE9BQUY7QUFBU0M7QUFBVCxJQUFzQkMsZ0VBQWEsQ0FBQztBQUMvQ0Msb0JBQWtCLEVBQUUsQ0FBQyxVQUFELEVBQWEsTUFBYixDQUQyQjtBQUUvQ0Msb0JBQWtCLEVBQUUsQ0FBQyxhQUFELENBRjJCO0FBRy9DQyxvQkFBa0IsRUFBRSxDQUFDLE9BQUQ7QUFIMkIsQ0FBRCxDQUF6QztBQU1RSix1RUFBZiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbkNyZWF0b3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9ucyB9IGZyb20gXCJyZWR1eHNhdWNlXCI7XG5cbmV4cG9ydCBjb25zdCB7IFR5cGVzLCBDcmVhdG9ycyB9ID0gY3JlYXRlQWN0aW9ucyh7XG4gIHRyYW5zbGF0aW9uUmVxdWVzdDogW1wibGFuZ3VhZ2VcIiwgXCJtb2RlXCJdLFxuICB0cmFuc2xhdGlvblN1Y2Nlc3M6IFtcInRyYW5zbGF0aW9uXCJdLFxuICB0cmFuc2xhdGlvbkZhaWx1cmU6IFtcImVycm9yXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actionCreators.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "reduxsauce":
/*!*****************************!*\
  !*** external "reduxsauce" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reduxsauce\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eHNhdWNlXCI/OWFhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eHNhdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhzYXVjZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reduxsauce\n");

/***/ })

/******/ });