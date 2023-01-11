export interface GameState {
    players: Player[],
    currentPlayer: number,
    maxRounds: number | null | undefined,
    maxScore: number | null | undefined,
    title: string
}

export interface Player {
    id: number,
    name: string,
    previousScore: number,
    score: number,
    currentRound: number
}