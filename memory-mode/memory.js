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

function instructions1() {
  h1.innerText = 'do as i say...'
}

function instructions2() {
  h1.innerText = 'and as i do...'
}

function instructions3() {
  h1.innerText = 'there is no time limit...'
}

function instructions4() {
  h1.innerText = '...but order matters too...'
}

function instructions5() {
  h1.innerText = 'are you ready?'
}

function instructions6() {
  h1.innerText = 'set...'
}

const startGame = () => {
  h1.innerHTML = ''
  setTimeout(instructions1, 800)
  setTimeout(instructions2, 4000)
  setTimeout(instructions3, 7000)
  setTimeout(instructions4, 10000)
  setTimeout(instructions5, 13000)
  setTimeout(instructions6, 16000)
  setTimeout(computerChooses, 19000)
  backgroundAudio.play()
}

const styleOpacity = () => {
  h1.style.opacity = '0'
}

function playBopItCommand() {
  let bopItCommand = new Audio('../audio/bop-it-command.mp3')
  bopItCommand.play()
}

function playTwistItCommand() {
  let twistItCommand = new Audio('../audio/twist-it-command.mp3')
  twistItCommand.play()
}

function playSpinItCommand() {
  let spinItCommand = new Audio('../audio/spin-it-command.mp3')
  spinItCommand.play()
}

function playFlickItCommand() {
  let flickItCommand = new Audio('../audio/flick-it-command.mp3')
  flickItCommand.play()
}
function playPullItCommand() {
  let pullItCommand = new Audio('../audio/pull-it-command.mp3')
  pullItCommand.play()
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
  delayLoop(500)
}

const computerChooses = () => {
  const randomIndex = Math.floor(Math.random() * gameChoices.length)
  computerChoice = gameChoices[randomIndex]
  cpuArr.push(computerChoice)
  console.log(`cpu: ${cpuArr}`)
  displayCommands()
  playerArr = []
  bopItButton.addEventListener('click', playerSelectsBopIt)
  twistItButton.addEventListener('click', playerSelectsTwistIt)
  flickItButton.addEventListener('click', playerSelectsFlickIt)
  pullItButton.addEventListener('click', playerSelectsPullIt)
  spinItButton.addEventListener('click', playerSelectsSpinIt)
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
    setTimeout(computerChooses, 900)
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
  newImage.setAttribute('id', 'gushers')
  backToHomeDiv.prepend(newImage)
}

// // ////////////////////////////////
// // // Event Listeners Here

startButton.addEventListener('click', startGame)
// replayButton.addEventListener('click', startGame)

// backToHomeLink.addEventListener('mouseover', addGushers)
