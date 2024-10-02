
    "For changing Background Color"
let btn1 = document.querySelector("#btn");
let btn2 = document.querySelector('#bttn');
let body = document.querySelector("body");
btn1.addEventListener("click",()=>
    {
     body.style.backgroundColor=("white");
     body.style.color=("black");

    });

btn2.addEventListener("click",()=>
    {
        body.style.backgroundColor="#22231F";
        body.style.color=("white");

    });
// let arr = ['karachi','lahore','islamabad','peshawar'];
// arr.forEach((val,index,array)=>
// {
//     console.log(index,val,array);
    
// });





