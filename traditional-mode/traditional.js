console.log('traditional!')

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
const backToHomeDiv = document.querySelector('#back2h')
const backToHomeLink = document.querySelector('#back2anchor')
const newImage = document.createElement('img')

//Audio files
const backgroundAudio = new Audio('../audio/background-song.mp3')
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
let gameLength = []
let playerLength = []
let playerChoice = ''
let computerChoice = ''
let timeout = ''
let highScore = 0

// //////////////////////////////
// Functions For Logic Here
// computerChooses()

function timeOutSet(time) {
  timeout = setTimeout(compareTime, time)
}

function timeoutClear() {
  clearTimeout(timeout)
}

function startGame() {
  computerChooses()
  backgroundAudio.play()
  bopItButton.addEventListener('click', playerSelectsBopIt)
  twistItButton.addEventListener('click', playerSelectsTwistIt)
  flickItButton.addEventListener('click', playerSelectsFlickIt)
  pullItButton.addEventListener('click', playerSelectsPullIt)
  spinItButton.addEventListener('click', playerSelectsSpinIt)
}

const speedUp1 = () => {
  backgroundSpeedUp1.play()
}

const speedUp2 = () => {
  backgroundSpeedUp2.play()
}

function callCommand() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length)
  computerChoice = gameChoices[randomIndex]
  gameLength.push(computerChoice)
  h1.innerText = computerChoice
  if (computerChoice === gameChoices[0]) {
    bopItCommand.play()
  } else if (computerChoice === gameChoices[1]) {
    flickItCommand.play()
  } else if (computerChoice === gameChoices[2]) {
    pullItCommand.play()
  } else if (computerChoice === gameChoices[3]) {
    twistItCommand.play()
  } else if (computerChoice === gameChoices[4]) {
    spinItCommand.play()
  }
}

function computerChooses() {
  if (gameLength.length === playerLength.length) {
    if (gameLength.length < 10) {
      callCommand()
      timeOutSet(2500)
    } else if (gameLength.length === 10) {
      console.log('speed up!')
      backgroundAudio.pause()
      h1.innerText = 'speed up!'
      transitionSound.play()
      setTimeout(speedUp1, 2500)
      setTimeout(callCommand, 2500)
    } else if (gameLength.length < 20) {
      callCommand()
      timeOutSet(1500)
    } else if (gameLength.length === 20) {
      console.log('speed up!')
      backgroundSpeedUp1.pause()
      h1.innerText = 'speed up!'
      transitionSound.play()
      setTimeout(speedUp2, 2500)
      setTimeout(callCommand, 2500)
    } else if (gameLength.length > 20) {
      callCommand()
      timeOutSet(1000)
    }
  }
}

function loserMessage() {
  const lose1 = new Audio('../audio/lose1.mp3')
  const lose2 = new Audio('../audio/lose2.mp3')
  const lose3 = new Audio('../audio/lose3.mp3')
  const lose4 = new Audio('../audio/lose4.mp3')
  const lose5 = new Audio('../audio/lose5.mp3')
  const lose6 = new Audio('../audio/lose6.mp3')
  const loserArray = [lose1, lose2, lose3, lose4, lose5, lose6]
  const randomIndex2 = Math.floor(Math.random() * loserArray.length)
  const randomLoserMessage = loserArray[randomIndex2]
  randomLoserMessage.play()
  if (playerLength.length > highScore && randomIndex2 === 0) {
    setTimeout(highscoreMessage, 1300)
    setTimeout(playAgain, 7500)
  } else if (playerLength.length > highScore && randomIndex2 === 1) {
    setTimeout(highscoreMessage, 3000)
    setTimeout(playAgain, 7500)
  } else if (playerLength.length > highScore && randomIndex2 === 2) {
    setTimeout(highscoreMessage, 1000)
    setTimeout(playAgain, 7500)
  } else if (playerLength.length > highScore && randomIndex2 === 3) {
    setTimeout(highscoreMessage, 3000)
    setTimeout(playAgain, 7500)
  } else if (playerLength.length > highScore && randomIndex2 === 4) {
    setTimeout(highscoreMessage, 1000)
    setTimeout(playAgain, 7500)
  } else if (playerLength.length > highScore && randomIndex2 === 5) {
    setTimeout(highscoreMessage, 2700)
    setTimeout(playAgain, 7500)
  } else if (randomIndex2 === 0) {
    setTimeout(playAgain, 1300)
  } else if (randomIndex2 === 1) {
    setTimeout(playAgain, 3000)
  } else if (randomIndex2 === 2) {
    setTimeout(playAgain, 1000)
  } else if (randomIndex2 === 3) {
    setTimeout(playAgain, 3000)
  } else if (randomIndex2 === 4) {
    setTimeout(playAgain, 1000)
  } else if (randomIndex2 === 5) {
    setTimeout(playAgain, 2700)
  }
}

function playAgain() {
  gameLength = []
  playerLength = []
  playerChoice = ''
  computerChoice = ''
  replayButton.setAttribute('id', 'replay-button')
  replayButton.innerText = 'play again?'
  h1.innerHTML = ''
  h1.appendChild(replayButton)
}

