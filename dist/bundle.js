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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Thomas\\\\source\\\\repos\\\\Invy\\\\node_modules\\\\css-loader\\\\dist\\\\runtime\\\\api.js'\");\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_InvyController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/InvyController */ \"./src/controller/InvyController.js\");\n\r\n\r\n\r\nnew _controller_InvyController__WEBPACK_IMPORTED_MODULE_1__[\"InvyController\"]();\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controller/CreateItemController.js":
/*!************************************************!*\
  !*** ./src/controller/CreateItemController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateItemController; });\n/* harmony import */ var _view_CreateItemView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/CreateItemView */ \"./src/view/CreateItemView.js\");\n\n\nclass CreateItemController{\n    constructor(){\n        console.log(\"item controller\");\n        this.view = new _view_CreateItemView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    getElement() {\n        return this.view.getElement();\n    }\n}\n\n//# sourceURL=webpack:///./src/controller/CreateItemController.js?");

/***/ }),

/***/ "./src/controller/InventoryController.js":
/*!***********************************************!*\
  !*** ./src/controller/InventoryController.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/controller/InventoryController.js?");

/***/ }),

/***/ "./src/controller/InvyController.js":
/*!******************************************!*\
  !*** ./src/controller/InvyController.js ***!
  \******************************************/
/*! exports provided: InvyController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InvyController\", function() { return InvyController; });\n/* harmony import */ var _CreateItemController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateItemController */ \"./src/controller/CreateItemController.js\");\n/* harmony import */ var _InventoryController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryController */ \"./src/controller/InventoryController.js\");\n/* harmony import */ var _InventoryController__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InventoryController__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UpdateItemController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateItemController */ \"./src/controller/UpdateItemController.js\");\n/* harmony import */ var _UpdateItemController__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UpdateItemController__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nclass InvyController{\r\n    constructor(){\r\n        console.log(\"invy controller\");\r\n        this.initialize()\r\n    }\r\n\r\n    async initialize(){\r\n        this.CreateItemController = new _CreateItemController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.CreateItemController.getElement();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/controller/InvyController.js?");

/***/ }),

/***/ "./src/controller/UpdateItemController.js":
/*!************************************************!*\
  !*** ./src/controller/UpdateItemController.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/controller/UpdateItemController.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/view/CreateItemView.js":
/*!************************************!*\
  !*** ./src/view/CreateItemView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateItemView; });\nclass CreateItemView{\r\n    constructor(){\r\n        console.log(\"item view\");\r\n        this.buildElement();\r\n    }\r\n\r\n    buildElement(){\r\n        let containerElement = document.createElement(\"container\");\r\n        let rowElement = document.createElement(\"row\");\r\n        let colElement = document.createElement(\"col-sm\");\r\n        let label = document.createElement(\"label\");\r\n        label.innerText = \"doe iets laten zien zodat ik weet dat dit werkt :)\"\r\n\r\n        containerElement.append(rowElement, colElement, label);\r\n        this.element = containerElement;\r\n        console.log(\"build element\");\r\n        return this.element;\r\n    }\r\n\r\n    getElement(){\r\n        console.log(\"return element\");\r\n        console.log(this.buildElement());\r\n        return this.buildElement();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/view/CreateItemView.js?");

/***/ })

/******/ });