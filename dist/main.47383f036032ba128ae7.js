/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\toverflow:hidden;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tbackground:black;\r\n\tbottom:0;\r\n\tz-index:0;\r\n}\r\nselect {\r\n\tz-index:2;\r\n\tpadding:5px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,QAAQ;CACR,SAAS;CACT,sBAAsB;AACvB;AACA;CACC,cAAc;CACd,eAAe;AAChB;AACA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,QAAQ;CACR,SAAS;AACV;AACA;CACC,SAAS;CACT,WAAW;AACZ","sourcesContent":["* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\toverflow:hidden;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tbackground:black;\r\n\tbottom:0;\r\n\tz-index:0;\r\n}\r\nselect {\r\n\tz-index:2;\r\n\tpadding:5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/object.js":
/*!***********************!*
  !*** ./src/object.js ***!
  \***********************/
/***/ ((module) => {


module.exports = class Object {
   constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.selected = false;
   }
   get right() {
      return this.x + this.width;
   }
   get bottom() {
      return this.y + this.height;
   }
   get middle() {
      return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
   }
   get left() {
      return this.x;
   }
   get top() {
      return this.y;
   }
   inside(x, y) {
      return x > this.left && y > this.top && x < this.right && y < this.bottom;
   }
   unselect() {
      return new Object(this.x, this.y, this.width, this.height);
   }
};


/***/ }),

/***/ "./src/state.js":
/*!**********************!*
  !*** ./src/state.js ***!
  \**********************/
