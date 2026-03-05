// let increase = document.getElementById("#increase");
// let decrease = document.getElementById("#decrease");
// let reset = document.getElementById("#reset");
let btn = document.querySelectorAll(".btn");
let p = document.querySelector("p");

let count = 0;
btn.forEach(function(button) {
    button.addEventListener("click", ()=>{
        // console.log(button);

        if(button.id === "increase"){
            count++;
            p.innerText = count;
        }else if(button.id ===  "decrease"){
            if(count > 0){
            count--;
            p.innerText = count;
            }
        }else if(button.id === "reset"){
            let confirmReset = window.confirm("Are you sure you want to reset");
            
        }
        
    })
})

