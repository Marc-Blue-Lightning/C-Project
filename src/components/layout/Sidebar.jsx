import { Home, MessageSquare, FlaskConical, Newspaper, BookOpen, User } from 'lucide-react'
import Avatar from '../ui/Avatar'
import { MOCK_USERS } from '../../data/mockUsers'

const NAV = [
  { id: 'home',      label: 'Accueil',     icon: Home },
  { id: 'messaging', label: 'Messagerie',  icon: MessageSquare, badge: 3 },
  { id: 'research',  label: 'Recherche',   icon: FlaskConical },
  { id: 'news',      label: 'Actualités',  icon: Newspaper, badge: 2 },
  { id: 'library',   label: 'Bibliothèque',icon: BookOpen },
  { id: 'profile',   label: 'Mon profil',  icon: User },
]

export default function Sidebar({ page, setPage }) {
  const me = MOCK_USERS[0]

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">C</div>
        <div className="logo-sub">Science & Collaboration</div>
      </div>

      <div className="sidebar-section">Navigation</div>

      {NAV.map(({ id, label, icon: Icon, badge }) => (
        <div
          key={id}
          className={`nav-item ${page === id ? 'active' : ''}`}
          onClick={() => setPage(id)}
        >
          <Icon size={16} />
          <span style={{ flex: 1 }}>{label}</span>
          {badge && <span className="nav-badge">{badge}</span>}
        </div>
      ))}

      <div className="sidebar-bottom">
        <div className="user-chip" onClick={() => setPage('profile')}>
          <Avatar user={{ ...me, online: true }} showOnline />
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text1)' }}>{me.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text3)' }}>{me.field}</div>
          </div>
        </div>
      </div>
    </div>
  )
}