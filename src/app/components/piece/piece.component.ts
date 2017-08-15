import { Component, Input, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { IPiece } from '../../shared/ipiece'

@Component({
  selector: 'chess-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() piece: IPiece

  constructor(private dragula: DragulaService) { }

  ngOnInit() { 
    this.dragula.drag.subscribe(val => {})

    this.dragula.drop.subscribe(val => {})
  }
}
