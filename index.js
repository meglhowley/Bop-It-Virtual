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
let timeout = ''

// //////////////////////////////
// Functions For Logic Here
computerChooses()

function timeOutSet() {
  timeout = setTimeout(compareTime, 5000)
}

function timeoutClear() {
  clearTimeout(timeout)
}

function computerChooses() {
  timeOutSet()
  const randomIndex = Math.floor(Math.random() * gameChoices.length)
  computerChoice = gameChoices[randomIndex]
  gameLength.push(computerChoice)
  h1.innerText = computerChoice
}

function gameOver() {
  console.log('Game Over!')
  timeoutClear()
}

function compareTime() {
  if (gameLength.length !== playerLength.length) {
    gameOver()
  }
}

function compareChoices() {
  if (computerChoice !== playerChoice) {
    gameOver()
  } else {
    timeoutClear()
    computerChooses()
  }
}

//player selections below

function playerSelectsBopIt() {
  playerChoice = 'bop-it!'
  playerLength.push(playerChoice)
  compareChoices()
}

function playerSelectsTwistIt() {
  playerChoice = 'twist-it!'
  playerLength.push(playerChoice)
  compareChoices()
}

function playerSelectsFlickIt() {
  playerChoice = 'flick-it!'
  playerLength.push(playerChoice)
  compareChoices()
}

function playerSelectsPullIt() {
  playerChoice = 'pull-it!'
  playerLength.push(playerChoice)
  compareChoices()
}

function playerSelectsSpinIt() {
  playerChoice = 'spin-it!'
  playerLength.push(playerChoice)
  compareChoices()
}

// // ////////////////////////////////
// // // Event Listeners Here

bopItButton.addEventListener('click', playerSelectsBopIt)
twistItButton.addEventListener('click', playerSelectsTwistIt)
flickItButton.addEventListener('click', playerSelectsFlickIt)
pullItButton.addEventListener('click', playerSelectsPullIt)
spinItButton.addEventListener('click', playerSelectsSpinIt)
