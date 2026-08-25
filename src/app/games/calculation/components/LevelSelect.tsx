"use client";

import { useState } from "react";
import { DifficultyCategory } from "../types/puzzle";
import { useSound } from "../audio/useSound";

export type CategoryProgress = {
  unlockedLevel: number; // 0 means category is locked
  stars: Record<number, number>;
};

type LevelSelectProps = {
  progress: Record<DifficultyCategory, CategoryProgress>;
  onSelectLevel: (category: DifficultyCategory, level: number) => void;
};

export default function LevelSelect({
  progress,
  onSelectLevel,
}: LevelSelectProps) {
  const { muted, toggleMute, playButton } = useSound();
  const [activeTab, setActiveTab] = useState<DifficultyCategory>("basic");

  const handleTabSelect = (id: DifficultyCategory) => {
    if (activeTab !== id) {
      playButton();
      setActiveTab(id);
    }
  };

  const handleLevelSelect = (cat: DifficultyCategory, level: number) => {
    playButton();
    onSelectLevel(cat, level);
  };

  const categories: { id: DifficultyCategory; label: string; icon: string }[] = [
    { id: "basic", label: "Basic", icon: "⭐" },
    { id: "intermediate", label: "Intermediate", icon: "⭐⭐⭐" },
    { id: "hard", label: "Hard", icon: "🔥🔥" },
  ];

  const currentProgress = progress[activeTab];
  const isCategoryUnlocked = currentProgress.unlockedLevel > 0;

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10 font-sans text-slate-900 animate-fade-in-up">
      <div className="mx-auto max-w-5xl relative">
        {/* Sound Toggle Button */}
        <button
          onClick={() => {
            playButton();
            toggleMute();
          }}
          className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all text-slate-600"
          aria-label={muted ? "Enable sound" : "Mute sound"}
        >
          {muted ? "🔇" : "🔊"}
        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 text-6xl drop-shadow-sm">🧮</div>
          <h1 className="text-4xl font-black tracking-tight text-slate-800">
            CROSSMATH
          </h1>
          <p className="mt-3 text-slate-500 font-medium tracking-wide text-sm uppercase">
            Connect the numbers. Solve the puzzle.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          {categories.map((cat) => {
            const catProgress = progress[cat.id];
            const catUnlocked = catProgress.unlockedLevel > 0;
            const isActive = activeTab === cat.id;
            
            return (
              <button
                key={cat.id}
                onClick={() => handleTabSelect(cat.id)}
                className={`
                  relative px-6 py-4 rounded-2xl w-full sm:w-48 font-bold tracking-wide uppercase transition-all
                  flex flex-col items-center justify-center gap-1
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-white text-slate-500 border-2 border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                  }
                `}
              >
                {!catUnlocked && (
                  <div className="absolute top-2 right-2 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <span>{cat.label}</span>
                <span className="text-sm opacity-90">{cat.icon}</span>
              </button>
            );
          })}
        </div>

        {/* Levels Grid or Locked Message */}
        {!isCategoryUnlocked ? (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-slate-100 shadow-sm max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Category Locked</h2>
            <p className="text-slate-500">Complete the previous category to unlock these levels.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 animate-fade-in-up">
            {Array.from({ length: 10 }).map((_, index) => {
              const level = index + 1;
              const unlocked = level <= currentProgress.unlockedLevel;
              const levelStars = currentProgress.stars[level] || 0;

              return (
                <button
                  key={level}
                  disabled={!unlocked}
                  onClick={() => handleLevelSelect(activeTab, level)}
                  className={`
                    relative aspect-square rounded-3xl
                    p-4 flex flex-col items-center justify-center
                    transition-all duration-200
                    ${
                      unlocked
                        ? "bg-white border-2 border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 active:scale-95"
                        : "cursor-not-allowed bg-slate-100/70 border-2 border-slate-200/50 opacity-70"
                    }
                  `}
                >
                  {/* Lock Icon */}
                  {!unlocked && (
                    <div className="absolute right-4 top-4 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}

                  <p className={`text-sm font-bold tracking-wide uppercase ${unlocked ? 'text-slate-400' : 'text-slate-400'}`}>
                    Level
                  </p>
                  <div className={`mt-1 text-4xl font-black ${unlocked ? 'text-slate-800' : 'text-slate-400'}`}>
                    {level}
                  </div>

                  {/* Stars / Status */}
                  {unlocked ? (
                    <div className="mt-3 flex justify-center text-[11px] sm:text-xs">
                      {levelStars > 0 ? (
                        Array.from({ length: 3 }).map((_, i) => (
                          <span key={i} className={`px-0.5 ${i < levelStars ? "drop-shadow-sm" : "grayscale opacity-20"}`}>⭐</span>
                        ))
                      ) : (
                        <span className="text-slate-300 font-semibold tracking-wider uppercase">Unplayed</span>
                      )}
                    </div>
                  ) : (
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">Locked</p>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
