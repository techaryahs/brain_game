import Link from "next/link";
import Navbar from "@/components/Navbar";

const games = [
  {
    name: "Sudoku",
    icon: "🧩",
    description: "Test your logic and solve the number grid.",
    href: "/games/sudoku",
  },
  {
    name: "X & O",
    icon: "❌",
    description: "Challenge your strategy with the classic game.",
    href: "/games/tic-tac-toe",
  },
  {
    name: "Calculation",
    icon: "🧮",
    description: "Improve your math skills with quick puzzles.",
    href: "/games/calculation",
  },
  {
    name: "Word Search",
    icon: "🔤",
    description: "Find hidden words and improve your vocabulary.",
    href: "/games/word-search",
  },
  {
    name: "Tap to Clear",
    icon: "➡️",
    description: "Clear the paths by tapping the arrows in the right order.",
    href: "/games/tap-to-clear",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-14">
        {/* Welcome */}
        <section className="mb-12 text-center">
          <div className="mb-4 text-5xl">🧠</div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-800">
            Brain Games
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Challenge your mind with simple, fun and engaging puzzle games.
          </p>
        </section>

        {/* Games */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Choose a Game
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl">
                  {game.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-800">
                  {game.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {game.description}
                </p>

                <div className="mt-5 text-sm font-semibold text-blue-600">
                  Play Now →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
