let d1 = document.getElementById('first');

console.log(d1.classList);
// d1.className = 'red';
// console.log(d1.classList);

//d1.classList.add('bold');
//d1.classList.remove('black');

d1.classList.toggle('bold');

console.log(d1.classList);
console.log(d1.classList.contains('black'));