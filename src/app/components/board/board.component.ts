import { Component, OnInit } from '@angular/core';

import { Isquare } from '../../shared/isquare';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Isquare[][]

  private generateBoard = () => {
    this.board = []
    const eightTimes = [1, 2, 3, 4, 5, 6, 7, 8]

    for (let rank of eightTimes) {
      const row = []
      for (let square of eightTimes) {
        row.push({ 
          piece: null,
          id: `${rank}${square}`
        })
      }
      this.board.push(row)
    } 
  }

  private setupBoard = () => {
    this.board[0][0].piece = {
      name: 'Rook',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => {
        return null
      }
    }
  }

  constructor() { }

  ngOnInit() {
    this.generateBoard()
    this.setupBoard()
  }

}
