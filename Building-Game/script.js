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