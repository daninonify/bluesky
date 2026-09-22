export default function Logo({ size = 36, light = false }) {
  const mark = light ? '#fff' : '#0047AB'
  const notch = light ? '#0047AB' : '#fff'
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M20 6h24l14 14v8l-5 5 5 5v8L44 58H20L6 44V20z"
          fill={mark}
        />
        <path d="M21 21l17 5-11 5-5 12z" fill={notch} />
      </svg>
      <span className="logo-word">BlueSky</span>
    </span>
  )
}
