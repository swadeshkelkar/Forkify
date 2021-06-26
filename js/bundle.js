(()=>{var __webpack_modules__={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),i=n(26),s=n(372),o=n(327),a=n(97),c=n(373),u=n(985),l=n(61);e.exports=function(e){return new Promise((function(t,n){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var _=a(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),o(_,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f};i(t,n,s),f=null}},f.onabort=function(){f&&(n(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){n(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(_))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in f&&r.forEach(d,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),n(e),f=null)})),p||(p=null),f.send(p)}))}},609:(e,t,n)=>{"use strict";var r=n(867),i=n(849),s=n(321),o=n(185);function a(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(n(655));c.Axios=s,c.create=function(e){return a(o(c.defaults,e))},c.Cancel=n(263),c.CancelToken=n(972),c.isCancel=n(502),c.all=function(e){return Promise.all(e)},c.spread=n(713),c.isAxiosError=n(268),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),i=n(327),s=n(782),o=n(572),a=n(185);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},782:(e,t,n)=>{"use strict";var r=n(867);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},97:(e,t,n)=>{"use strict";var r=n(793),i=n(303);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,i,s){var o=new Error(e);return r(o,t,n,i,s)}},572:(e,t,n)=>{"use strict";var r=n(867),i=n(527),s=n(502),o=n(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(e[i],t[i])}r.forEach(i,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(o,(function(i){r.isUndefined(t[i])?r.isUndefined(e[i])||(n[i]=c(void 0,e[i])):n[i]=c(void 0,t[i])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=i.concat(s).concat(o).concat(a),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(p,u),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),i=n(16),s={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(448)),a),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},373:(e,t,n)=>{"use strict";var r=n(867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,n)=>{"use strict";var r=n(849),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},686:e=>{var t,n;Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var s=n.split("/");this.numerator=s[0],this.denominator=s[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();return e=e.clone().normalize(),t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(t(this.denominator)){var e=n(this.denominator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),this.numerator*=r}t(this.numerator)&&(e=n(this.numerator,9),r=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*r),this.denominator*=r);var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},Fraction},390:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Recipe});var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(669),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);class Recipe{constructor(e){this.id=e}async getRecipe(){try{const e=await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);this.title=e.data.recipe.title,this.author=e.data.recipe.publisher,this.img=e.data.recipe.image_url,this.url=e.data.recipe.source_url,this.ingredients=e.data.recipe.ingredients}catch(e){console.log(e)}}calcTime(){const e=this.ingredients.length,t=Math.ceil(e/3);this.time=15*t}calcServings(){this.servings=4}parseIngredients(){const unitsLong=["tablespoons","tablespoon","ounces","ounce","teaspoons","teaspoon","cups","pounds"],unitsShort=["tbsp","tbsp","oz","oz","tsp","tsp","cup","pound"],units=[...unitsShort,"kg","g"],newIngredients=this.ingredients.map((el=>{let ingredient=el.toLowerCase();unitsLong.forEach(((e,t)=>{ingredient=ingredient.replace(e,unitsShort[t])})),ingredient=ingredient.replace(/ *\([^)]*\) */g," ");const arrIng=ingredient.split(" "),unitIndex=arrIng.findIndex((e=>units.includes(e)));let objIng;if(unitIndex>-1){const arrCount=arrIng.slice(0,unitIndex);let count;count=1===arrCount.length?eval(arrIng[0].replace("-","+")):eval(arrIng.slice(0,unitIndex).join("+")),objIng={count,unit:arrIng[unitIndex],ingredient:arrIng.slice(unitIndex+1).join(" ")}}else parseInt(arrIng[0],10)?objIng={count:parseInt(arrIng[0],10),unit:"",ingredient:arrIng.slice(1).join(" ")}:-1===unitIndex&&(objIng={count:1,unit:"",ingredient});return objIng}));this.ingredients=newIngredients}updateServings(e){const t="dec"===e?this.servings-1:this.servings+1;this.ingredients.forEach((e=>{e.count*=t/this.servings})),this.servings=t}}}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=__webpack_require__(669),t=__webpack_require__.n(e);class n{constructor(e){this.query=e}async getResults(){try{const e=await t()(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);this.result=e.data.recipes}catch(e){alert(e)}}}var r=__webpack_require__(390);class i{constructor(){this.items=[]}addItem(e,t,n){const r={id:"_"+Math.random().toString(36).substr(2,9),count:e,unit:t,ingredient:n};return this.items.push(r),r}deleteItem(e){const t=this.items.findIndex((t=>t.id===e));this.items.splice(t,1)}updateCount(e,t){this.items.find((t=>t.id===e)).count=t}}class s{constructor(){this.likes=[]}addLike(e,t,n,r){const i={id:e,title:t,author:n,img:r};return this.likes.push(i),this.persistData(),i}deleteLike(e){const t=this.likes.findIndex((t=>t.id===e));this.likes.splice(t,1),this.persistData()}isLiked(e){return-1!==this.likes.findIndex((t=>t.id===e))}getNumLikes(){return this.likes.length}persistData(){localStorage.setItem("likes",JSON.stringify(this.likes))}readStorage(){const e=JSON.parse(localStorage.getItem("likes"));e&&(this.likes=e)}}const o={searchInput:document.querySelector(".search__field"),searchForm:document.querySelector(".search"),searchRes:document.querySelector(".results"),searchResList:document.querySelector(".results__list"),searchResPages:document.querySelector(".results__pages"),recipe:document.querySelector(".recipe"),shopping:document.querySelector(".shopping__list"),likesMenu:document.querySelector(".likes__field"),likesList:document.querySelector(".likes__list")},a=e=>{e.insertAdjacentHTML("afterbegin",'\n        <div class="loader">\n            <svg>\n                <use href="img/icons.svg#icon-cw"></use>\n            </svg>\n        </div>\n    ')},c=()=>{const e=document.querySelector(".loader");e&&e.parentElement.removeChild(e)},u=()=>{o.searchResList.innerHTML="",o.searchResPages.innerHTML=""},l=(e,t=17)=>{const n=[];return e.length>t?(e.split(" ").reduce(((e,r)=>(e+r.length<=t&&n.push(r),e+r.length)),0),`${n.join(" ")} ...`):e},p=e=>{const t=`\n        <li>\n            <a class="results__link" href="#${e.recipe_id}">\n                <figure class="results__fig">\n                    <img src="${e.image_url}" alt="${e.title}">\n                </figure>\n                <div class="results__data">\n                    <h4 class="results__name">${l(e.title)}</h4>\n                    <p class="results__author">${e.publisher}</p>\n                </div>\n            </a>\n        </li>\n    `;o.searchResList.insertAdjacentHTML("beforeend",t)},d=(e,t)=>`\n  <button class="btn-inline results__btn--${t}" data-goto=${"prev"===t?e-1:e+1}>\n    <span>Page ${"prev"===t?e-1:e+1}</span>\n    <svg class="search__icon">\n        <use href="img/icons.svg#icon-triangle-${"prev"===t?"left":"right"}"></use>\n    </svg>\n  </button>\n`,f=(e,t=1,n=10)=>{const r=(t-1)*n,i=t*n;e.slice(r,i).forEach(p),((e,t,n)=>{const r=Math.ceil(t/n);let i;1===e&&r>1?i=d(e,"next"):e<r?i=`\n    ${d(e,"prev")}\n    ${d(e,"next")}\n    `:e===r&&r>1&&(i=d(e,"prev")),o.searchResPages.insertAdjacentHTML("afterbegin",i)})(t,e.length,n)};__webpack_require__(686);const h=e=>{if(e){const t=Math.round(1e4*e)/1e4,[n,r]=t.toString().split(".").map((e=>parseInt(e,10)));if(!r)return t;if(0===n){const e=new Fraction(t);return`${e.numerator}/${e.denominator}`}{const e=new Fraction(t-n);return`${e.numerator}/${e.denominator}`}}return"?"},m=e=>{document.querySelector(".recipe__info-data--people").textContent=e.servings;const t=Array.from(document.querySelectorAll(".recipe__count"));console.log(t),t.forEach(((t,n)=>{t.textContent=h(e.ingredients[n].count)}))},_=e=>{const t=e?"icon-heart":"icon-heart-outlined";document.querySelector(".recipe__love use").setAttribute("href",`img/icons.svg#${t}`)},g=e=>{o.likesMenu.style.visibility=e>0?"visible":"hidden"},v=e=>{const t=`\n        <li>\n            <a class="likes__link" href="#${e.id}">\n            <figure class="likes__fig">\n                <img src="${e.img}" alt="${e.title}">\n            </figure>\n            <div class="likes__data">\n            <h4 class="likes__name">${l(e.title)}</h4>\n            <p class="likes__author">${e.author}</p>\n            </div>\n            </a>\n        </li>\n    `;o.likesList.insertAdjacentHTML("beforeend",t)},y={};o.searchForm.addEventListener("submit",(e=>{e.preventDefault(),(async()=>{const e=o.searchInput.value;if(console.log(e),e){y.search=new n(e),o.searchInput.value="",u(),a(o.searchRes);try{await y.search.getResults(),c(),f(y.search.result)}catch(e){c(),alert("Something wrong with the search...")}}})()})),o.searchResPages.addEventListener("click",(e=>{const t=e.target.closest(".btn-inline");if(console.log(t),t){const e=parseInt(t.dataset.goto,10);u(),f(y.search.result,e)}}));const b=async()=>{const e=window.location.hash.replace("#","");if(console.log(e),e){o.recipe.innerHTML="",a(o.recipe),y.search&&(e=>{Array.from(document.querySelectorAll(".results__link")).forEach((e=>{e.classList.remove("results__link--active")})),document.querySelector(`.results__link[href*="${e}"]`).classList.add("results__link--active")})(e),y.recipe=new r.Z(e);try{await y.recipe.getRecipe(),y.recipe.parseIngredients(),y.recipe.calcTime(),y.recipe.calcServings(),c(),((e,t)=>{const n=`\n    <figure class="recipe__fig">\n                <img src="${e.img}" alt="${e.title}" class="recipe__img">\n                <h1 class="recipe__title">\n                    <span>${e.title}</span>\n                </h1>\n            </figure>\n            <div class="recipe__details">\n                <div class="recipe__info">\n                    <svg class="recipe__info-icon">\n                        <use href="img/icons.svg#icon-stopwatch"></use>\n                    </svg>\n                    <span class="recipe__info-data recipe__info-data--minutes">${e.time}</span>\n                    <span class="recipe__info-text"> minutes</span>\n                </div>\n                <div class="recipe__info">\n                    <svg class="recipe__info-icon">\n                        <use href="img/icons.svg#icon-man"></use>\n                    </svg>\n                    <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>\n                    <span class="recipe__info-text"> servings</span>\n\n                    <div class="recipe__info-buttons">\n                        <button class="btn-tiny btn-decrease">\n                            <svg>\n                                <use href="img/icons.svg#icon-circle-with-minus"></use>\n                            </svg>\n                        </button>\n                        <button class="btn-tiny btn-increase">\n                            <svg>\n                                <use href="img/icons.svg#icon-circle-with-plus"></use>\n                            </svg>\n                        </button>\n                    </div>\n\n                </div>\n                <button class="recipe__love">\n                    <svg class="header__likes">\n                        <use href="img/icons.svg#icon-heart${t?"":"-outlined"}"></use>\n                    </svg>\n                </button>\n            </div>\n\n\n\n            <div class="recipe__ingredients">\n                <ul class="recipe__ingredient-list">\n                ${e.ingredients.map((e=>{return`\n    <li class="recipe__item">\n    <svg class="recipe__icon">\n        <use href="img/icons.svg#icon-check"></use>\n    </svg>\n    <div class="recipe__count">${h((t=e).count)}</div>\n    <div class="recipe__ingredient">\n        <span class="recipe__unit">${t.unit}</span>\n        ${t.ingredient}\n    </div>\n    </li>\n`;var t})).join("")}\n\n\n                <button class="btn-small recipe__btn recipe__btn--add">\n                    <svg class="search__icon">\n                        <use href="img/icons.svg#icon-shopping-cart"></use>\n                    </svg>\n                    <span>Add to shopping list</span>\n                </button>\n            </div>\n\n            <div class="recipe__directions">\n                <h2 class="heading-2">How to cook it</h2>\n                <p class="recipe__directions-text">\n                    This recipe was carefully designed and tested by\n                    <span class="recipe__by">${e.author}</span>. Please check out directions at their website.\n                </p>\n                <a class="btn-small recipe__btn" href="${e.url}">\n                    <span>Directions</span>\n                    <svg class="search__icon">\n                        <use href="img/icons.svg#icon-triangle-right"></use>\n                    </svg>\n\n                </a>\n            </div>\n    `;o.recipe.insertAdjacentHTML("afterbegin",n)})(y.recipe,y.likes.isLiked(e))}catch(e){alert("Error processing recipe!")}}};["hashchange","load"].forEach((e=>window.addEventListener(e,b)));window.addEventListener("load",(()=>{y.likes=new s,y.likes.readStorage(),g(y.likes.getNumLikes()),y.likes.likes.forEach((e=>v(e)))})),o.shopping.addEventListener("click",(e=>{const t=e.target.closest(".shopping__item").dataset.itemid;if(e.target.matches(".shopping__delete, .shopping__delete *"))y.list.deleteItem(t),(e=>{const t=document.querySelector(`[data-itemid="${e}"]`);t&&t.parentElement.removeChild(t)})(t);else if(e.target.matches(".shopping__count-value")){const n=parseFloat(e.target.value,10);y.list.updateCount(t,n)}})),o.recipe.addEventListener("click",(e=>{e.target.matches(".btn-decrease, .btn-decrease *")?y.recipe.servings>1&&(y.recipe.updateServings("dec"),m(y.recipe)):e.target.matches(".btn-increase, .btn-increase *")?(y.recipe.updateServings("inc"),m(y.recipe)):e.target.matches(".recipe__btn--add, .recipe__btn--add *")?(y.list||(y.list=new i),y.recipe.ingredients.forEach((e=>{(e=>{const t=`\n            <li class="shopping__item" data-itemid=${e.id}>\n                <div class="shopping__count">\n                    <input type="number" value="${e.count}" step="${e.count}" class="shopping__count-value">\n                    <p>${e.unit}</p>\n                </div>\n                <p class="shopping__description">${e.ingredient}</p>\n                <button class="shopping__delete btn-tiny">\n                    <svg>\n                        <use href="img/icons.svg#icon-circle-with-cross"></use>\n                    </svg>\n                </button>\n            </li>\n    `;o.shopping.insertAdjacentHTML("beforeend",t)})(y.list.addItem(e.count,e.unit,e.ingredient))}))):e.target.matches(".recipe__love, .recipe__love *")&&(()=>{y.likes||(y.likes=new s);const e=y.recipe.id;if(y.likes.isLiked(e))y.likes.deleteLike(e),_(!1),(e=>{const t=document.querySelector(`.likes__link[href*="${e}"]`).parentElement;t&&t.parentElement.removeChild(t)})(e);else{const t=y.likes.addLike(e,y.recipe.title,y.recipe.author,y.recipe.img);_(!0),v(t)}g(y.likes.getNumLikes())})()}))})()})();