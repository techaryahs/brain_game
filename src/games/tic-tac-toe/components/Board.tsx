"use client";

import { useEffect, useState } from "react";
import Cell from "./Cell";
import { Board as BoardType, Player } from "../types";
import {
  checkDraw,
  checkWinner,
  getBasicMove,
  getIntermediateMove,
  getHardMove,
} from "../logic/gameLogic";

type Difficulty = "basic" | "intermediate" | "hard";

interface BoardProps {
  gameMode?: "friend" | "computer";
  difficulty?: Difficulty;
}

export default function Board({
  gameMode = "friend",
  difficulty,
}: BoardProps) {
  const [board, setBoard] = useState<BoardType>(
    Array(9).fill(null)
  );

  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");

  const [winner, setWinner] = useState<Player | null>(null);

  const [draw, setDraw] = useState(false);

  const [computerThinking, setComputerThinking] = useState(false);

  function makeComputerMove(currentBoard: BoardType) {
    let move: number | null = null;

    if (difficulty === "basic") {
      move = getBasicMove(currentBoard);
    }

    if (difficulty === "intermediate") {
      move = getIntermediateMove(currentBoard);
    }

    if (difficulty === "hard") {
      move = getHardMove(currentBoard);
    }

    if (move === null) {
      return;
    }

    const newBoard = [...currentBoard];
    newBoard[move] = "O";

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      setComputerThinking(false);
      return;
    }

    if (checkDraw(newBoard)) {
      setDraw(true);
      setComputerThinking(false);
      return;
    }

    setCurrentPlayer("X");
    setComputerThinking(false);
  }

  useEffect(() => {
    if (
      gameMode === "computer" &&
      currentPlayer === "O" &&
      !winner &&
      !draw
    ) {
      setComputerThinking(true);

      const timer = setTimeout(() => {
        makeComputerMove(board);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameMode, winner, draw]);

  function handleClick(index: number) {
    if (board[index] || winner || draw || computerThinking) {
      return;
    }

    // Computer mode: human is X
    if (gameMode === "computer" && currentPlayer !== "X") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    if (checkDraw(newBoard)) {
      setDraw(true);
      return;
    }

    setCurrentPlayer(
      currentPlayer === "X" ? "O" : "X"
    );
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setDraw(false);
    setComputerThinking(false);
  }

  return (
    <div className="flex flex-col items-center gap-6">

      <h1 className="text-3xl font-bold">
        Tic Tac Toe
      </h1>

      {gameMode === "computer" && (
        <p className="text-lg">
          You: X &nbsp; | &nbsp; Computer: O
        </p>
      )}

      <p className="text-xl">
        {winner
          ? `Winner: ${winner}`
          : draw
          ? "It's a draw!"
          : computerThinking
          ? "Computer is thinking..."
          : `Turn: ${currentPlayer}`}
      </p>

      <div className="grid grid-cols-3">
        {board.map((value, index) => (
          <Cell
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button
        onClick={resetGame}
        className="rounded-lg bg-black px-6 py-3 text-white"
      >
        Restart Game
      </button>

    </div>
  );
}