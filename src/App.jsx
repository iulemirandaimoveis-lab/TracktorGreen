import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandTicker from './components/BrandTicker'
import About from './components/About'
import Equipment from './components/Equipment'
import Applications from './components/Applications'
import Telemetry from './components/Telemetry'
import WhyUs from './components/WhyUs'
import Sectors from './components/Sectors'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--tg-bg0)', transition: 'background 0.25s ease' }}>
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <About />
        <Equipment />
        <BrandTicker inverted />
        <Applications />
        <Telemetry />
        <WhyUs />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
