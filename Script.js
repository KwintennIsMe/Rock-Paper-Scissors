console.log("Hello world")
let computerChoice;
let playerChoice;
let winStatus;
let loseStatus;
// This is a test
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let choiceNum = getRandomInt()
    if (choiceNum === 0) {
        computerChoice = "rock";
    } else if (choiceNum === 1) {
        computerChoice = "paper";
    } else if (choiceNum === 2) {
        computerChoice = "scissors"
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let gameDeclaration;
    if (playerSelection === "paper" && computerSelection === "rock") {
        gameDeclaration = "You win! Paper beats Rock!";
        return gameDeclaration;
        winStatus = ++winStatus;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        gameDeclaration = "You win! Rock beats Scissors!";
        return gameDeclaration;
        winStatus = ++winStatus;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        gameDeclaration = "You win! Scissors beats Paper!";
        return gameDeclaration;
        winStatus = ++winStatus;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        gameDeclaration = "You lose! Scissors beats Paper!"
        return gameDeclaration;
        loseStatus = ++loseStatus;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        gameDeclaration = "You lose! Rock beats Scissors!"
        return gameDeclaration;
        loseStatus = ++loseStatus;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        gameDeclaration = "You lose! Paper beats Rock!";
        return gameDeclaration;
        loseStatus = ++loseStatus;
    } else if ()
      else {
        console.log("Something went wrong.")
    }
    console.log(gameDeclaration);
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
