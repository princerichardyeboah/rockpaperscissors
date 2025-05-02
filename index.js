// Select all choice buttons
const choiceButtons = document.querySelectorAll(".choice");

// Add event listeners to each button
choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.classList[1]; // Get the class name (rock, paper, or scissors)
        playGame(choice);
    });
});


function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = '';

    if (playerChoice === computerChoice) {
        resultText = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText = "You win!";
    } else {
        resultText = "Computer wins!";
    }

const resultDiv = document.getElementById("result");

// Clear previous result
resultDiv.textContent = "";

// Create elements for results
const playerChoiceText = document.createElement("p");
playerChoiceText.textContent = "You chose: ";
const playerChoiceStrong = document.createElement("strong");
playerChoiceStrong.textContent = playerChoice;
playerChoiceText.appendChild(playerChoiceStrong);
playerChoiceText.classList.add("result-text");

const computerChoiceText = document.createElement("p");
computerChoiceText.textContent = "Computer chose: ";
const computerChoiceStrong = document.createElement("strong");
computerChoiceStrong.textContent = computerChoice;
computerChoiceText.appendChild(computerChoiceStrong);
computerChoiceText.classList.add("result-text");

const resultTextEl = document.createElement("p");
resultTextEl.textContent = resultText;
resultTextEl.classList.add("result-highlight");

// Append elements to the result div
resultDiv.appendChild(playerChoiceText);
resultDiv.appendChild(computerChoiceText);
resultDiv.appendChild(resultTextEl);
}
