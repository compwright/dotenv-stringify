const quote = /[\s"']/

function stringify (obj) {
  if (typeof obj !== 'object') {
    throw new Error('stringify() expects an object')
  }

  return Object.keys(obj).map(key => {
    const val = obj[key]

    let strval = ''

    switch (typeof val) {
      case 'string':
        try {
          JSON.parse(val)
          strval = val
        } catch (e) {
          strval = quote.test(val) ? JSON.stringify(val) : val
        }
        break

      case 'boolean':
      case 'number':
        strval = String(val)
        break

      case 'undefined':
        strval = ''
        break

      case 'object':
        if (val !== null) {
          strval = JSON.stringify(val)
        }
        break
    }

    return `${key}=${strval}`
  }).join('\n')
}

module.exports = stringify
