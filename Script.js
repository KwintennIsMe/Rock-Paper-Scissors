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
        computerChoice = "Rock";
    } else if (choiceNum === 1) {
        computerChoice = "Paper";
    } else if (choiceNum === 2) {
        computerChoice = "Scissors"
    }
    console.log(computerChoice);
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let gameDeclaration;
    if ((playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        gameDeclaration = `You win! ${playerSelection} beats ${computerSelection}!`;
        return gameDeclaration;
        winStatus = ++winStatus;
    } else if ((playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper")) {
        gameDeclaration = `You lose! ${computerSelection} beats ${playerSelection}!`
        return gameDeclaration;
        loseStatus = ++loseStatus;
    } else if (playerSelection === computerSelection) {
        gameDeclaration = "Draw!"
        return gameDeclaration;
    } 
    else {
        console.log("Something went wrong.")
    }
    console.log(gameDeclaration);
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
