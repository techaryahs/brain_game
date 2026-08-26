"use client";

import { useState } from "react";

type Tier = "basic" | "intermediate" | "hard";

type LevelConfig = {
  size: number;
  words: string[];
  directions: [number, number][]; // [rowStep, colStep]
};

const TIER_LABELS: Record<Tier, string> = {
  basic: "Basic",
  intermediate: "Intermediate",
  hard: "Hard",
};

const LEVELS_PER_TIER = 10;

// Tiers overlap on purpose:
// Basic level 10  === Intermediate level 1  (same global index)
// Intermediate level 10 === Hard level 1    (same global index)
const TIER_START_INDEX: Record<Tier, number> = {
  basic: 0,
  intermediate: LEVELS_PER_TIER - 1, // 9
  hard: (LEVELS_PER_TIER - 1) * 2, // 18
};
const TOTAL_LEVELS = TIER_START_INDEX.hard + LEVELS_PER_TIER; // 28 unique global levels

// A bigger pool than any single puzzle needs, so New Game can pick a fresh
// random set of words each time (not just re-shuffle the same set).
const WORD_POOL = [
  "PLAY",
  "BRAIN",
  "FOCUS",
  "LEARN",
  "THINK",
  "LOGIC",
  "SMART",
  "PUZZLE",
  "QUIZ",
  "MEMORY",
  "SOLVE",
  "WORD",
  "GAME",
  "MIND",
  "SHARP",
  "RIDDLE",
  "CLEVER",
  "TRIVIA",
  "SEARCH",
  "MATCH",
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

// All 8 directions, always available at every level: left-to-right,
// right-to-left, top-to-bottom, bottom-to-top, and both diagonals.
const ALL_DIRECTIONS: [number, number][] = [
  [0, 1], // left -> right
  [0, -1], // right -> left
  [1, 0], // top -> bottom
  [-1, 0], // bottom -> top
  [1, 1], // diagonal down-right
  [1, -1], // diagonal down-left
  [-1, 1], // diagonal up-right
  [-1, -1], // diagonal up-left
];

// Global difficulty ramps smoothly across all 28 levels: grid grows,
// word count grows. Direction is the same full set at every level so
// words can cross in any way (horizontal, vertical, diagonal, reversed).
// Word list itself is picked separately (see pickWords) so it can be
// randomized fresh on every New Game click.
function getLevelShape(globalIndex: number) {
  const progress = globalIndex / (TOTAL_LEVELS - 1); // 0..1
  const size = clamp(Math.round(6 + progress * 9), 6, 15); // 6 -> 15
  const wordCount = clamp(Math.round(3 + progress * 5), 3, 8); // 3 -> 8
  return { size, wordCount, directions: ALL_DIRECTIONS };
}

// Randomly picks `wordCount` words from the pool that fit inside `size`,
// using the same seeded random used for board placement so results are
// reproducible per seed but different on every New Game click.
function pickWords(
  wordCount: number,
  size: number,
  random: () => number,
): string[] {
  const candidates = WORD_POOL.filter((word) => word.length <= size);
  const pool = candidates.length >= wordCount ? candidates : WORD_POOL;
  const shuffled = shuffle(pool, random);
  return shuffled.slice(0, Math.min(wordCount, shuffled.length));
}

// Builds a full LevelConfig (size, a freshly randomized word list, and
// directions) for a given global level index + seed. Called with a new
// seed (Date.now()) on every New Game click so the word list changes too,
// not just the letter grid.
function buildLevel(globalIndex: number, seed: number): LevelConfig {
  const shape = getLevelShape(globalIndex);
  let randomSeed = seed;
  const random = () => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    return randomSeed / 233280;
  };
  const words = pickWords(shape.wordCount, shape.size, random);
  return { size: shape.size, words, directions: shape.directions };
}

function describeDirections(directions: [number, number][]) {
  const has = (r: number, c: number) =>
    directions.some(([dr, dc]) => dr === r && dc === c);
  const parts: string[] = [];
  if (has(0, 1) && has(0, -1)) parts.push("left-right & right-left");
  else if (has(0, 1)) parts.push("left-to-right");
  else if (has(0, -1)) parts.push("right-to-left");
  if (has(1, 0) && has(-1, 0)) parts.push("up-down & down-up");
  else if (has(1, 0)) parts.push("top-to-bottom");
  else if (has(-1, 0)) parts.push("bottom-to-top");
  if (has(1, 1) || has(1, -1) || has(-1, 1) || has(-1, -1))
    parts.push("diagonal (both ways)");
  return parts.join(", ");
}

