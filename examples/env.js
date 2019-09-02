require('dotenv').config();
const stringify = require('../dist/es5');

console.log(stringify(process.env));
