import { Mail, MessageSquare } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-3 text-white/70">Hai feedback o domande? Scrivici: manteniamo il canale snello e veloce.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a href="#mail" className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-lg bg-sky-500/20 ring-1 ring-sky-500/30 text-sky-400 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-white/60 text-sm">hello@pokedle.app</p>
              </div>
            </div>
          </a>

          <a href="#discord" className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Discord</h3>
                <p className="text-white/60 text-sm">Join the community</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
