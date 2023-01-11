import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamegridComponent } from './components/gamegrid/gamegrid.component';

@NgModule({
  declarations: [
    AppComponent,
    GamegridComponent,
    GamegridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
