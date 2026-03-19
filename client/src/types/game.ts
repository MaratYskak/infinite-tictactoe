/**
 * Game Domain Types
 * Clean architecture: Domain layer with core game logic types
 */

export type Player = 'X' | 'O';
export type CellValue = Player | null;

export interface GameState {
  board: CellValue[];
  currentPlayer: Player;
  moveHistory: number[]; // Track positions of moves in order
  winner: Player | null;
  isDraw: boolean;
}

export interface GameScore {
  xWins: number;
  oWins: number;
  draws: number;
}

export interface GameBoard {
  size: number;
  maxMoves: number;
}

/**
 * Game constants
 */
export const BOARD_SIZE = 3;
export const MAX_MOVES = 4; // Maximum moves on board at once - after 5th move, 1st disappears
export const WINNING_COMBINATIONS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

export const INITIAL_GAME_STATE: GameState = {
  board: Array(BOARD_SIZE * BOARD_SIZE).fill(null),
  currentPlayer: 'X',
  moveHistory: [],
  winner: null,
  isDraw: false,
};

export const INITIAL_GAME_SCORE: GameScore = {
  xWins: 0,
  oWins: 0,
  draws: 0,
};
