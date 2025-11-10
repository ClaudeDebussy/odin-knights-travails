class Square {
  constructor(position = [0,0]) {
    if (
      !position || 
      !Array.isArray(position) || 
      position.length != 2 || 
      position[0] > 7 || 
      position[0] < 0 || 
      position[1] > 7 || 
      position[1] < 0
    ) {
        throw new Error(`Invalid start data: ${position}`);
      }

    this.position = position
    this.moveNumber = null
    this.previousSquare = null
    this.validMoves = this.#findValidMoves(this.position)
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
    this.validMoves.forEach(move => {
    })
  }
}

class Knight {
  knightMoves(start = [0,0], destination) {
    let queue = []
    let pointer = 0
    let currentNode = new Square(start)
    let visitedList = new Set()
    
    queue.push(currentNode)    
    visitedList.add(this.#toKey(currentNode.position))
    while (pointer != queue.length) {
      currentNode = queue[pointer]
      const parentKey = this.#toKey(currentNode.position)
      if (parentKey === this.#toKey(destination)) {
        console.log(`You made it in ${this.#computeShortestPath(currentNode).length - 1} moves. 
        Here is your path:`)
        for (let i = 1; i < this.#computeShortestPath(currentNode).length; i++) {
          console.log(this.#computeShortestPath(currentNode)[i])
          return
        }
      }
      const validMoves = currentNode.validMoves
      // Enqueue all valid moves from current node
      let queueOfValidMoves = this.#resolveMove(validMoves, currentNode)
      queueOfValidMoves.forEach(child => {
        const childKey = this.#toKey(child.position)
        if (!visitedList.has(childKey)) {
          visitedList.add(childKey)
          queue.push(child)
          child.previousSquare = currentNode
          child.moveNumber = (currentNode.moveNumber ?? 0) + 1
        }
      });
      pointer++
    }
  }

  #computeShortestPath(node) {        
    const walk = []

    while (node) {
      walk.push(node.position)
      node = node.previousSquare
    }

    walk.reverse()
    return walk
  }

  #resolveMove(validMoves, currentNode) {
    let nodes = []
    const MOVES = [
      ["upRight", [1, 2]],
      ["rightUp", [2, 1]],
      ["rightDown", [2, -1]],
      ["downRight", [1, -2]],
      ["downLeft", [-1, -2]],
      ["leftDown", [-2, -1]],
      ["leftUp", [-2, 1]],
      ["upLeft", [-1, 2]]
    ]

    for (let i = 0; i < validMoves.length; i++) {
      for (let j = 0; j < MOVES.length; j++) {
        if (validMoves[i] === MOVES[j][0]) {
          let square = new Square(
            [currentNode.position[0] + MOVES[j][1][0], 
            currentNode.position[1] + MOVES[j][1][1]]
          )
          nodes.push(square)
        }
      }
    }
    return nodes
  }

  #toKey([x,y]) {
    return String([x,y])
  }
}

// let startingPosition = new Square();
// startingPosition.printMoves()

let knight = new Knight();

console.log(knight.knightMoves([3,3], [4,3]))