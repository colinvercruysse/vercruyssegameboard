import { GameState } from "./interfaces";

export let state: GameState = {
    players: [
      {
        id: 0,
        name: 'Colin',
        score: 0,
        currentRound: 0,
        total: 0,
        position: 0,
      }, 
      {
        id: 1,
        name: 'Chadia',
        score: 0,
        total: 0,
        currentRound: 0,
        position: 1,
      },
      {
        id: 2,
        name: 'Sam',
        score: 0,
        total: 0,
        currentRound: 0,
        position: 2
      },
      {
        id: 3,
        name: 'Tucker',
        score: 0,
        total: 0,
        currentRound: 0,
        position: 3
      }
    ],
    currentPlayer: 0,
    maxRounds: 10,
    maxScore: 501,
    title: 'Uno'
  }