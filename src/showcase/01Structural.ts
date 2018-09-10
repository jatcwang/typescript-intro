interface Animal {
  type: string
  doSomething: () => string
}

function helloAnimal(animal: Animal): void {
  console.log(`Hello ${animal.type}. ${animal.type} ${animal.doSomething()}`)
}

helloAnimal({
  type: 'Dog',
  doSomething: () => {
    return 'did a zoomie.'
  }
})

// helloAnimal({
//   type: 'Turtle'
// })

// Typechecking is done on a structural level. There is no Nominal Typing
class Car {
  readonly type: string
  readonly doSomething: () => string
  readonly wheels: number

  constructor(type: string, doSomething: () => string, wheels: number) {
    this.type = type
    this.doSomething = doSomething
    this.wheels = wheels
  }
}

const car: Car = {
  type: 'Toyota',
  doSomething: () => "rolled down the hill",
  wheels: 4

}

// Valid, because 'type' and 'doSomething' property exists for car
helloAnimal(car)

// If you really want nominal typing, you can simulate it as presented in
