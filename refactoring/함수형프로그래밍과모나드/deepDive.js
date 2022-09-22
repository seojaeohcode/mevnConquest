/* 
JS는 코드 실행에 필요한 정보를 물리적 객체인 실행 컨텍스트를 통해 관리.

콜스택에 실행컨텍스트가 쌓여 순차적으로 실행

초기에 GO인객체(Math, String, Array 등)과 BOM, DOM이 있고
추후 실행 컨텍스트들이 쌓여 실행됨.

실행컨텍스트 = 1.스코프체인 2.Variable Object, 3.this
순서 = 1.스코프체인 생성, 초기화 2.Variable Object 형성 3.this value가 순차적으로 결정

Variable Object 형성
AO(Activation Object/활성객체): 함수선언,Arguments,변수
GO(Global Object): 전역변수

스코프 체인: 함수의 스코프 주소를 담은 리스트
AO를 선두로하여 순차적으로 상위 컨텍스트의 활성 객체를 가리킴.
마지막 요소는 GO가 됨.
이때, AO나 GO 모두 값이 정해지지 않은 빈 껍데기인 상황 =>
이렇게 형성된 스코프체인의 [[scope]]를 통해 변수를 찾아가는 과정 = 스코프체이닝

this의 결정 this는 함수호출 패턴에 따라 달라지거나 화살표 함수의 경우 lexical scope를 참조. 화살표 함수의 this와 그 외의 this로 나누어짐
*/

/* 
화살표 구문에서의 this 
lexical this = 바인딩할 객체가 정적을으로 정해지면 함수가 호출 될 때 동적으로 변환되지 않고 정해짐. 

화살표든 아니든 모두 window를 가리킴.
this가 정해지지 않고 스코프체이닝을 하면 window로 도달하기 때문.
*/
const a = () =>{
    console.log(this)
}
a()//window

function b(){
    console.log(this)
}
b()//window

/*
생성자 함수이용

return문이 없을 경우
this를 반환한다.

return 값이 객체일 경우
해당 객체를 반환한다.

return 값이 기본 변수일 경우
기본 변수 반환을 무시하고 this를 반환한다. 

화살표함수를 쓰면 정적으로 선언될 때 상위 스코프인 Person클래스를 가리킴.
*/
function Person(){
    this.age = 0

    setTimeout(()=>{
        this.age++
        console.log(this, this.age)
    }, 1000)
}

var p = new Person()

/*
NaN 출력
화살표 함수를 쓰지 않으면 this는 함수호출 패턴을 통해 설정.
= setTimeout은 window객체에서 나온 메서드로
this가 window를 가르킴.
*/
function Person2(){
    this.age = 0

    setTimeout(function(){
        this.age++
        console.log(this, this.age)
    }, 1000)
}

var p2 = new Person2()

