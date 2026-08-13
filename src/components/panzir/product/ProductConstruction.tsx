import Icon from '@/components/ui/icon';
import { MonoLabel } from '../PatternDecor';
import { FASTENERS, INNER_LAYER, OUTER_LAYER, SpecCard } from './productData';

const SpecTile = ({ card }: { card: SpecCard }) => (
  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-[#0E1B2B] transition-colors duration-300 hover:border-brass/40">
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0A1420]">
      {card.image ? (
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <Icon name="Image" size={28} className="text-steel/40" />
      )}
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

const ProductConstruction = () => (
  <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
    <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
      Конструкция термочехла
    </h3>
    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
      Конструкция термочехла подбирается под температурный режим (включая
      криогенные температуры до −196 °C), форму узла, условия эксплуатации и
      требования к быстрому демонтажу.
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
        Крепления обеспечивают быстрый монтаж и демонтаж чехла. Ресурс основных
        типов креплений — от 500 до 1000+ циклов.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FASTENERS.map((c, i) => (
          <SpecTile key={i} card={c} />
        ))}
      </div>
    </div>
  </div>
);

export default ProductConstruction;