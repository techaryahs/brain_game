import { Board, Player } from "../types";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: Board): Player | null {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a];
    }
  }

  return null;
}

export function checkDraw(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

function getEmptyCells(board: Board): number[] {
  return board
    .map((cell, index) => (cell === null ? index : -1))
    .filter((index) => index !== -1);
}

// 🟢 BASIC
export function getBasicMove(board: Board): number | null {
  const emptyCells = getEmptyCells(board);

  if (emptyCells.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);

  return emptyCells[randomIndex];
}

// 🟡 INTERMEDIATE
export function getIntermediateMove(board: Board): number | null {
  const emptyCells = getEmptyCells(board);

  if (emptyCells.length === 0) {
    return null;
  }

  // First try to win
  for (const index of emptyCells) {
    const testBoard = [...board];
    testBoard[index] = "O";

    if (checkWinner(testBoard) === "O") {
      return index;
    }
  }

  // Then block the player
  for (const index of emptyCells) {
    const testBoard = [...board];
    testBoard[index] = "X";

    if (checkWinner(testBoard) === "X") {
      return index;
    }
  }

  // Otherwise make a random move
  return getBasicMove(board);
}

// 🔴 HARD - MINIMAX
function minimax(
  board: Board,
  isMaximizing: boolean
): number {
  const winner = checkWinner(board);

  if (winner === "O") return 10;
  if (winner === "X") return -10;
  if (checkDraw(board)) return 0;

  const emptyCells = getEmptyCells(board);

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (const index of emptyCells) {
      const newBoard = [...board];
      newBoard[index] = "O";

      const score = minimax(newBoard, false);

      bestScore = Math.max(bestScore, score);
    }

    return bestScore;
  }

  let bestScore = Infinity;

  for (const index of emptyCells) {
    const newBoard = [...board];
    newBoard[index] = "X";

    const score = minimax(newBoard, true);

    bestScore = Math.min(bestScore, score);
  }

  return bestScore;
}

export function getHardMove(board: Board): number | null {
  const emptyCells = getEmptyCells(board);

  if (emptyCells.length === 0) {
    return null;
  }

  let bestScore = -Infinity;
  let bestMove = emptyCells[0];

  for (const index of emptyCells) {
    const newBoard = [...board];
    newBoard[index] = "O";

    const score = minimax(newBoard, false);

    if (score > bestScore) {
      bestScore = score;
      bestMove = index;
    }
  }

  return bestMove;
}