// getElementById is a very common method in the HTML DOM. Its used to read/edit an HTML element.
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button"); // returns all elements that matches 'button'
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice; // innerHTML returns the HTML content of an element.
    generateComputerChoice();
    getResult();
  })
);
// Setting computer's random choice through math.random
// there are only 3 possible choices: rock, paper or scissors.
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "ITS A DRAW!";
  }
  if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "YOU LOSE!";
  }
  if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "YOU LOSE!";
  }
  if (computerChoice === "paper" && playerChoice === "rock") {
    result = "YOU LOSE!";
  }
  if (computerChoice === "rock" && playerChoice === "paper") {
    result = "YOU WIN!";
  }
  if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "YOU WIN!";
  }
  if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "YOU WIN!";
  }
  resultDisplay.innerHTML = result;
}
