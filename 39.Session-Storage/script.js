//  Load saved values from sessionStorage (if any)

document.getElementById('name').value = sessionStorage.getItem('name') || " ";
document.getElementById('email').value = sessionStorage.getItem('email') || " ";
document.getElementById('message').value = sessionStorage.getItem('message') || " ";


['name','email','message'].forEach((id)=>{
    document.getElementById(id).addEventListener('input',(e)=>{
        sessionStorage.setItem(id,e.target.value);
    });
});

document.getElementById('contactForm').addEventListener('submit',(e)=>{
    e.preventDefault();

    alert('Form Submitted Successfully');
    sessionStorage.clear();
});