const items = [
  ['One', 'identity across every service'],
  ['4', 'everyday services, open to all'],
  ['2', 'worlds joined: life and institutions'],
  ['BIU', 'first NexusHub, more to follow'],
]

export default function Trust() {
  return (
    <section className="trust" aria-label="BlueSky at a glance">
      <div className="container trust-grid">
        {items.map(([big, small]) => (
          <div key={big} className="reveal trust-item">
            <strong>{big}</strong>
            <span>{small}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
