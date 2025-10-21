import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // 🚀 Backend bağlantısı burada:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sunucu hatası oluştu.");
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
            İletişime Geçin
          </span>
          <h2 className="mt-6 text-4xl text-slate-900">Bize Ulaşın</h2>
          <p className="mt-4 text-lg text-slate-600">
            Sorularınız için bize ulaşın. Size en kısa sürede geri dönüş yapalım.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">İletişim Bilgileri</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Adres</h4>
                    <p className="mt-1 text-slate-600">
                      Kaptan Paşa Mahallesi, Zincirlikuyu Caddesi<br />
                      Ün İş Merkezi NO:169, Kasımpaşa / İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Telefon</h4>
                    <p className="mt-1 text-slate-600">+90 532 627 26 51</p>
                    <p className="text-slate-600">+90 544 627 26 54</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">E-posta</h4>
                    <p className="mt-1 text-slate-600">info@focusdestek.com.tr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft">
              <h4 className="font-semibold text-slate-900">Çalışma Saatlerimiz</h4>
              <div className="mt-3 space-y-1 text-slate-600">
                <p>7/24 Hizmetinizdeyiz.</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 transition focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                  <CheckCircle className="h-5 w-5" />
                  Mesajınız başarıyla gönderildi! Mail olarak en kısa sürede dönüş yapılacaktır.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400 px-8 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>İşleniyor...</>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
