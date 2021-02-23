webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/nav.tsx":
/*!********************************!*\
  !*** ./src/components/nav.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./theme.ts");
var _jsxFileName = "C:\\Users\\brian\\Desktop\\Code\\FEM-NextJS\\src\\components\\nav.tsx",
    _this = undefined;

/** @jsx jsx */

/** @jsxRuntime classic */



var _theme$containers = _theme__WEBPACK_IMPORTED_MODULE_2__["default"].containers,
    header = _theme$containers.header,
    headerNav = _theme$containers.headerNav,
    headerNavLink1 = _theme$containers.headerNavLink1,
    headerNavLink2 = _theme$containers.headerNavLink2;

var Nav = function Nav() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
    sx: header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
    sx: headerNav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    sx: headerNavLink1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Note App")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/notes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    sx: headerNavLink2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "notes"))));
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_brian_Desktop_Code_FEM_NextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/presets */ "./node_modules/@theme-ui/presets/dist/index.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_brian_Desktop_Code_FEM_NextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var theme = _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__["roboto"]), {}, {
  containers: {
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2
    },
    pages: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto"
    },
    header: {
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary'
    },
    headerNav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%'
    },
    headerNavLink1: {
      fontWeight: 'bold',
      fontSize: 4,
      cursor: 'pointer'
    },
    headerNavLink2: {
      color: 'text',
      fontSize: 3,
      cursor: 'pointer'
    }
  },
  styles: _objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_1__["roboto"].styles)
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUudHMiXSwibmFtZXMiOlsidGhlbWUiLCJjb250YWluZXJzIiwiaGVhZGVyIiwiaGVhZGVyTmF2IiwiaGVhZGVyTmF2TGluazEiLCJoZWFkZXJOYXZMaW5rMiIsIk5hdiIsInJvYm90byIsImNhcmQiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInAiLCJwYWdlcyIsIndpZHRoIiwibWF4V2lkdGgiLCJtIiwibXgiLCJoZWlnaHQiLCJiZyIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY3Vyc29yIiwiY29sb3IiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO3dCQUM0REEsOENBQUssQ0FBQ0MsVTtJQUEzREMsTSxxQkFBQUEsTTtJQUFRQyxTLHFCQUFBQSxTO0lBQVdDLGMscUJBQUFBLGM7SUFBZ0JDLGMscUJBQUFBLGM7O0FBRTFDLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FDUjtBQUFRLE1BQUUsRUFBRUosTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUVDLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsTUFBRSxFQUFFQyxjQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FESixFQUtJLHFEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsTUFBRSxFQUFFQyxjQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQUxKLENBREosQ0FEUTtBQUFBLENBQVo7O0tBQU1DLEc7QUFlU0Esa0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRUEsSUFBTU4sS0FBSyxtQ0FDSk8sd0RBREk7QUFFUE4sWUFBVSxFQUFFO0FBQ1JPLFFBQUksRUFBRTtBQUNGQyxlQUFTLEVBQUUsd0RBRFQ7QUFFRkMsWUFBTSxFQUFFLFdBRk47QUFHRkMsaUJBQVcsRUFBRSxPQUhYO0FBSUZDLGtCQUFZLEVBQUUsS0FKWjtBQUtGQyxPQUFDLEVBQUU7QUFMRCxLQURFO0FBUVJDLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUUsTUFESjtBQUVIQyxjQUFRLEVBQUUsT0FGUDtBQUdIQyxPQUFDLEVBQUUsQ0FIQTtBQUlIQyxRQUFFLEVBQUU7QUFKRCxLQVJDO0FBY1JoQixVQUFNLEVBQUU7QUFDSmlCLFlBQU0sRUFBRSxNQURKO0FBRUpKLFdBQUssRUFBRSxPQUZIO0FBR0pLLFFBQUUsRUFBRSxTQUhBO0FBSUpDLGtCQUFZLEVBQUUsV0FKVjtBQUtKVixpQkFBVyxFQUFFO0FBTFQsS0FkQTtBQXFCUlIsYUFBUyxFQUFFO0FBQ1BtQixhQUFPLEVBQUUsTUFERjtBQUVQQyxnQkFBVSxFQUFFLFFBRkw7QUFHUEMsb0JBQWMsRUFBRSxlQUhUO0FBSVBDLGFBQU8sRUFBRSxpQkFKRjtBQUtQTixZQUFNLEVBQUU7QUFMRCxLQXJCSDtBQTRCUmYsa0JBQWMsRUFBRTtBQUFDc0IsZ0JBQVUsRUFBRSxNQUFiO0FBQXFCQyxjQUFRLEVBQUUsQ0FBL0I7QUFBa0NDLFlBQU0sRUFBRTtBQUExQyxLQTVCUjtBQTZCUnZCLGtCQUFjLEVBQUU7QUFBQ3dCLFdBQUssRUFBRSxNQUFSO0FBQWdCRixjQUFRLEVBQUUsQ0FBMUI7QUFBNkJDLFlBQU0sRUFBRTtBQUFyQztBQTdCUixHQUZMO0FBaUNQRSxRQUFNLG9CQUNDdkIsd0RBQU0sQ0FBQ3VCLE1BRFI7QUFqQ0MsRUFBWDs7QUFzQ2U5QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjRjY2E4ZTZlNGU0MWQ1YTkzM2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi90aGVtZVwiXHJcbmNvbnN0IHtoZWFkZXIsIGhlYWRlck5hdiwgaGVhZGVyTmF2TGluazEsIGhlYWRlck5hdkxpbmsyfSA9IHRoZW1lLmNvbnRhaW5lcnNcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IChcclxuICAgIDxoZWFkZXIgc3g9e2hlYWRlcn0+XHJcbiAgICAgICAgPG5hdiBzeD17aGVhZGVyTmF2fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHN4PXtoZWFkZXJOYXZMaW5rMX0+Tm90ZSBBcHA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm90ZXNcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN4PXtoZWFkZXJOYXZMaW5rMn0+bm90ZXM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2IiwiaW1wb3J0IHtyb2JvdG99IGZyb20gXCJAdGhlbWUtdWkvcHJlc2V0c1wiXHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICAgIC4uLnJvYm90byxcclxuICAgIGNvbnRhaW5lcnM6IHtcclxuICAgICAgICBjYXJkOiB7XHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNClcIixcclxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJtdXRlZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIHA6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiOTYwcHhcIixcclxuICAgICAgICAgICAgbTogMCxcclxuICAgICAgICAgICAgbXg6IFwiYXV0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNjBweCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJOYXY6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgdmFyaWFudDogJ2NvbnRhaW5lcnMucGFnZScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJOYXZMaW5rMToge2ZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6IDQsIGN1cnNvcjogJ3BvaW50ZXInfSxcclxuICAgICAgICBoZWFkZXJOYXZMaW5rMjoge2NvbG9yOiAndGV4dCcsIGZvbnRTaXplOiAzLCBjdXJzb3I6ICdwb2ludGVyJ31cclxuICAgIH0sXHJcbiAgICBzdHlsZXM6IHtcclxuICAgICAgICAuLi5yb2JvdG8uc3R5bGVzXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwic291cmNlUm9vdCI6IiJ9