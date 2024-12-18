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
"String Methods in Javescript"

let str = "Hello, World!";
let str1 = "Hello,";
let str2 = "World!";

console.log(str.length);                //Returns the Length of the String
console.log(str.charAt(0));             //Returns the character at the specified index
console.log(str.includes("World"));     //Returns True or False
console.log(str.indexOf("World"));
console.log(str.slice(0,5));            //Extracts a section of the string and returns it as a new  string
console.log(str.substring(0,5));        //Similar to slice but cannot accept negative indices
console.log(str.toUpperCase());         //Returns the strings converted to UpperCase
console.log(str.toLowerCase());         // Returns the string converted to LowerCase
console.log(str.trim());                // Removes whitespace from the beginning and end of the string
console.log(str.replace("World","Javascript")); //Replace the first Occurrance of a specified value with another value
console.log(str.split());               //Splits the strings into an array
console.log(str1.concat(' ',str2));     //Concatenates the string arguments to the calling string 

    "Building Game"
"Accessing Nodes"
let userScorepara =  document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScore =  0;
let compScore = 0;

const genCompchoice = () =>
{
    let options = ["rock","paper","scissors"];
    let userIdx = Math.floor(Math.random()*3);
    return options [userIdx];
}
const drawGame = ()=>
{
    console.log("Draw");
    msg.innerText="Draw! Play Again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin ,userChoice,compchoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Lose");
        msg.innerText=`You Lose. ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice) =>
{
    console.log(`User choice is = ${userChoice}`);
    const compchoice = genCompchoice();
    console.log(`Comp choice is = ${compchoice}`);

    if(userChoice === compchoice){
        drawGame();
    } else 
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper")
        {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compchoice);
    } 
};

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

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
    // let array = [2,4,6,8,10,11];
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
    // let num = 10;
    // num>11 ? console.log(true) : console.log(false);

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
    // let students = {
    //     namee: "Suleman",
    //     age:20,
    //     marks:94.2,
    //     printMarks: function(){
    //         console.log(`Name is = ${this.namee}`);
    //     }
    // };
    // students.printMarks();

    "String Methods"
    // let str = "Learning JavaScript!"
    // console.log(str.length);
    // console.log(str.slice(0,19));
    // console.log(str.toLowerCase());
    // console.log(str.toUpperCase());
    // console.log(str.indexOf("JavaScript"));
    // console.log(str.lastIndexOf("S"));
    // console.log(str.includes("Learning"));
    // console.log(str.startsWith("Learning"));
    // console.log(str.endsWith("!"));
    "Match"
    // let matchResult = str.match(/Learning/g);
    // console.log(matchResult);
    "Search" //Returns only index number of the Search
    // let searchResult =str.search(/Learning/);
    // console.log(searchResult);
    // console.log(str.replace("Learning","Learned"));
    // console.log(str.split(" "));
    // console.log([str].join(""));
    // console.log(str.trim());
    // console.log(str.trimStart());
    // console.log(str.trimEnd());
    // console.log(str.repeat(2));
    "Array Destruction"
    // let arr = [1,2,3];
    // let [a,b,c]= arr;
    // console.log(a,b,c);
    "Spread Operator"
    // let arr1 = [1,2,3];
    // let arr2 = [...arr1,4,5];
    // console.log(arr2);
    "Set Method (A set is a collection of unique values)"
    // let uniqueNumbers = new Set([1,2,3,4,5,2]);
    // console.log(uniqueNumbers);
    "Generating Username"
    // let username = prompt ("Enter your name");
    // console.log(`@${username}${username.length+12}`);
    "Asynschronous Programming"
    // setTimeout(()=>{
    //     console.log("Hello World");
    // },3000);
    "CallBack"
    // function sum (a,b){
    //     console.log(a+b);
    // }
    // function calculator(c,d,e, sumCallback){
    //     console.log(c+d+e);
    //     sumCallback(c,d);
    // }
    // calculator(5,7,7,sum);
    'Callback Hell (function'
    // function getData(dataId,getNextdata){
    //     setTimeout(()=>{
    //         console.log(`Data is ${dataId}`);
    //         if(getNextdata){
    //             getNextdata();
    //         }
    //     },1000);
    // };
    "CallBack Hell (Nested callbacks stacked below one another forming a pyramid structure)"
    // getData(1,()=>{
    //     console.log(`Getting data 2`);
    //     getData(2, ()=>{
    //     console.log(`Getting data 3`);
    //         getData(3,()=>{
    //     console.log(`Getting data 4`);
    //             getData(4,()=>{
    //             console.log(`Data fetched`);
    //             });
    //         });
    //     });
    // });
    "Promises in JavaScript"
    // let promise = new Promise((resolve,reject)=>{
    //     console.log(`I am a promise `);
    // });
    function getData(dataId,getNextdata){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(`Data is ${dataId}`);
                   resolve("Success")
                    if(getNextdata){
                        getNextdata();
                    };
            },2000);
        });
    };
    // let promise = getData(123)
    // console.log(promise);

    // const getPromise =()=>{
    //     return new Promise ((resolve,reject)=>{
    //         console.log(`I am a Promise`);
    //         // resolve(`Fulfilled Success`);
    //         reject(`Some error`)
    //     });
    // };

    // let promise = getPromise();
    "If the promise is resolved/Fullfilled this function will run"
    // promise.then(()=>{
    //     console.log(`Promise is fulfilled Successfully`);
    // });

    "and If the promise is not resolved/Fullfilled this function will run"
    // promise.catch(()=>{
    //     console.log(`Rejected`);
    // });
    
    function asyncFunc1(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(`I am 1st Asynchronous Function`);
                resolve(`Success`);
            },2000);
        });
    };
    
    function asyncFunc2(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(`I am 2nd Asynchronous Function`);
                resolve(`Success`)
            },2000);
        });
    };

    console.log(`Fetching Data 1...`);
    asyncFunc1().then(()=>{
        console.log(`Fetching Data 2...`);
    asyncFunc2().then(()=>{});
    });
    







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
   
//    let button = document.querySelector("#theme");
//    let body = document.querySelector("body");
//    let mode = "light";
   
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
    let arrayM = [2,4,6,8,10,11];
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
    let ii = 0;
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
    // let num = 10;
    // num>11 ? console.log(true) : console.log(false);

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
    // let students = {
    //     namee: "Suleman",
    //     age:20,
    //     marks:94.2,
    //     printMarks: function(){
    //         console.log(`Name is = ${this.namee}`);
    //     }
    // };
    // students.printMarks();

    "String Methods"
    // let str = "Learning JavaScript!"
    // console.log(str.length);
    // console.log(str.slice(0,19));
    // console.log(str.toLowerCase());
    // console.log(str.toUpperCase());
    // console.log(str.indexOf("JavaScript"));
    // console.log(str.lastIndexOf("S"));
    // console.log(str.includes("Learning"));
    // console.log(str.startsWith("Learning"));
    // console.log(str.endsWith("!"));
    "Match"
    // let matchResult = str.match(/Learning/g);
    // console.log(matchResult);
    "Search" //Returns only index number of the Search
    // let searchResult =str.search(/Learning/);
    // console.log(searchResult);
    // console.log(str.replace("Learning","Learned"));
    // console.log(str.split(" "));
    // console.log([str].join(""));
    // console.log(str.trim());
    // console.log(str.trimStart());
    // console.log(str.trimEnd());
    // console.log(str.repeat(2));
    "Array Destruction"
    // let arr = [1,2,3];
    // let [a,b,c]= arr;
    // console.log(a,b,c);
    "Spread Operator"
    // let arr1 = [1,2,3];
    // let arr2 = [...arr1,4,5];
    // console.log(arr2);
    "Set Method (A set is a collection of unique values)"
    // let uniqueNumbers = new Set([1,2,3,4,5,2]);
    // console.log(uniqueNumbers);
    "Generating Username"
    // let username = prompt ("Enter your name");
    // console.log(`@${username}${username.length+12}`);
    "Asynschronous Programming"
    // setTimeout(()=>{
    //     console.log("Hello World");
    // },3000);
    "CallBack"
    // function sum (a,b){
    //     console.log(a+b);
    // }
    // function calculator(c,d,e, sumCallback){
    //     console.log(c+d+e);
    //     sumCallback(c,d);
    // }
    // calculator(5,7,7,sum);
    'Callback Hell (function'
    // function getData(dataId,getNextdata){
    //     setTimeout(()=>{
    //         console.log(`Data is ${dataId}`);
    //         if(getNextdata){
    //             getNextdata();
    //         }
    //     },1000);
    // };
    "CallBack Hell (Nested callbacks stacked below one another forming a pyramid structure)"
    // getData(1,()=>{
    //     console.log(`Getting data 2`);
    //     getData(2, ()=>{
    //     console.log(`Getting data 3`);
    //         getData(3,()=>{
    //     console.log(`Getting data 4`);
    //             getData(4,()=>{
    //             console.log(`Data fetched`);
    //             });
    //         });
    //     });
    // });
    "Promises in JavaScript"
    // let promise = new Promise((resolve,reject)=>{
    //     console.log(`I am a promise `);
    // });
    // function getData(dataId){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log(`Data is ${dataId}`);
    //                resolve("Success")
    //         },2000);
    //     });
    // };

    // getData(1).then((res)=>{
    //     return getData(2);
    // }).then((res)=>{
    //     return getData(3);
    // });
    
//    function getdata(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Data is ${dataId}`);
//             resolve(`Success`);
//         },2000);
//     })
//    };

//    console.log(`Fetching data...`);
   
//    getdata(1).then(()=>{
//     return getdata(2);
//    })

    "If the promise is resolved/Fullfilled this function will run"
    // promise.then(()=>{
    //     console.log(`Promise is fulfilled Successfully`);
    // });

    "and If the promise is not resolved/Fullfilled this function will run"
    // promise.catch(()=>{
    //     console.log(`Rejected`);
    // });
    
    // function asyncFunc1(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log(`I am 1st Asynchronous Function`);
    //             resolve(`Success`);
    //         },2000);
    //     });
    // };
    
    // function asyncFunc2(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log(`I am 2nd Asynchronous Function`);
    //             resolve(`Success`)
    //         },2000);
    //     });
    // };

    // console.log(`Fetching Data 1...`);
    // asyncFunc1().then(()=>{
    //     console.log(`Fetching Data 2...`);
    // asyncFunc2().then(()=>{});
    // });
    

    async function hello(){
        console.log(`I am asynchronous function`);
    };