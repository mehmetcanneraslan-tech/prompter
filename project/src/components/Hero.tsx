import { Monitor, Play, Camera } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Monitor className="w-4 h-4" />
              Profesyonel Prompter Operatörlük Hizmeti
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Profesyonel Etkinliklerinizde
              <span className="text-blue-600"> Prompter Operatörü</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Etkinliklerinize profesyonel prompter ekipmanı ve deneyimli operatör desteği sağlıyoruz.
              Kurulum, işletme ve teknik destek - her şey bizden.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hemen İletişime Geçin
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-medium border-2 border-gray-200 transition-all"
              >
                Daha Fazla Bilgi
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Profesyonel Ekipman</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Deneyimli Operatör</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Profesyonel Prompter Sistemi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Profesyonel Hizmet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
