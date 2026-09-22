import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Trust from './components/Trust.jsx'
import Services from './components/Services.jsx'
import Hubs from './components/Hubs.jsx'
import Identity from './components/Identity.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import SignInModal from './components/SignInModal.jsx'

export default function App() {
  const [signInOpen, setSignInOpen] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar onSignIn={() => setSignInOpen(true)} />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Hubs />
        <Identity />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  )
}
