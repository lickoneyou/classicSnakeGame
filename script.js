const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

const blockSize = 10
const widthInBlocks = width / blockSize
const heigthInBlocks = height / blockSize

const score = 0

const drawBorder = () => {
  ctx.fillStyle = 'grey'
  ctx.fillRect(0, 0, width, blockSize)
  ctx.fillRect(0, height - blockSize, width, blockSize)
  ctx.fillRect(0, 0, blockSize, height)
  ctx.fillRect(width - blockSize, 0, blockSize, height)
}

const drawScore = () => {
  ctx.font = '20px Courier'
  ctx.fillStyle = 'black'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText(`Счет: ${score}`, blockSize, blockSize)
}

const block = new Block(4,3)


const intervalId = setInterval(() => {
  ctx.clearRect(0, 0, width, height)
  drawScore()
  // snake.move()
  // snake.draw()
  // apple.draw()
  drawBorder()
  block.drawCircle('red')
}, 100)

const gameOver = () => {
  clearInterval(intervalId)
  ctx.font = '60px Courier'
  ctx.fillStyle = 'black'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('Конец игры', width / 2, height / 2)
}
