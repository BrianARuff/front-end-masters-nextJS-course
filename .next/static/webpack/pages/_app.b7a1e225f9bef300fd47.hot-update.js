webpackHotUpdate_N_E("pages/_app",{

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
      borderRadius: "4px"
    },
    pages: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    },
    header: {
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
      p: 40,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "space-between"
    },
    headerNav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%',
      pr: 40
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUudHMiXSwibmFtZXMiOlsidGhlbWUiLCJyb2JvdG8iLCJjb250YWluZXJzIiwiY2FyZCIsImJveFNoYWRvdyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFnZXMiLCJ3aWR0aCIsIm1heFdpZHRoIiwibSIsIm14IiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJoZWFkZXIiLCJiZyIsImJvcmRlckJvdHRvbSIsInAiLCJoZWFkZXJOYXYiLCJ2YXJpYW50IiwicHIiLCJoZWFkZXJOYXZMaW5rMSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImN1cnNvciIsImhlYWRlck5hdkxpbmsyIiwiY29sb3IiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLG1DQUNKQyx3REFESTtBQUVQQyxZQUFVLEVBQUU7QUFDUkMsUUFBSSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRSx3REFEVDtBQUVGQyxZQUFNLEVBQUUsV0FGTjtBQUdGQyxpQkFBVyxFQUFFLE9BSFg7QUFJRkMsa0JBQVksRUFBRTtBQUpaLEtBREU7QUFPUkMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRSxNQURKO0FBRUhDLGNBQVEsRUFBRSxPQUZQO0FBR0hDLE9BQUMsRUFBRSxDQUhBO0FBSUhDLFFBQUUsRUFBRSxNQUpEO0FBS0hDLGFBQU8sRUFBRSxNQUxOO0FBTUhDLGFBQU8sRUFBRSxNQU5OO0FBT0hDLG9CQUFjLEVBQUUsUUFQYjtBQVFIQyxnQkFBVSxFQUFFLFFBUlQ7QUFTSEMsWUFBTSxFQUFFO0FBVEwsS0FQQztBQWtCUkMsVUFBTSxFQUFFO0FBQ0pELFlBQU0sRUFBRSxNQURKO0FBRUpSLFdBQUssRUFBRSxPQUZIO0FBR0pVLFFBQUUsRUFBRSxTQUhBO0FBSUpDLGtCQUFZLEVBQUUsV0FKVjtBQUtKZCxpQkFBVyxFQUFFLFNBTFQ7QUFNSmUsT0FBQyxFQUFFLEVBTkM7QUFPSlAsYUFBTyxFQUFFLE1BUEw7QUFRSkMsb0JBQWMsRUFBRSxlQVJaO0FBU0pDLGdCQUFVLEVBQUU7QUFUUixLQWxCQTtBQTZCUk0sYUFBUyxFQUFFO0FBQ1BSLGFBQU8sRUFBRSxNQURGO0FBRVBFLGdCQUFVLEVBQUUsUUFGTDtBQUdQRCxvQkFBYyxFQUFFLGVBSFQ7QUFJUFEsYUFBTyxFQUFFLGlCQUpGO0FBS1BOLFlBQU0sRUFBRSxNQUxEO0FBTVBPLFFBQUUsRUFBRTtBQU5HLEtBN0JIO0FBcUNSQyxrQkFBYyxFQUFFO0FBQUNDLGdCQUFVLEVBQUUsTUFBYjtBQUFxQkMsY0FBUSxFQUFFLENBQS9CO0FBQWtDQyxZQUFNLEVBQUU7QUFBMUMsS0FyQ1I7QUFzQ1JDLGtCQUFjLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLE1BQVI7QUFBZ0JILGNBQVEsRUFBRSxDQUExQjtBQUE2QkMsWUFBTSxFQUFFO0FBQXJDO0FBdENSLEdBRkw7QUEwQ1BHLFFBQU0sb0JBQ0M5Qix3REFBTSxDQUFDOEIsTUFEUjtBQTFDQyxFQUFYOztBQStDZS9CLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjdhMWUyMjVmOWJlZjMwMGZkNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cm9ib3RvfSBmcm9tIFwiQHRoZW1lLXVpL3ByZXNldHNcIlxyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICAuLi5yb2JvdG8sXHJcbiAgICBjb250YWluZXJzOiB7XHJcbiAgICAgICAgY2FyZDoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwibXV0ZWRcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnZXM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI5NjBweFwiLFxyXG4gICAgICAgICAgICBtOiAwLFxyXG4gICAgICAgICAgICBteDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzYwcHgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgcDogNDAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJOYXY6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgdmFyaWFudDogJ2NvbnRhaW5lcnMucGFnZScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBwcjogNDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlck5hdkxpbmsxOiB7Zm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogNCwgY3Vyc29yOiAncG9pbnRlcid9LFxyXG4gICAgICAgIGhlYWRlck5hdkxpbmsyOiB7Y29sb3I6ICd0ZXh0JywgZm9udFNpemU6IDMsIGN1cnNvcjogJ3BvaW50ZXInfVxyXG4gICAgfSxcclxuICAgIHN0eWxlczoge1xyXG4gICAgICAgIC4uLnJvYm90by5zdHlsZXNcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyJdLCJzb3VyY2VSb290IjoiIn0=