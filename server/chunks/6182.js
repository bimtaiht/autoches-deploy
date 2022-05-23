"use strict";
exports.id = 6182;
exports.ids = [6182];
exports.modules = {

/***/ 2867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zj": () => (/* reexport */ base/* default */.Z),
  "BC": () => (/* reexport */ field),
  "Do": () => (/* reexport */ type_namespaceObject)
});

// NAMESPACE OBJECT: ./components/species/base/type/index.ts
var type_namespaceObject = {};
__webpack_require__.r(type_namespaceObject);
__webpack_require__.d(type_namespaceObject, {
  "CLASS": () => (CLASS),
  "RACE": () => (RACE),
  "list": () => (list),
  "title": () => (title)
});

// EXTERNAL MODULE: ./components/species/base/base/index.ts + 1 modules
var base = __webpack_require__(8567);
// EXTERNAL MODULE: ./components/species/base/field/index.ts
var field = __webpack_require__(2101);
;// CONCATENATED MODULE: ./components/species/base/type/index.ts
const RACE = "RACE";
const CLASS = "CLASS";
const list = ()=>{
    return [
        RACE,
        CLASS
    ];
};
const title = (field)=>{
    switch(field){
        case RACE:
            return "RACE";
        case CLASS:
            return "CLASS";
    }
};

;// CONCATENATED MODULE: ./components/species/base/index.ts






/***/ }),

/***/ 6023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y3": () => (/* reexport */ base/* default */.Z),
  "dS": () => (/* reexport */ field),
  "SS": () => (/* reexport */ indexView)
});

// EXTERNAL MODULE: ./components/species/chess_quantity/base/index.ts + 1 modules
var base = __webpack_require__(7877);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mobx-react-lite"
var external_mobx_react_lite_ = __webpack_require__(5944);
// EXTERNAL MODULE: external "@bimdev/react-component"
var react_component_ = __webpack_require__(159);
;// CONCATENATED MODULE: ./components/species/chess_quantity/base/indexView.tsx



const View = ({ store  })=>{
    const data = store;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "mr-2 rounded-full bg-blue-400 mt-1 _py-1 px-2 text-white",
                children: data.quantity
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "mt-1 flex flex-col",
                children: data.synergy.map((x)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pb-1",
                        children: x
                    }, react_component_.generalUtil.randomInt());
                })
            })
        ]
    });
};
/* harmony default export */ const indexView = ((0,external_mobx_react_lite_.observer)(View));

// EXTERNAL MODULE: ./components/species/chess_quantity/field/index.ts
var field = __webpack_require__(4808);
;// CONCATENATED MODULE: ./components/species/chess_quantity/index.ts






/***/ })

};
;