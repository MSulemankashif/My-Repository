// for(i = 1; i <= 100; i++)
// {
//     document.write(i , " : Suleman" , "<br>");
    
// }
let namee = "Suleman"
let age = 18

// document.write("Hello <b>" + namee  + "</b> thank you for contacting us (your age is) " + age + " we will be back as soon as possible ...")


let a = 10
let b = 9
let c = 10

let cond1 = a === b;
let cond2 = a > b;

// console.log(cond1 && cond2);    // Logical And Operator
// console.log(cond1 || cond2);    //Logical OR
 // console.log( ! (a > b) );    //Logical NOT


//Loops

// let stds = ["Ali", "Usama", "Asad"];

// stds.forEach(function(std) {
//     document.write(std + "<br>");
// });

//Ternary Operators
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// let namee1 = prompt("Enter your Name Here");
// document.write("Hello <b>" + namee1 + "</b> Good to have you here we will contact you as soon as possible...");

// let num = prompt("Enter a number")

// if(num % 5 === 0)
// {
//     console.log(num, "is a mutiple of 5");
    
// } else{
//     console.log(num, "is not a mutiple of 5");
// }

let score = prompt("Enter Your Marks" )
let grade;

if (score >= 90 && score <=100 )
{
    grade="A";
}else if (score >= 70 && score <= 89)
{
    grade = "B";
}
else if (score >= 50 && score <= 69)
    {
        grade = "C";
    }
else if (score >= 30 && score <= 49)
{
    grade = "D";
}
else
{
    console.log("Please Enter Corect Marks");
    
}

document.write("your Grade is ", grade ," According to your percenteage" );




