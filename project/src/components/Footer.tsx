import { Mail, Phone, MapPin } from 'lucide-react';
import { useI18n, type TranslationShape } from '../i18n';

export default function Footer() {
  const { translate } = useI18n();
  const footer = translate<TranslationShape['footer']>('footer');

  return (
    <footer className="relative overflow-hidden bg-surface py-16 text-slate-200">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-transparent to-accent-900/10"></div>
      <div className="container relative">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                <img
                  src="/images/batulogo.jpg"
                  alt={footer.brand}
                  className="h-9 w-9 rounded-xl object-contain"
                />
              </div>
              <span className="font-display text-xl font-semibold text-white">{footer.brand}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {footer.quickLinksTitle}
            </h4>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  {footer.quickLinks.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  {footer.quickLinks.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  {footer.quickLinks.faq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transition-colors hover:text-white"
                >
                  {footer.quickLinks.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              {footer.contactTitle}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                <span>{footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-300" />
                <span>{footer.phones}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-300" />
                <span>{footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {footer.brand}. {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
