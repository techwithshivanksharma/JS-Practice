// document.cookie = "name = Shivank";
// document.cookie = "age = 23";
// document.cookie = "gender = male"
// console.log(document.cookie);

// document.cookie = "name = Shivank Sharma";
// document.cookie = "age = 24";
// console.log(document.cookie);


//-----------encodeURIComponent-----------------

//document.cookie = '34;+=2,: = 63527'  
//->cookie can't be set properly ;+= will not be seen
//->so we encodeURIComponent()
//console.log(document.cookie);

let key = prompt("Enter key: ");
let value = prompt("Enter value: ");

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`; 
console.log(document.cookie);

//------To decode the coded special characters we can use decodeURIComponent() function-----
