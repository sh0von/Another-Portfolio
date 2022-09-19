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
exports.id = "pages/api/liveblocks";
exports.ids = ["pages/api/liveblocks"];
exports.modules = {

/***/ "@liveblocks/node":
/*!***********************************!*\
  !*** external "@liveblocks/node" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@liveblocks/node");

/***/ }),

/***/ "(api)/./pages/api/liveblocks.js":
/*!*********************************!*\
  !*** ./pages/api/liveblocks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liveblocks/node */ \"@liveblocks/node\");\n/* harmony import */ var _liveblocks_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_liveblocks_node__WEBPACK_IMPORTED_MODULE_0__);\n\nconst secret = process.env.LIVEBLOCKS_API_KEY;\nasync function auth(req, res) {\n  const room = req.body.room;\n  const result = await (0,_liveblocks_node__WEBPACK_IMPORTED_MODULE_0__.authorize)({\n    room,\n    secret\n  });\n  return res.status(result.status).end(result.body);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGl2ZWJsb2Nrcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUEzQjtBQUNlLGVBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUMzQyxRQUFNQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSixDQUFTRCxJQUF0QjtBQUNBLFFBQU1FLE1BQU0sR0FBRyxNQUFNViwyREFBUyxDQUFDO0FBQUVRLElBQUFBLElBQUY7QUFBUVAsSUFBQUE7QUFBUixHQUFELENBQTlCO0FBQ0EsU0FBT00sR0FBRyxDQUFDSSxNQUFKLENBQVdELE1BQU0sQ0FBQ0MsTUFBbEIsRUFBMEJDLEdBQTFCLENBQThCRixNQUFNLENBQUNELElBQXJDLENBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3J5YW4tcGFyYWctbmV4dC8uL3BhZ2VzL2FwaS9saXZlYmxvY2tzLmpzPzE1ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aG9yaXplIH0gZnJvbSAnQGxpdmVibG9ja3Mvbm9kZSdcbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkxJVkVCTE9DS1NfQVBJX0tFWVxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXV0aChyZXEsIHJlcykge1xuICBjb25zdCByb29tID0gcmVxLmJvZHkucm9vbVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRob3JpemUoeyByb29tLCBzZWNyZXQgfSlcbiAgcmV0dXJuIHJlcy5zdGF0dXMocmVzdWx0LnN0YXR1cykuZW5kKHJlc3VsdC5ib2R5KVxufSJdLCJuYW1lcyI6WyJhdXRob3JpemUiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTElWRUJMT0NLU19BUElfS0VZIiwiYXV0aCIsInJlcSIsInJlcyIsInJvb20iLCJib2R5IiwicmVzdWx0Iiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/liveblocks.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/liveblocks.js"));
module.exports = __webpack_exports__;

})();