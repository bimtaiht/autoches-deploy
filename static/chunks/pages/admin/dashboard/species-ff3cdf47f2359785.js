(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{7725:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard/species",function(){return r(9415)}])},2867:function(e,t,r){"use strict";r.d(t,{Zj:function(){return a.Z},BC:function(){return s},Do:function(){return n}});var n={};r.r(n),r.d(n,{CLASS:function(){return c},RACE:function(){return l},list:function(){return i},title:function(){return o}});var a=r(8567),s=r(2101),l="RACE",c="CLASS",i=function(){return[l,c]},o=function(e){switch(e){case l:return"RACE";case c:return"CLASS"}}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l=(s=r(7294))&&s.__esModule?s:{default:s},c=r(1003),i=r(880),o=r(9246);var u={};function d(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),s=l.default.useMemo((function(){var t=a(c.resolveHref(n,e.href,!0),2),r=t[0],s=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):s||r}}),[n,e.href,e.as]),f=s.href,p=s.as,x=l.default.useRef(f),h=l.default.useRef(p),m=e.children,y=e.replace,v=e.shallow,b=e.scroll,j=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var g=(t=l.default.Children.only(m))&&"object"===typeof t&&t.ref,C=a(o.useIntersection({rootMargin:"200px"}),3),w=C[0],N=C[1],_=C[2],I=l.default.useCallback((function(e){h.current===p&&x.current===f||(_(),h.current=p,x.current=f),w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[p,g,f,_,w]);l.default.useEffect((function(){var e=N&&r&&c.isLocalURL(f),t="undefined"!==typeof j?j:n&&n.locale,a=u[f+"%"+p+(t?"%"+t:"")];e&&!a&&d(n,f,p,{locale:t})}),[p,f,N,j,r,n]);var E={ref:I,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,s,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:s,locale:i,scroll:l}))}(e,n,f,p,y,v,b,j)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(f)&&d(n,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof j?j:n&&n.locale,L=n&&n.isLocaleDomain&&c.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);E.href=L||c.addBasePath(c.addLocale(p,k,n&&n.defaultLocale))}return l.default.cloneElement(t,E)};t.default=f,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9463:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),a=r(1163),s=r(7294),l=r(1852),c="species",i="chess",o=function(e){switch(e){case c:return"Species";case i:return"Chess"}},u=function(e){switch(e){case c:return"/admin/dashboard/species";case i:return"/admin/dashboard/chess"}},d=r(1664),f=r.n(d),p=function(e){var t=e.children,r=e.currentField,d=(0,a.useRouter)();return(0,s.useEffect)((function(){r||d.push("/admin/dashboard/species?type=RACE")}),[r]),(0,n.jsx)(l.default,{children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex items-start mt-2 ",children:(0,n.jsx)("div",{className:"sticky top-3 mr-4",children:(0,n.jsx)("div",{className:"flex flex-col mt-2",children:[c,i].map((function(e){return(0,n.jsx)(f(),{href:u(e),children:(0,n.jsx)("a",{className:"w-full my-1 py-1 px-5 bg-gray-300 text-white text-center select-none cursor-pointer uppercase\n                    ".concat(e===r?"bg-blue-300":"hover:bg-blue-300"),children:o(e)})},e)}))})})}),(0,n.jsx)("div",{children:t})]})})}},9415:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(1217),s=r(7294),l=r(2867),c=r(8126),i=r(3347),o=r(8696),u=r(1664),d=r.n(u),f=r(1163),p=r(9463),x=r(5675),h=r.n(x);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=(0,a.Pi)((function(){var e,t=(0,f.useRouter)(),r=t.query;(0,s.useEffect)((function(){r.type||t.push("/admin/dashboard/species?type=RACE")}),[r]);var a=(0,s.useState)(),u=a[0],x=a[1],y=(0,s.useState)(),v=y[0],b=y[1],j=(0,s.useRef)(!1);return(0,s.useEffect)((function(){j.current&&(t.query.type=v,t.push(t))}),[v]),(0,s.useEffect)((function(){if(r.type){var e=new c.Z,t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({},r,{type:r.type.toUpperCase()});e.requestData={filter:t},x(e),b(t.type),j.current=!0}}),[r]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.default,{currentField:"species",children:(0,n.jsxs)("div",{className:"flex items-start mt-2 ",children:[(0,n.jsxs)("div",{className:"sticky top-3 mr-4",children:[(0,n.jsx)("button",{className:"mr-2 bg-green-400 hover:bg-green-200 px-2 _py-0 text-white rounded-sm",onClick:null===u||void 0===u?void 0:u.createItem,children:"+"}),(0,n.jsx)("div",{className:"flex flex-col mt-2",children:l.Do.list().map((function(e){return(0,n.jsx)("span",{className:"my-1 py-1 px-5 bg-gray-300 text-white text-center select-none cursor-pointer\n                    ".concat(e===v?"bg-blue-300":"hover:bg-blue-300"),onClick:function(){return b(e)},children:l.Do.title(e)},e)}))})]}),(0,n.jsxs)("table",{className:"table-fixed flex-1",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"border-b border-gray-600 bg-gray-100 text-left text-xs font-medium tracking-wide text-gray-900",children:[[l.BC.name,l.BC.type,l.BC.avatarUrl,l.BC.parameters,l.BC.synergy].map((function(e){return(0,n.jsx)("th",{className:"px-4 py-3 select-none ".concat(l.BC.td_css(e)),children:l.BC.title(e)},e)})),(0,n.jsx)("td",{className:"px-4 py-3"})]})}),(0,n.jsx)("tbody",{children:null===u||void 0===u||null===(e=u.filteredItems)||void 0===e?void 0:e.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"border px-4 py-3 align-top",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(d(),{href:"/admin/dashboard/species/".concat(e._id,"/chess-quantity"),children:(0,n.jsx)("a",{className:"mr-1 text-blue-500",children:(0,n.jsxs)("svg",{className:"h-5 w-5 flex-shrink-0 transition duration-75 group-hover:text-gray-900",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),(0,n.jsx)("path",{fillRule:"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"})]})})}),(0,n.jsx)(i.xv,{className:"flex-grow",value:e.name,onSetValue:function(t){return e.setPropData([{field:l.BC.name,value:t}],!0)},viewIfClickOutside:!0})]})}),(0,n.jsx)("td",{className:"border px-4 py-3 align-top",children:(0,n.jsx)("span",{className:"cursor-pointer text-xs lowercase pb-0.5 mt-1 text-white text-center font-medium block w-[52px] rounded-md ".concat("RACE"===e.type?"bg-red-300":"bg-blue-300"),onClick:function(){e.setPropData([{field:l.BC.type,value:"RACE"===e.type?"CLASS":"RACE"}],!0),e.deleteOnUI()},children:e.type})}),(0,n.jsx)("td",{className:"border px-4 py-3 align-top break-words ".concat(l.BC.td_css(l.BC.avatarUrl)),children:(0,n.jsxs)("div",{children:[(0,n.jsx)(i.xv,{value:e.avatarUrl?e.avatarUrl:"...",onSetValue:function(t){return e.setPropData([{field:l.BC.avatarUrl,value:t}],!0)},inputType:"textarea",viewIfClickOutside:!0}),e.avatarUrl&&(0,n.jsx)("div",{className:"mt-3 text-center",children:(0,n.jsx)(h(),{src:e.avatarUrl,width:31,height:31,alt:e.name})})]})}),(0,n.jsx)("td",{className:"border px-4 py-3 align-top",children:(0,n.jsxs)("div",{className:"flex flex-row items-start",children:[(0,n.jsx)("button",{className:"mr-2 bg-green-400 hover:bg-green-200 px-2 _py-0 text-white rounded-sm",onClick:function(){e.parameters.push(new o.Z),e.update(l.BC.parameters)},children:"+"}),(0,n.jsx)("div",{className:"flex flex-col flex-grow -mt-1",children:(0,n.jsx)("table",{children:(0,n.jsx)("tbody",{children:e.parameters.map((function(t,r){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"p-1 w-full",children:(0,n.jsx)(i.xv,{value:t.key,onSetValue:function(r){t.key=r,e.update(l.BC.parameters)},viewIfClickOutside:!0})}),(0,n.jsx)("td",{children:(0,n.jsx)("span",{className:"cursor-pointer text-xs lowercase pb-0.5 mt-1 text-white text-center font-medium block w-[52px] rounded-md ".concat("VALUE"===t.type?"bg-red-300":"bg-blue-300"),onClick:function(){t.type="VALUE"===t.type?"PERCENT":"VALUE",e.update(l.BC.parameters)},children:t.type})}),(0,n.jsx)("td",{className:"pl-2",children:(0,n.jsx)("button",{className:"mr-2 bg-red-400 hover:bg-red-200 px-2 _py-0 text-white rounded-full",onClick:function(){e.parameters.splice(r,1),e.update(l.BC.parameters)},children:"x"})})]},i.fg.randomInt())}))})})})]})}),(0,n.jsx)("td",{className:"border px-4 py-3 align-top",children:(0,n.jsxs)("div",{className:"flex flex-row items-start",children:[(0,n.jsx)("button",{className:"mr-2 bg-green-400 hover:bg-green-200 px-2 _py-0 text-white rounded-sm",onClick:function(){return e.synergy.push("synery ...")},children:"+"}),(0,n.jsx)("div",{className:"flex flex-col flex-grow -mt-1",children:(0,n.jsx)("table",{children:(0,n.jsx)("tbody",{children:e.synergy.map((function(t,r){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"p-1 w-full",children:(0,n.jsx)(i.xv,{inputType:"textarea",value:e.synergy[r],onSetValue:function(t){e.synergy[r]=t,e.update(l.BC.synergy)},viewIfClickOutside:!0})}),(0,n.jsx)("td",{className:"pl-2",children:(0,n.jsx)("button",{className:"mr-2 bg-red-400 hover:bg-red-200 px-2 _py-0 text-white rounded-full",onClick:function(){e.synergy.splice(r,1),e.update(l.BC.synergy)},children:"x"})})]},i.fg.randomInt())}))})})})]})}),(0,n.jsx)("td",{className:"border px-4 py-3 align-top",children:(0,n.jsx)("button",{className:"bg-red-400 hover:bg-red-200 px-3 py-1 text-white rounded-full",onClick:function(){return e.delete()},children:"X"})})]},e.id)}))})]})]})})})}))},1852:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(9008),s=r(7294),l=r(2918),c=r(7160),i=r.n(c);r(7206);t.default=function(e){var t=e.children,r=localStorage.getItem("ADMIN_TOKEN"),c=(0,s.useState)(!1),o=c[0],u=c[1];return(0,s.useEffect)((function(){"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDUtMDRUMTU6MjM6NDEuMTk5WiIsImlhdCI6MTY1MTY3NzgyMSwiZXhwIjoxNjUyMjgyNjIxfQ.MBiV1MbAvWRRWI84xEcLTvhdybGrOsIC_CYWCMpyuNo"===r&&u(!0)}),[r]),(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Autochess"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),o?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("main",{className:"p-4",children:t}),":",(0,n.jsx)("footer",{className:"h-[300px]"})]}):(0,n.jsx)(l.default,{statusCode:404})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},2918:function(e,t,r){e.exports=r(67)},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[675,126,774,888,179],(function(){return t=7725,e(e.s=t);var t}));var t=e.O();_N_E=t}]);