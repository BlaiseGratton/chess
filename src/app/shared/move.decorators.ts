import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Isquare } from './isquare'
import { MoveFunc } from './movefunc'

export const Moves = {
  forward(limit: number, player: Color, board: Iboard): MoveFunc {
    return function (from: Isquare, to: Isquare): Boolean {
      let [y, x] = from.id.split('')
      const direction = player === Color.Dark ? 1 : -1

      let squareHit: Boolean = false
      let canGoForward = true

      while (!squareHit && canGoForward) {
        y += direction
        const nextSquare: Isquare = board[y][x]
      }
      return squareHit
    }
  },

  reverse(limit: number) { }
}
