import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const SPECS = [
  { label: 'Длина', value: '3000 мм' },
  { label: 'Толщина стенки', value: '50–150 мм' },
  { label: 'Группа горючести', value: 'НГ' },
  { label: 'Предел огнестойкости', value: 'EI 60 / 90 / 120 / 180' },
  { label: 'Температурный диапазон', value: 'от −50 до +650 °C' },
  { label: 'Кратковременно', value: 'до +1000 °C' },
  { label: 'Срок службы', value: 'не менее 25 лет' },
  { label: 'Гарантия', value: '36 месяцев' },
];

const Ozv = () => {
  return (
    <section id="ozv" className="relative bg-bg pb-24 md:pb-36">
      <div className="container relative z-10">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <MonoLabel>Продукт</MonoLabel>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Огнезащитные вставки ОЗВ-3000
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Огнезащитная трубопроводная вставка «Панцирь» ОЗВ-3000 — разъёмная
            цилиндрическая конструкция длиной 3000 мм.
          </p>

          {/* Назначение */}
          <div className="mt-12">
            <MonoLabel>Назначение</MonoLabel>
            <div className="mt-8 flex max-w-3xl items-start gap-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-7 md:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name="Flame" size={22} />
              </div>
              <p className="leading-relaxed text-slate-100">
                Предотвращение распространения огня по теплоизоляционным
                конструкциям трубопроводов тепловых сетей при подземной
                (подвальной) и канальной прокладке в зданиях I и II степеней
                огнестойкости.
              </p>
            </div>
          </div>

          {/* Основные характеристики */}
          <div className="mt-12">
            <MonoLabel>Основные характеристики</MonoLabel>
            <dl className="mt-8 grid gap-x-12 gap-y-0 rounded-lg border border-white/15 bg-[#0E1B2B] p-8 md:grid-cols-2 md:p-10">
              {SPECS.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-4 border-b border-white/10 py-4 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
                >
                  <dt className="text-slate-400">{s.label}</dt>
                  <dd className="text-right font-medium text-slate-100">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Материал и монтаж */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name="Layers" size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Материал
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Высокотемпературное базальтовое волокно повышенной плотности в
                  защитной оболочке.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name="Wrench" size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Монтаж
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Разъёмная конструкция (2–4 секции). Устанавливается с
                  перекрытием существующей изоляции не менее 100 мм с каждой
                  стороны.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ozv;
