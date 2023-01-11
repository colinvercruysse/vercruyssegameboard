import { Component, Input, OnInit } from '@angular/core';
import { GameState } from 'src/app/data/interfaces';
import { state } from '../../data/dummy';

@Component({
  selector: 'app-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: ['./gamegrid.component.scss']
})
export class GamegridComponent implements OnInit {
  public gameState: GameState = state;

  displayedColumns: string[] = ['Name', 'PreviousScore', 'Score'];

  constructor() { }

  ngOnInit(): void {
  }

}
