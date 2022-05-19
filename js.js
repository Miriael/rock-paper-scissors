function computerPlays() {
  let moves = ['rock', 'paper', 'scissors']
  computerMove = moves[Math.floor(Math.random() * moves.length)];
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == undefined) {
    return null;
  }
  if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'scissors' && playerSelection.toLowerCase() != 'paper') {
    alert('Invalid input.');
    return null;
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
    alert("You lose! Paper beats rock.");
    return false;
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
    alert("You win! Rock beats scissors.");
    return true;
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    alert("You win! Paper beats rock.");
    return true;
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
    alert("You lose! Scissors beat paper.");
    return false;
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
    alert("You lose! Rock beats scissors.");
    return false;
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
    alert("You win! Scissors beat paper.");
    return true;
  } else if (playerSelection.toLowerCase() == computerSelection) {
    alert("It's a tie!")
    return null;
  }
} 

function game() {
  let wins = 0;
  let losses = 0;
  for (let i = 0; i < 5; i++) {
    result = playRound(prompt('Rock, paper or scissors?'), computerPlays())
    if (result == null) {
      continue;
    } else if (result == true) {
      wins += 1;
    }
    else if (result == false) {
      losses += 1;
    }
  }
  alert(`Wins: ${wins} Losses: ${losses}`);
  }