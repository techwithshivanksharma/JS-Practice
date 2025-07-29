async function userData(params) {

  try{
    console.log("Fetching user data........ ");
    const response = await fetch("https://jsonplaceholder.typicode.com/Users/1");
    const data = await response.json();
    console.log("Fetched User Data: ", data);
  }catch(error){
    console.log("An error occured: ",error);
  }
}

userData();