import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Isquare } from './isquare'
import { MoveFunc } from './movefunc'

export const Moves = {
  forward(limit: number): MoveFunc {
    return (player: Color, board: Iboard, from: Isquare, to: Isquare): Boolean => {
      return false
    }
  },

  reverse(limit: number) {
    
  }
}
