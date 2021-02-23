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
var _jsxFileName = "C:\\Users\\brian\\Desktop\\Code\\FEM-NextJS\\src\\components\\nav.tsx",
    _this = undefined;

/** @jsx jsx */

/** @jsxRuntime classic */



var Nav = function Nav() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
    sx: header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    sx: {
      fontWeight: 'bold',
      fontSize: 4,
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Note App")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/notes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    sx: {
      color: 'text',
      fontSize: 3,
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUudHMiXSwibmFtZXMiOlsiTmF2IiwiaGVhZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInZhcmlhbnQiLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjdXJzb3IiLCJjb2xvciIsInRoZW1lIiwicm9ib3RvIiwiY29udGFpbmVycyIsImNhcmQiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInAiLCJwYWdlcyIsIndpZHRoIiwibWF4V2lkdGgiLCJtIiwibXgiLCJiZyIsImJvcmRlckJvdHRvbSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUNSO0FBQVEsTUFBRSxFQUFFQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUUsTUFBVjtBQUFrQkMsZ0JBQVUsRUFBRSxRQUE5QjtBQUF5Q0Msb0JBQWMsRUFBRSxlQUF6RDtBQUEwRUMsYUFBTyxFQUFFLGlCQUFuRjtBQUFzR0MsWUFBTSxFQUFFO0FBQTlHLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLHFEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsTUFBRSxFQUFFO0FBQUNDLGdCQUFVLEVBQUUsTUFBYjtBQUFxQkMsY0FBUSxFQUFFLENBQS9CO0FBQWtDQyxZQUFNLEVBQUU7QUFBMUMsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBREosRUFLSSxxREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLE1BQUUsRUFBRTtBQUFDQyxXQUFLLEVBQUUsTUFBUjtBQUFnQkYsY0FBUSxFQUFFLENBQTFCO0FBQTZCQyxZQUFNLEVBQUU7QUFBckMsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosQ0FMSixDQURKLENBRFE7QUFBQSxDQUFaOztLQUFNVCxHO0FBZVNBLGtFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOztBQUVBLElBQU1XLEtBQUssbUNBQ0pDLHdEQURJO0FBRVBDLFlBQVUsRUFBRTtBQUNSQyxRQUFJLEVBQUU7QUFDRkMsZUFBUyxFQUFFLHdEQURUO0FBRUZDLFlBQU0sRUFBRSxXQUZOO0FBR0ZDLGlCQUFXLEVBQUUsT0FIWDtBQUlGQyxrQkFBWSxFQUFFLEtBSlo7QUFLRkMsT0FBQyxFQUFFO0FBTEQsS0FERTtBQVFSQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsY0FBUSxFQUFFLE9BRlA7QUFHSEMsT0FBQyxFQUFFLENBSEE7QUFJSEMsUUFBRSxFQUFFO0FBSkQsS0FSQztBQWNSdkIsVUFBTSxFQUFFO0FBQUNLLFlBQU0sRUFBRSxNQUFUO0FBQWlCZSxXQUFLLEVBQUUsT0FBeEI7QUFBaUNJLFFBQUUsRUFBRSxTQUFyQztBQUFnREMsa0JBQVksRUFBRSxXQUE5RDtBQUEyRVQsaUJBQVcsRUFBRTtBQUF4RjtBQWRBLEdBRkw7QUFrQlBVLFFBQU0sb0JBQ0NmLHdEQUFNLENBQUNlLE1BRFI7QUFsQkMsRUFBWDs7QUF1QmVoQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU3YmI0ZDkyZWMxYzRlYjU1YTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IChcclxuICAgIDxoZWFkZXIgc3g9e2hlYWRlcn0+XHJcbiAgICAgICAgPG5hdiBzeD17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB2YXJpYW50OiAnY29udGFpbmVycy5wYWdlJywgaGVpZ2h0OiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHN4PXt7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogNCwgY3Vyc29yOiAncG9pbnRlcid9fT5Ob3RlIEFwcDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3g9e3tjb2xvcjogJ3RleHQnLCBmb250U2l6ZTogMywgY3Vyc29yOiAncG9pbnRlcid9fT5ub3RlczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXYiLCJpbXBvcnQge3JvYm90b30gZnJvbSBcIkB0aGVtZS11aS9wcmVzZXRzXCJcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gICAgLi4ucm9ib3RvLFxyXG4gICAgY29udGFpbmVyczoge1xyXG4gICAgICAgIGNhcmQ6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIm11dGVkXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgcDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnZXM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI5NjBweFwiLFxyXG4gICAgICAgICAgICBtOiAwLFxyXG4gICAgICAgICAgICBteDogXCJhdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcjoge2hlaWdodDogJzYwcHgnLCB3aWR0aDogJzEwMHZ3JywgYmc6ICdwcmltYXJ5JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJywgYm9yZGVyQ29sb3I6ICdwcmltYXJ5J31cclxuICAgIH0sXHJcbiAgICBzdHlsZXM6IHtcclxuICAgICAgICAuLi5yb2JvdG8uc3R5bGVzXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwic291cmNlUm9vdCI6IiJ9