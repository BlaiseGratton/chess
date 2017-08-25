import { Color } from './color.enum'
import { Isquare } from './isquare'

export const Moves = {
  forward(limit: number): Function {
    return (color: number, board: Isquare[][], from: Isquare, to: Isquare): Boolean => {
      return false
    }
  },

  reverse(limit: number) {
    
  }
}
