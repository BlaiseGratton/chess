import { Ipiece } from './ipiece'
import { Isquare } from './isquare'

export interface ImoveMessage {
  piece: string
  from: string
  to: string
  cancelFunc: Function
}
