import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragulaModule, DragulaService } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { MoveService } from './shared/move.service';
import { PieceComponent } from './components/piece/piece.component';
import { RowComponent } from './components/row/row.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PieceComponent,
    RowComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [
    MoveService,
    DragulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
