import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'

export default function SignInModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  function onSubmit(e) {
    e.preventDefault()
    // TODO: connect to your authentication provider.
  }

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="signin-title">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <Icon name="close" size={18} />
        </button>

        <h2 id="signin-title">Sign in to BlueSky</h2>
        <p className="modal-sub">One login for everyday life and the institutions you belong to.</p>

        <button type="button" className="btn btn-outline btn-block">
          Continue with your institution
        </button>

        <div className="modal-divider">
          <span>or sign in with email</span>
        </div>

        <form onSubmit={onSubmit} className="modal-form">
          <label htmlFor="signin-email">Email</label>
          <input
            id="signin-email"
            type="email"
            required
            autoComplete="username"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-primary btn-block">
            Sign in
          </button>
        </form>

        <p className="modal-foot">
          New to BlueSky?{' '}
          <a href="#start" onClick={onClose}>
            Get started
          </a>
        </p>
      </div>
    </div>
  )
}
