webpackHotUpdate_N_E("pages/notes",{

/***/ "./src/pages/notes/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/notes/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\brian\\Desktop\\Code\\FEM-NextJS\\src\\pages\\notes\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Notes = function Notes() {
  _s();

  var notes = new Array(15).fill(1).map(function (_, i) {
    return {
      id: i + 1,
      title: "Note ".concat(i + 1)
    };
  });
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    sx: {
      variant: 'containers.page'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "My Notes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      children: notes.map(function (note) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          sx: {
            width: '33%',
            p: 2
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/notes/[id]",
            as: "/notes/".concat(note.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              sx: {
                textDecoration: 'none',
                cursor: 'pointer'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                sx: {
                  variant: 'containers.card'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                  children: note.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, note.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25vdGVzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOb3RlcyIsIm5vdGVzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInRpdGxlIiwicm91dGVyIiwidXNlUm91dGVyIiwidmFyaWFudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIm5vdGUiLCJ3aWR0aCIsInAiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLEdBQU07QUFBQTs7QUFLMUIsTUFBTUMsS0FBYSxHQUFHLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQXRCLENBQTBCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVc7QUFDdkRDLFFBQUUsRUFBRUQsQ0FBQyxHQUFHLENBRCtDO0FBQzVDRSxXQUFLLGlCQUFVRixDQUFDLEdBQUcsQ0FBZDtBQUR1QyxLQUFYO0FBQUEsR0FBMUIsQ0FBdEI7QUFHQSxNQUFNRyxNQUFrQixHQUFHQyw2REFBUyxFQUFwQztBQUNBLHNCQUNJO0FBQUssTUFBRSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQVQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxRQUFFLEVBQUU7QUFBQ0MsZUFBTyxFQUFFLE1BQVY7QUFBa0JDLHNCQUFjLEVBQUUsZUFBbEM7QUFBbURDLGtCQUFVLEVBQUUsUUFBL0Q7QUFBeUVDLGdCQUFRLEVBQUU7QUFBbkYsT0FBVDtBQUFBLGdCQUNLZCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBWSxJQUFJO0FBQUEsNEJBQ1g7QUFBSyxZQUFFLEVBQUU7QUFBQ0MsaUJBQUssRUFBRSxLQUFSO0FBQWVDLGFBQUMsRUFBRTtBQUFsQixXQUFUO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLGFBQVg7QUFBeUIsY0FBRSxtQkFBWUYsSUFBSSxDQUFDVCxFQUFqQixDQUEzQjtBQUFBLG1DQUNJO0FBQUcsZ0JBQUUsRUFBRTtBQUFDWSw4QkFBYyxFQUFFLE1BQWpCO0FBQXlCQyxzQkFBTSxFQUFFO0FBQWpDLGVBQVA7QUFBQSxxQ0FDSTtBQUFLLGtCQUFFLEVBQUU7QUFBQ1QseUJBQU8sRUFBRTtBQUFWLGlCQUFUO0FBQUEsdUNBQ0k7QUFBQSw0QkFBU0ssSUFBSSxDQUFDUjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFvQ1EsSUFBSSxDQUFDVCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBZDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQTVCRDs7R0FBTVAsSztVQVF5QlUscUQ7OztLQVJ6QlYsSztBQThCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbm90ZXMuNzg1NzI1NjdlNGQ4YzM5OTg0MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7TmV4dFJvdXRlciwgdXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5vdGVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHR5cGUgTm90ZSA9IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdGVzOiBOb3RlW10gPSBuZXcgQXJyYXkoMTUpLmZpbGwoMSkubWFwKChfLCBpKSA9PiAoe1xyXG4gICAgICAgIGlkOiBpICsgMSwgdGl0bGU6IGBOb3RlICR7aSArIDF9YFxyXG4gICAgfSkpXHJcbiAgICBjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzeD17e3ZhcmlhbnQ6ICdjb250YWluZXJzLnBhZ2UnfX0+XHJcbiAgICAgICAgICAgIDxoMT5NeSBOb3RlczwvaDE+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN4PXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleFdyYXA6ICd3cmFwJ319PlxyXG4gICAgICAgICAgICAgICAge25vdGVzLm1hcChub3RlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN4PXt7d2lkdGg6ICczMyUnLCBwOiAyfX0ga2V5PXtub3RlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3Rlcy9baWRdXCIgYXM9e2Avbm90ZXMvJHtub3RlLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3g9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjdXJzb3I6ICdwb2ludGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3g9e3t2YXJpYW50OiAnY29udGFpbmVycy5jYXJkJyx9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57bm90ZS50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==