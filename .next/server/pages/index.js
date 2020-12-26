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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeScreen\", function() { return HomeScreen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/macbook/Git/random-project/components/Home.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import ActionCreator from \"../redux/actionCreators\";\n\nconst showHomePhrase = ({\n  mainPhrase\n}) => __jsx(\"h2\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 44\n  }\n}, mainPhrase);\n\nclass HomeScreen extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  // state = {\n  //   languageUser: {},\n  // }\n  // componentDidMount() {\n  //   //   const { languageUser } = this.state;\n  //   console.log(\"--- call init HOME props: \", this.props);\n  //   const { dispatch, translate } = this.props;\n  //   if (!translate || translate === {}) {\n  //     dispatch(ActionCreator.translationRequest(\"es\"));\n  //   }\n  // }\n  render() {\n    // const { translate } = this.props;\n    // const translationLoaded = (!!translate && translate.translationLoaded) || false;\n    // const translation = (!!translate && translate.translation) || false;\n    // console.log(\"--- Home render props: \", translation);\n    // const screens = !!translation.translate ? translation.translate.screens : {};\n    // const homepage = !!screens ? screens.homepage : {};\n    // if (!translationLoaded && !homepage) {\n    //   return <div>Loading translation...</div>\n    // }\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }\n    }, \"mY website.com\"));\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  translate: state.translate\n}); // const mapDispatchToProps = dispatch => ({\n//   translRequest: (lang, mode) => dispatch(ActionCreator.translationRequest(lang, mode)),\n// });\n// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(HomeScreen)); // export default HomeScreen;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUuanM/MWJkZiJdLCJuYW1lcyI6WyJzaG93SG9tZVBocmFzZSIsIm1haW5QaHJhc2UiLCJIb21lU2NyZWVuIiwiQ29tcG9uZW50IiwicmVuZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ0cmFuc2xhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBS0EsVUFBTCxDQUEzQzs7QUFFTyxNQUFNQyxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxRQUFNLEdBQUc7QUFDUDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxXQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERjtBQUtEOztBQWhDdUM7O0FBbUMxQyxNQUFNQyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0MsV0FBUyxFQUFFRCxLQUFLLENBQUNDO0FBRGlCLENBQVosQ0FBeEIsQyxDQUlBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCSCxVQUF6QixDQUFmLEUsQ0FDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbi8vIGltcG9ydCBBY3Rpb25DcmVhdG9yIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25DcmVhdG9yc1wiO1xuXG5jb25zdCBzaG93SG9tZVBocmFzZSA9ICh7IG1haW5QaHJhc2UgfSkgPT4gPGgyPnttYWluUGhyYXNlfTwvaDI+O1xuXG5leHBvcnQgY2xhc3MgSG9tZVNjcmVlbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHN0YXRlID0ge1xuICAvLyAgIGxhbmd1YWdlVXNlcjoge30sXG4gIC8vIH1cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgLy8gICBjb25zdCB7IGxhbmd1YWdlVXNlciB9ID0gdGhpcy5zdGF0ZTtcbiAgLy8gICBjb25zb2xlLmxvZyhcIi0tLSBjYWxsIGluaXQgSE9NRSBwcm9wczogXCIsIHRoaXMucHJvcHMpO1xuICAvLyAgIGNvbnN0IHsgZGlzcGF0Y2gsIHRyYW5zbGF0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAvLyAgIGlmICghdHJhbnNsYXRlIHx8IHRyYW5zbGF0ZSA9PT0ge30pIHtcbiAgLy8gICAgIGRpc3BhdGNoKEFjdGlvbkNyZWF0b3IudHJhbnNsYXRpb25SZXF1ZXN0KFwiZXNcIikpO1xuICAvLyAgIH1cbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3QgeyB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY29uc3QgdHJhbnNsYXRpb25Mb2FkZWQgPSAoISF0cmFuc2xhdGUgJiYgdHJhbnNsYXRlLnRyYW5zbGF0aW9uTG9hZGVkKSB8fCBmYWxzZTtcbiAgICAvLyBjb25zdCB0cmFuc2xhdGlvbiA9ICghIXRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUudHJhbnNsYXRpb24pIHx8IGZhbHNlO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0gSG9tZSByZW5kZXIgcHJvcHM6IFwiLCB0cmFuc2xhdGlvbik7XG5cbiAgICAvLyBjb25zdCBzY3JlZW5zID0gISF0cmFuc2xhdGlvbi50cmFuc2xhdGUgPyB0cmFuc2xhdGlvbi50cmFuc2xhdGUuc2NyZWVucyA6IHt9O1xuICAgIC8vIGNvbnN0IGhvbWVwYWdlID0gISFzY3JlZW5zID8gc2NyZWVucy5ob21lcGFnZSA6IHt9O1xuXG4gICAgLy8gaWYgKCF0cmFuc2xhdGlvbkxvYWRlZCAmJiAhaG9tZXBhZ2UpIHtcbiAgICAvLyAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdHJhbnNsYXRpb24uLi48L2Rpdj5cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8aDE+bVkgd2Vic2l0ZS5jb208L2gxPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdHJhbnNsYXRlOiBzdGF0ZS50cmFuc2xhdGUsXG59KTtcblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbi8vICAgdHJhbnNsUmVxdWVzdDogKGxhbmcsIG1vZGUpID0+IGRpc3BhdGNoKEFjdGlvbkNyZWF0b3IudHJhbnNsYXRpb25SZXF1ZXN0KGxhbmcsIG1vZGUpKSxcbi8vIH0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lU2NyZWVuKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lU2NyZWVuKTtcbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWVTY3JlZW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actionCreators */ \"./redux/actionCreators.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home */ \"./components/Home.js\");\nvar _jsxFileName = \"/Users/macbook/Git/random-project/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  static async getInitialProps({\n    ctx\n  }) {\n    const {\n      store,\n      isServer\n    } = ctx;\n    store.dispatch(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].translationRequest(\"es\"));\n    return {\n      isServer\n    };\n  }\n\n  componentDidMount() {\n    const {\n      dispatch,\n      isServer,\n      translate\n    } = this.props;\n\n    if (isServer && !translate) {\n      dispatch(_redux_actionCreators__WEBPACK_IMPORTED_MODULE_3__[\"default\"].translationRequest(\"es\"));\n    }\n  }\n\n  render() {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }, \"My website\"), __jsx(\"meta\", {\n      name: \"title\",\n      content: \"my website\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }), __jsx(\"meta\", {\n      description: \"Here is the description\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    })), __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])()(Index));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic3RvcmUiLCJpc1NlcnZlciIsImRpc3BhdGNoIiwiQWN0aW9uQ3JlYXRvciIsInRyYW5zbGF0aW9uUmVxdWVzdCIsImNvbXBvbmVudERpZE1vdW50IiwidHJhbnNsYXRlIiwicHJvcHMiLCJyZW5kZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQzVCLGVBQWFDLGVBQWIsQ0FBNkI7QUFBRUM7QUFBRixHQUE3QixFQUFzQztBQUNwQyxVQUFNO0FBQUVDLFdBQUY7QUFBU0M7QUFBVCxRQUFzQkYsR0FBNUI7QUFFQUMsU0FBSyxDQUFDRSxRQUFOLENBQWVDLDZEQUFhLENBQUNDLGtCQUFkLENBQWlDLElBQWpDLENBQWY7QUFFQSxXQUFPO0FBQUVIO0FBQUYsS0FBUDtBQUNEOztBQUVESSxtQkFBaUIsR0FBRztBQUNsQixVQUFNO0FBQUVILGNBQUY7QUFBWUQsY0FBWjtBQUFzQks7QUFBdEIsUUFBb0MsS0FBS0MsS0FBL0M7O0FBRUEsUUFBSU4sUUFBUSxJQUFJLENBQUNLLFNBQWpCLEVBQTRCO0FBQzFCSixjQUFRLENBQUNDLDZEQUFhLENBQUNDLGtCQUFkLENBQWlDLElBQWpDLENBQUQsQ0FBUjtBQUNEO0FBQ0Y7O0FBRURJLFFBQU0sR0FBRztBQUNQLFdBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBbUIsYUFBTyxFQUFDLFlBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQU0saUJBQVcsRUFBQyx5QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREYsRUFPRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixDQURGO0FBV0Q7O0FBN0IyQjs7QUFnQ2ZDLDBIQUFPLEdBQUdiLEtBQUgsQ0FBdEIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBBY3Rpb25DcmVhdG9yIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25DcmVhdG9yc1wiO1xuXG5pbXBvcnQgSG9tZVNjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IGN0eCB9KSB7XG4gICAgY29uc3QgeyBzdG9yZSwgaXNTZXJ2ZXIgfSA9IGN0eDtcblxuICAgIHN0b3JlLmRpc3BhdGNoKEFjdGlvbkNyZWF0b3IudHJhbnNsYXRpb25SZXF1ZXN0KFwiZXNcIikpO1xuXG4gICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGlzU2VydmVyLCB0cmFuc2xhdGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgIXRyYW5zbGF0ZSkge1xuICAgICAgZGlzcGF0Y2goQWN0aW9uQ3JlYXRvci50cmFuc2xhdGlvblJlcXVlc3QoXCJlc1wiKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5NeSB3ZWJzaXRlPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PVwibXkgd2Vic2l0ZVwiIC8+XG4gICAgICAgICAgPG1ldGEgZGVzY3JpcHRpb249XCJIZXJlIGlzIHRoZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8SG9tZVNjcmVlbiAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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