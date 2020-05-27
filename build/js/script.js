/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/articles.js":
/*!******************************************!*\
  !*** ./source/js/components/articles.js ***!
  \******************************************/
/*! exports provided: setArticlesHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setArticlesHandlers\", function() { return setArticlesHandlers; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/js/components/utils.js\");\n/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend */ \"./source/js/components/backend.js\");\n\n\n\n\nvar NUMBER_OF_ARTICLES = 10;\nvar articlesParent = document.body.querySelector(\".guides__active-articles\");\nvar showArticlesButton = document.body.querySelector(\".guides__button--show\");\nvar hideArticlesButton = document.body.querySelector(\".guides__button--hide\");\n\nvar article = function article(title, text, id) {\n  return \"<div class=\\\"guides__active-article\\\"><h5>\".concat(title, \"</h5><p>\").concat(text, \"</p><span>by user: \").concat(id, \"</span></div>\");\n};\n\nvar onSuccessHandler = function onSuccessHandler(response) {\n  var rendered = [];\n  Array.from(response).forEach(function (it, index) {\n    if (it.id <= NUMBER_OF_ARTICLES) {\n      rendered.push(it);\n    }\n  });\n  rendered.reverse().forEach(function (it) {\n    articlesParent.append(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"makeElement\"])(article(it.title, it.body, it.id)));\n  });\n};\n\nvar onErrorHandler = function onErrorHandler(errorMessage) {\n  articlesParent.append(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"makeElement\"])(article(\"ERROR\", errorMessage, 0)));\n};\n\nvar setArticlesHandlers = function setArticlesHandlers() {\n  showArticlesButton.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    Object(_backend__WEBPACK_IMPORTED_MODULE_1__[\"load\"])(onSuccessHandler, onErrorHandler);\n    showArticlesButton.classList.add(\"visually-hidden\");\n    hideArticlesButton.classList.remove(\"visually-hidden\");\n  });\n  hideArticlesButton.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    var articles = document.querySelectorAll(\".guides__active-article\");\n    articles.forEach(function (article) {\n      article.remove();\n    });\n    showArticlesButton.classList.remove(\"visually-hidden\");\n    hideArticlesButton.classList.add(\"visually-hidden\");\n  });\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/articles.js?");

/***/ }),

/***/ "./source/js/components/backend.js":
/*!*****************************************!*\
  !*** ./source/js/components/backend.js ***!
  \*****************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n\n\nvar URL = \"https://jsonplaceholder.typicode.com/posts/\";\n\nvar load = function load(onSuccess, onError) {\n  var xhr = new XMLHttpRequest();\n  xhr.responseType = 'json';\n  xhr.addEventListener('load', function () {\n    if (xhr.status === 200) {\n      onSuccess(xhr.response);\n    } else {\n      onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);\n    }\n  });\n  xhr.addEventListener('error', function () {\n    onError('Произошла ошибка соединения');\n  });\n  xhr.addEventListener('timeout', function () {\n    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');\n  });\n  xhr.timeout = 10000;\n  xhr.open('GET', URL);\n  xhr.send();\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/backend.js?");

/***/ }),

/***/ "./source/js/components/utils.js":
/*!***************************************!*\
  !*** ./source/js/components/utils.js ***!
  \***************************************/
/*! exports provided: makeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeElement\", function() { return makeElement; });\n\n\nvar makeElement = function makeElement(template) {\n  var newElement = document.createElement(\"div\");\n  newElement.innerHTML = template;\n  return newElement.firstElementChild;\n};\n\n\n\n//# sourceURL=webpack:///./source/js/components/utils.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/articles */ \"./source/js/components/articles.js\");\n\n\n\nObject(_components_articles__WEBPACK_IMPORTED_MODULE_0__[\"setArticlesHandlers\"])();\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });