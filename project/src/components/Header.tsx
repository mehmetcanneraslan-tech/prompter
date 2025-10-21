export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 border-b border-slate-200 bg-white/80 backdrop-blur-xl z-50">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-400 to-accent-500 shadow-soft">
            <img
              src="/images/batulogo.jpg"
              alt="Batu logo"
              className="h-9 w-9 rounded-xl object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-lg font-semibold text-slate-900">
              Focus Prompter
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              İstanbul · Türkiye
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToSection('home')}
            aria-current="page"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Ana Sayfa
          </button>
          <a
            href="#about"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Hakkımızda
          </a>
          <a
            href="#projects"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Yaptığımız İşler
          </a>
          <a
            href="#faq"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            SSS
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
          >
            İletişim
          </a>
        </div>
      </nav>
    </header>
  );
}
