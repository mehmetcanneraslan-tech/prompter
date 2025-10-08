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

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <nav className="flex space-x-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                Hakkımızda
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Yaptığımız İşler
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
                SSS
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                İletişim
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
