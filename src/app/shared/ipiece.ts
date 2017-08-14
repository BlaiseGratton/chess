export interface IPiece {
  readonly player: Player;
  readonly name: string;
  checkMoves(location: Square, board: Board) : Square[]
}
