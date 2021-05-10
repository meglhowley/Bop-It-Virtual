console.log('hello!')

// Global Variables Here
const bopItButton = document.querySelector('#bop-it')
const twistItButton = document.querySelector('#twist-it')
const flickItButton = document.querySelector('#flick-it')
const pullItButton = document.querySelector('#pull-it')
const spinItButton = document.querySelector('#spin-it')
const h1 = document.querySelector('h1')
let gameChoices = ['bop-it!', 'flick-it!', 'pull-it!', 'twist-it!', 'spin-it!']
let computerChoice = 'bop-it!'
let playerChoice = ''

// //////////////////////////////
// Functions For Logic Here

function computerChooses() {
  const randomIndex = Math.floor(Math.random() * gameChoices.length)
  computerChoice = gameChoices[randomIndex]
  h1.innerText = computerChoice
}

setInterval(computerChooses, 2000)

// function playerSelectsBopIt() {
//   playerChoice = 'bop-it!'
//   if (computerChoice === playerChoice) {
//     computerChooses()
//   }
// }

// // ////////////////////////////////
// // // Event Listeners Here

// bopItButton.addEventListener('click', playerSelectsBopIt)
// twistItButton.addEventListener('click', playerSelectsTwistIt)
// flickItButton.addEventListener('click', playerSelectsFlickIt)
// pullItButton.addEventListener('click', playerSelectsPullIt)
// spinItButton.addEventListener('click', playerSelectsSpinIt)
