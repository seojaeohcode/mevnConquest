// 구문 생략
const name = "종선"
const age = "27"
const job = "회장"
const data_used_ES6 = {name, age, job}
const data_not_used_ES6 = {"name" : name, "age" : age, "job" : job}
console.log(data_used_ES6)
console.log(data_not_used_ES6)


//spread 연산자(...)를 통해 rest매개변수, 배열통합, Math.max값에 매개변수 할당 객체 복사가능
// 1.rest 매개변수
const a = (b, ...rest)=>{
    console.log(rest)
}
a(1,2,3)

const b = [1,2,3]
const a2 = (a,b,c)=>{
    console.log(a,b,c)
}
a2(...b)

const a3 = [1,2,3,4,5]
const [head, ...rest] = a3
console.log(head, rest)

// 2.배열통합
/* 
concat vs spread
배열 수가 많을 수록 concat
배열 수가 적을 수록 spread
https://jsbench.me/ => 성능테스트
*/
const ar1 = [1,2,3]
const ar2 = [4,5,6]
const ar3 = [...ar1, ...ar2]

// 3.Max함수 매개변수
const m1 = [1,2,3,4]
Math.max(...m1)

// 4.객체 복사
const p1 = {"name":"주홍철", "age":27}
const p2 = {...p1, "key":1}
console.log(b)

// 구조분해할당
/* 
배열이나 객체의 속성을 해제하여 
그 값을 개별 변수에 쉽게 담는것.
=> swap, 배열의 요소, 객체의 value를 쉽게 담을 수 있음.
*/

// 1.swap
const arr = [1, 2, 3, 4, 5];

console.log("# swap 전 arr", arr);
[arr[1], arr[2]] = [arr[2], arr[1]];
console.log("# swap 후 arr", arr);

// 2.배열의 요소 쉽게 담기
const element = () => [1,2,3,4]
const [e1,e2,e3] = element()
console.log(e1,e2,e3)

// 객체의 value를 쉽게 담기
// *객체의 값을 참조하려면 객체의 키와 로그안에 출력할 변수의 이름 동일
const person = () => ({"네임":"최주원", "잡":"마케터"})
//const person = () => {return{"name":"최주원", "job":"마케터"}}
const {네임} = person()
console.log(네임)

const num = [1,2]
const [num2,num3] = num
console.log(num2,num3)

const x = {"이름":"큰돌", "노래":"자취방좋아"}
const {이름, 노래} = x
console.log(이름, 노래)