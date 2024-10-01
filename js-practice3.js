"For Each Loop"
// let arr = ["Karachi","Lahore","Islamabad","Peshawar"];

// arr.forEach((val,index,arr) =>{
//     console.log(val.toUpperCase(),index,arr);
// }
// )

let array = [2,4,6,8,10,11,12,13];
"Method 1 For Sqaure Root"
// array.forEach((val)=> {
//     console.log(val ** 2);
// }
// )

"Method 2 For Sqaure Root"
// let calcSquare = (num) =>
// {
//     console.log(num **2);
// }
// array.forEach(calcSquare);
"Map Method"
// let newArr = array.map((val)=>{
//     return val **2    
// })

// console.log(newArr);
"Filter Method for Filter Out Even/Odd Numbers in Array"
// let evenArr = array.filter((val)=>
// {
//     return val > 3;
// });
// console.log(evenArr);

"Average Of class Marks"
// let marks = [88,98,77,89,88,99]
// let sum = 0
// for(let val of marks)
// {
//     sum += val
// }
// let avg = sum / marks.length
// console.log(`The Average of class marks is ${avg}`);

"Let's Practice"
// let stdMarks= [91,95,98,56,80];
// let smarks= stdMarks.filter((val)=>
// {
//     return val >90
// }
// )
// console.log(smarks);

// let n = prompt("Enter A number");
// let arr = []
// for(let i = 1; i <= n;i++)
// {
//     arr[i-1] = i;
// }
// console.log(arr);

let sum = 0;
let nums = [90,88,78,88,97];
for(let val of nums)
{
    sum +=val
}
console.log(sum);


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

// let div = document.querySelectorAll(".box");
// let i=0;
// for(let val of div)
// {
//     val.innerText=`Hello World from ${i}`;
//     i++   
// }

// let para = document.querySelector("p");
// console.log(para.setAttribute("lorem","new lorem"));
// let div = document.querySelector("div");
// div.style.backgroundColor="red";

// let firstName = prompt ("Enter Your First name");
// let lastName = prompt ("Enter Your last name");
// let username=firstName+lastName;
// document.writeln(`Your Username is <b> @${username}${username.length}</b>`)

// let btn = document.createElement("button"); 
// btn.innerText=("Click me"); 
// console.log(btn); 
// let div = document.querySelector("div"); 
// div.append(btn); 
// let array =[2,4,6,8,10];
// let square = (num)=>{
//     document.writeln(num**2,"<br>");
// }
// array.forEach(square);
// let array=[2,4,6,8,10];
// let square = (num)=>
//     {
//         console.log(num**2);
//     } 
//     array.forEach(square);

// let para =  document.querySelector("p");
// let a = para.classList.add("newId")

let btn1 = document.querySelector('.btn');

// let clickCount = 0;

// btn1.onclick=()=>
// {
//     clickCount++;

//     if(clickCount === 1)
//     {
//         btn1.innerText=(`Clicked 1 time`)
//     } else {
//         btn1.innerText=(`Clicked ${clickCount} times`)
//     }
// }
    "Event Listners"
// let clickCount = 0;
// btn1.addEventListener("click", ()=>
// {
//     clickCount++;
    
//     if(clickCount === 1)
//     {
//         btn1.innerText=(`Button is clicked`);
//     } else if (clickCount>10) {
//         btn1.innerText=(`Clicked too many times`)
//     } else{
//         btn1.innerText=(`Button is clicked ${clickCount} times`)
//     }
// });