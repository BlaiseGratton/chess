import { Component, OnInit } from '@angular/core';
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
      name: 'Rook',
      player: null,
      checkMoves: (loc: Isquare) : Isquare[] => {
        return null
      }
    }
  }

  private processMove(message: any) {
    debugger
  }

  ngOnInit() {
    this.generateBoard()
    this.setupBoard()
    this.movesSubscription = this.moveService.move$
      .subscribe(move => this.processMove(move))
  }

  ngOnDestroy() {
    this.movesSubscription.unsubscribe()
  }
}
