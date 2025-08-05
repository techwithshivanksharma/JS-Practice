let key = prompt("Enter Key: ");
let value = prompt("Enter Value: ");

localStorage.setItem(key,value);

console.log(` The value of key "${key}" is set to "${localStorage.getItem(key)}" `);

//localStorage.removeItem("name");
//localStorage.clear();

console.log(localStorage.key(0));
console.log(localStorage.length);
