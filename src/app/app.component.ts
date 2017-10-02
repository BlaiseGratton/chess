import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rotate: Boolean

  constructor() {
    this.rotate = false
  }

  onTurnChange(ev) {
    this.rotate = Boolean(ev)
  }
}
