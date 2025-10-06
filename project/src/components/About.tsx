import { Award, Users, Headphones, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Broadcast ve etkinlik sektöründe yılların deneyimiyle, profesyonel prompter operatörlük
            hizmeti sunan Türkiye'nin önde gelen firmalarından biriyiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Etkinliklerinize, çekimlerinize ve canlı yayınlarınıza profesyonel prompter
              ekipmanı ve deneyimli operatör desteği sağlamak. Kurulumdan işletmeye,
              teknik destekten operatör hizmetine kadar her şeyi tek elden sunarak,
              müşterilerimizin kusursuz sunumlar gerçekleştirmesini sağlıyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Küçük ölçekli çekimlerden büyük etkinliklere, kurumsal sunumlardan canlı yayınlara
              kadar her türlü organizasyona hizmet veriyoruz. Profesyonel ekipmanımız ve
              uzman ekibimizle projenizin başından sonuna kadar yanınızdayız.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Neden Biz?</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Profesyonel Ekipman</h4>
                  <p className="text-gray-600 text-sm">
                    Broadcast kalitesinde prompter sistemleri ve yedek ekipmanlar
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Deneyimli Kadro</h4>
                  <p className="text-gray-600 text-sm">
                    Sektörde 15+ yıllık tecrübeye sahip uzman ekibimiz
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">7/24 Teknik Destek</h4>
                  <p className="text-gray-600 text-sm">
                    Kesintisiz müşteri hizmetleri ve teknik destek
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hızlı Mobilizasyon</h4>
                  <p className="text-gray-600 text-sm">
                    Acil projelerde hızlı ekip ve ekipman temininde uzmanız
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
