import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { everyday, institutions } from '../data/products.js'

const tabs = [
  ['all', 'All'],
  ['everyday', 'For everyone'],
  ['hubs', 'For institutions'],
]

function Card({ p }) {
  return (
    <article className="app-card">
      <span className={`tile tone-${p.tone}`}>
        <Icon name={p.icon} size={22} />
      </span>
      <h3>{p.title}</h3>
      <p>{p.text}</p>
    </article>
  )
}

export default function Directory() {
  const [tab, setTab] = useState('all')

  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.slice(1)
      if (id !== 'everyday' && id !== 'hubs') return
      setTab('all')
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <section className="section directory">
      <div className="container">
        <div className="tabs" role="tablist" aria-label="Filter services">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={tab === id ? 'is-on' : ''}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="group" id="everyday" hidden={tab === 'hubs'}>
          <div className="group-head">
            <span className="eyebrow">For everyone</span>
            <h2>Everyday services, no institution required</h2>
            <p>
              Open to all users. Pay, shop, get things delivered and find a place
              to live, all with the same login.
            </p>
          </div>
          <div className="app-grid">
            {everyday.map((p) => (
              <Card key={p.title} p={p} />
            ))}
          </div>
        </div>

        <div className="group" id="hubs" hidden={tab === 'everyday'}>
          <div className="group-head">
            <span className="eyebrow">For institutions</span>
            <h2>Hubs: a workspace for every organisation</h2>
            <p>
              Dedicated workspaces for organisations, starting with BIU. Members
              sign in with the same BlueSky identity they already use, so
              campus and everyday life stop living in separate apps.
            </p>
            <a href="#start" className="btn btn-primary">
              Bring your organisation <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="app-grid">
            {institutions.map((p) => (
              <Card key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
