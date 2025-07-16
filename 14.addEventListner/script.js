let btn = document.getElementById('clickButton');

function x(e){
    console.log(e.target);
    console.log(e.type);    
    console.log(e.currentTarget);
    console.log(e);
   
    console.log(e.target.className);
    alert('Event listener 1 i.e X triggered');
}

// function y(e){
//     alert('Event listener 2 i.e Y triggered');  
// }

btn.addEventListener('click', x);
// btn.addEventListener('click', y);

// let a = prompt('Enter a number to remove the event listener:');
// if (a =="1") {
//     btn.removeEventListener('click', x);
//     console.log('Event listener X removed');
// }
// else if (a == "2") {
//     btn.removeEventListener('click', y);
//     console.log('Event listener Y removed');
// }   