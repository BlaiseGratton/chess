import { Player } from './player'
import { Isquare } from './Isquare'
import { MoveFunc } from './movefunc'

export interface Ipiece {
  readonly player: Player
  readonly name: string
  readonly moves: MoveFunc[]
  checkMoves(location: Isquare) : Isquare[]
}
