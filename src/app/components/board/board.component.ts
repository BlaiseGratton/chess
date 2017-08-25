import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
import { Subscription } from 'rxjs/Subscription';
import { DragulaService } from 'ng2-dragula/ng2-dragula'

import { Board } from '../../shared/board'
import { Iboard } from '../../shared/iboard';
import { Isquare } from '../../shared/isquare';
import { MoveService } from '../../shared/move.service';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Iboard
  movesSubscription: Subscription

  constructor(
    private moveService: MoveService,
    private dragula: DragulaService
  ) { }

  private processMove(message: any) {
    debugger
  }

  dragHandler(val: any): void {
    const squareId = val[2].getAttribute('item-id')
    const pieceId = val[1].getAttribute('item-id')
    this.moveService.registerDrag({ squareId, pieceId })
  }

  dropHandler(val: any): void {
    const cancelFunc = this.dragula.find('drop-square').drake.cancel
    const squareId = val[2].getAttribute('item-id')
    const pieceId = val[1].getAttribute('item-id')
    this.moveService.registerDrop({ squareId, pieceId, cancelFunc })
  }

  ngOnInit() {
    this.board = new Board()

    this.dragula.drag
      .subscribe(val => this.dragHandler(val))

    this.dragula.drop
      .subscribe(val => this.dropHandler(val))

    this.movesSubscription = this.moveService.move$
      .subscribe(move => this.processMove(move))
  }

  ngOnDestroy() {
    this.movesSubscription.unsubscribe()
  }
}
