// 제너레이터 => 웹 스크래핑
/* 
웹 스크래핑(웹 크롤링)
웹 페이지로부터 원하는 정보를 추출하는 기법

웹 스크래핑 2가지 방법
1.웹사이트에 요청을 보내서 하는 방법
2.실제 웹브라우저 드라이버를 이용해 마치 유저가
마우스로 클릭을 한다거나 하는 드으이 행위를 위조해서 하는 방법

ex)무한스크롤의 경우 request로는 불가능 그래서 2번방법 사용

비동기 파이프라인 구성에서 쓰는 vo모듈
웹 스크래핑에 쓰는 nightmare 설치

vscode 내부 터미널이 아니라 cmd검은창 열어서 실행.
*/

const Nightmare = require('nightmare')
const vo = require('vo')
const nightmare = Nightmare({
    show: true
})

const BASE_URL = `https://grafolio.naver.com/category/painting`
const GRAPOLIO_URL = `${BASE_URL}#category_popular_creator`

function* run(){
    yield nightmare.goto(GRAPOLIO_URL)
    let prevHeight, currHeight = 0
    while(prevHeight !== currHeight){
        prevHeight = currHeight
        currHeight = yield nightmare.evaluate(()=>document.body.scrollHeight)
        yield nightmare.scrollTo(currHeight,0).wait(3000)
    }
    const z = yield nightmare.evaluate(() => Array.from(document.querySelectorAll('a.thumb')).map(e=>(`https://grafolio.naver.com${e.getAttribute('href')}`)))
    console.log(z)
    yield nightmare.end()
}

vo(run)(()=>console.log('스크래핑이 완료되었습니다.'))