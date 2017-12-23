/*
* ------------------------------------------
* @description
* usage of definedProperty in ES5
* ------------------------------------------
* @version 1.0.0
* @createdAt 
* @author vincent lau/413893093@qq.com
*/

/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

Object.defineProperty(obj, prop, descriptor)

obj
要在其上定义属性的对象。
prop
要定义或修改的属性的名称。
descriptor
将被定义或修改的属性描述符

descriptor:
configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
enumerable
当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
数据描述符同时具有以下可选键值：

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
writable
当且仅当该属性的writable为true时，该属性才能被赋值运算符改变。默认为 false。
存取描述符同时具有以下可选键值：

get
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。
set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。
* */

/**
 * 定义一个代码狗的类
 */
class Coder {
  constructor (name, money) {
    let remainMoney = money
    this.name = name
    Object.defineProperty(this, 'money', {
      configurable: true,
      enumerable: true,
      // writable: true,
      // value: remainMoney,// 以前没有钱
      get: function () {
        console.log('get', remainMoney)
        return remainMoney
      },
      set: function (value) {
        console.log(value)
        remainMoney += (value - 10) //老板克扣10块
      }
    })
  }
  display(){
    console.log(this.name,this.money)
  }
}

let vincent = new Coder('vincent', 0)
vincent.display()

let boss = new Coder('boss', 1000)
boss.display()

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (input) => {
  console.log(`add money: ${input}`)
  vincent.money = input * 1
  boss.money = input *1 + 10
  vincent.display()
  boss.display()
});
