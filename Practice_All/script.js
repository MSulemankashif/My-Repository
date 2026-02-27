 let btn = document.querySelector(".btn");
/*
btn.addEventListener("click", ()=>{
    console.log("Hello World!");
}); */

/* let array = ["Suleman", "Usman", "Ahmed", "Ali", "Mushtaq"];
    array.forEach((value, index, array)=>{
    console.log(index, value);
    
}); */

let body = document.querySelector("body");
let mode = "light";

btn.addEventListener("click", ()=>{
    if(mode == "light"){
        body.classList.add("dark")
        mode = "dark";
    }else if (mode == "dark"){
        body.classList.remove("dark");
        mode = "light";
    };
});

// function greet(name){
//     console.log("Hello", name);
// }

// greet("suleman");


// let greet = function(name){
//     console.log("Hello", name);
// }
// greet("Suleman");

// const person = {
//     name: "Suleman",
//     greet: function(){
//         console.log(this.name);
//     }
// };

// person.greet();

console.log("Start");

setTimeout(() => {
    console.log("API");
}, 2000)

console.log("End");

function createCounter(){
    count = 0;

    return function(){
        count++;
        return count;
    }
}


// const counter1 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


// let button = document.createElement("button");
// button.textContent = "Click me";
// button.setAttribute("class", "btn btn-primary mt-3");
// document.body.appendChild(button)



// let date = new Date().toUTCString();
// console.log(date);


function date(){

    let day = new Date().getDay();
    switch (day){
    
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

return day;
}

let getDateBtn = document.getElementById("getDateBtn");
let dateDisplay = document.getElementById("dateDisplay");

getDateBtn.addEventListener("click", ()=> {
    date();

    dateDisplay.innerHTML = "Today is <b>" + date() + "</b>";
})

// let x = 10;
// let y = 20;

// let z = (x <= 10 && y > 15);

// // Logical Not
// let a = 10;

// let result = !(a > 5);
// console.log(result);


let isAdmin = false;

let result = !!isAdmin;
console.log(result);


// Javascript Underscore
// let _username = "Suleman";
// console.log(_username);


// let carname;
// carname = "Honda";

// Loops in Javascript
let cars = ["Honda", "Toyota", "BMW", "Mercedes", "Audi"];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

let i = 1;
// while(i<2){
//     console.log(i);
//     i++;
// }


// condition match na karega to kam se kam ek baar to chalega hi
// let i = 11;

// do{
//     console.log(i);
//     i++;
// }while (i < 10)

// for(let i = 0; i < 10; i++){
//     if(i >= 5) {break;}
//     console.log(i);
// }

let string =  "This is a, text";

let result2 = string.charAt(2)
let result3 = string.concat(" result 3")
let result4 = string.codePointAt(2)
let result5 = string.slice(0, 4)
let result6 = string.replace("text", "Replaced Text");
let result7 = string.replaceAll("text", "Replaced text")
let result8 = string.split(" ")
let result9 = string
console.log(result8);

function reverse(str){
    console.log(str.split("").reverse().join(""));
     
}
reverse("Javascript");

let text = "Please locate where 'locate' occurs";
let index = text.indexOf("locate");
console.log(index);

let r = 123e5
console.log(r);

let g = 9.565.toExponential(1);
let num = Number.MAX_VALUE

console.log(num);

// Return Statement
function returnP(a,b){
    return a*b
}
console.log(returnP(3,5));


// Function Expression
let multiply = function(a,b){
    return a + b;
}

console.log(multiply(3,5));




