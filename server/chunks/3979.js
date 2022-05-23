"use strict";
exports.id = 3979;
exports.ids = [3979];
exports.modules = {

/***/ 8910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "armor": () => (/* binding */ armor),
/* harmony export */   "attack": () => (/* binding */ attack),
/* harmony export */   "attackRate": () => (/* binding */ attackRate),
/* harmony export */   "avatarUrl": () => (/* binding */ avatarUrl),
/* harmony export */   "classes": () => (/* binding */ classes),
/* harmony export */   "damageToChessPlayer": () => (/* binding */ damageToChessPlayer),
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "hpRegen": () => (/* binding */ hpRegen),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "magicResistance": () => (/* binding */ magicResistance),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "races": () => (/* binding */ races),
/* harmony export */   "range": () => (/* binding */ range),
/* harmony export */   "td_css": () => (/* binding */ td_css),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bimdev_react_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);
/* harmony import */ var _bimdev_react_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bimdev_react_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__.Select;
const name = "name";
const avatarUrl = "avatarUrl";
const races = "races";
const classes = "classes";
const attack = "attack";
const attackRate = "attackRate";
const range = "range";
const hpRegen = "hpRegen";
const armor = "armor";
const magicResistance = "magicResistance";
const damageToChessPlayer = "damageToChessPlayer";
//
const list = ()=>{
    return [
        //
        name,
        avatarUrl,
        races,
        classes,
        attack,
        attackRate,
        range,
        hpRegen,
        armor,
        magicResistance,
        damageToChessPlayer, 
    ];
};
// title
const title = (field)=>{
    switch(field){
        case name:
            return "Name";
        case avatarUrl:
            return "Avatar";
        case races:
            return "Race";
        case classes:
            return "Class";
        case attack:
            return "Attack";
        case attackRate:
            return "Atk Rate";
        case range:
            return "Range";
        case hpRegen:
            return "HP Regen";
        case armor:
            return "Armor";
        case magicResistance:
            return "Magic Resist";
        case damageToChessPlayer:
            return "Dmg to Ch.player";
    }
};
const td_css = (field)=>{
    switch(field){
        case name:
            return "min-w-[150px]";
        case avatarUrl:
            return "min-w-[350px] max-w-[350px]";
        case races:
        case classes:
            return "min-w-[250px]";
        case attackRate:
        case hpRegen:
            return "min-w-[90px]";
        case magicResistance:
            return "min-w-[100px]";
        case damageToChessPlayer:
            return "min-w-[100px]";
        default:
            return "min-w-[80px]";
    }
};
// input
const input = (field)=>{
    switch(field){
        case races:
        case classes:
            const _field = field === races ? "raceIds" : "classIds";
            return (q)=>{
                var ref;
                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                    mode: "multiple",
                    className: "w-full",
                    allowClear: true,
                    placeholder: "Please select",
                    defaultValue: q[_field],
                    onChange: (v)=>q.setPropData([
                            {
                                field: _field,
                                value: v
                            }
                        ], true)
                    ,
                    optionFilterProp: "children",
                    filterOption: (input1, option)=>option.children.toLowerCase().indexOf(input1.toLowerCase()) >= 0
                    ,
                    children: (ref = q.dict.speciesGroup[field].filteredItems) === null || ref === void 0 ? void 0 : ref.map((x)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                            children: x.name
                        }, x._id);
                    })
                });
            };
        default:
            return (q)=>{
                const val = q[field];
                const input2 = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_bimdev_react_component__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    value: val !== undefined ? val : "...",
                    onSetValue: (v)=>q.setPropData([
                            {
                                field,
                                value: v
                            }
                        ], true)
                    ,
                    inputType: field !== avatarUrl ? "text" : "textarea",
                    viewIfClickOutside: true
                });
                return field !== avatarUrl ? input2 : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        input2,
                        val && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-3 text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: val,
                                width: 170,
                                height: 170,
                                alt: q.name
                            })
                        })
                    ]
                });
            };
    }
};
// format
const format = (field)=>{
    switch(field){
        case attackRate:
            return (val)=>`${val}s`
            ;
        case range:
            return (val)=>`${val} grid(s)`
            ;
        case hpRegen:
            return (val)=>`${val}/s`
            ;
        case armor:
            return (val)=>`${val} (physical damage reduction)`
            ;
        case magicResistance:
            return (val)=>`${Math.round(val * 100)}% Magical damage reduction`
            ;
        default:
            return (val)=>`${val}`
            ;
    }
};


/***/ }),

/***/ 3979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qQ": () => (/* reexport */ Chess),
  "O8": () => (/* reexport */ ChessDict),
  "Wr": () => (/* reexport */ field),
  "Ru": () => (/* reexport */ ChessMap)
});

// EXTERNAL MODULE: external "@bimdev/react-component"
var react_component_ = __webpack_require__(159);
// EXTERNAL MODULE: ./components/chess/base/field/index.tsx
var field = __webpack_require__(8910);
// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(6211);
;// CONCATENATED MODULE: ./components/chess/base/base/index.ts



