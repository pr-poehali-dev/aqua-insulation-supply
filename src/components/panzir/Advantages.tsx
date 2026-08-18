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

const COMPARISONS = [
  {
    title: 'Панцирь vs Несъёмная изоляция',
    subtitle: 'напыление / скорлупы',
    otherTitle: 'Несъёмная изоляция',
    other: [
      'При обслуживании приходится разрушать',
      'Повторный монтаж требует восстановления',
      'Высокий риск попадания влаги',
      'Нет возможности быстрого доступа',
    ],
    panzir: [
      'Снимаются и ставятся без разрушения',
      'Многоразовое использование',
      'Сохраняют герметичность',
      'Быстрый доступ к узлу',
    ],
    photo: '/comparison/insulation.webp',
    photoLabel: 'Слева — несъёмная изоляция, справа — термочехол «Панцирь»',
  },
  {
    title: 'Панцирь vs Металлические короба',
    subtitle: null,
    otherTitle: 'Металлические короба',
    other: [
      'Тяжёлые и громоздкие',
      'Сложный монтаж/демонтаж',
      'Риск образования мостиков холода',
      'При повреждении теряют герметичность',
    ],
    panzir: [
      'Лёгкие и гибкие',
      'Быстрый монтаж без спецтехники',
      'Плотное прилегание без мостиков холода',
      'Сохраняют форму и герметичность',
    ],
    photo: '/comparison/box.webp',
    photoLabel: 'Слева — металлический короб, справа — термочехол «Панцирь»',
  },
  {
    title: 'Панцирь vs Типичные термочехлы',
    subtitle: null,
    otherTitle: 'Типичные чехлы на рынке',
    other: [
      'Часто теряют форму после нескольких съёмов',
      'Утеплитель сыпется',
      'Слабые крепления',
      'Плохое прилегание к узлу',
      'Низкий ресурс циклов',
    ],
    panzir: [
      'Держат форму',
      'Стабильный утеплитель, не сыпется',
      'Усиленные крепления (ресурс 500+ циклов)',
      'Индивидуальный крой под узел',
      'Высокий срок службы',
    ],
    photo: null,
    photoLabel: 'Фото примеров плохих чехлов',
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

        {/* Сравнение с другими решениями */}
        <div className="mt-24 border-t border-white/10 pt-16 md:mt-32 md:pt-24">
          <MonoLabel>Сравнение</MonoLabel>
          <h3 className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Сравнение с другими решениями
          </h3>

          <div className="mt-14 space-y-6">
            {COMPARISONS.map((c, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/15 bg-[#0E1B2B] p-7 md:p-9"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="font-display text-xl font-semibold text-white">
                    {c.title}
                  </h4>
                  {c.subtitle && (
                    <span className="label-mono text-[11px] text-steel">
                      {c.subtitle}
                    </span>
                  )}
                </div>

                {c.photo && (
                  <figure className="mt-7">
                    <div className="overflow-hidden rounded-md border border-white/10 bg-black/20">
                      <img
                        src={c.photo}
                        alt={c.photoLabel}
                        loading="lazy"
                        className="w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 label-mono text-[11px] leading-relaxed text-steel">
                      {c.photoLabel}
                    </figcaption>
                  </figure>
                )}

                <div className="mt-7 grid gap-5 lg:grid-cols-2">
                  {/* Конкурент */}
                  <div className="rounded-md border border-white/10 bg-black/20 p-6">
                    <span className="label-mono text-[11px] text-steel">
                      {c.otherTitle}
                    </span>
                    <ul className="mt-4 space-y-3">
                      {c.other.map((t, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Icon
                            name="X"
                            size={18}
                            className="mt-0.5 shrink-0 text-red-400/80"
                          />
                          <span className="text-sm leading-relaxed text-slate-400">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Панцирь */}
                  <div className="rounded-md border border-brass/30 bg-brass/[0.06] p-6">
                    <span className="label-mono text-[11px] text-brass-soft">
                      Термочехлы «Панцирь»
                    </span>
                    <ul className="mt-4 space-y-3">
                      {c.panzir.map((t, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Icon
                            name="Check"
                            size={18}
                            className="mt-0.5 shrink-0 text-brass-soft"
                          />
                          <span className="text-sm leading-relaxed text-slate-100">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!c.photo && (
                  <div className="mt-5 flex h-40 items-center justify-center rounded-md border border-dashed border-white/15 bg-black/20 md:h-48">
                    <div className="flex flex-col items-center gap-2 text-steel/60">
                      <Icon name="ImageOff" size={24} />
                      <span className="label-mono text-[11px]">
                        {c.photoLabel}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;