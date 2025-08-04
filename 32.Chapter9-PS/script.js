//==========================Problem 2==================================

// const loadScript = async (source) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = source;
//     script.onload = () => {
//       resolve(script.src +"  "+"Script Loading Done");
//     };

//     document.head.appendChild(script);
//   });
// };

// const main = async (params) => {
//     console.log("Before Loading; "+new Date().getMilliseconds());
//     let a =await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js');
//     console.log("After Loading: "+new Date().getMilliseconds());
//     console.log(a);
// }

// main();

//==========================Problem 3================================

// const x = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Promise rejected after 3 Seconds.");
//     }, 3000);
//   });
// };

// const a = async () => {
//   try {
//     let c = await x();
//     console.log(c);
//   } catch (error) {
//     console.log("Error Occured: ", error);
//   }
// };

// a();

//=========================================Problem 4===============================================
//======================================Part 1 Using Promise.all() ================================

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 1 Resolved');
//     },1000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 2 Resolved');
//     },2000)
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promise 3 Resolved');
//     },10000)
// })

// const a = async () =>{

//     let c = await Promise.all([p1,p2,p3]);
//     console.log(c);
// }

// a();


//============================== Part 2 ===========================


let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 1 Resolved');
    },1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 2 Resolved');
    },2000)
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 3 Resolved');
    },10000)
})

const a = async () =>{

    let c = await p1;
    console.log(c);

    let d = await p2;
    console.log(d);

    let e = await p3;
    console.log(e);
}

a();