// function to get random computer choice
function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * 3);
    console.log(random_choice);

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
    let human_choice = prompt("Enter rock, paper or scissors");
    return human_choice;
}

// variables to keep track of the score
let humanScore = 0;
let computerScore = 0;