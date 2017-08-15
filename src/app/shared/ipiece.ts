import { Player } from './player'
import { SquareComponent } from '../components/square/square.component'

export interface IPiece {
  readonly player: Player;
  readonly name: string;
  checkMoves(location: SquareComponent) : SquareComponent[]
}
