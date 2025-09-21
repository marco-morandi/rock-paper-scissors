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

// function that simulates a full game
function playGame(numberOfGames) {
    let i = 0;

    let humanChoice = "";
    let computerChoice = "";

    while (i < numberOfGames) {
       humanChoice = getHumanChoice();
       computerChoice = getComputerChoice();

       playRound(humanChoice, computerChoice);

       console.log(`# CURRENT SCORE #\n YOU: ${humanScore} COMPUTER: ${computerScore}`);
        
       i++;
    }

    if(humanScore > computerScore) {
        console.log("Congratulations, you won!");
    } else {
        console.log("Can't you even win against a random playing computer?");
    }
}

let numberOfGames = prompt("How many game do you want to play? ");
// check input validation with default value
if (isNaN(numberOfGames) || numberOfGames <= 0) {
    numberOfGames = 5;
}
playGame(numberOfGames);