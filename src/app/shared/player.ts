import { Color } from './color.enum';

export class Player {
  readonly color: Color

  constructor(color: Color) {
    this.color = color
  }
}
