import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Isquare } from './isquare'

export interface MoveFunc {
  (from: Isquare, to: Isquare): Boolean
}
