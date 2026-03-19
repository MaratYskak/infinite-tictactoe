/**
 * GameCell Component
 * Represents a single cell in the tic tac toe board
 * Design: Cyberpunk Neon Grid
 */

import { Player } from '@/types/game';

interface GameCellProps {
  value: Player | null;
  position: number;
  onClick: (position: number) => void;
  disabled?: boolean;
}

export function GameCell({ value, position, onClick, disabled }: GameCellProps) {
  const handleClick = () => {
    if (!disabled && !value) {
      onClick(position);
    }
  };

  const isX = value === 'X';
  const isO = value === 'O';

  return (
    <button
      onClick={handleClick}
      disabled={disabled || value !== null}
      className={`
        relative w-20 h-20 sm:w-24 sm:h-24 border-2 rounded-lg
        transition-all duration-300 ease-out
        ${!value && !disabled ? 'hover:border-purple-400 cursor-pointer' : ''}
        ${value ? 'cursor-default' : 'cursor-pointer'}
        ${isX ? 'neon-border-red' : isO ? 'neon-border-blue' : 'border-muted'}
        ${!value && !disabled ? 'hover:shadow-lg' : ''}
        bg-background/50 backdrop-blur-sm
      `}
    >
      {/* X - Red Neon */}
      {isX && (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-2 animate-draw-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line
            x1="20"
            y1="20"
            x2="80"
            y2="80"
            stroke="var(--neon-red)"
            strokeWidth="8"
            strokeDasharray="100"
            filter="drop-shadow(0 0 10px var(--neon-red))"
          />
          <line
            x1="80"
            y1="20"
            x2="20"
            y2="80"
            stroke="var(--neon-red)"
            strokeWidth="8"
            strokeDasharray="100"
            filter="drop-shadow(0 0 10px var(--neon-red))"
          />
        </svg>
      )}

      {/* O - Blue Neon */}
      {isO && (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-2 animate-draw-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="var(--neon-blue)"
            strokeWidth="8"
            strokeDasharray="220"
            filter="drop-shadow(0 0 10px var(--neon-blue))"
          />
        </svg>
      )}

      {/* Empty cell indicator */}
      {!value && !disabled && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity">
          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
        </div>
      )}
    </button>
  );
}
