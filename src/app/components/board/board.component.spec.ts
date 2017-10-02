import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DragulaModule, DragulaService } from 'ng2-dragula';

import { BoardComponent } from './board.component';
import { ImoveMessage } from '../../shared/imove-message';
import { MoveService } from '../../shared/move.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ BoardComponent ],
      imports: [ DragulaModule ],
      providers: [ MoveService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(component.board).toBeTruthy();
    expect(component.board.rows[0][0].piece.name).toEqual('r1');
  });


  describe('Processing Moves', () => {

    it('should let pawns move forward 1 space', () => {
      let message: ImoveMessage = {
        from: '60',
        to: '50',
        piece: 'p1',
        cancelFunc: alert
      }

      expect(component.processMove(message)).toBeTruthy()
    })

    it('should let rooks move orthogonally', () => {
      let message: ImoveMessage = {
        from: '60',
        to: '50',
        piece: 'p1',
        cancelFunc: alert
      }

      // move pawn out of the way
      component.processMove(message) 
      message.from = '50'
      message.to = '40'
      component.processMove(message)

      // move rook forward 2 spaces
      message.piece = 'r1'
      message.from = '70'
      message.to = '50'
      expect(component.processMove(message)).toBeTruthy()

      // move rook right 4 spaces
      message.from = message.to
      message.to = '54'
      expect(component.processMove(message)).toBeTruthy()

      // move rook left 4 spaces
      message.from = message.to
      message.to = '50'
      expect(component.processMove(message)).toBeTruthy()

      // move rook back 2 spaces
      message.from = message.to
      message.to = '70'
      expect(component.processMove(message)).toBeTruthy()
    })
  })
});
