import { MonoLabel } from './PatternDecor';
import DocsGallery from './DocsGallery';

const Docs = () => {
  return (
    <section id="docs" className="relative bg-bg-alt py-24 md:py-36">
      <div className="container relative z-10">
        <div className="text-center">
          <MonoLabel centered>Документы</MonoLabel>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Документация
          </h2>
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Сертификаты соответствия, пожарные сертификаты, экспертные заключения
          и инструкции по монтажу термочехлов «Панцирь».
        </p>

        <div className="mt-14">
          <DocsGallery />
        </div>
      </div>
    </section>
  );
};

export default Docs;