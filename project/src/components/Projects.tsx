const projects = [
  { id: 1, title: 'İstanbul İş Konferansı 2024', description: 'İstanbul’da düzenlenen iş dünyası konferansı.', image: '/images/proje1.jpg' },
  { id: 2, title: 'Ankara Teknoloji Zirvesi', description: 'Teknoloji liderleriyle buluşma.', image: '/images/proje2.jpg' },
  { id: 3, title: 'İzmir Sağlık Fuarı', description: 'Sağlık sektöründeki yenilikler.', image: '/images/proje3.jpg' },
  { id: 4, title: 'Antalya Turizm Çalıştayı', description: 'Turizm sektöründe iş birliği.', image: '/images/proje4.jpg' },
  { id: 5, title: 'Bursa Sanayi Günleri', description: 'Sanayi alanındaki gelişmeler.', image: '/images/proje5.jpg' },
  { id: 6, title: 'Adana Tarım Fuarı', description: 'Tarım teknolojileri tanıtımı.', image: '/images/proje6.jpg' },
  { id: 7, title: 'Trabzon Lojistik Zirvesi', description: 'Lojistik sektöründe yenilikler.', image: '/images/proje7.jpg' },
  { id: 8, title: 'Gaziantep Gıda Fuarı', description: 'Gıda sektöründe iş fırsatları.', image: '/images/proje8.jpg' },
  { id: 9, title: 'Konya Otomotiv Çalıştayı', description: 'Otomotiv sektöründe iş birliği.', image: '/images/proje9.jpg' },
  { id: 10, title: 'Eskişehir Kültür Zirvesi', description: 'Kültür ve sanat etkinlikleri.', image: '/images/proje10.jpg' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Yaptığımız İşler</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
