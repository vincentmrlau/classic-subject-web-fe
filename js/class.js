/*
* ------------------------------------------
* @description
* CLASS IN ES5 & ES6
* ------------------------------------------
* @version 1.0.0
* @createdAt 
* @author vincent lau/413893093@qq.com
*/

/*
* @@@@@@@@@@@@@@@@@@@@@@@@@@@
* CLASS IN ES6
* */
let Animal = function (name) {
  this.name = name
}

Animal.prototype.sayName = function () {
  console.log(`my name is:${this.name}`)
}

//extend
let Dog = function (name) {
  Animal.apply(this, arguments)
}
Dog.prototype = new Animal()
Dog.prototype.sayKind = function () {
  console.log(`i am a dog`)
}

let dog1 = new Dog('dog1')
console.log(dog1)
dog1.sayName()
dog1.sayKind()

/*
* class in ES6
* */

let People = class People {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  group () {
    this.age ++
    console.log(this.name,this.age)
  }
  static toBeDog () {
    this.name = null
  }
}

//extend
let Coder = class Coder extends People {
  constructor (language, name, age) {
    super(name, age)//继承
    this.language = language
  }
}

let vincent = new Coder('js', 'vincent', 18)
console.log(vincent)
vincent.group()
// vincent.toBeDog()// error