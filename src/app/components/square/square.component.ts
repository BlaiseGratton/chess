import { Component, Input, OnInit } from '@angular/core';

import { Isquare } from '../../shared/isquare'
import { MoveService } from '../../shared/move.service'


@Component({
  selector: 'chess-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() square: Isquare

  constructor() { }

  ngOnInit() { }
}
