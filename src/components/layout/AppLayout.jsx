import Sidebar from './Sidebar'
import TopBar from './TopBar'

const PAGE_TITLES = {
  home: 'Accueil',
  messaging: 'Messagerie',
  research: 'Recherche collaborative',
  news: 'Actualités',
  library: 'Bibliothèque',
  profile: 'Mon profil',
}

export default function AppLayout({ children, page, setPage }) {
  return (
    <div className="app">
      <Sidebar page={page} setPage={setPage} />
      <div className="main">
        <TopBar title={PAGE_TITLES[page]} />
        <div style={{ flex: 1, overflow: page === 'messaging' ? 'hidden' : 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  )
}