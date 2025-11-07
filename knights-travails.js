const validMoves = [
  "upRight",
  "rightUp",
  "rightDown",
  "downRight",
  "downLeft",
  "leftDown",
  "leftUp",
  "upLeft"
]

function knightMoves(position, destination, path = []) {
  if (position === destination) {return}
  validMoves.forEach(move => {
    if (isValidMove(position, move)) {
      position = (isValidMove(position, move))
      console.log(`${position}`)
      path.push(position)      
      knightMoves(position, move)
    }
  });
  return path
}

function isValidMove(position, move) {
  let x = position[0]
  let y = position[1]

  if (x < 0 || x > 7 || y < 0 || y > 7) {
    throw new Error("Invalid starting position.");
  }
  
  if (move === "upRight") { return (x + 1 <= 7) && (y + 2 <= 7) ? [x + 1, y + 2] : false}
  if (move === "rightUp") { return (x + 2 <= 7) && (y + 1 <= 7) ? [x + 2, y + 1] : false}
  if (move === "rightDown") { return (x + 2 <= 7) && (y - 1 >= 0) ? [x + 2, y - 1] : false}
  if (move === "downRight") { return (x + 1 <= 7) && (y - 2 >= 0) ? [x + 1, y - 2 ] : false}
  if (move === "downLeft") { return (x - 1 >= 0)  && (y - 2 >= 0) ? [x - 1, y - 2] : false}
  if (move === "leftDown") { return (x - 2 >= 0) && (y - 1 >= 0) ? [x - 2, y -1] : false}
  if (move === "leftUp") { return (x - 2 >= 0) && (y + 1 <= 7) ? [x - 2, y + 1] : false}
  if (move === "upLeft") { return (x - 1 >= 0) && (y + 2 <= 7) ? [x - 1, y + 2] : false}
}

console.log(knightMoves([0,0], [1,1]))