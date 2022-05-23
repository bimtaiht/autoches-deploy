"use strict";
(() => {
var exports = {};
exports.id = 7572;
exports.ids = [7572];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4350);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9190);


const handler = async (req, res)=>{
    const { method  } = req;
    await (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case "GET":
            try {
                const users = await _models__WEBPACK_IMPORTED_MODULE_1__/* .Species.find */ .Zj.find({});
                res.status(200).json({
                    success: true,
                    data: users
                });
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case "POST":
            try {
                const user = await _models__WEBPACK_IMPORTED_MODULE_1__/* .Species.create */ .Zj.create(req.body);
                res.status(201).json({
                    success: true,
                    data: user
                });
            } catch (error1) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        default:
            res.status(400).json({
                success: false
            });
            break;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2738], () => (__webpack_exec__(4134)));
module.exports = __webpack_exports__;

})();