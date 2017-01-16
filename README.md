# array-intersperse

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