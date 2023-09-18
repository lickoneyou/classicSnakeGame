class Snake {
  constructor() {
    this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)]
    ;(this.direction = 'right'), (this.nextDirection = 'right')
  }

  draw() {
    for (let i = 1; i < this.segments.length; i++) {
      this.segments[0].drawSquare('green')
      if (i % 2 != 0) {
        this.segments[i].drawSquare('aqua')
      } else {
        this.segments[i].drawSquare('orangered')
      }
    }
  }

  move() {
    const head = this.segments[0]
    let newHead

    this.direction = this.nextDirection

    switch (this.direction) {
      case 'right':
        newHead = new Block(head.col + 1, head.row)
        break
      case 'down':
        newHead = new Block(head.col, head.row + 1)
        break
      case 'left':
        newHead = new Block(head.col - 1, head.row)
        break
      case 'up':
        newHead = new Block(head.col, head.row - 1)
        break
    }

    if (this.checkCollision(newHead)) {
      gameOver()
      return
    }

    this.segments.unshift(newHead)

    if (newHead.equal(apple.position)) {
      score++
      apple.move()
    } else {
      this.segments.pop()
    }
  }

  checkCollision(head) {
    const leftCollision = head.col === 0
    const topCollision = head.row === 0
    const rightCollision = head.col === widthInBlocks - 1
    const buttonCollision = head.row === heigthInBlocks - 1

    const wallCollision =
      leftCollision || topCollision || rightCollision || buttonCollision

    let selfCollision = false

    for (let i = 0; i < this.segments.length; i++) {
      if (head.equal(this.segments[i])) {
        selfCollision = true
      }
    }
    return wallCollision || selfCollision
  }

  setDirection(newDirection) {
    if (this.direction === 'up' && newDirection === 'down') {
      return
    } else if (this.direction === 'right' && newDirection === 'left') {
      return
    } else if (this.direction === 'down' && newDirection === 'up') {
      return
    } else if (this.direction === 'left' && newDirection === 'right') {
      return
    }
    this.nextDirection = newDirection
  }
}
