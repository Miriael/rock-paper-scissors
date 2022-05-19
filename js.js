//Create a function that randomly selects the computer's move and stores that in a variable
let computerMove = ''
let playerMove = ''
let wins = 0
let playCount = 0
const MOVES = ['rock', 'paper', 'scissors']
function computerPlays() {
  computerMove = MOVES[Math.floor(Math.random() * MOVES.length)]
  return computerMove;
}
//Create a function that plays a single round and returns who won
function playRound() {
  playerMove = prompt('Rock, paper or scissors?')
  computer = computerPlays()
  if (playerMove == undefined) {
    playerMove = ''
  }
  if (playerMove.toLowerCase() != 'rock' && playerMove.toLowerCase() != 'scissors' && playerMove.toLowerCase() != 'paper') {
    alert('Invalid input.');
  } else if (playerMove.toLowerCase() == 'rock' && computer == 'paper') {
    alert('You lost!');
    playCount += 1;
  } else if (playerMove.toLowerCase() == 'rock' && computer == 'scissors') {
    alert('You won!');
    playCount += 1;
    wins += 1;
  } else if (playerMove.toLowerCase() == 'paper' && computer == 'rock') {
    alert('You won!');
    playCount += 1;
    wins += 1;
  } else if (playerMove.toLowerCase() == 'paper' && computer == 'scissors') {
    alert('You lost!')
    playCount += 1
  } else if (playerMove.toLowerCase() == 'scissors' && computer == 'rock') {
    alert('You lost!');
    playCount += 1;
  } else if (playerMove.toLowerCase() == 'scissors' && computer == 'paper') {
    alert('You won!');
    playCount += 1
    wins += 1
  } else if (playerMove.toLowerCase() == computer) {
    alert("It's a tie!")
    playCount += 1
  }
} 
//Create a function that calls the play function X times and keeps track of games and score