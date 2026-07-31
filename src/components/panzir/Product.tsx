import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const BADGES = [
  { icon: 'Thermometer', text: 'от –200 до +1200 °C' },
  { icon: 'Repeat', text: 'Съёмное исполнение' },
  { icon: 'Ruler', text: 'Индивидуальный крой' },
  { icon: 'FileText', text: 'ТУ 23.99.19-001-85495285-2018' },
];

const Product = () => {
  return (
    <section id="product" className="relative bg-bg py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Продукт</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Термочехлы «Панцирь»
        </h2>

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
    </section>
  );
};

export default Product;
