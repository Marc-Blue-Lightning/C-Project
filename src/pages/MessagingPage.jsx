import { useState, useRef, useEffect } from 'react'
import { Send, Settings } from 'lucide-react'
import Avatar from '../components/ui/Avatar'
import { MOCK_USERS } from '../data/mockUsers'
import { MOCK_MESSAGES } from '../data/mockMessages'

const ME = { id: 0, name: 'Moi', avatar: 'VS', color: '#7C6FE0' }

export default function MessagingPage() {
  const [activeUser, setActiveUser] = useState(MOCK_USERS[1])
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [msg, setMsg] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = () => {
    if (!msg.trim()) return
    setMessages([...messages, {
      id: Date.now(),
      userId: 0,
      text: msg,
      time: new Date().toLocaleTimeString('fr', { hour: '2-digit', minute: '2-digit' }),
    }])
    setMsg('')
  }

  return (
    <div style={{ height: '100%', display: 'flex', overflow: 'hidden' }}>

      {/* Liste contacts */}
      <div style={{ width: 260, borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--border)' }}>
          <input className="input" style={{ fontSize: 13, padding: '7px 12px' }} placeholder="Rechercher..." />
        </div>
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {MOCK_USERS.map(u => (
            <div
              key={u.id}
              onClick={() => setActiveUser(u)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 16px', cursor: 'pointer',
                borderBottom: '1px solid var(--border)',
                background: activeUser.id === u.id ? 'var(--bg3)' : 'transparent',
                transition: 'background 0.1s',
              }}
            >
              <Avatar user={u} size="sm" showOnline />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text1)' }}>{u.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.field}</div>
              </div>
              {u.online && (
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conversation */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Header conv */}
        <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--bg2)', flexShrink: 0 }}>
          <Avatar user={activeUser} showOnline />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text1)' }}>{activeUser.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text3)' }}>
              {activeUser.online ? 'En ligne' : 'Hors ligne'} · {activeUser.field}
            </div>
          </div>
          <button className="btn btn-ghost btn-sm" style={{ marginLeft: 'auto' }}>
            <Settings size={14} />
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {messages.map(m => {
            const isMe = m.userId === 0
            const sender = isMe ? ME : MOCK_USERS.find(u => u.id === m.userId)
            return (
              <div key={m.id} style={{ display: 'flex', flexDirection: isMe ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: 8 }}>
                <Avatar user={sender} size="sm" />
                <div>
                  <div style={{
                    maxWidth: 320, padding: '10px 14px', borderRadius: 14, fontSize: 14, lineHeight: 1.5,
                    background: isMe ? 'var(--accent)' : 'var(--bg3)',
                    color: 'var(--text1)',
                    borderBottomRightRadius: isMe ? 4 : 14,
                    borderBottomLeftRadius: isMe ? 14 : 4,
                  }}>
                    {m.text}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 3, textAlign: isMe ? 'right' : 'left' }}>
                    {m.time}
                  </div>
                </div>
              </div>
            )
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{ borderTop: '1px solid var(--border)', padding: 16, display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
          <input
            className="input"
            style={{ flex: 1 }}
            placeholder="Écrire un message..."
            value={msg}
            onChange={e => setMsg(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
          />
          <button className="btn btn-primary" style={{ padding: '10px 16px' }} onClick={send}>
            <Send size={15} />
          </button>
        </div>

      </div>
    </div>
  )
}