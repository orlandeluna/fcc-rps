const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock-choice");
const paper_div = document.getElementById("paper-choice");
const scissors_div = document.getElementById("scissors-choice");

function getComputerChoice() {
  const choices = ['rock-choice', 'paper-choice', 'scissors-choice'];
  randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rock-choicescissors-choice":
    case "paper-choicerockchoice":
    case "scissors-choicepaper-choice":
      win();
      break;
    case "rock-choicepaper-choice":
    case "paper-choicescissors-choice":
    case "scissors-choicerock-choice":
      lose();
      break;
    case "rock-choicerock-choice":
    case "paper-choicepaperchoice":
    case "scissors-choicescissors-choice":
      draw();
      break;
  }
}

game()

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
