//------------------Promise can be executed in parallel , if we have 10 promises they wil execute at the same time------------------

const p = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    console.log("Promise is fulfilled");
    resolve(true);
    //reject(new Error("Something went wrong!"));
  }, 4000);
});

// Here console shows promise in pdending state : promise{<pending>}
console.log(p);

setTimeout(() => {
  console.log(p);
}, 6000);
//after six second promise state will be updated and console shows promise{<fulfilled>}
// in case of reject it will show promise{<rejected>}

//-----------p2 will be executed in parallel with p-------------------

const p2 = new Promise((resolve, reject) => {
  console.log("Promise 2 in pending");
  setTimeout(() => {
    console.log("Promise 2 is fullfilled.");
    //resolve(true);
    reject(new Error("Something went wrong in p2!"));
  }, 4000);
});

console.log(p2);

setTimeout(() => {
  console.log(p2);
}, 6000);

// p.then((value)=>{
//     console.log('Value of p:',value);
// })

// p2.catch((error)=>{
//     console.log('Some error occured in p2: ');
// })
