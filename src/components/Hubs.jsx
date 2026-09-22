import Icon from './Icons.jsx'

const hubs = [
  {
    icon: 'cap',
    title: 'Student portal',
    text: 'Timetable, results, fees and campus services in one place.',
  },
  {
    icon: 'briefcase',
    title: 'Staff workspace',
    text: 'Workforce and finance tools for the people who run the institution.',
  },
  {
    icon: 'shield',
    title: 'Safety, attendance & access',
    text: 'Know who is on campus, who attended, and who can go where.',
  },
  {
    icon: 'building',
    title: 'Ready for more',
    text: 'Hospitals, schools and other organisations plug in without a reset.',
  },
]

export default function Hubs() {
  return (
    <section className="section section-dark" id="nexushubs">
      <div className="container hubs-grid">
        <div className="reveal hubs-copy">
          <span className="eyebrow eyebrow--light">For institutions</span>
          <h2>NexusHubs: a workspace for every organisation</h2>
          <p>
            Dedicated workspaces for organisations, starting with BIU. Members
            sign in with the same BlueSky identity they already use, so
            campus and everyday life stop living in separate apps.
          </p>
          <a href="#start" className="btn btn-white btn-lg">
            Bring your organisation <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="hubs-cards">
          {hubs.map((h) => (
            <div key={h.title} className="reveal hub-card">
              <span className="hub-ic"><Icon name={h.icon} size={20} /></span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
