console.log('memory!')

// Global Variables Here
const bopItButton = document.querySelector('#bop-it')
const twistItButton = document.querySelector('#twist-it')
const flickItButton = document.querySelector('#flick-it')
const pullItButton = document.querySelector('#pull-it')
const spinItButton = document.querySelector('#spin-it')
const startButton = document.querySelector('#start-button')
const replayButton = document.createElement('button')
const h1 = document.querySelector('h1')
const scoreBoard = document.querySelector('#score-board')

//Audio files
const backgroundAudio = new Audio('../audio/background-song.mp3')
const bopItSound = new Audio('../audio/bop-it-sound.mp3')
const flickItSound = new Audio('../audio/flick-it-sound.mp3')
const pullItSound = new Audio('../audio/pull-it-sound.mp3')
const spinItSound = new Audio('../audio/spin-it-sound.mp3')
const twistItSound = new Audio('../audio/twist-it-sound.mp3')
const bopItCommand = new Audio('../audio/bop-it-command.mp3')
const flickItCommand = new Audio('../audio/flick-it-command.mp3')
const pullItCommand = new Audio('../audio/pull-it-command.mp3')
const spinItCommand = new Audio('../audio/spin-it-command.mp3')
const twistItCommand = new Audio('../audio/twist-it-command.mp3')
const gameOverMain = new Audio('../audio/main-game-over-2.mp3')
const backgroundSpeedUp1 = new Audio('../audio/background-speed-up-1.mp3')
const transitionSound = new Audio('../audio/transition-sound.mp3')
const backgroundSpeedUp2 = new Audio('../audio/speedup2.mp3')

let gameChoices = ['bop-it!', 'flick-it!', 'pull-it!', 'twist-it!', 'spin-it!']
let cpuArr = []
let playerArr = []
let playerChoice = ''
let computerChoice = ''
let timeout = ''
let highScore = 0

const startGame = () => {
  computerChooses()
}

function delayLoop(time) {
  for (let i = 0; i < cpuArr.length; i++) {
    setTimeout(function () {
      if (cpuArr[i] === 'bop-it!') {
        h1.innerHTML = cpuArr[i]
        bopItCommand.play()
      } else if (cpuArr[i] === 'flick-it!') {
        h1.innerHTML = cpuArr[i]
        flickItCommand.play()
      } else if (cpuArr[i] === 'pull-it!') {
        h1.innerHTML = cpuArr[i]
        pullItCommand.play()
      } else if (cpuArr[i] === 'twist-it!') {
        h1.innerHTML = cpuArr[i]
        twistItCommand.play()
      } else if (cpuArr[i] === 'spin-it!') {
        h1.innerHTML = cpuArr[i]
        spinItCommand.play()
      }
    }, time * i)
  }
}

function displayCommands() {
  cpuArr.forEach((command) => {})
  delayLoop(2000)
}

const computerChooses = () => {
  const randomIndex = Math.floor(Math.random() * gameChoices.length)
  computerChoice = gameChoices[randomIndex]
  cpuArr.push(computerChoice)
  console.log(`cpu: ${cpuArr}`)
  displayCommands()
  playerArr = []
}

function compareChoice() {
  for (let i = 0; i < playerArr.length; i++)
    if (cpuArr[i] === playerArr[i] && playerArr.length !== cpuArr.length) {
    } else {
      console.log('Game over!')
    }
}

function compareArrays() {
  if (playerArr[playerArr.length - 1] === cpuArr[playerArr.length - 1]) {
    console.log(`cpu: ${cpuArr}`)
    console.log(`player: ${playerArr}`)
    setTimeout(computerChooses, 2000)
    console.log('next up!')
  } else {
    console.log('game over!')
  }
}

//player selections below

function playerSelectsBopIt() {
  playerChoice = 'bop-it!'
  playerArr.push(playerChoice)
  bopItSound.play()
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsTwistIt() {
  playerChoice = 'twist-it!'
  playerArr.push(playerChoice)
  twistItSound.play()
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsFlickIt() {
  playerChoice = 'flick-it!'
  playerArr.push(playerChoice)
  flickItSound.play()
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsPullIt() {
  playerChoice = 'pull-it!'
  playerArr.push(playerChoice)
  pullItSound.play()
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsSpinIt() {
  playerChoice = 'spin-it!'
  playerArr.push(playerChoice)
  spinItSound.play()
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

// // ////////////////////////////////
// // // Event Listeners Here

startButton.addEventListener('click', startGame)
// replayButton.addEventListener('click', startGame)
bopItButton.addEventListener('click', playerSelectsBopIt)
twistItButton.addEventListener('click', playerSelectsTwistIt)
flickItButton.addEventListener('click', playerSelectsFlickIt)
pullItButton.addEventListener('click', playerSelectsPullIt)
spinItButton.addEventListener('click', playerSelectsSpinIt)
