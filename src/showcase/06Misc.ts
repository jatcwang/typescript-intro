// ====================
// Capturing the type of a variable
// ====================

const x = {
  str: 'asdf'
}

type TypeOfX = typeof x // { str: string }

// ====================
// Intersection types
// ====================

interface HasAge {
  age: number
}

interface HasName {
  name: string
}

type Person = HasAge & HasName
const p: Person = {
  age: 18,
  name: 'John'
}

// ====================
// (Unsafe) Casting
// ====================

function guaranteedString(str: any) {
  (str as string).toUpperCase()
}

// ====================
// Typing an object where all the values are of the same type
// ====================

interface StringMap {
  [key: string]: string
}

const stringMap: StringMap = {
  'asdf': 'asdf'
}