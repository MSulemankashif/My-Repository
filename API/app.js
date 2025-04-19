const URL = 'https://dummyjson.com/test';

let getFacts = async ()=>{
    console.log(`Getting data.......`);
let response = await fetch(URL);
    console.log(response);
};

document.querySelector(".btn").addEventListener('click', getFacts);

    // Using IFFE
// (async ()=>{
//     console.log(`Getting data.......`);
// let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     // console.log(data[2].text);
//     document.getElementById("api").innerText=(data[2].text)
// })();

// let getFacts = async ()=>{
//     console.log(`Getting Data.....`);
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     document.getElementById("api").innerText=data[0].text
// };
//Promise Chaining
// function getFacts(){
//     fetch(URL).then((Response)=>{
//         return Response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         document.getElementById("api").innerText=(data[0].text)
//     });
// };

// let btn = document.querySelector(".btn");
// btn.addEventListener('click',getFacts);
