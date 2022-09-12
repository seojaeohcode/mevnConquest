/*
좋은 프로젝트의 핵심 = 모듈화
클라이언트 = ESM(ECMAScript module)
서버 = CJS(CommonJS)

하나의 시스템을 만들 때
여러 개의 작은 단위들로 이루어진 모듈을 조합하는 설계를 의미
기능별로 파일을 분리하거나 역할별로 나눠서
유지보수성 향상

CJS는 webpack 번들링 => 사이즈가 커지는 단점 존재
따라서 CJS는 번들링을 하지 않는 모듈에만 사용

npm init => packge.json파일 생성

좋은 모듈화는 느슨하게 결합된 모듈화다.
*/

const cook = {
    create : recipe => recipe.start()
}
const pasta = {
    start : () => console.log("파스타시작")
}
const steak = {
    start : () => console.log("스테이크시작")
}
cook.create(pasta)
cook.create(steak)