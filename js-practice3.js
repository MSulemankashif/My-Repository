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

