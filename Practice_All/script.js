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