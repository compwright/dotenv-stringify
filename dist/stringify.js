'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.stringify = stringify;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quote = /[\s\"\']/;

function stringify(obj) {
	if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
		throw new Error('stringify() expects an object');
	}

	return (0, _entries2.default)(obj).map(function (_ref) {
		var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
		    key = _ref2[0],
		    val = _ref2[1];

		var strval = void 0;

		switch (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) {
			case 'string':
				try {
					JSON.parse(val);
					strval = val;
				} catch (e) {
					strval = quote.test(val) ? (0, _stringify2.default)(val) : val;
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
					strval = (0, _stringify2.default)(val);
				}
				break;
		}

		return key + '=' + strval;
	}).join("\n");
}

exports.default = stringify;

//# sourceMappingURL=stringify.js.map