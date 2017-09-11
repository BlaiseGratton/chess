import { BasePiece } from '../shared/base-piece'
import { Iboard } from '../shared/iboard'
import { Ipiece } from '../shared/ipiece'
import { Moves } from '../shared/move.decorators'
import { Player } from '../shared/player'

export class Queen extends BasePiece implements Ipiece {

  constructor(player: Player, board: Iboard) {
    const moves = [
      Moves.get('forward', player.color, board, true),
      Moves.get('forwardRight', player.color, board, true),
      Moves.get('right', player.color, board, true),
      Moves.get('reverseRight', player.color, board, true),
      Moves.get('reverse', player.color, board, true),
      Moves.get('reverseLeft', player.color, board, true),
      Moves.get('left', player.color, board, true),
      Moves.get('forwardLeft', player.color, board, true),
    ]
    super(player, 'q', moves)
  }

}
