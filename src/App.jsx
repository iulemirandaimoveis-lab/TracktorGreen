import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Equipment from './components/Equipment'
import Applications from './components/Applications'
import Telemetry from './components/Telemetry'
import WhyUs from './components/WhyUs'
import Sectors from './components/Sectors'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#121212' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Equipment />
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
