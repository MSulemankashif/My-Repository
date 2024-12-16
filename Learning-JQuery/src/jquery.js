let body = document.querySelector("body");
let button = document.getElementById("theme");
let mode = "light";

button.addEventListener("click",()=>{
    if(mode==="light"){
        mode= "dark"
        body.classList.add("dark");
        body.classList.remove("light");
    } else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }; console.log(mode);
});

"Await Async functions"
// function api(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Data ${dataID}` );
//             resolve(200);
//         },2000);
//     });
// };

// async function getData(){
//     console.log(`Getting data 1...`);
//     await api(1);
//     console.log(`Getting data 2...`);
//     await api(2);
//     console.log(`Getting data 3...`);
//     await api(3);
//     console.log(`Getting data 4...`);
//     await api(4);
//     console.log(`Getting data 5...`);
//     await api(5);
//     console.log(`Getting data 6...`);
//     await api(6);
// }

function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Data is ${dataId}`);
            resolve(200);
        },2000);
    });
};

async function getData(){
    console.log(`Getting data 1...`);
    await api(1);
    console.log(`Getting data 2...`);
    await api(2);
    console.log(`Getting data 3...`);
    await api(3);
    console.log(`Getting data 4...`);
    await api(4);
};
// "IFFE (Immediately Invoked Function Expression) Not have to Execute "
(async function getData(){
    console.log(`Getting data 1...`);
    await api(1);
    console.log(`Getting data 2...`);
    await api(2);
    console.log(`Getting data 3...`);
    await api(3);
    console.log(`Getting data 4...`);
    await api(4);
})();

"Filter method"
// let array =["Suleman","usman","Ali","Aima"];
// let evenArr = array.filter(array => array.length>4)
// console.log(evenArr);
