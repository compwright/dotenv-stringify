# dotenv-stringify
Compose a envfile string from an object, per the [motdotla/dotenv](https://github.com/motdotla/dotenv/) parser specifications. Objects stringified using this package will be parsable by `dotenv.parse()`.

## Installation

```
$ npm install dotenv-stringify
```

## Usage

```js
var fs = require('fs');
var stringify = require('dotenv-stringify');
var envstr = stringify(process.env);
fs.writeFileSync('.env', envstr);
```

## Contributions

Install dev dependencies:

```
$ npm install
```

Run tests:

```
$ npm test
```

Build files:

```
$ npm run build
```

## License

MIT License
