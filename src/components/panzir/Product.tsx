import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const BADGES = [
  { icon: 'Thermometer', text: 'от –200 до +1200 °C' },
  { icon: 'Repeat', text: 'Съёмное исполнение' },
  { icon: 'Ruler', text: 'Индивидуальный крой' },
  { icon: 'FileText', text: 'ТУ 23.99.19-001-85495285-2018' },
];

const FUNCTIONS = [
  { image: '/functions/heatloss.webp', title: 'Снижение теплопотерь' },
  { image: '/functions/personnel.webp', title: 'Защита персонала' },
  { image: '/functions/noise.webp', title: 'Шумоизоляция' },
  { image: '/functions/condensate.webp', title: 'Контроль конденсата' },
  { image: '/functions/equipment.webp', title: 'Защита оборудования' },
  { image: '/functions/removable.webp', title: 'Съёмное исполнение' },
];

type SpecCard = {
  title: string;
  specs?: { label: string; value: string }[];
  note?: string;
};

const OUTER_LAYER: SpecCard[] = [
  {
    title: 'Стеклоткань с двухсторонней силиконовой пропиткой',
    specs: [
      { label: 'Горючесть', value: 'Г1' },
      { label: 'Рабочая температура', value: 'от −60 до +250 °C' },
    ],
  },
  {
    title: 'Стеклоткань с алюминизированным покрытием',
    specs: [
      { label: 'Горючесть', value: 'НГ' },
      { label: 'Рабочая температура', value: 'до +330 °C' },
    ],
  },
  {
    title: 'Стеклоткань с ПУ-покрытием, армированная металлической нитью',
    specs: [
      { label: 'Горючесть', value: 'Г1' },
      { label: 'Рабочая температура', value: 'до +450 °C' },
    ],
  },
  {
    title: 'Кремнезёмная ткань',
    specs: [
      { label: 'Горючесть', value: 'НГ' },
      { label: 'Рабочая температура', value: 'до +1100 °C' },
    ],
  },
];

const INNER_LAYER: SpecCard[] = [
  {
    title: 'Вспененный каучук',
    specs: [
      { label: 'Температура применения', value: 'от −200 до +150 °C' },
      { label: 'Теплопроводность', value: '0,038 Вт/(м·°C)' },
    ],
  },
  {
    title: 'Каменная вата',
    specs: [
      { label: 'Температура применения', value: 'до +680 °C' },
      { label: 'Теплопроводность', value: '0,034 Вт/(м·°C)' },
    ],
  },
  {
    title: 'Аэрогелевый войлок',
    specs: [
      { label: 'Температура применения', value: 'от −180 до +650 °C' },
      { label: 'Теплопроводность', value: '0,021 Вт/(м·°C)' },
    ],
    note: 'Рекомендуется для криогенных применений',
  },
  {
    title: 'Кремнезёмная вата',
    specs: [
      { label: 'Температура применения', value: 'до +1100 °C' },
      { label: 'Теплопроводность', value: '0,025 Вт/(м·°C)' },
    ],
  },
];

const FASTENERS: SpecCard[] = [
  { title: 'Пружинный замок' },
  { title: 'Люверсы' },
  { title: 'Металлические крючки' },
  { title: 'D-образные полукольца' },
  { title: 'Мультифиламентный ремень' },
  { title: 'Липучки ВЕЛКРО' },
];