type Cell = { row: number; col: number };
type Game = { board: string[][]; words: { word: string; cells: Cell[] }[] };

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function tryPlace(
  word: string,
  row: number,
  col: number,
  rowStep: number,
  colStep: number,
  size: number,
  board: string[][],
) {
  const endRow = row + rowStep * (word.length - 1);
  const endCol = col + colStep * (word.length - 1);
  if (
    row < 0 ||
    row >= size ||
    col < 0 ||
    col >= size ||
    endRow < 0 ||
    endRow >= size ||
    endCol < 0 ||
    endCol >= size
  )
    return null;
  const cells = word.split("").map((letter, index) => ({
    row: row + rowStep * index,
    col: col + colStep * index,
    letter,
  }));
  const valid = cells.every(
    ({ row: cellRow, col: cellCol, letter }) =>
      !board[cellRow][cellCol] || board[cellRow][cellCol] === letter,
  );
  return valid ? cells : null;
}

function createGame(config: LevelConfig, seed = 1): Game {
  let randomSeed = seed;
  const random = () => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    return randomSeed / 233280;
  };
  const size = config.size;
  const board = Array.from({ length: size }, () => Array(size).fill(""));
  const words: Game["words"] = [];

  // Words are sorted longest-first so the first (longest) word lays a solid
  // spine, and every later word is actively steered to intersect a letter
  // that is already on the board — this is what makes words genuinely
  // cross each other instead of just sitting next to one another.
  const orderedWords = [...config.words].sort((a, b) => b.length - a.length);

  orderedWords.forEach((word, wordIndex) => {
    let placedCells: { row: number; col: number; letter: string }[] | null =
      null;

    if (wordIndex > 0) {
      // Gather every letter already on the board that also appears in this
      // word — each one is a potential crossing point.
      const anchors: { row: number; col: number; letter: string }[] = [];
      for (let r = 0; r < size; r += 1) {
        for (let c = 0; c < size; c += 1) {
          if (board[r][c] && word.includes(board[r][c])) {
            anchors.push({ row: r, col: c, letter: board[r][c] });
          }
        }
      }

      const shuffledAnchors = shuffle(anchors, random);
      for (const anchor of shuffledAnchors) {
        if (placedCells) break;
        const letterIndices: number[] = [];
        word.split("").forEach((letter, index) => {
          if (letter === anchor.letter) letterIndices.push(index);
        });
        const shuffledIndices = shuffle(letterIndices, random);
        const shuffledDirections = shuffle(config.directions, random);
        for (const letterIndex of shuffledIndices) {
          if (placedCells) break;
          for (const [rowStep, colStep] of shuffledDirections) {
            const row = anchor.row - rowStep * letterIndex;
            const col = anchor.col - colStep * letterIndex;
            const cells = tryPlace(word, row, col, rowStep, colStep, size, board);
            if (cells) {
              placedCells = cells;
              break;
            }
          }
        }
      }
    }

    // Fall back to plain random placement first (fast path).
    if (!placedCells) {
      for (let attempt = 0; attempt < 300; attempt += 1) {
        const [rowStep, colStep] =
          config.directions[Math.floor(random() * config.directions.length)];
        const row = Math.floor(random() * size);
        const col = Math.floor(random() * size);
        const cells = tryPlace(word, row, col, rowStep, colStep, size, board);
        if (cells) {
          placedCells = cells;
          break;
        }
      }
    }

    // Last resort: exhaustively scan every cell + direction. This guarantees
    // a word is only ever left unplaced if it truly cannot fit anywhere —
    // which stops short words like PLAY from silently vanishing.
    if (!placedCells) {
      outer: for (let r = 0; r < size; r += 1) {
        for (let c = 0; c < size; c += 1) {
          for (const [rowStep, colStep] of config.directions) {
            const cells = tryPlace(word, r, c, rowStep, colStep, size, board);
            if (cells) {
              placedCells = cells;
              break outer;
            }
          }
        }
      }
    }

    if (!placedCells) return;

    placedCells.forEach(({ row: cellRow, col: cellCol, letter }) => {
      board[cellRow][cellCol] = letter;
    });
    words.push({
      word,
      cells: placedCells.map(({ row: cellRow, col: cellCol }) => ({
        row: cellRow,
        col: cellCol,
      })),
    });
  });
  return {
    board: board.map((row) =>
      row.map(
        (letter) =>
          letter || String.fromCharCode(65 + Math.floor(random() * 26)),
      ),
    ),
    words,
  };
}

