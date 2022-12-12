choices = document.querySelectorAll(".choice");
restart = document.querySelector(".restart-btn");
modal = document.querySelector(".modal");
resultDiv = document.querySelector("#result");
computerScore = document.querySelector("#computer-score");
playerScore = document.querySelector("#player-score");

const LOC = ["rock", "paper", "scissors"]; // List of Choice
let scorePlayer = 0;
let scoreComputer = 0;

function play(e) {
  restart.style.display = "inline-block";
  const compChoice = Math.floor(Math.random() * 3);
  const winner = checkWinner(e.target.id, LOC[compChoice]);

  if (winner === -1) {
    showResult(winner, compChoice);
  } else if (winner) {
    computerScore.innerHTML = ++scoreComputer;
    showResult(winner, compChoice);
  } else {
    playerScore.innerHTML = ++scorePlayer;
    showResult(winner, compChoice);
  }
}

choices.forEach((choice) => choice.addEventListener("click", play));

function checkWinner(player, computer) {
  if (player === computer) return -1;
  if (player === "rock" && computer === "scissors") return 0;
  if (player === "scissors" && computer === "paper") return 0;
  if (player === "paper" && computer === "rock") return 0;
  return 1;
}

function showResult(result, compChoice) {
  let RPC = LOC[compChoice]; //Rock Paper Scissors
  RPC = RPC.charAt(0).toUpperCase() + RPC.slice(1);
  modal.style.display = "inline-block";
  let html = "";
  if (result === 0) {
    html = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${LOC[compChoice]} fa-10x"></i>
        <p>Computer Chose ${RPC}</p>`;
  }
  if (result === 1) {
    html = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${LOC[compChoice]} fa-10x"></i>
        <p>Computer Chose ${RPC}</p>`;
  }
  if (result === -1) {
    html = `
        <h1 class="text-draw">Draw</h1>
        <i class="fas fa-hand-${LOC[compChoice]} fa-10x"></i>
        <p>Computer Chose ${RPC}</p>`;
  }
  resultDiv.innerHTML = html;
  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);
}

restart.addEventListener("click", () => {
  scorePlayer = 0;
  scoreComputer = 0;
  computerScore.innerHTML = scoreComputer;
  playerScore.innerHTML = scorePlayer;
  restart.style.display = "none";
});

///////////////////////////////////////
//COMPLETED
