(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{3146:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return r(9463)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),c=r(880),l=r(9246);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=i.default.useRef(d),m=i.default.useRef(p),y=e.children,v=e.replace,b=e.shallow,_=e.scroll,g=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var x=(t=i.default.Children.only(y))&&"object"===typeof t&&t.ref,j=o(l.useIntersection({rootMargin:"200px"}),3),I=j[0],M=j[1],C=j[2],w=i.default.useCallback((function(e){m.current===p&&h.current===d||(C(),m.current=p,h.current=d),I(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[p,x,d,C,I]);i.default.useEffect((function(){var e=M&&r&&u.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,M,g,r,n]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,p,v,b,_,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof g?g:n&&n.locale,L=n&&n.isLocaleDomain&&u.getDomainLocale(p,N,n&&n.locales,n&&n.domainLocales);E.href=L||u.addBasePath(u.addLocale(p,N,n&&n.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(t?t.current:null),2),m=h[0],y=h[1],v=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[v,d,b]};var a=r(7294),i=r(4686),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9463:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),o=r(1163),a=r(7294),i=r(1852),u="species",c="chess",l=function(e){switch(e){case u:return"Species";case c:return"Chess"}},s=function(e){switch(e){case u:return"/admin/dashboard/species";case c:return"/admin/dashboard/chess"}},f=r(1664),d=r.n(f),p=function(e){var t=e.children,r=e.currentField,f=(0,o.useRouter)();return(0,a.useEffect)((function(){r||f.push("/admin/dashboard/species?type=RACE")}),[r]),(0,n.jsx)(i.default,{children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex items-start mt-2 ",children:(0,n.jsx)("div",{className:"sticky top-3 mr-4",children:(0,n.jsx)("div",{className:"flex flex-col mt-2",children:[u,c].map((function(e){return(0,n.jsx)(d(),{href:s(e),children:(0,n.jsx)("a",{className:"w-full my-1 py-1 px-5 bg-gray-300 text-white text-center select-none cursor-pointer uppercase\n                    ".concat(e===r?"bg-blue-300":"hover:bg-blue-300"),children:l(e)})},e)}))})})}),(0,n.jsx)("div",{children:t})]})})}},1852:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(9008),a=r(7294),i=r(2918),u=r(7160),c=r.n(u);r(7206);t.default=function(e){var t=e.children,r=localStorage.getItem("ADMIN_TOKEN"),u=(0,a.useState)(!1),l=u[0],s=u[1];return(0,a.useEffect)((function(){"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDUtMDRUMTU6MjM6NDEuMTk5WiIsImlhdCI6MTY1MTY3NzgyMSwiZXhwIjoxNjUyMjgyNjIxfQ.MBiV1MbAvWRRWI84xEcLTvhdybGrOsIC_CYWCMpyuNo"===r&&s(!0)}),[r]),(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Autochess"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("main",{className:"p-4",children:t}),":",(0,n.jsx)("footer",{className:"h-[300px]"})]}):(0,n.jsx)(i.default,{statusCode:404})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},2918:function(e,t,r){e.exports=r(67)},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],(function(){return t=3146,e(e.s=t);var t}));var t=e.O();_N_E=t}]);