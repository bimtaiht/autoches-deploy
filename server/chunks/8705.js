"use strict";
exports.id = 8705;
exports.ids = [8705];
exports.modules = {

/***/ 8705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5944);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_chess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3979);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3506);
/* harmony import */ var _ChessHover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2610);
/* harmony import */ var _SpeciesHover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4428);









const chessImg = "https://static.ilongyuan.cn/official_website/e52b47a8c88/4780acea37a0d848d97dd54348e33db8.png";
const raceImg = "https://static.ilongyuan.cn/official_website/e52b47a8c88/69485fb0c8a01d003e0ec684e1312f84.png";
const classImg = "https://static.ilongyuan.cn/official_website/e52b47a8c88/3317df9cc4b75d3f551eb72fa8d53629.png";
const ChessMap_Page = ()=>{
    var ref, ref1;
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setData(new _components_chess__WEBPACK_IMPORTED_MODULE_5__/* .ChessMap */ .Ru());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
            className: "m-5",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "align-top pt-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "py-1 px-2 bg-blue-300 rounded text-white font-medium cursor-pointer select-none",
                                    onClick: data.refresh_items,
                                    children: "Search"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "pl-[100px]",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row items-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "py-1 px-2 ml-2 mr-2 rounded-md bg-green-300 text-white uppercase font-medium text-center select-none",
                                            children: `Nghề >`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-wrap max-w-[300px] -my-0.5",
                                            children: (ref = data.speciesGroup.classes.filteredItems) === null || ref === void 0 ? void 0 : ref.map((x)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SpeciesHover__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                        _id: x._id
                                                    }),
                                                    placement: "bottom",
                                                    overlayClassName: "bg-blue-400",
                                                    openClassName: "bg-red-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: `mx-1 my-1 pt-1 px-1 rounded-md text-white cursor-pointer text-center select-none
                      ${data.currentClasses.indexOf(x) !== -1 ? "bg-green-300" : "bg-gray-300"}`,
                                                        onClick: ()=>data.setCurrentClass(x)
                                                        ,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: x.avatarUrl || classImg,
                                                            width: 31,
                                                            height: 31,
                                                            alt: x.name
                                                        })
                                                    })
                                                }, x._id);
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "align-top pt-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "py-1 px-2 mb-2.5 rounded-md bg-red-300 text-white uppercase font-medium text-center select-none",
                                            children: `Tộc`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-wrap flex-col max-h-[300px] -mx-0.5",
                                            children: (ref1 = data.speciesGroup.races.filteredItems) === null || ref1 === void 0 ? void 0 : ref1.map((x)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SpeciesHover__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                        _id: x._id
                                                    }),
                                                    placement: "right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: `mx-1 my-1 pt-1 px-1 rounded-md bg-gray-300 text-white cursor-pointer text-center select-none
                      ${data.currentRaces.indexOf(x) !== -1 ? "bg-red-300" : "bg-gray-300"}`,
                                                        onClick: ()=>data.setCurrentRace(x)
                                                        ,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: x.avatarUrl || raceImg,
                                                            width: 31,
                                                            height: 31,
                                                            alt: x.name
                                                        })
                                                    })
                                                }, x._id);
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                className: "align-top pt-5 pl-[100px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-wrap max-w-[1100px]",
                                    children: data.filteredItems && data.filteredItems.length !== 0 ? data.filteredItems.map((x)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-fit mx-2 my-1 cursor-pointer select-none",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChessHover__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        _id: x._id
                                                    }),
                                                    placement: "right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-gray-300",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: x.avatarUrl || chessImg,
                                                            width: 170,
                                                            height: 170,
                                                            alt: x.name
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-1 font-medium",
                                                            children: x.name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center bg-blue-400 h-[31px]",
                                                            children: [
                                                                x.races.map((r)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SpeciesHover__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                                            _id: r._id
                                                                        }),
                                                                        placement: "bottom",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "mx-1",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                src: r.avatarUrl || raceImg,
                                                                                width: 31,
                                                                                height: 31,
                                                                                alt: x.name
                                                                            })
                                                                        })
                                                                    }, r._id);
                                                                // <span key={r.name}>{r.name}</span>
                                                                }),
                                                                x.classes.map((cl)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                                                                        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SpeciesHover__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                                            _id: cl._id
                                                                        }),
                                                                        placement: "bottom",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "mx-1",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                src: cl.avatarUrl || classImg,
                                                                                width: 31,
                                                                                height: 31,
                                                                                alt: x.name
                                                                            })
                                                                        })
                                                                    }, cl._id);
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, x._id);
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-red-400 uppercase text-base p-8 font-semibold",
                                        children: "no chesses found!"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(ChessMap_Page));


/***/ })

};
;