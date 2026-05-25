import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/HomePage'
import MessagingPage from './pages/MessagingPage'
import ResearchPage from './pages/ResearchPage'
import NewsPage from './pages/NewsPage'
import LibraryPage from './pages/LibraryPage'
import ProfilePage from './pages/ProfilePage'

const PAGES = {
  home: HomePage,
  messaging: MessagingPage,
  research: ResearchPage,
  news: NewsPage,
  library: LibraryPage,
  profile: ProfilePage,
}

export default function App() {
  const [auth, setAuth] = useState(false)
  const [page, setPage] = useState('home')

  if (!auth) return <AuthPage onLogin={() => setAuth(true)} />

  const CurrentPage = PAGES[page]

  return (
    <AppLayout page={page} setPage={setPage}>
      <CurrentPage setPage={setPage} />
    </AppLayout>
  )
}