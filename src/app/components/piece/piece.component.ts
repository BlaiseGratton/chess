import { Component, Input, OnInit } from '@angular/core'

import { Color } from '../../shared/color.enum'
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

  private pieces = {
    'r1': 'rook',
    'r2': 'rook',
    'k1': 'knight',
    'k2': 'knight',
    'b1': 'bishop',
    'b2': 'bishop',
    'q': 'queen',
    'k': 'king',
    'p1': 'pawn',
    'p2': 'pawn',
    'p3': 'pawn',
    'p4': 'pawn',
    'p5': 'pawn',
    'p6': 'pawn',
    'p7': 'pawn',
    'p8': 'pawn'
  }

  ngOnInit() {
    const color = this.piece.player.color === Color.Light ? 'white' : 'black'
    const piece = this.pieces[this.piece.name]

    this.svgPath = `/assets/${color}_${piece}.svg`
  }
}
