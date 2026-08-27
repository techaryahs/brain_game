"use client";

import { useCallback, useEffect, useState } from "react";
import GameBoard from "@/games/tap-to-clear/components/GameBoard";
import GameHeader from "@/games/tap-to-clear/components/GameHeader";
import HintButton from "@/games/tap-to-clear/components/HintButton";
import LevelComplete from "@/games/tap-to-clear/components/LevelComplete";
import Lives from "@/games/tap-to-clear/components/Lives";
import { getLevel } from "@/games/tap-to-clear/data/levels";
import {
  canPathClear,
  clearPath,
  findFirstClearablePath,
  isGameOver,
  isLevelComplete,
  getDirectionOffset,
} from "@/games/tap-to-clear/logic/gameLogic";
import { GameState, Path, Level } from "@/games/tap-to-clear/types";

const createGameState = (levelId: number): GameState | null => {
  const level = getLevel(levelId);
  if (!level) return null;

  return {
    currentLevel: level.id,
    paths: level.paths.map((path) => ({
      ...path,
      cleared: false,
    })),
    lives: level.lives,
    hints: level.hints,
    moves: 0,
    completed: false,
    gameOver: false,
  };
};

export default function TapToClearPage() {
  const [game, setGame] = useState<GameState | null>(null);
  const [currentLevelData, setCurrentLevelData] = useState<Level | null>(null);
  const [clearingPathIds, setClearingPathIds] = useState<string[]>([]);

  const initLevel = useCallback((levelId: number) => {
    // Generate new level on the client
    const newState = createGameState(levelId);
    if (newState) {
      setGame(newState);
      setCurrentLevelData(getLevel(levelId) || null);
    }
  }, []);

  // Hydration-safe init
  useEffect(() => {
    initLevel(1);
  }, [initLevel]);

  const resetLevel = useCallback(() => {
    if (game) {
      initLevel(game.currentLevel);
    }
  }, [game, initLevel]);

  const handlePathTap = (path: Path) => {
    if (!game || !currentLevelData || game.completed || game.gameOver || path.cleared) {
      return;
    }

    const clearable = canPathClear(
      path,
      game.paths,
      currentLevelData.rows,
      currentLevelData.cols,
    );

    const element = document.getElementById(`path-${path.id}`);

    if (!clearable) {
      if (element) {
        element.animate([
          { transform: 'translate(0, 0)' },
          { transform: 'translate(-3px, 0)' },
          { transform: 'translate(3px, 0)' },
          { transform: 'translate(-3px, 0)' },
          { transform: 'translate(0, 0)' }
        ], { duration: 300 });
      }

      const newLives = game.lives - 1;
      setGame((previous) => ({
        ...previous,
        lives: Math.max(0, newLives),
        gameOver: isGameOver(newLives),
      }));
      return;
    }

    // Success animation before removing
    setClearingPathIds((prev) => [...prev, path.id]);
    
    // Mark as cleared immediately so it doesn't block others
    const updatedPaths = clearPath(game.paths, path.id);
    setGame((previous) => ({
      ...previous,
      paths: updatedPaths,
      moves: previous.moves + 1,
      completed: isLevelComplete(updatedPaths),
    }));

    // After animation finishes, remove from clearing list so it unmounts
    const L = Math.max(1, path.segments.length - 1);
    const E = 30;
    const durSeconds = 0.5 + L * 0.25;
    const speed = L / durSeconds;
    const durTotalMs = ((L + E) / speed) * 1000;

    setTimeout(() => {
      setClearingPathIds((prev) => prev.filter(id => id !== path.id));
    }, durTotalMs);
  };

  const handleHint = () => {
    if (game.hints <= 0 || game.completed || game.gameOver) {
      return;
    }

    const hintPath = findFirstClearablePath(
      game.paths,
      currentLevelData.rows,
      currentLevelData.cols,
    );

    if (!hintPath) {
      return;
    }

    setGame((previous) => ({
      ...previous,
      hints: previous.hints - 1,
    }));

    const element = document.getElementById(`path-${hintPath.id}`);

    if (element) {
      element.animate(
        [
          { opacity: 1 },
          { opacity: 0.3 },
          { opacity: 1 },
        ],
        {
          duration: 700,
          iterations: 2,
        },
      );
    }
  };

  const handleNextLevel = () => {
    if (game) {
      initLevel(game.currentLevel + 1);
    }
  };

  const handleReplay = () => {
    resetLevel();
  };

  if (!game || !currentLevelData) {
    return (
      <main className="min-h-screen bg-[#FDF7E5] px-4 py-6 sm:px-6 relative overflow-hidden flex items-center justify-center">
        <p className="text-[#C59B5F] font-bold animate-pulse">Loading Level...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDF7E5] px-4 py-6 sm:px-6 relative overflow-hidden">
      <div className="mx-auto w-full max-w-[520px] flex flex-col h-full min-h-[90vh]">
        
        {/* Header */}
        <GameHeader
          level={game.currentLevel}
          lives={game.lives}
          maxLives={currentLevelData.lives}
          onReset={resetLevel}
        />

        {/* Lives (under header) */}
        <Lives lives={game.lives} maxLives={currentLevelData.lives} />

        {/* Board */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <GameBoard
            rows={currentLevelData.rows}
            cols={currentLevelData.cols}
            paths={game.paths}
            clearingPathIds={clearingPathIds}
            onPathTap={handlePathTap}
          />
        </div>

        {/* Bottom controls */}
        <div className="mt-8 mb-6 flex items-center justify-center gap-6">
          <button 
            type="button"
            onClick={resetLevel}
            className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all hover:scale-105 active:scale-95"
            aria-label="Level Selector"
          >
            {/* Grid icon placeholder for level selector */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="3" y1="15" x2="21" y2="15"></line>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="15" y1="3" x2="15" y2="21"></line>
            </svg>
          </button>

          <HintButton
            hints={game.hints}
            disabled={game.completed || game.gameOver}
            onHint={handleHint}
          />
        </div>

        {/* Branding text at very bottom like reference */}
        <div className="text-center pb-4 opacity-40">
          <h3 className="font-black text-[#795548] text-2xl tracking-wide uppercase">Tap to Clear</h3>
        </div>

        {/* Game over overlay */}
        {game.gameOver && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-[28px] bg-white p-7 text-center shadow-2xl">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                <span className="text-4xl" style={{ filter: "hue-rotate(-15deg) saturate(1.5)" }}>💧</span>
              </div>

              <h2 className="text-3xl font-black text-slate-900">
                Out of Lives
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Don't worry. Try the level again and find the correct path.
              </p>

              <button
                type="button"
                onClick={resetLevel}
                className="
                  mt-7
                  w-full
                  rounded-2xl
                  bg-[#795548]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  hover:bg-[#5D4037]
                  active:scale-[0.98]
                "
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Level complete overlay */}
        {game.completed && clearingPathIds.length === 0 && (
          <LevelComplete
            level={game.currentLevel}
            onNextLevel={handleNextLevel}
            onReplay={handleReplay}
          />
        )}
      </div>
    </main>
  );
}
