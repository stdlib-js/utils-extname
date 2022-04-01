// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extname@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=e.isPrimitive,i=t.REGEXP,n=s;var m=function(e){if(!r(e))throw new TypeError(n("invalid argument. Filename must be a string. Value: `%s`.",e));return i.exec(e)[1]};export{m as default};
//# sourceMappingURL=index.mjs.map
