let body= document.querySelector('body');
let btn = document.getElementById('theme');
let mode = "light";

btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark")
        body.classList.remove("light");
    } else{
        mode= "light";
        body.classList.add("light");
        body.classList.remove("dark");
    } console.log(mode);
    
})