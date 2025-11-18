import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay to match theme and ensure readability */}
      <div className="absolute inset-0 bg-[#1a1a1a]/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              A unique experience to play <span className="text-sky-400">pokédle</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Discover a minimalist and modern way to enjoy the guessing game you love. Clean design, smooth interactions, and a playful vibe crafted for dark mode.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#invite" className="inline-flex items-center justify-center rounded-md bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 font-medium transition-colors shadow-lg shadow-sky-500/20">
                Invite pokédle
              </a>
              <a href="#discord" className="inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium transition-colors ring-1 ring-white/10">
                Join Discord
              </a>
            </div>
          </div>

          {/* Right: Illustration card */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="rounded-3xl bg-gradient-to-b from-[#121212] to-[#0d0d0d] ring-1 ring-white/10 p-6 shadow-2xl">
                {/* Cartoon-style illustration */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-900/40 via-sky-800/30 to-rose-900/30 flex items-center justify-center">
                  <svg viewBox="0 0 320 240" className="w-full h-full">
                    {/* Soft background blobs */}
                    <defs>
                      <radialGradient id="g1" cx="50%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#111827" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="g2" cx="70%" cy="70%" r="60%">
                        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#111827" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="320" height="240" fill="#0f172a" />
                    <rect width="320" height="240" fill="url(#g1)" />
                    <rect width="320" height="240" fill="url(#g2)" />

                    {/* Character body: round, blue & beige */}
                    <g transform="translate(160,135)">
                      {/* Shadow */}
                      <ellipse cx="0" cy="60" rx="70" ry="12" fill="#000" opacity="0.25" />
                      {/* Body */}
                      <circle cx="0" cy="0" r="70" fill="#60a5fa" />
                      {/* Belly */}
                      <ellipse cx="0" cy="20" rx="48" ry="42" fill="#fde68a" />
                      {/* Eyes */}
                      <circle cx="-20" cy="-10" r="8" fill="#0b0f19" />
                      <circle cx="20" cy="-10" r="8" fill="#0b0f19" />
                      <circle cx="-23" cy="-13" r="2.5" fill="#fff" />
                      <circle cx="17" cy="-13" r="2.5" fill="#fff" />
                      {/* Arms */}
                      <ellipse cx="-55" cy="20" rx="18" ry="12" fill="#60a5fa" />
                      <ellipse cx="55" cy="20" rx="18" ry="12" fill="#60a5fa" />
                      {/* Feet */}
                      <ellipse cx="-25" cy="70" rx="16" ry="10" fill="#334155" />
                      <ellipse cx="25" cy="70" rx="16" ry="10" fill="#334155" />
                    </g>

                    {/* Big red question mark held by the character */}
                    <g transform="translate(160,90)">
                      <path d="M0 -55c-22 0-40 14-40 34 0 8 6 14 14 14s14-6 14-14c0-5 5-10 12-10 8 0 12 4 12 10 0 16-22 16-22 40v6h24v-4c0-18 22-20 22-42 0-24-18-38-36-38z" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" strokeLinejoin="round" />
                      <circle cx="4" cy="70" r="10" fill="#ef4444" stroke="#b91c1c" strokeWidth="4" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
