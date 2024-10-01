
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

    "String Methods in Javescript"

let str = "Hello, World!";
let str1 = "Hello,";
let str2 = "World!";

console.log(str.length);                  //Returns the Length of the String
console.log(str.charAt(0));              //Returns the character at the specified index
console.log(str.includes("World"));      //Returns True or False
console.log(str.indexOf("World"));
console.log(str.slice(0,5));            //Extracts a section of the string and returns it as a new  string
console.log(str.substring(0,5));        //Similar to slice but cannot accept negative indices
console.log(str.toUpperCase());         //Returns the strings converted to UpperCase
console.log(str.toLowerCase());         // Returns the string converted to LowerCase
console.log(str.trim());                // Removes whitespace from the beginning and end of the string
console.log(str.replace("World","Javascript")); //Replace the first Occurrance of a specified value with another value
console.log(str.split());               //Splits the strings into an array
console.log(str1.concat(' ',str2));     //Concatenates the string arguments to the calling string 


