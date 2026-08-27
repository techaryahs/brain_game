export function playClickSound() {
  const audio = new Audio("/sounds/click.mp3");
  audio.volume = 1;
  audio.currentTime = 0;

  audio.play().catch((error) => {
    console.error("Click sound error:", error);
  });
}

export function playComputerSound() {
  const audio = new Audio("/sounds/computer.mp3");
  audio.volume = 1;
  audio.currentTime = 0;

  audio.play().catch((error) => {
    console.error("Computer sound error:", error);
  });
}

export function playWinSound() {
  const audio = new Audio("/sounds/win.mp3");
  audio.volume = 1;
  audio.currentTime = 0;

  audio.play().catch((error) => {
    console.error("Win sound error:", error);
  });
}

export function playDrawSound() {
  const audio = new Audio("/sounds/draw.mp3");
  audio.volume = 1;
  audio.currentTime = 0;

  audio.play().catch((error) => {
    console.error("Draw sound error:", error);
  });
}