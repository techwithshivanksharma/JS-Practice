//---------------------------Promise Chaining---------------------------//

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise p1");
//     resolve("First Promise resolved");
//   }, 2000);
// })
// .then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("This is promise p2");
//             resolve("Second Promise resolved");
//         }, 2000);
//     });
//     return p2;
// })
// .then((value) => {
//     console.log(value);
//     let p3 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("This is promise p3");
//             resolve("Third Promise resolved");
//         }, 2000);
//     });
//     return p3;
// })

//------------------------------------Function LoadScript Using Promises------------------------------------//

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);

    script.onload = () => {
      resolve("Script Loaded Successfully");
    };

    script.onerror = () => {
      reject("Script Loading Failed");
    };
  });
};

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
);

p1.then((value) => {
  // if some error here ontrol will directly jump to catch block skiping the next then  
  console.log(value);    
  return loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js"
  );
})
  .then((value) => {
    console.log("Second Script");
    console.log(value);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
