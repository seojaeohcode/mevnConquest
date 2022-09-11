let a = 1;

if(true){
    console.log(a);
    let a = 2;//ReferenceError: Cannot access 'a' before initialization
}

/*
호이스팅: 모든 함수,변수가 선언될 때 스코프의 최상단으로 가는 것.
스코프: 범위 ex){}
var       = 선언 및 초기화 -> 할당 
const,let = 선언 -> TDZ -> 초기화 -> 할당
*TDZ = Temporal dead zone 선언과 초기화가 동시에 일어나는 것을 막는다.
*const let이 var처럼 호이스팅이 일어나지 않는 것은 아니지만 TDZ때문에 일어나지 않는 것처럼 보이는 것.
var로 선언하면 함수스코프를 가져 for문안에서 선언해도 참조가 가능한 것.
*/