// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import{REGEXP as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-extname@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){if(!e(r))throw new TypeError(s("invalid argument. Filename must be a string. Value: `%s`.",r));return t.exec(r)[1]}export{r as default};
//# sourceMappingURL=index.mjs.map
