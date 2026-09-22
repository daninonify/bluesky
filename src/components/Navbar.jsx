import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'

const links = [
  { href: '#everyday', label: 'Everyday' },
  { href: '#nexushubs', label: 'NexusHubs' },
  { href: '#identity', label: 'One identity' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar({ onSignIn }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="BlueSky home">
          <Logo light={!solid} />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn btn-ghost nav-signin" onClick={onSignIn}>
            Sign in
          </button>
          <a href="#start" className="btn btn-light">
            Get started
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setOpen(false)
              onSignIn()
            }}
          >
            Sign in
          </button>
          <a href="#start" className="btn btn-primary" onClick={() => setOpen(false)}>
            Get started
          </a>
        </div>
      )}
    </header>
  )
}
