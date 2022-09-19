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
exports.id = "pages/api/profile/roles";
exports.ids = ["pages/api/profile/roles"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/profile/roles.js":
/*!************************************!*\
  !*** ./pages/api/profile/roles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst {\n  Client\n} = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n\nconst notion = new Client({\n  auth: process.env.NOTION_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const response = await notion.databases.query({\n    database_id: process.env.NOTION_ROLE_DATABASE_ID\n  });\n  const roles = {\n    verified: []\n  };\n  response.results.map(item => {\n    if (item.properties.Verified.checkbox) {\n      roles.verified.push({\n        id: item.id,\n        company: item.properties.Company.title[0].plain_text,\n        date: item.properties.Time.rich_text[0].plain_text,\n        role: item.properties.Role.rich_text[0].plain_text,\n        logo: item.properties.Icon.files[0].name,\n        order: item.properties.Order.number,\n        link: item.properties.Link.url\n      });\n    }\n  });\n  roles.verified.sort((a, b) => parseFloat(a.order) > parseFloat(b.order) ? -1 : 1);\n  res.status(200).json({\n    roles\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9yb2xlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQWFDLG1CQUFPLENBQUMsMENBQUQsQ0FBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlGLE1BQUosQ0FBVztBQUFFRyxFQUFBQSxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUFwQixDQUFYLENBQWY7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVdDLEdBQVgsS0FBbUI7QUFFaEMsUUFBTUMsUUFBUSxHQUFHLE1BQU1QLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkMsS0FBakIsQ0FBdUI7QUFDNUNDLElBQUFBLFdBQVcsRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRO0FBRG1CLEdBQXZCLENBQXZCO0FBSUEsUUFBTUMsS0FBSyxHQUFHO0FBQ1pDLElBQUFBLFFBQVEsRUFBRTtBQURFLEdBQWQ7QUFJQU4sRUFBQUEsUUFBUSxDQUFDTyxPQUFULENBQWlCQyxHQUFqQixDQUFxQkMsSUFBSSxJQUFJO0FBQzNCLFFBQUdBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFFBQTVCLEVBQXNDO0FBQ3BDUCxNQUFBQSxLQUFLLENBQUNDLFFBQU4sQ0FBZU8sSUFBZixDQUFvQjtBQUNsQkMsUUFBQUEsRUFBRSxFQUFFTCxJQUFJLENBQUNLLEVBRFM7QUFFbEJDLFFBQUFBLE9BQU8sRUFBRU4sSUFBSSxDQUFDQyxVQUFMLENBQWdCTSxPQUFoQixDQUF3QkMsS0FBeEIsQ0FBOEIsQ0FBOUIsRUFBaUNDLFVBRnhCO0FBR2xCQyxRQUFBQSxJQUFJLEVBQUVWLElBQUksQ0FBQ0MsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBcUJDLFNBQXJCLENBQStCLENBQS9CLEVBQWtDSCxVQUh0QjtBQUlsQkksUUFBQUEsSUFBSSxFQUFFYixJQUFJLENBQUNDLFVBQUwsQ0FBZ0JhLElBQWhCLENBQXFCRixTQUFyQixDQUErQixDQUEvQixFQUFrQ0gsVUFKdEI7QUFLbEJNLFFBQUFBLElBQUksRUFBRWYsSUFBSSxDQUFDQyxVQUFMLENBQWdCZSxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEJDLElBTGxCO0FBTWxCQyxRQUFBQSxLQUFLLEVBQUVuQixJQUFJLENBQUNDLFVBQUwsQ0FBZ0JtQixLQUFoQixDQUFzQkMsTUFOWDtBQU9sQkMsUUFBQUEsSUFBSSxFQUFFdEIsSUFBSSxDQUFDQyxVQUFMLENBQWdCc0IsSUFBaEIsQ0FBcUJDO0FBUFQsT0FBcEI7QUFTRDtBQUNGLEdBWkQ7QUFjQTVCLEVBQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlNEIsSUFBZixDQUFvQixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBV0MsVUFBVSxDQUFDRixDQUFDLENBQUNQLEtBQUgsQ0FBVixHQUFzQlMsVUFBVSxDQUFDRCxDQUFDLENBQUNSLEtBQUgsQ0FBakMsR0FBOEMsQ0FBQyxDQUEvQyxHQUFtRCxDQUFqRjtBQUVBN0IsRUFBQUEsR0FBRyxDQUFDdUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVsQyxJQUFBQTtBQUFGLEdBQXJCO0FBQ0QsQ0EzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi9wYWdlcy9hcGkvcHJvZmlsZS9yb2xlcy5qcz8yZjk1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ2xpZW50IH0gPSByZXF1aXJlKCdAbm90aW9uaHEvY2xpZW50Jyk7XG5cbmNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoeyBhdXRoOiBwcm9jZXNzLmVudi5OT1RJT05fQVBJX0tFWSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSxyZXMpID0+IHtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoeyBcbiAgICBkYXRhYmFzZV9pZDogcHJvY2Vzcy5lbnYuTk9USU9OX1JPTEVfREFUQUJBU0VfSUQsXG4gIH0pO1xuXG4gIGNvbnN0IHJvbGVzID0ge1xuICAgIHZlcmlmaWVkOiBbXVxuICB9XG5cbiAgcmVzcG9uc2UucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG4gICAgaWYoaXRlbS5wcm9wZXJ0aWVzLlZlcmlmaWVkLmNoZWNrYm94KSB7XG4gICAgICByb2xlcy52ZXJpZmllZC5wdXNoKHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGNvbXBhbnk6IGl0ZW0ucHJvcGVydGllcy5Db21wYW55LnRpdGxlWzBdLnBsYWluX3RleHQsXG4gICAgICAgIGRhdGU6IGl0ZW0ucHJvcGVydGllcy5UaW1lLnJpY2hfdGV4dFswXS5wbGFpbl90ZXh0LFxuICAgICAgICByb2xlOiBpdGVtLnByb3BlcnRpZXMuUm9sZS5yaWNoX3RleHRbMF0ucGxhaW5fdGV4dCxcbiAgICAgICAgbG9nbzogaXRlbS5wcm9wZXJ0aWVzLkljb24uZmlsZXNbMF0ubmFtZSxcbiAgICAgICAgb3JkZXI6IGl0ZW0ucHJvcGVydGllcy5PcmRlci5udW1iZXIsXG4gICAgICAgIGxpbms6IGl0ZW0ucHJvcGVydGllcy5MaW5rLnVybFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgcm9sZXMudmVyaWZpZWQuc29ydCgoYSwgYikgPT4gKHBhcnNlRmxvYXQoYS5vcmRlcikgPiBwYXJzZUZsb2F0KGIub3JkZXIpKSA/IC0xIDogMSlcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJvbGVzIH0pO1xufSJdLCJuYW1lcyI6WyJDbGllbnQiLCJyZXF1aXJlIiwibm90aW9uIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fQVBJX0tFWSIsInJlcSIsInJlcyIsInJlc3BvbnNlIiwiZGF0YWJhc2VzIiwicXVlcnkiLCJkYXRhYmFzZV9pZCIsIk5PVElPTl9ST0xFX0RBVEFCQVNFX0lEIiwicm9sZXMiLCJ2ZXJpZmllZCIsInJlc3VsdHMiLCJtYXAiLCJpdGVtIiwicHJvcGVydGllcyIsIlZlcmlmaWVkIiwiY2hlY2tib3giLCJwdXNoIiwiaWQiLCJjb21wYW55IiwiQ29tcGFueSIsInRpdGxlIiwicGxhaW5fdGV4dCIsImRhdGUiLCJUaW1lIiwicmljaF90ZXh0Iiwicm9sZSIsIlJvbGUiLCJsb2dvIiwiSWNvbiIsImZpbGVzIiwibmFtZSIsIm9yZGVyIiwiT3JkZXIiLCJudW1iZXIiLCJsaW5rIiwiTGluayIsInVybCIsInNvcnQiLCJhIiwiYiIsInBhcnNlRmxvYXQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/roles.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/roles.js"));
module.exports = __webpack_exports__;

})();