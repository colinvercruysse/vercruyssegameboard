import { Component, Input, OnInit } from '@angular/core';
import { GameState, Player } from 'src/app/data/interfaces';
import { state } from '../../data/dummy';

@Component({
  selector: 'app-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: ['./gamegrid.component.scss']
})
export class GamegridComponent implements OnInit {
  public gameState: GameState;

  displayedColumns: string[] = ['position','name', 'score', 'total'];

  constructor() { 
    let s: GameState;

    if (localStorage.getItem('currentState')) {
      s = JSON.parse(localStorage.getItem('currentState')?? '');
    } else {
      s = state;
    }
    this.gameState = s;
  }

  ngOnInit(): void {
  }

  saveScore(event: any, index: number) {
    if (event.target && event.target.value) {
      this.addScoreToTotal(index,parseInt(event.target.value))
    }
  }

  addScoreToTotal(id: number, score: number) {
    let state = this.gameState;

    state.currentPlayer = id;

    let player = state.players.find(p => p.id === id);
    if (player) {
      player.score = score;
      player.total = player.total + score;
    }

    this.gameState = state;
  }

  onNextRound() {
    let state = this.gameState;

    // Add round to each player
    state.players.forEach(player => player.currentRound = player.currentRound + 1);

    // Calculate positions
    let orderedPlayers = this.orderUno(state);

    state.players.forEach(player => player.position = orderedPlayers.findIndex(p => p.name === player.name));

    // Persist
    this.gameState = state;
    this.save('currentState', JSON.stringify(this.gameState));
  }

  orderUno(state: GameState): Player[] {
    return [...state.players].sort((a, b) => {
      if (a.total > b.total) return -1;
      else if (a.total < b.total) return 1;
      else return 0;
    });
  }

  save(key: string, data: string) {
    localStorage.setItem(key, data);
  }

}
