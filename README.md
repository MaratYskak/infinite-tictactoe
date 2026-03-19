# Infinite Tic Tac Toe

A modern take on the classic tic tac toe game with a cyberpunk neon aesthetic. When a player places their 4th piece, their 1st piece disappears, creating an infinite gameplay experience.

## Features

- **Infinite Gameplay**: Each player can have maximum 4 pieces on the board. When placing the 4th piece, the 1st disappears.
- **Neon Aesthetics**: Cyberpunk-inspired design with glowing red X's and blue O's
- **Dark/Light Theme**: Toggle between dark and light themes
- **Score Tracking**: Persistent game statistics saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Zustand** - State management
- **Vite** - Build tool

## Installation

1. Extract the project:
```bash
tar -xzf infinite-tictactoe.tar.gz
cd infinite-tictactoe
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## How to Play

- Click on empty cells to place your mark (X or O)
- Get three in a row (horizontally, vertically, or diagonally) to win
- Each player can have maximum 4 pieces on the board
- When you place your 4th piece, your oldest piece disappears
- The game tracks wins and draws automatically

## Project Structure

```
client/src/
├── components/      # Reusable UI components
├── contexts/        # React contexts (Theme)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions (game logic)
├── pages/           # Page components
├── stores/          # Zustand state management
├── types/           # TypeScript type definitions
└── App.tsx          # Main app component
```

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run check` - Run TypeScript type checking
- `pnpm run format` - Format code with Prettier

## License

MIT
