import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const FACTS = [
  { value: 'до 98%', label: 'меньше теплопотерь' },
  { value: 'до 30 дБ', label: 'тише оборудование' },
  { value: '500+', label: 'раз можно снять и поставить' },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg"
    >
      {/* Видео-фон */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          src="/hero-bg.mp4"
          poster="/hero-bg-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Затемнение видео + градиенты для читаемости текста */}
        <div className="absolute inset-0 bg-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/20 to-bg/80" />
      </div>

      <div className="container relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <MonoLabel
            centered
            className="!gap-4 !text-[13px] font-semibold !tracking-[0.26em] !text-brass-soft md:!text-[15px]"
          >
            Первое промышленное ателье России
          </MonoLabel>

          <h1 className="mt-7 font-brand text-7xl font-medium leading-[1.05] tracking-[0.06em] text-ink sm:text-8xl md:text-[9rem]">
            ПАНЦИРЬ
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Съёмные термочехлы точного кроя под ваше оборудование.
            <br />
            Снижают теплопотери, защищают от коррозии и служат годами.
          </p>

          <div className="mt-10">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-garnet px-9 py-5 text-lg font-medium text-ink shadow-lg shadow-garnet/30 transition-colors hover:bg-garnet-bright"
            >
              <Icon name="Calculator" size={20} />
              Получить расчёт
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-8 sm:gap-x-16">
            {FACTS.map((f, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl font-semibold text-brass-soft md:text-3xl">
                  {f.value}
                </div>
                <div className="label-mono mt-1.5 text-[10px] text-steel">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;