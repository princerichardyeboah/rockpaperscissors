// Get the computer choice
// Declare a variable and assign the options to it
const options = ["rock", "paper", "scissors"];

// Create a function to get computer choice
function getComputerChoice() {
    // Declare a variable an assign the random choices to it
    const choice = options[Math.floor(Math.random() * options.length)];
    
    return choice;
}

//Create a function to check the winner
function checkWinner(playerSelection, computerSelection) {
  if(playerSelection == computerSelection) {
        return "tie";
  } 
  else if(
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ){
        return "Player";
  }
  else{
        return "Computer";
  }
}

//Create a function that plays a round of the game
function playRound(playerSelection, computerSelection) {
   // Declare a variable assign the check winner function to it
   const result = checkWinner(playerSelection, computerSelection);
   if(result == "tie") {
        return "It's a tie";
   }
   else if(result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
   }
   else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
   }

}

//Create a function to get the choice
function getPlayerChoice() {
    //Declare a variable to validate the input
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");   
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }

    }
}

//Create a function to play 5 rounds of the game
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("------------------");
        if(checkWinner(playerSelection, computerSelection) == "player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if(scorePlayer > scoreComputer) {
        console.log("player was the winner");
    }
    else if(scorePlayer < scoreComputer) {
        console.log("computer was the winner");
    }
    else {
        console.log("We have a tie");
    }
}
game()