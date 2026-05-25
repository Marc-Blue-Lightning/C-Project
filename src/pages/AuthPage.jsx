import { useState } from 'react'

export default function AuthPage({ onLogin }) {
  const [tab, setTab] = useState('login')
  const [form, setForm] = useState({ email: '', password: '', name: '', field: '' })

  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="auth-glow" style={{ width: 500, height: 500, background: '#7C6FE0', top: '10%', left: '15%' }} />
        <div className="auth-glow" style={{ width: 400, height: 400, background: '#2ECC8F', bottom: '5%', right: '10%' }} />
        <div className="auth-glow" style={{ width: 300, height: 300, background: '#E06F7C', top: '40%', right: '25%' }} />
      </div>

      <div className="auth-card fade-up">
        <div className="auth-logo">C</div>
        <div className="auth-tagline">Plateforme sociale & scientifique intelligente</div>

        <div className="auth-tabs">
          <div className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>Connexion</div>
          <div className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => setTab('register')}>Créer un compte</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {tab === 'register' && (
            <>
              <div>
                <label className="auth-label">Nom complet</label>
                <input className="input" placeholder="Dr. Marie Curie" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="auth-label">Domaine scientifique</label>
                <input className="input" placeholder="Neurosciences, IA, Design UX..." value={form.field} onChange={e => setForm({ ...form, field: e.target.value })} />
              </div>
            </>
          )}
          <div>
            <label className="auth-label">Email académique</label>
            <input className="input" type="email" placeholder="vous@universite.fr" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="auth-label">Mot de passe</label>
            <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          </div>
          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 6, padding: '12px', fontSize: 15, fontWeight: 600 }}
            onClick={onLogin}
          >
            {tab === 'login' ? 'Se connecter' : 'Créer mon profil scientifique'}
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: 'var(--text3)' }}>
          Communauté ouverte aux chercheurs, étudiants et professionnels
        </div>
      </div>
    </div>
  )
}