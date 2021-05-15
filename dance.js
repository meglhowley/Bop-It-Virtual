const danceButton = document.querySelector('#start-button')
const console = document.querySelector('.image')
const danceAudio = new Audio('./audio/bop-it-remix.mp3')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const backtohome = document.querySelector('.back-to-home')

function playAudio() {
  danceAudio.play()
  console.setAttribute('id', 'console')
  body.setAttribute('id', 'blink')
  danceButton.remove()
  backtohome.setAttribute('id', 'backtohome')
}

danceButton.addEventListener('click', playAudio)
