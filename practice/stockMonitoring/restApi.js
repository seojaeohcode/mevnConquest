/*
목적:
API의 한 가지 목적은 서버 시스템이 동작하는 방식에 관한 내부의 프로세스를 숨기는 것으로, 내부의 세세한 부분이 나중에 변경되더라도 프로그래머가 유용하게 사용할 수 있고 일정하게 관리할 수 있는 부분들만 노출시킨다. 

종류:
API/HTTP API/REST API

HTTP API
HTTP를 사용하여 프로그램끼리 소통하는 API를 말한다. 보통 우리가 흔히 보는 OPEN API, facebook API, kakao API 등의 대부분 API는 HTTP라는 통신 규칙으로 소통하는 API이다.

REST API
REST(Representational State Transfer)란 네트워크 아키텍처 스타일이다. 여기서 '네트워크 아키텍처 스타일'란 네트워크 자원을 정의하고 처리하는 방법 전반을 일컫는다.

REST는 HTTP를 잘 활용하기 위한 원칙이라고 할 수 있고
REST API는 이 원칙을 준수해 만든 API이다.

Representational State Transfer
자원의 표현으로 상태를 전달하는 것

URI로 자원을 표현하는 데에 집중하고, 자원의 상태(행위)에 대한 정의는 HTTP METHOD로 하는 것

가장 중요한 원칙
1.URI로 자원(리소스)을 표현해야 한다.
2.자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현된다.

REST API는 결국 HTTP API의 일종
HTTP API를 밑의 조건들을 지키면서 개발하면
REST API가 되는 것.

rest api 기본
웹의 장점을 잘 살린 아키텍처

Uniform-Interface를 가짐
독립적 인터페이스
웹페이지 변경 => 웹 브라우저 업데이트 x
HTTP/HTML명세가 변경되어도 잘 작동해야함.

*MIME types
문서,파일 등의 특성과 형식을 나타내는 표준
font/ttf text/plain text/csv

1.Self-descriptive messages
HTTP Header에 타입을 명시하고 각 메시지들은 MIME types에 맞춰 표현=>
.json 반환=>application/json으로 반환

2.HATEOAS 구조
하이퍼링크에 따라 다른 페이지를 보여줘야 함.
데이터를 어느 URL에서 원했는지 명시해야 함.

3.Stateless
HTTP자체가 Stateless 즉 HTTP를 이용하는 것만으로도 Stateless.
REST API를 제공해주는 서버는 세션을 해당 서버 쪽에 유지하지 않는다는 의미.

4.Cacheable
HTTP는 원래 캐싱이 가능함.
새로고침 => 304 => 원래 있던 js와 css, 이미지를 불러옴

캐싱 = 네트워크 요청을 줄이고 UX향상에 도움을 줌.

네트워크 요청시 자원을 복사해서 메모리에 저장했다가 또 같은 요청시 브라우저 메모리에 있던 자원을 다시 반환.

HTTP 메서드 중 GET에 한정.
Cache-Control:max-age=100 이런 식으로 시간을 정할 수 있음.

Etag를 사용해 똑같은 자원은 캐싱되어 요청을 줄임.

5.Client-Server 구조
클라이언트와 서버가 서로 독립적인 구조여야 함. => HTTP를 통해 가능한 구조.
서버 = API제공 => API에 맞는 비지니스로직 처리.
클라이언트 = HTTP로 받는 로직처리.

6.Layered System
계층구조로 아키텍처를 만들 수 있음.
*/