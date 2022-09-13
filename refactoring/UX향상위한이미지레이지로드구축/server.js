/* 
UX: 사용자 경험
UX를 향상 => 속도측면에서 주로 얘기함.
10MB API요청 10개 / 100MB API요청 1개 
전자가 보통 더 느림 
=> 서버요청수는 최대한 줄여야 함. & 요청 용량 최소화
고화질의 이미지를 로드해야하는 경우 이미지가 모두 로드 될 때까지의 시간을 기다려야해서 UX가 나빠짐.

그래서 사용자가 보고 있는 이미지만을 효율적으로 로드해서 UX를 향상시키는 것이 이미지 레이지 로드
*/

/* 
Express
=> Node.js의 프레임워크

1.dist라는 폴더에 있는 정적자원을 사용자에게 제공하는 서버 만듦.
2.express,static에 정적 자원을 제공할 경로, path를 집어넣으면
그 경로에 있는 자원을 사용자들에게 제공.
3.dist가 아닌 public이라는 폴더를 제공하면 매개변수에 
const _path = path.join(__dirname, './public')
*/
const express = require('express')
const path = require('path')
const app = express()
const _path = path.join(__dirname, './dist')
app.use('/', express.static(_path))
app.listen(12010, ()=>{
    console.log('lazy 이미지서버 : 12010시작 http://127.0.0.1:12010')
})
