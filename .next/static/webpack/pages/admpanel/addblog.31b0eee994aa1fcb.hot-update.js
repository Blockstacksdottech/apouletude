"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admpanel/addblog",{

/***/ "./utils/apiHandler.ts":
/*!*****************************!*\
  !*** ./utils/apiHandler.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosInstance: function() { return /* binding */ axiosInstance; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_apiInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/apiInfo */ \"./constants/apiInfo.ts\");\n\n\n\n// Create a new Axios instance\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n    baseURL: _constants_apiInfo__WEBPACK_IMPORTED_MODULE_1__.BASE_URL\n});\n// Create the interceptor\naxiosInstance.interceptors.request.use(async (request)=>{\n    console.log(\"Interceptor called\");\n    // Get the session\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)();\n    // Add your desired session value to the request headers\n    if (session) {\n        console.log(\"session here\");\n        console.log(session);\n        request.headers.Authorization = \"Bearer \".concat(session.user.token);\n    }\n    return request;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcGlIYW5kbGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRW1CO0FBQ0c7QUFHaEQsOEJBQThCO0FBQ3ZCLE1BQU1HLGdCQUFnQkgsb0RBQVksQ0FBQztJQUN4Q0ssU0FBU0gsd0RBQVFBO0FBQ25CLEdBQUc7QUFNSCx5QkFBeUI7QUFDekJDLGNBQWNHLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBT0Q7SUFDN0NFLFFBQVFDLEdBQUcsQ0FBQztJQUNYLGtCQUFrQjtJQUNsQixNQUFNQyxVQUFZLE1BQU1WLDJEQUFVQTtJQUVsQyx3REFBd0Q7SUFDeEQsSUFBSVUsU0FBUztRQUNkRixRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDQztRQUNUSixRQUFRSyxPQUFPLENBQUNDLGFBQWEsR0FBRyxVQUEyQyxPQUFqQyxRQUFTQyxJQUFJLENBQWNDLEtBQUs7SUFDNUU7SUFFQSxPQUFPUjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwaUhhbmRsZXIudHM/ZWZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9hcGlJbmZvXCI7XG5pbXBvcnQgeyBVc2VyUmVzcCB9IGZyb20gXCIuLi9jb25zdGFudHMvdHlwZXNcIjtcblxuLy8gQ3JlYXRlIGEgbmV3IEF4aW9zIGluc3RhbmNlXG5leHBvcnQgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEJBU0VfVVJMLCAvLyBSZXBsYWNlIHdpdGggeW91ciBiYWNrZW5kIHNlcnZlcidzIGJhc2UgVVJMXG59KTtcblxuaW50ZXJmYWNlIFNlc3Npb25XaXRoSldUIGV4dGVuZHMgU2Vzc2lvbiB7XG5cdHRva2VuIDogc3RyaW5nXG4gIH1cblxuLy8gQ3JlYXRlIHRoZSBpbnRlcmNlcHRvclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoYXN5bmMgKHJlcXVlc3QpID0+IHtcblx0Y29uc29sZS5sb2coXCJJbnRlcmNlcHRvciBjYWxsZWRcIilcbiAgLy8gR2V0IHRoZSBzZXNzaW9uXG4gIGNvbnN0IHNlc3Npb24gID0gKGF3YWl0IGdldFNlc3Npb24oKSkgYXMgU2Vzc2lvbldpdGhKV1Q7XG5cbiAgLy8gQWRkIHlvdXIgZGVzaXJlZCBzZXNzaW9uIHZhbHVlIHRvIHRoZSByZXF1ZXN0IGhlYWRlcnNcbiAgaWYgKHNlc3Npb24pIHtcblx0Y29uc29sZS5sb2coXCJzZXNzaW9uIGhlcmVcIilcblx0Y29uc29sZS5sb2coc2Vzc2lvbilcbiAgICByZXF1ZXN0LmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHsoc2Vzc2lvbi51c2VyIGFzIFVzZXJSZXNwKS50b2tlbn1gO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59KTsiXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRTZXNzaW9uIiwiQkFTRV9VUkwiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/apiHandler.ts\n"));

/***/ })

});