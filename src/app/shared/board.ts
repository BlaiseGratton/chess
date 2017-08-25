import { OnInit } from '@angular/core'

import { BasePiece } from './base-piece'
import { Color } from './color.enum'
import { Iboard } from './iboard'
import { Ipiece } from './ipiece'
import { Isquare } from './isquare'
import { Moves } from './move.decorators'
import { Player } from './player'

export class Board implements Iboard {
  rows: Isquare[][]
  player1: Player
  player2: Player

  findPiece(id: string): Ipiece {
    return null
  }

  findSquare(id: string): Isquare {
    return null
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

    this.rows[0][0].piece = {
      name: 'r1',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][1].piece = {
      name: 'k1',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][2].piece = {
      name: 'b1',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][3].piece = {
      name: 'q',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][4].piece = {
      name: 'k',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][5].piece = {
      name: 'b2',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][6].piece = {
      name: 'k2',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[0][7].piece = {
      name: 'r2',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][0].piece = {
      name: 'p1',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][1].piece = {
      name: 'p2',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][2].piece = {
      name: 'p3',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][3].piece = {
      name: 'p4',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][4].piece = {
      name: 'p5',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][5].piece = {
      name: 'p6',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][6].piece = {
      name: 'p7',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[1][7].piece = {
      name: 'p8',
      player: this.player2,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][0].piece = new BasePiece(
      this.player1,
      'r1',
      Moves.forward(2)
    )

    this.rows[7][1].piece = {
      name: 'k1',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][2].piece = {
      name: 'b1',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][3].piece = {
      name: 'q',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][4].piece = {
      name: 'k',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][5].piece = {
      name: 'b2',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][6].piece = {
      name: 'k2',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[7][7].piece = {
      name: 'r2',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][0].piece = {
      name: 'p1',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][1].piece = {
      name: 'p2',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][2].piece = {
      name: 'p3',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][3].piece = {
      name: 'p4',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][4].piece = {
      name: 'p5',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][5].piece = {
      name: 'p6',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][6].piece = {
      name: 'p7',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.rows[6][7].piece = {
      name: 'p8',
      player: this.player1,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }
  }
}
