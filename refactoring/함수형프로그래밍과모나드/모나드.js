/* 
모나드는 컨텍스트 레벨을 값 레벨로 끌어들여 추상화한 컨테이너박스이자 카테고리 이론에서 사용되는 언어.

*컨텍스트
어떤 로직실행에 영향을 줄 수 있는 레지스터, 콜스택, 객체의 현재 상태 등에 해당하는 것.

*참조투명성
입력과 출력이 동일하게 일대일 매칭되는 것.

모나드 규칙에 맞춰 설계된 클래스를 말함.
=>사용하면 로직 구성의 유연성을 높이고 안전한 함수합성이 가능하다.

함수형 프로그래밍에서는 
참조 투명성이 이루어져야 하며 이를 위해 모나드를 쓴다.

함수합성을 할 때 에러가 나타나면 1:n 매칭이 되고 참조 투명성이 깨짐.

2가지 유형이 있음
아이덴티티 모나드, 퓨처 모나드(promise)
*/

const { reject } = require("ramda")

/*
퓨처 모나드(promise)

1을 리턴하는 함수를 만들었는데 null을 리턴하면 어떻게 할 것인가?

Promise는 이런 상황이 발생할 수 있는 로직에 대해 컨테이너 안에 담아 안전하게 연산 가능 

보통 이런 경우는 I/Obound에서 많이 일어남.
네트워크를 통해 서버로부터 값을 가져올 때 그 값은 미래의 값.
이 불확실한 값을 성공과 실패라는 2가지 값으로 설정하여 안전하게 도와주는 것이 promise
 */

//promise를 이용한 함수합성1
const g = JSON.parse
const f = k => k.temp
const fg = x => new Promise((resolve, reject)=>resolve(x)).then(g).then(f)
const log = x => console.log(x)

//promise를 이용한 함수합성2
const log2 = console.log
const users = [{name:'큰돌'}, {name:'제호'},{name:'우람'},{name:'다빈'}]
const getUserByName = (name) => users.find(u=>u.name) || Promise.reject("객체에 없습니다.")
const g1 = getUserByName
const f1 = ({name}) => `${name}이가 춤을 춥니다.`
const fg1 = x => new Promise((resolve, reject)=>resolve(x)).then(g1).then(f1)
fg1("큰돌1").catch(_=>_).then(log)
fg1("큰돌").catch(_=>_).then(log)