"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/worksheets/[sheet]";
exports.ids = ["pages/api/worksheets/[sheet]"];
exports.modules = {

/***/ "airtable-plus":
/*!********************************!*\
  !*** external "airtable-plus" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("airtable-plus");

/***/ }),

/***/ "(api)/./pages/api/worksheets/[sheet].js":
/*!*****************************************!*\
  !*** ./pages/api/worksheets/[sheet].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var airtable_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable-plus */ \"airtable-plus\");\n/* harmony import */ var airtable_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable_plus__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    query: {\n      sheet\n    }\n  } = req;\n  const airtable = new (airtable_plus__WEBPACK_IMPORTED_MODULE_0___default())({\n    baseID: process.env.AIRTABLE_BASE,\n    apiKey: process.env.AIRTABLE_API_KEY,\n    tableName: sheet\n  });\n  const items = await airtable.read();\n  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');\n  return res.status(200).json({\n    items\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd29ya3NoZWV0cy9bc2hlZXRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBRWpDLFFBQU07QUFDSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFESCxNQUVGSCxHQUZKO0FBSUEsUUFBTUksUUFBUSxHQUFHLElBQUlMLHNEQUFKLENBQWlCO0FBQ2hDTSxJQUFBQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQURZO0FBRWhDQyxJQUFBQSxNQUFNLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxnQkFGWTtBQUdoQ0MsSUFBQUEsU0FBUyxFQUFFUjtBQUhxQixHQUFqQixDQUFqQjtBQU1BLFFBQU1TLEtBQUssR0FBRyxNQUFNUixRQUFRLENBQUNTLElBQVQsRUFBcEI7QUFFQVosRUFBQUEsR0FBRyxDQUFDYSxTQUFKLENBQ0UsZUFERixFQUVFLHNEQUZGO0FBS0EsU0FBT2IsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUosSUFBQUE7QUFBRixHQUFyQixDQUFQO0FBQ0QsQ0FwQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi9wYWdlcy9hcGkvd29ya3NoZWV0cy9bc2hlZXRdLmpzPzY2NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFpcnRhYmxlUGx1cyBmcm9tICdhaXJ0YWJsZS1wbHVzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgc2hlZXQgfSxcbiAgfSA9IHJlcVxuXG4gIGNvbnN0IGFpcnRhYmxlID0gbmV3IEFpcnRhYmxlUGx1cyh7XG4gICAgYmFzZUlEOiBwcm9jZXNzLmVudi5BSVJUQUJMRV9CQVNFLFxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWSxcbiAgICB0YWJsZU5hbWU6IHNoZWV0XG4gIH0pO1xuXG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgYWlydGFibGUucmVhZCgpO1xuXG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgJ0NhY2hlLUNvbnRyb2wnLFxuICAgICdwdWJsaWMsIHMtbWF4YWdlPTg2NDAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTQzMjAwJ1xuICApO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGl0ZW1zIH0pO1xufTsiXSwibmFtZXMiOlsiQWlydGFibGVQbHVzIiwicmVxIiwicmVzIiwicXVlcnkiLCJzaGVldCIsImFpcnRhYmxlIiwiYmFzZUlEIiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0JBU0UiLCJhcGlLZXkiLCJBSVJUQUJMRV9BUElfS0VZIiwidGFibGVOYW1lIiwiaXRlbXMiLCJyZWFkIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/worksheets/[sheet].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/worksheets/[sheet].js"));
module.exports = __webpack_exports__;

})();