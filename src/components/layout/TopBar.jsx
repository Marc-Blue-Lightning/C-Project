import { Search, Bell } from 'lucide-react'
import Avatar from '../ui/Avatar'
import { MOCK_USERS } from '../../data/mockUsers'

export default function TopBar({ title }) {
  const me = MOCK_USERS[0]

  return (
    <div className="topbar">
      <span className="page-title">{title}</span>
      <div style={{ flex: 1 }} />
      <div className="search-bar">
        <Search size={14} />
        <span style={{ fontSize: 13 }}>Rechercher...</span>
      </div>
      <button className="btn btn-ghost btn-sm" style={{ position: 'relative' }}>
        <Bell size={16} />
        <span style={{ position: 'absolute', top: 4, right: 4, width: 7, height: 7, background: 'var(--accent3)', borderRadius: '50%', border: '2px solid var(--bg1)' }} />
      </button>
      <Avatar user={me} size="sm" />
    </div>
  )
}