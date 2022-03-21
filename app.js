let playerSelection;
let playerScore = 0;
let computerScore = 0;
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const weapons = document.querySelectorAll('.weapon-img');
const result = document.querySelector('.result');
const txtPlayerScore = document.querySelector('.player-score');
const txtComputerScore = document.querySelector('.computer-score');
const modal = document.querySelector('.modal-overlay');
const modalButton = document.querySelector('.retry-btn');
const modalText = document.querySelector('.modal-text');

weapons.forEach((weapon) => {
  weapon.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    computerSelection = computerPlay();

    if (playerScore != 5 && computerScore != 5) {
      playRound(playerSelection, computerSelection);
    }
  });
});

function updateScore() {
  txtPlayerScore.textContent = playerScore;
  txtComputerScore.textContent = computerScore;
}

function computerPlay() {
  const weapons = ['rock', 'paper', 'scissors'];
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function checkWinner() {
  if (playerScore == 5) {
    modal.classList.add('open-modal');
    modalText.textContent = 'Congrats! You win!';
    return;
  } else if (computerScore === 5) {
    modal.classList.add('open-modal');
    modalText.textContent = 'Computer wins! Nice try!';
    return;
  }
}

const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;

  if (player === 'rock') {
    if (computer === 'rock') {
      result.textContent = "It's a tie";
    } else if (computer === 'scissors') {
      result.textContent = 'Player wins the round! Rock beats Scissors';
      playerScore++;
      updateScore();
      checkWinner();
    } else {
      result.textContent = 'Computer wins the round! Paper beats Rock';
      computerScore++;
      updateScore();
      checkWinner();
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      result.textContent = 'Computer wins the round!  Rock beats Scissors';
      computerScore++;
      updateScore();
      checkWinner();
    } else if (computer === 'scissors') {
      result.textContent = "It's a tie";
    } else {
      result.textContent = 'Player wins the round!  Scissors beats Paper';
      playerScore++;
      updateScore();
      checkWinner();
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      result.textContent = 'Player wins the round! Paper beats Rock';
      playerScore++;
      updateScore();
      checkWinner();
    } else if (computer === 'scissors') {
      result.textContent = 'Computer wins the round! Scissors beats Paper';
      computerScore++;
      updateScore();
      checkWinner();
    } else {
      result.textContent = "It's a tie";
    }
  }
};

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

modalButton.addEventListener('click', (e) => {
  modal.classList.remove('open-modal');
  resetScore();
  updateScore();
});
