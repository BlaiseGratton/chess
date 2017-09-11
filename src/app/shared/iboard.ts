import { Ipiece } from './ipiece'
import { Isquare } from './isquare'

export interface Iboard {
  rows: Isquare[][]

  findPiece(id: string): Ipiece

  findSquare(id: string): Isquare

  setupBoard(state?: any): void
}
