const input = document.getElementById('input-box');
const btn = document.getElementById('btn');

const list = document.getElementById('taskList');

btn.addEventListener('click', function (){
    if(!input.value){
        alert("You must write a Task!!")
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value.trim();
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
})

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){  
        e.target.classList.toggle('checked');
        //saveData();
    }   
else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        //saveData();
    }
});    


let saveData = () =>{
    localStorage.setItem('data',list.innerHTML)
}

let showData = () =>{
    list.innerHTML = localStorage.getItem('data');
}    

showData();