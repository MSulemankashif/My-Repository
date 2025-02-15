
let input = document.querySelector("input");
let img = document.querySelector("img");

img.addEventListener("click", ()=>{
    if(input.type === "password"){
        input.type = "text";
        img.src = "./unhide.svg";
    } else{
        input.type = "password";
        img.src = "./eye.svg";
    };
});