import Icon from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="hero-lines" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1">
          <path d="M80 520 L330 380 L560 450 L780 300 L1080 380" />
          <path d="M330 380 L420 180 L780 300" />
          <path d="M560 450 L640 620" />
        </g>
        <g fill="rgba(255,255,255,0.5)">
          <circle cx="80" cy="520" r="3" />
          <circle cx="330" cy="380" r="4" />
          <circle cx="420" cy="180" r="3" />
          <circle cx="560" cy="450" r="3" />
          <circle cx="780" cy="300" r="4" />
          <circle cx="1080" cy="380" r="3" />
          <circle cx="640" cy="620" r="3" />
        </g>
      </svg>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot" /> Now live at BIU
          </span>
          <h1>Pay, send, done.</h1>
          <p className="lede">
            One identity for everyday life and the institutions you belong to.
            A wallet, a marketplace, a campus, a workplace: connected, and
            carried anywhere.
          </p>
          <div className="hero-cta">
            <a href="#start" className="btn btn-white btn-lg">
              Get started <Icon name="arrow" size={18} />
            </a>
            <a href="#everyday" className="btn btn-glass btn-lg">
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
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="ph-top">
                <span className="ph-hi">Good morning, Amara</span>
                <span className="avatar">AO</span>
              </div>

              <div className="ph-card">
                <small>Wallet balance</small>
                <strong>₦148,250.00</strong>
                <div className="ph-actions">
                  <span>
                    <Icon name="send" size={16} /> Send
                  </span>
                  <span>
                    <Icon name="plus" size={16} /> Add money
                  </span>
                  <span>
                    <Icon name="check" size={16} /> Fees
                  </span>
                </div>
              </div>

              <div className="ph-label">Everyday</div>
              <div className="ph-grid">
                <span><Icon name="wallet" size={18} />Wallet</span>
                <span><Icon name="bag" size={18} />Market</span>
                <span><Icon name="truck" size={18} />Delivery</span>
                <span><Icon name="home" size={18} />Housing</span>
              </div>

              <div className="ph-label">Your institutions</div>
              <div className="ph-row">
                <span className="ph-ic"><Icon name="cap" size={18} /></span>
                <div>
                  <strong>BIU Student portal</strong>
                  <small>Timetable, results, fees</small>
                </div>
                <Icon name="arrow" size={16} />
              </div>
            </div>
          </div>

          <div className="float-card float-a">
            <span className="float-ic ic-green">
              <Icon name="check" size={18} />
            </span>
            <div>
              <strong>Payment sent</strong>
              <small>₦12,500 to Tobi</small>
            </div>
          </div>
          <div className="float-card float-b">
            <span className="float-ic ic-blue">
              <Icon name="truck" size={18} />
            </span>
            <div>
              <strong>Rider on the way</strong>
              <small>Arrives in 8 min</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
