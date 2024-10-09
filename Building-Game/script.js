let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

genCompchoice= ()=>
{
    let options = ["rock","paper","scissors"];
    let compchoice = Math.floor(Math.random()*3);
    return options [compchoice];
}

drawGame=()=>
{
    console.log("Game Draw!");
    msg.innerText="Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compchoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else 
    {
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose! ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
playGame=(userChoice)=>
{
    console.log(`User choice is ${userChoice}`);
    let compchoice = genCompchoice();
    console.log(`Comp choice is ${compchoice}`);

    if(userChoice === compchoice)
    {
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === rock)
        {
            userWin = compchoice === "paper"? true : false;
        } else if(userChoice === "paper") {
            userWin = compchoice === "scissors"? true : false;
        } else {
            userWin = compchoice ===  "rock"? true : false;
        }
        showWinner(userWin,userChoice,compchoice)
    };
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});