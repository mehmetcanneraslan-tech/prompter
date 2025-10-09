import { Award, Users, Headphones, Zap } from 'lucide-react';

export default function About() {
  return (
  <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Hakkımızda</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Broadcast ve etkinlik sektöründe yılların deneyimiyle, profesyonel prompter operatörlük
            hizmeti sunan Türkiye'nin önde gelen firmalarından biriyiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Misyonumuz</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Etkinliklerinize, çekimlerinize ve canlı yayınlarınıza profesyonel prompter
              ekipmanı ve deneyimli operatör desteği sağlamak. Kurulumdan işletmeye,
              teknik destekten operatör hizmetine kadar her şeyi tek elden sunarak,
              müşterilerimizin kusursuz sunumlar gerçekleştirmesini sağlıyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Küçük ölçekli çekimlerden büyük etkinliklere, kurumsal sunumlardan canlı yayınlara
              kadar her türlü organizasyona hizmet veriyoruz. Profesyonel ekipmanımız ve
              uzman ekibimizle projenizin başından sonuna kadar yanınızdayız.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Neden Biz?</h3>
              <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl shadow-md transition-all duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Profesyonel Ekipman</h4>
                  <p className="text-gray-700 text-base">
                    Broadcast kalitesinde prompter sistemleri ve yedek ekipmanlar
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl shadow-md transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Deneyimli Kadro</h4>
                  <p className="text-gray-700 text-base">
                    Sektörde 15+ yıllık tecrübeye sahip uzman ekibimiz
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl shadow-md transition-all duration-300">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">7/24 Teknik Destek</h4>
                  <p className="text-gray-700 text-base">
                    Kesintisiz müşteri hizmetleri ve teknik destek
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl shadow-md transition-all duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">Hızlı Mobilizasyon</h4>
                  <p className="text-gray-700 text-base">
                    Acil projelerde hızlı ekip ve ekipman temininde uzmanız
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 text-white text-center shadow-lg">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-extrabold mb-4">500+</div>
              <div className="text-blue-200 text-lg">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-4">1000+</div>
              <div className="text-blue-200 text-lg">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-4">20+</div>
              <div className="text-blue-200 text-lg">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
