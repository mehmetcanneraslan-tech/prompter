import { Monitor, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Fokus Prompter</span>
            </div>
            <p className="text-sm leading-relaxed">
              Profesyonel prompter operatörlük hizmetleriyle etkinliklerinizde
              güvenilir ortağınız.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  SSS
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-blue-400 transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                <span>Kaptan Paşa Mah., Zincirlikuyu Cad. Ün NO:169 İş Merkezi, Kasımpaşa/İstanbul</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+90 532 627 26 51 / +90 544 627 26 54</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>info@focusdestek.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fokus Prompter. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
