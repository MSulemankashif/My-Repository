
// let arr = ["Karachi","Lahore","Islamabad","Peshawar"];

// arr.forEach((val,index,arr) =>{
//     console.log(val.toUpperCase(),index,arr);
// }
// )

// btn2.addEventListener("click",()=>
//     {
//         body.style.backgroundColor="#22231F";
//         body.style.color=("white");

//     });
// let arr = ['karachi','lahore','islamabad','peshawar'];
// arr.forEach((val,index,array)=>
// {
//     console.log(index,val,array);
    
// });

// arr.forEach((val,index)=>
// { 
//     console.log(index,val);
// })

// let h2 = document.querySelector("h2");
// console.log(h2);

// let button = document.querySelector(".btn1");
// let button1 = document.querySelector(".btn2");
// let body = document.querySelector("body");
// let nav = document.querySelector("#none");

// button.addEventListener("click", ()=>{
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//     nav.classList("btn", "btn-outline-success");
//   });
// button1.addEventListener("click",()=>
//     {
//         body.style.backgroundColor="black";
//         body.style.color="white";
//      });
        
// let btn = document.querySelector(".btn-outline-success");

// let handler = ()=> {
//     console.log("Button is clicked!");
    
// }

// btn.addEventListener("click", handler);

let modeBtn = document.querySelector(".btn");
let body = document.querySelector("body");
let mode = "light";

modeBtn.addEventListener("click",()=>{
    if(mode === "light")
    {
        mode = "dark";
        body.classList.add("dark");
        modeBtn.style.color="white";
        body.classList.remove("light");
    } else  {  
        mode = "light";
        body.classList.add("light");
        modeBtn.style.color="black";
        body.classList.remove("dark");
    }     

});