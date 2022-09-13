/* 
{"이름":"큰돌"} 이런 형태를 json object라고 부름.

[{"이름":"큰돌"}, {"이름":"큰돌"}] 이런 식으로 배열에 json object가 담긴 형태를 json array라고 부름.

json 형태의 객체는 object로 먼저 만들어야 key를 통해 value를 추출
const a = '{"이름":"큰돌"}' -> 객체가 문자열로 감싸져 있을 때
JSON.parse(obj)메서드를 이용함.
반대로 문자열을 만들 때 JSON.stringify(obj)라는 메서드를 이용

*JSON에는 주석을 넣지 않는 것을 권장
*/

let a = '{"이름":"큰돌"}'
console.log(typeof a)
console.log(a.이름)
a = JSON.parse(a)
console.log(typeof a)
console.log(a.이름)
//string undefined Object 큰돌