const SpecTile = ({ card }: { card: SpecCard }) => (
  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-[#0E1B2B] transition-colors duration-300 hover:border-brass/40">
    {/* Место под фото */}
    <div className="relative flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-[#0A1420]">
      <Icon name="Image" size={28} className="text-steel/40" />
      <span className="label-mono absolute bottom-2 right-3 text-[9px] text-steel/30">
        фото
      </span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h4 className="font-display text-lg font-semibold leading-snug text-white">
        {card.title}
      </h4>
      {card.specs && (
        <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
          {card.specs.map((s, i) => (
            <div key={i} className="flex justify-between gap-4">
              <dt className="text-slate-400">{s.label}</dt>
              <dd className="text-right font-medium text-slate-200">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {card.note && (
        <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-brass-soft">
          <Icon name="Snowflake" size={14} className="mt-0.5 shrink-0" />
          {card.note}
        </p>
      )}
    </div>
  </div>
);

type CatalogItem = {
  icon: string;
  title: string;
  text: string;
  image?: string;
  featured?: boolean;
};

const CATALOG: CatalogItem[] = [
  {
    icon: 'ShieldHalf',
    title: 'Термочехлы ИТШМИ «Панцирь»',
    text: 'Съёмные тепло- и шумоизоляционные чехлы индивидуального кроя. Главный продукт компании. Температуры от −200 до +1200 °C.',
    image: '/product/pancir.webp',
    featured: true,
  },
  {
    icon: 'Layers',
    title: 'Маты «Вереница»',
    text: 'Амортизирующие и компенсационные маты для бесканальной прокладки тепловых сетей. Воспринимают температурные перемещения трубопроводов в грунте.',
    image: '/product/verenitsa.webp',
  },
];

const TECH_HIGHLIGHTS = [
  { value: 'от −200 до +1200 °C', label: 'Рабочая температура' },
  { value: 'до 98%', label: 'Снижение теплопотерь' },
  { value: 'до 35 дБ', label: 'Снижение шума' },
];

const TECH_SPECS_LEFT = [
  { label: 'Срок службы', value: 'до 25 лет' },
  { label: 'Гарантия', value: '2 года' },
  { label: 'Исполнение', value: 'съёмное, индивидуальный крой' },
];

const TECH_SPECS_RIGHT = [
  { label: 'Циклов монтажа/демонтажа', value: '500+' },
  { label: 'Технические условия', value: 'ТУ 23.99.19-001-85495285-2018' },
  { label: 'Теплопроводность', value: 'от 0,021 Вт/(м·°C)' },
];

const Product = () => {
  return (
    <section id="product" className="relative bg-bg py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Продукция</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Продукция
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Инженерные решения для теплоизоляции, защиты и опоры трубопроводов и
          оборудования.
        </p>

        {/* Каталог продукции */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CATALOG.map((c, i) => (
            <div
              key={i}
              className={`group relative flex aspect-[16/12] h-full w-full flex-col justify-end overflow-hidden rounded-lg border transition-colors duration-300 ${
                c.featured
                  ? 'border-brass/50 hover:border-brass'
                  : 'border-white/15 hover:border-brass/40'
              }`}
            >
              {c.image && (
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-2/3 bg-gradient-to-t from-[#050B13]/95 via-[#050B13]/70 to-transparent" />

              <div className="relative z-10 flex flex-col p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/50 bg-brass/20 text-brass-soft">
                  <Icon name={c.icon} size={24} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-200 md:text-lg">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Термочехлы «Панцирь» */}
        <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
          <MonoLabel>Продукт</MonoLabel>
          <h3 className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Термочехлы «Панцирь»
          </h3>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Съёмные тепло- и шумоизоляционные чехлы для арматуры, фланцевых
              соединений, клапанов, оборудования и трубопроводных узлов.
            </p>
            <p>
              Изготавливаются под конкретный узел и применяются для снижения
              теплопотерь, защиты персонала и обслуживания оборудования без
              демонтажа постоянной изоляции.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {BADGES.map((b, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2.5 rounded-sm border border-brass/30 bg-[#0E1B2B] px-4 py-3"
              >
                <Icon name={b.icon} size={18} className="text-brass-soft" />
                <span className="text-sm font-medium text-ink">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Основные функции */}
        <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
          <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Основные функции термочехлов
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Съёмные термочехлы применяются для изоляции отдельных узлов
            оборудования и трубопроводов, где требуется доступ для обслуживания,
            снижение теплопотерь и защита персонала.
          </p>

          <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
            {FUNCTIONS.map((f, i) => (
              <figure
                key={i}
                className="group cursor-pointer overflow-hidden rounded-lg border-2 border-[#050B13] shadow-lg shadow-black/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-brass/25 hover:ring-brass/50"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Конструкция термочехла */}
        <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
          <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Конструкция термочехла
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Конструкция термочехла подбирается под температурный режим (включая
            криогенные температуры до −196 °C), форму узла, условия эксплуатации
            и требования к быстрому демонтажу.
          </p>

          {/* 1. Наружный защитный слой */}
          <div className="mt-14">
            <MonoLabel>01 — Слой</MonoLabel>
            <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
              Наружный защитный слой
            </h4>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
              Наружный слой защищает теплоизоляционный материал от внешних
              воздействий, влаги и механических повреждений. Подбирается по
              температуре и условиям эксплуатации.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {OUTER_LAYER.map((c, i) => (
                <SpecTile key={i} card={c} />
              ))}
            </div>
          </div>

          {/* 2. Внутренний теплоизоляционный слой */}
          <div className="mt-16">
            <MonoLabel>02 — Слой</MonoLabel>
            <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
              Внутренний теплоизоляционный слой
            </h4>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
              Внутренний слой определяет теплоизоляционные свойства чехла. Для
              экстремально низких температур применяется аэрогелевый войлок.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {INNER_LAYER.map((c, i) => (
                <SpecTile key={i} card={c} />
              ))}
            </div>
          </div>

          {/* 3. Элементы крепления и фиксации */}
          <div className="mt-16">
            <MonoLabel>03 — Крепление</MonoLabel>
            <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
              Элементы крепления и фиксации
            </h4>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
              Крепления обеспечивают быстрый монтаж и демонтаж чехла. Ресурс
              основных типов креплений — от 500 до 1000+ циклов.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FASTENERS.map((c, i) => (
                <SpecTile key={i} card={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Технические характеристики */}
        <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
          <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Технические характеристики
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Параметры термочехла подбираются индивидуально под конкретный узел,
            температурный режим и условия эксплуатации.
          </p>

          {/* Главные показатели */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {TECH_HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="rounded-lg border border-brass/30 bg-[#0E1B2B] p-8"
              >
                <div className="font-display text-2xl font-semibold leading-tight text-brass-soft md:text-3xl">
                  {h.value}
                </div>
                <div className="mt-3 text-sm text-slate-300">{h.label}</div>
              </div>
            ))}
          </div>

          {/* Остальные характеристики */}
          <div className="mt-8 grid gap-x-12 gap-y-0 rounded-lg border border-white/15 bg-[#0E1B2B] p-8 md:grid-cols-2 md:p-10">
            <dl>
              {TECH_SPECS_LEFT.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-4 border-b border-white/10 py-4 last:border-b-0"
                >
                  <dt className="text-slate-400">{s.label}</dt>
                  <dd className="text-right font-medium text-slate-100">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
            <dl>
              {TECH_SPECS_RIGHT.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-4 border-white/10 py-4 md:border-b md:last:border-b-0"
                >
                  <dt className="text-slate-400">{s.label}</dt>
                  <dd className="text-right font-medium text-slate-100">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-6 text-sm text-steel">
            Точные параметры рассчитываются под задачу заказчика.
          </p>
        </div>

        {/* Гарантия и срок службы */}
        <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
          <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Гарантия и срок службы
          </h3>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name="ShieldCheck" size={22} />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-white">
                  2 года
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Гарантийный срок на все изделия.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name="Clock" size={22} />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-white">
                  до 25 лет
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Срок службы термочехлов при соблюдении условий эксплуатации.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-7 text-base leading-relaxed text-ink-muted md:p-8">
            <p>
              Изделия рассчитаны на многократный монтаж и демонтаж
              (500+ циклов).
            </p>
            <p>
              После окончания гарантийного срока сохраняется возможность
              сервисного обслуживания и замены отдельных элементов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;