import { MonoLabel } from './PatternDecor';

const AREAS = [
  {
    image: '/applications/energy.webp',
    title: 'Энергетика',
    text: 'Тепловые и атомные станции, котельные, турбинное оборудование, паропроводы и арматура.',
  },
  {
    image: '/applications/oilgas.webp',
    title: 'Нефтегаз',
    text: 'Нефте- и газоперерабатывающие заводы, месторождения, магистральные трубопроводы и запорная арматура.',
  },
  {
    image: '/applications/ship.webp',
    title: 'Судостроение',
    text: 'Судовые системы, арматура, трубопроводы и оборудование судов, включая объекты с криогенными температурами.',
  },
  {
    image: '/applications/building.webp',
    title: 'Промышленное и гражданское строительство',
    text: 'Инженерные системы зданий, тепловые пункты, вентиляционные и технологические сети.',
  },
  {
    image: '/applications/heating.webp',
    title: 'Тепловые сети и ЖКХ',
    text: 'Бесканальная и канальная прокладка тепловых сетей, ЦТП, ИТП, объекты жилищно-коммунального хозяйства.',
  },
  {
    image: '/applications/plant.webp',
    title: 'Заводы и производства',
    text: 'Химические, металлургические и другие промышленные предприятия. Защита технологического оборудования, трубопроводов и арматуры.',
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
            <article
              key={i}
              className="group relative flex min-h-[340px] overflow-hidden rounded-lg border border-white/15 transition-colors duration-300 hover:border-brass/40"
            >
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D16] via-[#060D16]/70 to-transparent" />
              <div className="relative mt-auto p-7">
                <h3 className="font-display text-xl font-semibold leading-snug text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {a.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
