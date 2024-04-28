let humanScore = 0;
let computerScore = 0;
let choices = ["rock", "paper","scissors"];    
let humanSelection;
let computerSelection;
let humanChoice;
let computerChoice

const inputChoices = Array.from(document.querySelectorAll(".inputChoice"));
const humanDashboard = document.querySelector(".humanScore");
const computerDashboard = document.querySelector(".computerScore");
const computerChoiceImg = document.querySelector(".computerChoice");
const dialog = document.querySelector(".startGame");
const bg = document.querySelector(".main");
const winner = document.querySelector(".winner");

inputChoices.forEach((input) =>
    input.addEventListener("click", () =>{
        return playGame(humanChoice = input.dataset.input);
    })
);

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    computerChoice = choices[random];
    return computerChoice;
}

function computerImg(){
    switch(computerChoice){
        case "rock":
            return computerChoiceImg.src = "img/rockR.svg";
        case "paper":
            return computerChoiceImg.src = "img/paperR.svg";
        case "scissors":
            return computerChoiceImg.src = "img/scissorsR.svg";
    }
}

function playRound(humanChoice, computerChoice){
    if(computerChoice == choices[0] && humanChoice == choices[2]
    || computerChoice == choices[2] && humanChoice == choices[1]
    || computerChoice == choices[1] && humanChoice == choices[0]
    ){
        bg.style.backgroundColor = "RGB(255,127,127)";
        dashboard(computerScore++);
    }else
    if(humanChoice == choices[0] && computerChoice == choices[2]
    ||humanChoice == choices[2] && computerChoice == choices[1]
    ||humanChoice == choices[1] && computerChoice == choices[0]
    ){
        bg.style.backgroundColor = "RGB(144,238,144)";
        dashboard(humanScore++);
    }else{
        bg.style.backgroundColor = "#DDDDDD";
    }
}

function dashboard(){
    humanDashboard.innerHTML = humanScore;
    computerDashboard.innerHTML = computerScore;
    return endGame(computerScore, humanScore);
}

function playGame(){
        humanSelection = humanChoice;
        computerSelection = getComputerChoice();
        computerImg();
        playRound(humanSelection, computerSelection);
}

function endGame(computerScore,humanScore){
    if(computerScore == 5 ){
        winner.innerHTML = "You lose😔";
        dialog.showModal();
    }else if(humanScore ==5){
        winner.innerHTML = "You win🎉";
        dialog.showModal();
    }
}

function startGame(){
    humanScore = 0;
    computerScore = 0;
    humanDashboard.innerHTML = humanScore;
    computerDashboard.innerHTML = computerScore;
    bg.style.backgroundColor = "#DDDDDD";
    dialog.close(); 
}
