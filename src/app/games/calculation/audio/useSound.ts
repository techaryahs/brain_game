"use client";

import { useCallback, useState, useEffect } from "react";
import { SoundManager } from "./SoundManager";

export function useSound() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setMuted(SoundManager.getMuted());
  }, []);

  const toggleMute = useCallback(() => {
    const isMuted = SoundManager.toggleMute();
    setMuted(isMuted);
  }, []);

  const playTap = useCallback(() => SoundManager.play("tap"), []);
  const playNumberPlace = useCallback(() => SoundManager.play("number-place"), []);
  const playCorrect = useCallback(() => SoundManager.play("correct"), []);
  const playWrong = useCallback(() => SoundManager.play("wrong"), []);
  const playLevelComplete = useCallback(() => SoundManager.play("level-complete"), []);
  const playPuzzleComplete = useCallback(() => SoundManager.play("puzzle-complete"), []);
  const playUnlock = useCallback(() => SoundManager.play("unlock"), []);
  const playButton = useCallback(() => SoundManager.play("button"), []);
  const playBack = useCallback(() => SoundManager.play("back"), []);
  const playReset = useCallback(() => SoundManager.play("reset"), []);

  return {
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
  };
}
