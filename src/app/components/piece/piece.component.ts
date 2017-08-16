import { Component, Input, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula'

import { Ipiece } from '../../shared/ipiece'
import { MoveService } from '../../shared/move.service'


@Component({
  selector: 'chess-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() piece: Ipiece

  constructor(
    private dragula: DragulaService,
    private moveService: MoveService
  ) { }

  dragHandler(that: PieceComponent): Function {
    return function (val: any): void {
      const squareId = val[2].getAttribute('item-id')
      const pieceId = val[1].getAttribute('item-id')
      that.moveService.registerDrag({ squareId, pieceId })
    }
  }

  dropHandler(that: PieceComponent): Function {
    return function (val: any): void {
      const cancelFunc = that.dragula.find('drop-square').drake.cancel
      const squareId = val[2].getAttribute('item-id')
      const pieceId = val[1].getAttribute('item-id')
      that.moveService.registerDrop({ squareId, pieceId, cancelFunc })
    }
  }

  ngOnInit() {
    this.dragula.drag.subscribe(this.dragHandler(this))
    this.dragula.drop.subscribe(this.dropHandler(this))
  }
}
