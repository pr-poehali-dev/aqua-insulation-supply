import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const MATERIALS = [
  {
    icon: 'Shield',
    code: 'АЛМ',
    title: 'Алюминиевое защитное покрытие',
    text: 'Для защиты тепло- и шумоизоляционных конструкций.',
    temp: 'от −60 до +120 °C',
  },
  {
    icon: 'Sparkles',
    code: 'АЛФ',
    title: 'Покрытие из алюминиевой фольги',
    text: 'Фольгированный покровный материал.',
    temp: 'от −60 до +120 °C',
  },
  {
    icon: 'Layers',
    code: 'МБР',
    title: 'Мембранное покрытие',
    text: 'Многослойный материал с армированием стеклосеткой.',
    temp: 'от −60 до +120 °C',
  },
  {
    icon: 'Droplets',
    code: 'ПВХ',
    title: 'Поливинилхлоридное покрытие',
    text: 'Однослойное или многослойное ПВХ-покрытие.',
    temp: 'от −30 до +60 °C',
  },
  {
    icon: 'Grid2x2',
    code: 'СТХ',
    title: 'Покрытие на основе стеклохолста',
    text: 'Покровный материал на основе стеклохолста.',
    temp: 'от −60 до +120 °C',
  },
  {
    icon: 'CircleDot',
    code: 'Окожушки',
    title: 'Металлические оболочки',
    text: 'Готовые металлические кожухи (алюминий, оцинкованная и нержавеющая сталь).',
    temp: null,
  },
];

const PARAMS = [
  'Покровные материалы изготавливаются по ТУ 5760-003-85495285-2015',
  'Металлические окожушки — по ТУ 25.99.29-001-85495285-2019',
  'Срок службы покровных материалов — более 25 лет',
  'Применение: внутри помещений и на наружных участках',
];

const Protective = () => {
  return (
    <section id="protective" className="relative bg-bg pb-24 md:pb-36">
      <div className="container relative z-10">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <MonoLabel>Продукт</MonoLabel>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Защитные материалы «ЗМ Панцирь»
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Линейка покровных и защитных материалов для тепло- и шумоизоляции.
            Защищают изоляцию от механических повреждений, ультрафиолета, влаги
            и атмосферных воздействий.
          </p>

          {/* Сетка материалов */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MATERIALS.map((m, i) => (
              <div
                key={i}
                className="flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                    <Icon name={m.icon} size={22} />
                  </div>
                  <span className="label-mono text-xs text-brass-soft">
                    {m.code}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {m.text}
                </p>
                {m.temp && (
                  <div className="mt-auto flex items-center gap-2 pt-5 text-sm text-slate-400">
                    <Icon
                      name="Thermometer"
                      size={16}
                      className="text-brass-soft"
                    />
                    {m.temp}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ключевые технические параметры */}
          <div className="mt-14">
            <MonoLabel>Ключевые технические параметры</MonoLabel>
            <ul className="mt-8 space-y-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-8 md:p-10">
              {PARAMS.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="mt-0.5 shrink-0 text-brass-soft"
                  />
                  <span className="leading-relaxed text-slate-100">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protective;
