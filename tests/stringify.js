'use strict';

import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import test from 'tape';
import stringify from '../src/stringify';

const envStr = fs.readFileSync(path.resolve('./tests/envvars')).toString();
const envStrNorm = fs.readFileSync(path.resolve('./tests/envvars-normalized')).toString();
const envObj = dotenv.parse(envStr);

test('stringify', t => {
	let str = stringify(envObj);
	t.equal('string', typeof str);
	t.equal(envStrNorm, str);

	let result = dotenv.parse(str);
	t.equal(envObj.SIMPLE, result.SIMPLE);
	t.equal(envObj.SIMPLE_QUOTED, result.SIMPLE_QUOTED);
	t.equal(envObj.SIMPLE_DOUBLE_QUOTED, result.SIMPLE_DOUBLE_QUOTED);
	t.equal(envObj.BOOLEAN_TRUE, result.BOOLEAN_TRUE);
	t.equal(envObj.BOOLEAN_FALSE, result.BOOLEAN_FALSE);
	t.equal(envObj.INT, result.INT);
	t.equal(envObj.FLOAT, result.FLOAT);
	t.equal(envObj.EMPTY, result.EMPTY);
	t.equal(envObj.EMPTY_QUOTED, result.EMPTY_QUOTED);
	t.equal(envObj.EMPTY_DOUBLE_QUOTED, result.EMPTY_DOUBLE_QUOTED);
	t.equal(envObj.JSON, result.JSON);
	t.equal(envObj.MULTILINE, result.MULTILINE);

	t.end();
});
