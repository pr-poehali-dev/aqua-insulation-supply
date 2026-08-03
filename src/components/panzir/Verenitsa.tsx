import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const CONSTRUCTION = [
  {
    icon: 'Layers',
    title: 'Амортизирующий слой',
    text: 'Вспененный полиэтилен или каучук.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защитные слои',
    text: 'Внутренний и наружный слой из стеклоткани с силиконовым покрытием.',
  },
  {
    icon: 'Link',
    title: 'Система крепления',
    text: 'Ремни, D-образные кольца, липучки Велкро.',
  },
];

const PARAMS = [
  { label: 'Диаметры трубопроводов', value: '32–1420 мм' },
  { label: 'Толщина мата', value: '50–200 мм (по расчёту)' },
  { label: 'Температура применения', value: 'от −40 до +90 °C' },
  { label: 'Срок службы', value: 'до 50 лет' },
  { label: 'Гарантия', value: '3–5 лет' },
];

const Verenitsa = () => {
  return (
    <section id="verenitsa" className="relative bg-bg pb-24 md:pb-36">
      <div className="container relative z-10">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <MonoLabel>Продукт</MonoLabel>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Маты амортизирующие «Вереница»
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Амортизирующие (компенсационные/демпфирующие) маты «Вереница»
              применяются при бесканальной прокладке тепловых сетей и
              технологических трубопроводов.
            </p>
            <p>
              Основная задача — воспринимать температурные перемещения труб в
              грунте и снижать нагрузку на изоляцию и грунт.
            </p>
          </div>

          {/* Конструкция */}
          <div className="mt-14">
            <MonoLabel>Конструкция</MonoLabel>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CONSTRUCTION.map((c, i) => (
                <div
                  key={i}
                  className="flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                    <Icon name={c.icon} size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ключевые параметры */}
          <div className="mt-14">
            <MonoLabel>Ключевые параметры</MonoLabel>
            <dl className="mt-8 rounded-lg border border-white/15 bg-[#0E1B2B] p-8 md:p-10">
              {PARAMS.map((p, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-4 border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className="text-slate-400">{p.label}</dt>
                  <dd className="text-right font-medium text-slate-100">
                    {p.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-steel">
              <Icon
                name="Info"
                size={16}
                className="mt-0.5 shrink-0 text-brass-soft"
              />
              Маты выпускаются для прямых участков и отводов (30°, 45°, 60°, 90°).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verenitsa;
