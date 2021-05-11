// Global Variables Here
const bopItButton = document.querySelector('#bop-it')
const twistItButton = document.querySelector('#twist-it')
const flickItButton = document.querySelector('#flick-it')
const pullItButton = document.querySelector('#pull-it')
const spinItButton = document.querySelector('#spin-it')
const startButton = document.querySelector('#start-button')
const h1 = document.querySelector('h1')
const scoreBoard = document.querySelector('#score-board')
const backgroundAudio = new Audio('./audio/background-song.mp3')
const bopItSound = new Audio('./audio/bop-it-sound.mp3')
const flickItSound = new Audio('./audio/flick-it-sound.mp3')
const pullItSound = new Audio('./audio/pull-it-sound.mp3')
const spinItSound = new Audio('./audio/spin-it-sound.mp3')
const twistItSound = new Audio('./audio/twist-it-sound.mp3')
const bopItCommand = new Audio('./audio/bop-it-command.mp3')
const flickItCommand = new Audio('./audio/flick-it-command.mp3')
const pullItCommand = new Audio('./audio/pull-it-command.mp3')
const spinItCommand = new Audio('./audio/spin-it-command.mp3')
const twistItCommand = new Audio('./audio/twist-it-command.mp3')

let gameChoices = ['bop-it!', 'flick-it!', 'pull-it!', 'twist-it!', 'spin-it!']
let gameLength = []
let playerLength = []
let playerChoice = ''
let computerChoice = ''
let timeout = ''
let highScore = 0

// //////////////////////////////
// Functions For Logic Here
// computerChooses()

function timeOutSet() {
  timeout = setTimeout(compareTime, 3000)
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
  if (computerChoice === gameChoices[0]) {
    backgroundAudio.pause()
    bopItCommand.play()
    backgroundAudio.play()
  } else if (computerChoice === gameChoices[1]) {
    backgroundAudio.pause()
    flickItCommand.play()
    backgroundAudio.play()
  } else if (computerChoice === gameChoices[2]) {
    backgroundAudio.pause()
    pullItCommand.play()
    backgroundAudio.play()
  } else if (computerChoice === gameChoices[3]) {
    backgroundAudio.pause()
    twistItCommand.play()
    backgroundAudio.play()
  } else if (computerChoice === gameChoices[4]) {
    backgroundAudio.pause()
    spinItCommand.play()
    backgroundAudio.play()
  }
}

function gameOver() {
  backgroundAudio.pause()
  h1.innerText = 'GAME. OVER.'
  timeoutClear()
  if (playerLength.length > highScore) {
    highScore = gameLength.length
    scoreBoard.innerHTML = `High Score: ${highScore}`
  }
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
    setTimeout(computerChooses, 1000)
  }
}

//player selections below

function startGame() {
  computerChooses()
  backgroundAudio.play()
}

function playerSelectsBopIt() {
  playerChoice = 'bop-it!'
  playerLength.push(playerChoice)
  backgroundAudio.pause()
  bopItSound.play()
  backgroundAudio.play()
  compareChoices()
}

function playerSelectsTwistIt() {
  playerChoice = 'twist-it!'
  playerLength.push(playerChoice)
  backgroundAudio.pause()
  twistItSound.play()
  backgroundAudio.play()
  compareChoices()
}

function playerSelectsFlickIt() {
  playerChoice = 'flick-it!'
  playerLength.push(playerChoice)
  backgroundAudio.pause()
  flickItSound.play()
  backgroundAudio.play()
  compareChoices()
}

function playerSelectsPullIt() {
  playerChoice = 'pull-it!'
  playerLength.push(playerChoice)
  backgroundAudio.pause()
  pullItSound.play()
  backgroundAudio.play()
  compareChoices()
}

function playerSelectsSpinIt() {
  playerChoice = 'spin-it!'
  playerLength.push(playerChoice)
  backgroundAudio.pause()
  spinItSound.play()
  backgroundAudio.play()
  compareChoices()
}

// // ////////////////////////////////
// // // Event Listeners Here

bopItButton.addEventListener('click', playerSelectsBopIt)
twistItButton.addEventListener('click', playerSelectsTwistIt)
flickItButton.addEventListener('click', playerSelectsFlickIt)
pullItButton.addEventListener('click', playerSelectsPullIt)
spinItButton.addEventListener('click', playerSelectsSpinIt)
startButton.addEventListener('click', startGame)
