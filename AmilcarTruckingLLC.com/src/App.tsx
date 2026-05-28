import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = 80
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Services />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
