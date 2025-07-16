//matches( )
//let b1 = document.getElementById('b1');
//console.log(b1);
// console.log(b1.matches('#b1')); //true
// console.log(b1.matches('.myclass')); //false


//closest( )
let sp1 = document.getElementById('sp1');
//console.log(b2);
console.log(sp1.closest('.head1')); //only checks ancestors not siblings
console.log(sp1.closest('.box'));


//contains( )

// let p1 = document.getElementById('p1');

// let b2 = document.getElementById('b2');
// console.log(b2.contains(sp1)); //true
// console.log(b2.contains(p1));