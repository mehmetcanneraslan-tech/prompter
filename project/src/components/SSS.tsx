import { useState } from 'react';

type FaqItem = { id: number; question: string; answer: string; };

const faqs: FaqItem[] = [
  { id: 1, question: 'Soru 1: Nasıl kayıt olabilirim?', answer: 'Cevap 1: Kayıt için ...' },
  { id: 2, question: 'Soru 2: Ücretlendirme nasıl?', answer: 'Cevap 2: Ücretlendirme ...' },
  { id: 3, question: 'Soru 3: Destek nasıl alırım?', answer: 'Cevap 3: Destek almak için ...' },
];

export default function SSS() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="sss" className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Sıkça Sorulan Sorular</h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.id} className="border border-transparent rounded-xl overflow-hidden bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-300">
              {/* AccordionItem & AccordionTrigger: arka plan navbar butonlarıyla eşitlendi (bg-blue-500) ve hover için daha koyusu (hover:bg-blue-600); yazı rengi beyaz */}
              <button
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
                className={`w-full text-left px-4 py-3 flex justify-between items-center bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200`}
              >
                <span className="font-medium">{item.question}</span>
                <span className="ml-4">{openId === item.id ? '−' : '+'}</span>
              </button>

              {openId === item.id && (
                <div className="px-4 py-3 bg-gray-50 text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}