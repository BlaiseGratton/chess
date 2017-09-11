import { BasePiece } from '../shared/base-piece'
import { Iboard } from '../shared/iboard'
import { Ipiece } from '../shared/ipiece'
import { Moves } from '../shared/move.decorators'
import { Player } from '../shared/player'

export class Knight extends BasePiece implements Ipiece {

  constructor(player: Player, order: number, board: Iboard) {
    const moves = [ Moves.knight(player.color, board) ]
    super(player, `k${order}`, moves)
  }

}
