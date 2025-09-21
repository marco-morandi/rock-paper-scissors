// function to get random computer choice
function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * 3);

    // return string based on the random number generated
    switch(random_choice) {
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    }
}

// function to get user input
function getHumanChoice() {
    let human_choice = prompt("Enter rock, paper or scissors").toLowerCase();
    return human_choice;
}

// variables to keep track of the score
let humanScore = 0;
let computerScore = 0;

// function to play one round
function playRound(humanChoice, computerChoice) {
    switch(humanChoice){
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You won! Computer chose scissors\n");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("You lost! Computer chose paper\n")
                computerScore++;
            } else {
                console.log("It is a draw!\n")
            }
            break;

        case "paper":
            if (computerChoice === "rock") {
                console.log("You won! Computer chose rock\n");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("You lost! Computer chose scissors\n")
                computerScore++;
            } else {
                console.log("It is a draw!\n")
            }
            break;
        
        case "scissors":
            if (computerChoice === "paper") {
                console.log("You won! Computer chose paper\n");
                humanScore++;
            } else if (computerChoice === "rock") {
                console.log("You lost! Computer chose rock\n")
                computerScore++;
            } else {
                console.log("It is a draw!\n")
            }
            break;
    } 
    return;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

