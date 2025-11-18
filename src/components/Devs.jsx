import { Github, Twitter } from 'lucide-react'

function DevCard({ name, role, gh, tw, color }) {
  return (
    <div className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 transition-transform hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center text-white font-semibold ${color}`}>{name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
        <div>
          <h3 className="text-white font-medium tracking-tight">{name}</h3>
          <p className="text-white/60 text-sm">{role}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {gh && (
            <a href={gh} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          )}
          {tw && (
            <a href={tw} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Devs() {
  return (
    <section id="devs" className="bg-[#0f0f0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Devs</h2>
          <p className="mt-3 text-white/70">Il piccolo team dietro Pokédle. Minimal nel codice, rapidi nelle release.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DevCard name="Alex Rossi" role="Founder & Full‑Stack" gh="#" tw="#" color="bg-gradient-to-br from-sky-500 to-blue-600" />
          <DevCard name="Marta Bianchi" role="Design & UX" gh="#" tw="#" color="bg-gradient-to-br from-fuchsia-500 to-rose-500" />
          <DevCard name="Luca Verdi" role="Infra & DevOps" gh="#" tw="#" color="bg-gradient-to-br from-emerald-500 to-teal-600" />
        </div>
      </div>
    </section>
  )
}

export default Devs
