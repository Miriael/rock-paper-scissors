const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const results = document.querySelector('#gameLog');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const hidden = document.querySelector('.hidden');
const hiddenText = document.querySelector('#finalResult');
const hiddenBtn = document.querySelector('#newGame');
let gameCount = 0;
let winCount = 0;
let lossCount = 0;
wins.textContent = `Wins: ${winCount}`;
losses.textContent = `Losses: ${lossCount}`;
results.setAttribute('style', 'white-space: pre;');

rockBtn.addEventListener('click', () => {
  playRound('rock', computerPlays());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', computerPlays());
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors', computerPlays());
});

hiddenBtn.addEventListener('click', () => {
  resetState();
});

function winRound() {
  gameCount += 1;
  winCount += 1;
  wins.textContent = `Wins: ${winCount}`;
}

function loseRound() {
  gameCount += 1;
  lossCount += 1;
  losses.textContent = `Losses: ${lossCount}`;
}

function computerPlays() {
  let moves = ['rock', 'paper', 'scissors']
  computerMove = moves[Math.floor(Math.random() * moves.length)];
  return computerMove;
}

function hideButtons() {
  rockBtn.setAttribute('style', 'display: none;');
  paperBtn.setAttribute('style', 'display: none;');
  scissorsBtn.setAttribute('style', 'display: none;');
}

function resetState() {
  hidden.setAttribute('style', 'display: none;')
  rockBtn.setAttribute('style', 'display: inline-block;');
  paperBtn.setAttribute('style', 'display: inline-block;');
  scissorsBtn.setAttribute('style', 'display: inline-block;');
  winCount = 0;
  lossCount = 0;
  gameCount = 0;
  results.textContent = '';
  wins.textContent = 'Wins: 0';
  losses.textContent = 'Losses: 0';
}

function checkStatus() {
  if (gameCount == 5) {
    if (winCount > lossCount) {
      hideButtons();
      hiddenText.textContent = `The game is over. You won by ${winCount - lossCount} points!`;
      hidden.setAttribute('style', 'display: block;');
    } else {
      hideButtons();
      hiddenText.textContent = `The game is over. You lost by ${lossCount - winCount} points!`;
      hidden.setAttribute('style', 'display: block;');
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
    results.textContent += "You lose! Paper beats rock.\n";
    loseRound();
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
    results.textContent += "You win! Rock beats scissors.\n";
    winRound();
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    results.textContent += "You win! Paper beats rock.\n";
    winRound();
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
    results.textContent += "You lose! Scissors beat paper.\n";
    loseRound();
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
    results.textContent += "You lose! Rock beats scissors.\n";
    loseRound();
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
    results.textContent += "You win! Scissors beat paper.\n";
    winRound();
  } else if (playerSelection.toLowerCase() == computerSelection) {
    results.textContent += "It's a tie!\n";
  }
  if (gameCount == 5) {
    checkStatus();
  }

  console.log(gameCount);
} 