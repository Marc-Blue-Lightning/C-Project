import { MOCK_NEWS } from '../data/mockNews'

const FIELD_BADGE = {
  'IA':           'badge-green',
  'Ergonomie':    'badge-purple',
  'Design':       'badge-blue',
  'Numérique':    'badge-amber',
  'Neurosciences':'badge-purple',
  'Événement':    'badge-amber',
}

export default function NewsPage({ setPage }) {
  return (
    <div className="content fade-up">

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div className="section-title" style={{ marginBottom: 4 }}>Actualités & veille scientifique</div>
          <div style={{ fontSize: 13, color: 'var(--text3)' }}>Restez informé des dernières tendances</div>
        </div>
        <button className="btn btn-primary btn-sm">Tout marquer lu</button>
      </div>

      <div className="cols">
        <div className="col-left">
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {MOCK_NEWS.map((n, i) => (
              <div
                key={n.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 18px',
                  borderBottom: i < MOCK_NEWS.length - 1 ? '1px solid var(--border)' : 'none',
                  cursor: 'pointer', transition: 'background 0.1s',
                  opacity: n.read ? 0.6 : 1,
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                  background: n.read ? 'var(--bg4)' : 'var(--accent)',
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: n.read ? 400 : 500, color: 'var(--text1)', lineHeight: 1.4, marginBottom: 5 }}>
                    {n.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className={`badge ${FIELD_BADGE[n.category] || 'badge-purple'}`} style={{ fontSize: 10 }}>{n.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--text3)' }}>{n.time}</span>
                    {n.hot && <span style={{ background: 'rgba(224,111,124,0.15)', color: '#EA8E97', fontSize: 10, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>🔥</span>}
                  </div>
                </div>
                <button className="btn btn-ghost btn-sm" style={{ fontSize: 11 }}>Lire</button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-right">
          <div className="section-title">Catégories</div>
          <div className="card" style={{ marginBottom: 20 }}>
            {['IA & Interfaces', 'Ergonomie cognitive', 'Design UX/UI', 'Neurosciences', 'Sciences des données', 'Événements'].map((c, i, arr) => (
              <div key={c} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }}>
                <span style={{ fontSize: 13, color: 'var(--text2)' }}>{c}</span>
                <span style={{ fontSize: 11, color: 'var(--text3)' }}>{Math.floor(Math.random() * 30) + 3}</span>
              </div>
            ))}
          </div>

          <div className="section-title">Tendances</div>
          <div className="card">
            {['#ergonomie2025', '#AIinterfaces', '#cognition', '#uxresearch', '#transformer'].map((t, i, arr) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: 13, color: 'var(--accent)' }}>#</span>
                <span style={{ fontSize: 13, color: 'var(--text2)', cursor: 'pointer' }}>{t.slice(1)}</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text3)' }}>{Math.floor(Math.random() * 200) + 20} posts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}