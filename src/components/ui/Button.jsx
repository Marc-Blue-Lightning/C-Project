export default function Button({ children, variant = 'primary', size = 'default', onClick, style }) {
  const cls = [
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-ghost',
    size === 'sm' ? 'btn-sm' : '',
  ].join(' ')

  return (
    <button className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  )
}