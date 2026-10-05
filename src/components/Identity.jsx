import Icon from './Icons.jsx'

const left = [
  ['wallet', 'Wallet'],
  ['bag', 'Marketplace'],
  ['truck', 'Delivery'],
  ['home', 'Accommodation'],
]
const right = [
  ['cap', 'Campus'],
  ['briefcase', 'Workplace'],
  ['shield', 'Safety'],
  ['building', 'Your organisation'],
]

export default function Identity() {
  return (
    <section className="section" id="identity">
      <div className="container identity-grid">
        <div className="identity-copy">
          <span className="eyebrow">The thread</span>
          <h2>One identity, everywhere</h2>
          <p>
            A single login ties it together. Move between personal life,
            campus and work without switching accounts. New organisations
            plug in without a reset.
          </p>
          <ul className="checks">
            <li><Icon name="check" size={18} /> One wallet and one login</li>
            <li><Icon name="check" size={18} /> Your data stays yours, and we say how it moves</li>
            <li><Icon name="check" size={18} /> Carried with you when you change institutions</li>
          </ul>
        </div>

        <div className="identity-map" aria-hidden="true">
          <svg className="id-lines" viewBox="0 0 400 320" preserveAspectRatio="none">
            <g fill="none" stroke="#4A8CF0" strokeOpacity="0.45" strokeWidth="1.5">
              {[40, 120, 200, 280].map((y) => (
                <path key={`l${y}`} d={`M110 ${y} C160 ${y} 160 160 200 160`} />
              ))}
              {[40, 120, 200, 280].map((y) => (
                <path key={`r${y}`} d={`M290 ${y} C240 ${y} 240 160 200 160`} />
              ))}
            </g>
          </svg>
          <div className="id-col">
            {left.map(([i, t]) => (
              <span key={t} className="id-node"><Icon name={i} size={16} />{t}</span>
            ))}
          </div>
          <div className="id-core">
            <Icon name="lock" size={22} />
            <strong>You</strong>
            <small>One identity</small>
          </div>
          <div className="id-col">
            {right.map(([i, t]) => (
              <span key={t} className="id-node"><Icon name={i} size={16} />{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
