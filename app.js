let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock-choice");
const paper_div = document.getElementById("paper-choice");
const scissors_div = document.getElementById("scissors-choice");

function getComputerChoice() {
  const choices = ['rock-choice', 'paper-choice', 'scissors-choice'];
  randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock-choice") return "Rock";
  if (letter === "paper-choice") return "Paper";
  if (letter === "scissors-choice") return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "user".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You Win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "user".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallComputerWord = "user".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw!`;
  userChoice_div.classList.add('purple-glow');
  setTimeout(() => userChoice_div.classList.remove('purple-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rock-choicescissors-choice":
    case "paper-choicerockchoice":
    case "scissors-choicepaper-choice":
      win(userChoice, computerChoice);
      break;
    case "rock-choicepaper-choice":
    case "paper-choicescissors-choice":
    case "scissors-choicerock-choice":
      lose(userChoice, computerChoice);
      break;
    case "rock-choicerock-choice":
    case "paper-choicepaperchoice":
    case "scissors-choicescissors-choice":
      draw(userChoice, computerChoice);
      break;
  }
}

game()

function main() {
  rock_div.addEventListener('click', () => game("rock-choice"));
  paper_div.addEventListener('click', () => game("paper-choice"));
  scissors_div.addEventListener('click', () => game("scissors-choice"));
}

main()
