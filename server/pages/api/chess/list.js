"use strict";
(() => {
var exports = {};
exports.id = 8272;
exports.ids = [8272];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ list)
});

// EXTERNAL MODULE: ./utils/dbConnect.ts
var dbConnect = __webpack_require__(4350);
// EXTERNAL MODULE: ./models/index.ts + 3 modules
var models = __webpack_require__(9190);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./utils/mongoUtil.ts

const format = (data)=>{
    const { filter  } = data;
    for(var key in filter){
        if (key.toLowerCase().includes("id")) {
            const value = filter[key];
            if (typeof value === "string") {
                filter[key] = new (external_mongoose_default()).mongo.ObjectId(value);
            } else {
                for(var key2 in value){
                    const value2 = value[key2];
                    if (typeof value2 === "string") {
                        value[key2] = new (external_mongoose_default()).mongo.ObjectId(value2);
                    } else {
                        value[key2] = value2.map((v)=>new (external_mongoose_default()).mongo.ObjectId(v)
                        );
                    }
                }
            }
        }
    }
    return data;
};

;// CONCATENATED MODULE: ./pages/api/chess/list/index.ts



const handler = async (req, res)=>{
    const { method , body  } = req;
    await (0,dbConnect/* default */.Z)();
    switch(method){
        case "GET":
        case "POST":
            try {
                const reqData = format(body);
                const { filter , projection , lookups  } = reqData;
                let data = undefined;
                if (!lookups) {
                    data = await models/* Chess.find */.qQ.find(filter, projection);
                } else {
                    const aggregate = [];
                    if (filter) aggregate.push({
                        "$match": filter
                    });
                    aggregate.push.apply(aggregate, lookups.map((lk)=>{
                        return {
                            "$lookup": lk
                        };
                    }));
                    if (projection) aggregate.push({
                        "$project": projection
                    });
                    // data = aggregate
                    data = await models/* Chess.aggregate */.qQ.aggregate(aggregate);
                }
                res.status(200).json({
                    success: true,
                    data: data
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
    }
};
/* harmony default export */ const list = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2738], () => (__webpack_exec__(7282)));
module.exports = __webpack_exports__;

})();