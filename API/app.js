const URL = "https://cat-fact.herokuapp.com/facts";

// let getFacts = async ()=>{
//     console.log(`Getting data.......`);
// let response = await fetch(URL);
//     console.log(response);
// };
    // Using IFFE
(async ()=>{
    console.log(`Getting data.......`);
let response = await fetch(URL);
    console.log(response);
})();