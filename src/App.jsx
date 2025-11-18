import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Devs from './components/Devs'
import Vote from './components/Vote'
import Store from './components/Store'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Devs />
      <Vote />
      <Store />
      <Contact />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Pokédle. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
