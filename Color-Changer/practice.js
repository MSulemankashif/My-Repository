let text = "I love javascript";

console.log(text.substring(3));


let the = "I love Javascript";
let pattern = /javascript/i;

console.log(pattern.test(the));


let num = "12345678";
console.log(typeof(num));
console.log(/^\d+$/.test(num));
console.log();


let username = "Suleman123";
let patt = /^[a-zA-Z0-9]{3,}$/;

console.log(patt.test(username));

