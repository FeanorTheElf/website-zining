(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{8603:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/text",function(){return n(3742)}])},6467:function(t,e,n){"use strict";n.d(e,{U:function(){return y},W:function(){return d}});var r=n(5893),o=n(7294);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function a(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var d=function(t){f(n,t);var e=h(n);function n(){return i(this,n),e.apply(this,arguments)}return n.prototype.render=function(){var t=this;return(0,r.jsx)("ul",{className:"nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center",id:"menu",children:this.props.targets.map((function(e){return(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:t.navItemClassName,href:e.target,children:e.text})},e.target)}))})},u(n,[{key:"navItemClassName",get:function(){return this.props.dark?"nav-link link-light menu-font":"nav-link link-dark menu-font"}}]),n}(o.PureComponent),y=function(t){f(n,t);var e=h(n);function n(){return i(this,n),e.apply(this,arguments)}return n.prototype.render=function(){return(0,r.jsx)("h2",{className:this.titleTextClassName,children:"Zining Ren"})},u(n,[{key:"titleTextClassName",get:function(){return this.props.dark?"pb-sm-3 pb-2 pr-3 text-decoration-none text-light zining-font":"pb-sm-3 pb-2 pr-3 text-decoration-none text-dark zining-font"}}]),n}(o.PureComponent)},4519:function(t,e,n){"use strict";n.d(e,{h:function(){return y}});var r=n(5893),o=n(7294),i=n(9008),c=n.n(i),u=n(6467);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var y=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(a,t);var e,n,o,i=d(a);function a(){return s(this,a),i.apply(this,arguments)}return a.prototype.render=function(){return(0,r.jsxs)("div",{className:this.containerClassName,children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:this.props.title})}),(0,r.jsxs)("div",{className:"row vh-sm-100 overflow-auto",children:[(0,r.jsx)("div",{className:"col-12 col-sm-3 col-xl-2 d-flex position-fixed vh-sm-100 foreground",children:(0,r.jsxs)("div",{className:"d-flex flex-sm-column flex-row flex-grow-1 px-3 pt-3",children:[(0,r.jsx)(u.U,{dark:this.props.dark}),(0,r.jsx)(u.W,{dark:this.props.dark,targets:this.props.links})]})}),this.props.children]})]})},e=a,(n=[{key:"containerClassName",get:function(){return this.props.dark?"container-fluid overflow-hidden bg-dark text-light text-font":"container-fluid overflow-hidden bg-light test-dark text-font"}}])&&f(e.prototype,n),o&&f(e,o),a}(o.PureComponent)},54:function(t,e,n){"use strict";n.d(e,{B:function(){return p},L:function(){return h}});var r=n(5893),o=n(7294);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function s(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var p=function(t){u(n,t);var e=l(n);function n(){return i(this,n),e.apply(this,arguments)}return n.prototype.render=function(){return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12 col-sm-3 col-xl-2"}),(0,r.jsx)("div",{className:"col",children:this.props.children}),(0,r.jsx)("div",{className:"col-12 col-sm-3 col-xl-2"})]})},n}(o.PureComponent),h=function(t){u(n,t);var e=l(n);function n(){return i(this,n),e.apply(this,arguments)}return n.prototype.render=function(){return(0,r.jsx)("div",{className:"spacer-div"})},n}(o.PureComponent)},6235:function(t,e){"use strict";e.Z=[{target:"./index.html",text:"Home"},{target:"./concert.html",text:"Concert: Body Landscape"},{target:"./text.html",text:"Extended Text"},{target:"./circles.html",text:"Hole Performance"},{target:"./flesh_petals.html",text:"Flesh Petals and Her Garden"},{target:"./her_garden.html",text:"Performance: Her Garden"},{target:"./lan.html",text:"LAN"}]},3742:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(4519),i=n(54),c=n(6235);e.default=function(){return(0,r.jsx)(o.h,{title:"Zining Ren",dark:!0,links:c.Z,children:(0,r.jsxs)(i.B,{children:[(0,r.jsx)("p",{id:"a-novel",children:"Stories."}),(0,r.jsx)("embed",{className:"pdf-reader",src:"./extended_text.pdf"}),(0,r.jsx)("div",{style:{textAlign:"center"},children:"Written in 2022."}),(0,r.jsx)(i.L,{})]})})}},9008:function(t,e,n){t.exports=n(3121)}},function(t){t.O(0,[774,888,179],(function(){return e=8603,t(t.s=e);var e}));var e=t.O();_N_E=e}]);