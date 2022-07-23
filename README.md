# @logotip4ik\_/defaults-deep

**NOTE:** This is a fork of original [defaults-deep](https://github.com/jonschlinkert/defaults-deep) but with vulnerability fixes and hopefully better maintenance 👀

> Like `extend` but recursively copies only the missing properties/values to the target object.

## Install

Install with [npm](https://www.npmjs.com/)

```shell
$ npm i @logotip4ik_/defaults-deep
```

Install with [yarn](https://classic.yarnpkg.com/lang/en/)

```sh
$ yarn add @logotip4ik_/defaults-deep
```

## Usage

```js
import defaults from "@logotip4ik_/defaults-deep";

defaults({ a: { one: "one" } }, { a: { two: "two" } });
//=> {a: {one: 'one', two: 'two'}};
```

## Related projects

- [assign-deep](https://github.com/jonschlinkert/assign-deep): Deeply assign the enumerable properties of source objects to a destination object. If a callback… [more](https://github.com/jonschlinkert/assign-deep)
- [extend-shallow](https://github.com/jonschlinkert/extend-shallow): Extend an object with the properties of additional objects. node.js/javascript util.
- [merge-deep](https://github.com/jonschlinkert/merge-deep): Recursively merge values in a javascript object.
- [mixin-deep](https://github.com/jonschlinkert/mixin-deep): Deeply mix the properties of objects into the first object. Like merge-deep, but doesn't clone.
- [omit-deep](https://github.com/jonschlinkert/omit-deep): Recursively omit the given keys from an object.

## Running tests

Install dev dependencies and stub the project ([more about stubbing on antfu.me](https://antfu.me/posts/publish-esm-and-cjs#stubbing)):

```sh
$ yarn

$ yarn build:stub

$ yarn test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/logotip4ik/defaults-deep-safe/issues)

## Author

**Jon Schlinkert**

- [github/jonschlinkert](https://github.com/jonschlinkert)
- [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Bogdan Kostyuk**

> added vulnerability fix

- [github/logotip4ik](https://github.com/logotip4ik)

## License

Copyright © 2022 Bogdan Kostyuk
Released under the MIT license.
