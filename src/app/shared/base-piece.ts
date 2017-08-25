import { Isquare } from './isquare'
import { MoveFunc } from './movefunc'
import { Player } from './player'

export class BasePiece {
  private moveCount: number;
  readonly moves: MoveFunc[];
  readonly player: Player;
  readonly name: string;

  checkMoves(location: Isquare): Isquare[]{
    return null
  }

  constructor(
    player: Player,
    name: string, 
    ...moves
  ) {
    this.player = player
    this.name = name
    this.moves = moves
  }
}
