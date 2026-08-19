import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MonoLabel } from './PatternDecor';
import Icon from '@/components/ui/icon';

const PHOTOS = [
  '/portfolio/01.webp',
  '/portfolio/02.webp',
  '/portfolio/03.webp',
  '/portfolio/04.webp',
  '/portfolio/05.webp',
  '/portfolio/06.webp',
  '/portfolio/07.webp',
  '/portfolio/08.webp',
  '/portfolio/09.webp',
  '/portfolio/10.webp',
  '/portfolio/11.webp',
  '/portfolio/12.webp',
  '/portfolio/13.webp',
  '/portfolio/14.webp',
  '/portfolio/15.webp',
  '/portfolio/16.webp',
];

const Portfolio = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, onSelect]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight')
        setLightbox((v) => (v === null ? v : (v + 1) % PHOTOS.length));
      if (e.key === 'ArrowLeft')
        setLightbox((v) =>
          v === null ? v : (v - 1 + PHOTOS.length) % PHOTOS.length,
        );
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="objects" className="relative bg-bg-alt py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Портфолио</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Примеры объектов
        </h2>

        <div className="relative mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {PHOTOS.map((src, i) => (
                <div
                  key={src}
                  className="min-w-0 shrink-0 grow-0 basis-full pr-5 md:basis-1/2 lg:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/15 transition-colors duration-300 hover:border-brass/40"
                  >
                    <img
                      src={src}
                      alt={`Пример объекта ${i + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg/70 text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      <Icon name="Maximize2" size={18} />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Назад"
            onClick={() => embla?.scrollPrev()}
            className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-bg/80 text-ink backdrop-blur transition-colors hover:border-brass/50 hover:text-brass md:-left-5"
          >
            <Icon name="ChevronLeft" size={22} />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            onClick={() => embla?.scrollNext()}
            className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-bg/80 text-ink backdrop-blur transition-colors hover:border-brass/50 hover:text-brass md:-right-5"
          >
            <Icon name="ChevronRight" size={22} />
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Слайд ${i + 1}`}
                onClick={() => embla?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selected === i
                    ? 'w-7 bg-brass'
                    : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-base leading-relaxed text-ink-muted">
          Примеры установленных термочехлов и матов на промышленных объектах
        </p>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brass/60 hover:text-brass"
          >
            <Icon name="X" size={22} />
          </button>

          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) =>
                v === null ? v : (v - 1 + PHOTOS.length) % PHOTOS.length,
              );
            }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brass/60 hover:text-brass md:left-8"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) => (v === null ? v : (v + 1) % PHOTOS.length));
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brass/60 hover:text-brass md:right-8"
          >
            <Icon name="ChevronRight" size={24} />
          </button>

          <img
            src={PHOTOS[lightbox]}
            alt={`Пример объекта ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-white/60">
            {lightbox + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
