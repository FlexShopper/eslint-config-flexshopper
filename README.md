[![Npm Version][npm-badge]][npm-url]
[![Dependencies][david-badge]][david-url]
[![Dev dependencies][david-dev-badge]][david-url]
<!-- [![Build Status][travis-badge]][travis-url] -->

[![NPM](https://nodei.co/npm/@flexshopper/eslint-config-flexshopper.png)](https://nodei.co/npm/%40flexshopper%2Feslint-config-flexshopper)

[npm-badge]: https://badge.fury.io/js/%40flexshopper%2Feslint-config-flexshopper.svg
[npm-url]: https://badge.fury.io/js/eslint-config-flexshopper
[travis-badge]: https://travis-ci.org/flexshopper/eslint-config-flexshopper.svg?branch=master
[travis-url]: https://travis-ci.org/flexshopper/eslint-config-flexshopper
[david-badge]: https://david-dm.org/flexshopper/eslint-config-flexshopper.svg
[david-dev-badge]: https://david-dm.org/flexshopper/eslint-config-flexshopper/dev-status.svg
[david-url]: https://david-dm.org/flexshopper/eslint-config-flexshopper
[david-dev-url]: https://david-dm.org/flexshopper/eslint-config-flexshopper#info=devDependencies

## Usage

- `npm install --save-dev @flexshopper/eslint-config-flexshopper`

- check what `npm version` do you have. `npm -v` in the console.

If you are using `npm v3` you need to install `peerDependencies` manually.

- Then, extend the config in `package.json`:

```json
"eslintConfig": {
    "extends": "@flexshopper/flexshopper"
}
```

### License

(The MIT License)

Copyright (c) 2015-2016 FlexShopper L.L.C

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.