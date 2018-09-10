// Note: This assumes strictNullChecks option is enabled (which it should for new codebases)

interface Optional {
  str: string
  int?: number
}

const o: Optional = {
  str: 'adsf'
}

console.log(o.int === undefined) // true


function optionalParam(a: string, b?: number) {
  return ''
}

optionalParam('asdf') // b is undefined
optionalParam('asdf', 12)
