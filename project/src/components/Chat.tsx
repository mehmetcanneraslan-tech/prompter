import { useEffect, useRef, useState } from 'react';

type Message = { id: number; role: 'user' | 'assistant'; text: string };

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const startRef = useRef<{ mx: number; my: number; x: number; y: number } | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging || !startRef.current) return;
      const dx = e.clientX - startRef.current.mx;
      const dy = e.clientY - startRef.current.my;
      setPos({ x: startRef.current.x + dx, y: startRef.current.y + dy });
    };
    const onUp = () => {
      if (isDragging) {
        setIsDragging(false);
        startRef.current = null;
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isDragging]);

  useEffect(() => {
    // scroll to bottom on new message
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const startDrag = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasDragged(true);
    const rect = windowRef.current?.getBoundingClientRect();
    startRef.current = {
      mx: e.clientX,
      my: e.clientY,
      x: rect ? rect.left : pos.x,
      y: rect ? rect.top : pos.y,
    };
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      });

      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
      const data = await res.json();
      const assistantText = data?.response || data?.answer || JSON.stringify(data);
      const assistantMsg: Message = { id: Date.now() + 1, role: 'assistant', text: assistantText };
      setMessages((m) => [...m, assistantMsg]);
    } catch (err) {
      console.error('Chat request failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle: React.CSSProperties = hasDragged
    ? { left: pos.x, top: pos.y, width: 350, height: 450 }
    : { right: 20, bottom: 80, width: 350, height: 450 };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Chat Asistanı
        </button>
      )}

      {/* Draggable mini chat window */}
      {open && (
        <div
          ref={windowRef}
          style={containerStyle}
          className="fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-soft backdrop-blur"
        >
          <div
            onMouseDown={startDrag}
            className="flex cursor-grab items-center justify-between bg-surface px-4 py-2 text-white"
          >
            <div className="font-semibold">Chat Asistanı</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-auto bg-slate-50 p-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-brand-500 to-brand-400 text-white shadow-soft'
                      : 'border border-slate-200 bg-white text-slate-800 shadow-soft'
                  }`}
                >
                  <div
                    className={`mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] ${
                      m.role === 'user' ? 'text-white/70' : 'text-brand-500'
                    }`}
                  >
                    {m.role === 'user' ? 'Siz' : 'Asistan'}
                  </div>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}

            {loading && <div className="text-center text-slate-400">Yükleniyor...</div>}

            <div ref={endRef} />
          </div>

          <div className="border-t border-slate-200 bg-white/90 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-slate-700 transition focus:border-brand-300 focus:outline-none focus:ring-4 focus:ring-brand-100"
                placeholder="Mesajınızı yazın..."
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-brand-500 to-accent-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow hover:brightness-105 disabled:opacity-60"
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
