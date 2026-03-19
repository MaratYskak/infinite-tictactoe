/**
 * Home Page - Infinite Tic Tac Toe Game
 * Design: Cyberpunk Neon Grid
 */

import { useEffect } from 'react';
import { useGameStore } from '@/stores/gameStore';
import { GameBoard } from '@/components/GameBoard';
import { GameStatus } from '@/components/GameStatus';
import { GameScoreDisplay } from '@/components/GameScore';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const gameState = useGameStore((state) => state.gameState);
  const gameScore = useGameStore((state) => state.gameScore);
  const playMove = useGameStore((state) => state.playMove);
  const resetGameBoard = useGameStore((state) => state.resetGameBoard);
  const loadScore = useGameStore((state) => state.loadScore);

  // Load score from localStorage on mount
  useEffect(() => {
    loadScore();
  }, [loadScore]);

  const handleCellClick = (position: number) => {
    playMove(position);
  };

  const handleNewGame = () => {
    resetGameBoard();
  };

  const isGameOver = gameState.winner !== null || gameState.isDraw;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-card pointer-events-none opacity-50" />

      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold font-mono neon-glow-purple">
              ∞ INFINITE TIC TAC TOE
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              When the 4th move is placed, the 1st disappears
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 container mx-auto px-4 py-8 sm:py-12 flex flex-col gap-8">
        {/* Game Status */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <GameStatus gameState={gameState} />
          </div>
        </div>

        {/* Game Board */}
        <div className="flex justify-center">
          <GameBoard
            gameState={gameState}
            onCellClick={handleCellClick}
            disabled={isGameOver}
          />
        </div>

        {/* Game Score */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <GameScoreDisplay score={gameScore} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleNewGame}
            className={`
              px-6 sm:px-8 py-3 rounded-lg font-bold font-mono
              transition-all duration-300
              border-2 neon-border-purple
              bg-card hover:bg-card/80
              text-foreground hover:shadow-lg
              hover:scale-105
            `}
          >
            {isGameOver ? 'NEW GAME' : 'RESET'}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p>Built with React • TypeScript • Tailwind CSS • Zustand</p>
        </div>
      </footer>
    </div>
  );
}
