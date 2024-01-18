let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".paper");

let resultBtn = document.querySelector(".r-s-p-result-btn")

let result = document.querySelector(".r-s-p-result");
let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score");

let user = 0;
let computer = 0;

let userChoose;


function computerChoise() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];  
};

rock.addEventListener("click", () => {
    userChoose = "rock";
});

scissors.addEventListener("click", () => {
    userChoose = "scissors";
});

paper.addEventListener("click", () => {
    userChoose = "paper";
});


resultBtn.addEventListener("click", () => {
    let computerChoose = computerChoise();

    if (userChoose === computerChoose) {
        result.textContent = "Нічия";
        result.style.color = "black";
    } else
        if (
            (userChoose === "rock" && computerChoose === "scissors") ||
            (userChoose === "scissors" && computerChoose === "paper") ||
            (userChoose === "paper" && computerChoose === "rock")
        ){
            result.textContent = "Ви виграли раунд!";
            result.style.color = "rgba(3, 153, 0, 1)"
            user += 1;
            userScore.textContent = ` ${user}`;
        } else {
            result.textContent = "Комп’ютер виграв раунд!";
            result.style.color = "rgba(153, 0, 0, 1)"
            computer += 1;
            computerScore.textContent = ` ${computer}`;
        }
})