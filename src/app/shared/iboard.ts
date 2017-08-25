import { Ipiece } from './ipiece'
import { Isquare } from './isquare'

export interface Iboard {
  findPiece(id: string): Ipiece;

  findSquare(id: string): Isquare;

  setupBoard(state?: any): void;
}
