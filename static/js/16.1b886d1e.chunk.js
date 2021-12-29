(this.webpackJsonpmagepunks=this.webpackJsonpmagepunks||[]).push([[16],{1208:function(e,t,n){"use strict";n.r(t),n.d(t,"NoEthereumProviderError",(function(){return d})),n.d(t,"ProvidedConnector",(function(){return m})),n.d(t,"UserRejectedRequestError",(function(){return l}));var r=n(198);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return a=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o},a.apply(null,arguments)}function h(e){var t="function"===typeof Map?new Map:void 0;return h=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)},h(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function p(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}function v(e){return e.hasOwnProperty("result")?e.result:e}var d=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was passed to the constructor or found on window.ethereum.",t}return i(t,e),t}(h(Error)),l=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return i(t,e),t}(h(Error)),m=function(e){function t(t){var n,r=t.provider,o=void 0===r?window.ethereum:r,i=t.supportedChainIds;return(n=e.call(this,{supportedChainIds:i})||this).provider=o,n.handleNetworkChanged=n.handleNetworkChanged.bind(f(n)),n.handleChainChanged=n.handleChainChanged.bind(f(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(f(n)),n.handleClose=n.handleClose.bind(f(n)),n}i(t,e);var n=t.prototype;return n.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},n.handleAccountsChanged=function(e){0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},n.handleClose=function(e,t){this.emitDeactivate()},n.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},n.activate=function(){try{var e,t=function(t){if(n)return t;function i(){return o({provider:r.provider},e?{account:e}:{})}var s=function(){if(!e)return Promise.resolve(r.provider.enable().then((function(e){return e&&v(e)[0]}))).then((function(t){e=t}))}();return s&&s.then?s.then(i):i()},n=!1,r=this;if(!r.provider)throw new d;r.provider.on&&(r.provider.on("chainChanged",r.handleChainChanged),r.provider.on("accountsChanged",r.handleAccountsChanged),r.provider.on("close",r.handleClose),r.provider.on("networkChanged",r.handleNetworkChanged)),r.provider.isMetaMask&&(r.provider.autoRefreshOnNetworkChange=!1);var i=p((function(){return Promise.resolve(r.provider.send("eth_requestAccounts").then((function(e){return v(e)[0]}))).then((function(t){e=t}))}),(function(e){if(4001===e.code)throw new l}));return Promise.resolve(i&&i.then?i.then(t):t(i))}catch(s){return Promise.reject(s)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=v(n.provider.send({method:"net_version"}))}catch(t){}return e||(e=n.provider.isDapper?v(n.provider.cachedResults.net_version):n.provider.chainId||n.provider.networkVersion||n.provider._chainId),e}var r=function(){if(!e){var t=p((function(){return Promise.resolve(n.provider.send("net_version").then(v)).then((function(t){e=t}))}),(function(){}));if(t&&t.then)return t.then((function(){}))}}();return r&&r.then?r.then(t):t()},n=this;if(!n.provider)throw new d;var r=p((function(){return Promise.resolve(n.provider.send("eth_chainId").then(v)).then((function(t){e=t}))}),(function(){}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},n.getAccount=function(){try{var e,t=function(){function t(){return e||(e=v(n.provider.send({method:"eth_accounts"}))[0]),e}var r=function(){if(!e){var t=p((function(){return Promise.resolve(n.provider.enable().then((function(e){return v(e)[0]}))).then((function(t){e=t}))}),(function(){}));if(t&&t.then)return t.then((function(){}))}}();return r&&r.then?r.then(t):t()},n=this;if(!n.provider)throw new d;var r=p((function(){return Promise.resolve(n.provider.send("eth_accounts").then((function(e){return v(e)[0]}))).then((function(t){e=t}))}),(function(){}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},n.deactivate=function(){this.provider&&this.provider.removeListener&&(this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged),this.provider.removeListener("close",this.handleClose),this.provider.removeListener("networkChanged",this.handleNetworkChanged))},n.isAuthorized=function(){try{var e=this;return e.provider?Promise.resolve(p((function(){return Promise.resolve(e.provider.send("eth_accounts").then((function(e){return v(e).length>0})))}),(function(){return!1}))):Promise.resolve(!1)}catch(t){return Promise.reject(t)}},t}(r.a)},190:function(e,t,n){"use strict";var r,o="object"===typeof Reflect?Reflect:null,i=o&&"function"===typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"===typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!==e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}y(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&y(e,"error",t,n)}(e,o,{once:!0})}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var c=10;function a(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function h(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var o,i,s,u;if(a(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"===typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=h(e))>0&&s.length>o&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,u=c,console&&console.warn&&console.warn(u)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=p.bind(r);return o.listener=n,r.wrapFn=o,o}function d(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):m(o,o.length)}function l(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return h(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=o[e];if(void 0===c)return!1;if("function"===typeof c)i(c,this,t);else{var a=c.length,h=m(c,a);for(n=0;n<a;++n)i(h[n],this,t)}return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){return a(t),this.on(e,v(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,v(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,o,i,s;if(a(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return d(this,e,!0)},u.prototype.rawListeners=function(e){return d(this,e,!1)},u.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):l.call(e,t)},u.prototype.listenerCount=l,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(190),o=n(60);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){this.emit(o.a.Update,e)},i.emitError=function(e){this.emit(o.a.Error,e)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},r}(r.EventEmitter)}}]);
//# sourceMappingURL=16.1b886d1e.chunk.js.map