import { MonoLabel } from './PatternDecor';

type SectionDef = {
  id: string;
  label: string;
  title: string;
};

const SECTIONS: SectionDef[] = [
  { id: 'advantages', label: 'Почему мы', title: 'Преимущества' },
  { id: 'objects', label: 'Портфолио', title: 'Примеры объектов' },
  { id: 'services', label: 'Услуги', title: 'Спектр услуг / Как мы работаем' },
  { id: 'docs', label: 'Документы', title: 'Документация' },
  { id: 'contacts', label: 'Связь', title: 'Контакты' },
];

const PlaceholderSections = () => {
  return (
    <>
      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`relative py-24 md:py-36 ${
            i % 2 === 0 ? 'bg-bg' : 'bg-bg-alt'
          }`}
        >
          <div className="container relative z-10">
            <MonoLabel>{s.label}</MonoLabel>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
              {s.title}
            </h2>

            {/* Пустой контейнер под будущий контент */}
            <div className="mt-14" />
          </div>
        </section>
      ))}
    </>
  );
};

export default PlaceholderSections;