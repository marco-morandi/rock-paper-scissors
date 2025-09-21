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

function getHumanChoice() {
    let human_choice = prompt("Enter rock, paper or scissors");
    return human_choice;
}

let human_choice = getHumanChoice();
console.log(human_choice);