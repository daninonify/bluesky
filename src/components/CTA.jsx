import { useState } from 'react'
import Icon from './Icons.jsx'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    if (!email) return
    // TODO: send this to your backend / CRM / form service.
    setSent(true)
  }

  return (
    <section className="cta" id="start">
      <div className="container">
        <div className="cta-card">
          <h2>Made for everyday</h2>
          <p>
            Create one identity and carry it through everyday life, campus and
            work.
          </p>

          {sent ? (
            <p className="cta-thanks" role="status">
              <Icon name="check" size={18} /> Thank you. We&rsquo;ll write to{' '}
              <strong>{email}</strong> soon.
            </p>
          ) : (
            <form className="cta-form" onSubmit={onSubmit}>
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-white">
                Get started <Icon name="arrow" size={18} />
              </button>
            </form>
          )}
          <small className="cta-note">
            We&rsquo;ll only use your email to set up your account.
          </small>
        </div>
      </div>
    </section>
  )
}
