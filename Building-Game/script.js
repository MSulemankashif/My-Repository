let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

gencompChoice= ()=>
{
    let options = ["rock","paper","scissors"];
    let compChoice = Math.floor(Math.random()*3);
    return options [compChoice];
}

drawGame=()=>
{
    console.log("Game Draw!");
    msg.innerText="Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else 
    {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
playGame=(userChoice)=>
{
    console.log(`User choice is ${userChoice}`);
    let compChoice = gencompChoice();
    console.log(`Comp choice is ${compChoice}`);

    if(userChoice === compChoice)
    {
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === rock)
        {
            userWin = compChoice === "paper"? true : false;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors"? true : false;
        } else {
            userWin = compChoice ===  "rock"? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    };
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});