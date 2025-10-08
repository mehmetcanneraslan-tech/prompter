import { Monitor } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Fokus Prompter</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('home')}
                aria-current="page"
                className={`px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                Ana Sayfa
              </button>

              <a
                href="#about"
                className={`inline-flex items-center px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-150 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                Hakkımızda
              </a>

              <a
                href="#projects"
                className={`inline-flex items-center px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-150 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                Yaptığımız İşler
              </a>

              <a
                href="#faq"
                className={`inline-flex items-center px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-150 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                SSS
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center px-4 py-2 rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white transition-colors duration-150 shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                İletişim
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
