import Icon from './Icons.jsx'

const launcher = [
  ['wallet', 'Wallet', 1],
  ['bag', 'Marketplace', 2],
  ['truck', 'Delivery', 3],
  ['home', 'Accommodation', 4],
  ['cap', 'Campus', 5],
  ['briefcase', 'Workplace', 6],
  ['shield', 'Safety', 7],
  ['building', 'Your organisation', 8],
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <span className="pill">
          <span className="pill-dot" /> Now live at BIU
        </span>
        <h1>One identity, Every door.</h1>
        <p className="lede">
          One identity for everyday life and the institutions you belong to.
          A wallet, a marketplace, a campus, a workplace: connected, and
          carried anywhere.
        </p>
        <div className="hero-cta">
          <a href="#start" className="btn btn-primary btn-lg">
            Get started <Icon name="arrow" size={18} />
          </a>
          <a href="#everyday" className="btn btn-outline btn-lg">
            See what&rsquo;s inside
          </a>
        </div>
        <ul className="hero-checks">
          <li>
            <Icon name="check" size={16} /> One login, no separate accounts
          </li>
          <li>
            <Icon name="check" size={16} /> Clear fees, shown before you pay
          </li>
        </ul>

        <ul className="launcher" aria-label="Everything in BlueSky">
          {launcher.map(([icon, label, tone], i) => (
            <li key={label} style={{ '--i': i }}>
              <span className={`tile tile-lg tone-${tone}`}>
                <Icon name={icon} size={26} />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
