/* eslint-env mocha */

const assert = require('assert')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const stringify = require('../src')

const envStr = fs.readFileSync(path.resolve('./tests/envvars')).toString()
const envStrNorm = fs.readFileSync(path.resolve('./tests/envvars-normalized')).toString()
const envObj = dotenv.parse(envStr)

describe('stringify()', function () {
  it('produces the expected result', function () {
    const str = stringify(envObj)
    assert.strictEqual('string', typeof str)
    assert.strictEqual(envStrNorm, str)

    const result = dotenv.parse(str)
    assert.deepStrictEqual(envObj, result)
  })
})
