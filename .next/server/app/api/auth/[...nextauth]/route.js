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

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/server/db */ \"(rsc)/./src/server/db.ts\");\n\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    secret: _env__WEBPACK_IMPORTED_MODULE_4__.env.NEXTAUTH_SECRET,\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_5__.db),\n    session: {\n        maxAge: 30 * 24 * 60 * 60\n    },\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_4__.env.GITHUB_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_4__.env.GITHUB_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_4__.env.GOOGLE_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_4__.env.GOOGLE_CLIENT_SECRET,\n            httpOptions: {\n                timeout: 10000\n            }\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBS2xDO0FBRXFDO0FBQ0E7QUFFNUI7QUFDSztBQXVCakM7Ozs7Q0FJQyxHQUVNLE1BQU1NLGNBQStCO0lBQzFDQyxRQUFRSCxxQ0FBR0EsQ0FBQ0ksZUFBZTtJQUMzQkMsV0FBVztRQUNUQyxTQUFTLENBQUMsRUFBRUEsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBTTtnQkFDL0IsR0FBR0QsT0FBTztnQkFDVkMsTUFBTTtvQkFDSixHQUFHRCxRQUFRQyxJQUFJO29CQUNmQyxJQUFJRCxLQUFLQyxFQUFFO2dCQUNiO1lBQ0Y7SUFDRjtJQUNBQyxTQUFTYixtRUFBYUEsQ0FBQ0ssMENBQUVBO0lBQ3pCSyxTQUFTO1FBQ1BJLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFFQUMsV0FBVztRQUNUYixzRUFBY0EsQ0FBQztZQUNiYyxVQUFVWixxQ0FBR0EsQ0FBQ2EsZ0JBQWdCO1lBQzlCQyxjQUFjZCxxQ0FBR0EsQ0FBQ2Usb0JBQW9CO1FBQ3hDO1FBQ0FoQixzRUFBY0EsQ0FBQztZQUNiYSxVQUFVWixxQ0FBR0EsQ0FBQ2dCLGdCQUFnQjtZQUM5QkYsY0FBY2QscUNBQUdBLENBQUNpQixvQkFBb0I7WUFDdENDLGFBQWE7Z0JBQ1hDLFNBQVM7WUFDWDtRQUNGO0tBQ0Q7QUFDSCxFQUFFO0FBRUY7Ozs7Q0FJQyxHQUNNLE1BQU1DLHVCQUF1QixJQUFNdkIsMkRBQWdCQSxDQUFDSyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDMtY2hhdC1hcHAvLi9zcmMvc2VydmVyL2F1dGgudHM/MjJiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQge1xuICBnZXRTZXJ2ZXJTZXNzaW9uLFxuICB0eXBlIERlZmF1bHRTZXNzaW9uLFxuICB0eXBlIE5leHRBdXRoT3B0aW9ucyxcbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgdHlwZSBBZGFwdGVyIH0gZnJvbSBcIm5leHQtYXV0aC9hZGFwdGVyc1wiO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwifi9lbnZcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIn4vc2VydmVyL2RiXCI7XG5cbi8qKlxuICogTW9kdWxlIGF1Z21lbnRhdGlvbiBmb3IgYG5leHQtYXV0aGAgdHlwZXMuIEFsbG93cyB1cyB0byBhZGQgY3VzdG9tIHByb3BlcnRpZXMgdG8gdGhlIGBzZXNzaW9uYFxuICogb2JqZWN0IGFuZCBrZWVwIHR5cGUgc2FmZXR5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2dldHRpbmctc3RhcnRlZC90eXBlc2NyaXB0I21vZHVsZS1hdWdtZW50YXRpb25cbiAqL1xuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIGV4dGVuZHMgRGVmYXVsdFNlc3Npb24ge1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAvLyAuLi5vdGhlciBwcm9wZXJ0aWVzXG4gICAgICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgICB9ICYgRGVmYXVsdFNlc3Npb25bXCJ1c2VyXCJdO1xuICB9XG5cbiAgLy8gaW50ZXJmYWNlIFVzZXIge1xuICAvLyAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgLy8gICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgLy8gfVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIE5leHRBdXRoLmpzIHVzZWQgdG8gY29uZmlndXJlIGFkYXB0ZXJzLCBwcm92aWRlcnMsIGNhbGxiYWNrcywgZXRjLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuICovXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBzZWNyZXQ6IGVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246ICh7IHNlc3Npb24sIHVzZXIgfSkgPT4gKHtcbiAgICAgIC4uLnNlc3Npb24sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIC4uLnNlc3Npb24udXNlcixcbiAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKGRiKSBhcyBBZGFwdGVyLFxuICBzZXNzaW9uOiB7XG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgfSxcbiAgXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBlbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBlbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgICAgaHR0cE9wdGlvbnM6IHtcbiAgICAgICAgdGltZW91dDogMTAwMDAsXG4gICAgICB9XG4gICAgfSksXG4gIF0sXG59O1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGBnZXRTZXJ2ZXJTZXNzaW9uYCBzbyB0aGF0IHlvdSBkb24ndCBuZWVkIHRvIGltcG9ydCB0aGUgYGF1dGhPcHRpb25zYCBpbiBldmVyeSBmaWxlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vbmV4dGpzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJBdXRoU2Vzc2lvbiA9ICgpID0+IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpOyJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkdpdEh1YlByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJlbnYiLCJkYiIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImFkYXB0ZXIiLCJtYXhBZ2UiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImh0dHBPcHRpb25zIiwidGltZW91dCIsImdldFNlcnZlckF1dGhTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/server/auth.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"(rsc)/./node_modules/@t3-oss/env-nextjs/dist/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/dist/esm/index.js\");\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().refine((str)=>!str.includes(\"YOUR_MYSQL_URL_HERE\"), \"You forgot to change the default URL\"),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z[\"enum\"]([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]).default(\"development\"),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string() : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        GITHUB_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GITHUB_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GOOGLE_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GOOGLE_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        OPENROUTER_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        GROQ_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        HUGGINGFACE_API_KEY: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,\n        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,\n        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,\n        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,\n        OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,\n        GROQ_API_KEY: process.env.GROQ_API_KEY,\n        HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially\n   * useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,\n    /**\n   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and\n   * `SOME_VAR=''` will throw an error.\n   */ emptyStringAsUndefined: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUN2QjtBQUVqQixNQUFNRSxNQUFNRiw2REFBU0EsQ0FBQztJQUMzQjs7O0dBR0MsR0FDREcsUUFBUTtRQUNOQyxjQUFjSCx5Q0FDTCxHQUNOSyxHQUFHLEdBQ0hDLE1BQU0sQ0FDTCxDQUFDQyxNQUFRLENBQUNBLElBQUlDLFFBQVEsQ0FBQyx3QkFDdkI7UUFFSkMsVUFBVVQsMENBQ0gsQ0FBQztZQUFDO1lBQWU7WUFBUTtTQUFhLEVBQzFDVyxPQUFPLENBQUM7UUFDWEMsaUJBQ0VDLE1BQXFDLEdBQ2pDYixDQUFVLEdBQ1ZBLHlDQUFRLEdBQUdjLFFBQVE7UUFDekJDLGNBQWNmLDZDQUFZLENBQ3hCLHVFQUF1RTtRQUN2RSxrRUFBa0U7UUFDbEUsQ0FBQ08sTUFBUU0sUUFBUVosR0FBRyxDQUFDZ0IsVUFBVSxJQUFJVixLQUNuQyxzRUFBc0U7UUFDdEVNLFFBQVFaLEdBQUcsQ0FBQ2lCLE1BQU0sR0FBR2xCLHlDQUFRLEtBQUtBLHlDQUFRLEdBQUdLLEdBQUc7UUFFbERjLGtCQUFrQm5CLHlDQUFRO1FBQzFCb0Isc0JBQXNCcEIseUNBQVE7UUFDOUJxQixrQkFBa0JyQix5Q0FBUTtRQUMxQnNCLHNCQUFzQnRCLHlDQUFRO1FBQzlCdUIsb0JBQW9CdkIseUNBQVEsR0FBR2MsUUFBUTtRQUN2Q1UsY0FBY3hCLHlDQUFRLEdBQUdjLFFBQVE7UUFDakNXLHFCQUFxQnpCLHlDQUFRLEdBQUdjLFFBQVE7SUFDMUM7SUFFQTs7OztHQUlDLEdBQ0RZLFFBQVE7SUFFUjtJQUVBOzs7R0FHQyxHQUNEQyxZQUFZO1FBQ1Z4QixjQUFjVSxRQUFRWixHQUFHLENBQUNFLFlBQVk7UUFDdENNLFVBdERKO1FBdURJRyxpQkFBaUJDLFFBQVFaLEdBQUcsQ0FBQ1csZUFBZTtRQUM1Q0csY0FBY0YsUUFBUVosR0FBRyxDQUFDYyxZQUFZO1FBQ3RDSSxrQkFBa0JOLFFBQVFaLEdBQUcsQ0FBQ2tCLGdCQUFnQjtRQUM5Q0Msc0JBQXNCUCxRQUFRWixHQUFHLENBQUNtQixvQkFBb0I7UUFDdERDLGtCQUFrQlIsUUFBUVosR0FBRyxDQUFDb0IsZ0JBQWdCO1FBQzlDQyxzQkFBc0JULFFBQVFaLEdBQUcsQ0FBQ3FCLG9CQUFvQjtRQUN0REMsb0JBQW9CVixRQUFRWixHQUFHLENBQUNzQixrQkFBa0I7UUFDbERDLGNBQWNYLFFBQVFaLEdBQUcsQ0FBQ3VCLFlBQVk7UUFDdENDLHFCQUFxQlosUUFBUVosR0FBRyxDQUFDd0IsbUJBQW1CO0lBQ3REO0lBQ0E7OztHQUdDLEdBQ0RHLGdCQUFnQixDQUFDLENBQUNmLFFBQVFaLEdBQUcsQ0FBQzRCLG1CQUFtQjtJQUNqRDs7O0dBR0MsR0FDREMsd0JBQXdCO0FBQzFCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My1jaGF0LWFwcC8uL3NyYy9lbnYuanM/MTBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgfSBmcm9tIFwiQHQzLW9zcy9lbnYtbmV4dGpzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC51cmwoKVxuICAgICAgLnJlZmluZShcbiAgICAgICAgKHN0cikgPT4gIXN0ci5pbmNsdWRlcyhcIllPVVJfTVlTUUxfVVJMX0hFUkVcIiksXG4gICAgICAgIFwiWW91IGZvcmdvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgVVJMXCJcbiAgICAgICksXG4gICAgTk9ERV9FTlY6IHpcbiAgICAgIC5lbnVtKFtcImRldmVsb3BtZW50XCIsIFwidGVzdFwiLCBcInByb2R1Y3Rpb25cIl0pXG4gICAgICAuZGVmYXVsdChcImRldmVsb3BtZW50XCIpLFxuICAgIE5FWFRBVVRIX1NFQ1JFVDpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICA/IHouc3RyaW5nKClcbiAgICAgICAgOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgTkVYVEFVVEhfVVJMOiB6LnByZXByb2Nlc3MoXG4gICAgICAvLyBUaGlzIG1ha2VzIFZlcmNlbCBkZXBsb3ltZW50cyBub3QgZmFpbCBpZiB5b3UgZG9uJ3Qgc2V0IE5FWFRBVVRIX1VSTFxuICAgICAgLy8gU2luY2UgTmV4dEF1dGguanMgYXV0b21hdGljYWxseSB1c2VzIHRoZSBWRVJDRUxfVVJMIGlmIHByZXNlbnQuXG4gICAgICAoc3RyKSA9PiBwcm9jZXNzLmVudi5WRVJDRUxfVVJMID8/IHN0cixcbiAgICAgIC8vIFZFUkNFTF9VUkwgZG9lc24ndCBpbmNsdWRlIGBodHRwc2Agc28gaXQgY2FudCBiZSB2YWxpZGF0ZWQgYXMgYSBVUkxcbiAgICAgIHByb2Nlc3MuZW52LlZFUkNFTCA/IHouc3RyaW5nKCkgOiB6LnN0cmluZygpLnVybCgpXG4gICAgKSxcbiAgICBHSVRIVUJfQ0xJRU5UX0lEOiB6LnN0cmluZygpLFxuICAgIEdJVEhVQl9DTElFTlRfU0VDUkVUOiB6LnN0cmluZygpLFxuICAgIEdPT0dMRV9DTElFTlRfSUQ6IHouc3RyaW5nKCksXG4gICAgR09PR0xFX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXG4gICAgT1BFTlJPVVRFUl9BUElfS0VZOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgR1JPUV9BUElfS0VZOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gICAgSFVHR0lOR0ZBQ0VfQVBJX0tFWTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHlvdXIgY2xpZW50LXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNjaGVtYSBoZXJlLiBUaGlzIHdheSB5b3UgY2FuIGVuc3VyZSB0aGUgYXBwXG4gICAqIGlzbid0IGJ1aWx0IHdpdGggaW52YWxpZCBlbnYgdmFycy4gVG8gZXhwb3NlIHRoZW0gdG8gdGhlIGNsaWVudCwgcHJlZml4IHRoZW0gd2l0aFxuICAgKiBgTkVYVF9QVUJMSUNfYC5cbiAgICovXG4gIGNsaWVudDoge1xuICAgIC8vIE5FWFRfUFVCTElDX0NMSUVOVFZBUjogei5zdHJpbmcoKSxcbiAgfSxcblxuICAvKipcbiAgICogWW91IGNhbid0IGRlc3RydWN0IGBwcm9jZXNzLmVudmAgYXMgYSByZWd1bGFyIG9iamVjdCBpbiB0aGUgTmV4dC5qcyBlZGdlIHJ1bnRpbWVzIChlLmcuXG4gICAqIG1pZGRsZXdhcmVzKSBvciBjbGllbnQtc2lkZSBzbyB3ZSBuZWVkIHRvIGRlc3RydWN0IG1hbnVhbGx5LlxuICAgKi9cbiAgcnVudGltZUVudjoge1xuICAgIERBVEFCQVNFX1VSTDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIE5PREVfRU5WOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICBORVhUQVVUSF9TRUNSRVQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgICBORVhUQVVUSF9VUkw6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcbiAgICBHSVRIVUJfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgIEdJVEhVQl9DTElFTlRfU0VDUkVUOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICBHT09HTEVfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgIEdPT0dMRV9DTElFTlRfU0VDUkVUOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICBPUEVOUk9VVEVSX0FQSV9LRVk6IHByb2Nlc3MuZW52Lk9QRU5ST1VURVJfQVBJX0tFWSxcbiAgICBHUk9RX0FQSV9LRVk6IHByb2Nlc3MuZW52LkdST1FfQVBJX0tFWSxcbiAgICBIVUdHSU5HRkFDRV9BUElfS0VZOiBwcm9jZXNzLmVudi5IVUdHSU5HRkFDRV9BUElfS0VZLFxuICB9LFxuICAvKipcbiAgICogUnVuIGBidWlsZGAgb3IgYGRldmAgd2l0aCBgU0tJUF9FTlZfVkFMSURBVElPTmAgdG8gc2tpcCBlbnYgdmFsaWRhdGlvbi4gVGhpcyBpcyBlc3BlY2lhbGx5XG4gICAqIHVzZWZ1bCBmb3IgRG9ja2VyIGJ1aWxkcy5cbiAgICovXG4gIHNraXBWYWxpZGF0aW9uOiAhIXByb2Nlc3MuZW52LlNLSVBfRU5WX1ZBTElEQVRJT04sXG4gIC8qKlxuICAgKiBNYWtlcyBpdCBzbyB0aGF0IGVtcHR5IHN0cmluZ3MgYXJlIHRyZWF0ZWQgYXMgdW5kZWZpbmVkLiBgU09NRV9WQVI6IHouc3RyaW5nKClgIGFuZFxuICAgKiBgU09NRV9WQVI9JydgIHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICBlbXB0eVN0cmluZ0FzVW5kZWZpbmVkOiB0cnVlLFxufSk7Il0sIm5hbWVzIjpbImNyZWF0ZUVudiIsInoiLCJlbnYiLCJzZXJ2ZXIiLCJEQVRBQkFTRV9VUkwiLCJzdHJpbmciLCJ1cmwiLCJyZWZpbmUiLCJzdHIiLCJpbmNsdWRlcyIsIk5PREVfRU5WIiwiZW51bSIsImRlZmF1bHQiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm9jZXNzIiwib3B0aW9uYWwiLCJORVhUQVVUSF9VUkwiLCJwcmVwcm9jZXNzIiwiVkVSQ0VMX1VSTCIsIlZFUkNFTCIsIkdJVEhVQl9DTElFTlRfSUQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIk9QRU5ST1VURVJfQVBJX0tFWSIsIkdST1FfQVBJX0tFWSIsIkhVR0dJTkdGQUNFX0FQSV9LRVkiLCJjbGllbnQiLCJydW50aW1lRW52Iiwic2tpcFZhbGlkYXRpb24iLCJTS0lQX0VOVl9WQUxJREFUSU9OIiwiZW1wdHlTdHJpbmdBc1VuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/zod","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@t3-oss","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Caaa%5CPictures%5CTCHAT%5Cproject-bolt-sb1-ojgmykj8%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();