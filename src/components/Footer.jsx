import Logo from './Logo.jsx'

const cols = [
  {
    title: 'Everyday',
    links: [
      ['Wallet', '#everyday'],
      ['Marketplace', '#everyday'],
      ['Delivery', '#everyday'],
      ['Accommodation', '#everyday'],
    ],
  },
  {
    title: 'Institutions',
    links: [
      ['NexusHubs', '#nexushubs'],
      ['BIU', '#nexushubs'],
      ['Bring your organisation', '#start'],
    ],
  },
  {
    title: 'BlueSky',
    links: [
      ['One identity', '#identity'],
      ['How it works', '#how'],
      ['FAQ', '#faq'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Made for everyday.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="footer-col">
            <h4>{c.title}</h4>
            <ul>
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <small>&copy; {new Date().getFullYear()} BlueSky. All rights reserved.</small>
        <small>
          <a href="#top">Privacy</a> &middot; <a href="#top">Terms</a> &middot; blueskyone.net
        </small>
      </div>
    </footer>
  )
}
