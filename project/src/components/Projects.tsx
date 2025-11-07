import { useI18n, type TranslationShape } from '../i18n';

export default function Projects() {
  const { translate } = useI18n();
  const projects = translate<TranslationShape['projects']>('projects');

  return (
    <section id="projects" className="bg-slate-100/80 py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600 shadow">
            {projects.badge}
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl text-slate-900">{projects.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{projects.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.list.map((project, index) => {
            const imageSrc =
              'image' in project && project.image
                ? project.image
                : `/images/proje${index + 1}.jpg`;

            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-slate-600">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
