" Hide Unhide Element"
// $(document).ready(function(){
//     $("p").hover(function(){
//         $(this).css("cursor","pointer");
//     });
//     $("p").click(function(){
//         $(this).hide();
//     });
//     $("#toggleButton").click(function(){
//         $("h1").hide(400);
//     });
//     $("#showBtn").click(function(){
//         $("h1").show(400);
//     });
// });
"Basic"
// console.log(`We are Using ${jQuery}`);
// $("p").click(function(){
//     $("p").hide();
// })
// $("p").click(function(){
//     alert(`Button is Clicked!`)
// })

    "Show hide Element"
// $(document).ready(function(){
//     $("#toggleButton").click(function(){
//         $("p").hide(700);
//     });
//     $("#showBtn").click(function(){
//         $("p").show(500);
//     });
// });

"Applying CSS"
// $("p").hover(
//     function() { $(this).css("background-color", "yellow"); },
//     function() { $(this).css("background-color", "white"); }
// );

// $("#toggleButton").hover(
//     function(){$(this).css("background-color","purple")},
//     function(){$(this).css("background-color","white")}
// );
   
   let button = document.querySelector("#theme");
   let body = document.querySelector("body");
   let mode = "light";
   
   button.addEventListener("click",()=>{
       if(mode === "light"){
           mode = "dark";
           body.classList.add("dark");
           body.classList.remove("light");
           button.innerText="Light Mode";
       } else{
           mode = "light"
           body.classList.add("light");
           body.classList.remove("dark");
           button.innerText="Dark Mode";
       } console.log(mode);
   });
    "Method for getting Square root of a number"
    let array = [2,4,6,8,10,11];
    // array.forEach((val)=>{
    //     console.log(`Square root of ${val} is `,val ** 2);
    // });

    "Method 2 for getting Square root of a number"
    // let square = (num)=>{
    //     console.log(num **2);
    // }
    // array.forEach(square);
    "Map Method"
    // let newArr = array.map((val)=>{
    //     return val **2    
    // });
    // console.log(newArr);

    "Filter Method"
    // let evenArray= array.filter(num => num %2!==0);
    // console.log(evenArray);
    "Average of Class Marks"
    // let marks = [90, 85, 95, 92, 88];
    // let sum =0;
    // for(let val of marks){
    //     sum +=val;
    //     // sum = sum + val;
    // }
    // let avg = sum/marks.length;
    // console.log(`The average of class marks is ${avg}`);
    
    // let n = prompt("Enter a number");
    // // let arr=[n];
    // console.log(arr);

    "Loops in JavaScript"
    let i = 0;
    "While Loop"
    // while(i<5){
    //     console.log(i);
    //     i++;
    // }
    "Do While Loop"
    // do{
    //     console.log(i);
    //     i++
    // }while(i<5);
    "For of Loop"
    // let arrayOf = [10,20,30,40];
    // for(value of arrayOf){
    //     console.log(value);
    // };
    "A Javascript object is an entity having some state and behaviour (Properties and Methods)"
    "For In Loop(Used with Objects)"
    // let obj ={
    //     name : "Suleman",
    //     age : 20,
    //     profession:"student"
    // }
    // for(key in obj){
    //     console.log(`${key}:${obj[key]}`);
    // };
    "Break Statement"
    //let students=["Suleman","Usman","Ali","Ahmed"];
    
    //for(i=0;i<students.length;i++){
    // if(students[i]=="Ahmed") break;
    // console.log(students[i]);
    //};
    "Continue Statement"
    // for(let i=0;i<students.length;i++){
    //     if(students[i]=="Ali") continue;
    //     console.log(students[i]);
    // };
    "Assigning Function"
    // function greet(name){
    //     console.log(`Hello ${name} !`);
    // };
    // greet(prompt("Enter your name"));
    "Arrow functions"
    // const multiply = (c ,b) =>{
    //  return   c*b
    // }
    // console.log(multiply(10,10));
    
    "Ternary Operator"
    let num = 10;
    num>11 ? console.log(true) : console.log(false);

       "Call back Functions"
       // function greet(name, callback ){
       //     console.log(`hello` + name);
       //     callback();
       // }
       // function sayGoodbye(){
       //     console.log(`Goodbye!`);
       // }
       // greet("Suleman",sayGoodbye);
       "Synchronous CallBack"
    //    function fetchData(callback){
    //        setTimeout(()=>{
    //            console.log("Processing...");
    //            callback();
    //        },);
    //    }
    //    function processData (){
    //        setTimeout(()=>{
    //            console.log("Data Fetched");
    //        }, 3000);
    //    };
    //    fetchData(processData);
       "Example (of CallBack)"
    //    function fetchData(callback) {
    //        setTimeout(() => {
    //            console.log("Data fetched");
    //            callback();
    //        }, 2000);
    //    }
       
    //    function processData() {
    //        console.log("Processing data...");
    //    };
    
    // fetchData(processData);
    "Object"
    let students = {
        namee: "Suleman",
        age:20,
        marks:94.2,
        printMarks: function(){
            console.log(`marks is = ${this.marks}`);
        }
    };
    students.printMarks();
    "String Methods"
    let str = "Learning JavaScript!"
    console.log(str.length);
    console.log(str.slice(0,19));
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());
    console.log(str.indexOf("JavaScript"));
    console.log(str.lastIndexOf("S"));
    console.log(str.includes("Learning"));
    console.log(str.startsWith("Learning"));
    console.log(str.endsWith("!"));
    "Match"
    let matchResult = str.match(/Learning/g);
    console.log(matchResult);
    "Search" //Returns only index number of the Search
    let searchResult =str.search(/Learning/);
    console.log(searchResult);
    console.log(str.replace("Learning","Learned"));
    console.log(str.split(" "));
    console.log([str].join(""));
    console.log(str.trim());
    console.log(str.trimStart());
    console.log(str.trimEnd());
    console.log(str.repeat(2));
    "Array Destruction"
    let arr = [1,2,3];
    let [a,b,c]= arr;
    console.log(a,b,c);
    "Spread Operator"
    let arr1 = [1,2,3];
    let arr2 = [...arr1,4,5];
    console.log(arr2);
    "Set Method (A set is a collection of unique values)"
    let uniqueNumbers = new Set([1,2,3,4,5,2]);
    console.log(uniqueNumbers);
