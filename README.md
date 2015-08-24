# node-iptools [![NPM version](https://badge.fury.io/js/node-iptools.svg)](http://badge.fury.io/js/node-iptools) [![Build Status](https://travis-ci.org/j3lte/node-iptools.svg?branch=master)](https://travis-ci.org/j3lte/node-iptools)

> IP conversion tool for nodejs

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i node-iptools --save
```

## Usage

```js
var ip = require('node-iptools');
console.log(ip(1).toIp());          // '0.0.0.1'
console.log(ip('0.0.0.1').toInt()); // 1
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/j3lte/node-iptools/issues/new)

## Author

**J.W. Lagendijk**

+ [github/j3lte](https://github.com/j3lte)
+ [twitter/j3lte](http://twitter.com/j3lte)

## License

Copyright © 2015-2015 J.W. Lagendijk
Released under the MIT license.
