"use client";

import { useEffect, useRef, useState } from "react";
import Cell from "./Cell";
import { Board as BoardType, Player } from "../types";

import {
  checkDraw,
  checkWinner,
  getBasicMove,
  getIntermediateMove,
  getHardMove,
} from "../logic/gameLogic";

import {
  playClickSound,
  playComputerSound,
  playWinSound,
  playDrawSound,
} from "../logic/sounds";

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

  const [currentPlayer, setCurrentPlayer] =
    useState<Player>("X");

  const [winner, setWinner] =
    useState<Player | null>(null);

  const [draw, setDraw] = useState(false);

  const [computerThinking, setComputerThinking] =
    useState(false);

  // Prevent win sound from playing more than once
  const winSoundPlayed = useRef(false);

  // Computer move
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

    // Computer sound
    playComputerSound();

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    // Computer wins
    if (gameWinner) {
      setWinner(gameWinner);

      if (!winSoundPlayed.current) {
        playWinSound();
        winSoundPlayed.current = true;
      }

      setComputerThinking(false);
      return;
    }

    // Draw
    if (checkDraw(newBoard)) {
      setDraw(true);
      playDrawSound();

      setComputerThinking(false);
      return;
    }

    setCurrentPlayer("X");
    setComputerThinking(false);
  }

  // Computer automatically plays
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
  }, [
    currentPlayer,
    gameMode,
    winner,
    draw,
  ]);

  // Player clicks a cell
  function handleClick(index: number) {
    // Don't allow invalid moves
    if (
      board[index] ||
      winner ||
      draw ||
      computerThinking
    ) {
      return;
    }

    // In computer mode, player controls X
    if (
      gameMode === "computer" &&
      currentPlayer !== "X"
    ) {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    // Click sound
    playClickSound();

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    // Player wins
    if (gameWinner) {
      setWinner(gameWinner);

      if (!winSoundPlayed.current) {
        playWinSound();
        winSoundPlayed.current = true;
      }

      return;
    }

    // Draw
    if (checkDraw(newBoard)) {
      setDraw(true);
      playDrawSound();

      return;
    }

    // Change player
    setCurrentPlayer(
      currentPlayer === "X" ? "O" : "X"
    );
  }

  // Restart game
  function resetGame() {
    setBoard(Array(9).fill(null));

    setCurrentPlayer("X");

    setWinner(null);

    setDraw(false);

    setComputerThinking(false);

    // Allow win sound again
    winSoundPlayed.current = false;
  }

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Title */}
      <h1 className="text-3xl font-bold">
        Tic Tac Toe
      </h1>

      {/* Computer information */}
      {gameMode === "computer" && (
        <p className="text-lg">
          You: X &nbsp; | &nbsp; Computer: O
        </p>
      )}

      {/* Game status */}
      <p className="text-xl">
        {winner
          ? `Winner: ${winner}`
          : draw
          ? "It's a draw!"
          : computerThinking
          ? "Computer is thinking..."
          : `Turn: ${currentPlayer}`}
      </p>

      {/* Game board */}
      <div className="grid grid-cols-3">
        {board.map((value, index) => (
          <Cell
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {/* Restart */}
      <button
        onClick={resetGame}
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Restart Game
      </button>

    </div>
  );
}