import { Component, Input, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component'

@Component({
  selector: 'chess-board-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() row: SquareComponent[]

  constructor() { }

  ngOnInit() {
  }

}
