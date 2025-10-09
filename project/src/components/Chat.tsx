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
          className="fixed right-6 bottom-6 z-50 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          Chat Asistanı
        </button>
      )}

      {/* Draggable mini chat window */}
      {open && (
        <div
          ref={windowRef}
          style={containerStyle}
          className="fixed z-50 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <div
            onMouseDown={startDrag}
            className="flex items-center justify-between px-3 py-2 bg-blue-500 text-white cursor-grab"
          >
            <div className="font-semibold">Chat Asistanı</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold hover:bg-gray-100"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-3 space-y-3 bg-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 shadow-sm'}`}>
                  <div className="text-xs font-semibold mb-1">{m.role === 'user' ? 'Siz' : 'Asistan'}</div>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}

            {loading && <div className="text-center text-gray-500">Yükleniyor...</div>}

            <div ref={endRef} />
          </div>

          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200"
                placeholder="Mesajınızı yazın..."
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
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
