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

/***/ "./src/js/secondary/index.js":
/*!***********************************!*\
  !*** ./src/js/secondary/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/products */ \"./src/js/common/products.js\");\n/* harmony import */ var _styles_secondary_secondary_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/secondary/secondary.scss */ \"./src/styles/secondary/secondary.scss\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/popups */ \"./src/js/common/popups.js\");\n/* harmony import */ var _common_formHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/formHandler */ \"./src/js/common/formHandler.js\");\n/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video */ \"./src/js/secondary/video.js\");\n/* harmony import */ var _common_tabbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/tabbar */ \"./src/js/common/tabbar.js\");\n\n\n\n\n\n\n\nfunction getSearchParamValue(param) {\n  const queryString = window.location.search;\n  const urlParams = new URLSearchParams(queryString);\n  return urlParams.get(param);\n}\nfunction setUpSecondaryProductPage() {\n  let productId = getSearchParamValue(\"product\");\n  let currentProduct = _common_products__WEBPACK_IMPORTED_MODULE_0__.mainProducts.find((prod, index) => {\n    return prod.id == productId;\n  }) || _common_products__WEBPACK_IMPORTED_MODULE_0__.mainProducts[0];\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product .product__wrapper').css('background', currentProduct.content.bg);\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#section-breadcrumb .breadcrumb__item--active\").html(currentProduct.title);\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product .product__title').html(currentProduct.title);\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product .product__subtitle').html(currentProduct.subtitle);\n\n  // $('.product .product__video').html(`\n  //   <source class=\"product__video\" src=\"${currentProduct.video}\" type=\"video/mp4\">\n  // `)\n\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product .product__right-header-title h1').html(currentProduct.content?.headerTitle || '');\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product .product__right-header-subtitle p').html(currentProduct.content?.headerSubtitle || '');\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product .product__right-content-text').html(currentProduct.content?.textHTML || '');\n\n  // if (currentProduct.content.dropdown)\n  setUpProductDropdown(currentProduct);\n  const videoLoaded = jquery__WEBPACK_IMPORTED_MODULE_2___default().Deferred();\n  const video = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#ProductVideo')[0];\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()(video).on('loadeddata', () => {\n    videoLoaded.resolve();\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_2___default().when(videoLoaded).done(() => {\n    console.log('Video loaded');\n    (0,_video__WEBPACK_IMPORTED_MODULE_5__.setProductBackground)();\n  });\n}\nfunction setUpProductDropdown(product) {\n  let dropdown = product.content.dropdown;\n\n  // let itemsHTML = ''\n  // for(let i = 0; i < dropdown!.length; i++) {\n  //   let contentItems = ''\n  //   let elements = dropdown![i].elements\n  //   for(let j = 0; j < elements.length; j++) {\n  //     contentItems += `\n  //       <div class=\"dropdown__content-item\">\n  //         <h4>${elements[j].heading}</h4>\n  //         <p>${elements[j].text}</p>\n  //       </div>\n  //     `\n  //   }\n  //   itemsHTML += `\n  //     <div class=\"dropdown__item item--${i}\"data-no=\"${i}\">\n  //       <div class=\"dropdown__item-heading\">\n  //         <span class=\"dropdown__item-heading-title\">${dropdown![i].title}</span>\n  //         <span class=\"material-symbols-rounded dropdown__item-heading-icon\">expand_more</span>\n  //       </div>\n  //       <div class=\"dropdown__content scroll-bar__container\">\n  //         ${contentItems}\n  //       </div>\n  //     </div>\n  //   `\n  // } \n  // $('.product__dropdown').html(itemsHTML)\n  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.product__dropdown .dropdown__item').click(event => {\n    console.log('dropdown click');\n    let no = event.currentTarget.getAttribute(\"data-no\");\n    let cur = jquery__WEBPACK_IMPORTED_MODULE_2___default()(`.product__dropdown .dropdown__item.item--${no}`);\n    let isActive = cur.hasClass('dropdown__item--active');\n    if (isActive) {\n      console.log('isActive');\n      cur.removeClass('dropdown__item--active');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_2___default()(`.product__dropdown .dropdown__item.dropdown__item--active`).removeClass('dropdown__item--active');\n      cur.addClass('dropdown__item--active');\n    }\n  });\n}\n_common_popups__WEBPACK_IMPORTED_MODULE_3__.Popup.setUpProductsPopup();\n_common_popups__WEBPACK_IMPORTED_MODULE_3__.Popup.setUpSendFormPopup();\n_common_tabbar__WEBPACK_IMPORTED_MODULE_6__.Tabbar.setUp();\nsetUpSecondaryProductPage();\n(0,_common_formHandler__WEBPACK_IMPORTED_MODULE_4__.createFormEventListeners)();\n\n//# sourceURL=webpack://neurolab.systems/./src/js/secondary/index.js?");

/***/ }),

/***/ "./src/js/secondary/video.js":
/*!***********************************!*\
  !*** ./src/js/secondary/video.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setProductBackground: () => (/* binding */ setProductBackground)\n/* harmony export */ });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction setProductBackground() {\n  const video = document.getElementById('ProductVideo');\n  const canvas = document.createElement('canvas');\n  const context = canvas.getContext('2d');\n  canvas.width = video.videoWidth;\n  canvas.height = video.videoHeight;\n  console.log('seeked');\n  context.drawImage(video, 0, 0, canvas.width, canvas.height);\n  const imageData = context.getImageData(canvas.width - 10, Math.floor(canvas.height / 2), 1, 1);\n  const pixelData = imageData.data;\n  const red = pixelData[0];\n  const green = pixelData[1];\n  const blue = pixelData[2];\n  const hexColor = rgbToHex(red, green, blue);\n  console.log(hexColor);\n\n  // $('.product .product__wrapper').css('background', hexColor);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product').animate({\n    opacity: 1\n  }, 300);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.product').addClass(isDarkColor(red, green, blue) ? 'product--dark-theme' : 'product--light-theme');\n}\n\n//@ts-ignore\nfunction rgbToHex(r, g, b) {\n  //@ts-ignore\n  const componentToHex = c => {\n    const hex = c.toString(16);\n    return hex.length === 1 ? \"0\" + hex : hex;\n  };\n  return \"#\" + componentToHex(r) + componentToHex(g) + componentToHex(b);\n}\nfunction isDarkColor(red, green, blue) {\n  var brightness = (red * 299 + green * 587 + blue * 114) / 1000;\n  return brightness <= 127;\n}\n\n//# sourceURL=webpack://neurolab.systems/./src/js/secondary/video.js?");

/***/ }),

/***/ "./src/styles/secondary/secondary.scss":
/*!*********************************************!*\
  !*** ./src/styles/secondary/secondary.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://neurolab.systems/./src/styles/secondary/secondary.scss?");

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
/******/ 			"secondary": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/js/secondary/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;