function same(a: Cell, b: Cell) {
  return a.row === b.row && a.col === b.col;
}
function between(start: Cell, end: Cell) {
  const rowDelta = end.row - start.row;
  const colDelta = end.col - start.col;
  const length = Math.max(Math.abs(rowDelta), Math.abs(colDelta));
  if (
    !length ||
    (rowDelta !== 0 &&
      colDelta !== 0 &&
      Math.abs(rowDelta) !== Math.abs(colDelta))
  )
    return [];
  return Array.from({ length: length + 1 }, (_, index) => ({
    row: start.row + Math.sign(rowDelta) * index,
    col: start.col + Math.sign(colDelta) * index,
  }));
}

// A single shared AudioContext, created lazily on first use and reused for
// every sound. Creating a brand-new context per sound is what was causing
// the very first "found" sound to sometimes get silently dropped (some
// browsers start a freshly-created context in a "suspended" state).
let sharedAudioContext: AudioContext | null = null;
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!sharedAudioContext) {
    sharedAudioContext = new AudioContextClass();
  }
  if (sharedAudioContext.state === "suspended") {
    // Must be called from inside a user-gesture handler (a click), which
    // is exactly where playFoundSound/playCompleteSound are invoked from.
    sharedAudioContext.resume();
  }
  return sharedAudioContext;
}

// Plays a short pleasant "found it" chime using the Web Audio API —
// no audio file needed, works offline, and needs no extra assets.
function playFoundSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // A quick two-note upward chime (like a soft "ding-ding!").
  const notes = [
    { freq: 880, start: 0, duration: 0.12 },
    { freq: 1318.5, start: 0.1, duration: 0.18 },
  ];
  notes.forEach(({ freq, start, duration }) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = freq;
    gain.gain.setValueAtTime(0, now + start);
    gain.gain.linearRampToValueAtTime(0.25, now + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + start + duration);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(now + start);
    oscillator.stop(now + start + duration + 0.02);
  });
}

function playCompleteSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  // A short celebratory ascending run for finishing the whole puzzle.
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    const start = index * 0.1;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.value = freq;
    gain.gain.setValueAtTime(0, now + start);
    gain.gain.linearRampToValueAtTime(0.25, now + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + start + 0.25);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(now + start);
    oscillator.stop(now + start + 0.27);
  });
}

function ordinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = n % 100;
  const suffix =
    suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  return `${n}${suffix}`;
}

