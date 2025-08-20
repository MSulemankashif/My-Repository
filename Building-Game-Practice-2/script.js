const game = () => {
    let playerScore = 0;
    let compScore = 0;
    let moves = 0;

    const playGame = () =>{
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");

    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const compOptions = ["rock", "paper", "scissor"];

    playerOptions.forEach(Option => {
        Option.addEventListener('click', function(){
            const movesLeft = document.querySelector(".movesleft");
            
        })
    })

    }
}