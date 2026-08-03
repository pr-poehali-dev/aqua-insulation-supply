import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const ITEMS = [
  {
    icon: 'Scissors',
    title: 'Индивидуальный крой',
    text: 'Изготавливаем под конкретный узел и оборудование.',
  },
  {
    icon: 'RefreshCw',
    title: 'Многоразовое использование',
    text: 'Рассчитаны на 500+ циклов монтажа и демонтажа.',
  },
  {
    icon: 'ThermometerSnowflake',
    title: 'Снижение теплопотерь',
    text: 'До 98% — сохранение энергии и снижение затрат.',
  },
  {
    icon: 'Volume2',
    title: 'Снижение шума',
    text: 'До 30–35 дБ — дополнительная акустическая защита.',
  },
  {
    icon: 'Unlock',
    title: 'Быстрый доступ',
    text: 'Снимаются и устанавливаются без разрушения изоляции.',
  },
  {
    icon: 'Thermometer',
    title: 'Широкий температурный диапазон',
    text: 'От −200 до +1200 °C.',
  },
  {
    icon: 'Factory',
    title: 'Собственное производство',
    text: 'Полный цикл: от замера до изготовления и шеф-монтажа.',
  },
  {
    icon: 'CalendarClock',
    title: 'Долгий срок службы',
    text: 'До 25 лет при соблюдении условий эксплуатации.',
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="relative bg-bg py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Почему мы</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Преимущества
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Почему выбирают решения «ПАНЦИРЬ».
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name={item.icon} size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
