const outer =document.querySelector('#outer');
const innerBtn = document.querySelector('#innerBtn');

outer.addEventListener('click', function(event) {
    alert('Outer Div Clicked');
});

innerBtn.addEventListener('click',(event)=>{
    event.stopPropagation(); // Prevents the event from bubbling up to the outer div
    alert('Inner Button Clicked');
})