dotfile-config
---------------

[![NPM version][npm-image]][npm-url]
[![Gittip][gittip-image]][gittip-url]

[npm-image]: https://img.shields.io/npm/v/dotfile-config.svg?style=flat
[npm-url]: https://npmjs.org/package/dotfile-config
[travis-image]: https://img.shields.io/travis/node-modules/dotfile-config.svg?style=flat
[travis-url]: https://travis-ci.org/node-modules/dotfile-config
[coveralls-image]: https://img.shields.io/coveralls/node-modules/dotfile-config.svg?style=flat
[coveralls-url]: https://coveralls.io/r/node-modules/dotfile-config?branch=master
[gittip-image]: https://img.shields.io/gittip/dead-horse.svg?style=flat
[gittip-url]: https://www.gittip.com/dead-horse/
[david-image]: https://img.shields.io/david/node-modules/dotfile-config.svg?style=flat
[david-url]: https://david-dm.org/node-modules/dotfile-config

get and set dotfile as a json config

## Installation

```bash
$ npm install dotfile-config
```

## Usage

```
var config = require('dotfile-config')('.configrc');

config.set({
  foo: 'bar'
});

console.log(config.get()); // {foo: 'bar'}
```

### License

MIT
