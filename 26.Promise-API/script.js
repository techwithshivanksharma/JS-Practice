let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 1");
        //reject("Error")
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Value 2');
        //reject("Rejected 2")
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Value 3')
    },3000)
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })


//------------------Promise.all()----------------------

let promise_all = Promise.all([p1,p2,p3]);

promise_all.then((values)=>{
    console.log(values);
})

//if a single promise in rejected then promise.all() will not run

//-------------------Promise.allSettled()----------------

// let promise_all = Promise.allSettled([p1,p2,p3]);

// promise_all.then((values)=>{
//     console.log(values);
// })

//--------------Promise.race----------------------------

// let promise_all = Promise.race([p1,p2,p3]);

// promise_all.then((values)=>{
//     console.log(values);
// })

//--------------Promise.any() --only resolved values----------

// let promise_all = Promise.any([p1,p2,p3]);

// promise_all.then((values)=>{
//          console.log(values);

//   })

//-----------------Promise.reslove()-------------------

// let promise_all = Promise.resolve(6);
// console.log(promise_all);

//-----------------Promise.reject()--------------------

// let promise_all = Promise.reject("Error All");
// console.log(promise_all);