async function  userDetails(params) {
    
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/Users');
        if(!response.ok){
            throw new Error("Problem in fetching user data......");
        }
        const data = await response.json();
        console.log("Data Fetched Successfully :",data);
    }catch(error){
        console.log("An error occured :",error.message);
        console.log("Showing Dummy/Fallback Data....");

        console.log("Name: XYZ"+"Email: yxeq@gmail.com");
    }finally{
        console.log("Done Fetching User Profile");
    }
}


userDetails();