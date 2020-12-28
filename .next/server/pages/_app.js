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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./config/translates sync recursive ^\\.\\/.*\\.json$":
/*!***********************************************!*\
  !*** ./config/translates sync ^\.\/.*\.json$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./en.json\": \"./config/translates/en.json\",\n\t\"./es.json\": \"./config/translates/es.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./config/translates sync recursive ^\\\\.\\\\/.*\\\\.json$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvdHJhbnNsYXRlcyBzeW5jIF5cXC5cXC8uKlxcLmpzb24kPzNlN2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbmZpZy90cmFuc2xhdGVzIHN5bmMgcmVjdXJzaXZlIF5cXC5cXC8uKlxcLmpzb24kLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2VuLmpzb25cIjogXCIuL2NvbmZpZy90cmFuc2xhdGVzL2VuLmpzb25cIixcblx0XCIuL2VzLmpzb25cIjogXCIuL2NvbmZpZy90cmFuc2xhdGVzL2VzLmpzb25cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9jb25maWcvdHJhbnNsYXRlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qc29uJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/translates sync recursive ^\\.\\/.*\\.json$\n");

/***/ }),

/***/ "./config/translates/en.json":
/*!***********************************!*\
  !*** ./config/translates/en.json ***!
  \***********************************/
/*! exports provided: language, screens, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"language\\\":\\\"en\\\",\\\"screens\\\":{\\\"homepage\\\":{\\\"mainPhrase\\\":\\\"Here my main phrase\\\"}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbmZpZy90cmFuc2xhdGVzL2VuLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/translates/en.json\n");

/***/ }),

/***/ "./config/translates/es.json":
/*!***********************************!*\
  !*** ./config/translates/es.json ***!
  \***********************************/
/*! exports provided: language, screens, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"language\\\":\\\"es\\\",\\\"screens\\\":{\\\"homepage\\\":{\\\"mainPhrase\\\":\\\"Aquí mi primer mensaje\\\"}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbmZpZy90cmFuc2xhdGVzL2VzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/translates/es.json\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Esa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\nvar _jsxFileName = \"/Users/phamanhminh/random-project/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {\n  static async getInitialProps({\n    Component,\n    ctx\n  }) {\n    let pageProps = {};\n\n    if (Component.getInitialProps) {\n      pageProps = await Component.getInitialProps({\n        ctx\n      });\n    }\n\n    return {\n      pageProps\n    };\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps,\n      store\n    } = this.props;\n    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }\n    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: store,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    }, __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }\n    }))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()({\n  async: true\n})(MyApp)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJyZW5kZXIiLCJzdG9yZSIsInByb3BzIiwid2l0aFJlZHV4IiwiY3JlYXRlU3RvcmUiLCJ3aXRoUmVkdXhTYWdhIiwiYXN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUN0QixlQUFhQyxlQUFiLENBQTZCO0FBQUNDLGFBQUQ7QUFBWUM7QUFBWixHQUE3QixFQUErQztBQUM3QyxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsUUFBSUYsU0FBUyxDQUFDRCxlQUFkLEVBQStCO0FBQzdCRyxlQUFTLEdBQUcsTUFBTUYsU0FBUyxDQUFDRCxlQUFWLENBQTBCO0FBQUNFO0FBQUQsT0FBMUIsQ0FBbEI7QUFDRDs7QUFDRCxXQUFPO0FBQUNDO0FBQUQsS0FBUDtBQUNEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUNILGVBQUQ7QUFBWUUsZUFBWjtBQUF1QkU7QUFBdkIsUUFBZ0MsS0FBS0MsS0FBM0M7QUFDQSxXQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVELEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFNBQUQsZUFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FERixDQURGO0FBT0Q7O0FBbkJxQjs7QUFzQlRJLHdIQUFTLENBQUNDLG9EQUFELENBQVQsQ0FBdUJDLHNEQUFhLENBQUM7QUFBQ0MsT0FBSyxFQUFFO0FBQVIsQ0FBRCxDQUFiLENBQTZCWixLQUE3QixDQUF2QixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSdcblxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCwgY3R4fSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoe2N0eH0pXG4gICAgfVxuICAgIHJldHVybiB7cGFnZVByb3BzfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNyZWF0ZVN0b3JlKSh3aXRoUmVkdXhTYWdhKHthc3luYzogdHJ1ZX0pKE15QXBwKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ \"./redux/reducers/translate.js\");\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  translate: _translate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcz9lYWY0Il0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidHJhbnNsYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENDLCtEQUFTQTtBQUR5QixDQUFELENBQW5DO0FBSWVGLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tIFwiLi90cmFuc2xhdGVcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0cmFuc2xhdGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/reducers/translate.js":
/*!*************************************!*\
  !*** ./redux/reducers/translate.js ***!
  \*************************************/
