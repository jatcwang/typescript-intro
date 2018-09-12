# Typescript, A Whirlwind Tour

## Agenda

* Quick intro to Typescript 
  * Type system
  * Ecosystem
  
* What's Possible
* Recommendations & Other tips

## What is Typescript

"A typed superset of Javascript that compiles to plain JavaScript"

* Language designed to make common patterns in JS safe
* Compiles to easy to read JS
* Committed to follow the JS evolution (decorators, async await, etc etc)

## Type System

* Runtime behaviour is exactly the same as JS (e.g. == vs ===)
* Fully structural
  * "If it quacks like a duck...." [DEMO]
* Union Types & Discriminated Unions [DEMO]
* Nullability [DEMO]
* Enums [DEMO]
* Type inference is in general worse than Scala. If in doubt, put in type annotations
* Support all JS features like destructuring, object spread, async await, generators, etc


## Using 3rd Party libraries

(yarn is an npm alternative from FB/Google focused on speed and reproducible builds)
```
yarn add react
yarn add @types/react --dev
```

* If a library is written in typescript or provides their own typings, the types will be pulled automatically. (You don't need to install `@types/[lib]`)
* [How to include your own overrides for typings](https://stackoverflow.com/questions/40322788/how-to-overwrite-incorrect-typescript-type-definition-installed-via-types-packa?rq=1)
* [More explanation about where TS find type definitions](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types)

[DEMO] about import/export

## Recommendations

* Annotate your types
  * Documentation (without needing to crack open your IDE)
  * Better type errors
* Only use `undefined`, use `null` if you must
  * Adopted by many TS codebases including the TS compiler itself
  * Simplifies checking: `if (value === undefined)`
* Turn on the "strict" flag
  * includes `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes` and more flags automatically as TS improves
* Ask for help if you feel a bit stuck :)

## Resources
* [Typescript Deep Dive](https://basarat.gitbooks.io/typescript/content/)
* [Online Typescript Playground](https://basarat.gitbooks.io/typescript/content/)
  
 
