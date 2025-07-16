let btn1 = document.getElementById('clickButton');

//btn1.onclick = handleClick;

// btn1.onclick = function   handleClick() {
//     let btn = document.getElementById('clickButton');
//     btn.innerHTML = "Clicked!";
//     btn.style.backgroundColor = "grey";
//     btn.style.color = "white";
//     console.log('Button Clicked');
// }

btn1.addEventListener('click', function() {
    btn1.innerHTML = "Clicked!";
    btn1.style.backgroundColor = "grey";
    btn1.style.color = "white";
    console.log('Button Clicked');
});