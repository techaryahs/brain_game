import Link from "next/link";

interface GameCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
  difficulty: string;
  accent: string;
}

export default function GameCard({
  title,
  description,
  icon,
  href,
  category,
  difficulty,
  accent,
}: GameCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
        {/* Glow */}
        <div
          className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-3xl transition duration-500 group-hover:opacity-25`}
        />

        <div className="relative">
          {/* Top */}
          <div className="mb-7 flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.08] text-3xl shadow-inner">
              {icon}
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
              {difficulty}
            </span>
          </div>

          {/* Category */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            {category}
          </p>

          <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>

          <p className="min-h-[48px] text-sm leading-6 text-slate-400">
            {description}
          </p>

          {/* Bottom */}
          <div className="mt-7 flex items-center justify-between">
            <span className="font-semibold text-white">Play Game</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition group-hover:bg-blue-600">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
