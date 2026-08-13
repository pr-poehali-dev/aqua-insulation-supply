import Icon from '@/components/ui/icon';
import {
  TECH_HIGHLIGHTS,
  TECH_SPECS_LEFT,
  TECH_SPECS_RIGHT,
} from './productData';

const ProductSpecs = () => (
  <>
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
        <p>Изделия рассчитаны на многократный монтаж и демонтаж (500+ циклов).</p>
        <p>
          После окончания гарантийного срока сохраняется возможность сервисного
          обслуживания и замены отдельных элементов.
        </p>
      </div>
    </div>
  </>
);

export default ProductSpecs;
