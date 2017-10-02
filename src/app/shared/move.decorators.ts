import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Isquare } from './isquare'
import { MoveFunc } from './movefunc'


const extractCoordinates = (id: string) => [parseInt(id[0]), parseInt(id[1])]
const getDirection = (player: Color) => player === Color.Dark ? 1 : -1

const squareHit = (from: Isquare,
                   to: Isquare,
                   player: Color,
                   board: Iboard,
                   limit: number,
                   capture: Boolean,
                   getNextSquare: Function,
                   passThrough: Boolean = false): Boolean => {
  let [y, x] = extractCoordinates(from.id)
  let nextSquare: Isquare

  while (limit) {
    limit--
    [y, x] = getNextSquare(y, x)
    if (y < 0 || y > 7 || x < 0 || x > 7) {
      return false
    } else {
      nextSquare = board.rows[y][x]

      // 'passThrough' logic is only for knight
      if (passThrough) {
        if ((to.piece && to.piece.player.color === player) || nextSquare === to) {
          return true
        }
      } else {
        if (nextSquare.piece && (nextSquare.piece.player.color === player || nextSquare !== to)) {
          return false
        }
        if (nextSquare === to && (nextSquare.piece ? capture : true)) {
          return true
        }
      }
    }
  }
  // this is for the knight - if it made it this far, it didn't hit
  // anything in the first two squares of the cardinal/ordinal directions
  return false
}

const nexts = {
  forward: (direction: number) => (y: number, x: number)  => [y + direction, x],
  reverse: (direction: number) => (y: number, x: number) => [y - direction, x],
  right: (direction: number) => (y: number, x: number) => [y, x - direction],
  left: (direction: number) => (y: number, x: number) => [y, x + direction],
  forwardRight: (direction: number) => (y: number, x: number) => [y + direction, x - direction],
  forwardLeft: (direction: number) => (y: number, x: number) => [y + direction, x + direction],
  reverseRight: (direction: number) => (y: number, x: number) => [y - direction, x - direction],
  reverseLeft: (direction: number) => (y: number, x: number) => [y - direction, x + direction]
}

export const Moves = {
  get(move: string,
      player: Color,
      board: Iboard,
      capture: Boolean,
      limit: number = 8): MoveFunc {
    return (from: Isquare, to: Isquare): Boolean => {
      return squareHit(from, to, player, board, limit, capture, nexts[move](getDirection(player)))
    }
  },
  knight(player: Color, board: Iboard): MoveFunc {
    return (from: Isquare, to: Isquare): Boolean => {
      let [fromY, fromX] = extractCoordinates(from.id)
      let [toY, toX] = extractCoordinates(to.id)

      if (Math.abs(fromY - toY) <= 2 && Math.abs(fromX - toX) <= 2) {
        const direction = getDirection(player)
        return !squareHit(from, to, player, board, 2, true, nexts.forward(direction), true) 
            && !squareHit(from, to, player, board, 2, true, nexts.reverse(direction), true)
            && !squareHit(from, to, player, board, 2, true, nexts.right(direction), true)
            && !squareHit(from, to, player, board, 2, true, nexts.left(direction), true)
            && !squareHit(from, to, player, board, 2, true, nexts.forwardRight(direction), true)
            && !squareHit(from, to, player, board, 2, true, nexts.forwardLeft(direction), true)
            && !squareHit(from, to, player, board, 2, true, nexts.reverseRight(direction), true)
            && !squareHit(from, to, player, board, 2, true, nexts.reverseLeft(direction), true)
      }
      return false
    }
  }
}
