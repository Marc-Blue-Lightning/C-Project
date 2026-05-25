const VARIANTS = {
  purple: 'badge-purple',
  green:  'badge-green',
  red:    'badge-red',
  amber:  'badge-amber',
  blue:   'badge-blue',
}

export default function Badge({ label, variant = 'purple' }) {
  return (
    <span className={`badge ${VARIANTS[variant]}`}>
      {label}
    </span>
  )
}