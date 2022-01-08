
▶ Redux의 장점

1. props를 사용할 필요가 없다.

2. 상태관리가 용이하다.


※ Reducer Data Flow

Action

Action Creator

Action Type

Action Payload

Dispatch

Store


redux에서 데이터가 어떻게 흐르는지 예시를 통해 파악하고,

리덕스를 실제로 사용해보자.


※ redux 데이터 흐름 예시


☞ 왕이 예금을 하려고 한다.

King ( He got 100 ) --> (Call) --> Servant --> Letter ( Deposit-요청, quantity-금액1 ) --> Pigeon ( Letter 전달 ) --> The Royal Bank ( Now, He got 101 )


☞ 왕이 출금을 하려고 한다.

King ( He got 101 ) --> (Call) --> Servant --> Letter ( Withdraw-요청, quantity-금액6 ) --> Pigeon ( Letter 전달 ) --> The Royal Bank ( Now, He got 95 )


▶ Redux Data Flow ( 결론 )

King = UI ( 사용자에게 보이는 반응 앱. 즉 돈을 입금하거나 출금하기 위한 클릭 버튼 )

Servant = Action Creator ( 버튼을 누르면 액션 생성자는 입금 / 출금과 관련된 함수를 호출한다. )

Letter = Action ( type / payLoad 등 즉, 입금 / 출금 요청 및 금액 정보를 담고있다. )

Dispatch = Pigeon ( 정보 전달 )

Store = Bank ( Action을 읽고 해석할 수 있으며 유저의 요청을 따라 데이터를 업데이트하는 역할 )

* 결론
King ( UI ) --> Servant ( Action Creator ) --> Letter ( Action ) --> Pigeon ( Dispatch ) --> Store ( Banker )


※ Store & Reducers

Store = 은행 ( 즉, 데이터가 저장되는 곳 )

Reducer = 뱅커 ( 요청에 따라 데이터를 변경하여 리턴 )


※ redux 사용해보기

1. npm install redux react-redux 터미널에 입력

2. package.json에서 redux가 제대로 설치되었는지 확인하기

3. 저장소 만들기

▶ comebileReducers

: https://runebook.dev/ko/docs/redux/combinereducers

4. Provider

▶ useSelector

: https://velog.io/@seongkyun/useSelector-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

: https://blog.woolta.com/categories/1/posts/200

5. Action Creators

6. thunk 설치.


