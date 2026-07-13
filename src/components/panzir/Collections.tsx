import Icon from '@/components/ui/icon';
import { MonoLabel, SeamLine } from './PatternDecor';

const IMG_PRET =
  'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/218f058b-3be1-483b-a767-2e3646da0f45.jpg';
const IMG_COUTURE =
  'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/8235e421-beef-4734-a78b-31adb7fc2dd4.jpg';

const LAYERS = [
  {
    icon: 'Layers',
    name: 'Ткань',
    role: 'наружный слой',
    material: 'Кремнезём · стеклоткань · базальт',
    temp: 650,
    tempLabel: 'до +650 °C',
  },
  {
    icon: 'Flame',
    name: 'Наполнитель',
    role: 'изоляция',
    material: 'Базальтовое волокно · аэрогель',
    temp: 700,
    tempLabel: 'до +700 °C',
  },
  {
    icon: 'Wrench',
    name: 'Фурнитура',
    role: 'крепёж',
    material: 'Стяжки · люверсы · нерж. сталь',
    temp: null,
    tempLabel: 'нерж. сталь',
  },
];

const MARKING = [
  ['PZ', 'бренд'],
  ['K', 'клапан'],
  ['BF', 'базальт'],
  ['DN200', 'диаметр'],
  ['T650', '+650 °C'],
];

const Collections = () => {
  return (
    <section id="collections" className="relative bg-bg py-24 md:py-36">
      <div className="container">
        <MonoLabel>Коллекции</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Две линии кроя
        </h2>

        {/* Две карточки линий */}
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Прет-а-порте */}
          <div className="group relative flex flex-col overflow-hidden rounded-sm border border-white/10 bg-surface lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={IMG_PRET}
                alt="Коллекция ПАНЦИРЬ — типовые термочехлы"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <MonoLabel>Прет-а-порте</MonoLabel>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                Коллекция
              </h3>
              <p className="mt-3 text-ink-muted">
                Готовые чехлы на типовую арматуру. Со склада — по лекалам.
              </p>
              <div className="label-mono mt-auto pt-6 text-[11px] text-brass">
                срок 3–14 дней
              </div>
            </div>
          </div>

          {/* От кутюр — флагман */}
          <div className="group relative flex flex-col overflow-hidden rounded-sm border border-garnet/50 bg-garnet-wine shadow-xl shadow-garnet/10 lg:col-span-3">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={IMG_COUTURE}
                alt="От кутюр — индивидуальный пошив термочехлов ПАНЦИРЬ"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garnet-wine via-garnet-wine/30 to-transparent" />
              <span className="label-mono absolute right-5 top-5 rounded-sm bg-garnet px-2.5 py-1 text-[10px] text-ink">
                флагман
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8 md:p-10">
              <MonoLabel>От кутюр</MonoLabel>
              <h3 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
                Индивидуальный пошив
              </h3>
              <p className="mt-3 max-w-lg text-ink-muted">
                Крой под нестандартное оборудование по замерам и 3D-скану
                объекта. Каждое изделие — единственное.
              </p>
              <a
                href="#contacts"
                className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-sm bg-garnet px-7 py-3.5 text-sm font-medium text-ink shadow-lg shadow-garnet/30 transition-colors hover:bg-garnet-bright"
              >
                <Icon name="Ruler" size={16} />
                Заказать пошив
              </a>
            </div>
          </div>
        </div>

        <SeamLine className="my-20 md:my-28" />

        {/* Конструкция — три слоя */}
        <MonoLabel>Конструкция</MonoLabel>
        <h3 className="mt-6 font-display text-2xl font-medium text-ink md:text-3xl">
          Три слоя чехла
        </h3>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-surface p-8 transition-colors hover:border-brass/40"
            >
              <span className="pointer-events-none absolute right-6 top-6 font-mono text-5xl text-white/5">
                0{i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brass/10">
                <Icon name={layer.icon} size={22} className="text-brass" />
              </span>
              <h4 className="mt-6 font-display text-xl font-medium text-ink">
                {layer.name}
              </h4>
              <div className="label-mono mt-1 text-[10px] text-steel">
                {layer.role}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                {layer.material}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-base text-brass-soft">
                    {layer.tempLabel}
                  </span>
                  {layer.temp && <Icon name="Thermometer" size={16} className="text-garnet-bright" />}
                </div>
                {layer.temp && (
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brass to-garnet-bright"
                      style={{ width: `${(layer.temp / 1250) * 100}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <SeamLine className="my-20 md:my-28" />

        {/* Маркировка */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <MonoLabel>Маркировка</MonoLabel>
            <h3 className="mt-6 font-display text-2xl font-medium text-ink md:text-3xl">
              Код изделия
            </h3>
            <p className="mt-4 text-ink-muted">
              Тип, материал, размер и температурный класс — в одном коде.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-sm border border-white/10 bg-surface">
              <div className="flex items-center gap-3 bg-bg-alt px-8 py-7">
                <span className="h-2 w-2 rounded-full bg-garnet-bright" />
                <span className="font-mono text-2xl tracking-tight text-brass-soft md:text-3xl">
                  PZ-K-BF-DN200-T650
                </span>
              </div>
              <dl className="grid grid-cols-2 divide-x divide-y divide-white/5 sm:grid-cols-5">
                {MARKING.map(([code, desc]) => (
                  <div key={code} className="px-6 py-5">
                    <dt className="font-mono text-sm text-ink">{code}</dt>
                    <dd className="label-mono mt-1.5 text-[9px] text-steel">
                      {desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
