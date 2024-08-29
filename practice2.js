let obj = {
    item : "Pen",
    price : 10
};

// console.log("The Cost of", obj.item,"is", obj.price);

// Templete Literals

// let output = `The Cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let namee= ("Suleman\tShah");

// console.log(namee.toUpperCase());

// let str1 = "Suleman";
// let str2 = "Shah";

// console.log(str1,str2);

// let username = "Suleman Kashif";

    "String Methods"
// console.log(username.replace("Su","li"));
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.trim());

// let usernamee = prompt("Enter Your First Name");
// let lastname = prompt("Enter Your Last Name");

// let fullName = usernamee + lastname;
// console.log("Your Username is", "@"+usernamee+lastname+fullName.length);

// Arrays
// let stdMarks = prompt("Enter Your Total Marks");

// let marks =[stdMarks]

// for(let idx=0;idx<marks.length;idx++)
// {
//     console.log(marks);
    
// }

// let cities = ["karachi","hyderabad","lahore","islamabad"];
// for(let city of cities)
// {
//     console.log(city.toUpperCase());
    
// }

// let marks = [98,56,78,67,89,77];
// let sum =0;

// for(let val of marks)
// {
//     sum += val;
// }

// let avg = sum / marks.length;

// console.log(`The average of class marks is = ${avg}`);

// let items = [250,645,300,900,50];
// let i=0;
// for(let val of items)
// {
//     console.log(`The value at ${i} index is ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`Value After Offer = ${items[i]}`);
//     i++  
// }

let items = [250,645,300,900,50];
let i=0;

for (let val of items)
{
    console.log(`The Value at ${i} index is ${val}`);
    let offer = val/10;
    items[i]= items[i] - offer 
    console.log(`After offer the price is ${items[i]}`);
    
    i++
    
}

