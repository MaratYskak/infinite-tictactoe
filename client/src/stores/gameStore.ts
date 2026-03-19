/**
 * Game Store (Zustand)
 * Clean architecture: Application layer managing state
 */

import { create } from 'zustand';
import { GameState, GameScore, INITIAL_GAME_STATE, INITIAL_GAME_SCORE } from '@/types/game';
import { makeMove, resetGame } from '@/lib/gameLogic';

interface GameStore {
  // State
  gameState: GameState;
  gameScore: GameScore;

  // Actions
  playMove: (position: number) => void;
  resetGameBoard: () => void;
  newGame: () => void;
  setScore: (score: GameScore) => void;
  loadScore: () => void;
  saveScore: () => void;
}

const SCORE_STORAGE_KEY = 'infinite-tictactoe-score';

export const useGameStore = create<GameStore>((set, get) => ({
  gameState: INITIAL_GAME_STATE,
  gameScore: INITIAL_GAME_SCORE,

  playMove: (position: number) => {
    set((state) => {
      const newGameState = makeMove(state.gameState, position);

      // If game ended, update score
      if (newGameState.winner || newGameState.isDraw) {
        const newScore = { ...state.gameScore };
        if (newGameState.winner === 'X') {
          newScore.xWins += 1;
        } else if (newGameState.winner === 'O') {
          newScore.oWins += 1;
        } else if (newGameState.isDraw) {
          newScore.draws += 1;
        }
        // Save score to localStorage
        localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(newScore));
        return { gameState: newGameState, gameScore: newScore };
      }

      return { gameState: newGameState };
    });
  },

  resetGameBoard: () => {
    set({ gameState: resetGame() });
  },

  newGame: () => {
    set({ gameState: resetGame() });
  },

  setScore: (score: GameScore) => {
    set({ gameScore: score });
  },

  loadScore: () => {
    const saved = localStorage.getItem(SCORE_STORAGE_KEY);
    if (saved) {
      try {
        const score = JSON.parse(saved);
        set({ gameScore: score });
      } catch (e) {
        console.error('Failed to load score:', e);
      }
    }
  },

  saveScore: () => {
    const { gameScore } = get();
    localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(gameScore));
  },
}));
