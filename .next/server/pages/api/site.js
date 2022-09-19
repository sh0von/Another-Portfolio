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
exports.id = "pages/api/site";
exports.ids = ["pages/api/site"];
exports.modules = {

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@octokit/rest");

/***/ }),

/***/ "(api)/./pages/api/site/index.js":
/*!*********************************!*\
  !*** ./pages/api/site/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst {\n  Octokit\n} = __webpack_require__(/*! @octokit/rest */ \"@octokit/rest\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const key = process.env.GITHUB_API_KEY;\n  const octokit = new Octokit({\n    auth: key\n  });\n  const repoFetch = await octokit.request('/repos/ryan-parag/ryanparag.com');\n  const repo = {\n    link: repoFetch.data.html_url,\n    updated: repoFetch.data.updated_at,\n    name: repoFetch.data.name,\n    owner: {\n      avatar: repoFetch.data.owner.avatar_url,\n      user: repoFetch.data.owner.login,\n      link: repoFetch.data.owner.html_url\n    }\n  };\n  return res.status(200).json({\n    repo\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2l0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQWNDLG1CQUFPLENBQUMsb0NBQUQsQ0FBM0I7O0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBRWpDLFFBQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLElBQUlSLE9BQUosQ0FBWTtBQUMxQlMsSUFBQUEsSUFBSSxFQUFFTDtBQURvQixHQUFaLENBQWhCO0FBSUEsUUFBTU0sU0FBUyxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixpQ0FBaEIsQ0FBeEI7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFDWEMsSUFBQUEsSUFBSSxFQUFFSCxTQUFTLENBQUNJLElBQVYsQ0FBZUMsUUFEVjtBQUVYQyxJQUFBQSxPQUFPLEVBQUVOLFNBQVMsQ0FBQ0ksSUFBVixDQUFlRyxVQUZiO0FBR1hDLElBQUFBLElBQUksRUFBRVIsU0FBUyxDQUFDSSxJQUFWLENBQWVJLElBSFY7QUFJWEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLE1BQU0sRUFBRVYsU0FBUyxDQUFDSSxJQUFWLENBQWVLLEtBQWYsQ0FBcUJFLFVBRHhCO0FBRUxDLE1BQUFBLElBQUksRUFBRVosU0FBUyxDQUFDSSxJQUFWLENBQWVLLEtBQWYsQ0FBcUJJLEtBRnRCO0FBR0xWLE1BQUFBLElBQUksRUFBRUgsU0FBUyxDQUFDSSxJQUFWLENBQWVLLEtBQWYsQ0FBcUJKO0FBSHRCO0FBSkksR0FBYjtBQVdBLFNBQU9aLEdBQUcsQ0FBQ3FCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFYixJQUFBQTtBQUFGLEdBQXJCLENBQVA7QUFDRCxDQXBCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3J5YW4tcGFyYWctbmV4dC8uL3BhZ2VzL2FwaS9zaXRlL2luZGV4LmpzPzZhYTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBPY3Rva2l0IH0gPSByZXF1aXJlKFwiQG9jdG9raXQvcmVzdFwiKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5HSVRIVUJfQVBJX0tFWVxuICBjb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoe1xuICAgIGF1dGg6IGtleVxuICB9KVxuXG4gIGNvbnN0IHJlcG9GZXRjaCA9IGF3YWl0IG9jdG9raXQucmVxdWVzdCgnL3JlcG9zL3J5YW4tcGFyYWcvcnlhbnBhcmFnLmNvbScpXG4gIGNvbnN0IHJlcG8gPSB7XG4gICAgbGluazogcmVwb0ZldGNoLmRhdGEuaHRtbF91cmwsXG4gICAgdXBkYXRlZDogcmVwb0ZldGNoLmRhdGEudXBkYXRlZF9hdCxcbiAgICBuYW1lOiByZXBvRmV0Y2guZGF0YS5uYW1lLFxuICAgIG93bmVyOiB7XG4gICAgICBhdmF0YXI6IHJlcG9GZXRjaC5kYXRhLm93bmVyLmF2YXRhcl91cmwsXG4gICAgICB1c2VyOiByZXBvRmV0Y2guZGF0YS5vd25lci5sb2dpbixcbiAgICAgIGxpbms6IHJlcG9GZXRjaC5kYXRhLm93bmVyLmh0bWxfdXJsXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXBvIH0pXG59Il0sIm5hbWVzIjpbIk9jdG9raXQiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwia2V5IiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9BUElfS0VZIiwib2N0b2tpdCIsImF1dGgiLCJyZXBvRmV0Y2giLCJyZXF1ZXN0IiwicmVwbyIsImxpbmsiLCJkYXRhIiwiaHRtbF91cmwiLCJ1cGRhdGVkIiwidXBkYXRlZF9hdCIsIm5hbWUiLCJvd25lciIsImF2YXRhciIsImF2YXRhcl91cmwiLCJ1c2VyIiwibG9naW4iLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/site/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/site/index.js"));
module.exports = __webpack_exports__;

})();