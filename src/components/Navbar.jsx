import { Menu, LogIn, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-[#0b0b0b]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0b]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="inline-flex items-center gap-2 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Pokédle</span>
          </Link>

          {/* Right: Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link className="text-gray-300 hover:text-white transition-colors" to="/devs">Devs</Link>
            <Link className="text-gray-300 hover:text-white transition-colors" to="/vote">Vote</Link>
            <Link className="text-gray-300 hover:text-white transition-colors" to="/store">Store</Link>
            <Link className="text-gray-300 hover:text-white transition-colors" to="/contact">Contact</Link>
            <a href="#login" className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-600 transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </a>
          </nav>

          {/* Mobile menu button (non-functional placeholder) */}
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white/10 text-gray-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
