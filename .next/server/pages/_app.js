"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2529:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DropdownMenu = (props)=>{
    var ref4, ref1, ref2, ref3;
    const defaultImage = 'https://derrint.sirv.com/Images/simple-duck-studios/icon-outline.svg';
    const [previewImage, setPreviewImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(defaultImage);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        as: "div",
        className: `inline-block text-left ${(ref4 = props.classNames) === null || ref4 === void 0 ? void 0 : ref4.wrapper}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                className: `inline-flex gap-2 lg:gap-3 justify-between w-full text-base lg:text-lg focus:outline-none whitespace-nowrap hover:text-secondary group items-center ${(ref1 = props.classNames) === null || ref1 === void 0 ? void 0 : ref1.button}`,
                children: [
                    props.title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-black group-hover:text-secondary ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronDown, {
                            className: "w-2 lg:w-3"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                    className: `absolute z-10 right-0 mx-4 sm:mx-8 mt-2 py-2 origin-top bg-white divide-y divide-gray-100 rounded-xl shadow-lg  focus:outline-none flex min-w-max ${(ref2 = props.classNames) === null || ref2 === void 0 ? void 0 : ref2.itemsWrapper}`,
                    children: [
                        props.showPreview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center items-center px-12 lg:px-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: previewImage,
                                alt: "",
                                className: `w-24 lg:w-32 aspect-square ${previewImage === defaultImage ? 'opacity-25' : ''}`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${props.showPreview ? 'grid grid-cols-3 lg:gap-x-6 py-6 pl-0 pr-8 lg:pr-16' : ''} ${(ref3 = props.classNames) === null || ref3 === void 0 ? void 0 : ref3.items}`,
                            children: props.items.map((item)=>{
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>{
                                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `${active ? 'text-secondary' : 'text-black'} group flex rounded-md items-center w-full px-4 py-2 lg:py-3 text-base lg:text-lg whitespace-nowrap `,
                                            onClick: ()=>props.onChange(item.id)
                                            ,
                                            onMouseEnter: ()=>{
                                                var ref;
                                                setPreviewImage(item === null || item === void 0 ? void 0 : (ref = item.asset) === null || ref === void 0 ? void 0 : ref.illustration);
                                            },
                                            onMouseOut: ()=>{
                                                setPreviewImage(defaultImage);
                                            },
                                            children: item.label
                                        });
                                    }
                                }, item.id));
                            })
                        })
                    ]
                })
            })
        ]
    }));
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _DropdownMenu__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DropdownMenu__WEBPACK_IMPORTED_MODULE_0__]);
_DropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ NavbarTwoColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7499);
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_dropdown__WEBPACK_IMPORTED_MODULE_3__]);
_components_dropdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NavbarTwoColumns = (props)=>{
    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap justify-between items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: props.logo
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "navbar hidden md:flex items-center text-xl gap-4 lg:gap-8",
                        children: props.children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dropdown__WEBPACK_IMPORTED_MODULE_3__/* .DropdownMenu */ .h, {
                        title: 'Menu',
                        items: _data_index__WEBPACK_IMPORTED_MODULE_4__/* .menus.filter */ .I.filter((x)=>x.isMobile
                        ),
                        onChange: (v)=>{
                            var ref;
                            next_router__WEBPACK_IMPORTED_MODULE_2___default().push((ref = _data_index__WEBPACK_IMPORTED_MODULE_4__/* .menus.find */ .I.find((x)=>x.id === v
                            )) === null || ref === void 0 ? void 0 : ref.href);
                        },
                        classNames: {
                            wrapper: 'md:hidden'
                        }
                    })
                ]
            })
        ]
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var overmind_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6452);
/* harmony import */ var overmind_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(overmind_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5545);
/* harmony import */ var _overmind_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9897);
/* harmony import */ var _templates_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2868);
/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4243);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_templates_Header__WEBPACK_IMPORTED_MODULE_5__]);
_templates_Header__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overmind_react__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        value: _overmind_index__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "antialiased text-black bg-white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Meta__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h, {
                    title: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_6__/* .AppConfig.title */ .X.title,
                    description: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_6__/* .AppConfig.description */ .X.description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_templates_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_background_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6247);
/* harmony import */ var _components_layout_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);





