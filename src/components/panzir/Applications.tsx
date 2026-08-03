import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const AREAS = [
  {
    icon: 'Zap',
    title: 'Энергетика',
    text: 'Тепловые и атомные станции, котельные, турбинное оборудование, паропроводы и арматура.',
    products: 'Термочехлы ИТШМИ, огнезащитные вставки ОЗВ-3000, защитные материалы ЗМ.',
  },
  {
    icon: 'Fuel',
    title: 'Нефтегаз',
    text: 'Нефтеперерабатывающие и газоперерабатывающие заводы, месторождения, трубопроводы и запорная арматура.',
    products: 'Термочехлы, защитные материалы ЗМ, системы опор.',
  },
  {
    icon: 'Ship',
    title: 'Судостроение',
    text: 'Судовые системы, арматура, трубопроводы и оборудование судов и кораблей, включая объекты с криогенными температурами.',
    products: 'Термочехлы ИТШМИ, СОП, защитные материалы ЗМ.',
  },
  {
    icon: 'Building2',
    title: 'Промышленное и гражданское строительство',
    text: 'Инженерные системы зданий, тепловые пункты, вентиляционные и технологические сети.',
    products: 'Термочехлы, СОП «Периметр», защитные материалы.',
  },
  {
    icon: 'Thermometer',
    title: 'Тепловые сети и ЖКХ',
    text: 'Бесканальная и канальная прокладка тепловых сетей, ЦТП, ИТП, объекты жилищно-коммунального хозяйства.',
    products: 'Маты «Вереница», огнезащитные вставки ОЗВ-3000, термочехлы.',
  },
  {
    icon: 'Factory',
    title: 'Заводы и производства',
    text: 'Химические, металлургические и другие промышленные предприятия. Защита технологического оборудования, трубопроводов и арматуры.',
    products: 'Термочехлы, защитные материалы ЗМ, системы опор.',
  },
];

const Applications = () => {
  return (
    <section id="applications" className="relative bg-bg-alt py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Применение</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Области применения
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Продукция применяется на объектах, где требуется надёжная тепло-,
          шумо- и огнезащита оборудования и трубопроводов.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <div
              key={i}
              className="flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                <Icon name={a.icon} size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {a.text}
              </p>
              <div className="mt-auto border-t border-white/10 pt-4">
                <span className="label-mono text-[11px] text-brass-soft">
                  Особенно востребованы
                </span>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {a.products}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;