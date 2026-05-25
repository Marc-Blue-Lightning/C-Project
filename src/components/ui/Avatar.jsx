export default function Avatar({ user, size = 'default', showOnline = false }) {
  const sizes = {
    sm:      { width: 28, height: 28, fontSize: 10 },
    default: { width: 36, height: 36, fontSize: 13 },
    lg:      { width: 72, height: 72, fontSize: 24 },
    xl:      { width: 100,height: 100,fontSize: 32 },
  }

  const s = sizes[size]

  return (
    <div style={{
      width: s.width,
      height: s.height,
      borderRadius: '50%',
      background: user.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-head)',
      fontWeight: 700,
      fontSize: s.fontSize,
      color: 'white',
      flexShrink: 0,
      position: 'relative',
    }}>
      {user.avatar}
      {showOnline && user.online && (
        <span style={{
          position: 'absolute',
          bottom: 1, right: 1,
          width: size === 'sm' ? 7 : 9,
          height: size === 'sm' ? 7 : 9,
          background: 'var(--accent2)',
          borderRadius: '50%',
          border: '2px solid var(--bg1)',
        }} />
      )}
    </div>
  )
}