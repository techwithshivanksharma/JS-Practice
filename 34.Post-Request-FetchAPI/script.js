let form = document.getElementById('loginForm');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const userData = {
        email: document.getElementById('userEmail').value,
        password:  document.getElementById('userPassword').value
    }
    
    
    fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(result => result.json())
    .then(data => {
        if(data.token){
            alert('Login Successfull');
        }else{
            alert('Login Failed!!');
        }
    })
    .catch((error)=>{
        console.log("An error occured: ",error);
    })
})