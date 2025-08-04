
const fetchUserData = async() =>{
    // try{
    //     let userData = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    //     console.log(userData);
    //     if (!userData.ok) {
    //          throw new Error('Network response was not ok');
    //     }
    //     let data = await userData.json();
    //     console.log(data);
    // }catch(error){
    //     console.log("Error Occurred: ", error);
    // }

    try{
        fetch('https://jsonplaceholder.typicode.com/todos/200')
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not ok!!');
            }
            return response.json();
        })
        .then((data)=>{
            console.log('User Data Fetched: ',data);
        })
    }catch(error){
        console.log("An Error Occured: ",error);
    }
}

fetchUserData();