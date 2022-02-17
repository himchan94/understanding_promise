// synchronous

// asynchrnous
// 명령이 언제 끝날 지 모를 때, 주가 되는 작업이 아닐 때 비동기처리를 함 (ex 통신)
// 다른 일들을 하다가, 통신이 끝났을 때 callback으로 실행

var fetched = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  })
  .then(function (result) {
    console.log("result", result);
  })
  .catch(function (reason) {
    console.log("reason", reason);
  });

// .json() : 웹 브라우저에게 이 데이터는 json 타입이란 것을 알려줌
// 그러면 json 타입을 자바스크립트 데이터 타입으로 변환해줌
// json() : promise임

// nested

fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
  response.json().then(function (data) {
    console.log("data", data);
  });
});
