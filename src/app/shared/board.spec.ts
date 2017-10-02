import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Board } from './board';

describe('Board Class', () => {
  let board: Board;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Board ]
    })
  }));

  beforeEach(() => {
    board = new Board()
  });

  it('should be created', () => {
    expect(board).toBeTruthy();
  });

  it('should have the default layout', () => {
    expect(board.rows[0][0].piece.name).toEqual('r1')
  })
});
