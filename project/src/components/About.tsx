import { Award, Users, Headphones, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl text-slate-900">Hakkımızda</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Broadcast ve etkinlik sektöründe yılların deneyimiyle, profesyonel prompter operatörlük
            hizmeti sunan Türkiye'nin önde gelen firmalarından biriyiz.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-3xl text-slate-900">Misyonumuz</h3>
            <p className="text-lg leading-relaxed text-slate-600">
              Etkinliklerinize, çekimlerinize ve canlı yayınlarınıza profesyonel prompter
              ekipmanı ve deneyimli operatör desteği sağlamak. Kurulumdan işletmeye,
              teknik destekten operatör hizmetine kadar her şeyi tek elden sunarak,
              müşterilerimizin kusursuz sunumlar gerçekleştirmesini sağlıyoruz.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Küçük ölçekli çekimlerden büyük etkinliklere, kurumsal sunumlardan canlı yayınlara
              kadar her türlü organizasyona hizmet veriyoruz. Profesyonel ekipmanımız ve
              uzman ekibimizle projenizin başından sonuna kadar yanınızdayız.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl text-slate-900">Neden Biz?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Profesyonel Ekipman</h4>
                  <p className="mt-2 text-slate-600">
                    Broadcast kalitesinde prompter sistemleri ve yedek ekipmanlar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Deneyimli Kadro</h4>
                  <p className="mt-2 text-slate-600">
                    Sektörde 15+ yıllık tecrübeye sahip uzman ekibimiz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                  <Headphones className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">7/24 Teknik Destek</h4>
                  <p className="mt-2 text-slate-600">
                    Kesintisiz müşteri hizmetleri ve teknik destek
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                  <Zap className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900">Hızlı Mobilizasyon</h4>
                  <p className="mt-2 text-slate-600">
                    Acil projelerde hızlı ekip ve ekipman temininde uzmanız
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-br from-surface via-brand-900 to-surface px-8 py-14 text-white shadow-soft sm:px-12 md:px-16">
          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-5xl font-display">500+</div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Mutlu Müşteri</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-display">500+</div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Tamamlanan Proje</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-display">20+</div>
              <div className="text-sm uppercase tracking-[0.3em] text-white/60">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
