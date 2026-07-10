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
    <section id="docs" className="relative bg-bg-alt py-20 md:py-28">
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

        {/* Штампы */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAMPS.map((s) => (
            <div
              key={s.label}
              className="rounded-sm border border-dashed border-brass/50 bg-surface p-6 text-center"
            >
              <Icon
                name={s.icon}
                size={28}
                className="mx-auto text-brass"
              />
              <div className="mt-4 font-display text-lg font-semibold text-ink">
                {s.value}
              </div>
              <div className="label-mono mt-1 text-[10px] text-steel">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <SeamLine className="my-16" />

        {/* Паспорт изделия */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MonoLabel>Паспорт изделия</MonoLabel>
            <h3 className="mt-4 font-display text-2xl font-medium text-ink">
              Формальный документ
            </h3>
            <p className="mt-4 text-ink-muted">
              {/* Плейсхолдер */}
              К каждому чехлу прилагается паспорт с размерным кодом и
              характеристиками.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative rounded-sm border border-border/60 bg-surface p-8">
              <CornerRegs />
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <span className="font-display text-xl font-semibold text-ink">
                  Паспорт изделия ПАНЦИРЬ
                </span>
                <span className="font-mono text-sm text-steel">№ 0000</span>
              </div>
              <dl className="mt-6 grid gap-5 sm:grid-cols-2">
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
                    className="flex flex-col gap-1 border-l border-brass/40 pl-4"
                  >
                    <dt className="label-mono text-[10px] text-steel">{k}</dt>
                    <dd className="font-mono text-sm text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Медиа-плейсхолдер (видео) */}
        <div className="relative mt-16 aspect-[21/9] overflow-hidden rounded-sm bg-surface">
          <span className="label-mono absolute bottom-3 right-4 text-[9px] text-steel/30">
            видео
          </span>
        </div>
      </div>
    </section>
  );
};

export default Docs;