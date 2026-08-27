import { Level } from "../types";
import { generateLevel } from "../logic/levelGenerator";

type LevelDef = {
  id: number;
  name: string;
  lives: number;
  hints: number;
  mask: string[];
};

const levelDefs: LevelDef[] = [
  {
    id: 1,
    name: "First Steps",
    lives: 3,
    hints: 3,
    mask: [
      "      ",
      " XXXX ",
      " XXXX ",
      " XXXX ",
      " XXXX ",
      "      ",
    ],
  },
  {
    id: 2,
    name: "Square",
    lives: 3,
    hints: 3,
    mask: [
      " XXXXXX ",
      " XXXXXX ",
      " XXXXXX ",
      " XXXXXX ",
      " XXXXXX ",
      " XXXXXX ",
    ],
  },
  {
    id: 3,
    name: "Cross",
    lives: 3,
    hints: 3,
    mask: [
      "   XXXX   ",
      "   XXXX   ",
      "   XXXX   ",
      " XXXXXXXX ",
      " XXXXXXXX ",
      "   XXXX   ",
      "   XXXX   ",
      "   XXXX   ",
    ],
  },
  {
    id: 10,
    name: "The Cup",
    lives: 3,
    hints: 3,
    mask: [
      " XXX           XXX ",
      " XXXX         XXXX ",
      " XXXXXXXXXXXXXXXXX ",
      "  XXXXXXXXXXXXXXX  ",
      "   XXXXXXXXXXXXX   ",
      "    XXXXXXXXXXX    ",
      "      XXXXXXX      ",
      "       XXXXX       ",
      "       XXXXX       ",
      "      XXXXXXX      ",
      "     XXXXXXXXX     ",
      "    XXXXXXXXXXX    ",
    ],
  },
  {
    id: 27,
    name: "Anchor",
    lives: 4,
    hints: 3,
    mask: [
      "       XXX       ",
      "      XXXXX      ",
      "      XXXXX      ",
      "       XXX       ",
      "       XXX       ",
      "    XXXXXXXXX    ",
      "       XXX       ",
      "       XXX       ",
      " X     XXX     X ",
      " XX    XXX    XX ",
      " XXX   XXX   XXX ",
      " XXXXX XXX XXXXX ",
      "  XXXXXXXXXXXXX  ",
      "   XXXXXXXXXXX   ",
      "     XXXXXXX     ",
    ],
  },
  {
    id: 40,
    name: "Dog",
    lives: 5,
    hints: 3,
    mask: [
      "             XXXX ",
      "             XXXX ",
      "             XXXX ",
      "      XXXXXXXXXXX ",
      "      XXXXXXXXXXX ",
      " X    XXXXXXXX    ",
      " XX   XXXXXXXX    ",
      " XXXXXXXXXXXXX    ",
      "  XXXXXXXXXXXX    ",
      "  XXXXX  XXXXX    ",
      "  XXXXX  XXXXX    ",
      "  XXXXX  XXXXX    ",
      "  XXXXX  XXXXX    ",
      "  XXXXX  XXXXX    ",
    ],
  }
];

// Map 1-50 to basic rectangles if they don't have a specific shape
const allLevels: LevelDef[] = [];
for (let i = 1; i <= 50; i++) {
  const specificDef = levelDefs.find(l => l.id === i);
  if (specificDef) {
    allLevels.push(specificDef);
  } else {
    // Generate a generic rectangle growing with level
    const size = Math.min(15, 6 + Math.floor(i / 3));
    const mask = Array(size).fill("X".repeat(size));
    allLevels.push({
      id: i,
      name: `Level ${i}`,
      lives: 3,
      hints: 3,
      mask,
    });
  }
}

export const getLevel = (levelId: number): Level | undefined => {
  const def = allLevels.find((l) => l.id === levelId);
  if (!def) return undefined;

  // Generate paths procedurally from the mask
  const generated = generateLevel(def.mask);

  return {
    id: def.id,
    name: def.name,
    lives: def.lives,
    hints: def.hints,
    rows: generated.rows,
    cols: generated.cols,
    paths: generated.paths,
  };
};

export const levels: Level[] = [
  getLevel(1)!
];
