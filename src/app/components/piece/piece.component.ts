import { Component, Input, OnInit } from '@angular/core';

import { Ipiece } from '../../shared/ipiece'


@Component({
  selector: 'chess-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  @Input() piece: Ipiece

  svgPath: string

  constructor() { }

  ngOnInit() {
    this.svgPath = `/assets/black_pawn.svg`
  }
}