class Chess extends react_component_.Item {
    constructor(dict){
        super();
        this.dict = dict;
        (0,external_mobx_.makeObservable)(this, {
            avatarUrl: external_mobx_.observable
        });
    }
    static url = "/api/chess";
    get url() {
        return Chess.url;
    }
    get createFields() {
        return [
            //
            field.name,
            field.attack,
            field.attackRate,
            field.range,
            field.hpRegen,
            field.armor,
            field.magicResistance,
            field.damageToChessPlayer
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
    name = "chess ..";
    avatarUrl = undefined;
    raceIds = [];
    classIds = [];
    attack = 1;
    attackRate = 1;
    range = 1;
    hpRegen = 1;
    armor = 1;
    magicResistance = 1;
    damageToChessPlayer = 1;
    deleteOnUI = ()=>{
        this.list.splice(this.index, 1);
        this.dict.refresh_filteredItems();
    };
};

// EXTERNAL MODULE: ./components/species/base/dict/index.tsx + 1 modules
var dict = __webpack_require__(8126);
;// CONCATENATED MODULE: ./components/chess/base/dict/indexUtil.tsx



// property
// species
const getSpeciesGroup = (q)=>{
    const races = new dict/* default */.Z();
    races.requestData = {
        filter: {
            type: "RACE"
        },
        projection: {
            name: 1
        }
    };
    const classes = new dict/* default */.Z();
    classes.requestData = {
        filter: {
            type: "CLASS"
        },
        projection: {
            name: 1
        }
    };
    return {
        races,
        classes
    };
};
// item
const handleItems_Main = (q)=>{
    const setObj = (data)=>{
        q.items = data.map((x)=>{
            let item = react_component_.generalUtil.getobject(Chess, x);
            item.dict = q;
            return item;
        });
    };
    const getApi = ()=>{
        Chess.getdata(Chess.url, q.requestData, (data)=>{
            setObj(data);
        });
    };
    getApi();
};

;// CONCATENATED MODULE: ./components/chess/base/dict/index.tsx



class ChessDict extends react_component_.Dict {
    constructor(){
        super();
    }
    viewType = "admin";
    get speciesGroup() {
        var __speciesGroup;
        return (__speciesGroup = this._speciesGroup) !== null && __speciesGroup !== void 0 ? __speciesGroup : this._speciesGroup = getSpeciesGroup(this);
    }
    // item
    handleItems_Main = ()=>handleItems_Main(this)
    ;
    createItem = ()=>{
        let item = new Chess(this);
        item.saveDatabase(()=>{
            this.items.push(item);
            this.refresh_filteredItems();
        });
    };
};

;// CONCATENATED MODULE: ./components/chess/map/indexUtil.ts


// property
// species
const indexUtil_getSpeciesGroup = (q)=>{
    const races = new dict/* default */.Z;
    races.requestData = {
        filter: {
            type: "RACE"
        },
        projection: {
            name: 1,
            avatarUrl: 1
        }
    };
    const classes = new dict/* default */.Z();
    classes.requestData = {
        filter: {
            type: "CLASS"
        },
        projection: {
            name: 1,
            avatarUrl: 1
        }
    };
    return {
        races,
        classes
    };
};
// chess
const indexUtil_handleItems_Main = (q)=>{
    const setObj = (data)=>{
        q.items = data;
    };
    const getApi = ()=>{
        const filter = {};
        if (q.currentRaces.length !== 0) {
            filter.raceIds = {
                "$in": q.currentRaces.map((x)=>x._id
                )
            };
        }
        if (q.currentClasses.length !== 0) {
            filter.classIds = {
                "$in": q.currentClasses.map((x)=>x._id
                )
            };
        }
        const requestData = {
            filter,
            projection: {
                name: 1,
                avatarUrl: 1,
                races: {
                    _id: 1,
                    name: 1,
                    avatarUrl: 1
                },
                classes: {
                    _id: 1,
                    name: 1,
                    avatarUrl: 1
                }
            },
            lookups: [
                {
                    from: "autochess_species",
                    localField: "raceIds",
                    foreignField: "_id",
                    as: "races"
                },
                {
                    from: "autochess_species",
                    localField: "classIds",
                    foreignField: "_id",
                    as: "classes"
                }
            ]
        };
        Chess.getdata(Chess.url, requestData, (data)=>{
            setObj(data);
        });
    };
    getApi();
};

;// CONCATENATED MODULE: ./components/chess/map/index.ts



class ChessMap extends react_component_.Dict {
    constructor(){
        super();
        this.items = [];
        (0,external_mobx_.makeObservable)(this, {
            currentRaces: external_mobx_.observable,
            currentClasses: external_mobx_.observable
        });
    }
    get speciesGroup() {
        var __speciesGroup;
        return (__speciesGroup = this._speciesGroup) !== null && __speciesGroup !== void 0 ? __speciesGroup : this._speciesGroup = indexUtil_getSpeciesGroup(this);
    }
    currentRaces = [];
    setCurrentRace = (item)=>{
        const list = [
            ...this.currentRaces
        ];
        const index = list.indexOf(item);
        if (index === -1) {
            list.push(item);
        } else {
            list.splice(index, 1);
        }
        this.currentRaces = list;
    };
    currentClasses = [];
    setCurrentClass = (item)=>{
        const list = [
            ...this.currentClasses
        ];
        const index = list.indexOf(item);
        if (index === -1) {
            list.push(item);
        } else {
            list.splice(index, 1);
        }
        this.currentClasses = list;
    };
    handleItems_Main = ()=>indexUtil_handleItems_Main(this)
    ;
};

;// CONCATENATED MODULE: ./components/chess/index.ts







/***/ })

};
;