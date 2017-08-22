const food = {
  init: function (type) {
    this.type = type
  },
  eat: function(){
    console.log('you ate the ' + this.type)
  }
}

const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()

const carrot = Object.create(food)
carrot.init('carrot')
carrot.eat()


// type checking




console.log('waffle is a prototype of food',
  food.isPrototypeOf(waffle))
console.log('integer is a prototype of food',
  food.isPrototypeOf(123948))
console.log('carrot is a prototype of food',
  food.isPrototypeOf(carrot))
