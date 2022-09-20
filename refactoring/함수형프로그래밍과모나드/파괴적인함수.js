/*splice는 배열을 파괴함. 최대한 원래의 변수가 그대로 있어야 한다.
이렇게 원본을 파괴하는 함수를 비순수함수라고 한다. 
reverse sort fill pop push shift unshift splice등이 있음.
*/
const a = [1,2,3,4,5]
let b = a.slice(1)
console.log(a,b)
b = a.splice(1)
console.log(a,b)