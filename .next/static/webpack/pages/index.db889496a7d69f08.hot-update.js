'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/index', {
  /***/ './src/pages/components/Details/Details.tsx':
    /*!**************************************************!*\
  !*** ./src/pages/components/Details/Details.tsx ***!
  \**************************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailsPage.module.css */ "./src/pages/components/Details/DetailsPage.module.css");\n/* harmony import */ var _DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store_homePageSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/store/homePageSlice */ "./src/redux/store/homePageSlice.ts");\n/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loader/Loader */ "./src/pages/components/Loader/Loader.tsx");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DetailsPage(param) {\n    let { product } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const detailsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const currentPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.pagination.currentPage);\n    const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        dispatch((0,_redux_store_homePageSlice__WEBPACK_IMPORTED_MODULE_5__.setProduct)(null));\n        dispatch((0,_redux_store_homePageSlice__WEBPACK_IMPORTED_MODULE_5__.setIsDetailsOpen)(false));\n        dispatch((0,_redux_store_homePageSlice__WEBPACK_IMPORTED_MODULE_5__.setSelectedId)(null));\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/?page=".concat(currentPage));\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (detailsRef.current && !detailsRef.current.contains(event.target)) {\n                handleClose();\n            }\n        };\n        document.addEventListener("mousedown", handleClickOutside);\n        return ()=>{\n            document.removeEventListener("mousedown", handleClickOutside);\n        };\n    }, [\n        handleClose\n    ]);\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {\n            fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n            lineNumber: 63,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: (_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().detailsContainer),\n        ref: detailsRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: product.images[0],\n                alt: product.title,\n                className: (_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgDetails),\n                height: 500,\n                width: 500\n            }, void 0, false, {\n                fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                children: product.title\n            }, void 0, false, {\n                fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                children: [\n                    product.price,\n                    " $"\n                ]\n            }, void 0, true, {\n                fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                children: [\n                    " ",\n                    product.description\n                ]\n            }, void 0, true, {\n                fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                type: "button",\n                className: (_DetailsPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().closeButton),\n                onClick: handleClose,\n                "data-testid": "close-button",\n                children: "Close"\n            }, void 0, false, {\n                fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "D:\\\\RSS\\\\React2024Q3-1\\\\src\\\\pages\\\\components\\\\Details\\\\Details.tsx",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(DetailsPage, "CQ6UP6xcPvv9jGElRb7P/NNyz6o=", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = DetailsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__["default"] = (DetailsPage);\nvar _c;\n$RefreshReg$(_c, "DetailsPage");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9EZXRhaWxzL0RldGFpbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDQTtBQUN4QjtBQUNFO0FBQ2E7QUFNRjtBQUNOO0FBcUJ0QyxTQUFTWSxZQUFZLEtBQTZCO1FBQTdCLEVBQUVDLE9BQU8sRUFBb0IsR0FBN0I7O0lBQ25CLE1BQU1DLFdBQVdYLHdEQUFXQTtJQUM1QixNQUFNWSxhQUFhYiw2Q0FBTUEsQ0FBaUI7SUFDMUMsTUFBTWMsY0FBY1osd0RBQVdBLENBQzdCLENBQUNhLFFBQXdCQSxNQUFNQyxVQUFVLENBQUNGLFdBQVc7SUFHdkQsTUFBTUcsY0FBY25CLGtEQUFXQSxDQUFDO1FBQzlCYyxTQUFTTCxzRUFBVUEsQ0FBQztRQUNwQkssU0FBU04sNEVBQWdCQSxDQUFDO1FBQzFCTSxTQUFTSix5RUFBYUEsQ0FBQztRQUN2QkosdURBQVcsQ0FBQyxVQUFzQixPQUFaVTtJQUN4QixHQUFHO1FBQUNGO0tBQVM7SUFFYmIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IscUJBQXFCLENBQUNDO1lBQzFCLElBQ0VQLFdBQVdRLE9BQU8sSUFDbEIsQ0FBQ1IsV0FBV1EsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FDekM7Z0JBQ0FOO1lBQ0Y7UUFDRjtRQUNBTyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUN2QyxPQUFPO1lBQ0xLLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO1FBQzVDO0lBQ0YsR0FBRztRQUFDRjtLQUFZO0lBRWhCLElBQUksQ0FBQ04sU0FBUztRQUNaLHFCQUFPLDhEQUFDRixzREFBTUE7Ozs7O0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFXdkIsaUZBQXVCO1FBQUV5QixLQUFLakI7OzBCQUM1Qyw4REFBQ1YsbURBQUtBO2dCQUNKNEIsS0FBS3BCLFFBQVFxQixNQUFNLENBQUMsRUFBRTtnQkFDdEJDLEtBQUt0QixRQUFRdUIsS0FBSztnQkFDbEJOLFdBQVd2QiwyRUFBaUI7Z0JBQzVCK0IsUUFBUTtnQkFDUkMsT0FBTzs7Ozs7OzBCQUVULDhEQUFDQzswQkFBSTNCLFFBQVF1QixLQUFLOzs7Ozs7MEJBQ2xCLDhEQUFDSzs7b0JBQUc1QixRQUFRNkIsS0FBSztvQkFBQzs7Ozs7OzswQkFDbEIsOERBQUNEOztvQkFBRTtvQkFBRTVCLFFBQVE4QixXQUFXOzs7Ozs7OzBCQUN4Qiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xmLFdBQVd2Qiw0RUFBa0I7Z0JBQzdCd0MsU0FBUzVCO2dCQUNUNkIsZUFBWTswQkFDYjs7Ozs7Ozs7Ozs7O0FBS1A7R0F2RFNwQzs7UUFDVVQsb0RBQVdBO1FBRVJDLG9EQUFXQTs7O0tBSHhCUTs7QUF5RFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvRGV0YWlscy9EZXRhaWxzLnRzeD9kZjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlsc1BhZ2UubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFVSTGFwcCB9IGZyb20gJy4uLy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7XHJcbiAgc2V0SXNEZXRhaWxzT3BlbixcclxuICBzZXRQcm9kdWN0LFxyXG4gIHNldFNlbGVjdGVkSWQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvc3RvcmUvaG9tZVBhZ2VTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vTG9hZGVyL0xvYWRlcic7XHJcbmltcG9ydCB7IEFwcFJvb3RTdGF0ZSB9IGZyb20gJ0Avc3JjL3JlZHV4L3JlZHVjZXJzJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxzUGFnZVByb3BzIHtcclxuICBwcm9kdWN0OiBQcm9kdWN0IHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucGFyYW1zO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7VVJMYXBwLmJhc2V9JHtVUkxhcHAucHJvZHVjdHN9LyR7aWR9YCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBwcm9kdWN0OiBQcm9kdWN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9kdWN0IH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsc1BhZ2UoeyBwcm9kdWN0IH06IERldGFpbHNQYWdlUHJvcHMpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZGV0YWlsc1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgY3VycmVudFBhZ2UgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogQXBwUm9vdFN0YXRlKSA9PiBzdGF0ZS5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRQcm9kdWN0KG51bGwpKTtcclxuICAgIGRpc3BhdGNoKHNldElzRGV0YWlsc09wZW4oZmFsc2UpKTtcclxuICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkSWQobnVsbCkpO1xyXG4gICAgcm91dGVyLnB1c2goYC8/cGFnZT0ke2N1cnJlbnRQYWdlfWApO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkZXRhaWxzUmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAhZGV0YWlsc1JlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxyXG4gICAgICApIHtcclxuICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtoYW5kbGVDbG9zZV0pO1xyXG5cclxuICBpZiAoIXByb2R1Y3QpIHtcclxuICAgIHJldHVybiA8TG9hZGVyIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc0NvbnRhaW5lcn0gcmVmPXtkZXRhaWxzUmVmfT5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlc1swXX1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGV0YWlsc31cclxuICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDI+e3Byb2R1Y3QudGl0bGV9PC9oMj5cclxuICAgICAgPHA+e3Byb2R1Y3QucHJpY2V9ICQ8L3A+XHJcbiAgICAgIDxwPiB7cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBkYXRhLXRlc3RpZD1cImNsb3NlLWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICBDbG9zZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiSW1hZ2UiLCJyb3V0ZXIiLCJzdHlsZXMiLCJzZXRJc0RldGFpbHNPcGVuIiwic2V0UHJvZHVjdCIsInNldFNlbGVjdGVkSWQiLCJMb2FkZXIiLCJEZXRhaWxzUGFnZSIsInByb2R1Y3QiLCJkaXNwYXRjaCIsImRldGFpbHNSZWYiLCJjdXJyZW50UGFnZSIsInN0YXRlIiwicGFnaW5hdGlvbiIsImhhbmRsZUNsb3NlIiwicHVzaCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImRldGFpbHNDb250YWluZXIiLCJyZWYiLCJzcmMiLCJpbWFnZXMiLCJhbHQiLCJ0aXRsZSIsImltZ0RldGFpbHMiLCJoZWlnaHQiLCJ3aWR0aCIsImgyIiwicCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJ0eXBlIiwiY2xvc2VCdXR0b24iLCJvbkNsaWNrIiwiZGF0YS10ZXN0aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/Details/Details.tsx\n'
        )
      );

      /***/
    },
});
