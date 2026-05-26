import { Plus, BookOpen } from 'lucide-react'
import Avatar from '../components/ui/Avatar'
import { MOCK_USERS } from '../data/mockUsers'
import { MOCK_RESEARCH } from '../data/mockResearch'
import { MOCK_NEWS } from '../data/mockNews'

export default function HomePage({ setPage }) {
  const me = MOCK_USERS[0]

  return (
    <div className="content fade-up">

      {/* Welcome banner */}
      <div className="card" style={{ marginBottom: 24, background: 'linear-gradient(135deg, rgba(124,111,224,0.12) 0%, rgba(46,204,143,0.08) 100%)', borderColor: 'rgba(124,111,224,0.2)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -20, top: -20, width: 200, height: 200, background: 'radial-gradient(circle, rgba(124,111,224,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Avatar user={{ ...me, online: true }} size="lg" showOnline />
          <div>
            <div style={{ fontSize: 22, fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--text1)' }}>Bonjour, {me.name.split(' ')[0]} 👋</div>
            <div style={{ fontSize: 14, color: 'var(--text2)', marginTop: 4 }}>3 nouvelles collaborations en attente · 2 articles non lus</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
            <button className="btn btn-primary btn-sm" onClick={() => setPage('research')}>
              <Plus size={14} /> Nouveau sujet
            </button>
            <button className="btn btn-ghost btn-sm" onClick={() => setPage('library')}>
              <BookOpen size={14} /> Bibliothèque
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid-3" style={{ marginBottom: 24 }}>
        {[
          { val: me.followers, label: 'Abonnés',      color: '#7C6FE0' },
          { val: me.papers,    label: 'Publications',  color: '#2ECC8F' },
          { val: 23,           label: 'Contributions', color: '#E0A030' },
        ].map((s, i) => (
          <div key={i} className="card">
            <div className="stat-val" style={{ color: s.color }}>{s.val}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="cols">
        <div className="col-left">
          <div className="section-title">Recherches actives</div>
          {MOCK_RESEARCH.slice(0, 2).map(r => (
            <div key={r.id} className="card" style={{ marginBottom: 12, cursor: 'pointer' }} onClick={() => setPage('research')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span className="badge badge-purple">{r.field}</span>
                <span style={{ fontSize: 11, color: 'var(--text3)' }}>{r.edits} modifications</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)', marginBottom: 6, lineHeight: 1.4 }}>{r.title}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)', lineHeight: 1.5 }}>{r.excerpt.slice(0, 100)}...</div>
            </div>
          ))}
        </div>

        <div className="col-right">
          <div className="section-title">Membres en ligne</div>
          <div className="card" style={{ marginBottom: 20 }}>
            {MOCK_USERS.filter(u => u.online).map(u => (
              <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <Avatar user={u} size="sm" showOnline />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text1)' }}>{u.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>{u.field}</div>
                </div>
                <button className="btn btn-ghost btn-sm" style={{ marginLeft: 'auto' }}>Suivre</button>
              </div>
            ))}
          </div>

          <div className="section-title">À la une</div>
          {MOCK_NEWS.filter(n => n.hot).map(n => (
            <div key={n.id} className="card card-sm" style={{ marginBottom: 8, cursor: 'pointer' }} onClick={() => setPage('news')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ background: 'rgba(224,111,124,0.15)', color: '#EA8E97', fontSize: 10, padding: '2px 7px', borderRadius: 10, fontWeight: 600 }}>🔥 Tendance</span>
                <span style={{ fontSize: 11, color: 'var(--text3)' }}>{n.time}</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text1)', lineHeight: 1.4 }}>{n.title}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}