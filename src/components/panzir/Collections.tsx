import Icon from '@/components/ui/icon';
import { MonoLabel, SeamLine, CornerRegs, Notch } from './PatternDecor';

const LAYERS = [
  {
    name: 'Ткань',
    role: 'наружный слой',
    items: ['Кремнезём', 'Стеклоткань с ПУ', 'Базальт'],
    temp: 'до +650 °C',
  },
  {
    name: 'Наполнитель',
    role: 'изоляция',
    items: ['Базальтовое волокно', 'Игольчатый мат', 'Аэрогель'],
    temp: 'до +700 °C',
  },
  {
    name: 'Фурнитура',
    role: 'крепёж',
    items: ['Стяжки', 'Люверсы', 'Стальная проволока'],
    temp: 'нерж. сталь',
  },
];

const Collections = () => {
  return (
    <section id="collections" className="relative bg-bg py-24 md:py-36">
      <div className="container">
        <MonoLabel>Коллекции</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink">
          Две линии кроя
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          {/* Плейсхолдер вводного текста */}
          Готовая коллекция для типовой арматуры и индивидуальный пошив под
          нестандартное оборудование.
        </p>

        {/* Две карточки линий */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Прет-а-порте */}
          <div className="relative rounded-sm border border-border/60 bg-surface p-8 lg:col-span-2">
            <MonoLabel>Прет-а-порте</MonoLabel>
            <h3 className="mt-4 font-display text-2xl font-medium text-ink">
              Коллекция
            </h3>
            <p className="mt-3 text-ink-muted">
              {/* Плейсхолдер */}
              Типовые чехлы на стандартную арматуру. Срок 3–14 дней.
            </p>
            <div className="label-mono mt-6 text-[11px] text-brass">
              3–14 дней
            </div>
          </div>

          {/* От кутюр — флагман */}
          <div className="relative overflow-hidden rounded-sm border border-garnet/60 bg-garnet-wine p-8 lg:col-span-3">
            <CornerRegs />
            <div className="flex items-center gap-3">
              <MonoLabel>От кутюр</MonoLabel>
              <span className="label-mono rounded-sm bg-garnet px-2 py-0.5 text-[10px] text-ink">
                флагман
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl font-medium text-ink md:text-4xl">
              Индивидуальный пошив
            </h3>
            <p className="mt-3 max-w-lg text-ink-muted">
              {/* Плейсхолдер */}
              Крой под нестандартное оборудование по замерам и 3D-скану объекта.
            </p>
            <a
              href="#contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-garnet px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-garnet-bright"
            >
              <Icon name="Ruler" size={16} />
              Заказать пошив
            </a>
          </div>
        </div>

        <SeamLine className="my-16" />

        {/* Конструкция — три слоя */}
        <MonoLabel>Конструкция</MonoLabel>
        <h3 className="mt-4 font-display text-2xl font-medium text-ink">
          Три слоя чехла
        </h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              className="relative rounded-sm border border-border/60 bg-surface p-6"
            >
              <Notch className="absolute left-6 top-0 -translate-y-full rotate-180" />
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xl font-medium text-ink">
                  {layer.name}
                </span>
                <span className="font-mono text-xs text-steel">
                  0{i + 1}
                </span>
              </div>
              <div className="label-mono mt-1 text-[10px] text-steel">
                {layer.role}
              </div>
              <ul className="mt-5 space-y-2">
                {layer.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-ink-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-brass" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border/60 pt-3">
                <span className="font-mono text-sm text-brass">
                  {layer.temp}
                </span>
              </div>
            </div>
          ))}
        </div>

        <SeamLine className="my-16" />

        {/* Маркировка */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MonoLabel>Как читать маркировку</MonoLabel>
            <h3 className="mt-4 font-display text-2xl font-medium text-ink">
              Код изделия
            </h3>
            <p className="mt-4 text-ink-muted">
              {/* Плейсхолдер */}
              Каждый чехол получает буквенно-цифровой код — тип, материал,
              размер и температурный класс.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-border/60 bg-surface p-6">
              <div className="font-mono text-2xl text-brass md:text-3xl">
                PZ-K-BF-DN200-T650
              </div>
              <SeamLine className="my-5" />
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {[
                  ['PZ', 'бренд'],
                  ['K', 'тип: клапан'],
                  ['BF', 'базальт'],
                  ['DN200', 'диаметр'],
                  ['T650', 'до +650 °C'],
                ].map(([code, desc]) => (
                  <div key={code}>
                    <dt className="font-mono text-sm text-ink">{code}</dt>
                    <dd className="mt-1 text-xs text-ink-muted">{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Атмосферный визуал */}
        <div className="relative mt-16 aspect-[21/9] overflow-hidden rounded-sm">
          <img
            src="https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/2e21b767-e8e9-412d-9672-d11fc72f939f.jpg"
            alt="Термочехол ПАНЦИРЬ крупным планом"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Collections;