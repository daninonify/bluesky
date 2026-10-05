const steps = [
  {
    n: '1',
    title: 'Create your identity',
    text: 'Sign up once with your email. No institution needed to start.',
  },
  {
    n: '2',
    title: 'Use everyday services',
    text: 'Fund your wallet, then pay, shop, order delivery or find housing.',
  },
  {
    n: '3',
    title: 'Add your institutions',
    text: 'Join a NexusHub like BIU with the same login. Nothing to re-enter.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section section-tint" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps, one account</h2>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
