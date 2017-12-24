/*
* ------------------------------------------
* @description
* 
* ------------------------------------------
* @version 1.0.0
* @createdAt 
* @author vincent lau/413893093@qq.com
*/

function* helloWord () {
  console.log('1')
  yield 'hello'
  console.log('2')
  yield 'world'
  console.log('3')
  console.log('Hello' + (yield 123));
  return 'ending'
}

let sayHello = helloWord()
console.log('start')
console.log(sayHello)
console.log(sayHello.next())
console.log(999)
console.log(sayHello.next())
console.log(sayHello.next())
console.log(sayHello.next())

