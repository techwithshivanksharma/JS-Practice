const savedTheme = localStorage.getItem('theme');

if(savedTheme){
    document.body.className = savedTheme;
}
else{
    document.body.className = 'light';
}

document.getElementById('toggleTheme').addEventListener('click',(e)=>{
    e.preventDefault();

    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.className = newTheme;

    localStorage.setItem("theme",newTheme);
});