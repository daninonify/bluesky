import { useState } from 'react'
import Icon from './Icons.jsx'

const faqs = [
  {
    q: 'Do I need to belong to an institution?',
    a: 'No. Everyday Services are open to everyone. Join a Hub such as BIU only if you belong to one.',
  },
  {
    q: 'How does one identity work?',
    a: 'You sign up once. The same login opens your wallet, marketplace, delivery, housing and any institution workspace you have joined, so there is nothing to re-enter.',
  },
  {
    q: 'How are fees and payments handled?',
    a: 'Fees are shown before you confirm. Money moves between your wallet and the person or institution you are paying, and every transaction appears in your history.',
  },
  {
    q: 'What happens to my data inside a Hub?',
    a: 'Institutions see only what their workspace needs, such as attendance or staff records. Your everyday activity stays separate from theirs.',
  },
  {
    q: 'Can my organisation join?',
    a: 'BIU is first, and the model is built to travel. Hospitals, schools and other organisations can get in touch to plug in.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <div className="section-head section-head--left">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered</h2>
          <p>
            Can&rsquo;t find what you need? <a href="#start">Get in touch</a> and
            we&rsquo;ll help.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <Icon name="plus" size={20} className="faq-plus" />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className="faq-panel"
                  hidden={!isOpen}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
