// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,o=n.__defineSetter__,c=n.__lookupGetter__,u=n.__lookupSetter__,s=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var s,l,f,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(e,r)||u.call(e,r)?(s=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=s):e[r]=t.value),f="get"in t,p="set"in t,l&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&o&&o.call(e,r,t.set),e};function l(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(e){return"string"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString,h=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",w=g()?function(e){var r,t,n,i,a;if(null==e)return d.call(e);t=e[b],a=b,r=null!=(i=e)&&h.call(i,a);try{e[b]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[b]=t:delete e[b],n}:function(e){return d.call(e)},y=String.prototype.valueOf,m=g();function v(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return y.call(e),!0}catch(e){return!1}}(e):"[object String]"===w(e)))}function E(e){return f(e)||v(e)}function S(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}l(E,"isPrimitive",f),l(E,"isObject",v);var _=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function j(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}l(S,"REGEXP",_);var x=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;l(j,"REGEXP",x);var T="win32"===e.platform,I=Math.floor;function k(e){return I(e)===e}function O(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&k(e.length)&&e.length>=0&&e.length<=9007199254740991}function $(e){return"number"==typeof e}var P=Number,V=P.prototype.toString,A=g();function F(e){return"object"==typeof e&&(e instanceof P||(A?function(e){try{return V.call(e),!0}catch(e){return!1}}(e):"[object Number]"===w(e)))}function R(e){return $(e)||F(e)}l(R,"isPrimitive",$),l(R,"isObject",F);var N=Number.POSITIVE_INFINITY,G=P.NEGATIVE_INFINITY;function C(e){return e<N&&e>G&&k(e)}function X(e){return $(e)&&C(e)}function Z(e){return F(e)&&C(e.valueOf())}function W(e){return X(e)||Z(e)}function z(e){return e!=e}function M(e){return $(e)&&z(e)}function L(e){return F(e)&&z(e.valueOf())}function U(e){return M(e)||L(e)}function q(e,r,t){var n,i,a;if(!O(e)&&!f(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!X(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(f(e)){if(!f(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==e.indexOf(r,i)}if(n=e.length,M(r)){for(a=i;a<n;a++)if(M(e[a]))return!0;return!1}for(a=i;a<n;a++)if(e[a]===r)return!0;return!1}function Y(e){return"number"==typeof e}function B(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function D(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+B(i):B(i)+e,n&&(e="-"+e)),e}l(W,"isPrimitive",X),l(W,"isObject",Z),l(U,"isPrimitive",M),l(U,"isObject",L);var H=String.prototype.toLowerCase,J=String.prototype.toUpperCase;function K(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=D(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=D(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===J.call(e.specifier)?J.call(t):H.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Q(e){return"string"==typeof e}var ee=Math.abs,re=String.prototype.toLowerCase,te=String.prototype.toUpperCase,ne=String.prototype.replace,ie=/e\+(\d)$/,ae=/e-(\d)$/,oe=/^(\d+)$/,ce=/^(\d+)e/,ue=/\.0$/,se=/\.0*e/,le=/(\..*[^0])0*e/;function fe(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Y(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":ee(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=ne.call(t,le,"$1e"),t=ne.call(t,se,"e"),t=ne.call(t,ue,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ne.call(t,ie,"e+0$1"),t=ne.call(t,ae,"e-0$1"),e.alternate&&(t=ne.call(t,oe,"$1."),t=ne.call(t,ce,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===te.call(e.specifier)?te.call(t):re.call(t)}function pe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ge(e,r,t){var n=r-e.length;return n<0?e:e=t?e+pe(n):pe(n)+e}var de=String.fromCharCode,he=isNaN,be=Array.isArray;function we(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ye(e){var r,t,n,i,a,o,c,u,s;if(!be(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(Q(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=we(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,he(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,he(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=K(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!he(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=he(a)?String(n.arg):de(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=fe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=D(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ge(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ve(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ee(e){var r,t,n,i;for(t=[],i=0,n=me.exec(e);n;)(r=e.slice(i,me.lastIndex-n[0].length)).length&&t.push(r),t.push(ve(n)),i=me.lastIndex,n=me.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Se(e){return"string"==typeof e}function _e(e){var r,t,n;if(!Se(e))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ee(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return ye.apply(null,t)}var je=["posix","win32"];function xe(e){if(arguments.length>0&&!q(je,e))throw new Error(_e('invalid argument. Must be one of the following: "%s". Value: `%s`.',je.join('", "'),e));return"win32"===e||T?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var Te=T?x:_;return l(xe,"REGEXP",Te),l(xe,"REGEXP_POSIX",_),l(xe,"REGEXP_WIN32",x),function(e){if(!f(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0jiBs",e));return Te.exec(e)[1]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).extname=r(e.require$$0);
//# sourceMappingURL=index.js.map
