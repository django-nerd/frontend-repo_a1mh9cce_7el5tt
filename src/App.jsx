import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Pokédle. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
