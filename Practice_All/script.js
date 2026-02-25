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
        body.style.backgroundColor="black";
        mode = "dark";
    }else if (mode == "dark"){
        body.style.backgroundColor="white";
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


let button = document.createElement("button");
button.textContent = "Click me";
button.setAttribute("class", "btn btn-primary mt-3");
document.body.appendChild(button)