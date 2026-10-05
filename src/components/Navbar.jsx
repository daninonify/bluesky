import { useEffect, useRef, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { everyday, institutions } from '../data/products.js'

const menus = [
  { id: 'everyday', label: 'Everyday', href: '#everyday', items: everyday },
  { id: 'hubs', label: 'Hubs', href: '#hubs', items: institutions },
]

const links = [
  { href: '#identity', label: 'One identity' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar({ onSignIn }) {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menu) return
    const onKey = (e) => e.key === 'Escape' && setMenu(null)
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [menu])

  const active = menus.find((m) => m.id === menu)

  return (
    <header
      ref={navRef}
      className={`nav ${scrolled || open || menu ? 'nav--raised' : ''}`}
      onMouseLeave={() => setMenu(null)}
    >
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="BlueSky home">
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {menus.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`nav-link ${menu === m.id ? 'is-open' : ''}`}
              aria-expanded={menu === m.id}
              aria-controls="mega"
              onMouseEnter={() => setMenu(m.id)}
              onClick={() => setMenu(menu === m.id ? null : m.id)}
            >
              {m.label}
              <Icon name="chevron" size={14} />
            </button>
          ))}
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href} onMouseEnter={() => setMenu(null)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn btn-ghost nav-signin" onClick={onSignIn}>
            Sign in
          </button>
          <a href="#start" className="btn btn-primary">
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

      {active && (
        <div className="mega" id="mega">
          <div className="container mega-grid">
            {active.items.map((p) => (
              <a key={p.title} href={active.href} className="mega-item" onClick={() => setMenu(null)}>
                <span className={`tile tone-${p.tone}`}>
                  <Icon name={p.icon} size={20} />
                </span>
                <span>
                  <strong>{p.title}</strong>
                  <small>{p.text}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {open && (
        <div className="nav-mobile">
          {[...menus, ...links].map((l) => (
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
