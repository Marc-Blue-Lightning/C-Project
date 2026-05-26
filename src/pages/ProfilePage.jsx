import { Edit, Download } from 'lucide-react'
import Avatar from '../components/ui/Avatar'
import { MOCK_USERS } from '../data/mockUsers'
import { MOCK_LIBRARY } from '../data/mockLibrary'

const COLORS = ['#7C6FE0', '#2ECC8F', '#E06F7C', '#E0A030', '#30B8E0', '#9b59b6']

export default function ProfilePage() {
  const me = MOCK_USERS[0]

  return (
    <div className="content fade-up">
      <div className="cols" style={{ alignItems: 'flex-start' }}>

        <div className="col-left">

          {/* Profile card */}
          <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 20 }}>

            {/* Banner */}
            <div style={{ height: 120, background: 'linear-gradient(135deg, #1a1b30 0%, #0d1428 100%)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(124,111,224,0.2) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: -36, left: 24 }}>
                <div style={{ background: 'var(--bg2)', padding: 4, borderRadius: '50%', border: '3px solid var(--bg2)' }}>
                  <Avatar user={me} size="xl" />
                </div>
              </div>
            </div>

            <div style={{ padding: '48px 24px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 20, fontFamily: 'var(--font-head)', fontWeight: 800, color: 'var(--text1)' }}>{me.name}</div>
                  <div style={{ fontSize: 14, color: 'var(--text3)', marginTop: 4 }}>{me.field}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    <span className="badge badge-purple">Chercheure</span>
                    <span className="badge badge-green">Contributrice active</span>
                  </div>
                </div>
                <button className="btn btn-ghost btn-sm">
                  <Edit size={14} /> Modifier
                </button>
              </div>

              <div className="divider" />

              <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>
                Doctorante en neurosciences cognitives, spécialisée dans l'étude de la charge cognitive dans les interfaces numériques. Passionnée par l'intersection entre cerveau, technologie et design.
              </p>

              <div className="divider" />

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16 }}>
                {[
                  { val: me.followers, label: 'Abonnés' },
                  { val: me.papers,    label: 'Publications' },
                  { val: 23,           label: 'Contributions' },
                  { val: 147,          label: 'Citations' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-head)', fontSize: 22, fontWeight: 800, color: 'var(--accent)' }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="section-title">Mes publications</div>
          {MOCK_LIBRARY.slice(0, 3).map(doc => (
            <div key={doc.id} className="card card-sm" style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 22 }}>📘</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text1)' }}>{doc.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>{doc.year} · {doc.pages} pages · {doc.downloads} téléchargements</div>
              </div>
              <button className="btn btn-ghost btn-sm">
                <Download size={13} />
              </button>
            </div>
          ))}
        </div>

        <div className="col-right">

          {/* Avatar editor */}
          <div className="section-title">Mon avatar</div>
          <div className="card" style={{ textAlign: 'center', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{ position: 'relative' }}>
                <Avatar user={me} size="xl" />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 28, height: 28, background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '2px solid var(--bg2)' }}>
                  <Edit size={13} color="white" />
                </div>
              </div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)', marginBottom: 4 }}>{me.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 16 }}>{me.field}</div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
              {COLORS.map(c => (
                <div
                  key={c}
                  style={{
                    width: 24, height: 24, borderRadius: '50%', background: c, cursor: 'pointer',
                    border: c === me.color ? '2px solid white' : '2px solid transparent',
                    transition: 'transform 0.15s',
                  }}
                />
              ))}
            </div>
            <button className="btn btn-ghost btn-sm" style={{ marginTop: 14, width: '100%' }}>
              Personnaliser l'avatar
            </button>
          </div>

          {/* Expertise */}
          <div className="section-title">Domaines d'expertise</div>
          <div className="card">
            {['Ergonomie cognitive', 'Neurosciences', 'UX Research', 'Design d\'interfaces', 'Méthodes qualitatives'].map((s, i, arr) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: 13, color: 'var(--text2)' }}>{s}</span>
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array(5).fill(0).map((_, j) => (
                    <div key={j} style={{ width: 8, height: 8, borderRadius: '50%', background: j < 5 - (i % 2) ? 'var(--accent)' : 'var(--bg4)' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}