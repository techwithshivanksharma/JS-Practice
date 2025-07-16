document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red';
document.getElementsByTagName('nav')[0].lastElementChild.lastElementChild.style.color = 'blue';

// let listItems = document.querySelectorAll('li');

// listItems.forEach((item) =>{
//     item.style.backgroundColor = 'cyan';
// })

Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.backgroundColor = 'pink';
});