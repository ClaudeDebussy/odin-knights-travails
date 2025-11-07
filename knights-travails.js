class Square {
  constructor(position = [0,0]) {
    this.position = position
    this.moveNumber = 0
    this.previousSquare = null
    this.validMovesFromSquare = this.#findValidMoves(this.position)
  }

  #findValidMoves(position) {
    const MOVES = [
      "upRight",
      "rightUp",
      "rightDown",
      "downRight",
      "downLeft",
      "leftDown",      
      "leftUp",
      "upLeft"
    ]

    const X = position[0]
    const Y = position[1]

    let validMoves = []

    MOVES.forEach(move => {
      if (move === "upRight") {(X + 1 <= 7) && (Y + 2 <= 7) ? validMoves.push(move) : null}
      if (move === "rightUp") {(X + 2 <= 7) && (Y + 1 <= 7) ? validMoves.push(move) : null}
      if (move === "rightDown") {(X + 2 <= 7) && (Y - 1 >= 0) ? validMoves.push(move) : null}
      if (move === "downRight") {(X + 1 <= 7) && (Y - 2 >= 0) ? validMoves.push(move) : null}
      if (move === "downLeft") {(X - 1 >= 0) && (Y - 2 >= 0) ? validMoves.push(move) : null}
      if (move === "leftDown") {(X - 2 >= 0) && (Y - 1 >= 0) ? validMoves.push(move) : null}
      if (move === "leftUp") {(X - 2 >= 0) && (Y + 1 <= 7) ? validMoves.push(move) : null}
      if (move === "upLeft") {(X - 1 >= 0) && (Y + 2 <= 7) ? validMoves.push(move) : null}
    })

    return validMoves
  }

  printMoves(){
    this.validMovesFromSquare.forEach(move => {
      console.log(move)
    })
  }
}

class Knight {
  knightMoves(start, destination) {
    if (
      !start || 
      Array.isArray(start) || 
      start.length != 2 || 
      start[0] > 7 || 
      start[0] < 0 || 
      start[1] > 7 || 
      start[1] < 0
    ) {
        throw new Error("Invalid start data.");
      }

    let queue = []
    let pointer = 0
    let currentNode
    
    queue.push(start)
    while (queue.length) {
      currentNode = queue[pointer]    
      // Add all valid moves from current node

      pointer++
    }
  }
}

let square = new Square(0);
square.printMoves()