// timer(1000, function () {
//   console.log('작업');
//   timer(1000, function () {
//     console.log('작업');
//     timer(1000, function () {
//       console.log('작업');
//     })
//   })
// })

// timer(1000)
//   .then(function () {
//     console.log("작업");
//     return timer(1000);
//   })
//   .then(function () {
//     console.log("작업");
//     return timer(1000);
//   })
//   .then(function () {
//     console.log("작업");
//   });

function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

// console.log("start");
// timer(1000)
//   .then(function (time) {
//     console.log("time:" + time);
//     return timer(time + 1000);
//   })
//   .then(function (time) {
//     console.log("time:" + time);
//     console.log("end");
//   });

async function run() {
  console.log("start");
  var time = await timer(1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
  console.log("end");
  return time;
}

async function run2() {
  console.log("parent start");
  await run();
  console.log("parent end");
}

console.log("parent parent start");
run2().then(function () {
  console.log("parent parent end");
});

//async 함수는 promise를 리턴한다.
// async 함수에 return 값이 넣을 수 있음
