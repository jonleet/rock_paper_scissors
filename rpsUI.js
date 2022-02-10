let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const outcomeDiv = document.querySelector(".outcome > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");



function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}

function capitalize(result) {
    if (result === "rock") return "Rock";
    if (result === "paper") return "Paper";
    if (result === "scissors") return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    outcomeDiv.innerHTML = capitalize(userChoice) + " beats " + capitalize(compChoice) + ". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}

function lose(userChoice, compChoice) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    outcomeDiv.innerHTML = capitalize(compChoice) + " beats " + capitalize(userChoice) + ". You lose!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow')}, 1000);
}

function tie(userChoice, compChoice) {
    outcomeDiv.innerHTML = capitalize(compChoice) + " versus " + capitalize(userChoice) + " is a tie. Try again!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('grey-glow')}, 1000);
}

function game(userChoice) {
    const compChoice = computerPlay();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, compChoice);
            break;
    }   
}


function main() {
    rockDiv.addEventListener("click", () => {
        game("rock");
    })
    paperDiv.addEventListener("click", () => {
        game("paper");
    })
    scissorsDiv.addEventListener("click", () => {
        game("scissors");
    }) 
}

main();