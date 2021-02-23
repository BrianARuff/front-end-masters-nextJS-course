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
    headerNavLink1 = _theme$containers.headerNavLink1;

var Nav = function Nav() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
    sx: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].containers.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
    sx: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].containers.headerNav,
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
    sx: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].conta,
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
    sx: {
      color: 'text',
      fontSize: 3,
      cursor: 'pointer'
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUudHMiXSwibmFtZXMiOlsidGhlbWUiLCJjb250YWluZXJzIiwiaGVhZGVyIiwiaGVhZGVyTmF2IiwiaGVhZGVyTmF2TGluazEiLCJOYXYiLCJjb250YSIsImNvbG9yIiwiZm9udFNpemUiLCJjdXJzb3IiLCJyb2JvdG8iLCJjYXJkIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwIiwicGFnZXMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibSIsIm14IiwiaGVpZ2h0IiwiYmciLCJib3JkZXJCb3R0b20iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO3dCQUM0Q0EsOENBQUssQ0FBQ0MsVTtJQUEzQ0MsTSxxQkFBQUEsTTtJQUFRQyxTLHFCQUFBQSxTO0lBQVdDLGMscUJBQUFBLGM7O0FBRTFCLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FDUjtBQUFRLE1BQUUsRUFBRUwsOENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssTUFBRSxFQUFFRiw4Q0FBSyxDQUFDQyxVQUFOLENBQWlCRSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0kscURBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUVILDhDQUFLLENBQUNNLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQURKLEVBS0kscURBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLE1BQVI7QUFBZ0JDLGNBQVEsRUFBRSxDQUExQjtBQUE2QkMsWUFBTSxFQUFFO0FBQXJDLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLENBTEosQ0FESixDQURRO0FBQUEsQ0FBWjs7S0FBTUosRztBQWVTQSxrRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTs7QUFFQSxJQUFNTCxLQUFLLG1DQUNKVSx3REFESTtBQUVQVCxZQUFVLEVBQUU7QUFDUlUsUUFBSSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRSx3REFEVDtBQUVGQyxZQUFNLEVBQUUsV0FGTjtBQUdGQyxpQkFBVyxFQUFFLE9BSFg7QUFJRkMsa0JBQVksRUFBRSxLQUpaO0FBS0ZDLE9BQUMsRUFBRTtBQUxELEtBREU7QUFRUkMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRSxNQURKO0FBRUhDLGNBQVEsRUFBRSxPQUZQO0FBR0hDLE9BQUMsRUFBRSxDQUhBO0FBSUhDLFFBQUUsRUFBRTtBQUpELEtBUkM7QUFjUm5CLFVBQU0sRUFBRTtBQUNKb0IsWUFBTSxFQUFFLE1BREo7QUFFSkosV0FBSyxFQUFFLE9BRkg7QUFHSkssUUFBRSxFQUFFLFNBSEE7QUFJSkMsa0JBQVksRUFBRSxXQUpWO0FBS0pWLGlCQUFXLEVBQUU7QUFMVCxLQWRBO0FBcUJSWCxhQUFTLEVBQUU7QUFDUHNCLGFBQU8sRUFBRSxNQURGO0FBRVBDLGdCQUFVLEVBQUUsUUFGTDtBQUdQQyxvQkFBYyxFQUFFLGVBSFQ7QUFJUEMsYUFBTyxFQUFFLGlCQUpGO0FBS1BOLFlBQU0sRUFBRTtBQUxELEtBckJIO0FBNEJSbEIsa0JBQWMsRUFBRTtBQUFDeUIsZ0JBQVUsRUFBRSxNQUFiO0FBQXFCckIsY0FBUSxFQUFFLENBQS9CO0FBQWtDQyxZQUFNLEVBQUU7QUFBMUM7QUE1QlIsR0FGTDtBQWdDUHFCLFFBQU0sb0JBQ0NwQix3REFBTSxDQUFDb0IsTUFEUjtBQWhDQyxFQUFYOztBQXFDZTlCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzMzMWRhZGVmYTNlMzcwODEwZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG4vKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3RoZW1lXCJcclxuY29uc3Qge2hlYWRlciwgaGVhZGVyTmF2LCBoZWFkZXJOYXZMaW5rMX0gPSB0aGVtZS5jb250YWluZXJzXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiAoXHJcbiAgICA8aGVhZGVyIHN4PXt0aGVtZS5jb250YWluZXJzLmhlYWRlcn0+XHJcbiAgICAgICAgPG5hdiBzeD17dGhlbWUuY29udGFpbmVycy5oZWFkZXJOYXZ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3g9e3RoZW1lLmNvbnRhfT5Ob3RlIEFwcDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3Rlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3g9e3tjb2xvcjogJ3RleHQnLCBmb250U2l6ZTogMywgY3Vyc29yOiAncG9pbnRlcid9fT5ub3RlczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXYiLCJpbXBvcnQge3JvYm90b30gZnJvbSBcIkB0aGVtZS11aS9wcmVzZXRzXCJcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gICAgLi4ucm9ib3RvLFxyXG4gICAgY29udGFpbmVyczoge1xyXG4gICAgICAgIGNhcmQ6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIm11dGVkXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgcDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnZXM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI5NjBweFwiLFxyXG4gICAgICAgICAgICBtOiAwLFxyXG4gICAgICAgICAgICBteDogXCJhdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlck5hdjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICB2YXJpYW50OiAnY29udGFpbmVycy5wYWdlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlck5hdkxpbmsxOiB7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogNCwgY3Vyc29yOiAncG9pbnRlcid9XHJcbiAgICB9LFxyXG4gICAgc3R5bGVzOiB7XHJcbiAgICAgICAgLi4ucm9ib3RvLnN0eWxlc1xyXG4gICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==