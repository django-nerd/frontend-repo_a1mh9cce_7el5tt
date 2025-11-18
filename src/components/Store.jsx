import { ShoppingBag } from 'lucide-react'

function Store() {
  return (
    <section id="store" className="bg-[#0f0f0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Store</h2>
          <p className="mt-3 text-white/70">Acquista temi, potenziamenti e piccoli extra cosmetici. Tutto in stile minimale.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{t:"Theme: Midnight", p:"$4.99"}, {t:"Hint Boost x5", p:"$2.49"}, {t:"Profile Badge", p:"$1.99"}].map((item, i) => (
            <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{item.t}</h3>
                  <p className="text-white/60 text-sm">{item.p}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-sky-500/20 ring-1 ring-sky-500/30 text-sky-400 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </div>
              <button className="mt-5 w-full rounded-md bg-white/5 hover:bg-white/10 text-white py-2 text-sm ring-1 ring-white/10 transition-colors">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Store
