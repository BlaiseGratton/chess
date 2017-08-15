import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { PieceComponent } from './components/piece/piece.component';
import { RowComponent } from './components/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    PieceComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
