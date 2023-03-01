// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,a=t.__lookupGetter__,u=t.__lookupSetter__;var c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,c){var s,l,f,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((l="value"in c)&&(a.call(e,r)||u.call(e,r)?(s=e.__proto__,e.__proto__=t,delete e[r],e[r]=c.value,e.__proto__=s):e[r]=c.value),f="get"in c,p="set"in c,l&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&i&&i.call(e,r,c.get),p&&o&&o.call(e,r,c.set),e};function s(e,r,t){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(e){return"string"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return f&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var v=p()?function(e){var r,t,n,i,o;if(null==e)return g.call(e);t=e[d],o=d,r=null!=(i=e)&&h.call(i,o);try{e[d]=void 0}catch(r){return g.call(e)}return n=g.call(e),r?e[d]=t:delete e[d],n}:function(e){return g.call(e)},w=String.prototype.valueOf;var m=p();function b(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object String]"===v(e)))}function y(e){return l(e)||b(e)}function E(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}s(y,"isPrimitive",l),s(y,"isObject",b);var _=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function T(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}s(E,"REGEXP",_);var S=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;function j(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}s(T,"REGEXP",S);var k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function O(){throw new Error("setTimeout has not been defined")}function x(){throw new Error("clearTimeout has not been defined")}var I=O,P=x;function V(e){if(I===setTimeout)return setTimeout(e,0);if((I===O||!I)&&setTimeout)return I=setTimeout,setTimeout(e,0);try{return I(e,0)}catch(r){try{return I.call(null,e,0)}catch(r){return I.call(this,e,0)}}}"function"==typeof k.setTimeout&&(I=setTimeout),"function"==typeof k.clearTimeout&&(P=clearTimeout);var $,A=[],N=!1,F=-1;function R(){N&&$&&(N=!1,$.length?A=$.concat(A):F=-1,A.length&&G())}function G(){if(!N){var e=V(R);N=!0;for(var r=A.length;r;){for($=A,A=[];++F<r;)$&&$[F].run();F=-1,r=A.length}$=null,N=!1,function(e){if(P===clearTimeout)return clearTimeout(e);if((P===x||!P)&&clearTimeout)return P=clearTimeout,clearTimeout(e);try{P(e)}catch(r){try{return P.call(null,e)}catch(r){return P.call(this,e)}}}(e)}}function L(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];A.push(new C(e,r)),1!==A.length||N||V(G)}function C(e,r){this.fun=e,this.array=r}C.prototype.run=function(){this.fun.apply(null,this.array)};var M={},X=[],Z={},z={},W={};function D(){}var U=D,Y=D,B=D,q=D,H=D,J=D,K=D;function Q(e){throw new Error("process.binding is not supported")}function ee(){return"/"}function re(e){throw new Error("process.chdir is not supported")}function te(){return 0}var ne=k.performance||{},ie=ne.now||ne.mozNow||ne.msNow||ne.oNow||ne.webkitNow||function(){return(new Date).getTime()};function oe(e){var r=.001*ie.call(ne),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var ae=new Date;function ue(){return(new Date-ae)/1e3}var ce={nextTick:L,title:"browser",browser:true,env:M,argv:X,version:"",versions:Z,on:U,addListener:Y,once:B,off:q,removeListener:H,removeAllListeners:J,emit:K,binding:Q,cwd:ee,chdir:re,umask:te,hrtime:oe,platform:"browser",release:z,config:W,uptime:ue},se="win32"===j(Object.freeze({__proto__:null,addListener:Y,argv:X,binding:Q,browser:true,chdir:re,config:W,cwd:ee,default:ce,emit:K,env:M,hrtime:oe,nextTick:L,off:q,on:U,once:B,platform:"browser",release:z,removeAllListeners:J,removeListener:H,title:"browser",umask:te,uptime:ue,version:"",versions:Z})).platform,le=Math.floor;function fe(e){return le(e)===e}function pe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&fe(e.length)&&e.length>=0&&e.length<=9007199254740991}function ge(e){return"number"==typeof e}var he=Number,de=he.prototype.toString;var ve=p();function we(e){return"object"==typeof e&&(e instanceof he||(ve?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function me(e){return ge(e)||we(e)}s(me,"isPrimitive",ge),s(me,"isObject",we);var be=Number.POSITIVE_INFINITY,ye=he.NEGATIVE_INFINITY;function Ee(e){return e<be&&e>ye&&fe(e)}function _e(e){return ge(e)&&Ee(e)}function Te(e){return we(e)&&Ee(e.valueOf())}function Se(e){return _e(e)||Te(e)}function je(e){return e!=e}function ke(e){return ge(e)&&je(e)}function Oe(e){return we(e)&&je(e.valueOf())}function xe(e){return ke(e)||Oe(e)}function Ie(e,r,t){var n,i,o;if(!pe(e)&&!l(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!_e(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(l(e)){if(!l(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==e.indexOf(r,i)}if(n=e.length,ke(r)){for(o=i;o<n;o++)if(ke(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}function Pe(e){return"number"==typeof e}function Ve(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function $e(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ve(i):Ve(i)+e,n&&(e="-"+e)),e}s(Se,"isPrimitive",_e),s(Se,"isObject",Te),s(xe,"isPrimitive",ke),s(xe,"isObject",Oe);var Ae=String.prototype.toLowerCase,Ne=String.prototype.toUpperCase;function Fe(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Pe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=$e(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=$e(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ne.call(e.specifier)?Ne.call(t):Ae.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Re(e){return"string"==typeof e}var Ge=Math.abs,Le=String.prototype.toLowerCase,Ce=String.prototype.toUpperCase,Me=String.prototype.replace,Xe=/e\+(\d)$/,Ze=/e-(\d)$/,ze=/^(\d+)$/,We=/^(\d+)e/,De=/\.0$/,Ue=/\.0*e/,Ye=/(\..*[^0])0*e/;function Be(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Pe(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Ge(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Me.call(t,Ye,"$1e"),t=Me.call(t,Ue,"e"),t=Me.call(t,De,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Me.call(t,Xe,"e+0$1"),t=Me.call(t,Ze,"e-0$1"),e.alternate&&(t=Me.call(t,ze,"$1."),t=Me.call(t,We,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ce.call(e.specifier)?Ce.call(t):Le.call(t)}function qe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function He(e,r,t){var n=r-e.length;return n<0?e:e=t?e+qe(n):qe(n)+e}var Je=String.fromCharCode,Ke=isNaN,Qe=Array.isArray;function er(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function rr(e){var r,t,n,i,o,a,u,c,s;if(!Qe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(Re(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=er(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ke(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Ke(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Fe(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Ke(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ke(o)?String(n.arg):Je(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Be(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=$e(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=He(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function nr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ir(e){var r,t,n,i;for(t=[],i=0,n=tr.exec(e);n;)(r=e.slice(i,tr.lastIndex-n[0].length)).length&&t.push(r),t.push(nr(n)),i=tr.lastIndex,n=tr.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function or(e){return"string"==typeof e}function ar(e){var r,t,n;if(!or(e))throw new TypeError(ar("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ir(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return rr.apply(null,t)}var ur=["posix","win32"];function cr(e){if(arguments.length>0&&!Ie(ur,e))throw new Error(ar('invalid argument. Must be one of the following: "%s". Value: `%s`.',ur.join('", "'),e));return"win32"===e||se?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var sr=se?S:_;function lr(e){if(!l(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0jiBs",e));return sr.exec(e)[1]}s(cr,"REGEXP",sr),s(cr,"REGEXP_POSIX",_),s(cr,"REGEXP_WIN32",S);export{lr as default};
//# sourceMappingURL=mod.js.map
