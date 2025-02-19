<<<<<<< Updated upstream

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
=======
let pass = document.querySelector("#pass");
document.querySelector("img").addEventListener("click",()=>{
        type =Text;
        if(type == "pass")
        {
            pass.type="pass";
        } else{
            pass.type="text";
        }
})
>>>>>>> Stashed changes
