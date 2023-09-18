class Apple {
  constructor() {
    this.position = new Block(10, 10)
  }

  draw() {
    this.position.drawCircle('green')
  }

  move() {
    const randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1)
    const randomRow = Math.floor(Math.random() * (widthInBlocks - 2) + 1)
    this.position = new Block(randomCol, randomRow)
  }
}
