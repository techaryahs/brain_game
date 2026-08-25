"use client";

import { useState } from "react";

type Difficulty = "basic" | "intermediate" | "hard";

type DifficultyConfig = {
  label: string;
  size: number;
  words: string[];
  directions: [number, number][]; // [rowStep, colStep]
};

// Basic: sirf left-to-right (horizontal), no reverse, chota grid
// Intermediate: horizontal + vertical (top-to-bottom), medium grid
// Hard: horizontal, vertical, diagonal + reverse words, bada grid
const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  basic: {
    label: "Basic",
    size: 8,
    words: ["BRAIN", "FOCUS", "LEARN", "PLAY"],
    directions: [[0, 1]], // left -> right only
  },
  intermediate: {
    label: "Intermediate",
    size: 10,
    words: ["BRAIN", "PUZZLE", "FOCUS", "LEARN", "THINK", "PLAY"],
    directions: [
      [0, 1], // left -> right
      [1, 0], // top -> bottom
    ],
  },
  hard: {
    label: "Hard",
    size: 12,
    words: [
      "BRAIN",
      "PUZZLE",
      "FOCUS",
      "LEARN",
      "THINK",
      "LOGIC",
      "SMART",
      "PLAY",
    ],
    directions: [
      [0, 1], // left -> right
      [0, -1], // right -> left (reverse)
      [1, 0], // top -> bottom
      [1, 1], // diagonal down-right
      [1, -1], // diagonal down-left
    ],
  },
};

type Cell = { row: number; col: number };
type Game = { board: string[][]; words: { word: string; cells: Cell[] }[] };

function createGame(config: DifficultyConfig, seed = 1): Game {
  let randomSeed = seed;
  const random = () => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    return randomSeed / 233280;
  };
  const size = config.size;
  const board = Array.from({ length: size }, () => Array(size).fill(""));
  const words: Game["words"] = [];
  config.words.forEach((word) => {
    for (let attempt = 0; attempt < 300; attempt += 1) {
      const [rowStep, colStep] =
        config.directions[Math.floor(random() * config.directions.length)];
      const row = Math.floor(random() * size);
      const col = Math.floor(random() * size);
      const endRow = row + rowStep * (word.length - 1);
      const endCol = col + colStep * (word.length - 1);
      if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size)
        continue;
      const cells = word
        .split("")
        .map((letter, index) => ({
          row: row + rowStep * index,
          col: col + colStep * index,
          letter,
        }));
      if (
        !cells.every(
          ({ row: cellRow, col: cellCol, letter }) =>
            !board[cellRow][cellCol] || board[cellRow][cellCol] === letter,
        )
      )
        continue;
      cells.forEach(({ row: cellRow, col: cellCol, letter }) => {
        board[cellRow][cellCol] = letter;
      });
      words.push({
        word,
        cells: cells.map(({ row: cellRow, col: cellCol }) => ({
          row: cellRow,
          col: cellCol,
        })),
      });
      break;
    }
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

export default function WordSearchPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>("basic");
  const [game, setGame] = useState(() =>
    createGame(DIFFICULTY_CONFIG.basic),
  );
  const [start, setStart] = useState<Cell | null>(null);
  const [selected, setSelected] = useState<Cell[]>([]);
  const [found, setFound] = useState<string[]>([]);
  const [message, setMessage] = useState(
    "Click one letter, then click the last letter of the word.",
  );

  const config = DIFFICULTY_CONFIG[difficulty];

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
      setFound((current) => [...current, match.word]);
      setMessage(`Great! You found ${match.word}.`);
    } else
      setMessage(
        match
          ? "You already found this word."
          : "That is not a word. Try again!",
      );
  }

  function newGame(nextDifficulty: Difficulty = difficulty) {
    const nextConfig = DIFFICULTY_CONFIG[nextDifficulty];
    setDifficulty(nextDifficulty);
    setGame(createGame(nextConfig, Date.now()));
    setStart(null);
    setSelected([]);
    setFound([]);
    setMessage("A new board is ready!");
  }

  const complete = found.length === config.words.length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-4 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-cyan-300">
              BRAIN GAMES
            </p>
            <h1 className="text-4xl font-black sm:text-5xl">Word Search</h1>
            <p className="mt-2 text-slate-300">
              Find the hidden words in the grid.
            </p>
          </div>
          <button
            type="button"
            onClick={() => newGame()}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            New Game
          </button>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {(Object.keys(DIFFICULTY_CONFIG) as Difficulty[]).map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => newGame(level)}
              className={`rounded-xl border px-5 py-2 font-bold transition ${
                difficulty === level
                  ? "border-cyan-300 bg-cyan-400 text-slate-950"
                  : "border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
              }`}
            >
              {DIFFICULTY_CONFIG[level].label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-3 shadow-2xl sm:p-6">
            <div
              className="grid gap-1 rounded-2xl bg-slate-950 p-2 sm:gap-2 sm:p-3"
              style={{
                gridTemplateColumns: `repeat(${config.size}, minmax(0, 1fr))`,
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
                      className={`aspect-square rounded-md text-sm font-black sm:text-xl ${isFound ? "bg-emerald-400 text-emerald-950" : isSelected ? "bg-amber-300 text-amber-950" : "bg-slate-800 text-white hover:bg-indigo-600"}`}
                      aria-label={`Letter ${letter}`}
                    >
                      {letter}
                    </button>
                  );
                }),
              )}
            </div>
            <p className="mt-5 rounded-xl bg-indigo-500/15 px-4 py-3 text-sm text-indigo-100">
              {complete ? "All words found! Congratulations!" : message}
            </p>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Words to find
            </p>
            <p className="mt-2 text-3xl font-black">
              {found.length}/{config.words.length}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {config.words.map((word) => (
                <div
                  key={word}
                  className={`rounded-xl border px-4 py-3 font-bold tracking-wider ${found.includes(word) ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-300 line-through" : "border-white/10 bg-slate-900/60 text-slate-100"}`}
                >
                  {word}
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
              {difficulty === "basic" &&
                "Basic: words only go left to right."}
              {difficulty === "intermediate" &&
                "Intermediate: words go left-to-right or top-to-bottom."}
              {difficulty === "hard" &&
                "Hard: words can go in any direction, including diagonals and reverse."}
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}