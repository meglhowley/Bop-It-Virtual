const hoverSound = new Audio('./audio/hoversound.mp3')
const clickSound = new Audio('./audio/clicksound.mp3')
const tradButton = document.querySelector('#trad')
const memButton = document.querySelector('#mem')

const playHover = () => {
  hoverSound.play()
}

const playClick = () => {
  clickSound.play()
}

tradButton.addEventListener('mouseenter', playHover)

memButton.addEventListener('mouseover', playClick)
