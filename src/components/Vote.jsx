import { Star, ArrowUpRight } from 'lucide-react'

function Vote() {
  return (
    <section id="vote" className="bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Vote</h2>
            <p className="mt-3 max-w-2xl text-white/70">Supporta il progetto con un voto sulle piattaforme di listing. Niente fronzoli, solo un pulsante chiaro.</p>
          </div>
          <a
            href="#vote-link"
            className="inline-flex items-center gap-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 font-medium transition-colors shadow-lg shadow-sky-500/20"
          >
            <Star className="h-5 w-5" /> Vota ora
            <ArrowUpRight className="h-4 w-4 opacity-80" />
          </a>
        </div>

        {/* Minimal card with benefits */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {["Boost visibilità", "Ricompense in‑server", "Sostieni lo sviluppo"].map((t, i) => (
            <div key={i} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 text-white/80">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Vote
