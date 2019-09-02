# dotenv-stringify

[![Build Status](https://travis-ci.org/compwright/dotenv-stringify.png?branch=master)](https://travis-ci.org/compwright/dotenv-stringify)
[![Dependency Status](https://img.shields.io/david/compwright/dotenv-stringify.svg?style=flat-square)](https://david-dm.org/compwright/dotenv-stringify)
[![Download Status](https://img.shields.io/npm/dm/dotenv-stringify.svg?style=flat-square)](https://www.npmjs.com/package/dotenv-stringify)

Compose a envfile string from an object, per the [motdotla/dotenv](https://github.com/motdotla/dotenv/) parser specifications. Objects stringified using this package will be parsable by `dotenv.parse()`.

## Installation

```
$ npm install dotenv-stringify
```

## Usage

Node.js 8+:

```js
const fs = require('fs');
const { stringify } = require('dotenv-stringify');
const envstr = stringify(process.env);
fs.writeFileSync('.env', envstr);
```

In-browser or older Node.js environments:

```js
var fs = require('fs');
var stringify = require('dotenv-stringify/dist/es5').stringify;
var envstr = stringify(process.env);
fs.writeFileSync('.env', envstr);
```

## License

MIT License
