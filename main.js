// Select elements
const leftDice = document.querySelectorAll("img")[0];
const rightDice = document.querySelectorAll("img")[1];
const h1 = document.querySelector("h1")

function getRandomNum() {
  return Math.floor(Math.random() * 6) + 1; // num between 1-6
}

let randomNumber1 = getRandomNum();
let randomNumber2 = getRandomNum();
let randomDiceImage1 = `./images/dice${randomNumber1}.png`
let randomDiceImage2 = `./images/dice${randomNumber2}.png`

// Roll dice
leftDice.setAttribute("src", randomDiceImage1)
rightDice.setAttribute("src", randomDiceImage2)

// Winner
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 Wins! 🚩";
} else {
  h1.innerHTML = "Draw!";
}