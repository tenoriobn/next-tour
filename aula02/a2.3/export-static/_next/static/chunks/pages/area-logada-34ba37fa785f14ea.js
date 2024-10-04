(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{6489:function(e,r){"use strict";r.parse=function(e,r){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var o={},n=r||{},a=e.split(i),u=n.decode||t,c=0;c<a.length;c++){var l=a[c],f=l.indexOf("=");if(!(f<0)){var p=l.substr(0,f).trim(),d=l.substr(++f,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==o[p]&&(o[p]=s(d,u))}}return o},r.serialize=function(e,r,t){var i=t||{},s=i.encode||o;if("function"!==typeof s)throw new TypeError("option encode is invalid");if(!n.test(e))throw new TypeError("argument name is invalid");var a=s(r);if(a&&!n.test(a))throw new TypeError("argument val is invalid");var u=e+"="+a;if(null!=i.maxAge){var c=i.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(i.domain){if(!n.test(i.domain))throw new TypeError("option domain is invalid");u+="; Domain="+i.domain}if(i.path){if(!n.test(i.path))throw new TypeError("option path is invalid");u+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(u+="; HttpOnly");i.secure&&(u+="; Secure");if(i.sameSite){switch("string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var t=decodeURIComponent,o=encodeURIComponent,i=/; */,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,r){try{return r(e)}catch(t){return e}}},672:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area-logada",function(){return t(9332)}])},9332:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return u},default:function(){return c}});var o=t(5893),i=t(5982),n=t(1163),s=t(2286),a=t.n(s),u=!0;function c(e){var r=(0,n.useRouter)();return(0,o.jsxs)(i.xu,{styleSheet:{border:"1px solid #F9703E",flexDirection:"column",maxWidth:"400px",marginTop:"20%",marginHorizontal:"auto",padding:"32px",borderRadius:"4px",boxShadow:"1px 1px 5px 0 rgba(255,69,0,0.2)"},children:[(0,o.jsx)(i.xv,{styleSheet:{marginVertical:"32px"},children:"Voc\xea acessou uma \xe1rea protegida!"}),(0,o.jsx)(i.zx,{label:"Logout",onClick:function(){a().destroy(null,"SENHA_SECRETA"),r.push("/")},colorVariant:"neutral",variant:"secondary"})]})}},2286:function(e,r,t){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.destroyCookie=r.setCookie=r.parseCookies=void 0;var i=t(6489),n=t(9328),s=t(1022);function a(e,r){var t,o;return(null===(o=null===(t=null===e||void 0===e?void 0:e.req)||void 0===t?void 0:t.headers)||void 0===o?void 0:o.cookie)?i.parse(e.req.headers.cookie,r):s.isBrowser()?i.parse(document.cookie,r):{}}function u(e,r,t,a){var u,c;if(void 0===a&&(a={}),(null===(u=null===e||void 0===e?void 0:e.res)||void 0===u?void 0:u.getHeader)&&e.res.setHeader){if(null===(c=null===e||void 0===e?void 0:e.res)||void 0===c?void 0:c.finished)return console.warn('Not setting "'+r+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var l=e.res.getHeader("Set-Cookie")||[];"string"===typeof l&&(l=[l]),"number"===typeof l&&(l=[]);var f=n.parse(l,{decodeValues:!1}),p=s.createCookie(r,t,a),d=[];f.forEach((function(e){if(!s.areCookiesEqual(e,p)){var r=i.serialize(e.name,e.value,o({encode:function(e){return e}},e));d.push(r)}})),d.push(i.serialize(r,t,a)),e.res.setHeader("Set-Cookie",d)}if(s.isBrowser()){if(a&&a.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=i.serialize(r,t,a)}return{}}function c(e,r,t){return u(e,r,"",o(o({},t||{}),{maxAge:-1}))}r.parseCookies=a,r.setCookie=u,r.destroyCookie=c,r.default={set:u,get:a,destroy:c}},1022:function(e,r){"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)};function o(e,r){var t=Object.getOwnPropertyNames(e),o=Object.getOwnPropertyNames(r);if(t.length!==o.length)return!1;for(var i=0;i<t.length;i++){var n=t[i];if(e[n]!==r[n])return!1}return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.areCookiesEqual=r.hasSameProperties=r.createCookie=r.isBrowser=void 0,r.isBrowser=function(){return"undefined"!==typeof window},r.createCookie=function(e,r,o){var i=o.sameSite;!0===i&&(i="strict"),void 0!==i&&!1!==i||(i="lax");var n=t(t({},o),{sameSite:i});return delete n.encode,t({name:e,value:r},n)},r.hasSameProperties=o,r.areCookiesEqual=function(e,r){var i=e.sameSite===r.sameSite;return"string"===typeof e.sameSite&&"string"===typeof r.sameSite&&(i=e.sameSite.toLowerCase()===r.sameSite.toLowerCase()),o(t(t({},e),{sameSite:void 0}),t(t({},r),{sameSite:void 0}))&&i}},9328:function(e){"use strict";var r={decodeValues:!0,map:!1,silent:!1};function t(e){return"string"===typeof e&&!!e.trim()}function o(e,o){var i=e.split(";").filter(t),n=i.shift().split("="),s=n.shift(),a=n.join("=");o=o?Object.assign({},r,o):r;try{a=o.decodeValues?decodeURIComponent(a):a}catch(c){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+a+"'. Set options.decodeValues to false to disable this feature.",c)}var u={name:s,value:a};return i.forEach((function(e){var r=e.split("="),t=r.shift().trimLeft().toLowerCase(),o=r.join("=");"expires"===t?u.expires=new Date(o):"max-age"===t?u.maxAge=parseInt(o,10):"secure"===t?u.secure=!0:"httponly"===t?u.httpOnly=!0:"samesite"===t?u.sameSite=o:u[t]=o})),u}function i(e,i){if(i=i?Object.assign({},r,i):r,!e)return i.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var n=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];n||!e.headers.cookie||i.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=n}if(Array.isArray(e)||(e=[e]),(i=i?Object.assign({},r,i):r).map){return e.filter(t).reduce((function(e,r){var t=o(r,i);return e[t.name]=t,e}),{})}return e.filter(t).map((function(e){return o(e,i)}))}e.exports=i,e.exports.parse=i,e.exports.parseString=o,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var r,t,o,i,n,s=[],a=0;function u(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(r=a,n=!1;u();)if(","===(t=e.charAt(a))){for(o=a,a+=1,u(),i=a;a<e.length&&"="!==(t=e.charAt(a))&&";"!==t&&","!==t;)a+=1;a<e.length&&"="===e.charAt(a)?(n=!0,a=i,s.push(e.substring(r,o)),r=a):a=o+1}else a+=1;(!n||a>=e.length)&&s.push(e.substring(r,e.length))}return s}}},function(e){e.O(0,[774,888,179],(function(){return r=672,e(e.s=r);var r}));var r=e.O();_N_E=r}]);