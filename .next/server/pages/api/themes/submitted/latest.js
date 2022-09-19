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
exports.id = "pages/api/themes/submitted/latest";
exports.ids = ["pages/api/themes/submitted/latest"];
exports.modules = {

/***/ "airtable-plus":
/*!********************************!*\
  !*** external "airtable-plus" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("airtable-plus");

/***/ }),

/***/ "(api)/./pages/api/themes/submitted/latest.js":
/*!**********************************************!*\
  !*** ./pages/api/themes/submitted/latest.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var airtable_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable-plus */ \"airtable-plus\");\n/* harmony import */ var airtable_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable_plus__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const airtable = new (airtable_plus__WEBPACK_IMPORTED_MODULE_0___default())({\n    baseID: process.env.AIRTABLE_BASE,\n    apiKey: process.env.AIRTABLE_API_KEY,\n    tableName: 'themes'\n  });\n  const items = await airtable.read({\n    sort: [{\n      field: 'Date',\n      direction: 'desc'\n    }],\n    maxRecords: 8\n  });\n  const latest = items[0].fields;\n  latest.length = 8;\n  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');\n  return res.status(200).json({\n    latest\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGhlbWVzL3N1Ym1pdHRlZC9sYXRlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFFakMsUUFBTUMsUUFBUSxHQUFHLElBQUlILHNEQUFKLENBQWlCO0FBQ2hDSSxJQUFBQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQURZO0FBRWhDQyxJQUFBQSxNQUFNLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxnQkFGWTtBQUdoQ0MsSUFBQUEsU0FBUyxFQUFFO0FBSHFCLEdBQWpCLENBQWpCO0FBTUEsUUFBTUMsS0FBSyxHQUFHLE1BQU1SLFFBQVEsQ0FBQ1MsSUFBVCxDQUFjO0FBQ2hDQyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUFDQyxNQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQkMsTUFBQUEsU0FBUyxFQUFFO0FBQTNCLEtBQUQsQ0FEMEI7QUFFaENDLElBQUFBLFVBQVUsRUFBRTtBQUZvQixHQUFkLENBQXBCO0FBS0EsUUFBTUMsTUFBTSxHQUFHTixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNPLE1BQXhCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixDQUFoQjtBQUVBakIsRUFBQUEsR0FBRyxDQUFDa0IsU0FBSixDQUNFLGVBREYsRUFFRSxzREFGRjtBQUtBLFNBQU9sQixHQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUwsSUFBQUE7QUFBRixHQUFyQixDQUFQO0FBQ0QsQ0F0QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi9wYWdlcy9hcGkvdGhlbWVzL3N1Ym1pdHRlZC9sYXRlc3QuanM/MzczYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWlydGFibGVQbHVzIGZyb20gJ2FpcnRhYmxlLXBsdXMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IGFpcnRhYmxlID0gbmV3IEFpcnRhYmxlUGx1cyh7XG4gICAgYmFzZUlEOiBwcm9jZXNzLmVudi5BSVJUQUJMRV9CQVNFLFxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWSxcbiAgICB0YWJsZU5hbWU6ICd0aGVtZXMnXG4gIH0pO1xuXG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgYWlydGFibGUucmVhZCh7XG4gICAgc29ydDogW3tmaWVsZDogJ0RhdGUnLCBkaXJlY3Rpb246ICdkZXNjJ31dLFxuICAgIG1heFJlY29yZHM6IDhcbiAgfSk7XG5cbiAgY29uc3QgbGF0ZXN0ID0gaXRlbXNbMF0uZmllbGRzXG4gIGxhdGVzdC5sZW5ndGggPSA4XG5cbiAgcmVzLnNldEhlYWRlcihcbiAgICAnQ2FjaGUtQ29udHJvbCcsXG4gICAgJ3B1YmxpYywgcy1tYXhhZ2U9ODY0MDAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGU9NDMyMDAnXG4gICk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbGF0ZXN0IH0pO1xufTsiXSwibmFtZXMiOlsiQWlydGFibGVQbHVzIiwicmVxIiwicmVzIiwiYWlydGFibGUiLCJiYXNlSUQiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQkFTRSIsImFwaUtleSIsIkFJUlRBQkxFX0FQSV9LRVkiLCJ0YWJsZU5hbWUiLCJpdGVtcyIsInJlYWQiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJtYXhSZWNvcmRzIiwibGF0ZXN0IiwiZmllbGRzIiwibGVuZ3RoIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/themes/submitted/latest.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/themes/submitted/latest.js"));
module.exports = __webpack_exports__;

})();