### async await

synchronous : 순차적으로 실행됨

- 코드가 심플하지만 느림

asynchronous : 동시에 여러 작업을 수행함

Promise.all 방식 : 동시에 시작한 작업 중에서 가장 늦게 끝나는 작업 이후 다음 코드를 수행함
Promise.race 방식 : 동식에 시작한 작업 중에서 가장 빨리 끝나는 작업을 기점으로(이때 다른 작업은 버림) 다음 작업을 수행
