import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Prompter operatörü nedir?',
    answer: 'Prompter operatörü, etkinliklerinizde veya çekimlerinizde prompter sistemini kuran, işleten ve yöneten profesyonel kişidir. Konuşmacının metinleri rahatça okuyabilmesi için hızı ayarlar, teknik aksaklıkları giderir ve tüm süreci yönetir. Fokus Prompter olarak, hem ekipmanı hem de deneyimli operatörü bir arada sunuyoruz.'
  },
  {
    id: 2,
    question: 'Hangi tip etkinliklere hizmet veriyorsunuz?',
    answer: 'Kurumsal etkinlikler, konferanslar, canlı yayınlar, panel organizasyonları, kongre ve seminerler, ürün lansmanları, video çekimleri ve tüm profesyonel sunum gereksinimlerinizde hizmet veriyoruz. Küçük ölçekli çekimlerden büyük organizasyonlara kadar her türlü projeye destek sağlıyoruz.'
  },
  {
    id: 3,
    question: 'Rezervasyon ne kadar önceden yapılmalı?',
    answer: 'İdeal olarak etkinliğinizden en az 1 hafta önce rezervasyon yapmanızı öneriyoruz. Ancak acil durumlar için 24-48 saat öncesinde de hizmet verebiliyoruz. Yoğun sezonlarda daha erken rezervasyon yapmanız avantajlı olacaktır. Tarih uygunluğu için hemen bizimle iletişime geçin.'
  },
  {
    id: 4,
    question: 'Fiyatlandırma nasıl yapılıyor?',
    answer: 'Fiyatlandırmamız etkinliğin süresi, lokasyonu, ekipman ihtiyacı ve hizmet kapsamına göre değişmektedir. Detaylı fiyat teklifi için lütfen bizimle iletişime geçin. Size özel paket hazırlamaktan memnuniyet duyarız.'
  },
  {
    id: 5,
    question: 'Kurulum ve söküm dahil mi?',
    answer: 'Evet, hizmetimiz tam paket olarak sunulmaktadır. Ekipmanın etkinlik yerine taşınması, profesyonel kurulumu, etkinlik boyunca operatör desteği ve sonrasında ekipmanın sökümü fiyata dahildir. Siz sadece sunumunuza odaklanın, teknik detaylar bizden.'
  },
  {
    id: 6,
    question: 'İstanbul dışına hizmet veriyor musunuz?',
    answer: 'Evet, Türkiye genelinde hizmet veriyoruz. İstanbul dışındaki lokasyonlar için ulaşım ve konaklama masrafları ayrıca değerlendirilir. Şehir dışı organizasyonlar için ekibimiz profesyonel ekipman ve deneyimli operatörlerle yanınızda olacaktır.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              <HelpCircle className="h-4 w-4" />
              Sıkça Sorulan Sorular
            </div>
            <h2 className="text-4xl text-slate-900">Merak Ettikleriniz</h2>
            <p className="mt-4 text-lg text-slate-600">
              Prompter süreçleri ve hizmet kapsamımızla ilgili en çok sorulan soruları yanıtladık.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-brand-200 bg-brand-50/60 shadow-soft'
                    : 'border-slate-200 bg-white/90 hover:-translate-y-1 hover:shadow-lg'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="border-t border-white px-6 pb-6 pt-4 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
