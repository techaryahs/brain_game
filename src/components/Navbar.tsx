"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-2xl shadow-lg">
            🧠
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-white">
              Brain Games
            </div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
              Train Your Mind
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/games"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Games
          </Link>

          <Link
            href="/daily-challenge"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Daily Challenge
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            About
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/games"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 sm:block"
          >
            Play Now
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/5"
            >
              Home
            </Link>

            <Link
              href="/games"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 hover:bg-white/5"
            >
              Games
            </Link>

            <Link
              href="/daily-challenge"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 hover:bg-white/5"
            >
              Daily Challenge
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 hover:bg-white/5"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
