"use strict";
exports.id = 8567;
exports.ids = [8567];
exports.modules = {

/***/ 8567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Species)
});

// EXTERNAL MODULE: external "@bimdev/react-component"
var react_component_ = __webpack_require__(159);
// EXTERNAL MODULE: ./components/species/base/field/index.ts
var field = __webpack_require__(2101);
// EXTERNAL MODULE: ./components/species/chess_quantity/base/index.ts + 1 modules
var base = __webpack_require__(7877);
;// CONCATENATED MODULE: ./components/species/base/base/indexUtil.ts


// property
//getChessDict
const getChessQuantityDict = (q)=>{
    var qI = new react_component_.Dict();
    qI.species = q;
    qI.handleItems_Main = ()=>{
        const setObj = (data)=>{
            qI.items = data.map((x)=>{
                let item = react_component_.generalUtil.getobject(base/* default */.Z, x);
                item.dict = qI;
                return item;
            });
        };
        const getApi = ()=>{
            var apiData = {
                filter: {
                    speciesId: q._id
                }
            };
            base/* default.getdata */.Z.getdata(base/* default.url */.Z.url, apiData, (data)=>{
                setObj(data);
            });
        };
        getApi();
    };
    //qI.items = items
    return qI;
};

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(6211);
;// CONCATENATED MODULE: ./components/species/base/base/index.ts




class Species extends react_component_.Item {
    constructor(dict){
        super();
        this.dict = dict;
        (0,external_mobx_.makeObservable)(this, {
            type: external_mobx_.observable,
            avatarUrl: external_mobx_.observable,
            parameters: external_mobx_.observable,
            synergy: external_mobx_.observable
        });
    }
    static get testdata() {
        return [
            {
                name: "Goblin",
                parameters: [
                    "MAX_HP_PERCENT",
                    "ATTACK_PERCENT",
                    "STACK"
                ],
                synergy: "If any melle ally dies, increases max HP by %MAX_HP_PERCENT%, ATK by %ATTACK_PERCENT% for all alied Kiras, can be stacked %STACK% times."
            },
            {
                name: "Elf"
            }
        ].map((x)=>react_component_.generalUtil.getobject(Species, x)
        );
    }
    static url = "/api/species";
    // public static url = "http://localhost:3000/api/species"
    get url() {
        return Species.url;
    }
    get createFields() {
        return [
            field.name,
            field.type,
            field.parameters,
            field.synergy
        ];
    }
    update = (field)=>{
        this.setPropData([
            {
                field,
                value: this[field]
            }
        ], true);
    };
    name = "New species";
    type = "RACE";
    avatarUrl = undefined;
    parameters = [];
    synergy = [
        "synery ..."
    ];
    get chessQuantityDict() {
        var __chessQuantityDict;
        return (__chessQuantityDict = this._chessQuantityDict) !== null && __chessQuantityDict !== void 0 ? __chessQuantityDict : this._chessQuantityDict = getChessQuantityDict(this);
    }
    deleteOnUI = ()=>{
        this.list.splice(this.index, 1);
        this.dict.refresh_filteredItems();
    };
};


/***/ }),

/***/ 2101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatarUrl": () => (/* binding */ avatarUrl),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "lore": () => (/* binding */ lore),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "parameters": () => (/* binding */ parameters),
/* harmony export */   "synergy": () => (/* binding */ synergy),
/* harmony export */   "td_css": () => (/* binding */ td_css),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "type": () => (/* binding */ type)
/* harmony export */ });
const name = "name";
const lore = "lore";
const type = "type";
const avatarUrl = "avatarUrl";
const parameters = "parameters";
const synergy = "synergy";
const list = ()=>{
    return [
        lore,
        synergy
    ];
};
// title
const title = (field)=>{
    switch(field){
        case name:
            return "Name";
        case type:
            return "Type";
        case avatarUrl:
            return "Avatar";
        case lore:
            return "Lore";
        case parameters:
            return "Parameters";
        case synergy:
            return "Synergy";
    }
};
const td_css = (field)=>{
    switch(field){
        case name:
            return "min-w-[150px]";
        case avatarUrl:
            return "min-w-[150px] max-w-[150px]";
        case parameters:
            return "min-w-[270px]";
        case synergy:
            return "w-full";
        default:
            return "";
    }
};


/***/ }),

/***/ 7877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ChessQuantity)
});

// EXTERNAL MODULE: external "@bimdev/react-component"
var react_component_ = __webpack_require__(159);
;// CONCATENATED MODULE: ./components/species/parameter/field/index.ts
const MAX_HP = "MAX_HP";
const ATTACK = "ATTACK";
const STACK = "STACK";
const value = (q, key, type)=>{
    let val;
    let isValid = false;
    q.species.parameters.map((x)=>x.key
    ).forEach((k)=>{
        if (!isValid) {
            if (key.includes(k)) {
                val = q.parameters[k];
                isValid = true;
            }
        }
    });
    val = type === "VALUE" ? val : Math.round(val * 100);
    return type === "VALUE" ? val.toString() : `${val}%`;
};

// EXTERNAL MODULE: ./components/species/chess_quantity/field/index.ts
var field = __webpack_require__(4808);
;// CONCATENATED MODULE: ./components/species/chess_quantity/base/index.ts



class ChessQuantity extends react_component_.Item {
    constructor(dict){
        super();
        this.dict = dict;
    }
    static get testdata() {
        return [
            {
                quantity: 2,
                MAX_HP: 0.15,
                ATTACK: 0.2,
                STACK: 6
            }, 
        ].map((x)=>{
            var qI = react_component_.generalUtil.getobject(ChessQuantity, x);
            return qI;
        });
    }
    static url = "/api/chess-quantity";
    get url() {
        return ChessQuantity.url;
    }
    get createFields() {
        const list = [
            field.speciesId,
            field.quantity,
            field.parameters
        ];
        return list;
    }
    get speciesId() {
        var __speciesId;
        return (__speciesId = this._speciesId) !== null && __speciesId !== void 0 ? __speciesId : this._speciesId = this.species._id;
    }
    set speciesId(v) {
        this._speciesId = v;
    }
    get species() {
        var __species;
        return (__species = this._species) !== null && __species !== void 0 ? __species : this._species = this.dict.species;
    }
    quantity = 1;
    parameters = {};
    updateParameters = ()=>{
        this.setPropData([
            {
                field: field.parameters,
                value: this.parameters
            }
        ], true);
    };
    get synergy() {
        let syns = this.species.synergy;
        const { parameters  } = this.species;
        syns = syns.map((syn)=>{
            parameters.forEach((param)=>{
                syn = syn.replaceAll(param.fullkey, value(this, param.key, param.type));
            });
            return syn;
        });
        return syns;
    }
};


/***/ }),

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "parameters": () => (/* binding */ parameters),
/* harmony export */   "quantity": () => (/* binding */ quantity),
/* harmony export */   "speciesId": () => (/* binding */ speciesId),
/* harmony export */   "td_css": () => (/* binding */ td_css),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
const speciesId = "speciesId";
const quantity = "quantity";
const parameters = "parameters";
const list = ()=>{
    return [
        quantity,
        parameters
    ];
};
// title
const title = (field)=>{
    switch(field){
        case quantity:
            return "Number";
        case parameters:
            return "Parameters";
    }
};
const td_css = (field)=>{
    switch(field){
        case quantity:
            return "w-[100px]";
        case parameters:
            return "w-full";
        default:
            return "";
    }
};


/***/ })

};
;