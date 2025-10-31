import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { submitContactForm } from '../services/api';
import { useI18n, type TranslationShape } from '../i18n';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const cardIcons = {
  address: MapPin,
  phone: Phone,
  email: Mail,
} as const;

type CardKey = keyof typeof cardIcons;

export default function Contact() {
  const { translate } = useI18n();
  const contactTexts = translate<TranslationShape['contact']>('contact');
  const mapSrc =
    'https://www.google.com/maps?output=embed&q=Kaptan%20Pa%C5%9Fa%20Mahallesi%2C%20Zincirlikuyu%20Caddesi%20%C3%9Cn%20%C4%B0%C5%9F%20Merkezi%20NO%3A169%2C%20Kas%C4%B1mpa%C5%9Fa%2F%C4%B0stanbul';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setHasError(false);
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setHasError(true);
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cardKeys: CardKey[] = ['address', 'phone', 'email'];

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
            {contactTexts.badge}
          </span>
          <h2 className="mt-6 text-4xl text-slate-900">{contactTexts.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{contactTexts.description}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">
                {contactTexts.form.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                placeholder={contactTexts.form.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                {contactTexts.form.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                placeholder={contactTexts.form.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-800">
                {contactTexts.form.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                placeholder={contactTexts.form.phonePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
                {contactTexts.form.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                placeholder={contactTexts.form.messagePlaceholder}
              ></textarea>
            </div>

            {hasError && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                {contactTexts.errorMessage}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                <CheckCircle className="h-5 w-5" />
                {contactTexts.successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400 px-8 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:hover:translate-y-0"
            >
              {loading ? (
                <>{contactTexts.form.loading}</>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  {contactTexts.form.submit}
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">{contactTexts.infoTitle}</h3>

              <div className="mt-6 space-y-5">
                {cardKeys.map((key) => {
                  const Icon = cardIcons[key];
                  const card = contactTexts.cards[key];
                  return (
                    <div
                      key={card.title}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-soft"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{card.title}</h4>
                        <div className="mt-1 space-y-1 text-slate-600">
                          {card.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft">
              <h4 className="font-semibold text-slate-900">{contactTexts.hoursTitle}</h4>
              <div className="mt-3 space-y-1 text-slate-600">
                {contactTexts.hours.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-slate-900">{contactTexts.mapTitle}</h3>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-soft">
              <iframe
                src={mapSrc}
                title="Focus Prompter Location"
                className="h-80 w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
