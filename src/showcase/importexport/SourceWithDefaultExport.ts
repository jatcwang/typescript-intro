export default function defaultExported() {
  console.log("Default Exported from SourceWithDefaultExport")
}

export function unused() {
  console.log('asdf')
}

// The above export keywords are equivalent to the following commonjs export object
// export = {
//   unused: unused,
//   default: defaultExported
// }