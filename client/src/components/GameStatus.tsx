/**
 * GameStatus Component
 * Displays current game status (current player, winner, draw)
 * Design: Cyberpunk Neon Grid
 */

import { GameState } from '@/types/game';

interface GameStatusProps {
  gameState: GameState;
}

export function GameStatus({ gameState }: GameStatusProps) {
  const { winner, isDraw, currentPlayer } = gameState;

  if (winner) {
    return (
      <div className="text-center">
        <div className="text-sm sm:text-base font-semibold text-muted-foreground mb-2">
          GAME OVER
        </div>
        <div
          className={`
            text-4xl sm:text-5xl font-bold font-mono
            ${winner === 'X' ? 'neon-glow-red' : 'neon-glow-blue'}
            animate-neon-pulse
          `}
        >
          {winner} WINS!
        </div>
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className="text-center">
        <div className="text-sm sm:text-base font-semibold text-muted-foreground mb-2">
          GAME OVER
        </div>
        <div className="text-4xl sm:text-5xl font-bold font-mono neon-glow-purple animate-neon-pulse">
          IT'S A DRAW!
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="text-sm sm:text-base font-semibold text-muted-foreground mb-2">
        CURRENT PLAYER
      </div>
      <div
        className={`
          text-4xl sm:text-5xl font-bold font-mono
          ${currentPlayer === 'X' ? 'neon-glow-red' : 'neon-glow-blue'}
        `}
      >
        {currentPlayer}
      </div>
    </div>
  );
}
