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
exports.id = "pages/api/profile/now";
exports.ids = ["pages/api/profile/now"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/profile/now.js":
/*!**********************************!*\
  !*** ./pages/api/profile/now.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst {\n  Client\n} = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n\nconst notion = new Client({\n  auth: process.env.NOTION_API_KEY\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const response = await notion.databases.query({\n    database_id: process.env.NOTION_DATABASE_ID\n  });\n  const now = {\n    working: [],\n    building: [],\n    playing: [],\n    reading: []\n  };\n  response.results.map(item => {\n    const lineItem = {\n      id: item.id,\n      last_edited: item.last_edited_time,\n      title: item.properties.Name.title[0].plain_text,\n      description: item.properties.Description.rich_text[0].plain_text\n    };\n\n    switch (item.properties.Tags.select.name) {\n      case 'Working':\n        now.working.push(lineItem);\n        break;\n\n      case 'Building':\n        now.building.push(lineItem);\n        break;\n\n      case 'Reading':\n        now.reading.push(lineItem);\n        break;\n\n      default:\n        now.playing.push(lineItem);\n    }\n  });\n  res.status(200).json({\n    now\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9ub3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUFhQyxtQkFBTyxDQUFDLDBDQUFELENBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixNQUFKLENBQVc7QUFBRUcsRUFBQUEsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFBcEIsQ0FBWCxDQUFmO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUFXQyxHQUFYLEtBQW1CO0FBRWhDLFFBQU1DLFFBQVEsR0FBRyxNQUFNUCxNQUFNLENBQUNRLFNBQVAsQ0FBaUJDLEtBQWpCLENBQXVCO0FBQzVDQyxJQUFBQSxXQUFXLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUTtBQURtQixHQUF2QixDQUF2QjtBQUlBLFFBQU1DLEdBQUcsR0FBRztBQUNWQyxJQUFBQSxPQUFPLEVBQUUsRUFEQztBQUVWQyxJQUFBQSxRQUFRLEVBQUUsRUFGQTtBQUdWQyxJQUFBQSxPQUFPLEVBQUUsRUFIQztBQUlWQyxJQUFBQSxPQUFPLEVBQUU7QUFKQyxHQUFaO0FBT0FULEVBQUFBLFFBQVEsQ0FBQ1UsT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUJDLElBQUksSUFBSTtBQUUzQixVQUFNQyxRQUFRLEdBQUc7QUFDZkMsTUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBRE07QUFFZkMsTUFBQUEsV0FBVyxFQUFFSCxJQUFJLENBQUNJLGdCQUZIO0FBR2ZDLE1BQUFBLEtBQUssRUFBRUwsSUFBSSxDQUFDTSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQkYsS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEJHLFVBSHRCO0FBSWZDLE1BQUFBLFdBQVcsRUFBRVQsSUFBSSxDQUFDTSxVQUFMLENBQWdCSSxXQUFoQixDQUE0QkMsU0FBNUIsQ0FBc0MsQ0FBdEMsRUFBeUNIO0FBSnZDLEtBQWpCOztBQU9BLFlBQVFSLElBQUksQ0FBQ00sVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUJDLE1BQXJCLENBQTRCQyxJQUFwQztBQUNFLFdBQUssU0FBTDtBQUNFckIsUUFBQUEsR0FBRyxDQUFDQyxPQUFKLENBQVlxQixJQUFaLENBQWlCZCxRQUFqQjtBQUNBOztBQUNGLFdBQUssVUFBTDtBQUNFUixRQUFBQSxHQUFHLENBQUNFLFFBQUosQ0FBYW9CLElBQWIsQ0FBa0JkLFFBQWxCO0FBQ0E7O0FBQ0YsV0FBSyxTQUFMO0FBQ0VSLFFBQUFBLEdBQUcsQ0FBQ0ksT0FBSixDQUFZa0IsSUFBWixDQUFpQmQsUUFBakI7QUFDQTs7QUFDRjtBQUNFUixRQUFBQSxHQUFHLENBQUNHLE9BQUosQ0FBWW1CLElBQVosQ0FBaUJkLFFBQWpCO0FBWEo7QUFhRCxHQXRCRDtBQXdCQWQsRUFBQUEsR0FBRyxDQUFDNkIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUV4QixJQUFBQTtBQUFGLEdBQXJCO0FBQ0QsQ0F0Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeWFuLXBhcmFnLW5leHQvLi9wYWdlcy9hcGkvcHJvZmlsZS9ub3cuanM/Njg4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZSgnQG5vdGlvbmhxL2NsaWVudCcpO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX0FQSV9LRVkgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKSA9PiB7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHsgXG4gICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9EQVRBQkFTRV9JRCxcbiAgfSk7XG5cbiAgY29uc3Qgbm93ID0ge1xuICAgIHdvcmtpbmc6IFtdLFxuICAgIGJ1aWxkaW5nOiBbXSxcbiAgICBwbGF5aW5nOiBbXSxcbiAgICByZWFkaW5nOiBbXVxuICB9XG5cbiAgcmVzcG9uc2UucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG5cbiAgICBjb25zdCBsaW5lSXRlbSA9IHtcbiAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgbGFzdF9lZGl0ZWQ6IGl0ZW0ubGFzdF9lZGl0ZWRfdGltZSxcbiAgICAgIHRpdGxlOiBpdGVtLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LFxuICAgICAgZGVzY3JpcHRpb246IGl0ZW0ucHJvcGVydGllcy5EZXNjcmlwdGlvbi5yaWNoX3RleHRbMF0ucGxhaW5fdGV4dFxuICAgIH1cblxuICAgIHN3aXRjaCAoaXRlbS5wcm9wZXJ0aWVzLlRhZ3Muc2VsZWN0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ1dvcmtpbmcnOlxuICAgICAgICBub3cud29ya2luZy5wdXNoKGxpbmVJdGVtKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0J1aWxkaW5nJzpcbiAgICAgICAgbm93LmJ1aWxkaW5nLnB1c2gobGluZUl0ZW0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnUmVhZGluZyc6XG4gICAgICAgIG5vdy5yZWFkaW5nLnB1c2gobGluZUl0ZW0pXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbm93LnBsYXlpbmcucHVzaChsaW5lSXRlbSlcbiAgICB9XG4gIH0pXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBub3cgfSk7XG59Il0sIm5hbWVzIjpbIkNsaWVudCIsInJlcXVpcmUiLCJub3Rpb24iLCJhdXRoIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9BUElfS0VZIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJkYXRhYmFzZXMiLCJxdWVyeSIsImRhdGFiYXNlX2lkIiwiTk9USU9OX0RBVEFCQVNFX0lEIiwibm93Iiwid29ya2luZyIsImJ1aWxkaW5nIiwicGxheWluZyIsInJlYWRpbmciLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsImxpbmVJdGVtIiwiaWQiLCJsYXN0X2VkaXRlZCIsImxhc3RfZWRpdGVkX3RpbWUiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJOYW1lIiwicGxhaW5fdGV4dCIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJyaWNoX3RleHQiLCJUYWdzIiwic2VsZWN0IiwibmFtZSIsInB1c2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/now.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/now.js"));
module.exports = __webpack_exports__;

})();