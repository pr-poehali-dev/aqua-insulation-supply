import Icon from '@/components/ui/icon';
import { MonoLabel } from '../PatternDecor';
import { CATALOG } from './productData';

const scrollTo = (id?: string) => {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const ProductCatalog = () => (
  <>
    <div className="text-center">
      <MonoLabel centered>Продукция</MonoLabel>
      <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
        Продукция
      </h2>
    </div>
    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
      Инженерные решения для теплоизоляции, защиты и опоры трубопроводов и
      оборудования.
    </p>

    {/* Каталог продукции */}
    <div className="mt-12 grid gap-8 md:grid-cols-2">
      {CATALOG.map((c, i) => (
        <button
          key={i}
          type="button"
          onClick={() => scrollTo(c.target)}
          aria-label={`Подробнее: ${c.title}`}
          className={`group relative flex aspect-[16/12] h-full w-full flex-col justify-end overflow-hidden rounded-lg border text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${
            c.featured
              ? 'border-brass/50 hover:border-brass'
              : 'border-white/15 hover:border-brass/60'
          }`}
        >
          {c.image && (
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
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
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brass-soft transition-colors group-hover:text-white">
              Подробнее
              <Icon
                name="ArrowRight"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </button>
      ))}
    </div>
  </>
);

export default ProductCatalog;