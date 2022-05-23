"use strict";
exports.id = 2738;
exports.ids = [2738];
exports.modules = {

/***/ 9190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qQ": () => (/* reexport */ Chess),
  "y3": () => (/* reexport */ ChessQuantity),
  "Zj": () => (/* reexport */ Species)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Species.ts

const SpeciesSchema = new external_mongoose_.Schema({
    name: String,
    type: String,
    avatarUrl: String,
    parameters: [],
    synergy: [
        String
    ]
}, {
    collection: `${process.env.COLLECTION_PREFIX}_species`,
    versionKey: false
});
const Species = (external_mongoose_default()).models.Species || external_mongoose_default().model("Species", SpeciesSchema);

;// CONCATENATED MODULE: ./models/ChessQuantity.ts

const ChessQuantitySchema = new external_mongoose_.Schema({
    speciesId: external_mongoose_.Schema.Types.ObjectId,
    quantity: Number,
    parameters: external_mongoose_.Schema.Types.Mixed
}, {
    collection: `${process.env.COLLECTION_PREFIX}_chessquantity`,
    versionKey: false
});
const ChessQuantity = (external_mongoose_default()).models.ChessQuantity || external_mongoose_default().model("ChessQuantity", ChessQuantitySchema);

;// CONCATENATED MODULE: ./models/Chess.ts

const ChessSchema = new external_mongoose_.Schema({
    name: String,
    avatarUrl: String,
    raceIds: [
        external_mongoose_.Schema.Types.ObjectId
    ],
    classIds: [
        external_mongoose_.Schema.Types.ObjectId
    ],
    attack: [
        Number
    ],
    attackRate: [
        Number
    ],
    range: Number,
    hpRegen: Number,
    armor: Number,
    magicResistance: Number,
    damageToChessPlayer: Number
}, {
    collection: `${process.env.COLLECTION_PREFIX}_chess`,
    versionKey: false
});
const Chess = (external_mongoose_default()).models.Chess || external_mongoose_default().model("Chess", ChessSchema);

;// CONCATENATED MODULE: ./models/index.ts





/***/ }),

/***/ 4350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// /lib/dbConnect.js

/**
Source: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/ const MONGO_HOST = process.env.MONGO_HOST;
if (!MONGO_HOST) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */ let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false
        };
        //'mongodb://username:password@host:port/database?options...'
        const MONGODB_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`;
        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose1)=>{
            return mongoose1;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ })

};
;