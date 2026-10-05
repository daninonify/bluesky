import Icon from './Icons.jsx'

export default function Spotlight() {
  return (
    <section className="section section-tint">
      <div className="container spotlight">
        <div className="spot-copy">
          <span className="tile tone-1">
            <Icon name="wallet" size={22} />
          </span>
          <h2>Wallet</h2>
          <p>
            Pay, send and clear fees from one balance. You see every charge
            before you confirm.
          </p>
          <ul className="checks">
            <li><Icon name="check" size={18} /> Clear fees, shown before you pay</li>
          </ul>
        </div>

        <div className="spot-card" aria-hidden="true">
          <div className="tx">
            <span className="tx-ic"><Icon name="send" size={16} /></span>
            <div><strong>Sent to Tobi</strong><small>Today, 09:14</small></div>
            <b>−₦12,500</b>
          </div>
          <div className="tx">
            <span className="tx-ic"><Icon name="cap" size={16} /></span>
            <div><strong>School fees</strong><small>Yesterday</small></div>
            <b>−₦85,000</b>
          </div>
          <div className="tx">
            <span className="tx-ic tx-in"><Icon name="plus" size={16} /></span>
            <div><strong>Added money</strong><small>Mon</small></div>
            <b className="in">+₦50,000</b>
          </div>
        </div>
      </div>
    </section>
  )
}
