const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const results = document.querySelector('#gameLog');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
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

function victory() {
  gameCount += 1;
  winCount += 1;
  wins.textContent = `Wins: ${winCount}`;
}

function loss() {
  gameCount += 1;
  lossCount += 1;
  losses.textContent = `Losses: ${lossCount}`;
}

function computerPlays() {
  let moves = ['rock', 'paper', 'scissors']
  computerMove = moves[Math.floor(Math.random() * moves.length)];
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
    results.textContent += "You lose! Paper beats rock.\n";
    loss();
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
    results.textContent += "You win! Rock beats scissors.\n";
    victory();
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    results.textContent += "You win! Paper beats rock.\n";
    victory();
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
    results.textContent += "You lose! Scissors beat paper.\n";
    loss();
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
    results.textContent += "You lose! Rock beats scissors.\n";
    loss();
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
    results.textContent += "You win! Scissors beat paper.\n";
    victory();
  } else if (playerSelection.toLowerCase() == computerSelection) {
    results.textContent += "It's a tie!\n";
    gameCount += 1;
  }
} 