export default function Logo({ size = 34 }) {
  return (
    <span className="logo">
      <img
        src="/logo-mark.png"
        alt=""
        width={size}
        height={size}
        className="logo-mark"
        aria-hidden="true"
      />
      <span className="logo-word">BlueSky</span>
    </span>
  )
}
