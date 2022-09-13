/* 
실수 => 정수형 
parseInt
~~ = 비트 전체를 뒤집는 ~연산을 2번 실행한 것. => 정수형으로 반환
정수형 = 소수점을 버려서 만들 수 있음.
*/

// parseInt vs ~~ parseInt < 비트연산~~ (88% 더 빠름)
for (let i = 0; i < 100000; i++) {
    let a = 123.456789
    b = parseInt(a)
}

for (let i = 0; i < 100000; i++) {
    let a = 123.456789
    b = ~~(a)
}