//Create a function that randomly selects the computer's move and stores that in a variable
const MOVES = ['rock', 'paper', 'scissors']
function computerPlays() {
  computerMove = MOVES[Math.floor(Math.random() * MOVES.length)]
  return computerMove;
}
//Create a function that plays a single round and returns who won
function playRound(playerSelection, computerSelection) {
  if (playerSelection == undefined) {
    playerSelection = ''
  }
  if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'scissors' && playerSelection.toLowerCase() != 'paper') {
    alert('Invalid input.');
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
    return "You lose! Paper beats rock."
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
    return "You win! Rock beats scissors."
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
    return "You win! Paper beats rock."
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
    return "You lose! Scissors beat paper."
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
    return "You lose! Rock beats scissors."
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
    return "You win! Scissors beat paper."
  } else if (playerSelection.toLowerCase() == computerSelection) {
    return "It's a tie!"
  }
} 

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt('Rock, paper or scissors?'), computerPlays())
  }
}
//Create a function that calls the play function X times and keeps track of games and score