export default function WordSearchPage() {
  const [tier, setTier] = useState<Tier>("basic");
  const [subLevel, setSubLevel] = useState(1); // 1..10 within the tier
  const globalIndex = TIER_START_INDEX[tier] + (subLevel - 1);
  const shape = getLevelShape(globalIndex);

  const [game, setGame] = useState(() => createGame(buildLevel(0, 1), 1));
  // Source of truth for the sidebar/win-check: only words that actually
  // made it onto the board (never a word that silently failed to place).
  const placedWords = game.words.map(({ word }) => word);
  const [start, setStart] = useState<Cell | null>(null);
  const [selected, setSelected] = useState<Cell[]>([]);
  const [found, setFound] = useState<string[]>([]);
  const [message, setMessage] = useState(
    "Click one letter, then click the last letter of the word.",
  );

  function choose(cell: Cell) {
    if (!start) {
      setStart(cell);
      setSelected([cell]);
      setMessage("Now click the last letter of the word.");
      return;
    }
    const line = between(start, cell);
    const match = game.words.find(
      ({ cells }) =>
        cells.length === line.length &&
        (cells.every((item, index) => same(item, line[index])) ||
          cells.every((item, index) =>
            same(item, line[line.length - 1 - index]),
          )),
    );
    setStart(null);
    setSelected([]);
    if (match && !found.includes(match.word)) {
      const nextFound = [...found, match.word];
      setFound(nextFound);
      setMessage(`Great! You found ${match.word}.`);
      if (nextFound.length === placedWords.length) {
        playCompleteSound();
      } else {
        playFoundSound();
      }
    } else
      setMessage(
        match
          ? "You already found this word."
          : "That is not a word. Try again!",
      );
  }

  function loadLevel(nextTier: Tier, nextSubLevel: number) {
    const nextIndex = TIER_START_INDEX[nextTier] + (nextSubLevel - 1);
    const seed = Date.now();
    const nextConfig = buildLevel(nextIndex, seed);
    setTier(nextTier);
    setSubLevel(nextSubLevel);
    setGame(createGame(nextConfig, seed));
    setStart(null);
    setSelected([]);
    setFound([]);
    setMessage("A new board is ready!");
  }

  function newGame() {
    loadLevel(tier, subLevel);
  }

  const complete = found.length === placedWords.length;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-indigo-600">
              BRAIN GAMES
            </p>
            <h1 className="text-4xl font-black sm:text-5xl">Word Search</h1>
            <p className="mt-2 text-slate-500">
              Find the hidden words in the grid.
            </p>
          </div>
          <button
            type="button"
            onClick={newGame}
            className="rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-500"
          >
            New Game
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-3">
          {(Object.keys(TIER_LABELS) as Tier[]).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => loadLevel(level, 1)}
              className={`rounded-xl border px-5 py-2 font-bold transition ${
                tier === level
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {TIER_LABELS[level]}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[160px_minmax(0,1fr)_260px]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Levels
            </p>
            <div className="flex flex-col gap-2">
              {Array.from({ length: LEVELS_PER_TIER }, (_, i) => i + 1).map(
                (levelNumber) => (
                  <button
                    key={levelNumber}
                    type="button"
                    onClick={() => loadLevel(tier, levelNumber)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm font-bold transition ${
                      subLevel === levelNumber
                        ? "bg-amber-400 text-amber-950"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    Level {levelNumber}
                  </button>
                ),
              )}
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
            <div
              className="grid gap-1 rounded-2xl bg-slate-100 p-2 sm:gap-2 sm:p-3"
              style={{
                gridTemplateColumns: `repeat(${shape.size}, minmax(0, 1fr))`,
                aspectRatio: "1 / 1",
              }}
            >
              {game.board.flatMap((row, rowIndex) =>
                row.map((letter, colIndex) => {
                  const cell = { row: rowIndex, col: colIndex };
                  const isSelected = selected.some((item) => same(item, cell));
                  const isFound = game.words
                    .filter(({ word }) => found.includes(word))
                    .some(({ cells }) =>
                      cells.some((item) => same(item, cell)),
                    );
                  return (
                    <button
                      type="button"
                      key={`${rowIndex}-${colIndex}`}
                      onClick={() => choose(cell)}
                      className={`aspect-square rounded-md text-sm font-black sm:text-xl ${isFound ? "bg-emerald-400 text-emerald-950" : isSelected ? "bg-amber-300 text-amber-950" : "bg-white text-slate-800 border border-slate-200 hover:bg-indigo-100"}`}
                      aria-label={`Letter ${letter}`}
                    >
                      {letter}
                    </button>
                  );
                }),
              )}
            </div>
            <p className="mt-5 rounded-xl bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
              {complete
                ? subLevel === LEVELS_PER_TIER && tier === "basic"
                  ? "Congratulations! You are eligible for Intermediate level!"
                  : subLevel === LEVELS_PER_TIER && tier === "intermediate"
                    ? "Congratulations! You are eligible for Hard level!"
                    : subLevel === LEVELS_PER_TIER && tier === "hard"
                      ? "Congratulations! You are a Word Search Master!"
                      : `Congratulations! Your ${ordinal(subLevel)} level complete!`
                : message}
            </p>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              {TIER_LABELS[tier]} • Level {subLevel}/{LEVELS_PER_TIER}
            </p>
            <p className="mt-2 text-3xl font-black">
              {found.length}/{placedWords.length}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {placedWords.map((word) => (
                <div
                  key={word}
                  className={`rounded-xl border px-4 py-3 font-bold tracking-wider ${found.includes(word) ? "border-emerald-300 bg-emerald-50 text-emerald-600 line-through" : "border-slate-200 bg-slate-50 text-slate-700"}`}
                >
                  {word}
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-500">
              {shape.size}x{shape.size} grid • words go{" "}
              {describeDirections(shape.directions)} • some words cross
              each other.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}