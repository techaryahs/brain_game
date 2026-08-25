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
  private audioPool: Map<SoundName, HTMLAudioElement[]> = new Map();
  private maxPoolSize = 5; // Allow rapid consecutive sounds

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
  }

  public getMuted() {
    return this.isMuted;
  }

  public toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  private getAudioElement(name: SoundName): HTMLAudioElement | null {
    if (typeof window === "undefined") return null;

    if (!this.audioPool.has(name)) {
      this.audioPool.set(name, []);
    }

    const pool = this.audioPool.get(name)!;
    
    // Find an available (ended or untouched) audio element
    let audio = pool.find((a) => a.ended || a.currentTime === 0);

    // If none available and we haven't reached max pool size, create one
    if (!audio && pool.length < this.maxPoolSize) {
      const extension = name === "puzzle-complete" ? "mp3" : "wav";
      const src = `/audio/calculation/${name}.${extension}`;
      audio = new Audio(src);
      audio.volume = VOLUMES[name];
      
      // Handle missing files gracefully
      audio.onerror = () => {
        console.warn(`Sound unavailable: ${src}`);
      };

      pool.push(audio);
    } 
    // If pool is full, reuse the oldest playing element
    else if (!audio) {
      audio = pool[0]; // simplistic rotation
      audio.currentTime = 0;
    }

    return audio;
  }

  public play(name: SoundName) {
    if (this.isMuted) return;

    try {
      const audio = this.getAudioElement(name);
      if (audio) {
        // Reset playback position if it's being reused
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
      }
    } catch (e) {
      console.warn(`Unexpected error playing sound ${name}:`, e);
    }
  }
}

export const SoundManager = new SoundManagerClass();
