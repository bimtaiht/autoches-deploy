"use strict";
exports.id = 2610;
exports.ids = [2610];
exports.modules = {

/***/ 2610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_chess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3979);
/* harmony import */ var _bimdev_react_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _bimdev_react_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bimdev_react_component__WEBPACK_IMPORTED_MODULE_3__);




const ChessHover = ({ _id  })=>{
    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (_id) {
            (0,_bimdev_react_component__WEBPACK_IMPORTED_MODULE_3__.api)().get(`${_components_chess__WEBPACK_IMPORTED_MODULE_2__/* .Chess.url */ .qQ.url}/get/${_id}`).then((res)=>{
                const data = _bimdev_react_component__WEBPACK_IMPORTED_MODULE_3__.generalUtil.getobject(_components_chess__WEBPACK_IMPORTED_MODULE_2__/* .Chess */ .qQ, res.data.data[0]);
                setData(data);
            });
        }
    }, [
        _id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "select-none",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    children: [
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.attack */ .Wr.attack,
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.attackRate */ .Wr.attackRate,
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.range */ .Wr.range,
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.hpRegen */ .Wr.hpRegen,
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.armor */ .Wr.armor,
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.magicResistance */ .Wr.magicResistance,
                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.damageToChessPlayer */ .Wr.damageToChessPlayer
                    ].map((field)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                    className: "px-2 py-1 align-top text-gray-400",
                                    children: [
                                        _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.title */ .Wr.title(field),
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "px-2 align-top font-bold py-1",
                                    children: _components_chess__WEBPACK_IMPORTED_MODULE_2__/* .ChessField.format */ .Wr.format(field)(data1[field])
                                })
                            ]
                        }, field);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChessHover);


/***/ })

};
;