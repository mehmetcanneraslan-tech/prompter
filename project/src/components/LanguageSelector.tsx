import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { availableLanguages, useI18n } from '../i18n';

export default function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const active = availableLanguages.find((item) => item.code === language) ?? availableLanguages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-soft transition hover:border-brand-200 hover:text-slate-900"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base">{active.flag}</span>
        <span>{active.label}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180 text-brand-500' : 'text-slate-400'}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-32 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur"
        >
          {availableLanguages.map(({ code, label, flag }) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${
                  code === language ? 'bg-brand-50 text-brand-600 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                }`}
                role="option"
                aria-selected={code === language}
              >
                <span className="text-base">{flag}</span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
