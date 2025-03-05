const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(`Computer chose: ${choice}`);  
    return choice;  
}

function getHumanChoice() {
    let validatedInput = false;
    while (!validatedInput) { 
        const choice = prompt("Rock, Paper, or Scissors?");
        if (choice === null) { 
            console.log("Game cancelled.");
            return null;
        }
        const choiceInLowerCase = choice.toLowerCase().trim();
        if (options.includes(choiceInLowerCase)) {
            validatedInput = true;
            console.log(`You chose: ${choiceInLowerCase}`);
            return choiceInLowerCase;
        } else {
            console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) { 
        console.log("Round cancelled.");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log("It is a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    console.log("Welcome to Rock Paper Scissors!");
    
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        const humanSelection = getHumanChoice();
        if (humanSelection === null) {
            console.log("Game ended early.");
            return;
        }
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare the final winner
    console.log(`\nFinal Score: Player ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie!");
}
}


// Start the game
playGame();