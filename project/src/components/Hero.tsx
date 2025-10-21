import { Monitor, Play, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-28">
      <div className="absolute inset-0 bg-surface"></div>
      <div className="absolute inset-0 bg-hero-glow"></div>
      <div className="absolute inset-y-0 right-[-20%] w-[55%] rounded-full bg-gradient-to-br from-brand-500/30 via-accent-400/20 to-transparent blur-3xl"></div>

      <div className="relative container">
        <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-slate-100">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                <Monitor className="h-3.5 w-3.5" />
              </span>
              Profesyonel Prompter Operatörlük Hizmeti
            </div>

            <h1 className="text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Etkinliklerinizi <span className="text-brand-200">yüksek ritimde</span> yürütün,
              sunumunuzu profesyonellere emanet edin.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Kurulumdan canlı yayına kadar uçtan uca prompter hizmeti sunuyoruz.
              Deneyimli operatörlerimiz ve broadcast standartlarındaki ekipmanlarımızla
              kusursuz bir deneyim yaratıyoruz.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400 px-7 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
              >
                Hemen İletişime Geçin
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur transition-colors hover:border-white/40 hover:text-white"
              >
                Daha Fazla Bilgi
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4 text-sm text-white/65">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Camera className="h-5 w-5 text-brand-200" />
                </span>
                <span>Broadcast seviyesinde ekipman parkuru</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Play className="h-5 w-5 text-brand-200" />
                </span>
                <span>15+ yıllık canlı yayın deneyimi</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 hidden h-40 w-40 rounded-full bg-gradient-to-tr from-brand-400/40 to-accent-400/20 blur-3xl md:block"></div>
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-inner">
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
                  <img
                    src="/images/image.png"
                    alt="Profesyonel Prompter Sistemi"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/prompter-placeholder.svg';
                    }}
                  />
                </div>
                <div className="space-y-3">
                  <div className="h-2 rounded-full bg-white/20"></div>
                  <div className="h-2 rounded-full bg-white/10"></div>
                  <div className="h-2 w-2/3 rounded-full bg-white/10"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Hazır Kurulum
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
