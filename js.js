//Create a function that randomly selects the computer's move and stores that in a variable
let computerMove = ''
const MOVES = ['rock', 'paper', 'scissors']
function computerPlays() {
  computerMove = MOVES[Math.floor(Math.random() * MOVES.length)]
  console.log(computerMove)
}
//Create a function that asks the player for their move and stores it in a variable
//Create a function that evaluates who won and outputs the result
//Create a function that keeps track of the score and number of games and outputs it after every round