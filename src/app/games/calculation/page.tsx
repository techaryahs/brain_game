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

  // New Mechanics State
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [puzzleStartTime, setPuzzleStartTime] = useState<number>(0);
  const [fastestPuzzle, setFastestPuzzle] = useState<number>(Infinity);
  const [livesUsed, setLivesUsed] = useState(0);
  const [speedFeedback, setSpeedFeedback] = useState<{points: number, show: boolean} | null>(null);

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
    setLives(3);
    setCombo(0);
    setScore(0);
    setBestCombo(0);
    setLivesUsed(0);
    setFastestPuzzle(Infinity);
    setPuzzleStartTime(Date.now());
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
        
        // Calculate score
        const timeTaken = (Date.now() - puzzleStartTime) / 1000;
        let speedPoints = 5;
        if (timeTaken < 10) speedPoints = 50;
        else if (timeTaken < 20) speedPoints = 30;
        else if (timeTaken < 30) speedPoints = 15;
        
        setFastestPuzzle(prev => Math.min(prev, timeTaken));
        
        const newCombo = combo + 1;
        setCombo(newCombo);
        setBestCombo(prev => Math.max(prev, newCombo));
        
        let multiplier = 1;
        if (newCombo >= 10) multiplier = 5;
        else if (newCombo >= 5) multiplier = 3;
        else if (newCombo >= 3) multiplier = 2;
        
        const basePoints = 10;
        const totalPoints = basePoints * multiplier + speedPoints;
        setScore(prev => prev + totalPoints);
        
        setSpeedFeedback({ points: speedPoints, show: true });

        setTimeout(() => {
          setSpeedFeedback(null);
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
            setPuzzleStartTime(Date.now());
          } else {
            completeLevel();
          }
        }, 1200);
      } else {
        playWrong();
        setIsError(true);
        setMistakes((value) => value + 1);
        setCombo(0);
        
        const nextLives = lives - 1;
        setLives(nextLives);
        setLivesUsed(prev => prev + 1);

        setTimeout(() => {
          setPlaced({});
          setIsError(false);
          if (nextLives <= 0) {
            setScreen("complete");
          }
        }, 600);
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
    const isGameOver = lives <= 0;
    const answered = puzzleIndex + (isGameOver ? 0 : 1);
    const accuracy = answered > 0 ? (answered / (answered + mistakes)) * 100 : 0;
    
    return (
      <LevelComplete
        isGameOver={isGameOver}
        level={selectedLevel}
        mistakes={mistakes}
        finalScore={score}
        bestCombo={bestCombo}
        accuracy={accuracy}
        fastestPuzzle={fastestPuzzle === Infinity ? undefined : fastestPuzzle}
        livesUsed={livesUsed}
        onNext={isGameOver ? () => startLevel(selectedCategory, selectedLevel) : goNextLevel}
        onLevels={() => setScreen("levels")}
      />
    );
  }

  if (!puzzle) return null;

  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-slate-50 flex flex-col items-center sm:p-4">
      
      <div className="w-full h-full max-w-5xl bg-white sm:shadow-2xl sm:rounded-[32px] overflow-hidden flex flex-col animate-fade-in-up">
        
        <div className="px-4 py-3 border-b border-slate-100 bg-white z-20 flex flex-col gap-3 flex-shrink-0">
          <div className="flex items-center justify-between">
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

          <div className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-2 border border-slate-100">
            <div className="flex gap-1 text-xl animate-fade-in">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={`transition-all duration-300 ${i < lives ? "drop-shadow-sm scale-100" : "grayscale opacity-30 scale-75"}`}>
                  ❤️
                </span>
              ))}
            </div>
            
            <div className="flex flex-col items-center min-w-[100px]">
              <div className={`font-black text-sm transition-all duration-300 ${combo >= 10 ? 'text-red-500 scale-110' : combo >= 5 ? 'text-orange-500 scale-105' : combo >= 3 ? 'text-blue-500' : 'text-slate-400 opacity-50'}`}>
                {combo > 0 ? `🔥 ${combo} COMBO` : 'NO COMBO'}
              </div>
              {combo >= 3 && (
                <div className="mt-0.5 text-[10px] font-black bg-slate-200 text-slate-600 px-2 rounded-full animate-fade-in-up">
                  x{combo >= 10 ? 5 : combo >= 5 ? 3 : 2}
                </div>
              )}
            </div>
            
            <div className="flex gap-1 items-center font-black text-lg text-slate-700">
              <span className="text-yellow-400">⭐</span> {score}
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-slate-100">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out" 
            style={{ width: `${(puzzleIndex / 10) * 100}%` }} 
          />
        </div>

        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row p-4 sm:p-6 gap-6 relative">
          
          {speedFeedback?.show && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce pointer-events-none drop-shadow-xl">
              <div className="bg-white border-4 border-yellow-400 text-yellow-500 px-6 py-3 rounded-2xl shadow-xl font-black text-3xl flex items-center gap-2">
                +{speedFeedback.points} ⚡
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col justify-center items-center min-h-0 min-w-0">
            <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden pb-4 lg:pb-0">
              <PuzzleBoard
                puzzle={puzzle}
                placed={placed}
                selectedCellId={selectedCellId}
                removingCellId={removingCellId}
                isError={isError}
                isSuccess={isSuccess}
                onCellClick={handleCellClick}
              />
            </div>
          </div>

          <div className="w-full lg:w-96 flex-shrink-0 flex flex-col justify-center pb-safe">
            <div className="bg-slate-50/50 rounded-3xl border border-slate-100 p-4 sm:p-6 shadow-sm">
              <div className="text-center mb-4">
                <p className="text-xs font-bold tracking-[0.2em] text-slate-400">YOUR ANSWER</p>
              </div>

              <NumberTray
                tiles={shuffledTiles}
                usedTileIds={usedTileIds}
                onNumberClick={handleTileClick}
              />

              <p className="mt-6 text-center text-[13px] font-bold tracking-wide text-slate-400 h-6 transition-all">
                {!selectedCellId 
                  ? "TAP AN EMPTY BOX"
                  : "CHOOSE A NUMBER"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
