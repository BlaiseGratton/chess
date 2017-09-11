import { BasePiece } from '../shared/base-piece'
import { Iboard } from '../shared/iboard'
import { Ipiece } from '../shared/ipiece'
import { Moves } from '../shared/move.decorators'
import { Player } from '../shared/player'

export class Pawn extends BasePiece implements Ipiece {

  constructor(player: Player, order: number, board: Iboard) {
    const moves = [
      Moves.get('forward', player.color, board, false, 1),
      Moves.get('forwardRight', player.color, board, true, 1),
      Moves.get('forwardLeft', player.color, board, true, 1)
    ]
    super(player, `p${order}`, moves)
  }

}
