import { Player } from './player'
import { Isquare } from './Isquare'

export interface Ipiece {
  readonly player: Player;
  readonly name: string;
  checkMoves(location: Isquare) : Isquare[]
}
