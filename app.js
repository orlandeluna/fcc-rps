const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock-choice");
const paper_div = document.getElementById("paper-choice");
const scissors_div = document.getElementById("scissors-choice");

function game(userChoice) {
  console.log("Poopy" + userChoice);
}

function main() {
  rock_div.addEventListener('click', function() {
    game("rock-choice");
  })

  paper_div.addEventListener('click', function() {
    game("paper-choice");
  })

  scissors_div.addEventListener('click', function() {
    game("scissors-choice");
  })
}

main()
