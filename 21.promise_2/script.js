let p = new Promise((resolve,reject)=>{
    console.log('Promise is pending');
    setTimeout(()=>{
        reject(new Error('Something went wrong!'));
        //resolve('Promise is resolved');
    },4000);
})

console.log(p); // Promise {<pending>}

//p.then(alert); 
// This will alert 'Promise is resolved' after 4 seconds


//p.catch(alert); 
// // This will alert the error if the promise is rejected

// p.then((value)=>{
//     console.log('Value of p:', value);
// },(error)=>{     
//     console.log('Error:', error);
// });

p.then((value)=>{
    console.log('Value of p:', value);
}).catch((error)=>{
    console.log('Error:', error);
});