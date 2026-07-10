import Icon from '@/components/ui/icon';
import { MonoLabel, Grainline, Notch } from './PatternDecor';

const FACTS = [
  { value: '12 000+', label: 'пошитых изделий' },
  { value: '−60…+650 °C', label: 'рабочий диапазон' },
  { value: '1 000+', label: 'циклов монтажа' },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Зона под фоновое видео (плейсхолдер) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-alt/40 via-bg to-bg" />
        <div className="absolute right-6 top-24 hidden lg:block">
          <div className="label-mono flex h-64 w-64 items-center justify-center rounded-sm border border-dashed border-steel/25 text-[10px] text-steel/40">
            видео-фон
          </div>
        </div>
        <Grainline className="absolute left-8 top-1/3 hidden h-40 w-3 lg:block" />
      </div>

      <div className="container relative">
        <MonoLabel>Ателье промышленной защиты · СПб</MonoLabel>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
          Броня <span className="italic text-garnet">по мерке</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-muted">
          {/* Плейсхолдер подзаголовка */}
          Съёмные термочехлы, скроенные точно по геометрии вашего оборудования.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacts"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-garnet px-7 py-4 text-base font-semibold text-ink transition-opacity hover:opacity-90"
          >
            <Icon name="Ruler" size={18} />
            Записаться на замер
          </a>
          <a
            href="#collections"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-steel/40 px-7 py-4 text-base font-medium text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Смотреть коллекции
          </a>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/60 sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <div key={i} className="relative bg-bg-alt px-6 py-6">
              {i > 0 && <Notch className="absolute -left-[5px] top-1/2 hidden -translate-y-1/2 rotate-90 sm:block" />}
              <div className="font-display text-2xl font-semibold text-brass">
                {f.value}
              </div>
              <div className="label-mono mt-1 text-[10px] text-steel">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
