const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  key.classList.add('pressed')
  setTimeout(() => {
    key.classList.remove('pressed')
  }, 250)
  audio.currentTime = 0
  audio.play()
}

const keys = document.querySelectorAll('.keys')
window.addEventListener('keydown', playSound)
