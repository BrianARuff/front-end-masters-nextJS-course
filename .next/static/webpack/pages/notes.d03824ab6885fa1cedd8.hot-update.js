webpackHotUpdate_N_E("pages/notes",{

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
false,

/***/ "./node_modules/react/jsx-dev-runtime.js":
false,

/***/ "./src/pages/notes/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/notes/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\brian\\Desktop\\Code\\FEM-NextJS\\src\\pages\\notes\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();


/** @jsx jsx */

/** @jsxRuntime classic */





var Notes = function Notes() {
  _s();

  var notes = new Array(15).fill(1).map(function (_, i) {
    return {
      id: i + 1,
      title: "Note ".concat(i + 1)
    };
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: {
      variant: 'containers.page'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "My Notes"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, notes.map(function (note) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      sx: {
        width: '33%',
        p: 2
      },
      key: note.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/notes/[id]",
      as: "/notes/".concat(note.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      sx: {
        textDecoration: 'none',
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      sx: {
        variant: 'containers.card'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 33
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 37
      }
    }, note.title)))));
  })));
};

_s(Notes, "hiS8qxSQ4/p4gtIvOT37RqZ02j0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Notes;
/* harmony default export */ __webpack_exports__["default"] = (Notes);

var _c;

$RefreshReg$(_c, "Notes");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25vdGVzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RlcyIsIm5vdGVzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInRpdGxlIiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIm5vdGUiLCJ3aWR0aCIsInAiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQWUsR0FBRyxTQUFsQkEsS0FBa0IsR0FBTTtBQUFBOztBQUsxQixNQUFNQyxLQUFhLEdBQUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsSUFBZCxDQUFtQixDQUFuQixFQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVztBQUN2REMsUUFBRSxFQUFFRCxDQUFDLEdBQUcsQ0FEK0M7QUFDNUNFLFdBQUssaUJBQVVGLENBQUMsR0FBRyxDQUFkO0FBRHVDLEtBQVg7QUFBQSxHQUExQixDQUF0QjtBQUdBLE1BQU1HLE1BQWtCLEdBQUdDLDZEQUFTLEVBQXBDO0FBQ0EsU0FDSTtBQUFLLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBR0k7QUFBSyxNQUFFLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsb0JBQWMsRUFBRSxlQUZYO0FBR0xDLGdCQUFVLEVBQUUsUUFIUDtBQUlMQyxjQUFRLEVBQUU7QUFKTCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNS2QsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQVksSUFBSTtBQUFBLFdBQ1g7QUFBSyxRQUFFLEVBQUU7QUFBQ0MsYUFBSyxFQUFFLEtBQVI7QUFBZUMsU0FBQyxFQUFFO0FBQWxCLE9BQVQ7QUFBK0IsU0FBRyxFQUFFRixJQUFJLENBQUNULEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxxREFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLFFBQUUsbUJBQVlTLElBQUksQ0FBQ1QsRUFBakIsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsUUFBRSxFQUFFO0FBQUNZLHNCQUFjLEVBQUUsTUFBakI7QUFBeUJDLGNBQU0sRUFBRTtBQUFqQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFFBQUUsRUFBRTtBQUFDVCxlQUFPLEVBQUU7QUFBVixPQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVNLLElBQUksQ0FBQ1IsS0FBZCxDQURKLENBREosQ0FESixDQURKLENBRFc7QUFBQSxHQUFkLENBTkwsQ0FISixDQURKO0FBd0JILENBakNEOztHQUFNUixLO1VBUXlCVSxxRDs7O0tBUnpCVixLO0FBbUNTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ub3Rlcy5kMDM4MjRhYjY4ODVmYTFjZWRkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8qKiBAanN4IGpzeCAqL1xyXG4vKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7TmV4dFJvdXRlciwgdXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5vdGVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHR5cGUgTm90ZSA9IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdGVzOiBOb3RlW10gPSBuZXcgQXJyYXkoMTUpLmZpbGwoMSkubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgICAgIGlkOiBpICsgMSwgdGl0bGU6IGBOb3RlICR7aSArIDF9YFxyXG4gICAgfSkpXHJcbiAgICBjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzeD17e3ZhcmlhbnQ6ICdjb250YWluZXJzLnBhZ2UnfX0+XHJcbiAgICAgICAgICAgIDxoMT5NeSBOb3RlczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge25vdGVzLm1hcChub3RlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN4PXt7d2lkdGg6ICczMyUnLCBwOiAyfX0ga2V5PXtub3RlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3Rlcy9baWRdXCIgYXM9e2Avbm90ZXMvJHtub3RlLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3g9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjdXJzb3I6ICdwb2ludGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3g9e3t2YXJpYW50OiAnY29udGFpbmVycy5jYXJkJyx9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57bm90ZS50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==