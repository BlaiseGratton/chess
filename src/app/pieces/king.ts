import { BasePiece } from '../shared/base-piece'
import { Iboard } from '../shared/iboard'
import { Ipiece } from '../shared/ipiece'
import { Moves } from '../shared/move.decorators'
import { Player } from '../shared/player'

export class King extends BasePiece implements Ipiece {

  constructor(player: Player, board: Iboard) {
    const moves = [
      Moves.get('forward', player.color, board, true, 1),
      Moves.get('forwardRight', player.color, board, true, 1),
      Moves.get('right', player.color, board, true, 1),
      Moves.get('reverseRight', player.color, board, true, 1),
      Moves.get('reverse', player.color, board, true, 1),
      Moves.get('reverseLeft', player.color, board, true, 1),
      Moves.get('left', player.color, board, true, 1),
      Moves.get('forwardLeft', player.color, board, true, 1),
    ]
    super(player, 'k', moves)
  }

}
