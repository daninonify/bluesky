import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Trust from './components/Trust.jsx'
import Directory from './components/Directory.jsx'
import Spotlight from './components/Spotlight.jsx'
import Identity from './components/Identity.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import SignInModal from './components/SignInModal.jsx'

export default function App() {
  const [signInOpen, setSignInOpen] = useState(false)

  return (
    <>
      <Navbar onSignIn={() => setSignInOpen(true)} />
      <main>
        <Hero />
        {/* <Trust /> */}
        <Directory />
        <Spotlight />
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
