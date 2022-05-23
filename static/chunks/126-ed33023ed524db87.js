"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{8567:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(3347),o=n(2101),u=n(7877),c=function(t){var e=new r.M9;return e.species=t,e.handleItems_Main=function(){!function(){var n={filter:{speciesId:t._id}};u.Z.getdata(u.Z.url,n,(function(t){!function(t){e.items=t.map((function(t){var n=r.fg.getobject(u.Z,t);return n.dict=e,n}))}(t)}))}()},e},i=n(8949);function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function l(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?a(t):e}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}var y=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(l,t);var e,n,u,s=h(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=s.call(this)).update=function(t){e.setPropData([{field:t,value:e[t]}],!0)},e.name="New species",e.type="RACE",e.avatarUrl=void 0,e.parameters=[],e.synergy=["synery ..."],e.deleteOnUI=function(){e.list.splice(e.index,1),e.dict.refresh_filteredItems()},e.dict=t,(0,i.makeObservable)(a(e),{type:i.observable,avatarUrl:i.observable,parameters:i.observable,synergy:i.observable}),e}return e=l,u=[{key:"testdata",get:function(){return[{name:"Goblin",parameters:["MAX_HP_PERCENT","ATTACK_PERCENT","STACK"],synergy:"If any melle ally dies, increases max HP by %MAX_HP_PERCENT%, ATK by %ATTACK_PERCENT% for all alied Kiras, can be stacked %STACK% times."},{name:"Elf"}].map((function(t){return r.fg.getobject(l,t)}))}}],(n=[{key:"url",get:function(){return l.url}},{key:"createFields",get:function(){return[o.name,o.type,o.parameters,o.synergy]}},{key:"chessQuantityDict",get:function(){var t;return null!==(t=this._chessQuantityDict)&&void 0!==t?t:this._chessQuantityDict=c(this)}}])&&f(e.prototype,n),u&&f(e,u),l}(r.ck);b.url="/api/species"},8126:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(8567),o=n(3347),u=n(2101),c=n(8696),i=function(t){r.Z.getdata(r.Z.url,t.requestData,(function(e){!function(e){var n=[{key:u.parameters,convert:function(t){return t.map((function(t){return o.fg.getobject(c.Z,t)}))}}];t.items=e.map((function(e){var u=o.fg.getobject(r.Z,e,n);return u.dict=t,u}))}(e)}))};function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function s(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?a(t):e}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}var p=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var h=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(n,t);var e=y(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=e.call(this)).handleItems_Main=function(){return i(a(t))},t.createItem=function(){var e=new r.Z(a(t));e.saveDatabase((function(){t.items.push(e),t.refresh_filteredItems()}))},o.fg.add(t.onSet_RequestData_Func,t.refresh_items,!1),t}return n}(o.M9)},2101:function(t,e,n){n.r(e),n.d(e,{avatarUrl:function(){return c},list:function(){return f},lore:function(){return o},name:function(){return r},parameters:function(){return i},synergy:function(){return a},td_css:function(){return l},title:function(){return s},type:function(){return u}});var r="name",o="lore",u="type",c="avatarUrl",i="parameters",a="synergy",f=function(){return[o,a]},s=function(t){switch(t){case r:return"Name";case u:return"Type";case c:return"Avatar";case o:return"Lore";case i:return"Parameters";case a:return"Synergy"}},l=function(t){switch(t){case r:return"min-w-[150px]";case c:return"min-w-[150px] max-w-[150px]";case i:return"min-w-[270px]";case a:return"w-full";default:return""}}},7877:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(3347),o=n(4808);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function i(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}var f=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,n,c,i=s(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=i.call(this)).quantity=1,e.parameters={},e.updateParameters=function(){e.setPropData([{field:o.parameters,value:e.parameters}],!0)},e.dict=t,e}return e=f,c=[{key:"testdata",get:function(){return[{quantity:2,MAX_HP:.15,ATTACK:.2,STACK:6}].map((function(t){return r.fg.getobject(f,t)}))}}],(n=[{key:"url",get:function(){return f.url}},{key:"createFields",get:function(){return[o.speciesId,o.quantity,o.parameters]}},{key:"speciesId",get:function(){var t;return null!==(t=this._speciesId)&&void 0!==t?t:this._speciesId=this.species._id},set:function(t){this._speciesId=t}},{key:"species",get:function(){var t;return null!==(t=this._species)&&void 0!==t?t:this._species=this.dict.species}},{key:"synergy",get:function(){var t=this,e=this.species.synergy,n=this.species.parameters;return e=e.map((function(e){var r=t;return n.forEach((function(t){e=e.replaceAll(t.fullkey,function(t,e,n){var r,o=!1;return t.species.parameters.map((function(t){return t.key})).forEach((function(n){o||e.includes(n)&&(r=t.parameters[n],o=!0)})),r="VALUE"===n?r:Math.round(100*r),"VALUE"===n?r.toString():"".concat(r,"%")}(r,t.key,t.type))})),e}))}}])&&u(e.prototype,n),c&&u(e,c),f}(r.ck);l.url="/api/chess-quantity"},4808:function(t,e,n){n.r(e),n.d(e,{list:function(){return c},parameters:function(){return u},quantity:function(){return o},speciesId:function(){return r},td_css:function(){return a},title:function(){return i}});var r="speciesId",o="quantity",u="parameters",c=function(){return[o,u]},i=function(t){switch(t){case o:return"Number";case u:return"Parameters"}},a=function(t){switch(t){case o:return"w-[100px]";case u:return"w-full";default:return""}}},8696:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(8949);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.key="NEW_PARAM",this.type="VALUE",(0,r.makeObservable)(this,{type:r.observable})}var e,n,u;return e=t,(n=[{key:"fullkey",get:function(){return"%".concat(this.key).concat("VALUE"===this.type?"":"_PERCENT","%")}}])&&o(e.prototype,n),u&&o(e,u),t}()}}]);