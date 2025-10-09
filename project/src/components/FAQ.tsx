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
    answer: 'Fiyatlandırmamız etkinliğin süresi, lokasyonu, ekipman ihtiyacı ve hizmet kapsamına göre değişmektedir. Yarım günlük, tam günlük veya saatlik paketlerimiz mevcuttur. Detaylı fiyat teklifi için lütfen bizimle iletişime geçin. Size özel paket hazırlamaktan memnuniyet duyarız.'
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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Sıkça Sorulan Sorular
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Merak Ettikleriniz
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
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
