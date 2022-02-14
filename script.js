'use strict';

// Variable declaration
let rock_btn = document.querySelector(".rock-btn");
let paper_btn = document.querySelector(".paper-btn");
let scissor_btn = document.querySelector(".scissor-btn");
let userScore = 0;
let computerScore = 0;
let user_score = document.querySelector(".user-score");
let computer_score = document.querySelector(".computer-score");
let gameResult = document.querySelector(".result");
let resetGame = document.querySelector(".reset-game");

// Rock
rock_btn.addEventListener("click", function(){
    startGame("rock");
    computerChoice();
}); 

// Paper
paper_btn.addEventListener("click", function(){
    startGame("paper");
    computerChoice();
});

// Scissor
scissor_btn.addEventListener("click", function(){
    startGame("scissor");
    computerChoice();
});

// Getting user's choice
function startGame(_userChoice){
    let _computerChoice = computerChoice();
     // computercoice array has values as ['rock', 'paper', 'scissor']

    if (_userChoice == "rock" && _computerChoice == 1){
        win();
    } else if (_userChoice == "paper" && _computerChoice == 0) {
        win();
    } else if (_userChoice == "scissor" && _computerChoice == 1){
        win();
    } 
    
    else if (_userChoice == "paper" && _computerChoice == 2) {
        loose();
    } else if (_userChoice == "rock" && _computerChoice == 2) {
        loose();
    } else if (_userChoice == "scissor" && _computerChoice == 0) {
        loose();
    }
    
    
    else if (_userChoice == "rock" && _computerChoice == 0) {
        draw();
    } else if (_userChoice == "paper" && _computerChoice == 1) {
        draw();
    } else if (_userChoice == "scissor" && _computerChoice == 2) {
        draw();
    }
};

// Getting computer's choice
function computerChoice(){
    let choice = ['rock','paper','scissor'];
    
    // getting random choice from choice array to display as computer's choice
    let randomChoice = Math.floor(Math.random() * 3); 
    return randomChoice;
}

// Result Status
function win(){
    userScore++; //initial value was 0
    user_score.innerHTML = userScore;
    computer_score.innerHTML = computerScore;
    gameResult.innerHTML = "You Won";
    streak();
}

function loose(){
    computerScore++
    user_score.innerHTML = userScore;
    computer_score.innerHTML = computerScore;
    gameResult.innerHTML = "You Lost";
    streak();
}

function draw(){
    gameResult.innerHTML = "It's a Draw";
}

function streak(){
    if (userScore % 10 == 0 && computerScore < userScore && userScore != 0){ // 10 % 10 =0

        // let newElement = document.createElement("streak");
        // let textnode = document.createTextNode("Streak");
        // newElement.appendChild(textnode);
        // document.getElementById("result").appendChild(newElement);

        gameResult.innerHTML = "You have a winning streak!!!";

    } else if (computerScore % 10 == 0 && userScore < computerScore && computerScore != 0){

        gameResult.innerHTML = "You have a loosing streak!!!";

    }
}

// Reset game
resetGame.addEventListener("click", function(){
    userScore = 0;
    computerScore = 0;
    user_score.innerHTML = userScore;
    computer_score.innerHTML = computerScore;
    gameResult.innerHTML = "Start Game";
});