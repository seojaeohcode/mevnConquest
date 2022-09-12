// ESM
// 1번 import
// import a from './a.js'

// 2번 import
// import {s1,s2,s3} from './a.js'
// console.log(s1,s2,s3)

// 3번 import
// import {b,c} from './a.js'
// console.log(b,c)

// CJS 
// 1번 import
const a = require('./a.js')
console.log(a.sayHi("MEVN"))
console.log(a.value)