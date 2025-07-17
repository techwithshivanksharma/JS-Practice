//This is synchronous code that prompts the user for input and logs it to the console.
// It does not use any callbacks or asynchronous operations.

// let a = prompt("Enter your name: ");
// let b = prompt("Enter your age: ");
// let c = prompt("Enter your city: ");

// console.log(`Hello ${a}, you are ${b} years old and you live in ${c}.`);

//synchronous code

// console.log('This is Start');

// setTimeout(() => {
//     console.log(`Hello this is an example of asynchronous programming.`);
// }, 5000);

// console.log('This is End')

// ------------------------ callback function ------------------------

function loadScript(src,callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = () =>{
        callback(null,src); // If script successfully loaded first argument will be null
    }
    script.onerror = () => {
        console.error(`Error loading script: ${src}`);
        callback(new Error(`Failed to load script: ${src}`)); // If script fails to load first argument will be an error object
    };
    document.body.appendChild(script);
}

function helloCallBack(error,src){
    if(error){
        console.log('Script failed to load:',error);
    }
    else{
        alert(`Script Loaded with URL: ${src}`);
        console.log('Script Successfully Loaded with URL: ',src);
    }
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",helloCallBack);