import { Award, Users, Headphones, Zap } from 'lucide-react';
import { useI18n, type TranslationShape } from '../i18n';

export default function About() {
  const { translate } = useI18n();
  const about = translate<TranslationShape['about']>('about');
  const reasonIcons = [Award, Users, Headphones, Zap] as const;
  const stats = Object.values(about.stats);

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl text-slate-900">{about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">{about.intro}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-3xl text-slate-900">{about.missionTitle}</h3>
            {about.missionParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl text-slate-900">{about.whyTitle}</h3>
            <div className="space-y-6">
              {about.reasons.map((reason, index) => {
                const Icon = reasonIcons[index];
                return (
                  <div
                    key={reason.title}
                    className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">{reason.title}</h4>
                      <p className="mt-2 text-slate-600">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-br from-surface via-brand-900 to-surface px-8 py-14 text-white shadow-soft sm:px-12 md:px-16">
          <div className="grid gap-10 text-center md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-5xl font-display">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.3em] text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
