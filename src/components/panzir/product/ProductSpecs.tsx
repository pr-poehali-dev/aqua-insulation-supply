import {
  TECH_HIGHLIGHTS,
  TECH_SPECS_LEFT,
  TECH_SPECS_RIGHT,
} from './productData';

const ProductSpecs = () => (
  <>
    {/* Технические характеристики */}
    <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
      <h3 className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
        Технические характеристики
      </h3>
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-ink-muted">
        Параметры термочехла подбираются индивидуально под конкретный узел,
        температурный режим и условия эксплуатации.
      </p>

      {/* Главные показатели */}
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {TECH_HIGHLIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex flex-col rounded-lg border border-brass/30 bg-[#0E1B2B] p-8"
          >
            <div className="font-display text-2xl font-semibold leading-tight text-brass-soft md:text-3xl">
              {h.value}
            </div>
            <div className="mt-3 text-sm text-slate-300">{h.label}</div>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-ink-muted">
              {h.text}
            </p>
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
  </>
);

export default ProductSpecs;