# array-intersperse

[![Latest Version](https://img.shields.io/github/release/aurimasniekis/array-intersperse.svg?style=flat-square)]
(https://github.com/aurimasniekis/array-intersperse/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)]
(LICENSE)
[![Build Status](https://img.shields.io/travis/aurimasniekis/array-intersperse.svg?style=flat-square)]
(https://travis-ci.org/aurimasniekis/array-intersperse)
[![Total Downloads](https://img.shields.io/npm/dt/array-intersperse.svg?style=flat-square)](https://www.npmjs.com/package/array-intersperse)

Extention for Array to add method `intersperse` for adding elements in between elements in array.


## Installation

```bash
$ npm install --save array-intersperse
```

## Example

```js
require('array-intersperse');
var arr = [1, 2, 3].intersperse('a');

console.log(arr) // [1, 'a', 2, 'a', 3]
```
