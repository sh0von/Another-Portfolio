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
exports.id = "pages/api/featured";
exports.ids = ["pages/api/featured"];
exports.modules = {

/***/ "airtable-plus":
/*!********************************!*\
  !*** external "airtable-plus" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("airtable-plus");

/***/ }),

/***/ "(api)/./pages/api/featured.js":
/*!*******************************!*\
  !*** ./pages/api/featured.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var airtable_plus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable-plus */ \"airtable-plus\");\n/* harmony import */ var airtable_plus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable_plus__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const airtable = new (airtable_plus__WEBPACK_IMPORTED_MODULE_0___default())({\n    baseID: process.env.AIRTABLE_BASE,\n    apiKey: process.env.AIRTABLE_API_KEY,\n    tableName: 'featured'\n  });\n  const featured = await airtable.read();\n  const items = featured.map(item => ({\n    name: item.fields.Name,\n    description: item.fields.Description,\n    link: item.fields.Link,\n    outbound: true\n  }));\n  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');\n  return res.status(200).json({\n    items\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVhdHVyZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFFakMsUUFBTUMsUUFBUSxHQUFHLElBQUlILHNEQUFKLENBQWlCO0FBQ2hDSSxJQUFBQSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQURZO0FBRWhDQyxJQUFBQSxNQUFNLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxnQkFGWTtBQUdoQ0MsSUFBQUEsU0FBUyxFQUFFO0FBSHFCLEdBQWpCLENBQWpCO0FBTUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1SLFFBQVEsQ0FBQ1MsSUFBVCxFQUF2QjtBQUVBLFFBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxHQUFULENBQWNDLElBQUQsS0FBVztBQUNwQ0MsSUFBQUEsSUFBSSxFQUFFRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsSUFEa0I7QUFFcENDLElBQUFBLFdBQVcsRUFBRUosSUFBSSxDQUFDRSxNQUFMLENBQVlHLFdBRlc7QUFHcENDLElBQUFBLElBQUksRUFBRU4sSUFBSSxDQUFDRSxNQUFMLENBQVlLLElBSGtCO0FBSXBDQyxJQUFBQSxRQUFRLEVBQUU7QUFKMEIsR0FBWCxDQUFiLENBQWQ7QUFPQXJCLEVBQUFBLEdBQUcsQ0FBQ3NCLFNBQUosQ0FDRSxlQURGLEVBRUUsc0RBRkY7QUFLQSxTQUFPdEIsR0FBRyxDQUFDdUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUViLElBQUFBO0FBQUYsR0FBckIsQ0FBUDtBQUNELENBdkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnlhbi1wYXJhZy1uZXh0Ly4vcGFnZXMvYXBpL2ZlYXR1cmVkLmpzPzJlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFpcnRhYmxlUGx1cyBmcm9tICdhaXJ0YWJsZS1wbHVzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICBjb25zdCBhaXJ0YWJsZSA9IG5ldyBBaXJ0YWJsZVBsdXMoe1xuICAgIGJhc2VJRDogcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRSxcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkFJUlRBQkxFX0FQSV9LRVksXG4gICAgdGFibGVOYW1lOiAnZmVhdHVyZWQnXG4gIH0pO1xuXG4gIGNvbnN0IGZlYXR1cmVkID0gYXdhaXQgYWlydGFibGUucmVhZCgpO1xuXG4gIGNvbnN0IGl0ZW1zID0gZmVhdHVyZWQubWFwKChpdGVtKSA9PiAoe1xuICAgIG5hbWU6IGl0ZW0uZmllbGRzLk5hbWUsXG4gICAgZGVzY3JpcHRpb246IGl0ZW0uZmllbGRzLkRlc2NyaXB0aW9uLFxuICAgIGxpbms6IGl0ZW0uZmllbGRzLkxpbmssXG4gICAgb3V0Ym91bmQ6IHRydWVcbiAgfSkpO1xuXG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgJ0NhY2hlLUNvbnRyb2wnLFxuICAgICdwdWJsaWMsIHMtbWF4YWdlPTg2NDAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTQzMjAwJ1xuICApO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGl0ZW1zIH0pO1xufTsiXSwibmFtZXMiOlsiQWlydGFibGVQbHVzIiwicmVxIiwicmVzIiwiYWlydGFibGUiLCJiYXNlSUQiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQkFTRSIsImFwaUtleSIsIkFJUlRBQkxFX0FQSV9LRVkiLCJ0YWJsZU5hbWUiLCJmZWF0dXJlZCIsInJlYWQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiZmllbGRzIiwiTmFtZSIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJsaW5rIiwiTGluayIsIm91dGJvdW5kIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/featured.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/featured.js"));
module.exports = __webpack_exports__;

})();