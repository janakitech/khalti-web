var KhaltiCheckout=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"KhaltiCheckout",function(){return f});var r=n(1),o=(n.n(r),function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()),u=function(t,e){return Array.isArray(t)?t.forEach(e):Object.keys(t).map(function(n){return e(t[n],n)})},a=function(t){return t?JSON.parse(JSON.stringify(t)):t},c={onSuccess:[Object(r.required)(!0),Object(r.isFunction)()],onError:[Object(r.required)(!1),Object(r.isFunction)()]},l={publicKey:Object(r.required)(!0),returnUrl:Object(r.required)(!0),productUrl:Object(r.required)(!0),productIdentity:Object(r.required)(!0),productName:Object(r.required)(!0),eventHandler:Object(r.required)(!0),amount:Object(r.required)(!0),merchantData:[Object(r.required)(!1),Object(r.isObject)()]},f=function(){function t(e){i(this,t),this._config=e,this._widget=this.attachWidget(),this.listenToWidget()}return o(t,[{key:"listenToWidget",value:function(){var t=this;window.addEventListener("message",function(e){var n="handle_msg_"+e.data.realm;t[n](e.data.payload)},!1)}},{key:"msgWidget",value:function(t,e){e=a(e),this._widget.contentWindow.postMessage({realm:t,payload:e},"*")}},{key:"handle_msg_widgetInit",value:function(){this.widgetInit()}},{key:"widgetInit",value:function(){var t=a(this._config);delete t.eventHandler,this.msgWidget("paymentInfo",t)}},{key:"validateConfig",value:function(){var t=Object(r.validate)(this._config,l);if(t)throw new Error(JSON.stringify(t));var e=Object(r.validate)(this._config.eventHandler,c);if(e)throw new Error(JSON.stringify({eventHandler:e}))}},{key:"handle_msg_walletPaymentVerification",value:function(t){this._config.eventHandler.onSuccess(t),this.hide()}},{key:"handle_msg_widgetError",value:function(t){var e=this._config.eventHandler.onError;e&&e(t)}},{key:"disableParentScrollbar",value:function(){this.parentOverflowValue=window.document.body.style.overflowY,window.document.body.style.overflowY="hidden"}},{key:"enableParentScrollbar",value:function(){window.document.body.style.overflowY=this.parentOverflowValue,this.parentOverflowValue=null}},{key:"show",value:function(t){this._config.source="web",Object.assign(this._config,t),this.validateConfig(),this.disableParentScrollbar(),this._widget.style.display="block",this.widgetInit()}},{key:"handle_msg_hide",value:function(){this.hide()}},{key:"hide",value:function(){this.enableParentScrollbar(),this._widget.style.display="none"}},{key:"attachWidget",value:function(){var t=window.document.createElement("iframe");return t.setAttribute("id","khalti-widget"),t.style.position="fixed",t.style.display="none",t.style.top="0",t.style.left="0",t.width="100%",t.height=window.innerHeight+"px",t.setAttribute("src","https://dev.khalti.com:8000/payment/widget/"),t.style.zIndex=999999999,t.setAttribute("frameborder",0),t.setAttribute("allowtransparency",!0),window.document.body.appendChild(t),t}},{key:"postAtURL",value:function(t){this.ebankingForm&&window.document.body.removeChild(this.ebankingForm);var e=window.document.createElement("form");e.setAttribute("id","khalti-ebanking-form"),e.setAttribute("action",t.url),e.setAttribute("target","_blank"),e.setAttribute("method","POST"),e.style.display="none",u(t.paymentInfo,function(t,n){var i=window.document.createElement("input");i.setAttribute("name",n),i.value=t,e.appendChild(i)}),window.document.body.appendChild(e),this.ebankingForm=e,e.submit()}}]),t}()},function(t,e,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":void 0===t?"undefined":i(t)},o=e.SkipValidation=function(t){this.name="SkipValidation",this.message=t},u=e.validateSingle=function(t,e,n,i,r){var u=[];"function"==typeof e&&(e=[e]);for(var a=0;a<e.length;a++)try{var c=e[a](t,i);"string"==typeof c&&u.push(c.replace("{value}",t).replace("{key}",r))}catch(t){if(t instanceof o)break}return!0===n?u:u.length>0?u[0]:void 0};e.validate=function(t,e,n){if(e){var i={},o=!0;if("object"===(void 0===e?"undefined":r(e))&&!e.length){for(var a in e)if(e.hasOwnProperty(a)){var c=u(t[a],e[a],n,t,a);void 0!==c&&(o=!1),i[a]=c}return o?void 0:i}return i=u(t,e,n)}},e.required=function(t,e){function n(t){return void 0===t||""===t||null===t}return function(i){if(t&&n(i))return e||"This field is required.";if(!t&&n(i))throw new o}},e.isNumber=function(t){return function(e){if("number"!=typeof e||isNaN(e))return t||"'{value}' is not a valid number."}},e.isString=function(t){return function(e){if("string"!=typeof e)return t||"'{value}' is not a valid string."}},e.isFunction=function(t){return function(e){if("function"!=typeof e)return t||"Expected a function."}},e.isObject=function(t){return function(e){if(e!==Object(e))return t||"Expected an object."}},e.isArray=function(t){return function(e){if("[object Array]"!==Object.prototype.toString.call(e))return t||"Expected an array."}},e.length=function(t,e){return function(n){if((n+"").length!==t)return e||"It must be "+t+" characters long."}},e.isEmail=function(t){return function(e){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))return t||"Invalid email id."}},e.equalsTo=function(t,e){return function(n,i){if(n!==i[t])return e||"'{key}' and '"+t+"' do not match."}},e.minLength=function(t,e){return function(n){if((n+"").length<t)return e||"It must be at least "+t+" characters long."}},e.maxLength=function(t,e){return function(n){if((n+"").length>t)return e||"It must be at most "+t+" characters long."}},e.isBoolean=function(t){return function(e){if(!0!==e&&!1!==e)return t||"Invalid boolean value."}},e.within=function(t,e){return function(n){n instanceof Array||(n=[n]);for(var i=[],r=0;r<n.length;r++)-1===t.indexOf(n[r])&&i.push(n[r]);if(i.length>0)return e||"["+i+"] do not fall under the allowed list."}},e.excludes=function(t,e){return function(n){n instanceof Array||(n=[n]);for(var i=[],r=0;r<n.length;r++)-1!==t.indexOf(n[r])&&i.push(n[r]);if(i.length>0)return e||"["+i+"] fall under restricted values."}},e.pattern=function(t,e){return function(n){if(!t.test(n))return e||"'{value}' does not match with the pattern."}}}]);