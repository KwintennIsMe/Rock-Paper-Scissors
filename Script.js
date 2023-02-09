console.log("Hello world")
let computerChoice;
let playerChoice;
let winStatus;
let loseStatus;

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
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let gameDeclaration;
    if (playerSelection === "paper" && computerSelection === "rock") {
        gameDeclaration = "You win! Paper beats Rock!";
        return gameDeclaration;
        winStatus = ++winStatus;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        gameDeclaration = "You win! Rock beats Scissors!";
        return gameDeclaration;
        winStatus = ++winStatus;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        gameDeclaration = "You win! Scissors beats Paper!";
        return gameDeclaration;
        winStatus = ++winStatus;
    }
}
getComputerChoice();
console.log(computerChoice);