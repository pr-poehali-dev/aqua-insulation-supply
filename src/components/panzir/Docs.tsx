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
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink">
          Качество подтверждено
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          {/* Плейсхолдер */}
          Технические условия, сертификаты пожарной безопасности и гарантийные
          обязательства.
        </p>

        {/* Штампы — 4 в ряд */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STAMPS.map((s) => (
            <div
              key={s.label}
              className="rounded-sm border border-white/10 bg-surface p-6 text-center"
            >
              <Icon name={s.icon} size={26} className="mx-auto text-brass" />
              <div className="mt-4 font-display text-base font-medium text-ink">
                {s.value}
              </div>
              <div className="label-mono mt-1.5 text-[10px] text-steel">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <SeamLine className="my-16" />

        {/* Паспорт изделия — отдельная карточка на тёмном фоне */}
        <MonoLabel>Паспорт изделия</MonoLabel>
        <div
          className="relative mt-6 rounded-sm border border-white/10 p-8 md:p-10"
          style={{ backgroundColor: '#0f1a2e' }}
        >
          <CornerRegs />
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-display text-xl font-medium text-ink">
              Паспорт изделия ПАНЦИРЬ
            </span>
            <span className="font-mono text-sm text-steel">№ 0000</span>
          </div>
          <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className="flex flex-col gap-1.5 border-l border-brass/40 pl-4"
              >
                <dt className="label-mono text-[10px] text-steel">{k}</dt>
                <dd className="font-mono text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Docs;