"use client";

import { useEffect, useState } from "react";

import LevelSelect from "./components/LevelSelect";
import PuzzleBoard, { NumberTile } from "./components/PuzzleBoard";
import NumberTray from "./components/NumberTray";
import LevelComplete from "./components/LevelComplete";

import { useSound } from "./audio/useSound";
import { generateLevelPuzzles } from "./data/puzzles";
import { Puzzle, DifficultyCategory } from "./types/puzzle";
import { CategoryProgress } from "./components/LevelSelect";

type Screen = "levels" | "game" | "complete";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function CalculationGame() {
  const [screen, setScreen] = useState<Screen>("levels");
  
  // Progression State
  const [selectedCategory, setSelectedCategory] = useState<DifficultyCategory>("basic");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [progress, setProgress] = useState<Record<DifficultyCategory, CategoryProgress>>({
    basic: { unlockedLevel: 1, stars: {} },
    intermediate: { unlockedLevel: 0, stars: {} },
    hard: { unlockedLevel: 0, stars: {} },
  });
  
  // Game Session State
  const [levelPuzzles, setLevelPuzzles] = useState<Puzzle[]>([]);
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  // Interaction State
  const [selectedCellId, setSelectedCellId] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Record<string, NumberTile>>({});
  const [shuffledTiles, setShuffledTiles] = useState<NumberTile[]>([]);

  // Animation States
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [removingCellId, setRemovingCellId] = useState<string | null>(null);

  const {
    muted,
    toggleMute,
    playTap,
    playNumberPlace,
    playCorrect,
    playWrong,
    playLevelComplete,
    playPuzzleComplete,
    playUnlock,
    playButton,
    playBack,
    playReset,
  } = useSound();

  useEffect(() => {
    const savedProgress = localStorage.getItem("crossmath-progress");
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {}
    } else {
      // Migrate old progress if available
      const savedLevel = localStorage.getItem("crossmath-unlocked-level");
      const savedStars = localStorage.getItem("crossmath-stars");
      if (savedLevel || savedStars) {
        setProgress({
          basic: {
            unlockedLevel: savedLevel ? Number(savedLevel) : 1,
            stars: savedStars ? JSON.parse(savedStars) : {},
          },
          intermediate: { unlockedLevel: 0, stars: {} },
          hard: { unlockedLevel: 0, stars: {} },
        });
      }
    }
  }, []);

  const puzzle = levelPuzzles[puzzleIndex];

  const startLevel = (category: DifficultyCategory, level: number) => {
    setSelectedCategory(category);
    setSelectedLevel(level);
    
    const generated = generateLevelPuzzles(category, level);
    setLevelPuzzles(generated);
    setPuzzleIndex(0);
    
    const firstPuzzle = generated[0];
    const tiles: NumberTile[] = firstPuzzle.tray.map((val, index) => ({
      id: `tile-${index}`,
      value: val,
    }));
    
    setShuffledTiles(shuffle(tiles));
    setPlaced({});
    setSelectedCellId(null);
    setMistakes(0);
    setIsError(false);
    setIsSuccess(false);
    setRemovingCellId(null);
    setScreen("game");
  };

  const resetPuzzle = () => {
    if (!puzzle) return;
    const tiles: NumberTile[] = puzzle.tray.map((val, index) => ({
      id: `tile-${index}`,
      value: val,
    }));
    setShuffledTiles(shuffle(tiles));
    setPlaced({});
    setSelectedCellId(null);
    setIsError(false);
    setIsSuccess(false);
    setRemovingCellId(null);
  };

  const checkEquation = (values: number[], operator: string) => {
    if (values.some((v) => v === undefined)) return null;

    const [a, b] = values;
    switch (operator) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷":
        if (b === 0) return null;
        return a / b;
      default:
        return null;
    }
  };

  const validatePuzzle = (nextPlaced: Record<string, NumberTile>) => {
    if (!puzzle) return false;
    const values: Record<string, number> = {};

    puzzle.cells.forEach((cell) => {
      if (cell.type === "number") {
        if (cell.fixed) {
          values[cell.id] = cell.value as number;
        } else if (nextPlaced[cell.id] !== undefined) {
          values[cell.id] = nextPlaced[cell.id].value;
        }
      }
    });

    const complete = puzzle.cells
      .filter((c) => c.type === "number" && !c.fixed)
      .every((c) => nextPlaced[c.id] !== undefined);
    
    if (!complete) return false;

    for (const eq of puzzle.equations) {
      const v1 = values[eq.cells[0]];
      const op = puzzle.cells.find(c => c.id === eq.cells[1])?.value as string;
      const v2 = values[eq.cells[2]];
      const res = values[eq.cells[4]];

      const calculated = checkEquation([v1, v2], op);
      if (calculated !== res) return false;
    }

    return true;
  };

  const handleTileClick = (tile: NumberTile) => {
    if (!selectedCellId || !puzzle || isSuccess || isError) return;

    const nextPlaced = {
      ...placed,
      [selectedCellId]: tile,
    };

    setPlaced(nextPlaced);
    setSelectedCellId(null);

    const allFilled = puzzle.cells
      .filter((cell) => cell.type === "number" && !cell.fixed)
      .every((cell) => nextPlaced[cell.id] !== undefined);

    if (allFilled) {
      const correct = validatePuzzle(nextPlaced);
      if (correct) {
        playCorrect();
        setIsSuccess(true);
        setTimeout(() => {
          if (puzzleIndex < 9) {
            playPuzzleComplete();
            const nextIdx = puzzleIndex + 1;
            const nextPuz = levelPuzzles[nextIdx];
            setPuzzleIndex(nextIdx);
            
            const tiles: NumberTile[] = nextPuz.tray.map((val, index) => ({
              id: `tile-${index}`,
              value: val,
            }));
            setShuffledTiles(shuffle(tiles));
            setPlaced({});
            setIsSuccess(false);
          } else {
            completeLevel();
          }
        }, 600);
      } else {
        playWrong();
        setIsError(true);
        setMistakes((value) => value + 1);
        setTimeout(() => {
          setPlaced({});
          setIsError(false);
        }, 350);
      }
    } else {
      playNumberPlace();
    }
  };

  const handleCellClick = (cellId: string) => {
    if (isSuccess || isError) return;

    if (placed[cellId] !== undefined) {
      playNumberPlace();
      setRemovingCellId(cellId);
      setSelectedCellId(null);
      
      setTimeout(() => {
        const nextPlaced = { ...placed };
        delete nextPlaced[cellId];
        setPlaced(nextPlaced);
        setRemovingCellId(null);
      }, 150);
    } else {
      playTap();
      setSelectedCellId(selectedCellId === cellId ? null : cellId);
    }
  };

  const completeLevel = () => {
    const earnedStars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
    
    const nextProgress = JSON.parse(JSON.stringify(progress)) as Record<DifficultyCategory, CategoryProgress>;
    const currentCatProgress = nextProgress[selectedCategory];
    
    if (!currentCatProgress.stars[selectedLevel] || currentCatProgress.stars[selectedLevel] < earnedStars) {
      currentCatProgress.stars[selectedLevel] = earnedStars;
    }

    const nextLevel = Math.max(currentCatProgress.unlockedLevel, selectedLevel + 1);
    let unlockedNew = false;

    if (nextLevel > 10) {
      if (currentCatProgress.unlockedLevel < 10) unlockedNew = true;
      currentCatProgress.unlockedLevel = 10;
      
      if (selectedCategory === "basic") {
        if (nextProgress.intermediate.unlockedLevel < 1) unlockedNew = true;
        nextProgress.intermediate.unlockedLevel = Math.max(1, nextProgress.intermediate.unlockedLevel);
      } else if (selectedCategory === "intermediate") {
        if (nextProgress.hard.unlockedLevel < 1) unlockedNew = true;
        nextProgress.hard.unlockedLevel = Math.max(1, nextProgress.hard.unlockedLevel);
      }
    } else {
      if (currentCatProgress.unlockedLevel < nextLevel) unlockedNew = true;
      currentCatProgress.unlockedLevel = nextLevel;
    }

    if (unlockedNew) {
      playUnlock();
    } else {
      playLevelComplete();
    }

    setProgress(nextProgress);
    localStorage.setItem("crossmath-progress", JSON.stringify(nextProgress));

    setIsSuccess(false);
    setScreen("complete");
  };

  const goNextLevel = () => {
    if (selectedLevel < 10) {
      startLevel(selectedCategory, selectedLevel + 1);
    } else {
      // If completed level 10, go to next category
      if (selectedCategory === "basic") startLevel("intermediate", 1);
      else if (selectedCategory === "intermediate") startLevel("hard", 1);
      else setScreen("levels");
    }
  };

  const usedTileIds = new Set(Object.values(placed).map(tile => tile.id));

  if (screen === "levels") {
    return <LevelSelect progress={progress} onSelectLevel={startLevel} />;
  }

  if (screen === "complete") {
    return (
      <LevelComplete
        level={selectedLevel}
        mistakes={mistakes}
        onNext={goNextLevel}
        onLevels={() => setScreen("levels")}
      />
    );
  }

  if (!puzzle) return null;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center">
      
      <div className="w-full max-w-[480px] min-h-screen bg-white sm:shadow-2xl sm:min-h-0 sm:my-8 sm:rounded-[32px] overflow-hidden flex flex-col animate-fade-in-up">
        
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-100 bg-white sticky top-0 z-20">
          <div className="flex gap-2">
            <button
              onClick={() => {
                playBack();
                setScreen("levels");
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 active:scale-95 transition-all"
              aria-label="Back to Levels"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                playButton();
                toggleMute();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
              aria-label={muted ? "Enable sound" : "Mute sound"}
            >
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {selectedCategory} Level {selectedLevel}
            </span>
            <span className="text-sm font-bold text-slate-800 tracking-wide">
              Puzzle {puzzleIndex + 1} / 10
            </span>
          </div>
          
          <button
            onClick={() => {
              playReset();
              resetPuzzle();
            }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 active:scale-95 transition-all"
            aria-label="Restart Puzzle"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <div className="h-1 w-full bg-slate-100">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out" 
            style={{ width: `${(puzzleIndex / 10) * 100}%` }} 
          />
        </div>

        <div className="flex-1 px-4 py-6 sm:px-6 overflow-y-auto">
          
          <PuzzleBoard
            puzzle={puzzle}
            placed={placed}
            selectedCellId={selectedCellId}
            removingCellId={removingCellId}
            isError={isError}
            isSuccess={isSuccess}
            onCellClick={handleCellClick}
          />

          <NumberTray
            tiles={shuffledTiles}
            usedTileIds={usedTileIds}
            onNumberClick={handleTileClick}
          />

          <p className="mt-8 text-center text-[13px] font-bold tracking-wide text-slate-400 h-6 transition-all">
            {!selectedCellId 
              ? "TAP AN EMPTY BOX"
              : "CHOOSE A NUMBER"}
          </p>
        </div>
      </div>
    </main>
  );
}
