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
h1.setAttribute('class', 'h1')
const scoreBoard = document.querySelector('#score-board')
const backToHomeDiv = document.querySelector('#back2h')
const backToHomeLink = document.querySelector('#back2anchor')

//Audio files
const backgroundAudio = new Audio('../audio/background-song.mp3')
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
  setTimeout(computerChooses, 3000)
  backgroundAudio.play()
}

const styleOpacity = () => {
  h1.style.opacity = '0'
}

function playBopItCommand() {
  let bopItSound1 = new Audio('../audio/bop-it-sound.mp3')
  bopItSound1.play()
}

function playTwistItCommand() {
  let twistItSound1 = new Audio('../audio/twist-it-sound.mp3')
  twistItSound1.play()
}

function playSpinItCommand() {
  let spinItSound1 = new Audio('../audio/spin-it-sound.mp3')
  spinItSound1.play()
}

function playFlickItCommand() {
  let flickItSound1 = new Audio('../audio/flick-it-sound.mp3')
  flickItSound1.play()
}
function playPullItCommand() {
  let pullItSound1 = new Audio('../audio/pull-it-sound.mp3')
  pullItSound1.play()
}

function delayLoop(time) {
  for (let i = 0; i < cpuArr.length; i++) {
    setTimeout(function () {
      if (cpuArr[i] === 'bop-it!') {
        h1.innerHTML = cpuArr[i]
        playBopItCommand()
        h1.style.opacity = '1'
      } else if (cpuArr[i] === 'flick-it!') {
        h1.innerHTML = cpuArr[i]
        playFlickItCommand()
        h1.style.opacity = '1'
      } else if (cpuArr[i] === 'pull-it!') {
        h1.innerHTML = cpuArr[i]
        playPullItCommand()
        h1.style.opacity = '1'
      } else if (cpuArr[i] === 'twist-it!') {
        h1.innerHTML = cpuArr[i]
        playTwistItCommand()
        h1.style.opacity = '1'
      } else if (cpuArr[i] === 'spin-it!') {
        h1.innerHTML = cpuArr[i]
        playSpinItCommand()
        h1.style.opacity = '1'
      }
    }, time * i)
    h1.style.opacity = '0'
  }
}

function displayCommands() {
  cpuArr.forEach((command) => {})
  delayLoop(1000)
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
    setTimeout(computerChooses, 1000)
    console.log('next up!')
  } else {
    console.log('game over!')
  }
}

//player selections below

function playerSelectsBopIt() {
  const bopItSound = new Audio('../audio/bop-it-sound.mp3')
  bopItSound.play()
  playerChoice = 'bop-it!'
  playerArr.push(playerChoice)
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsTwistIt() {
  const twistItSound = new Audio('../audio/twist-it-sound.mp3')
  twistItSound.play()
  h1.innerHTML = ''
  playerChoice = 'twist-it!'
  playerArr.push(playerChoice)
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsFlickIt() {
  const flickItSound = new Audio('../audio/flick-it-sound.mp3')
  flickItSound.play()
  h1.innerHTML = ''
  playerChoice = 'flick-it!'
  playerArr.push(playerChoice)
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsPullIt() {
  const pullItSound = new Audio('../audio/pull-it-sound.mp3')
  pullItSound.play()
  h1.innerHTML = ''
  playerChoice = 'pull-it!'
  playerArr.push(playerChoice)
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function playerSelectsSpinIt() {
  const spinItSound = new Audio('../audio/spin-it-sound.mp3')
  spinItSound.play()
  h1.innerHTML = ''
  playerChoice = 'spin-it!'
  playerArr.push(playerChoice)
  if (playerArr.length < cpuArr.length) {
    compareChoice()
  } else if (playerArr.length >= cpuArr.length) {
    compareArrays()
  }
}

function addGushers() {
  const newImage = document.createElement('img')
  newImage.src = 'https://i.imgur.com/cSallsF.png'
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
backToHomeLink.addEventListener('mouseover', addGushers)
