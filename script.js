// function to get random computer choice
function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * 3);
    console.log(random_choice);

    // return string based on the random number generated
    switch(random_choice) {
        case 0: 
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
    }
}

let computer_choice = getComputerChoice();
console.log(computer_choice);