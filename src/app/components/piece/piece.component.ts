import { Component, Input, OnInit } from '@angular/core';

import 'rxjs/add/operator/debounceTime';
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
    this.dragula.drag
      .subscribe(val => this.dragHandler(val))

    this.dragula.drop
      .subscribe(val => this.dropHandler(val))
  }
}
