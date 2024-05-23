import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import stringify from './index'

const envStr = fs.readFileSync(path.resolve('./resources/envvars')).toString().trim()
const envStrNorm = fs.readFileSync(path.resolve('./resources/envvars-normalized')).toString().trim()
const envObj = dotenv.parse(envStr)

describe('stringify()', () => {
  test('produces the expected result', () => {
    const str = stringify(envObj)
    expect(typeof str).toBe('string')
    expect(str).toEqual(envStrNorm)
    expect(dotenv.parse(str)).toEqual(envObj)
  })
})