/*! exports provided: INITIAL_STATE, translationRequest, translationSuccess, translationFailure, HANDLERS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INITIAL_STATE\", function() { return INITIAL_STATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translationRequest\", function() { return translationRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translationSuccess\", function() { return translationSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translationFailure\", function() { return translationFailure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HANDLERS\", function() { return HANDLERS; });\n/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reduxsauce */ \"reduxsauce\");\n/* harmony import */ var reduxsauce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reduxsauce__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionCreators */ \"./redux/actionCreators.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst INITIAL_STATE = {\n  parseTranslatesLoaded: false,\n  translationLoaded: false,\n  translation: {},\n  error: false,\n  errorMessage: \"\"\n}; // ------\n\nconst translationRequest = (state = INITIAL_STATE, action) => _objectSpread(_objectSpread({}, state), {}, {\n  parseTranslatesLoaded: false,\n  translationLoaded: false\n});\nconst translationSuccess = (state = INITIAL_STATE, action) => _objectSpread(_objectSpread({}, state), {}, {\n  parseTranslatesLoaded: true,\n  translationLoaded: true,\n  translation: action.translation,\n  error: false\n});\nconst translationFailure = (state = INITIAL_STATE, action) => _objectSpread(_objectSpread({}, state), {}, {\n  parseTranslatesLoaded: false,\n  translationLoaded: false,\n  translation: {},\n  error: true,\n  errorMessage: action.error\n}); // ------\n\nconst HANDLERS = {\n  [_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"Types\"].TRANSLATION_REQUEST]: translationRequest,\n  [_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"Types\"].TRANSLATION_SUCCESS]: translationSuccess,\n  [_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"Types\"].TRANSLATION_FAILURE]: translationFailure\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(reduxsauce__WEBPACK_IMPORTED_MODULE_0__[\"createReducer\"])(INITIAL_STATE, HANDLERS));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy90cmFuc2xhdGUuanM/NGVhZiJdLCJuYW1lcyI6WyJJTklUSUFMX1NUQVRFIiwicGFyc2VUcmFuc2xhdGVzTG9hZGVkIiwidHJhbnNsYXRpb25Mb2FkZWQiLCJ0cmFuc2xhdGlvbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwidHJhbnNsYXRpb25SZXF1ZXN0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0cmFuc2xhdGlvblN1Y2Nlc3MiLCJ0cmFuc2xhdGlvbkZhaWx1cmUiLCJIQU5ETEVSUyIsIlR5cGVzIiwiVFJBTlNMQVRJT05fUkVRVUVTVCIsIlRSQU5TTEFUSU9OX1NVQ0NFU1MiLCJUUkFOU0xBVElPTl9GQUlMVVJFIiwiY3JlYXRlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLE1BQU1BLGFBQWEsR0FBRztBQUMzQkMsdUJBQXFCLEVBQUUsS0FESTtBQUUzQkMsbUJBQWlCLEVBQUUsS0FGUTtBQUczQkMsYUFBVyxFQUFFLEVBSGM7QUFJM0JDLE9BQUssRUFBRSxLQUpvQjtBQUszQkMsY0FBWSxFQUFFO0FBTGEsQ0FBdEIsQyxDQVFQOztBQUVPLE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLEtBQUssR0FBR1AsYUFBVCxFQUF3QlEsTUFBeEIscUNBQzdCRCxLQUQ2QjtBQUVoQ04sdUJBQXFCLEVBQUUsS0FGUztBQUdoQ0MsbUJBQWlCLEVBQUU7QUFIYSxFQUEzQjtBQU1BLE1BQU1PLGtCQUFrQixHQUFHLENBQUNGLEtBQUssR0FBR1AsYUFBVCxFQUF3QlEsTUFBeEIscUNBQzdCRCxLQUQ2QjtBQUVoQ04sdUJBQXFCLEVBQUUsSUFGUztBQUdoQ0MsbUJBQWlCLEVBQUUsSUFIYTtBQUloQ0MsYUFBVyxFQUFFSyxNQUFNLENBQUNMLFdBSlk7QUFLaENDLE9BQUssRUFBRTtBQUx5QixFQUEzQjtBQVFBLE1BQU1NLGtCQUFrQixHQUFHLENBQUNILEtBQUssR0FBR1AsYUFBVCxFQUF3QlEsTUFBeEIscUNBQzdCRCxLQUQ2QjtBQUVoQ04sdUJBQXFCLEVBQUUsS0FGUztBQUdoQ0MsbUJBQWlCLEVBQUUsS0FIYTtBQUloQ0MsYUFBVyxFQUFFLEVBSm1CO0FBS2hDQyxPQUFLLEVBQUUsSUFMeUI7QUFNaENDLGNBQVksRUFBRUcsTUFBTSxDQUFDSjtBQU5XLEVBQTNCLEMsQ0FTUDs7QUFFTyxNQUFNTyxRQUFRLEdBQUc7QUFDdEIsR0FBQ0MscURBQUssQ0FBQ0MsbUJBQVAsR0FBNkJQLGtCQURQO0FBRXRCLEdBQUNNLHFEQUFLLENBQUNFLG1CQUFQLEdBQTZCTCxrQkFGUDtBQUd0QixHQUFDRyxxREFBSyxDQUFDRyxtQkFBUCxHQUE2Qkw7QUFIUCxDQUFqQjtBQU1RTSwrSEFBYSxDQUFDaEIsYUFBRCxFQUFnQlcsUUFBaEIsQ0FBNUIiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy90cmFuc2xhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSBcInJlZHV4c2F1Y2VcIjtcblxuaW1wb3J0IHsgVHlwZXMgfSBmcm9tIFwiLi4vYWN0aW9uQ3JlYXRvcnNcIjtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHBhcnNlVHJhbnNsYXRlc0xvYWRlZDogZmFsc2UsXG4gIHRyYW5zbGF0aW9uTG9hZGVkOiBmYWxzZSxcbiAgdHJhbnNsYXRpb246IHt9LFxuICBlcnJvcjogZmFsc2UsXG4gIGVycm9yTWVzc2FnZTogXCJcIlxufTtcblxuLy8gLS0tLS0tXG5cbmV4cG9ydCBjb25zdCB0cmFuc2xhdGlvblJlcXVlc3QgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBwYXJzZVRyYW5zbGF0ZXNMb2FkZWQ6IGZhbHNlLFxuICB0cmFuc2xhdGlvbkxvYWRlZDogZmFsc2Vcbn0pO1xuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRpb25TdWNjZXNzID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgcGFyc2VUcmFuc2xhdGVzTG9hZGVkOiB0cnVlLFxuICB0cmFuc2xhdGlvbkxvYWRlZDogdHJ1ZSxcbiAgdHJhbnNsYXRpb246IGFjdGlvbi50cmFuc2xhdGlvbixcbiAgZXJyb3I6IGZhbHNlXG59KTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0aW9uRmFpbHVyZSA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHBhcnNlVHJhbnNsYXRlc0xvYWRlZDogZmFsc2UsXG4gIHRyYW5zbGF0aW9uTG9hZGVkOiBmYWxzZSxcbiAgdHJhbnNsYXRpb246IHt9LFxuICBlcnJvcjogdHJ1ZSxcbiAgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3Jcbn0pO1xuXG4vLyAtLS0tLS1cblxuZXhwb3J0IGNvbnN0IEhBTkRMRVJTID0ge1xuICBbVHlwZXMuVFJBTlNMQVRJT05fUkVRVUVTVF06IHRyYW5zbGF0aW9uUmVxdWVzdCxcbiAgW1R5cGVzLlRSQU5TTEFUSU9OX1NVQ0NFU1NdOiB0cmFuc2xhdGlvblN1Y2Nlc3MsXG4gIFtUeXBlcy5UUkFOU0xBVElPTl9GQUlMVVJFXTogdHJhbnNsYXRpb25GYWlsdXJlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKElOSVRJQUxfU1RBVEUsIEhBTkRMRVJTKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/translate.js\n");

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ \"./redux/sagas/translate.js\");\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy9pbmRleC5qcz8xY2Y2Il0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwidHJhbnNsYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVlLFVBQVVBLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUFDQywwREFBUyxFQUFWLENBQUQsQ0FBVDtBQUNEIiwiZmlsZSI6Ii4vcmVkdXgvc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5cbmltcG9ydCB0cmFuc2xhdGUgZnJvbSBcIi4vdHJhbnNsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFt0cmFuc2xhdGUoKV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/sagas/index.js\n");

