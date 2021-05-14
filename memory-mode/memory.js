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
const backToHomeDiv = document.querySelector('#back2h')
const backToHomeLink = document.querySelector('#back2anchor')
const newImage = document.createElement('img')

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
      gameOver()
    }
}

function compareArrays() {
  if (playerArr[playerArr.length - 1] === cpuArr[playerArr.length - 1]) {
    console.log(`cpu: ${cpuArr}`)
    console.log(`player: ${playerArr}`)
    setTimeout(computerChooses, 900)
    console.log('next up!')
  } else {
    gameOver()
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

function playAgain() {
  cpuArr = []
  playerArr = []
  playerChoice = ''
  computerChoice = ''
  replayButton.setAttribute('id', 'replay-button')
  replayButton.innerText = 'play again?'
  h1.innerHTML = ''
  h1.appendChild(replayButton)
}

function highscoreMessage() {
  highScore = cpuArr.length
  scoreBoard.innerHTML = `High Score: ${highScore}`
  h1.innerText = `sweet! new high score: ${highScore}`
  const highScoreAudio = new Audio('../audio/highscore.mp3')
  highScoreAudio.play()
}

function gameOver() {
  backgroundAudio.pause()
  gameOverMain.play()
  currentScore = cpuArr.length
  h1.innerHTML = `GAME. OVER. <br>score ${currentScore}`
  bopItButton.removeEventListener('click', playerSelectsBopIt)
  twistItButton.removeEventListener('click', playerSelectsTwistIt)
  flickItButton.removeEventListener('click', playerSelectsFlickIt)
  pullItButton.removeEventListener('click', playerSelectsPullIt)
  spinItButton.removeEventListener('click', playerSelectsSpinIt)
  setTimeout(loserMessage, 4000)
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
  if (cpuArr.length > highScore && randomIndex2 === 0) {
    setTimeout(highscoreMessage, 1300)
    setTimeout(playAgain, 7500)
  } else if (cpuArr.length > highScore && randomIndex2 === 1) {
    setTimeout(highscoreMessage, 3000)
    setTimeout(playAgain, 7500)
  } else if (cpuArr.length > highScore && randomIndex2 === 2) {
    setTimeout(highscoreMessage, 1000)
    setTimeout(playAgain, 7500)
  } else if (cpuArr.length > highScore && randomIndex2 === 3) {
    setTimeout(highscoreMessage, 3000)
    setTimeout(playAgain, 7500)
  } else if (cpuArr.length > highScore && randomIndex2 === 4) {
    setTimeout(highscoreMessage, 1000)
    setTimeout(playAgain, 7500)
  } else if (cpuArr.length > highScore && randomIndex2 === 5) {
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

function addGushers() {
  newImage.src = 'https://i.imgur.com/cSallsF.png'
  newImage.setAttribute('id', 'gushers')
  backToHomeDiv.append(newImage)
}

function removeGushers() {
  newImage.remove()
  console.log('removed!')
}

// // ////////////////////////////////
// // // Event Listeners Here

startButton.addEventListener('click', startGame)
replayButton.addEventListener('click', startGame)

backToHomeLink.addEventListener('mouseover', addGushers)
backToHomeLink.addEventListener('mouseleave', removeGushers)
