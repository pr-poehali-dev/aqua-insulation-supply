import Icon from '@/components/ui/icon';
import { MonoLabel } from '../PatternDecor';
import { BADGES, CATALOG } from './productData';

const ProductCatalog = () => (
  <>
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
  </>
);

export default ProductCatalog;