const Footer = ()=>{
    const menus = [
        {
            id: 1,
            label: 'Term of Service',
            href: '/'
        },
        {
            id: 2,
            label: 'Contact us',
            href: '/'
        },
        {
            id: 3,
            label: 'Feedback',
            href: '/'
        },
        {
            id: 4,
            label: 'Join us',
            href: '/'
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_background_Background__WEBPACK_IMPORTED_MODULE_3__/* .Background */ .A, {
        color: "bg-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Section__WEBPACK_IMPORTED_MODULE_4__/* .Section */ .$, {
            yPadding: "py-8",
            isFooter: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full lg:w-6/12 flex justify-between lg:justify-start items-center gap-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/logos/logo-sds-bw.svg",
                                alt: "",
                                className: "h-[48px] aspect-auto"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm uppercase text-right",
                                children: "Copyright \xa9 2022 Simpleduckstudios"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "w-full sm:w-6/12 mt-6 lg:mt-0 hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "navbar flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 justify-start lg:justify-end items-start sm:items-center font-medium text-xl text-gray-800",
                            children: menus.map((item)=>{
                                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "flex justify-center items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "uppercase text-sm",
                                                children: item.label
                                            })
                                        }),
                                        item.id === 4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rounded-full p-1 bg-primary text-white",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaDiscord, {
                                                        size: 16
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "rounded-full p-1 bg-primary text-white",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTwitter, {
                                                        size: 16
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, item.id));
                            })
                        })
                    })
                ]
            })
        })
    }));
};



/***/ }),

/***/ 4243:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4931);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5806);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7499);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1252);
/* harmony import */ var _components_navigation_NavbarTwoColumns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8285);
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_dropdown__WEBPACK_IMPORTED_MODULE_5__, _components_navigation_NavbarTwoColumns__WEBPACK_IMPORTED_MODULE_7__]);
([_components_dropdown__WEBPACK_IMPORTED_MODULE_5__, _components_navigation_NavbarTwoColumns__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Header = ()=>{
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        isReady: false,
        isAnimationDone: false
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setState({
                ...state,
                isReady: true
            });
        }, 250);
        return ()=>{};
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (state.isReady) {
            setTimeout(()=>{
                setState({
                    ...state,
                    isAnimationDone: true
                });
            }, 750);
        }
        return ()=>{};
    }, [
        state.isReady
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_background__WEBPACK_IMPORTED_MODULE_4__/* .Background */ .A, {
        color: "bg-white",
        className: `fixed top-0 w-full z-10 transition-all duration-300 ${state.isAnimationDone ? 'shadow-lg' : ''}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Fade, {
            top: true,
            duration: 750,
            delay: 0,
            when: state.isReady,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__/* .Section */ .$, {
                yPadding: "py-6",
                className: "relative",
                isHeader: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation_NavbarTwoColumns__WEBPACK_IMPORTED_MODULE_7__/* .NavbarTwoColumns */ .g, {
                    logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/images/logos/logo-sds.svg",
                        alt: "",
                        className: "h-10 md:h-12 lg:h-16 aspect-auto"
                    }),
                    children: _data_index__WEBPACK_IMPORTED_MODULE_8__/* .menus.map */ .I.map(({ id , label , href , submenus , isButton , isDesktop , isMobile  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `${isDesktop && !isMobile ? 'hidden md:block' : ''} ${!isDesktop && isMobile ? 'md:hidden' : ''}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-right",
                                children: submenus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__/* .DropdownMenu */ .h, {
                                    title: label,
                                    items: submenus,
                                    onChange: (v)=>console.log(v)
                                    ,
                                    showPreview: true,
                                    classNames: {
                                        itemsWrapper: '!mt-4 !rounded-xl'
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: href,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: `text-base lg:text-lg hover:text-secondary ${isButton ? 'bg-primary px-4 lg:px-6 py-2 lg:py-4 rounded-full' : ''}`,
                                        children: label
                                    })
                                })
                            })
                        }, id)
                    )
                })
            })
        })
    }));
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 704:
/***/ ((module) => {

module.exports = require("overmind");

/***/ }),

/***/ 6452:
/***/ ((module) => {

module.exports = require("overmind-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 4931:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,117], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();