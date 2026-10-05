export default function Logo({ size = 34 }) {
  return (
    <span className="logo">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 6h24l14 14v8l-5 5 5 5v8L44 58H20L6 44V20z" fill="#4A8CF0" />
        <path d="M21 21l17 5-11 5-5 12z" fill="#fff" />
      </svg>
      <span className="logo-word">BlueSky</span>
    </span>
  )
}
