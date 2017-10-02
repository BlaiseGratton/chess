import { Component, OnInit } from '@angular/core'

import 'rxjs/add/operator/debounceTime'
import { Subscription } from 'rxjs/Subscription'
import { DragulaService } from 'ng2-dragula/ng2-dragula'

import { Board } from '../../shared/board'
import { Color } from '../../shared/color.enum'
import { Iboard } from '../../shared/iboard'
import { ImoveMessage } from '../../shared/imove-message'
import { Isquare } from '../../shared/isquare'
import { Ipiece } from '../../shared/ipiece'
import { MoveFunc } from '../../shared/movefunc'
import { MoveService } from '../../shared/move.service'

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

  processMove(message: ImoveMessage) {
    const fromSquare: Isquare = this.board.findSquare(message.from)
    const toSquare: Isquare = this.board.findSquare(message.to)
    const piece: Ipiece = fromSquare.piece

    let squareHit = false

    for (let move of piece.moves) {
      if (!squareHit && move(fromSquare, toSquare)) {
        fromSquare.piece = null
        toSquare.piece = piece
        return true
      }
    }
    message.cancelFunc(true)
    return false
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
      .subscribe((move: ImoveMessage) => this.processMove(move))
  }

  ngOnDestroy() {
    this.movesSubscription.unsubscribe()
  }
}
