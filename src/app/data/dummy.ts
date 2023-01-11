import { GameState } from "./interfaces";

export let state: GameState = {
    players: [
      {
        id: 0,
        name: 'Colin',
        score: 0,
        currentRound: 0,
        previousScore: 0,
      }, 
      {
        id: 1,
        name: 'Chadia',
        score: 0,
        previousScore: 0,
        currentRound: 0,
      }
    ],
    currentPlayer: 0,
    maxRounds: 10,
    maxScore: 501,
    title: 'Uno'
  }