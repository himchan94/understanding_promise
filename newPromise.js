function job1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("job1 fail");
    }, 2000);
  });
}

function job2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("job2 ok!");
    }, 2000);
  });
}

// nested promise
// job1().then(function (data1) {
//   console.log("data1", data1);
//   job2().then(function (data2) {
//     console.log("data2", data2);
//   });
// });

job1()
  .then(function (data1) {
    console.log("data1", data1);
    return job2();
  })
  .catch(function (reason) {
    console.log(reason);
    // reject을 하면 에러가 뜨면서 뒤의 코드는 실행 안됨
    return Promise.reject(reason);
  })
  .then(function (data2) {
    console.log("data2", data2);
  });
