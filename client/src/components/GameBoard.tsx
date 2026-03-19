/**
 * GameBoard Component
 * Displays the 3x3 tic tac toe board
 * Design: Cyberpunk Neon Grid
 */

import { GameCell } from './GameCell';
import { GameState } from '@/types/game';

interface GameBoardProps {
  gameState: GameState;
  onCellClick: (position: number) => void;
  disabled?: boolean;
}

export function GameBoard({ gameState, onCellClick, disabled }: GameBoardProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`
          grid grid-cols-3 gap-3 p-6 rounded-xl
          bg-gradient-to-br from-card to-background
          border-2 neon-border-purple
          shadow-2xl
          ${disabled ? 'opacity-60' : ''}
        `}
      >
        {gameState.board.map((value, index) => (
          <GameCell
            key={index}
            value={value}
            position={index}
            onClick={onCellClick}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