/***/ }),

/***/ "./redux/sagas/translate.js":
/*!**********************************!*\
  !*** ./redux/sagas/translate.js ***!
  \**********************************/
/*! exports provided: changeLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLanguage\", function() { return changeLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return translateWatcher; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionCreators */ \"./redux/actionCreators.js\");\n\n\nfunction* changeLanguage(action) {\n  const {\n    language\n  } = action;\n\n  if (language) {\n    try {\n      const translate = __webpack_require__(\"./config/translates sync recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${language}.json`);\n\n      console.log(`=== Translate lang from folder: `, translate.language);\n      const translationObj = {\n        translate\n      };\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"default\"].translationSuccess(translationObj));\n    } catch (err) {\n      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"default\"].translationFailure(\"Error to change language: \", err));\n    }\n  } else {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"default\"].translationFailure(\"There's no language selected.\"));\n  }\n}\nfunction* translateWatcher() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_actionCreators__WEBPACK_IMPORTED_MODULE_1__[\"Types\"].TRANSLATION_REQUEST, changeLanguage);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy90cmFuc2xhdGUuanM/YzU2NCJdLCJuYW1lcyI6WyJjaGFuZ2VMYW5ndWFnZSIsImFjdGlvbiIsImxhbmd1YWdlIiwidHJhbnNsYXRlIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGlvbk9iaiIsInB1dCIsIkFjdGlvbkNyZWF0b3JzIiwidHJhbnNsYXRpb25TdWNjZXNzIiwiZXJyIiwidHJhbnNsYXRpb25GYWlsdXJlIiwidHJhbnNsYXRlV2F0Y2hlciIsInRha2VMYXRlc3QiLCJUeXBlcyIsIlRSQU5TTEFUSU9OX1JFUVVFU1QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFTyxVQUFVQSxjQUFWLENBQXlCQyxNQUF6QixFQUFpQztBQUN0QyxRQUFNO0FBQUVDO0FBQUYsTUFBZUQsTUFBckI7O0FBQ0EsTUFBSUMsUUFBSixFQUFjO0FBQ1osUUFBSTtBQUNGLFlBQU1DLFNBQVMsR0FBR0MsNEVBQVMsS0FBMEJGLFFBQVMsT0FBckMsQ0FBekI7O0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLGtDQUFiLEVBQWdESCxTQUFTLENBQUNELFFBQTFEO0FBRUEsWUFBTUssY0FBYyxHQUFHO0FBQUVKO0FBQUYsT0FBdkI7QUFDQSxZQUFNSyw4REFBRyxDQUFDQyx1REFBYyxDQUFDQyxrQkFBZixDQUFrQ0gsY0FBbEMsQ0FBRCxDQUFUO0FBQ0QsS0FORCxDQU1FLE9BQU9JLEdBQVAsRUFBWTtBQUNaLFlBQU1ILDhEQUFHLENBQ1BDLHVEQUFjLENBQUNHLGtCQUFmLENBQWtDLDRCQUFsQyxFQUFnRUQsR0FBaEUsQ0FETyxDQUFUO0FBR0Q7QUFDRixHQVpELE1BWU87QUFDTCxVQUFNSCw4REFBRyxDQUNQQyx1REFBYyxDQUFDRyxrQkFBZixDQUFrQywrQkFBbEMsQ0FETyxDQUFUO0FBR0Q7QUFDRjtBQUVjLFVBQVVDLGdCQUFWLEdBQTZCO0FBQzFDLFFBQU1DLHFFQUFVLENBQUNDLHFEQUFLLENBQUNDLG1CQUFQLEVBQTRCaEIsY0FBNUIsQ0FBaEI7QUFDRCIsImZpbGUiOiIuL3JlZHV4L3NhZ2FzL3RyYW5zbGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IEFjdGlvbkNyZWF0b3JzLCB7IFR5cGVzIH0gZnJvbSBcIi4uL2FjdGlvbkNyZWF0b3JzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiogY2hhbmdlTGFuZ3VhZ2UoYWN0aW9uKSB7XG4gIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IGFjdGlvbjtcbiAgaWYgKGxhbmd1YWdlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHJlcXVpcmUoYC4uLy4uL2NvbmZpZy90cmFuc2xhdGVzLyR7bGFuZ3VhZ2V9Lmpzb25gKTtcbiAgICAgIGNvbnNvbGUubG9nKGA9PT0gVHJhbnNsYXRlIGxhbmcgZnJvbSBmb2xkZXI6IGAsIHRyYW5zbGF0ZS5sYW5ndWFnZSk7XG5cbiAgICAgIGNvbnN0IHRyYW5zbGF0aW9uT2JqID0geyB0cmFuc2xhdGUgfTtcbiAgICAgIHlpZWxkIHB1dChBY3Rpb25DcmVhdG9ycy50cmFuc2xhdGlvblN1Y2Nlc3ModHJhbnNsYXRpb25PYmopKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHlpZWxkIHB1dChcbiAgICAgICAgQWN0aW9uQ3JlYXRvcnMudHJhbnNsYXRpb25GYWlsdXJlKFwiRXJyb3IgdG8gY2hhbmdlIGxhbmd1YWdlOiBcIiwgZXJyKVxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgeWllbGQgcHV0KFxuICAgICAgQWN0aW9uQ3JlYXRvcnMudHJhbnNsYXRpb25GYWlsdXJlKFwiVGhlcmUncyBubyBsYW5ndWFnZSBzZWxlY3RlZC5cIilcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB0cmFuc2xhdGVXYXRjaGVyKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFR5cGVzLlRSQU5TTEFUSU9OX1JFUVVFU1QsIGNoYW5nZUxhbmd1YWdlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/sagas/translate.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ \"./redux/sagas/index.js\");\n\n // import { createLogger } from 'redux-logger';\n\n\n\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n\nconst bindMiddleware = middleware => {\n  const arrMiddleware = [middleware];\n\n  if (true) {\n    const {\n      composeWithDevTools\n    } = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\"); // arrMiddleware.push(createLogger());\n\n\n    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...arrMiddleware));\n  }\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...arrMiddleware);\n};\n\nfunction configureStore() {\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], bindMiddleware(sagaMiddleware));\n\n  store.runSagaTask = () => {\n    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  };\n\n  store.runSagaTask();\n  return store;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJhcnJNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsInJ1blNhZ2FUYXNrIiwic2FnYVRhc2siLCJydW4iLCJzYWdhcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUVBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQzs7QUFFQSxNQUFNQyxjQUFjLEdBQUdDLFVBQVUsSUFBSTtBQUNuQyxRQUFNQyxhQUFhLEdBQUcsQ0FBQ0QsVUFBRCxDQUF0Qjs7QUFFQSxZQUEyQztBQUN6QyxVQUFNO0FBQUVFO0FBQUYsUUFBMEJDLG1CQUFPLENBQUMsMERBQUQsQ0FBdkMsQ0FEeUMsQ0FFekM7OztBQUNBLFdBQU9ELG1CQUFtQixDQUFDRSw2REFBZSxDQUFDLEdBQUdILGFBQUosQ0FBaEIsQ0FBMUI7QUFDRDs7QUFDRCxTQUFPRyw2REFBZSxDQUFDLEdBQUdILGFBQUosQ0FBdEI7QUFDRCxDQVREOztBQVdBLFNBQVNJLGNBQVQsR0FBMEI7QUFDeEIsUUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFXVCxjQUFjLENBQUNGLGNBQUQsQ0FBekIsQ0FBekI7O0FBRUFTLE9BQUssQ0FBQ0csV0FBTixHQUFvQixNQUFNO0FBQ3hCSCxTQUFLLENBQUNJLFFBQU4sR0FBaUJiLGNBQWMsQ0FBQ2MsR0FBZixDQUFtQkMsOENBQW5CLENBQWpCO0FBQ0QsR0FGRDs7QUFJQU4sT0FBSyxDQUFDRyxXQUFOO0FBRUEsU0FBT0gsS0FBUDtBQUNEOztBQUVjRCw2RUFBZiIsImZpbGUiOiIuL3JlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG4vLyBpbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4vcmVkdWNlcnNcIjtcbmltcG9ydCBzYWdhcyBmcm9tIFwiLi9zYWdhc1wiO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gbWlkZGxld2FyZSA9PiB7XG4gIGNvbnN0IGFyck1pZGRsZXdhcmUgPSBbbWlkZGxld2FyZV07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcbiAgICAvLyBhcnJNaWRkbGV3YXJlLnB1c2goY3JlYXRlTG9nZ2VyKCkpO1xuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5hcnJNaWRkbGV3YXJlKSk7XG4gIH1cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5hcnJNaWRkbGV3YXJlKTtcbn07XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBiaW5kTWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xuXG4gIHN0b3JlLnJ1blNhZ2FUYXNrID0gKCkgPT4ge1xuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHNhZ2FzKTtcbiAgfTtcblxuICBzdG9yZS5ydW5TYWdhVGFzaygpO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

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