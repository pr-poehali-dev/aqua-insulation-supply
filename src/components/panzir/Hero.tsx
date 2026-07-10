import Icon from '@/components/ui/icon';
import { MonoLabel, Grainline, VideoBg } from './PatternDecor';

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
      <VideoBg />
      <Grainline className="pointer-events-none absolute left-8 top-1/3 z-0 hidden h-40 w-3 lg:block" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <MonoLabel>Ателье промышленной защиты · СПб</MonoLabel>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
          Крой <span className="italic text-garnet">по мерке</span>
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

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:gap-16">
          {FACTS.map((f, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl font-semibold text-brass">
                {f.value}
              </div>
              <div className="label-mono mt-1.5 text-[10px] text-steel">
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
