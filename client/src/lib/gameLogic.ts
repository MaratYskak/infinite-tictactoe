/**
 * Game Logic Utilities
 * Pure functions for game state management
 */

import {
  GameState,
  Player,
  WINNING_COMBINATIONS,
  BOARD_SIZE,
  MAX_MOVES,
} from '@/types/game';

/**
 * Check if a player has won
 */
export function checkWinner(board: (Player | null)[]): Player | null {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}

/**
 * Check if the board is full (draw condition)
 */
export function isBoardFull(board: (Player | null)[]): boolean {
  return board.every((cell) => cell !== null);
}

/**
 * Make a move on the board
 * Implements the "infinite" mechanic: when a player places their 4th piece, their 1st piece disappears
 */
export function makeMove(
  state: GameState,
  position: number
): GameState {
  // Can't place on occupied cell
  if (state.board[position] !== null) {
    return state;
  }

  const newBoard = [...state.board];
  const newMoveHistory = [...state.moveHistory, position];
  const currentPlayer = state.currentPlayer;

  // Place current player's mark
  newBoard[position] = currentPlayer;

  // Count how many pieces this player has on the board
  const playerPieces = newBoard.filter(cell => cell === currentPlayer).length;

  // If player has more than 4 pieces, remove their oldest piece
  if (playerPieces > 3) {
    // Find the oldest move of this player
    for (let i = 0; i < newMoveHistory.length; i++) {
      const movePos = newMoveHistory[i];
      if (newBoard[movePos] === currentPlayer) {
        // This is the oldest piece of this player
        newBoard[movePos] = null;
        newMoveHistory.splice(i, 1);
        break;
      }
    }
  }

  // Check for winner
  const winner = checkWinner(newBoard);
  const isDraw = !winner && isBoardFull(newBoard);

  return {
    board: newBoard,
    currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
    moveHistory: newMoveHistory,
    winner,
    isDraw,
  };
}

/**
 * Reset the game board
 */
export function resetGame(): GameState {
  return {
    board: Array(BOARD_SIZE * BOARD_SIZE).fill(null),
    currentPlayer: 'X',
    moveHistory: [],
    winner: null,
    isDraw: false,
  };
}

/**
 * Get the next player
 */
export function getNextPlayer(currentPlayer: Player): Player {
  return currentPlayer === 'X' ? 'O' : 'X';
}

/**
 * Check if a move is valid
 */
export function isValidMove(board: (Player | null)[], position: number): boolean {
  return position >= 0 && position < board.length && board[position] === null;
}
