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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index-style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index-style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `header {\n    display: flex;\n    padding: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n#search {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n/* Toggle Switch */\n.toggle-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 17px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n    border-radius: 34px;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 13px;\n    width: 13px;\n    left: 2px;\n    bottom: 2px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n    border-radius: 50%;\n}\n\ninput:checked + .slider {\n    background-color: green;\n}\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px green;\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(13px);\n    -ms-transform: translateX(13px);\n    transform: translateX(13px);\n}\n/* End toggle*/\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.title-bar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#weather-card-box {\n    display: inline-flex;\n    flex-wrap: wrap; /* Allow flex items to wrap if needed */\n    border: 2px solid black;\n    border-radius: 8px;\n    padding: 24px;\n    gap: 24px;\n}\n\n.weather-card {\n    border: 2px solid black;\n    border-radius: 8px;\n    width: 250px;\n    padding: 8px;\n}\n\n.weather-card-conditions {\n    display: flex;\n    padding: 8px\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vscode-eslint-example/./src/index-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index-style.css":
/*!*****************************!*\
  !*** ./src/index-style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index-style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index-style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vscode-eslint-example/./src/index-style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vscode-eslint-example/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayDateLocation: () => (/* binding */ displayDateLocation),\n/* harmony export */   displayTomWeather: () => (/* binding */ displayTomWeather),\n/* harmony export */   displayWeather: () => (/* binding */ displayWeather)\n/* harmony export */ });\nconst displayDateLocation = (data, date) => {\n    const content = document.getElementById('content')\n    const locData = data.location;\n    content.innerHTML += `\n        <div class=\"title-bar\">\n            <h1>Weather for ${locData.name}, ${locData.region}</h1>\n            <h2>Today's Date: ${date}\n        </div>\n        <div id=\"weather-card-box\"></div>\n        <div id=\"last-update\"></div>\n        `\n}\n\nconst displayWeather = (data, metric) => {\n    const weatherCardBox = document.getElementById('weather-card-box')\n    const currentData = data.current;\n    const forecastData = data.forecast.forecastday[0].day;\n    \n    let currTemp = currentData.temp_c;\n    let realFeel = currentData.feelslike_c;\n    let degreeUnit = 'C';\n    let currWind = currentData.wind_kph;\n    let windUnit = 'kph';\n    let maxTemp = forecastData.maxtemp_c;\n    let minTemp = forecastData.mintemp_c;\n    let avgTemp = forecastData.avgtemp_c;\n    let totPrec = forecastData.totalprecip_mm;\n    let precUnit = 'mm';\n    let maxWind = forecastData.maxwind_kph\n\n    if (metric === false) {\n        currTemp = currentData.temp_f;\n        realFeel = currentData.feelslike_f;\n        degreeUnit = 'F';\n        currWind = currentData.wind_mph;\n        windUnit = 'mph'\n        maxTemp = forecastData.maxtemp_f;\n        minTemp = forecastData.mintemp_f;\n        avgTemp = forecastData.avgtemp_f;\n        totPrec = forecastData.totalprecip_in;\n        precUnit = 'in'\n        maxWind = forecastData.maxwind_mph\n    }\n\n    weatherCardBox.innerHTML += `\n        <div class=\"weather-card\">\n            <h2>Right Now</h2>\n            <div class=\"weather-card-conditions\">\n                <img src=${currentData.condition.icon} alt=\"current-icon\">\n                <h4>${currentData.condition.text}</h4>\n            </div>\n            <h4>Temp: ${currTemp}&deg; ${degreeUnit}</h4>\n            <h4>Real Feel: ${realFeel}&deg; ${degreeUnit}</h4>\n            <h4>Wind Speed: ${currWind} ${windUnit}</h4>\n        </div>\n        <div class=\"weather-card\">\n            <h2>Today's Forecast</h2>\n            <div class=\"weather-card-conditions\">\n                <img src=${forecastData.condition.icon} alt=\"current-icon\">\n                <h4>${forecastData.condition.text}</h4>\n            </div>\n            <h4>Temp High: ${maxTemp}&deg; ${degreeUnit}</h4>\n            <h4>Temp Low: ${minTemp}&deg; ${degreeUnit}</h4>\n            <h4>Temp Avg: ${avgTemp}&deg; ${degreeUnit}</h4>\n            <h4>Chance of Rain: ${forecastData.daily_chance_of_rain}%</h4>\n            <h4>Precipitation: ${totPrec} ${precUnit}</h4>\n            <h4>Max Wind Speed: ${maxWind} ${windUnit}</h4>\n        </div>\n        `\n    \n        const lastUpdate = document.getElementById(\"last-update\");\n        lastUpdate.innerHTML += `<p>Last updated: ${currentData.last_updated}</p>`;\n    }\n\nconst displayTomWeather = (data, metric) => {\n    const weatherCardBox = document.getElementById('weather-card-box')\n    // console.log(data)\n    const forecastData = data.forecast.forecastday[0].day;\n    \n    let degreeUnit = 'C';\n    let windUnit = 'kph';\n    let maxTemp = forecastData.maxtemp_c;\n    let minTemp = forecastData.mintemp_c;\n    let avgTemp = forecastData.avgtemp_c;\n    let totPrec = forecastData.totalprecip_mm;\n    let precUnit = 'mm';\n    let maxWind = forecastData.maxwind_kph\n\n    if (metric === false) {\n        degreeUnit = 'F';\n        windUnit = 'mph'\n        maxTemp = forecastData.maxtemp_f;\n        minTemp = forecastData.mintemp_f;\n        avgTemp = forecastData.avgtemp_f;\n        totPrec = forecastData.totalprecip_in;\n        precUnit = 'in'\n        maxWind = forecastData.maxwind_mph\n    }\n\n    weatherCardBox.innerHTML += `\n        <div class=\"weather-card\">\n            <h2>Tomorrow's Forecast</h2>\n            <div class=\"weather-card-conditions\">\n                <img src=${forecastData.condition.icon} alt=\"current-icon\">\n                <h4>${forecastData.condition.text}</h4>\n            </div>\n            <h4>Temp High: ${maxTemp}&deg; ${degreeUnit}</h4>\n            <h4>Temp Low: ${minTemp}&deg; ${degreeUnit}</h4>\n            <h4>Temp Avg: ${avgTemp}&deg; ${degreeUnit}</h4>\n            <h4>Chance of Rain: ${forecastData.daily_chance_of_rain}%</h4>\n            <h4>Precipitation: ${totPrec} ${precUnit}</h4>\n            <h4>Max Wind Speed: ${maxWind} ${windUnit}</h4>\n        </div>\n        `\n    }\n\n//# sourceURL=webpack://vscode-eslint-example/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-style.css */ \"./src/index-style.css\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\n// const weatherGovAddress = 'https://api.weather.gov';\n\nconst baseURL = 'http://api.weatherapi.com/v1/';\n\n// When using the config. js file which is gitignored\n// const API_KEY = require('./config')\n\n// Using secret variable\nconst {API_KEY} = process.env;\n\nlet inMetricUnits = false;\n\n// Todays Date\nconst today = new Date();\nconst months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nconst month = months[today.getMonth()];\nconst day = today.getDate();\nconst year = today.getFullYear();\n\nconst formattedDate = `${month  } ${  day  }, ${  year}`;\n\nconst clearContent = () => {\n    const content = document.getElementById('content')\n    content.innerHTML = ''\n}\n\nasync function getWeatherJSON(location, date='', APIserv='forecast') {\n    try {\n        let url = `${baseURL}${APIserv}.json?key=${API_KEY}&q=${location}&aqi=no`;\n        if (date !== '') {\n            url += `&dt=${date}`;\n        }\n        const response = await fetch(url, {mode: 'cors'});\n        const data = await response.json();\n        if (!response.ok) {\n            throw new Error(`Failed to fetch data: ${response.statusText}`);\n        }\n        return data\n    } catch (error) {\n        console.error('Error:', error);\n        return 'No information found.'\n    }\n}\n\n\nconst container = document.createElement('div');\ncontainer.classList.add('container')\ndocument.body.appendChild(container)\n\nconst header = document.createElement('header');\nheader.innerHTML = `\n        <a href=\"https://www.weatherapi.com/\" title=\"Free Weather API\">\n        <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt=\"Weather data by WeatherAPI.com\" border=\"0\"></a>`\ncontainer.appendChild(header);\n\nconst weatherSearch = document.createElement('div');\nweatherSearch.innerHTML = `\n    <div id=\"search\">\n        <form>            \n            <label for=\"location\"></label>\n            <input type=\"text\" id=\"location\" name=\"user-location\" placeholder='zip or city'>\n            <button type=\"submit\" id=\"get-weather-btn\">Get Weather</button>\n        </form>\n    </div>`;\nheader.appendChild(weatherSearch);\n\nconst toggle = document.createElement('div');\ntoggle.classList.add('toggle-container')\ntoggle.innerHTML = `\n    <label class=\"switch\">\n        <input type=\"checkbox\" id=\"toggle-switch\">\n        <span class=\"slider\"></span>\n    </label>\n    <p>Metric</p>\n    `;\nheader.appendChild(toggle);\n\nconst toggleSwitch = document.getElementById('toggle-switch');\ntoggleSwitch.addEventListener('change', () => {\n    inMetricUnits = toggleSwitch.checked;\n    console.log('Units toggled:', inMetricUnits);\n});\n\nconst content = document.createElement('div');\ncontent.setAttribute('id', 'content')\ncontainer.appendChild(content)\n\nconst getWeatherBtn = document.getElementById('get-weather-btn');\ngetWeatherBtn.addEventListener('click', (event) => {\n    event.preventDefault()\n    const input = document.getElementById('location').value\n    const tomorrow = new Date(today);\n    tomorrow.setDate(today.getDate() + 1)\n    const tomDate = tomorrow.toISOString().slice(0, 10);\n    getWeatherJSON(input)\n        .then(data => {\n            clearContent()\n            ;(0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayDateLocation)(data, formattedDate)\n            ;(0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(data,inMetricUnits)\n        })\n        .catch(error => {\n            console.error('Error fetching weather data:', error);\n        });\n    getWeatherJSON(input, tomDate)\n        .then(data => {\n            (0,_functions__WEBPACK_IMPORTED_MODULE_1__.displayTomWeather)(data,inMetricUnits)\n        })\n        .catch(error => {\n            console.error('Error fetching weather data:', error);\n        });\n})\n\n\n\n\n//# sourceURL=webpack://vscode-eslint-example/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;