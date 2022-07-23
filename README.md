# defaults-deep [![NPM version](https://badge.fury.io/js/defaults-deep.svg)](http://badge.fury.io/js/defaults-deep)  [![Build Status](https://travis-ci.org/jonschlinkert/defaults-deep.svg)](https://travis-ci.org/jonschlinkert/defaults-deep)

> Like `extend` but recursively copies only the missing properties/values to the target object.

## Install

Install with [npm](https://www.npmjs.com/)

```shell
$ npm i defaults-deep-safe
```

Install with [yarn](https://classic.yarnpkg.com/lang/en/)

```sh
$ yarn add defaults-deep-safe
```

## Usage

```js
import defaults from 'defaults-deep-safe'

defaults({a: {one: 'one'}}, {a: {two: 'two'}})
//=> {a: {one: 'one', two: 'two'}};
```

## Related projects

* [assign-deep](https://github.com/jonschlinkert/assign-deep): Deeply assign the enumerable properties of source objects to a destination object. If a callback… [more](https://github.com/jonschlinkert/assign-deep)
* [extend-shallow](https://github.com/jonschlinkert/extend-shallow): Extend an object with the properties of additional objects. node.js/javascript util.
* [merge-deep](https://github.com/jonschlinkert/merge-deep): Recursively merge values in a javascript object.
* [mixin-deep](https://github.com/jonschlinkert/mixin-deep): Deeply mix the properties of objects into the first object. Like merge-deep, but doesn't clone.
* [omit-deep](https://github.com/jonschlinkert/omit-deep): Recursively omit the given keys from an object.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/defaults-deep/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Bogdan Kostyuk**
> added vulnerability fix

## License

Copyright © 2022 Bogdan Kostyuk
Released under the MIT license.
