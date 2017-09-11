import { OnInit } from '@angular/core'

import { BasePiece } from './base-piece'
import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Ipiece } from './ipiece'
import { Isquare } from './isquare'
import { Moves } from './move.decorators'
import { Player } from './player'
import { Pieces } from '../pieces/pieces'

export class Board implements Iboard {
  rows: Isquare[][]
  player1: Player
  player2: Player

  findPiece(id: string): Ipiece { for (let row of this.rows) {
      const square: Isquare = row.find(s => s.piece && s.piece.name === id)
      if (square) return square.piece
    }
  }

  findSquare(id: string): Isquare {
    for (let row of this.rows) {
      const square: Isquare = row.find(s => s.id === id)
      if (square) return square
    }
  }

  setupBoard(state?: any) { } 

  constructor() {
    this.player1 = new Player(Color.Light)
    this.player2 = new Player(Color.Dark)
    this.generateBoard()
  }

  private generateBoard = () => {
    this.rows = []
    const eightTimes = [0, 1, 2, 3, 4, 5, 6, 7]

    for (let rank of eightTimes) {
      const row = []
      for (let square of eightTimes) {
        row.push({ 
          piece: null,
          id: `${rank}${square}`
        })
      }
      this.rows.push(row)
    } 

    // set up pawns
    for (let num of [1, 2, 3, 4, 5, 6, 7, 8]) {
      this.rows[1][8 - num].piece = new Pieces.Pawn(this.player2, num, this)
      this.rows[6][num - 1].piece = new Pieces.Pawn(this.player1, num, this)
    }

    // rooks
    this.rows[0][0].piece = new Pieces.Rook(this.player2, 1, this)
    this.rows[0][7].piece = new Pieces.Rook(this.player2, 2, this)
    this.rows[7][0].piece = new Pieces.Rook(this.player1, 1, this)
    this.rows[7][7].piece = new Pieces.Rook(this.player1, 2, this)

    // knights
    this.rows[0][1].piece = new Pieces.Knight(this.player2, 1, this)
    this.rows[0][6].piece = new Pieces.Knight(this.player2, 2, this)
    this.rows[7][1].piece = new Pieces.Knight(this.player1, 1, this)
    this.rows[7][6].piece = new Pieces.Knight(this.player1, 2, this)

    // bishops
    this.rows[0][2].piece = new Pieces.Bishop(this.player2, 1, this)
    this.rows[0][5].piece = new Pieces.Bishop(this.player2, 2, this)
    this.rows[7][2].piece = new Pieces.Bishop(this.player1, 1, this)
    this.rows[7][5].piece = new Pieces.Bishop(this.player1, 2, this)

    // queens
    this.rows[0][3].piece = new Pieces.Queen(this.player2, this)
    this.rows[7][3].piece = new Pieces.Queen(this.player1, this)

    // kings
    this.rows[0][4].piece = new Pieces.King(this.player2, this)
    this.rows[7][4].piece = new Pieces.King(this.player1, this)
  }
}
