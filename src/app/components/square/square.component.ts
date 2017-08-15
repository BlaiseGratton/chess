import { Component, Input, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Isquare } from '../../shared/isquare'


@Component({
  selector: 'chess-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() square: Isquare

  constructor(private dragula: DragulaService) { }

  ngOnInit() {
    this.dragula.setOptions(`square-${this.square.id}`, {
      revertOnSpill: true
    })
  }
}
