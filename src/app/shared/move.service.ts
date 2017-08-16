import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Isquare } from './isquare'
import { SquareComponent } from '../components/square/square.component'


interface dragDropMessage {
  squareId: string
  pieceId?: string
  cancelFunc?: Function
}

@Injectable()
export class MoveService {

  constructor() { }

  private pieceId: string
  private fromSquareId: string

  // see https://stackoverflow.com/questions/34376854/delegation-
  // eventemitter-or-observable-in-angular2/35568924#35568924
  private movesSource = new ReplaySubject()
  move$ = this.movesSource.asObservable()
  
  registerDrag(message: dragDropMessage): void {
    ({ pieceId: this.pieceId, squareId: this.fromSquareId } = message)
  }

  registerDrop(message: dragDropMessage): void {
    if (this.pieceId === message.pieceId && this.fromSquareId !== message.squareId) {
      this.movesSource.next({
        piece: this.pieceId,
        from: this.fromSquareId,
        to: message.squareId,
        cancelFunc: message.cancelFunc
      })
    }
  }
}
