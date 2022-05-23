"use strict";
exports.id = 4428;
exports.ids = [4428];
exports.modules = {

/***/ 4428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bimdev_react_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var _bimdev_react_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bimdev_react_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_species_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2867);
/* harmony import */ var _components_species_chess_quantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6023);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2062);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_species_parameter_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8696);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);








const raceImg = "https://static.ilongyuan.cn/official_website/e52b47a8c88/69485fb0c8a01d003e0ec684e1312f84.png";
const SpeciesHover = ({ _id  })=>{
    var ref;
    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (_id) {
            (0,_bimdev_react_component__WEBPACK_IMPORTED_MODULE_2__.api)().get(`${_components_species_base__WEBPACK_IMPORTED_MODULE_3__/* .Species.url */ .Zj.url}/get/${_id}`).then((res)=>{
                const convertData = [
                    {
                        key: _components_species_base__WEBPACK_IMPORTED_MODULE_3__/* .SpeciesField.parameters */ .BC.parameters,
                        convert: (data)=>data.map((x)=>_bimdev_react_component__WEBPACK_IMPORTED_MODULE_2__.generalUtil.getobject(_components_species_parameter_base__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, x)
                            )
                    }
                ];
                const data2 = _bimdev_react_component__WEBPACK_IMPORTED_MODULE_2__.generalUtil.getobject(_components_species_base__WEBPACK_IMPORTED_MODULE_3__/* .Species */ .Zj, res.data.data[0], convertData);
                setData(data2);
            });
        }
    }, [
        _id
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-fit flex flex-row items-center bg-blue-400 -my-1.5 -mx-2 px-3.5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            src: data1.avatarUrl || raceImg,
                            width: 31,
                            height: 31,
                            alt: data1.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "ml-2 text-white font-medium",
                            children: data1.name
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-4 px-2",
                    children: (ref = data1 === null || data1 === void 0 ? void 0 : data1.chessQuantityDict.filteredItems) === null || ref === void 0 ? void 0 : ref.map((x)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-1.5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_species_chess_quantity__WEBPACK_IMPORTED_MODULE_4__/* .ChessQuantityView */ .SS, {
                                store: x
                            })
                        }, x.id);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(SpeciesHover));


/***/ })

};
;