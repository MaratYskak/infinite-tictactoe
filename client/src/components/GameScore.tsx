/**
 * GameScore Component
 * Displays the game score (wins/draws)
 * Design: Cyberpunk Neon Grid
 */

import { GameScore } from '@/types/game';

interface GameScoreProps {
  score: GameScore;
}

export function GameScoreDisplay({ score }: GameScoreProps) {
  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      {/* X Wins */}
      <div className="flex flex-col items-center p-4 rounded-lg bg-card border-2 neon-border-red">
        <div className="text-sm sm:text-base font-semibold text-muted-foreground mb-2">X WINS</div>
        <div className="text-3xl sm:text-4xl font-bold neon-glow-red font-mono">
          {score.xWins}
        </div>
      </div>

      {/* Draws */}
      <div className="flex flex-col items-center p-4 rounded-lg bg-card border-2 neon-border-purple">
        <div className="text-sm sm:text-base font-semibold text-muted-foreground mb-2">DRAWS</div>
        <div className="text-3xl sm:text-4xl font-bold neon-glow-purple font-mono">
          {score.draws}
        </div>
      </div>

      {/* O Wins */}
      <div className="flex flex-col items-center p-4 rounded-lg bg-card border-2 neon-border-blue">
        <div className="text-sm sm:text-base font-semibold text-muted-foreground mb-2">O WINS</div>
        <div className="text-3xl sm:text-4xl font-bold neon-glow-blue font-mono">
          {score.oWins}
        </div>
      </div>
    </div>
  );
}
