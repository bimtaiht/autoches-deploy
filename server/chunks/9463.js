"use strict";
exports.id = 9463;
exports.ids = [9463];
exports.modules = {

/***/ 9463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/layout/admin/index.tsx
var admin = __webpack_require__(1852);
;// CONCATENATED MODULE: ./components/menu/admin/index.ts
const species = "species";
const chess = "chess";
const list = ()=>{
    return [
        species,
        chess
    ];
};
// title
const title = (field)=>{
    switch(field){
        case species:
            return "Species";
        case chess:
            return "Chess";
    }
};
const admin_link = (field)=>{
    switch(field){
        case species:
            return "/admin/dashboard/species";
        case chess:
            return "/admin/dashboard/chess";
    }
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/admin/dashboard/index.tsx






const AdminDashboard = ({ children , currentField  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (!currentField) {
            router.push("/admin/dashboard/species?type=RACE");
        }
    }, [
        currentField
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(admin["default"], {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-start mt-2 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sticky top-3 mr-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col mt-2",
                            children: list().map((field)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: admin_link(field),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: `w-full my-1 py-1 px-5 bg-gray-300 text-white text-center select-none cursor-pointer uppercase
                    ${field === currentField ? "bg-blue-300" : "hover:bg-blue-300"}`,
                                        children: title(field)
                                    })
                                }, field);
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const dashboard = (AdminDashboard);


/***/ })

};
;