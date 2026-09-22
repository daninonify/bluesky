import Icon from './Icons.jsx'

export default function Services() {
  return (
    <section className="section" id="everyday">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">For everyone</span>
          <h2>Everyday services, no institution required</h2>
          <p>
            Open to all users. Pay, shop, get things delivered and find a place
            to live, all with the same login.
          </p>
        </div>

        <div className="bento">
          <article className="reveal feat feat-wallet">
            <div className="feat-copy">
              <span className="float-ic ic-blue"><Icon name="wallet" size={20} /></span>
              <h3>Wallet</h3>
              <p>Pay, send and clear fees from one balance. You see every charge before you confirm.</p>
            </div>
            <div className="mock" aria-hidden="true">
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
          </article>

          <article className="reveal feat feat-market">
            <div className="feat-copy">
              <span className="float-ic ic-blue"><Icon name="bag" size={20} /></span>
              <h3>Marketplace</h3>
              <p>Buy and sell locally, with people you can actually find.</p>
            </div>
            <div className="mock mock-market" aria-hidden="true">
              <div className="item"><span className="thumb thumb-a" /><strong>Desk lamp</strong><small>₦6,500</small></div>
              <div className="item"><span className="thumb thumb-b" /><strong>Textbooks</strong><small>₦9,000</small></div>
              <div className="item"><span className="thumb thumb-c" /><strong>Study chair</strong><small>₦15,000</small></div>
            </div>
          </article>

          <article className="reveal feat feat-delivery">
            <div className="feat-copy">
              <span className="float-ic ic-blue"><Icon name="truck" size={20} /></span>
              <h3>Delivery</h3>
              <p>On-demand dispatch. Request a rider and follow them to your door.</p>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="track">
                <span className="track-dot done" />
                <span className="track-bar done" />
                <span className="track-dot done" />
                <span className="track-bar" />
                <span className="track-dot" />
              </div>
              <div className="track-labels"><small>Picked up</small><small>On the way</small><small>Delivered</small></div>
            </div>
          </article>

          <article className="reveal feat feat-home">
            <div className="feat-copy">
              <span className="float-ic ic-blue"><Icon name="home" size={20} /></span>
              <h3>Accommodation</h3>
              <p>Verified housing, so you know the place is real before you pay.</p>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="listing">
                <span className="thumb thumb-a" />
                <div><strong>Studio near campus</strong><small>₦450,000 / year</small></div>
                <span className="badge badge-green">Verified</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
