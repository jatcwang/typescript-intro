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
