export interface GameState {
    players: Player[],
    currentPlayer: number,
    game: Game
}

export interface Player {
    id: number,
    name: string,
    total: number,
    score: number,
    currentRound: number,
    position: number,
}

export interface Game {
    name: string,
    type: EGame,
    maxScore: number,
    maxRounds: number,
    winner: Player | undefined,
    round: number,
}

export enum EGame {
    UNO,
    CHINEESPOEPEN,
    NULLENSPEL
}

export interface Config {
    games: Game[]
}