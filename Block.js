class Block {
  constructor(col, row) {
    this.col = col
    this.row = row
  }

  drawSquare(color) {
    const x = this.col * blockSize
    const y = this.row * blockSize
    ctx.fillStyle = color
    ctx.fillRect(x, y, blockSize, blockSize)
  }

  circle(x, y, radius, fillCircle) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillCircle) {
      ctx.fill()
    } else {
      ctx.stroke()
    }
  }

  drawCircle(color) {
    const centerX = this.col * blockSize + blockSize / 2
    const centerY = this.row * blockSize + blockSize / 2
    ctx.fillStyle = color
    this.circle(centerX, centerY, blockSize / 2, true)
  }

  equal(block) {
    return this.col == block.col && this.row == block.row
  }
}