/***/ ((module) => {


module.exports = class State {
   constructor(state) {
      this.objects = state.objects;
   }
   merge(newState) {
      return new State({ objects: [...this.objects, ...newState.objects] });
   }
   copy() {
      return new State({ objects: [...this.objects] });
   }
   unselect() {
      return new State({ objects: [...this.objects.map((object) => object.unselect())] });
   }
   static empty() {
      return new State({ objects: [] });
   }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
(() => {
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/

__webpack_require__(/*! ./style.css */ "./src/style.css");
const Object = __webpack_require__(/*! ./object */ "./src/object.js");
const State = __webpack_require__(/*! ./state */ "./src/state.js");
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const modes = ['create', 'move'];
const topPadding = 25;
makeDropdown(modes);
resizeCanvas(canvas);
let tick = 0;
let tempObject = null;
let replaying = false;
let showSettings = false;
let states = [];
let modeIndex = 0;
states.push(State.empty());
render(states[tick]);
window.addEventListener('resize', () => {
   resizeCanvas(canvas);
   render(states[tick]);
});
window.addEventListener('mousedown', mouseDrag);
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', endDrag);
window.addEventListener('keyup', keyActions);
let drag = false;
let selected = false;
let selectIndex = 0;
let originX = 0;
let originY = 0;
let pivotX = 0;
let pivotY = 0;
function mouseDrag(event) {
   if (!drag && !replaying && !showSettings) {
      if (modes[modeIndex] === 'create') {
         drag = true;
         originX = event.pageX;
         originY = event.pageY - topPadding;
         tempObject = new Object(Math.round(originX), Math.round(originY), 1, 1);
         render(states[tick]);
      } else if (modes[modeIndex] === 'move') {
         const x = event.pageX;
         const y = event.pageY - topPadding;
         const currentState = states[tick].copy();
         for (let i = currentState.objects.length - 1; i >= 0; i--) {
            const object = currentState.objects[i];
            if (object.selected) continue;
            if (!selected && object.inside(x, y)) {
               selected = true;
               selectIndex = i;
               tick++;
               states[tick] = currentState.copy();
               states[tick].objects[selectIndex].selected = true;
               pivotX = event.pageX;
               pivotY = event.pageY - topPadding;
               render(states[tick]);
               break;
            }
         }
      }
   }
}
function mouseMove() {
   if ((drag || selected) && !replaying && !showSettings) {
      if (
         tempObject != null &&
         (event.pageX - originX !== tempObject.width || event.pageY - topPadding - originY !== tempObject.height) &&
         modes[modeIndex] === 'create'
      ) {
         tempObject.width = Math.round(event.pageX - originX);
         tempObject.height = Math.round(event.pageY - topPadding - originY);
         render(states[tick]);
      }
      if (modes[modeIndex] === 'move' && selected) {
         if (
            Math.round(event.pageX) !== Math.round(pivotX) ||
            Math.round(event.pageY - topPadding) !== Math.round(pivotY)
         ) {
            tick++;
            states[tick] = states[tick - 1].copy();
            states[tick].objects[selectIndex].x += event.pageX - pivotX;
            states[tick].objects[selectIndex].y += event.pageY - topPadding - pivotY;
            pivotX = event.pageX;
            pivotY = event.pageY - topPadding;
            render(states[tick]);
         }
      }
   }
}
function endDrag() {
   if (replaying || showSettings) return;
   drag = false;
   if (modes[modeIndex] === 'create') {
      tick++;
      if (Math.sign(tempObject.width) === -1) {
         tempObject.x -= Math.abs(tempObject.width);
         tempObject.width *= -1;
      }
      if (Math.sign(tempObject.height) === -1) {
         tempObject.y -= Math.abs(tempObject.height);
         tempObject.height *= -1;
      }
      states[tick] = states[tick - 1].merge({
         objects: [tempObject],
      });
      tempObject = null;
   } else if (modes[modeIndex] === 'move') {
      if (selected) {
         tick++;
         states[tick] = states[tick - 1].copy().unselect();
         selected = false;
      }
   }
   render(states[tick]);
}
function render(state) {
   requestAnimationFrame(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'white';
      ctx.lineWidth = 4;
      for (const object of state.objects) {
         if (!object) return;
         if (object.selected) ctx.strokeStyle = 'blue';
         else ctx.strokeStyle = 'black';
         ctx.fillRect(object.x, object.y, object.width, object.height);
         ctx.strokeRect(object.x, object.y, object.width, object.height);
      }
      if (tempObject != null) {
         if (modes[modeIndex] === 'create') {
            ctx.strokeStyle = 'rgba(200, 0, 0, 0.8)';
         } else if (modes[modeIndex] === 'move') {
            ctx.strokeStyle = '#314fd4';
         }
         ctx.strokeRect(tempObject.x, tempObject.y, tempObject.width, tempObject.height);
      }
      if (showSettings) {
         ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         ctx.fillStyle = 'rgb(230, 230, 230)';
         ctx.shadowBlur = 40;
         ctx.shadowColor = 'white';
         ctx.fillRect(canvas.width / 2 - 500, canvas.height / 2 - 300, 1000, 600);
         ctx.shadowBlur = 0;
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         ctx.font = '50px Arial';
         ctx.fillStyle = 'black';
         ctx.fillText('S for settings', canvas.width / 2, canvas.height / 2 - 200);
         ctx.fillText('R for replay', canvas.width / 2, canvas.height / 2 - 100);
         ctx.fillText('C for clear', canvas.width / 2, canvas.height / 2);
         ctx.fillText('Space for spawn objects', canvas.width / 2, canvas.height / 2 + 100);
         ctx.fillText('H for clear history', canvas.width / 2, canvas.height / 2 + 200);
      }
   });
}
function spawnRandomObjects() {
   if (replaying || showSettings || modes[modeIndex] !== 'create') return;
   const objects = [];
   for (let i = 0; i < 5; i++) {
      tick++;
      objects.push(
         new Object(
            Math.round(Math.random() * canvas.width - 200),
            Math.round(Math.random() * canvas.height - 200),
            Math.round(Math.random() * (Math.random() * 300 + 50)),
            Math.round(Math.random() * (Math.random() * 300 + 50))
         )
      );
      states[tick] = states[tick - 1].merge({ objects });
   }
   render(states[tick]);
}
function clear() {
   if (replaying || showSettings) return;
   tick++;
   states[tick] = State.empty();
   tempObject = null;
   render(states[tick]);
}
function clearHistory() {
   if (replaying || showSettings) return;
   const state = states[tick];
   tick = 0;
   states = [];
   states[tick] = state;
   render(states[tick]);
}
function replayStates() {
   if (replaying || showSettings) return;
   replaying = true;
   const maxTick = tick;
   tick = 0;
   tempObject = null;
   drag = false;
   selected = false;
   const start = Date.now();
   const replayRate = 10;
   let lastTick = tick;
   function replay() {
      const expectedTick = Math.ceil((Date.now() - start) * (replayRate / 1000));
      while (tick < expectedTick) {
         if (tick >= maxTick) {
            replaying = false;
            tick = maxTick;
            render(states[tick]);
            return;
         }
         tick++;
      }
      if (lastTick != tick) {
         render(states[tick]);
      }
      lastTick = tick;
      requestAnimationFrame(replay);
   }
   requestAnimationFrame(replay);
}
function toggleSettings() {
   if (replaying) return;
   tempObject = null;
   showSettings = !showSettings;
   render(states[tick]);
}
function keyActions({ keyCode }) {
   if (keyCode === 82) {
      replayStates();
   } else if (keyCode === 32) {
      spawnRandomObjects();
   } else if (keyCode === 67) {
      clear();
   } else if (keyCode === 72) {
      clearHistory();
   } else if (keyCode === 83) {
      toggleSettings();
   }
}
function resizeCanvas(canvas) {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight - topPadding;
}
function makeDropdown(modes) {
   const selectElement = document.createElement('select');
   selectElement.classList.add('mode');
   for (const mode of modes) {
      const option = document.createElement('option');
      option.setAttribute('value', '');
      option.innerText = mode;
      selectElement.appendChild(option);
   }
   selectElement.addEventListener('change', () => {
      if (modes[modeIndex] === selectElement.selectedOptions[0].textContent) return;
      modeIndex++;
      modeIndex = modeIndex % modes.length;
   });
   document.body.appendChild(selectElement);
}

})();

/******/ })()
;
//# sourceMappingURL=main.47383f036032ba128ae7.js.map