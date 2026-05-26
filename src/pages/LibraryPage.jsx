import { useState } from 'react'
import { Plus, Search, Download } from 'lucide-react'
import { MOCK_LIBRARY } from '../data/mockLibrary'

const FIELD_BADGE = {
  'Neurosciences': 'badge-purple',
  'IA':            'badge-green',
  'Design':        'badge-blue',
  'Data Science':  'badge-amber',
  'Communication': 'badge-red',
}

const TYPE_ICON = {
  'Mémoire': '📘',
  'Article': '📄',
  'Revue':   '📰',
}

const FILTERS = ['Tous', 'Articles', 'Mémoires', 'Revues']

export default function LibraryPage() {
  const [filter, setFilter] = useState('Tous')
  const [search, setSearch] = useState('')

  const filtered = MOCK_LIBRARY.filter(doc => {
    const matchFilter = filter === 'Tous' || doc.type + 's' === filter || doc.type === filter.slice(0, -1)
    const matchSearch = doc.title.toLowerCase().includes(search.toLowerCase()) || doc.author.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="content fade-up">

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div className="section-title" style={{ marginBottom: 4 }}>Bibliothèque numérique scientifique</div>
          <div style={{ fontSize: 13, color: 'var(--text3)' }}>Publications, mémoires et revues de la communauté</div>
        </div>
        <button className="btn btn-primary">
          <Plus size={15} /> Publier
        </button>
      </div>

      {/* Search + filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', padding: '8px 14px' }}>
          <Search size={14} color="var(--text3)" />
          <input
            style={{ background: 'none', border: 'none', outline: 'none', color: 'var(--text1)', fontSize: 13, fontFamily: 'var(--font-body)', width: '100%' }}
            placeholder="Rechercher titres, auteurs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
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

      {/* Table */}
      <div className="card">
        {/* Table header */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 60px 80px', gap: 12, paddingBottom: 10, marginBottom: 4, borderBottom: '1px solid var(--border)', fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <span>Titre</span>
          <span>Domaine</span>
          <span>Type</span>
          <span style={{ textAlign: 'center' }}>Pages</span>
          <span style={{ textAlign: 'center' }}>Téléch.</span>
        </div>

        {/* Rows */}
        {filtered.map((doc, i) => (
          <div
            key={doc.id}
            style={{
              display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 60px 80px',
              gap: 12, alignItems: 'center',
              padding: '12px 0',
              borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none',
              cursor: 'pointer', transition: 'background 0.1s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 46, background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                {TYPE_ICON[doc.type]}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{doc.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>{doc.author} · {doc.year}</div>
              </div>
            </div>
            <span className={`badge ${FIELD_BADGE[doc.field]}`}>{doc.field}</span>
            <span style={{ fontSize: 12, color: 'var(--text3)' }}>{doc.type}</span>
            <span style={{ textAlign: 'center', fontSize: 13, color: 'var(--text2)' }}>{doc.pages}</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <Download size={13} color="var(--accent2)" />
              <span style={{ fontSize: 13, color: 'var(--accent2)' }}>{doc.downloads}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}