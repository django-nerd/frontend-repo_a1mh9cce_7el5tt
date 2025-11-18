import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section with Spline cover and two-column layout */}
      <Hero />

      {/* Features placeholder */}
      <Features />
    </div>
  )
}

export default App
