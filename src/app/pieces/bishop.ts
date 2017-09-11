import { BasePiece } from '../shared/base-piece'
import { Iboard } from '../shared/iboard'
import { Ipiece } from '../shared/ipiece'
import { Moves } from '../shared/move.decorators'
import { Player } from '../shared/player'

export class Bishop extends BasePiece implements Ipiece {

  constructor(player: Player, order: number, board: Iboard) {
    const moves = [
      Moves.get('forwardRight', player.color, board, true),
      Moves.get('forwardLeft', player.color, board, true),
      Moves.get('reverseLeft', player.color, board, true),
      Moves.get('reverseRight', player.color, board, true)
    ]
    super(player, `b${order}`, moves)
  }

}
