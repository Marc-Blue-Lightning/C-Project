export default function Card({ children, sm = false, style, onClick }) {
  return (
    <div
      className={`card ${sm ? 'card-sm' : ''}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}