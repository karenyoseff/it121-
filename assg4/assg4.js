// create array
const myArr = ["Rock", "Paper", "Scissors"];

// create random numbers
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);

// create message
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " ";

// conditions
if (player === computer) {
  message = message + "It's a tie" ;
} else if (player > computer) {
  message = message + "Player wins" ;
} else {
  message = message + "Computer wins" ;
}

console.log(message);