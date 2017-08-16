import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import { Subscription } from 'rxjs/Subscription';

import { Isquare } from '../../shared/isquare';
import { MoveService } from '../../shared/move.service';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Isquare[][]
  movesSubscription: Subscription

  constructor(private moveService: MoveService) { }


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
      name: 'r1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][1].piece = {
      name: 'k1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][2].piece = {
      name: 'b1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][3].piece = {
      name: 'q',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][4].piece = {
      name: 'k',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][5].piece = {
      name: 'b2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][6].piece = {
      name: 'k2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[0][7].piece = {
      name: 'r2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][0].piece = {
      name: 'p1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][1].piece = {
      name: 'p2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][2].piece = {
      name: 'p3',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][3].piece = {
      name: 'p4',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][4].piece = {
      name: 'p5',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][5].piece = {
      name: 'p6',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][6].piece = {
      name: 'p7',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[1][7].piece = {
      name: 'p8',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][0].piece = {
      name: 'r1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][1].piece = {
      name: 'k1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][2].piece = {
      name: 'b1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][3].piece = {
      name: 'q',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][4].piece = {
      name: 'k',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][5].piece = {
      name: 'b2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][6].piece = {
      name: 'k2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[7][7].piece = {
      name: 'r2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][0].piece = {
      name: 'p1',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][1].piece = {
      name: 'p2',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][2].piece = {
      name: 'p3',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][3].piece = {
      name: 'p4',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][4].piece = {
      name: 'p5',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][5].piece = {
      name: 'p6',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][6].piece = {
      name: 'p7',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }

    this.board[6][7].piece = {
      name: 'p8',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => null
    }
  }

  private processMove(message: any) {
    console.log('process move')
  }

  ngOnInit() {
    this.generateBoard()
    this.setupBoard()
    this.movesSubscription = this.moveService.move$
      .debounceTime(10)
      .subscribe(move => this.processMove(move))
  }

  ngOnDestroy() {
    this.movesSubscription.unsubscribe()
  }
}
