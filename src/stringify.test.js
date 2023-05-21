import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import stringify from './index'

const envStr = fs.readFileSync(path.resolve('./resources/envvars')).toString()
const envStrNorm = fs.readFileSync(path.resolve('./resources/envvars-normalized')).toString()
const envObj = dotenv.parse(envStr)

describe('stringify()', () => {
  test('it can work with JSON values', () => {
    expect(
      stringify({ JSON_MULTILINE: JSON.stringify({ a: 'b', c: 'd' }, null, 2) })
    ).toEqual('JSON_MULTILINE={"a":"b","c":"d"}')
  })

  test('produces the expected result', () => {
    const str = stringify(envObj)
    expect(typeof str).toBe('string')
    expect(str).toEqual(envStrNorm)
    expect(dotenv.parse(str)).toEqual(envObj)
  })
})
