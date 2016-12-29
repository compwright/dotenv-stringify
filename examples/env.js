var dotenv = require('dotenv');
var stringify = require('../dist/stringify').default;

dotenv.config();

console.log(stringify(process.env));
