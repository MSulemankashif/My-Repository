let choices = document.querySelectorAll('.choice');
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-choice");
let compScorepara = document.querySelector("#comp-choice");
let userScore = 0;
let compScore = 0;

genCompChoice = () =>
    {
    let options = ['rock', "paper", 'scissors'];
    let compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];
}

drawGame = () => {
    console.log("Game Draw!");
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "#081b31";
}
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
    })
});

playGame = (userChoice) => {
    console.log(`User choice is ${userChoice}`);
    let compChoice = genCompChoice();
    console.log(`Computer Choice is ${compChoice}`);

    if(compChoice === userChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="Paper"? true : false;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? true : false;
        }else{
            userWin = compChoice === "rock"? true : false;
        }
    }
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
