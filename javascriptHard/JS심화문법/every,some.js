// every 모든 값 체크 
// some 1개만 있어도 ok
const numbers = [1,3,5,4]
const isAllOdd = numbers.every(e=>e%2)
const isSomeOdd = numbers.some(e=>e%2)
console.log(isAllOdd, isSomeOdd)