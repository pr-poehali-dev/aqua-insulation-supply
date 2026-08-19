import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MonoLabel } from './PatternDecor';
import Icon from '@/components/ui/icon';

type Slide = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

const SLIDES: Slide[] = [
  { type: 'image', src: '/portfolio/01.webp' },
  { type: 'image', src: '/portfolio/02.webp' },
  { type: 'image', src: '/portfolio/03.webp' },
  { type: 'image', src: '/portfolio/04.webp' },
  { type: 'image', src: '/portfolio/05.webp' },
  { type: 'image', src: '/portfolio/06.webp' },
  {
    type: 'video',
    src: '/portfolio/video-01.mp4',
    poster: '/portfolio/video-01.webp',
  },
  { type: 'image', src: '/portfolio/07.webp' },
  { type: 'image', src: '/portfolio/08.webp' },
  { type: 'image', src: '/portfolio/09.webp' },
  { type: 'image', src: '/portfolio/10.webp' },
  { type: 'image', src: '/portfolio/11.webp' },
  { type: 'image', src: '/portfolio/12.webp' },
  { type: 'image', src: '/portfolio/13.webp' },
  { type: 'image', src: '/portfolio/14.webp' },
  { type: 'image', src: '/portfolio/15.webp' },
  { type: 'image', src: '/portfolio/16.webp' },
];

const AUTOPLAY_MS = 10000;

const Portfolio = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: false,
  });
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    embla.on('reInit', onSelect);
    return () => {
      embla.off('select', onSelect);
      embla.off('reInit', onSelect);
    };
  }, [embla, onSelect]);

  useEffect(() => {
    if (!embla) return;

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== selected) {
        v.pause();
        v.currentTime = 0;
      }
    });

    const current = SLIDES[selected];
    const paused = lightbox !== null;

    if (current?.type === 'video') {
      const video = videoRefs.current[selected];
      if (!video) return;
      if (paused) {
        video.pause();
        return;
      }
      video.currentTime = 0;
      const onEnded = () => embla.scrollNext();
      video.addEventListener('ended', onEnded);
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => undefined);
      return () => {
        video.removeEventListener('ended', onEnded);
      };
    }

    if (paused) return;
    const timer = window.setTimeout(() => embla.scrollNext(), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [embla, selected, lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight')
        setLightbox((v) => (v === null ? v : (v + 1) % SLIDES.length));
      if (e.key === 'ArrowLeft')
        setLightbox((v) =>
          v === null ? v : (v - 1 + SLIDES.length) % SLIDES.length,
        );
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const active = lightbox === null ? null : SLIDES[lightbox];

  return (
    <section id="objects" className="relative bg-bg-alt py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Портфолио</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Примеры объектов
        </h2>

        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-3.5 flex">
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-3.5 md:basis-1/2 lg:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group relative block h-[360px] w-full overflow-hidden rounded-lg border border-white/15 transition-colors duration-300 hover:border-brass/40 sm:h-[440px] lg:h-[500px]"
                  >
                    {slide.type === 'image' ? (
                      <img
                        src={slide.src}
                        alt={`Пример объекта ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[i] = el)}
                        src={slide.src}
                        poster={slide.poster}
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg/70 text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      <Icon
                        name={slide.type === 'video' ? 'Play' : 'Maximize2'}
                        size={18}
                      />
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
            {SLIDES.map((_, i) => (
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

      {active && lightbox !== null && (
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
                v === null ? v : (v - 1 + SLIDES.length) % SLIDES.length,
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
              setLightbox((v) => (v === null ? v : (v + 1) % SLIDES.length));
            }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brass/60 hover:text-brass md:right-8"
          >
            <Icon name="ChevronRight" size={24} />
          </button>

          {active.type === 'image' ? (
            <img
              src={active.src}
              alt={`Пример объекта ${lightbox + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
          ) : (
            <video
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg"
            />
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-white/60">
            {lightbox + 1} / {SLIDES.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;