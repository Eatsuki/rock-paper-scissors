const computerPlay = () => {
  const weapons = ['rock', 'paper', 'scissors'];
  return weapons[Math.floor(Math.random() * weapons.length)];
};

const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;

  if (player === 'rock') {
    if (computer === 'rock') {
      return "It's a tie";
    } else if (computer === 'scissors') {
      return 'Player wins the round! Rock beats Scissors';
    } else {
      return 'Computer wins the round! Paper beats Rock';
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      return 'Computer wins the round!  Rock beats Scissors';
    } else if (computer === 'scissors') {
      return "It's a tie";
    } else {
      return 'Player wins the round!  Scissors beats Paper';
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      return 'Player wins the round! Paper beats Rock';
    } else if (computer === 'scissors') {
      return 'Computer wins the round! Scissors beats Paper';
    } else {
      return "It's a tie";
    }
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt('Choose your weapon! Rock | Paper | Scissors');
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();
