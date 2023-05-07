const rpsBtn = document.querySelectorAll(".rps-btn");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const gameResult = document.querySelector(".result");

let playerChoice
let computerChoice;

rpsBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        playerChoice = btn.innerText;
        computerTurn()

        player.innerText = `Player: ${playerChoice}`
        computer.innerText = `Computer: ${computerChoice}`
        gameResult.innerText = `Result: ${result()}`
    })
})

const computerTurn = () => {
    computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * rpsBtn.length)]
   return computerChoice
}

const result = () => {
    switch(true){
        case playerChoice === computerChoice:
            return "Draw";
            break;
        case playerChoice === "Scissors" && computerChoice === "Paper":
        case playerChoice === "Paper" && computerChoice === "Rock":
        case playerChoice === "Rock" && computerChoice === "Scissors":
            return "You win";
            break;
        default:
            return "You lose";
            break
        ;
    }
}