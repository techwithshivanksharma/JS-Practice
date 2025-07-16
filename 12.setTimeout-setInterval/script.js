// setTimeout((a,b)=>{
//     console.log("Sum : "+(a+b));
// },5000,3,4);

let first = document.getElementById("first");

// let timerId = setTimeout(() => {
//   let p = document.createElement("p");
//   p.innerHTML = "This is paragraph tag inside setTimeout function";
//   first.appendChild(p);
// }, 5000);

//clearTimeout(timerId);

let timerID = setInterval(()=>{
    let p = document.createElement('p');
    p.innerHTML = 'This is paragraph tag inside setInterval function';
    first.appendChild(p);
},5000);

clearInterval(timerID);