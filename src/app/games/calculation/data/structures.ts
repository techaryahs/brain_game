export type EquationTemplate = {
  startRow: number;
  startCol: number;
  direction: "horizontal" | "vertical";
};

export type StructureTemplate = {
  id: string;
  category: "basic" | "intermediate" | "hard";
  level: number;
  puzzleNumber: number;
  equations: EquationTemplate[];
};

export const STRUCTURE_TEMPLATES: StructureTemplate[] = [
  {
    "id": "structure-1",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-2",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-3",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-4",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-5",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-6",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-7",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-8",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-9",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-10",
    "category": "basic",
    "level": 1,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-11",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-12",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-13",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-14",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-15",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-16",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-17",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-18",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-19",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-20",
    "category": "basic",
    "level": 2,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-21",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-22",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-23",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-24",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-25",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-26",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-27",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-28",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-29",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-30",
    "category": "basic",
    "level": 3,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-31",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-32",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-33",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-34",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-35",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-36",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-37",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-38",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-39",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-40",
    "category": "basic",
    "level": 4,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-41",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-42",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-43",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-44",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-45",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-46",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-47",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-48",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-49",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-50",
    "category": "basic",
    "level": 5,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-51",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-52",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-53",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-54",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-55",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-56",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-57",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-58",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-59",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-60",
    "category": "basic",
    "level": 6,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-61",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-62",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-63",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-64",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-65",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-66",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-67",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-68",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-69",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-70",
    "category": "basic",
    "level": 7,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-71",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-72",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-73",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-74",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-75",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-76",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-77",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-78",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 14,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-79",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-80",
    "category": "basic",
    "level": 8,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-81",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-82",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-83",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-84",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 16,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 14,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-85",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-86",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-87",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-88",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-89",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-90",
    "category": "basic",
    "level": 9,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-91",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-92",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-93",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-94",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-95",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-96",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-97",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-98",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-99",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-100",
    "category": "basic",
    "level": 10,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-101",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-102",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-103",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-104",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-105",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-106",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-107",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-108",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-109",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-110",
    "category": "intermediate",
    "level": 1,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-111",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-112",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-113",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-114",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-115",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-116",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 16,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 18,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-117",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-118",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-119",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-120",
    "category": "intermediate",
    "level": 2,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-121",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-122",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-123",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-124",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-125",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-126",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-127",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-128",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-129",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-130",
    "category": "intermediate",
    "level": 3,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-131",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-132",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-133",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-134",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-135",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-136",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-137",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 10,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-138",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-139",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-140",
    "category": "intermediate",
    "level": 4,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-141",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-142",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-143",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-144",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-145",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-146",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-147",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-148",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-149",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-150",
    "category": "intermediate",
    "level": 5,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-151",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 14,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 16,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-152",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-153",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-154",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-155",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-156",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-157",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-158",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-159",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-160",
    "category": "intermediate",
    "level": 6,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-161",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-162",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-163",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-164",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-165",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-166",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 14,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-167",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 16,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-168",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-169",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-170",
    "category": "intermediate",
    "level": 7,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-171",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-172",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-173",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-174",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-175",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-176",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-177",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-178",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-179",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-180",
    "category": "intermediate",
    "level": 8,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-181",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-182",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-183",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-184",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-185",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 16,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-186",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-187",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 16,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 14,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-188",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-189",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-190",
    "category": "intermediate",
    "level": 9,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-191",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-192",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-193",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-194",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-195",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-196",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-197",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-198",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-199",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-200",
    "category": "intermediate",
    "level": 10,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-201",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-202",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-203",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-204",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-205",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-206",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-207",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-208",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-209",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-210",
    "category": "hard",
    "level": 1,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-211",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-212",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-213",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-214",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-215",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-216",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-217",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-218",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-219",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-220",
    "category": "hard",
    "level": 2,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-221",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-222",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-223",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-224",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-225",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-226",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-227",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-228",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-229",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-230",
    "category": "hard",
    "level": 3,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-231",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-232",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-233",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-234",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 16,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-235",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-236",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-237",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-238",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-239",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-240",
    "category": "hard",
    "level": 4,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-241",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 14,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-242",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 14,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-243",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-244",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-245",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-246",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-247",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-248",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-249",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-250",
    "category": "hard",
    "level": 5,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 16,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 16,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 16,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-251",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-252",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-253",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-254",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-255",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-256",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-257",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-258",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-259",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-260",
    "category": "hard",
    "level": 6,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-261",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 14,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-262",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-263",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 16,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-264",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-265",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-266",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-267",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-268",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 14,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-269",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-270",
    "category": "hard",
    "level": 7,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-271",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-272",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-273",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-274",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-275",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-276",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-277",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-278",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-279",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-280",
    "category": "hard",
    "level": 8,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-281",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-282",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-283",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 14,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-284",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-285",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-286",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-287",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 10,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-288",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-289",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-290",
    "category": "hard",
    "level": 9,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-291",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 1,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 16,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-292",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 2,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 14,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 18,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-293",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 3,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 16,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-294",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 4,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-295",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 5,
    "equations": [
      {
        "startRow": 0,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-296",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 6,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 14,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 14,
        "startCol": 4,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-297",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 7,
    "equations": [
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 12,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 14,
        "direction": "vertical"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 12,
        "startCol": 2,
        "direction": "horizontal"
      }
    ]
  },
  {
    "id": "structure-298",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 8,
    "equations": [
      {
        "startRow": 0,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 0,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-299",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 9,
    "equations": [
      {
        "startRow": 0,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 10,
        "startCol": 6,
        "direction": "vertical"
      }
    ]
  },
  {
    "id": "structure-300",
    "category": "hard",
    "level": 10,
    "puzzleNumber": 10,
    "equations": [
      {
        "startRow": 0,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 2,
        "startCol": 2,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 0,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 4,
        "startCol": 6,
        "direction": "vertical"
      },
      {
        "startRow": 4,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 6,
        "startCol": 2,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 6,
        "direction": "horizontal"
      },
      {
        "startRow": 6,
        "startCol": 10,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 4,
        "direction": "horizontal"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "vertical"
      },
      {
        "startRow": 8,
        "startCol": 8,
        "direction": "horizontal"
      },
      {
        "startRow": 12,
        "startCol": 8,
        "direction": "horizontal"
      }
    ]
  }
];
