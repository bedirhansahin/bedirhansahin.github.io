const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const playToSelect = document.querySelector('#playto')

let p1Score = 0
let p2Score = 0
let winningScore = 6
let gameOver = false

p1Button.addEventListener('click', function () {
  if (!gameOver) {
    p1Score += 1
    if (p1Score === winningScore) {
      gameOver = true
      p1Display.classList.add('text-success')
      p2Display.classList.add('text-danger')
      p1Button.disabled = true
      p2Button.disabled = true
    }
    p1Display.textContent = p1Score
  }
})

p2Button.addEventListener('click', function () {
  if (!gameOver) {
    p2Score += 1
    if (p2Score === winningScore) {
      gameOver = true
      p2Display.classList.add('text-success')
      p1Display.classList.add('text-danger')
      p1Button.disabled = true
      p2Button.disabled = true
    }
    p2Display.textContent = p2Score
  }
})

playToSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  reset()
})

resetButton.addEventListener('click', reset)

function reset () {
  gameOver = false
  p1Score = 0
  p2Score = 0
  p1Display.textContent = 0
  p2Display.textContent = 0
  p1Display.classList.remove('text-success', 'text-danger')
  p2Display.classList.remove('text-success', 'text-danger')
  p1Button.disabled = false
  p2Button.disabled = false
}
