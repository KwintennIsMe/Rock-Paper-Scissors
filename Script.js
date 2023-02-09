console.log("Hello world")
let computerChoice
let playerChoice

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
getComputerChoice();
console.log(computerChoice);