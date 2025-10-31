import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useI18n, type TranslationShape } from '../i18n';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { translate } = useI18n();
  const faqContent = translate<TranslationShape['faq']>('faq');

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
              {faqContent.badge}
            </div>
            <h2 className="text-4xl text-slate-900">{faqContent.title}</h2>
            <p className="mt-4 text-lg text-slate-600">{faqContent.description}</p>
          </div>

          <div className="space-y-4">
            {faqContent.items.map((faq, index) => (
              <div
                key={faq.question}
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
