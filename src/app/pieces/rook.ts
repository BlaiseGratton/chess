import { BasePiece } from '../shared/base-piece'
import { Iboard } from '../shared/iboard'
import { Ipiece } from '../shared/ipiece'
import { Moves } from '../shared/move.decorators'
import { Player } from '../shared/player'

export class Rook extends BasePiece implements Ipiece {

  constructor(player: Player, order: number, board: Iboard) {
    const moves = [
      Moves.get('forward', player.color, board, true),
      Moves.get('right', player.color, board, true),
      Moves.get('left', player.color, board, true),
      Moves.get('reverse', player.color, board, true)
    ]
    super(player, `r${order}`, moves)
  }

}
