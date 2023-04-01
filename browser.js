// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).extname=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,t=Object.prototype,n=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,a=t.__lookupGetter__,u=t.__lookupSetter__;var c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,c){var l,s,f,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((s="value"in c)&&(a.call(e,r)||u.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=c.value,e.__proto__=l):e[r]=c.value),f="get"in c,p="set"in c,s&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&i&&i.call(e,r,c.get),p&&o&&o.call(e,r,c.set),e};function l(e,r,t){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e){return"string"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return f&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var v=p()?function(e){var r,t,n,i,o;if(null==e)return g.call(e);t=e[h],o=h,r=null!=(i=e)&&d.call(i,o);try{e[h]=void 0}catch(r){return g.call(e)}return n=g.call(e),r?e[h]=t:delete e[h],n}:function(e){return g.call(e)},m=String.prototype.valueOf;var w=p();function b(e){return"object"==typeof e&&(e instanceof String||(w?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object String]"===v(e)))}function y(e){return s(e)||b(e)}function E(){return/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}l(y,"isPrimitive",s),l(y,"isObject",b);var T=/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;function _(){return/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/}l(E,"REGEXP",T);var S=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;function j(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}l(_,"REGEXP",S);var k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function x(){throw new Error("setTimeout has not been defined")}function O(){throw new Error("clearTimeout has not been defined")}var I=x,P=O;function V(e){if(I===setTimeout)return setTimeout(e,0);if((I===x||!I)&&setTimeout)return I=setTimeout,setTimeout(e,0);try{return I(e,0)}catch(r){try{return I.call(null,e,0)}catch(r){return I.call(this,e,0)}}}"function"==typeof k.setTimeout&&(I=setTimeout),"function"==typeof k.clearTimeout&&(P=clearTimeout);var $,A=[],N=!1,F=-1;function R(){N&&$&&(N=!1,$.length?A=$.concat(A):F=-1,A.length&&G())}function G(){if(!N){var e=V(R);N=!0;for(var r=A.length;r;){for($=A,A=[];++F<r;)$&&$[F].run();F=-1,r=A.length}$=null,N=!1,function(e){if(P===clearTimeout)return clearTimeout(e);if((P===O||!P)&&clearTimeout)return P=clearTimeout,clearTimeout(e);try{P(e)}catch(r){try{return P.call(null,e)}catch(r){return P.call(this,e)}}}(e)}}function L(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];A.push(new C(e,r)),1!==A.length||N||V(G)}function C(e,r){this.fun=e,this.array=r}C.prototype.run=function(){this.fun.apply(null,this.array)};var M="browser",X="browser",Z={},z=[],W={},D={},U={};function Y(){}var B=Y,q=Y,H=Y,J=Y,K=Y,Q=Y,ee=Y;function re(e){throw new Error("process.binding is not supported")}function te(){return"/"}function ne(e){throw new Error("process.chdir is not supported")}function ie(){return 0}var oe=k.performance||{},ae=oe.now||oe.mozNow||oe.msNow||oe.oNow||oe.webkitNow||function(){return(new Date).getTime()};function ue(e){var r=.001*ae.call(oe),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var ce=new Date;function le(){return(new Date-ce)/1e3}var se={nextTick:L,title:M,browser:true,env:Z,argv:z,version:"",versions:W,on:B,addListener:q,once:H,off:J,removeListener:K,removeAllListeners:Q,emit:ee,binding:re,cwd:te,chdir:ne,umask:ie,hrtime:ue,platform:X,release:D,config:U,uptime:le},fe="win32"===j(Object.freeze({__proto__:null,addListener:q,argv:z,binding:re,browser:true,chdir:ne,config:U,cwd:te,default:se,emit:ee,env:Z,hrtime:ue,nextTick:L,off:J,on:B,once:H,platform:X,release:D,removeAllListeners:Q,removeListener:K,title:M,umask:ie,uptime:le,version:"",versions:W})).platform,pe=Math.floor;function ge(e){return pe(e)===e}function de(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ge(e.length)&&e.length>=0&&e.length<=9007199254740991}function he(e){return"number"==typeof e}var ve=Number,me=ve.prototype.toString;var we=p();function be(e){return"object"==typeof e&&(e instanceof ve||(we?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function ye(e){return he(e)||be(e)}l(ye,"isPrimitive",he),l(ye,"isObject",be);var Ee=Number.POSITIVE_INFINITY,Te=ve.NEGATIVE_INFINITY;function _e(e){return e<Ee&&e>Te&&ge(e)}function Se(e){return he(e)&&_e(e)}function je(e){return be(e)&&_e(e.valueOf())}function ke(e){return Se(e)||je(e)}function xe(e){return e!=e}function Oe(e){return he(e)&&xe(e)}function Ie(e){return be(e)&&xe(e.valueOf())}function Pe(e){return Oe(e)||Ie(e)}function Ve(e,r,t){var n,i,o;if(!de(e)&&!s(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Se(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(s(e)){if(!s(r))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+r+"`.");return-1!==e.indexOf(r,i)}if(n=e.length,Oe(r)){for(o=i;o<n;o++)if(Oe(e[o]))return!0;return!1}for(o=i;o<n;o++)if(e[o]===r)return!0;return!1}function $e(e){return"number"==typeof e}function Ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ne(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ae(i):Ae(i)+e,n&&(e="-"+e)),e}l(ke,"isPrimitive",Se),l(ke,"isObject",je),l(Pe,"isPrimitive",Oe),l(Pe,"isObject",Ie);var Fe=String.prototype.toLowerCase,Re=String.prototype.toUpperCase;function Ge(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!$e(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Ne(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Ne(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Re.call(e.specifier)?Re.call(t):Fe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Le(e){return"string"==typeof e}var Ce=Math.abs,Me=String.prototype.toLowerCase,Xe=String.prototype.toUpperCase,Ze=String.prototype.replace,ze=/e\+(\d)$/,We=/e-(\d)$/,De=/^(\d+)$/,Ue=/^(\d+)e/,Ye=/\.0$/,Be=/\.0*e/,qe=/(\..*[^0])0*e/;function He(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!$e(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Ce(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Ze.call(t,qe,"$1e"),t=Ze.call(t,Be,"e"),t=Ze.call(t,Ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ze.call(t,ze,"e+0$1"),t=Ze.call(t,We,"e-0$1"),e.alternate&&(t=Ze.call(t,De,"$1."),t=Ze.call(t,Ue,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Xe.call(e.specifier)?Xe.call(t):Me.call(t)}function Je(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ke(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Je(n):Je(n)+e}var Qe=String.fromCharCode,er=isNaN,rr=Array.isArray;function tr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function nr(e){var r,t,n,i,o,a,u,c,l;if(!rr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(Le(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=tr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,er(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,er(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ge(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!er(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=er(o)?String(n.arg):Qe(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=He(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ne(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ke(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function or(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ar(e){var r,t,n,i;for(t=[],i=0,n=ir.exec(e);n;)(r=e.slice(i,ir.lastIndex-n[0].length)).length&&t.push(r),t.push(or(n)),i=ir.lastIndex,n=ir.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function ur(e){return"string"==typeof e}function cr(e){var r,t,n;if(!ur(e))throw new TypeError(cr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ar(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return nr.apply(null,t)}var lr=["posix","win32"];function sr(e){if(arguments.length>0&&!Ve(lr,e))throw new Error(cr('invalid argument. Must be one of the following: "%s". Value: `%s`.',lr.join('", "'),e));return"win32"===e||fe?/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+|)(?:[\\\/]|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/:/^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/}var fr=fe?S:T;return l(sr,"REGEXP",fr),l(sr,"REGEXP_POSIX",T),l(sr,"REGEXP_WIN32",S),function(e){if(!s(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0jiBs",e));return fr.exec(e)[1]}}));
//# sourceMappingURL=browser.js.map