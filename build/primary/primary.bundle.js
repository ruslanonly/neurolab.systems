/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/primary/advantages.js":
/*!**************************************!*\
  !*** ./src/js/primary/advantages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setUpAdvantagesSVGs: () => (/* binding */ setUpAdvantagesSVGs)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_advantages_bpla_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/advantages/bpla.svg */ \"./src/assets/advantages/bpla.svg\");\n/* harmony import */ var _assets_advantages_avc_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/advantages/avc.svg */ \"./src/assets/advantages/avc.svg\");\n/* harmony import */ var _assets_advantages_everydaydetect_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/advantages/everydaydetect.svg */ \"./src/assets/advantages/everydaydetect.svg\");\n/* harmony import */ var _assets_advantages_integratedAnalytics_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/advantages/integratedAnalytics.svg */ \"./src/assets/advantages/integratedAnalytics.svg\");\n/* harmony import */ var _assets_advantages_snowflake_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/advantages/snowflake.svg */ \"./src/assets/advantages/snowflake.svg\");\n/* harmony import */ var _assets_advantages_target_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/advantages/target.svg */ \"./src/assets/advantages/target.svg\");\n\n\n\n\n\n\n\nlet svgs = [_assets_advantages_everydaydetect_svg__WEBPACK_IMPORTED_MODULE_3__, _assets_advantages_integratedAnalytics_svg__WEBPACK_IMPORTED_MODULE_4__, _assets_advantages_bpla_svg__WEBPACK_IMPORTED_MODULE_1__, _assets_advantages_snowflake_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_advantages_avc_svg__WEBPACK_IMPORTED_MODULE_2__, _assets_advantages_target_svg__WEBPACK_IMPORTED_MODULE_6__];\nfunction setUpAdvantagesSVGs() {\n  for (let i = 0; i < svgs.length; i++) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({\n      url: svgs[i],\n      dataType: 'html',\n      type: 'GET',\n      success: function (data) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(`.advantages__list-item-photo[data-number=\"${i + 1}\"]`).prepend(data);\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://neurolab.systems/./src/js/primary/advantages.js?");

/***/ }),

/***/ "./src/js/primary/index.js":
/*!*********************************!*\
  !*** ./src/js/primary/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_primary_primary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/primary/primary.scss */ \"./src/styles/primary/primary.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _advantages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advantages */ \"./src/js/primary/advantages.js\");\n/* harmony import */ var _swipers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swipers */ \"./src/js/primary/swipers.js\");\n/* harmony import */ var _assets_videos_souznik_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/videos/souznik.mp4 */ \"./src/assets/videos/souznik.mp4\");\n/* harmony import */ var _common_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/popups */ \"./src/js/common/popups.js\");\n/* harmony import */ var _common_formHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/formHandler */ \"./src/js/common/formHandler.js\");\n/* harmony import */ var _common_tabbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/tabbar */ \"./src/js/common/tabbar.js\");\n\n\n\n\n\n\n\n\nfunction setUpVideo() {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.souznik-video__video').html(`\n    <source src=\"${_assets_videos_souznik_mp4__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\" type=\"video/mp4\">\n  `);\n}\nfunction openFullPageVideo() {\n  let video = document.querySelector('.souznik-video__video');\n  if (video.requestFullscreen) {\n    video.requestFullscreen();\n  }\n  function isVideoFullScreen(el) {\n    return document.fullscreenElement == el;\n  }\n\n  // Example usage\n  const videoElement = document.getElementById('myVideo');\n  const isFullScreen = isVideoFullScreen(video);\n  if (isFullScreen) {\n    //@ts-ignore\n    video.setAttribute('controls', true);\n  } else {\n    //@ts-ignore\n    video.removeAttribute('controls');\n  }\n}\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.souznik-video__wrapper').click(() => {\n  openFullPageVideo();\n});\n_common_popups__WEBPACK_IMPORTED_MODULE_5__.Popup.setUpProductsPopup();\n_common_popups__WEBPACK_IMPORTED_MODULE_5__.Popup.setUpSendFormPopup();\n_common_tabbar__WEBPACK_IMPORTED_MODULE_7__.Tabbar.setUp();\nsetUpVideo();\n(0,_advantages__WEBPACK_IMPORTED_MODULE_2__.setUpAdvantagesSVGs)();\n(0,_swipers__WEBPACK_IMPORTED_MODULE_3__.setUpAppAreaSwiper)();\n(0,_common_formHandler__WEBPACK_IMPORTED_MODULE_6__.createFormEventListeners)();\n\n//# sourceURL=webpack://neurolab.systems/./src/js/primary/index.js?");

