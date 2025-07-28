const p1 = new Promise((resolve,reject)=>{
    console.log('Please wait promise is executing......');
    setTimeout(()=>{
        resolve("Executed");
    },3000)
})


p1.then((value)=>{
    console.log(value);
})

p1.then(()=>{
    console.log("This is handler 2");
})

p1.then(()=>{
    console.log("This is handler 3");
})
p1.catch((error) => {
    console.log("Error occurred: ", error); 
})       