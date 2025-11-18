function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: clean dark gradient with subtle grid, no characters */}
      <div className="absolute inset-0 bg-[#0b0b0b]">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(60rem 60rem at 20% -10%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(50rem 50rem at 80% 110%, rgba(244,63,94,0.12), transparent 60%), radial-gradient(40rem 40rem at -10% 80%, rgba(99,102,241,0.12), transparent 60%)",
          }}
        />
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Vignette for focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-28 sm:py-32 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
            Live on Discord
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            A minimal way to play <span className="text-sky-400">pokédle</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Clean, fast, and distraction‑free. Invite the bot, guess the Pokémon, climb the leaderboard — all in dark mode.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#invite"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 font-medium transition-colors shadow-lg shadow-sky-500/20"
            >
              Invite Pokédle
            </a>
            <a
              href="#discord"
              className="inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white px-6 py-3 font-medium transition-colors ring-1 ring-white/10"
            >
              Join Discord
            </a>
          </div>

          {/* Trusted stats-like row (inspired by minimal hero styles) */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online 24/7
            </div>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Zero clutter UI
            </div>
            <div className="hidden sm:block h-3 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Fast responses
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
