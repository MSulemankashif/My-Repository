let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".btn");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

genCompchoice=()=>{
    let options =["rock","papers","scissors"]
    let compChoice = Math.floor(Math.random()*3);
    return options [compChoice];
}

drawGame=()=>{
    console.log(`Draw Game!`);
    msg.innerText=`Draw Game! Play again`;
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor=`green`
    } else{
        compScore++;
        compScorePara.innerText=compScore 
        msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor=`red`;
    }
}
playGame =(userChoice)=>{
    console.log(`User choice is ${userChoice}`);
    let compChoice = genCompchoice();
    console.log(`Comp choice is ${compChoice}`);
    
    if(userChoice===compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice=== rock)
        {
            userWin= compChoice=== "papers"? true : false;
        } else if(userChoice==="paper"){
            userWin= compChoice==="scissors"? true:false;
        }else{
            userWin = compChoice==="rock"? true : false;
        }
        showWinner(userWin,compChoice,userChoice)
    };
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
    playGame(userChoice)        
    });
});