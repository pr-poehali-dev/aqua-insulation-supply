import Icon from '@/components/ui/icon';
import { MonoLabel, CornerRegs, SeamLine } from './PatternDecor';

const STAMPS = [
  { icon: 'FileCheck', value: 'ТУ 00.00.00', label: 'номер ТУ' },
  { icon: 'MapPin', value: 'Сделано в России', label: 'производство' },
  { icon: 'Flame', value: 'НГ / Г1', label: 'класс горючести' },
  { icon: 'ShieldCheck', value: '24 месяца', label: 'гарантия' },
];

const Docs = () => {
  return (
    <section id="docs" className="relative bg-bg-alt py-24 md:py-36">
      <div className="container">
        <MonoLabel>Документация</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Качество подтверждено
        </h2>

        {/* Штампы — 4 в ряд */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {STAMPS.map((s) => (
            <div
              key={s.label}
              className="rounded-sm border border-white/10 p-7 text-center shadow-lg shadow-black/20 transition-colors hover:border-brass/40"
              style={{ backgroundColor: '#111f35' }}
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-sm bg-brass/10 ring-1 ring-brass/20">
                <Icon name={s.icon} size={26} className="text-brass" />
              </span>
              <div className="mt-5 font-display text-base font-medium text-white">
                {s.value}
              </div>
              <div className="label-mono mt-1.5 text-[10px] text-steel">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <SeamLine className="my-20 md:my-24" />

        {/* Паспорт изделия — отдельная заметная карточка */}
        <MonoLabel>Паспорт изделия</MonoLabel>
        <div
          className="relative mt-6 overflow-hidden rounded-sm border border-brass/25 shadow-xl shadow-black/30"
          style={{ backgroundColor: '#0f1a2e' }}
        >
          <CornerRegs />
          {/* Шапка */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/20 px-8 py-6 md:px-10">
            <div className="flex items-center gap-3">
              <Icon name="FileBadge" size={22} className="text-brass" />
              <span className="font-display text-xl font-medium text-white md:text-2xl">
                Паспорт изделия ПАНЦИРЬ
              </span>
            </div>
            <span className="font-mono text-sm text-brass-soft">№ 0000</span>
          </div>

          {/* Таблица характеристик */}
          <dl className="grid sm:grid-cols-2">
            {[
              ['Размерный код', 'PZ-K-BF-DN200-T650'],
              ['Тип изделия', 'чехол на клапан'],
              ['Наполнитель', 'базальтовое волокно'],
              ['Рабочая температура', 'до +650 °C'],
              ['Класс горючести', 'НГ'],
              ['Дата пошива', '00.00.0000'],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between gap-6 border-b border-white/5 px-8 py-5 sm:odd:border-r sm:odd:border-r-white/5 md:px-10"
              >
                <dt className="label-mono text-[10px] text-steel">{k}</dt>
                <dd className="text-right font-mono text-sm text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Docs;