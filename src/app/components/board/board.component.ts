import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: SquareComponent[][]

  private generateBoard = () => {
    this.board = []
    const eightTimes = [1, 2, 3, 4, 5, 6, 7, 8]
    const row = []
    for (let _ of eightTimes) {
      row.push(new SquareComponent())
    } 
    for (let _ of eightTimes) {
      this.board.push(row.slice())
    }
  }

  constructor() { }

  ngOnInit() {
    this.generateBoard()
  }

}
