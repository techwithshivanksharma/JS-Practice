let ele = document.getElementById('myForm')

ele.addEventListener('submit', function(event) {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;  
    const password = document.getElementById('form-password').value;

    if(name == ''){
        event.preventDefault();
        alert('Please enter your name');
    }
    else if(email != 'shivankjaiwal5555@gmail.com' && password != 'shiv12345'){
        event.preventDefault();
        alert(`Invalid credentials. Please try again.`);
    }
    else {
        event.preventDefault(); // Prevent form submission
        alert(`Welcome ${name} , Login successful!`);
    }
});    