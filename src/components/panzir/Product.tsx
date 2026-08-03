import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const BADGES = [
  { icon: 'Thermometer', text: 'от –200 до +1200 °C' },
  { icon: 'Repeat', text: 'Съёмное исполнение' },
  { icon: 'Ruler', text: 'Индивидуальный крой' },
  { icon: 'FileText', text: 'ТУ 23.99.19-001-85495285-2018' },
];

const FUNCTIONS = [
  {
    icon: 'ThermometerSnowflake',
    title: 'Снижение теплопотерь',
    text: 'Ограничение тепловых потерь на арматуре, фланцах, клапанах и трубопроводах.',
  },
  {
    icon: 'HardHat',
    title: 'Защита персонала',
    text: 'Снижение риска контакта с горячими поверхностями при эксплуатации и обслуживании.',
  },
  {
    icon: 'Volume2',
    title: 'Шумоизоляция',
    text: 'Снижение уровня шума на отдельных узлах оборудования и трубопроводах.',
  },
  {
    icon: 'Droplets',
    title: 'Контроль конденсата',
    text: 'Ограничение образования конденсата на изолируемых поверхностях.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита оборудования',
    text: 'Дополнительная защита арматуры и узлов от внешних воздействий и загрязнений.',
  },
  {
    icon: 'Repeat',
    title: 'Съёмное исполнение',
    text: 'Возможность быстрого демонтажа и повторной установки при обслуживании и ремонте.',
  },
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
  featured?: boolean;
};

const CATALOG: CatalogItem[] = [
  {
    icon: 'ShieldHalf',
    title: 'Термочехлы ИТШМИ «Панцирь»',
    text: 'Съёмные тепло- и шумоизоляционные чехлы индивидуального кроя. Главный продукт компании. Температуры от −200 до +1200 °C.',
    featured: true,
  },
  {
    icon: 'Layers',
    title: 'Маты «Вереница»',
    text: 'Амортизирующие и компенсационные маты для бесканальной прокладки тепловых сетей. Воспринимают температурные перемещения трубопроводов в грунте.',
  },
  {
    icon: 'GitFork',
    title: 'СОП «Периметр»',
    text: 'Опорно-подвесная система. Предотвращает образование мостиков холода в местах крепления труб.',
  },
  {
    icon: 'CircleDot',
    title: 'СОП «Базис»',
    text: 'Опорные кольца и системы опор для трубопроводов. Инженерные решения для промышленных и судовых объектов.',
  },
  {
    icon: 'Flame',
    title: 'ОЗВ-3000',
    text: 'Огнезащитные трубопроводные вставки. Создают противопожарные разрывы в теплоизоляции (EI 60–180).',
  },
  {
    icon: 'ShieldCheck',
    title: 'ЗМ Панцирь',
    text: 'Защитные материалы: алюминиевые ленты, мембраны, стеклоткани. Защита изоляции от влаги, УФ и механических повреждений.',
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
        <MonoLabel>Каталог</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Каталог продукции
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Инженерные решения для теплоизоляции, защиты и опоры трубопроводов и
          оборудования.
        </p>

        {/* Каталог продукции */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CATALOG.map((c, i) => (
            <div
              key={i}
              className={
                c.featured
                  ? 'group relative flex h-full flex-col rounded-lg border border-brass/50 bg-gradient-to-b from-brass/[0.12] to-[#0E1B2B] p-7 shadow-[0_0_0_1px_rgba(197,160,89,0.15)] transition-colors duration-300 hover:border-brass'
                  : 'group flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40'
              }
            >
              {c.featured && (
                <span className="label-mono absolute right-5 top-5 text-[10px] text-brass-soft">
                  Флагман
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name={c.icon} size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {c.text}
              </p>
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

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FUNCTIONS.map((f, i) => (
              <div
                key={i}
                className="group flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                  <Icon name={f.icon} size={22} />
                </div>
                <h4 className="mt-5 font-display text-xl font-semibold text-white">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {f.text}
                </p>
              </div>
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
      </div>
    </section>
  );
};

export default Product;