/***/ }),

/***/ "./src/js/primary/swipers.js":
/*!***********************************!*\
  !*** ./src/js/primary/swipers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setUpAppAreaSwiper: () => (/* binding */ setUpAppAreaSwiper)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);\nfunction setUpAppAreaSwiper() {\n  let viewWidth = window.innerWidth;\n  let slidesPerView = viewWidth > 1108 ? 2 : 1;\n  const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.app-area__slider-swiper', {\n    spaceBetween: 30,\n    slidesPerView: slidesPerView,\n    direction: 'horizontal',\n    speed: 1000,\n    wrapperClass: \"app-area__slider__wrapper\",\n    slideClass: \"app-area__slide\",\n    pagination: {\n      enabled: true,\n      type: \"custom\",\n      el: \".app-area__dots\",\n      renderCustom(swiper, current, total) {\n        console.log(current, total);\n        let html = '';\n        for (let i = 0; i < total; i++) {\n          html += `<div class=\"app-area__dot ${i + 1 == current ? \"app-area__dot--active\" : ''}\"></div>`;\n        }\n        return html;\n      }\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\".app-area__controls .app-area__controls-prev\").click(() => {\n    swiper.slidePrev();\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(\".app-area__controls .app-area__controls-next\").click(() => {\n    swiper.slideNext();\n  });\n}\n\n//# sourceURL=webpack://neurolab.systems/./src/js/primary/swipers.js?");

/***/ }),

/***/ "./src/assets/videos/souznik.mp4":
/*!***************************************!*\
  !*** ./src/assets/videos/souznik.mp4 ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"videos/souznik.mp4\");\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/videos/souznik.mp4?");

/***/ }),

/***/ "./src/styles/primary/primary.scss":
/*!*****************************************!*\
  !*** ./src/styles/primary/primary.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://neurolab.systems/./src/styles/primary/primary.scss?");

/***/ }),

/***/ "./src/assets/advantages/avc.svg":
/*!***************************************!*\
  !*** ./src/assets/advantages/avc.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/avc.svg\";\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/advantages/avc.svg?");

/***/ }),

/***/ "./src/assets/advantages/bpla.svg":
/*!****************************************!*\
  !*** ./src/assets/advantages/bpla.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/bpla.svg\";\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/advantages/bpla.svg?");

/***/ }),

/***/ "./src/assets/advantages/everydaydetect.svg":
/*!**************************************************!*\
  !*** ./src/assets/advantages/everydaydetect.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/everydaydetect.svg\";\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/advantages/everydaydetect.svg?");

/***/ }),

/***/ "./src/assets/advantages/integratedAnalytics.svg":
/*!*******************************************************!*\
  !*** ./src/assets/advantages/integratedAnalytics.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/integratedAnalytics.svg\";\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/advantages/integratedAnalytics.svg?");

/***/ }),

/***/ "./src/assets/advantages/snowflake.svg":
/*!*********************************************!*\
  !*** ./src/assets/advantages/snowflake.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/snowflake.svg\";\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/advantages/snowflake.svg?");

/***/ }),

/***/ "./src/assets/advantages/target.svg":
/*!******************************************!*\
  !*** ./src/assets/advantages/target.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/target.svg\";\n\n//# sourceURL=webpack://neurolab.systems/./src/assets/advantages/target.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"primary": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkneurolab_systems"] = self["webpackChunkneurolab_systems"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/js/primary/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;