/*
* ------------------------------------------
* @description
* 深度克隆
* ------------------------------------------
* @version 1.0.0
* @createdAt 
* @author vincent lau/413893093@qq.com
*/

/**
 * 深克隆
 * 函数返回原函数
 * @param obj
 * @returns {*}
 */
function deepClone (obj) {
  let newObj
  if (typeof obj !== 'object') {
    newObj = obj
  } else if (obj === null) {
    newObj = obj
  } else {
    newObj = obj.constructor === Array ? [] : {}
    for (let i in obj) {
      newObj[i] = typeof obj[i] === 'object'
        ? deepClone(obj[i])
        : obj[i]
    }
  }
  return newObj
}

let
  objTest = {
    a: 1,
    b: 2
  },
  arrTest = [1,3,2],
  objArr = {
    o: objTest,
    a: arrTest,
    n: null
  },
  f1 = function (b) {
    1+1
  },
  objArrFun = {
    o: objTest,
    a: arrTest,
    f: f1
  },
  test

test = deepClone(objTest)
console.log('objTest:',test)
test.a = 2
console.log('objTest:',test, objTest)

test = deepClone(arrTest)
console.log('objTest:',test)
test[1] = 1000
console.log('objTest:',test, arrTest)

test = deepClone(objArr)
console.log('objArr:',test)
test.o.a = 'qasda'
test.a[1] = 10000
console.log('objArr:',test, objArr)

test = deepClone(objArrFun)
console.log('objArrFun:',test)
test.o.a = '123123899'
test.a[1] = 99999999
console.log('objArrFun:',test, objArrFun)

/* OUTPUTS
objTest: { a: 1, b: 2 }
objTest: { a: 2, b: 2 } { a: 1, b: 2 }
objTest: [ 1, 3, 2 ]
objTest: [ 1, 1000, 2 ] [ 1, 3, 2 ]
objArr: { o: { a: 1, b: 2 }, a: [ 1, 3, 2 ], n: null }
objArr: { o: { a: 'qasda', b: 2 }, a: [ 1, 10000, 2 ], n: null } { o: { a: 1, b: 2 }, a: [ 1, 3, 2 ], n: null }
objArrFun: { o: { a: 1, b: 2 }, a: [ 1, 3, 2 ], f: [Function: f1] }
objArrFun: { o: { a: '123123899', b: 2 },
  a: [ 1, 99999999, 2 ],
  f: [Function: f1] } { o: { a: 1, b: 2 }, a: [ 1, 3, 2 ], f: [Function: f1] }
* */