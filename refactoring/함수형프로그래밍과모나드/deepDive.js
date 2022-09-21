/* 
JS는 코드 실행에 필요한 정보를 물리적 객체인 실행 컨텍스트를 통해 관리.

콜스택에 실행컨텍스트가 쌓여 순차적으로 실행

초기에 GO인객체(Math, String, Array 등)과 BOM, DOM이 있고
추후 실행 컨텍스트들이 쌓여 실행됨.

실행컨텍스트 = 1.스코프체인 2.Variable Object, 3.this
순서 = 1.스코프체인 생성, 초기화 2.Variable Object 형성 3.this value가 순차적으로 결정

AO(Activation Object/활성객체): 함수선언,Arguments,변수
GO(Global Object): 전역변수

스코프 체인: 함수의 스코프 주소를 담은 리스트
AO를 선두로하여 순차적으로 상위 컨텍스트의 활성 객체를 가리킴.
마지막 요소는 GO가 됨.
이때, AO나 GO 모두 값이 정해지지 않은 빈 껍데기인 상황 =>
이렇게 형성된 스코프체인의 [[scope]]를 통해 변수를 찾아가는 과정 = 스코프체이닝
*/