function highscoreMessage() {
  highScore = gameLength.length
  scoreBoard.innerHTML = `High Score: ${highScore}`
  h1.innerText = `sweet! new high score: ${highScore}`
  const highScoreAudio = new Audio('../audio/highscore.mp3')
  highScoreAudio.play()
}

function gameOver() {
  bopItButton.removeEventListener('click', playerSelectsBopIt)
  twistItButton.removeEventListener('click', playerSelectsTwistIt)
  flickItButton.removeEventListener('click', playerSelectsFlickIt)
  pullItButton.removeEventListener('click', playerSelectsPullIt)
  spinItButton.removeEventListener('click', playerSelectsSpinIt)
  backgroundAudio.pause()
  backgroundSpeedUp1.pause()
  backgroundSpeedUp2.pause()
  gameOverMain.play()
  currentScore = gameLength.length
  h1.innerHTML = `GAME. OVER. score ${currentScore}`
  timeoutClear()
  setTimeout(loserMessage, 4000)
}

function compareTime() {
  if (gameLength.length !== playerLength.length) {
    gameOver()
  }
}

//player selections below

function playerSelectsBopIt() {
  playerChoice = 'bop-it!'
  playerLength.push(playerChoice)
  console.log(`player: ${playerLength}`)
  console.log(`cpu: ${gameLength}`)
  if (
    computerChoice !== playerChoice ||
    gameLength.length < playerLength.length
  ) {
    bopItButton.removeEventListener('click', playerSelectsBopIt)
    backgroundAudio.pause()
    gameOver()
  } else {
    console.log('bop it!')
    let bopItSound = new Audio('../audio/bop-it-sound.mp3')
    bopItSound.play()
    timeoutClear()
    setTimeout(computerChooses, 1000)
  }
}

function playerSelectsTwistIt() {
  playerChoice = 'twist-it!'
  playerLength.push(playerChoice)
  console.log(`player: ${playerLength}`)
  console.log(`cpu: ${gameLength}`)
  if (
    computerChoice !== playerChoice ||
    gameLength.length < playerLength.length
  ) {
    twistItButton.removeEventListener('click', playerSelectsTwistIt)
    backgroundAudio.pause()
    gameOver()
  } else {
    console.log('twist it!')
    let twistItSound = new Audio('../audio/twist-it-sound.mp3')
    twistItSound.play()
    timeoutClear()
    setTimeout(computerChooses, 1000)
  }
}

function playerSelectsFlickIt() {
  playerChoice = 'flick-it!'
  playerLength.push(playerChoice)
  console.log(`player: ${playerLength}`)
  console.log(`cpu: ${gameLength}`)
  if (
    computerChoice !== playerChoice ||
    gameLength.length < playerLength.length
  ) {
    flickItButton.removeEventListener('click', playerSelectsFlickIt)
    backgroundAudio.pause()
    gameOver()
  } else {
    console.log('flick it!')
    let flickItSound = new Audio('../audio/flick-it-sound.mp3')
    flickItSound.play()
    timeoutClear()
    setTimeout(computerChooses, 1000)
  }
}

function playerSelectsPullIt() {
  playerChoice = 'pull-it!'
  playerLength.push(playerChoice)
  console.log(`player: ${playerLength}`)
  console.log(`cpu: ${gameLength}`)
  if (
    computerChoice !== playerChoice ||
    gameLength.length < playerLength.length
  ) {
    pullItButton.removeEventListener('click', playerSelectsPullIt)
    backgroundAudio.pause()
    gameOver()
  } else {
    console.log('pull it!')
    let pullItSound = new Audio('../audio/pull-it-sound.mp3')
    pullItSound.play()
    timeoutClear()
    setTimeout(computerChooses, 1000)
  }
}

function playerSelectsSpinIt() {
  playerChoice = 'spin-it!'
  playerLength.push(playerChoice)
  console.log(`player: ${playerLength}`)
  console.log(`cpu: ${gameLength}`)
  if (
    computerChoice !== playerChoice ||
    gameLength.length < playerLength.length
  ) {
    spinItButton.removeEventListener('click', playerSelectsSpinIt)
    backgroundAudio.pause()
    gameOver()
  } else {
    console.log('spin it!')
    let spinItSound = new Audio('../audio/spin-it-sound.mp3')
    spinItSound.play()
    timeoutClear()
    setTimeout(computerChooses, 1000)
  }
}

function addGushers() {
  newImage.src = 'https://i.imgur.com/cSallsF.png'
  newImage.setAttribute('id', 'gushers')
  backToHomeDiv.append(newImage)
}

function removeGushers() {
  newImage.remove()
}

// // ////////////////////////////////
// // // Event Listeners Here

startButton.addEventListener('click', startGame)
replayButton.addEventListener('click', startGame)
backToHomeLink.addEventListener('mouseover', addGushers)
backToHomeLink.addEventListener('mouseleave', removeGushers)
