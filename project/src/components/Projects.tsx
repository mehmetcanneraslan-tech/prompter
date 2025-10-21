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
    <section id="projects" className="bg-slate-100/80 py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 shadow">
            Seçili Projeler
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl text-slate-900">Yaptığımız İşler</h2>
          <p className="mt-4 text-lg text-slate-600">
            Türkiye genelindeki etkinlikler ve canlı yayınlar için uçtan uca prompter çözümleri.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
