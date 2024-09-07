
// let arr = ["Karachi","Lahore","Islamabad","Peshawar"];

// arr.forEach((val,index,arr) =>{
//     console.log(val.toUpperCase(),index,arr);
// }
// )

// arr.forEach((val,index)=>
// { 
//     console.log(index,val);
// })

// let h2 = document.querySelector("h2");
// console.log(h2);

let divs = document.querySelectorAll(".box");
let i = 0;
for(let div of divs)
{
    div.innerText=`hello world from index ${i}`;
    i++
}
