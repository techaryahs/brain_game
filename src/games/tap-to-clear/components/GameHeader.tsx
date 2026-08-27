"use client";

import Link from "next/link";

interface GameHeaderProps {
  level: number;
  lives: number;
  maxLives: number;
  onReset: () => void;
}

export default function GameHeader({ level }: GameHeaderProps) {
  return (
    <div className="flex items-center justify-between py-4 mb-2">
      <Link
        href="/games"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
        aria-label="Back to games"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>

      <div className="flex-grow text-center">
        <h1 className="text-xl font-bold text-[#795548]">
          Level {level}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
          aria-label="Theme"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="#795548"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="#795548"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="#795548"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="#795548"></circle>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
          </svg>
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
          aria-label="Settings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
