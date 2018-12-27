function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function userPlay (){
    let playerInput = prompt("Please Enter Rock, Paper or Scissors");
    return playerInput.toLowerCase();
}

function playRound(playerSelection,computerSelection){
    computerSelection = computerPlay();
    playerSelection = userPlay();
    let winningRound = "Computer Choosed " + computerSelection + " You Win.." + playerSelection + " beats " + computerSelection;
    let losingRound = "Computer Choosed " + computerSelection + " You Loose.." + computerSelection + " beats " + playerSelection
    let roundWon = false;

    if(playerSelection === computerSelection){
        roundWon = null
        console.log( "Computer Choosed " + computerSelection + " Tie.. Please Try Again")
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log(losingRound)
       return  roundWon = false
        
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log(winningRound)
       return  roundWon = true
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log(winningRound)
       return  roundWon = true
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log(losingRound)
       return roundWon = false
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log(winningRound)
       return roundWon = true
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log(losingRound)
       return roundWon = false
    }
    
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let roundCount = 5;
    
    for (var i = 0; i<roundCount; i++){
        let roundWon = playRound();
        if(roundWon === true) {
         userScore++ ; 
         console.log( "User Has " + userScore + " points...Computer Has " + computerScore + " points.");          
            
        }
        else if(roundWon === false){
         computerScore++;  
         console.log( "User Has " + userScore + " points...Computer Has " + computerScore + " points.");         
        
        }
    }
    if(computerScore === userScore){
        console.log("\n\nGame is Tie..Want to Try Again ?");
    }
    else if(computerScore > userScore){
        console.log("\n\nNice try but Computer Won.. Want to Try Again ?");
    }
    else if(computerScore < userScore){
        console.log("\n\nGood Game.. You Won!! Wanto to Tray Again ?")
    }

}