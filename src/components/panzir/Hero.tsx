import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/2e21b767-e8e9-412d-9672-d11fc72f939f.jpg';

const FACTS = [
  { value: '20 500+', label: 'изделий пошито' },
  { value: 'до +1250 °C', label: 'температура применения' },
  { value: '500+', label: 'циклов монтаж-демонтаж' },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg"
    >
      {/* Атмосферный фон */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Термочехол ПАНЦИРЬ на промышленном оборудовании"
          className="h-full w-full object-cover"
        />
        {/* Премиальные градиенты для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <MonoLabel>Первое промышленное ателье России · Санкт-Петербург</MonoLabel>

          <h1 className="mt-8 font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            ПАНЦИРЬ — индивидуальные{' '}
            <span className="italic text-garnet-bright">термочехлы</span> от
            первого промышленного ателье России
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Крой по мерке. Haute Couture для экстремальных температур до{' '}
            <span className="whitespace-nowrap text-brass-soft">+1250 °C</span>.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-garnet px-8 py-4 text-base font-medium text-ink shadow-lg shadow-garnet/20 transition-colors hover:bg-garnet-bright"
            >
              <Icon name="Ruler" size={18} />
              Записаться на замер
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/15 px-8 py-4 text-base font-medium text-ink backdrop-blur-sm transition-colors hover:border-brass hover:text-brass-soft"
            >
              Смотреть коллекции
            </a>
          </div>

          <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:gap-14">
            {FACTS.map((f, i) => (
              <div key={i}>
                <div className="font-display text-3xl font-medium text-brass md:text-4xl">
                  {f.value}
                </div>
                <div className="label-mono mt-2 text-[10px] text-steel">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Скролл-подсказка */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-steel/50 md:block">
        <Icon name="ChevronDown" size={22} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
