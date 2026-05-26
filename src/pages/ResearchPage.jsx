import { useState } from 'react'
import { Plus, Edit } from 'lucide-react'
import { MOCK_RESEARCH } from '../data/mockResearch'

export default function ResearchPage() {
  const [active, setActive] = useState(null)
  const [filter, setFilter] = useState('Tous')

  const FILTERS = ['Tous', 'Neurosciences', 'IA / HMI', 'Design UX']

  const FIELD_BADGE = {
    'Neurosciences': 'badge-purple',
    'IA / HMI':      'badge-green',
    'Design UX':     'badge-blue',
  }

  const filtered = filter === 'Tous'
    ? MOCK_RESEARCH
    : MOCK_RESEARCH.filter(r => r.field === filter)

  return (
    <div className="content fade-up">

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div className="section-title" style={{ marginBottom: 4 }}>Espace de recherche collaborative</div>
          <div style={{ fontSize: 13, color: 'var(--text3)' }}>Co-créez, annotez et enrichissez des sujets avec la communauté</div>
        </div>
        <button className="btn btn-primary">
          <Plus size={15} /> Nouveau sujet
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.map(r => (
        <div
          key={r.id}
          className="card"
          style={{ marginBottom: 14, cursor: 'pointer', borderColor: active === r.id ? 'var(--accent)' : '' }}
          onClick={() => setActive(active === r.id ? null : r.id)}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span className={`badge ${FIELD_BADGE[r.field] || 'badge-purple'}`}>{r.field}</span>
                <span className={`badge ${r.status === 'actif' ? 'badge-green' : 'badge-amber'}`}>{r.status}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-head)', color: 'var(--text1)', marginBottom: 6, lineHeight: 1.4 }}>
                {r.title}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.6 }}>
                {r.excerpt.slice(0, 140)}...
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>Par {r.author}</div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--font-head)' }}>{r.contributors}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>contributeurs</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent2)', fontFamily: 'var(--font-head)' }}>{r.edits}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>modifications</div>
                </div>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={e => e.stopPropagation()}>
                <Edit size={13} /> Contribuer
              </button>
            </div>
          </div>

          {/* Expanded */}
          {active === r.id && (
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 16 }}>
                {r.excerpt}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-primary btn-sm"><Edit size={13} /> Modifier</button>
                <button className="btn btn-ghost btn-sm">Commenter</button>
                <button className="btn btn-ghost btn-sm">Ajouter des références</button>
              </div>
            </div>
          )}
        </div>
      ))}

    </div>
  )
}