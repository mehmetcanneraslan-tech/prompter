import { Monitor, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface py-16 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-transparent to-accent-900/10"></div>
      <div className="container relative">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                <Monitor className="h-6 w-6" />
              </div>
              <span className="font-display text-xl font-semibold text-white">Fokus Prompter</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Profesyonel prompter operatörlük hizmetleriyle etkinliklerinizde güvenilir ortağınız.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Hızlı Bağlantılar</h4>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  SSS
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">İletişim</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                <span>Kaptan Paşa Mah., Zincirlikuyu Cad. Ün NO:169 İş Merkezi, Kasımpaşa/İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-300" />
                <span>+90 532 627 26 51 / +90 544 627 26 54</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-300" />
                <span>info@focusdestek.com.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Fokus Prompter. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
