/* 
foreach
배열에서 그 안에 있는 요소를 이용하여 변경시키는 등 무언가를 할 때 사용.
foreach가 map filter reduce보다 성능이 뛰어남
배열요소 각각에 어떠한 작용을 하고 싶다면 foreach사용

map
배열을 이용해 새로운 배열을 만들 때 사용

filter
배열을 이용해 조건에 맞는 원소로 배열을 만들 때 사용

reduce
배열을 통해 하나의 계산된 값을 추출해낼 때 사용
*/

const func1 = (e, index) =>{
    console.log(`${index}번째 요소는 ${e}입니다.`)
}

const func2 = (e, index) => e*2
const func3 = (prev, curr, index) => prev+curr
const func4 = e => e%2

const a = [1,2,3,4,5].forEach(func1)
console.log(a)
const b = [1,2,3,4,5].map(func2)
console.log(b)
const c = [1,2,3,4,5].reduce(func3)
console.log(c)
const d = [1,2,3,4,5].filter(e=>e%2)
console.log(d)