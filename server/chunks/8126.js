"use strict";
exports.id = 8126;
exports.ids = [8126];
exports.modules = {

/***/ 8126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SpeciesDict)
});

// EXTERNAL MODULE: ./components/species/base/base/index.ts + 1 modules
var base = __webpack_require__(8567);
// EXTERNAL MODULE: external "@bimdev/react-component"
var react_component_ = __webpack_require__(159);
// EXTERNAL MODULE: ./components/species/base/field/index.ts
var field = __webpack_require__(2101);
// EXTERNAL MODULE: ./components/species/parameter/base/index.ts
var parameter_base = __webpack_require__(8696);
;// CONCATENATED MODULE: ./components/species/base/dict/indexUtil.tsx




// property
// item
const handleItems_Main = (q)=>{
    const setObj = (data1)=>{
        const convertData = [
            {
                key: field.parameters,
                convert: (data)=>data.map((x)=>react_component_.generalUtil.getobject(parameter_base/* default */.Z, x)
                    )
            }
        ];
        q.items = data1.map((x)=>{
            let item = react_component_.generalUtil.getobject(base/* default */.Z, x, convertData);
            item.dict = q;
            return item;
        });
    };
    const getApi = ()=>{
        base/* default.getdata */.Z.getdata(base/* default.url */.Z.url, q.requestData, (data)=>{
            setObj(data);
        });
    };
    getApi();
};

;// CONCATENATED MODULE: ./components/species/base/dict/index.tsx



class SpeciesDict extends react_component_.Dict {
    constructor(){
        super();
        react_component_.generalUtil.add(this.onSet_RequestData_Func, this.refresh_items, false);
    }
    // item
    handleItems_Main = ()=>handleItems_Main(this)
    ;
    createItem = ()=>{
        let item = new base/* default */.Z(this);
        item.saveDatabase(()=>{
            this.items.push(item);
            this.refresh_filteredItems();
        });
    };
};


/***/ }),

/***/ 8696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SpeciesParamter)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

class SpeciesParamter {
    constructor(){
        (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this, {
            type: mobx__WEBPACK_IMPORTED_MODULE_0__.observable
        });
    }
    key = "NEW_PARAM";
    type = "VALUE";
    get fullkey() {
        return `%${this.key}${this.type === "VALUE" ? "" : "_PERCENT"}%`;
    }
};


/***/ })

};
;