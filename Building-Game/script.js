let choices = document.querySelectorAll(".choice");

const genCompchoice = ()=>
{
    const options = ["rock","paper","scissors"];
    const userIdx = Math.floor(Math.random()*3);
    return options [userIdx];
}
const playGame = (userChoice) =>
{
    console.log(`User choice is ${userChoice}`);
    const compchoice = genCompchoice();
    console.log(`Comp choice is ${compchoice}`);
};

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=> {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});