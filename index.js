// Global Variables Here
const bopItButton = document.querySelector('#bop-it')
const twistItButton = document.querySelector('#twist-it')
const flickItButton = document.querySelector('#flick-it')
const pullItButton = document.querySelector('#pull-it')
const spinItButton = document.querySelector('#spin-it')
const h1 = document.querySelector('h1')
let gameChoices = ['bop-it!', 'flick-it!', 'pull-it!', 'twist-it!', 'spin-it!']
let gameLength = []
let playerLength = []
let playerChoice = ''
let computerChoice = ''

// //////////////////////////////
// Functions For Logic Here
computerChooses()

function computerChooses() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length)
  let computerChoice = gameChoices[randomIndex]
  gameLength.push(computerChoice)
  h1.innerText = computerChoice
  setTimeout(compare, 6000)
}

function playerSelectsBopIt() {
  playerChoice = 'bop-it!'
  playerLength.push(playerChoice)
  console.log(playerChoice)
  console.log(playerLength)
  console.log(gameLength)
  console.log(playerLength.length)
  console.log(gameLength.length)
}

function gameOver() {
  console.log('GAME OVER!!')
}

function compare() {
  if (
    gameLength.length === playerLength.length &&
    computerChoice === playerChoice
  ) {
    computerChooses()
  } else {
    gameOver()
  }
}

// // ////////////////////////////////
// // // Event Listeners Here

bopItButton.addEventListener('click', playerSelectsBopIt)
// twistItButton.addEventListener('click', playerSelectsTwistIt)
// flickItButton.addEventListener('click', playerSelectsFlickIt)
// pullItButton.addEventListener('click', playerSelectsPullIt)
// spinItButton.addEventListener('click', playerSelectsSpinIt)
