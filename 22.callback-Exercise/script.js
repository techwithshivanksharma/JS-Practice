// function registerUser(name){
//     setTimeout(()=>{
//         console.log("Hello "+ name +"You are registered!");
//     },2000)  
// }

// function callback(name){
//     console.log('Welcome :'+ name);
// }

// registerUser('Rahul');
// callback('Rahul');

//-------------------The problem in the above code is the callback runs before the registerUSer.---------
//-------------------It is showing 'Welcome Rahul' even before his registration.-------------------------
//-------------------It's solution is ->-----------------------------------------------------------------

// function userRegistration(name,callback){
//     setTimeout(()=>{
//         console.log("Hello "+ name +"! You are registered successfully.");
//         callback(name);
//     },3000)
// }

// function userGreeting(name){
//     console.log("Welcome !"+ name +" to our team.")
// }

// userRegistration("Rohit",userGreeting);


const fetchUserData = (url,callback) =>{
    console.log("Fetching the data of users.....")
    setTimeout(()=>{
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok");   
                return;
            }
            return response.json();
        })
        .then(data => {
            // data is the resolved value of previous promise i.e response.json(0)
            callback(data);   
        })
        .catch(error=>{
            console.log("Error: ",error);
        })
    },5000);
}


const printData = (data) =>{

    console.log("Fetched Data From API :", data);  
    //console.log("Fetched Data:"+ JSON.stringify(data));
}

//---------If you url is wrong, it causes a network failure and the error will be caught in the catch block.Not in .then block. ------------

//fetchUserData('https://sonplaceholder.typicode.com/todos/1',printData); 

fetchUserData('https://jsonplaceholder.typicode.com/posts', printData); 