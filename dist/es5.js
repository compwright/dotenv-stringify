"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var quote = /[\s"']/;

function stringify(obj) {
  if (_typeof(obj) !== 'object') {
    throw new Error('stringify() expects an object');
  }

  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    var strval = '';

    switch (_typeof(val)) {
      case 'string':
        try {
          JSON.parse(val);
          strval = val;
        } catch (e) {
          strval = quote.test(val) ? JSON.stringify(val) : val;
        }

        break;

      case 'boolean':
      case 'number':
        strval = String(val);
        break;

      case 'undefined':
        strval = '';
        break;

      case 'object':
        if (val !== null) {
          strval = JSON.stringify(val);
        }

        break;
    }

    return "".concat(key, "=").concat(strval);
  }).join('\n');
}

module.exports = stringify;

//# sourceMappingURL=es5.js.map