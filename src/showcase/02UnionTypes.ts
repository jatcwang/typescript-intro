
type Option = 'up' | 'down'
// You can do this with any Literal Types e.g. true, false, 1 ,2 ,3...

function select(opt: Option): string {
  switch (opt) {
    case 'up':
      return 'GO UP!'
    case 'down':
      return 'GO DOWN!'
  }
}

console.log(select('up'))
console.log(select('down'))
// select('UP')

console.log("== handling undefined == ")

// Strict nullable types, enabled by --strictNullChecks compiler
function handleIndecisiveUser(opt: Option | undefined) {
  if (opt !== undefined) {
    return select(opt)
  }
  else
    return 'Choose Something!'
}


console.log(handleIndecisiveUser('up'))
console.log(handleIndecisiveUser(undefined))
// console.log(handleIndecisiveUser(null))

