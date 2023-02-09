let winStatus = 0;
let loseStatus = 0;
let drawStatus = 0;
// This is a test
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
function getComputerChoice() {
    let computerChoice
    let choiceNum = getRandomInt()
    if (choiceNum === 0) {
        computerChoice = "Rock";
    } else if (choiceNum === 1) {
        computerChoice = "Paper";
    } else if (choiceNum === 2) {
        computerChoice = "Scissors"
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let gameDeclaration;
    console.log(`Computer chose ${computerSelection}.`);
    if ((playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        gameDeclaration = `You win! ${playerSelection} beats ${computerSelection}!`;
        winStatus += 1;
        return gameDeclaration;
    } else if ((playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper")) {
        gameDeclaration = `You lose! ${computerSelection} beats ${playerSelection}!`
        loseStatus += 1;
        return gameDeclaration;       
    } else if (playerSelection === computerSelection) {
        gameDeclaration = "Draw!"
        drawStatus += 1;
        return gameDeclaration;
    } 
    else {
        console.log("Something went wrong.")
    }
    console.log(gameDeclaration);
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        let gameDeclaration = playRound(playerSelection, computerSelection);
        console.log(gameDeclaration);
    }
    console.log(`You won ${winStatus} time(s), lost ${loseStatus} time(s), and had a draw ${drawStatus} time(s)!`)
}
game();