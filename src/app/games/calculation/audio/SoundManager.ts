type SoundName =
  | "tap"
  | "number-place"
  | "correct"
  | "wrong"
  | "level-complete"
  | "puzzle-complete"
  | "unlock"
  | "button"
  | "back"
  | "reset";

const VOLUMES: Record<SoundName, number> = {
  tap: 0.25,
  "number-place": 0.35,
  button: 0.3,
  correct: 0.5,
  wrong: 0.45,
  "puzzle-complete": 0.55,
  "level-complete": 0.65,
  unlock: 0.5,
  back: 0.25,
  reset: 0.3,
};

class SoundManagerClass {
  private isMuted: boolean = false;
  private audioMap: Map<SoundName, HTMLAudioElement> = new Map();
  private timerMap: Map<SoundName, ReturnType<typeof setTimeout>> = new Map();

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("calculationSoundMuted");
      if (stored === "true") {
        this.isMuted = true;
      }
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("calculationSoundMuted", String(muted));
    }
    if (muted) {
      this.stopAll();
    }
  }

  public getMuted() {
    return this.isMuted;
  }

  public toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  public stopAll() {
    this.audioMap.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    this.timerMap.forEach((timerId) => {
      clearTimeout(timerId);
    });
    this.timerMap.clear();
  }

  private getAudioElement(name: SoundName): HTMLAudioElement | null {
    if (typeof window === "undefined") return null;

    if (!this.audioMap.has(name)) {
      const extension = name === "puzzle-complete" ? "mp3" : "wav";
      const src = `/audio/calculation/${name}.${extension}`;
      const audio = new Audio(src);
      audio.volume = VOLUMES[name];
      
      // Handle missing files gracefully
      audio.onerror = () => {
        console.warn(`Sound unavailable: ${src}`);
      };

      this.audioMap.set(name, audio);
    }

    return this.audioMap.get(name)!;
  }

  public play(name: SoundName) {
    if (this.isMuted) return;

    try {
      const audio = this.getAudioElement(name);
      if (audio) {
        // Clear any existing timer for this specific sound to avoid premature stopping
        if (this.timerMap.has(name)) {
          clearTimeout(this.timerMap.get(name));
          this.timerMap.delete(name);
        }

        // Reset playback position
        audio.pause();
        audio.currentTime = 0;
        audio.volume = VOLUMES[name];
        
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch((err) => {
            // Ignore abort errors (usually from rapid overlapping play/pause)
            if (err.name !== "AbortError") {
              console.warn(`Audio playback failed for ${name}:`, err);
            }
          });
        }

        // Stop the audio after exactly 1 second (1000ms)
        const timerId = setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
          this.timerMap.delete(name);
        }, 1000);

        this.timerMap.set(name, timerId);
      }
    } catch (e) {
      console.warn(`Unexpected error playing sound ${name}:`, e);
    }
  }
}

export const SoundManager = new SoundManagerClass();
