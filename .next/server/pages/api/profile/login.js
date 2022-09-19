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
exports.id = "pages/api/profile/login";
exports.ids = ["pages/api/profile/login"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/profile/login.js":
/*!************************************!*\
  !*** ./pages/api/profile/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst {\n  Client\n} = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n\nconst notion = new Client({\n  auth: process.env.NOTION_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const response = await notion.databases.query({\n    database_id: process.env.NOTION_AUTH_DATABASE_ID\n  });\n  const sites = response.results.find(function (item, index) {\n    if (item.properties.Site.title[0].text.content === 'ryanparag.com') return true;\n  });\n  const pass = sites.properties.Pass.rich_text[0].text.content;\n\n  if (req.body.token === pass) {\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.AUTH_STRING, {\n      httpOnly: true,\n      secure: false,\n      maxAge: 60 * 60,\n      sameSite: \"strict\",\n      path: '/'\n    }));\n    res.status(200);\n    res.json({\n      success: true\n    });\n  } else {\n    res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", \"error\", {\n      httpOnly: true,\n      secure: false,\n      maxAge: 60 * 60,\n      sameSite: \"strict\",\n      path: '/'\n    }));\n    res.status(200);\n    res.json({\n      success: true\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNO0FBQUVDLEVBQUFBO0FBQUYsSUFBYUMsbUJBQU8sQ0FBQywwQ0FBRCxDQUExQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsTUFBSixDQUFXO0FBQUVHLEVBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQXBCLENBQVgsQ0FBZjtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUVqQyxRQUFNQyxRQUFRLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxTQUFQLENBQWlCQyxLQUFqQixDQUF1QjtBQUM1Q0MsSUFBQUEsV0FBVyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFEbUIsR0FBdkIsQ0FBdkI7QUFJQSxRQUFNQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkMsSUFBakIsQ0FBc0IsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3hELFFBQUdELElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLENBQTNCLEVBQThCQyxJQUE5QixDQUFtQ0MsT0FBbkMsS0FBK0MsZUFBbEQsRUFDRSxPQUFPLElBQVA7QUFDSCxHQUhhLENBQWQ7QUFLQSxRQUFNQyxJQUFJLEdBQUdWLEtBQUssQ0FBQ0ssVUFBTixDQUFpQk0sSUFBakIsQ0FBc0JDLFNBQXRCLENBQWdDLENBQWhDLEVBQW1DSixJQUFuQyxDQUF3Q0MsT0FBckQ7O0FBRUEsTUFBR2hCLEdBQUcsQ0FBQ29CLElBQUosQ0FBU0MsS0FBVCxLQUFtQkosSUFBdEIsRUFBNEI7QUFDMUJoQixJQUFBQSxHQUFHLENBQUNxQixTQUFKLENBQWMsWUFBZCxFQUE0QjlCLHVEQUFBLENBQWlCLE9BQWpCLEVBQTBCSyxPQUFPLENBQUNDLEdBQVIsQ0FBWTBCLFdBQXRDLEVBQW1EO0FBQzdFQyxNQUFBQSxRQUFRLEVBQUUsSUFEbUU7QUFFN0VDLE1BQUFBLE1BQU0sT0FGdUU7QUFHN0VDLE1BQUFBLE1BQU0sRUFBRSxLQUFLLEVBSGdFO0FBSTdFQyxNQUFBQSxRQUFRLEVBQUUsUUFKbUU7QUFLN0VDLE1BQUFBLElBQUksRUFBRTtBQUx1RSxLQUFuRCxDQUE1QjtBQU9BNUIsSUFBQUEsR0FBRyxDQUFDNkIsTUFBSixDQUFXLEdBQVg7QUFDQTdCLElBQUFBLEdBQUcsQ0FBQzhCLElBQUosQ0FBUztBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFUO0FBQ0QsR0FWRCxNQVVPO0FBQ0wvQixJQUFBQSxHQUFHLENBQUNxQixTQUFKLENBQWMsWUFBZCxFQUE0QjlCLHVEQUFBLENBQWlCLE9BQWpCLEVBQTBCLE9BQTFCLEVBQW1DO0FBQzdEaUMsTUFBQUEsUUFBUSxFQUFFLElBRG1EO0FBRTdEQyxNQUFBQSxNQUFNLE9BRnVEO0FBRzdEQyxNQUFBQSxNQUFNLEVBQUUsS0FBSyxFQUhnRDtBQUk3REMsTUFBQUEsUUFBUSxFQUFFLFFBSm1EO0FBSzdEQyxNQUFBQSxJQUFJLEVBQUU7QUFMdUQsS0FBbkMsQ0FBNUI7QUFPQTVCLElBQUFBLEdBQUcsQ0FBQzZCLE1BQUosQ0FBVyxHQUFYO0FBQ0E3QixJQUFBQSxHQUFHLENBQUM4QixJQUFKLENBQVM7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBVDtBQUNEO0FBQ0YsQ0FsQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi9wYWdlcy9hcGkvcHJvZmlsZS9sb2dpbi5qcz8zODk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiXG5jb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZSgnQG5vdGlvbmhxL2NsaWVudCcpO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVkgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7IFxuICAgIGRhdGFiYXNlX2lkOiBwcm9jZXNzLmVudi5OT1RJT05fQVVUSF9EQVRBQkFTRV9JRCxcbiAgfSk7XG5cbiAgY29uc3Qgc2l0ZXMgPSByZXNwb25zZS5yZXN1bHRzLmZpbmQoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICBpZihpdGVtLnByb3BlcnRpZXMuU2l0ZS50aXRsZVswXS50ZXh0LmNvbnRlbnQgPT09ICdyeWFucGFyYWcuY29tJylcbiAgICAgIHJldHVybiB0cnVlXG4gIH0pO1xuXG4gIGNvbnN0IHBhc3MgPSBzaXRlcy5wcm9wZXJ0aWVzLlBhc3MucmljaF90ZXh0WzBdLnRleHQuY29udGVudFxuXG4gIGlmKHJlcS5ib2R5LnRva2VuID09PSBwYXNzKSB7XG4gICAgcmVzLnNldEhlYWRlcihcIlNldC1Db29raWVcIiwgY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsIHByb2Nlc3MuZW52LkFVVEhfU1RSSU5HLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgICAgIG1heEFnZTogNjAgKiA2MCxcbiAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgcGF0aDogJy8nXG4gICAgfSkpXG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIGNvb2tpZS5zZXJpYWxpemUoXCJ0b2tlblwiLCBcImVycm9yXCIsIHtcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiLFxuICAgICAgbWF4QWdlOiA2MCAqIDYwLFxuICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXG4gICAgICBwYXRoOiAnLydcbiAgICB9KSlcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG4gIH1cbn0iXSwibmFtZXMiOlsiY29va2llIiwiQ2xpZW50IiwicmVxdWlyZSIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX0FQSV9LRVkiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImRhdGFiYXNlcyIsInF1ZXJ5IiwiZGF0YWJhc2VfaWQiLCJOT1RJT05fQVVUSF9EQVRBQkFTRV9JRCIsInNpdGVzIiwicmVzdWx0cyIsImZpbmQiLCJpdGVtIiwiaW5kZXgiLCJwcm9wZXJ0aWVzIiwiU2l0ZSIsInRpdGxlIiwidGV4dCIsImNvbnRlbnQiLCJwYXNzIiwiUGFzcyIsInJpY2hfdGV4dCIsImJvZHkiLCJ0b2tlbiIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsIkFVVEhfU1RSSU5HIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/login.js"));
module.exports = __webpack_exports__;

})();