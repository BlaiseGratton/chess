import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Isquare } from './isquare'
import { MoveFunc } from './movefunc'

export const Moves = {

  forward(limit: number, player: Color, board: Iboard): MoveFunc {
    return function (from: Isquare, to: Isquare): Boolean {
      let [y, x] = [parseInt(from.id[0]), parseInt(from.id[1])]
      const direction = player === Color.Dark ? 1 : -1

      while (true) {
        y += direction
        if (y < 0 || y > 7) {
          return false
        } else {
          const nextSquare: Isquare = board.rows[y][x]
          if (nextSquare.piece && nextSquare.piece.player.color === player) {
            return false
          }
          if (nextSquare === to) {
            return true
          }
        }
      }
    }
  },

  reverse(limit: number) { }
}
