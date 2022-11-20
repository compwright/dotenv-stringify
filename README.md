# dotenv-stringify

[![Build Status](https://app.travis-ci.com/compwright/dotenv-stringify.svg?branch=master)](https://app.travis-ci.com/github/compwright/dotenv-stringify)
[![Download Status](https://img.shields.io/npm/dm/dotenv-stringify.svg?style=flat-square)](https://www.npmjs.com/package/dotenv-stringify)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

Compose a envfile string from an object, per the [motdotla/dotenv](https://github.com/motdotla/dotenv/) parser specifications. Objects stringified using this package will be parsable by `dotenv.parse()`.

## Installation

```
$ npm install dotenv-stringify
```

## Usage

```js
import fs from 'fs'
import stringify from 'dotenv-stringify'
const envstr = stringify(process.env);
fs.writeFileSync('.env', envstr);
```

## License

MIT License
