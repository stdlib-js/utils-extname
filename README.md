<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Filename Extension

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a filename extension.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-extname
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var extname = require( '@stdlib/utils-extname' );
```

#### extname( filename )

Returns a filename extension.

```javascript
var ext = extname( 'index.js' );
// returns '.js'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var statSync = require( 'fs' ).statSync;
var path = require( 'path' );
var readDir = require( '@stdlib/fs-read-dir' ).sync;
var extname = require( '@stdlib/utils-extname' );

var files;
var fpath;
var base;
var stat;
var ext;
var i;

base = path.resolve( __dirname, '..' );
files = readDir( base );

for ( i = 0; i < files.length; i++ ) {
    fpath = path.join( base, files[ i ] );
    stat = statSync( fpath );
    if ( !stat.isDirectory() ) {
        ext = extname( fpath );
        console.log( '%s --> %s', fpath, ext || '(no ext)' );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/dirname`][@stdlib/utils/dirname]</span><span class="delimiter">: </span><span class="description">return a directory name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-extname.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-extname

[test-image]: https://github.com/stdlib-js/utils-extname/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-extname/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-extname/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-extname?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-extname.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-extname/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-extname/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-extname/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-extname/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-extname/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/dirname]: https://github.com/stdlib-js/utils-dirname

<!-- </related-links> -->

</section>

<!-- /.links -->
