let text = "I love javascript";

// console.log(text.substring(3));


let the = "I love Javascript";
let pattern = /javascript/i;

// console.log(pattern.test(the));


let num = "12345678";
// console.log(typeof(num));
// console.log(/^\d+$/.test(num));


let username = "Suleman123";
let patt = /^[a-zA-Z0-9]{3,}$/;

// console.log(patt.test(username));

let tax = "Is this all there is";
let pat = /is/g;

// console.log(tax.match(pat));

let person ={
    firstName: "Suleman",
    lastname: "Kashif",
    age: 50
};

let {firstName, lastname} = person;

console.log(firstName, lastname);

let fruits = ["Banana", "Apple", "Mango"];

console.log(fruits.toString());
