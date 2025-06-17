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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_aaa_Pictures_TCHAT_project_bolt_sb1_ojgmykj8_project_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\aaa\\\\Pictures\\\\TCHAT\\\\project-bolt-sb1-ojgmykj8\\\\project\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_aaa_Pictures_TCHAT_project_bolt_sb1_ojgmykj8_project_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhYWElNUNQaWN0dXJlcyU1Q1RDSEFUJTVDcHJvamVjdC1ib2x0LXNiMS1vamdteWtqOCU1Q3Byb2plY3QlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2FhYSU1Q1BpY3R1cmVzJTVDVENIQVQlNUNwcm9qZWN0LWJvbHQtc2IxLW9qZ215a2o4JTVDcHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUU7QUFDOUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0LWFwcC8/NTAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxhYWFcXFxcUGljdHVyZXNcXFxcVENIQVRcXFxccHJvamVjdC1ib2x0LXNiMS1vamdteWtqOFxcXFxwcm9qZWN0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxhYWFcXFxcUGljdHVyZXNcXFxcVENIQVRcXFxccHJvamVjdC1ib2x0LXNiMS1vamdteWtqOFxcXFxwcm9qZWN0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(rsc)/./src/server/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFFVztBQUU1QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MscURBQVdBO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0LWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIn4vc2VydmVyL2F1dGhcIjtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/server/db */ \"(rsc)/./src/server/db.ts\");\n\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    secret: _env__WEBPACK_IMPORTED_MODULE_4__.env.NEXTAUTH_SECRET,\n    // Custom pages - this is what redirects to your custom sign-in page\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_5__.db),\n    session: {\n        maxAge: 30 * 24 * 60 * 60\n    },\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_4__.env.GITHUB_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_4__.env.GITHUB_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_4__.env.GOOGLE_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_4__.env.GOOGLE_CLIENT_SECRET,\n            httpOptions: {\n                timeout: 10000\n            }\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBS2xDO0FBRXFDO0FBQ0E7QUFFNUI7QUFDSztBQXVCakM7Ozs7Q0FJQyxHQUVNLE1BQU1NLGNBQStCO0lBQzFDQyxRQUFRSCxxQ0FBR0EsQ0FBQ0ksZUFBZTtJQUUzQixvRUFBb0U7SUFDcEVDLE9BQU87UUFDTEMsUUFBUTtJQU1WO0lBRUFDLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQU07Z0JBQy9CLEdBQUdELE9BQU87Z0JBQ1ZDLE1BQU07b0JBQ0osR0FBR0QsUUFBUUMsSUFBSTtvQkFDZkMsSUFBSUQsS0FBS0MsRUFBRTtnQkFDYjtZQUNGO0lBQ0Y7SUFDQUMsU0FBU2YsbUVBQWFBLENBQUNLLDBDQUFFQTtJQUN6Qk8sU0FBUztRQUNQSSxRQUFRLEtBQUssS0FBSyxLQUFLO0lBQ3pCO0lBRUFDLFdBQVc7UUFDVGYsc0VBQWNBLENBQUM7WUFDYmdCLFVBQVVkLHFDQUFHQSxDQUFDZSxnQkFBZ0I7WUFDOUJDLGNBQWNoQixxQ0FBR0EsQ0FBQ2lCLG9CQUFvQjtRQUN4QztRQUNBbEIsc0VBQWNBLENBQUM7WUFDYmUsVUFBVWQscUNBQUdBLENBQUNrQixnQkFBZ0I7WUFDOUJGLGNBQWNoQixxQ0FBR0EsQ0FBQ21CLG9CQUFvQjtZQUN0Q0MsYUFBYTtnQkFDWEMsU0FBUztZQUNYO1FBQ0Y7S0FDRDtBQUNILEVBQUU7QUFFRjs7OztDQUlDLEdBQ00sTUFBTUMsdUJBQXVCLElBQU16QiwyREFBZ0JBLENBQUNLLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0LWFwcC8uL3NyYy9zZXJ2ZXIvYXV0aC50cz8yMmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7XG4gIGdldFNlcnZlclNlc3Npb24sXG4gIHR5cGUgRGVmYXVsdFNlc3Npb24sXG4gIHR5cGUgTmV4dEF1dGhPcHRpb25zLFxufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyB0eXBlIEFkYXB0ZXIgfSBmcm9tIFwibmV4dC1hdXRoL2FkYXB0ZXJzXCI7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2VudlwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwifi9zZXJ2ZXIvZGJcIjtcblxuLyoqXG4gKiBNb2R1bGUgYXVnbWVudGF0aW9uIGZvciBgbmV4dC1hdXRoYCB0eXBlcy4gQWxsb3dzIHVzIHRvIGFkZCBjdXN0b20gcHJvcGVydGllcyB0byB0aGUgYHNlc3Npb25gXG4gKiBvYmplY3QgYW5kIGtlZXAgdHlwZSBzYWZldHkuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvZ2V0dGluZy1zdGFydGVkL3R5cGVzY3JpcHQjbW9kdWxlLWF1Z21lbnRhdGlvblxuICovXG5kZWNsYXJlIG1vZHVsZSBcIm5leHQtYXV0aFwiIHtcbiAgaW50ZXJmYWNlIFNlc3Npb24gZXh0ZW5kcyBEZWZhdWx0U2Vzc2lvbiB7XG4gICAgdXNlcjoge1xuICAgICAgaWQ6IHN0cmluZztcbiAgICAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgICAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl07XG4gIH1cblxuICAvLyBpbnRlcmZhY2UgVXNlciB7XG4gIC8vICAgLy8gLi4ub3RoZXIgcHJvcGVydGllc1xuICAvLyAgIC8vIHJvbGU6IFVzZXJSb2xlO1xuICAvLyB9XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgTmV4dEF1dGguanMgdXNlZCB0byBjb25maWd1cmUgYWRhcHRlcnMsIHByb3ZpZGVycywgY2FsbGJhY2tzLCBldGMuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9vcHRpb25zXG4gKi9cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHNlY3JldDogZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgXG4gIC8vIEN1c3RvbSBwYWdlcyAtIHRoaXMgaXMgd2hhdCByZWRpcmVjdHMgdG8geW91ciBjdXN0b20gc2lnbi1pbiBwYWdlXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL3NpZ25pblwiLFxuICAgIC8vIFlvdSBjYW4gYWxzbyBjdXN0b21pemUgb3RoZXIgcGFnZXM6XG4gICAgLy8gc2lnbk91dDogXCIvYXV0aC9zaWdub3V0XCIsXG4gICAgLy8gZXJyb3I6IFwiL2F1dGgvZXJyb3JcIixcbiAgICAvLyB2ZXJpZnlSZXF1ZXN0OiBcIi9hdXRoL3ZlcmlmeS1yZXF1ZXN0XCIsXG4gICAgLy8gbmV3VXNlcjogXCIvYXV0aC9uZXctdXNlclwiXG4gIH0sXG4gIFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB1c2VyIH0pID0+ICh7XG4gICAgICAuLi5zZXNzaW9uLFxuICAgICAgdXNlcjoge1xuICAgICAgICAuLi5zZXNzaW9uLnVzZXIsXG4gICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihkYikgYXMgQWRhcHRlcixcbiAgc2Vzc2lvbjoge1xuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsXG4gIH0sXG4gIFxuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IGVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IGVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGh0dHBPcHRpb25zOiB7XG4gICAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgICAgfVxuICAgIH0pLFxuICBdLFxufTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBgZ2V0U2VydmVyU2Vzc2lvbmAgc28gdGhhdCB5b3UgZG9uJ3QgbmVlZCB0byBpbXBvcnQgdGhlIGBhdXRoT3B0aW9uc2AgaW4gZXZlcnkgZmlsZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL25leHRqc1xuICovXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyQXV0aFNlc3Npb24gPSAoKSA9PiBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsImdldFNlcnZlclNlc3Npb24iLCJHaXRIdWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiZW52IiwiZGIiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImFkYXB0ZXIiLCJtYXhBZ2UiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImh0dHBPcHRpb25zIiwidGltZW91dCIsImdldFNlcnZlckF1dGhTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/server/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFbEI7QUFFNUIsTUFBTUUsa0JBQWtCQztBQUlqQixNQUFNQyxLQUNYRixnQkFBZ0JHLE1BQU0sSUFDdEIsSUFBSUwsd0RBQVlBLENBQUM7SUFDZk0sS0FDRUwscUNBQUdBLENBQUNNLFFBQVEsS0FBSyxnQkFBZ0I7UUFBQztRQUFTO1FBQVM7S0FBTyxHQUFHO1FBQUM7S0FBUTtBQUMzRSxHQUFHO0FBRUwsSUFBSU4scUNBQUdBLENBQUNNLFFBQVEsS0FBSyxjQUFjTCxnQkFBZ0JHLE1BQU0sR0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0LWFwcC8uL3NyYy9zZXJ2ZXIvZGIudHM/YWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZW52IH0gZnJvbSBcIn4vZW52XCI7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGRiID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdIDogW1wiZXJyb3JcIl0sXG4gIH0pO1xuXG5pZiAoZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IGRiOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwiZGIiLCJwcmlzbWEiLCJsb2ciLCJOT0RFX0VOViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/server/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"(rsc)/./node_modules/@t3-oss/env-nextjs/dist/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/dist/esm/index.js\");\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().refine((str)=>!str.includes(\"YOUR_MYSQL_URL_HERE\"), \"You forgot to change the default URL\"),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z[\"enum\"]([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]).default(\"development\"),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string() : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        GITHUB_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GITHUB_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        OPENROUTER_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        GROQ_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        HUGGINGFACE_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        BLOB_READ_WRITE_TOKEN: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,\n        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,\n        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,\n        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,\n        OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,\n        GROQ_API_KEY: process.env.GROQ_API_KEY,\n        HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,\n        BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially\n   * useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,\n    /**\n   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and\n   * `SOME_VAR=''` will throw an error.\n   */ emptyStringAsUndefined: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUN2QjtBQUVqQixNQUFNRSxNQUFNRiw2REFBU0EsQ0FBQztJQUMzQjs7O0dBR0MsR0FDREcsUUFBUTtRQUNOQyxjQUFjSCx5Q0FDTCxHQUNOSyxHQUFHLEdBQ0hDLE1BQU0sQ0FDTCxDQUFDQyxNQUFRLENBQUNBLElBQUlDLFFBQVEsQ0FBQyx3QkFDdkI7UUFFSkMsVUFBVVQsMENBQ0gsQ0FBQztZQUFDO1lBQWU7WUFBUTtTQUFhLEVBQzFDVyxPQUFPLENBQUM7UUFDWEMsaUJBQ0VDLE1BQXFDLEdBQ2pDYixDQUFVLEdBQ1ZBLHlDQUFRLEdBQUdjLFFBQVE7UUFDekJDLGNBQWNmLDZDQUFZLENBQ3hCLHVFQUF1RTtRQUN2RSxrRUFBa0U7UUFDbEUsQ0FBQ08sTUFBUU0sUUFBUVosR0FBRyxDQUFDZ0IsVUFBVSxJQUFJVixLQUNuQyxzRUFBc0U7UUFDdEVNLFFBQVFaLEdBQUcsQ0FBQ2lCLE1BQU0sR0FBR2xCLHlDQUFRLEtBQUtBLHlDQUFRLEdBQUdLLEdBQUc7UUFFbERjLGtCQUFrQm5CLHlDQUFRO1FBQzFCb0Isc0JBQXNCcEIseUNBQVE7UUFDOUJxQixrQkFBa0JyQix5Q0FBUTtRQUMxQnNCLHNCQUFzQnRCLHlDQUFRO1FBQzlCdUIsb0JBQW9CdkIseUNBQVEsR0FBR2MsUUFBUTtRQUN2Q1UsY0FBY3hCLHlDQUFRLEdBQUdjLFFBQVE7UUFDakNXLHFCQUFxQnpCLHlDQUFRLEdBQUdjLFFBQVE7UUFDeENZLHVCQUF1QjFCLHlDQUFRO0lBQ2pDO0lBRUE7Ozs7R0FJQyxHQUNEMkIsUUFBUTtJQUVSO0lBRUE7OztHQUdDLEdBQ0RDLFlBQVk7UUFDVnpCLGNBQWNVLFFBQVFaLEdBQUcsQ0FBQ0UsWUFBWTtRQUN0Q00sVUF2REo7UUF3RElHLGlCQUFpQkMsUUFBUVosR0FBRyxDQUFDVyxlQUFlO1FBQzVDRyxjQUFjRixRQUFRWixHQUFHLENBQUNjLFlBQVk7UUFDdENJLGtCQUFrQk4sUUFBUVosR0FBRyxDQUFDa0IsZ0JBQWdCO1FBQzlDQyxzQkFBc0JQLFFBQVFaLEdBQUcsQ0FBQ21CLG9CQUFvQjtRQUN0REMsa0JBQWtCUixRQUFRWixHQUFHLENBQUNvQixnQkFBZ0I7UUFDOUNDLHNCQUFzQlQsUUFBUVosR0FBRyxDQUFDcUIsb0JBQW9CO1FBQ3REQyxvQkFBb0JWLFFBQVFaLEdBQUcsQ0FBQ3NCLGtCQUFrQjtRQUNsREMsY0FBY1gsUUFBUVosR0FBRyxDQUFDdUIsWUFBWTtRQUN0Q0MscUJBQXFCWixRQUFRWixHQUFHLENBQUN3QixtQkFBbUI7UUFDcERDLHVCQUF1QmIsUUFBUVosR0FBRyxDQUFDeUIscUJBQXFCO0lBQzFEO0lBQ0E7OztHQUdDLEdBQ0RHLGdCQUFnQixDQUFDLENBQUNoQixRQUFRWixHQUFHLENBQUM2QixtQkFBbUI7SUFDakQ7OztHQUdDLEdBQ0RDLHdCQUF3QjtBQUMxQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDMtY2hhdC1hcHAvLi9zcmMvZW52LmpzPzEwYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRW52IH0gZnJvbSBcIkB0My1vc3MvZW52LW5leHRqc1wiO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuZXhwb3J0IGNvbnN0IGVudiA9IGNyZWF0ZUVudih7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IHlvdXIgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNjaGVtYSBoZXJlLiBUaGlzIHdheSB5b3UgY2FuIGVuc3VyZSB0aGUgYXBwXG4gICAqIGlzbid0IGJ1aWx0IHdpdGggaW52YWxpZCBlbnYgdmFycy5cbiAgICovXG4gIHNlcnZlcjoge1xuICAgIERBVEFCQVNFX1VSTDogelxuICAgICAgLnN0cmluZygpXG4gICAgICAudXJsKClcbiAgICAgIC5yZWZpbmUoXG4gICAgICAgIChzdHIpID0+ICFzdHIuaW5jbHVkZXMoXCJZT1VSX01ZU1FMX1VSTF9IRVJFXCIpLFxuICAgICAgICBcIllvdSBmb3Jnb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IFVSTFwiXG4gICAgICApLFxuICAgIE5PREVfRU5WOiB6XG4gICAgICAuZW51bShbXCJkZXZlbG9wbWVudFwiLCBcInRlc3RcIiwgXCJwcm9kdWN0aW9uXCJdKVxuICAgICAgLmRlZmF1bHQoXCJkZXZlbG9wbWVudFwiKSxcbiAgICBORVhUQVVUSF9TRUNSRVQ6XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyB6LnN0cmluZygpXG4gICAgICAgIDogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpIDogei5zdHJpbmcoKS51cmwoKVxuICAgICksXG4gICAgR0lUSFVCX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgICBHSVRIVUJfQ0xJRU5UX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgICBHT09HTEVfQ0xJRU5UX0lEOiB6LnN0cmluZygpLFxuICAgIEdPT0dMRV9DTElFTlRfU0VDUkVUOiB6LnN0cmluZygpLFxuICAgIE9QRU5ST1VURVJfQVBJX0tFWTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIEdST1FfQVBJX0tFWTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICAgIEhVR0dJTkdGQUNFX0FQSV9LRVk6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBCTE9CX1JFQURfV1JJVEVfVE9LRU46IHouc3RyaW5nKCksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBjbGllbnQtc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoXG4gICAqIGBORVhUX1BVQkxJQ19gLlxuICAgKi9cbiAgY2xpZW50OiB7XG4gICAgLy8gTkVYVF9QVUJMSUNfQ0xJRU5UVkFSOiB6LnN0cmluZygpLFxuICB9LFxuXG4gIC8qKlxuICAgKiBZb3UgY2FuJ3QgZGVzdHJ1Y3QgYHByb2Nlc3MuZW52YCBhcyBhIHJlZ3VsYXIgb2JqZWN0IGluIHRoZSBOZXh0LmpzIGVkZ2UgcnVudGltZXMgKGUuZy5cbiAgICogbWlkZGxld2FyZXMpIG9yIGNsaWVudC1zaWRlIHNvIHdlIG5lZWQgdG8gZGVzdHJ1Y3QgbWFudWFsbHkuXG4gICAqL1xuICBydW50aW1lRW52OiB7XG4gICAgREFUQUJBU0VfVVJMOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICAgIE5FWFRBVVRIX1NFQ1JFVDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICAgIE5FWFRBVVRIX1VSTDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxuICAgIEdJVEhVQl9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgR0lUSFVCX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgIEdPT0dMRV9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgR09PR0xFX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIE9QRU5ST1VURVJfQVBJX0tFWTogcHJvY2Vzcy5lbnYuT1BFTlJPVVRFUl9BUElfS0VZLFxuICAgIEdST1FfQVBJX0tFWTogcHJvY2Vzcy5lbnYuR1JPUV9BUElfS0VZLFxuICAgIEhVR0dJTkdGQUNFX0FQSV9LRVk6IHByb2Nlc3MuZW52LkhVR0dJTkdGQUNFX0FQSV9LRVksXG4gICAgQkxPQl9SRUFEX1dSSVRFX1RPS0VOOiBwcm9jZXNzLmVudi5CTE9CX1JFQURfV1JJVEVfVE9LRU4sXG4gIH0sXG4gIC8qKlxuICAgKiBSdW4gYGJ1aWxkYCBvciBgZGV2YCB3aXRoIGBTS0lQX0VOVl9WQUxJREFUSU9OYCB0byBza2lwIGVudiB2YWxpZGF0aW9uLiBUaGlzIGlzIGVzcGVjaWFsbHlcbiAgICogdXNlZnVsIGZvciBEb2NrZXIgYnVpbGRzLlxuICAgKi9cbiAgc2tpcFZhbGlkYXRpb246ICEhcHJvY2Vzcy5lbnYuU0tJUF9FTlZfVkFMSURBVElPTixcbiAgLyoqXG4gICAqIE1ha2VzIGl0IHNvIHRoYXQgZW1wdHkgc3RyaW5ncyBhcmUgdHJlYXRlZCBhcyB1bmRlZmluZWQuIGBTT01FX1ZBUjogei5zdHJpbmcoKWAgYW5kXG4gICAqIGBTT01FX1ZBUj0nJ2Agd2lsbCB0aHJvdyBhbiBlcnJvci5cbiAgICovXG4gIGVtcHR5U3RyaW5nQXNVbmRlZmluZWQ6IHRydWUsXG59KTsiXSwibmFtZXMiOlsiY3JlYXRlRW52IiwieiIsImVudiIsInNlcnZlciIsIkRBVEFCQVNFX1VSTCIsInN0cmluZyIsInVybCIsInJlZmluZSIsInN0ciIsImluY2x1ZGVzIiwiTk9ERV9FTlYiLCJlbnVtIiwiZGVmYXVsdCIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb2Nlc3MiLCJvcHRpb25hbCIsIk5FWFRBVVRIX1VSTCIsInByZXByb2Nlc3MiLCJWRVJDRUxfVVJMIiwiVkVSQ0VMIiwiR0lUSFVCX0NMSUVOVF9JRCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiT1BFTlJPVVRFUl9BUElfS0VZIiwiR1JPUV9BUElfS0VZIiwiSFVHR0lOR0ZBQ0VfQVBJX0tFWSIsIkJMT0JfUkVBRF9XUklURV9UT0tFTiIsImNsaWVudCIsInJ1bnRpbWVFbnYiLCJza2lwVmFsaWRhdGlvbiIsIlNLSVBfRU5WX1ZBTElEQVRJT04iLCJlbXB0eVN0cmluZ0FzVW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/zod","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@t3-oss","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();