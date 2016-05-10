var ShadowManager =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ShadowManager = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _shadowElement = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ShadowManager = exports.ShadowManager = function () {
	    _createClass(ShadowManager, [{
	        key: 'eachElement',
	        value: function eachElement(fn) {
	            var elements = document.querySelectorAll('.' + this.className);
	            for (var i = 0; i < elements.length; i++) {
	                fn(elements[i]);
	            }
	        }
	    }]);
	
	    function ShadowManager() {
	        var className = arguments.length <= 0 || arguments[0] === undefined ? 'shadow' : arguments[0];
	
	        _classCallCheck(this, ShadowManager);
	
	        this.className = className;
	        this.registeredElements = [];
	        var _this = this;
	        this.eachElement(function (el) {
	            var shadowElement = new _shadowElement.ShadowElement(el);
	            _this.registeredElements.push(shadowElement);
	        });
	    }
	
	    return ShadowManager;
	}();
	
	module.exports = new ShadowManager();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ShadowElement = exports.ShadowElement = function () {
	    function ShadowElement(element) {
	        _classCallCheck(this, ShadowElement);
	
	        this.element = element;
	        this.update();
	    }
	
	    _createClass(ShadowElement, [{
	        key: 'updateMatrix',
	        value: function updateMatrix() {
	            this.setStyle('transform', this.Matrix);
	        }
	    }, {
	        key: 'updateShadow',
	        value: function updateShadow() {
	            var shadowVal = this.Matrix.m43;
	
	            var shadowPos = '0 ' + shadowVal / 3 + 'px ' + shadowVal + 'px',
	                colors = {
	                fore: 'rgba(0,0,0,0.' + shadowVal * 4 + ')',
	                back: 'rgba(0,0,0,0.' + shadowVal * 8 + ')'
	            };
	
	            var concatenated = shadowPos + ' ' + colors.fore + ', ' + shadowPos + ' ' + colors.back;
	            this.setStyle('box-shadow', concatenated);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.updateMatrix(), this.updateShadow();
	        }
	    }, {
	        key: 'setStyle',
	        value: function setStyle(attr, val) {
	            this.element.style[attr] = val;
	        }
	    }, {
	        key: 'getStyle',
	        value: function getStyle(attr) {
	            return window.getComputedStyle(this.element, null)[attr];
	        }
	    }, {
	        key: 'Matrix',
	        get: function get() {
	            var matrix = this.getStyle('transform');
	            return new WebKitCSSMatrix(matrix);
	        }
	    }]);

	    return ShadowElement;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=shadow.js.map