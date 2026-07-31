import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const BADGES = [
  { icon: 'Thermometer', text: 'от –200 до +1200 °C' },
  { icon: 'Repeat', text: 'Съёмное исполнение' },
  { icon: 'Ruler', text: 'Индивидуальный крой' },
  { icon: 'FileText', text: 'ТУ 23.99.19-001-85495285-2018' },
];

const FUNCTIONS = [
  {
    icon: 'ThermometerSnowflake',
    title: 'Снижение теплопотерь',
    text: 'Ограничение тепловых потерь на арматуре, фланцах, клапанах и трубопроводах.',
  },
  {
    icon: 'HardHat',
    title: 'Защита персонала',
    text: 'Снижение риска контакта с горячими поверхностями при эксплуатации и обслуживании.',
  },
  {
    icon: 'Volume2',
    title: 'Шумоизоляция',
    text: 'Снижение уровня шума на отдельных узлах оборудования и трубопроводах.',
  },
  {
    icon: 'Droplets',
    title: 'Контроль конденсата',
    text: 'Ограничение образования конденсата на изолируемых поверхностях.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Защита оборудования',
    text: 'Дополнительная защита арматуры и узлов от внешних воздействий и загрязнений.',
  },
  {
    icon: 'Repeat',
    title: 'Съёмное исполнение',
    text: 'Возможность быстрого демонтажа и повторной установки при обслуживании и ремонте.',
  },
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

        {/* Основные функции */}
        <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
          <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Основные функции термочехлов
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Съёмные термочехлы применяются для изоляции отдельных узлов
            оборудования и трубопроводов, где требуется доступ для обслуживания,
            снижение теплопотерь и защита персонала.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FUNCTIONS.map((f, i) => (
              <div
                key={i}
                className="group flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                  <Icon name={f.icon} size={22} />
                </div>
                <h4 className="mt-5 font-display text-xl font-semibold text-white">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;