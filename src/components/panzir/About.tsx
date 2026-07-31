import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

type Tile = {
  icon: string;
  title: string;
  text: string;
  featured?: boolean;
};

const TILES: Tile[] = [
  {
    icon: 'ShieldCheck',
    title: 'Термочехлы «Панцирь»',
    text: 'Разработка и производство съёмных термочехлов',
    featured: true,
  },
  {
    icon: 'Thermometer',
    title: 'Теплоизоляция',
    text: 'Для инженерных систем и судостроения',
  },
  {
    icon: 'Layers',
    title: 'Защитные покрытия',
    text: 'Покрытия для теплоизоляции',
  },
  {
    icon: 'Volume2',
    title: 'Шумоизоляция',
    text: 'Материалы и решения по снижению шума',
  },
  {
    icon: 'Flame',
    title: 'Огнезащита',
    text: 'Огнезащитные материалы и системы',
  },
  {
    icon: 'Boxes',
    title: 'Системные решения',
    text: 'Комплексные поставки теплоизоляция + покрытия',
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt py-24 md:py-36">
      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Текст слева */}
          <div className="lg:col-span-5">
            <MonoLabel>О нас</MonoLabel>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
              О компании
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-muted">
              <p>
                ООО «АкваРос СПб» основано 1 апреля 2008 года. Основатели
                компании — инженеры с опытом более 20 лет в проектировании и
                монтаже инженерных систем.
              </p>
              <p>
                Мы разрабатываем и производим съёмные термочехлы «Панцирь» — это
                собственное производство. Также поставляем комплексные решения по
                теплоизоляции, шумоизоляции и огнезащите для промышленных и
                гражданских объектов.
              </p>
              <p>
                В работе опираемся на технические расчёты, выезжаем на объекты,
                выполняем замеры и подбираем оптимальные решения под конкретные
                задачи заказчика. Собственная инженерная служба. Регулярно
                повышаем квалификацию специалистов.
              </p>
              <p>
                Работаем по всей России — от небольших объектов до крупных
                промышленных предприятий.
              </p>
            </div>
          </div>

          {/* 6 плиток справа — сетка 2×3 */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {TILES.map((t, i) => (
              <div
                key={i}
                className={`group relative flex h-full flex-col overflow-hidden rounded-lg border p-7 transition-colors duration-300 ${
                  t.featured
                    ? 'border-garnet-bright/60 bg-[#0A1420] shadow-lg shadow-garnet/15'
                    : 'border-white/15 bg-[#0E1B2B] hover:border-brass/40'
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-md border ${
                    t.featured
                      ? 'h-14 w-14 border-garnet-bright/60 bg-garnet/25 text-garnet-bright'
                      : 'h-12 w-12 border-brass/40 bg-brass/10 text-brass-soft'
                  }`}
                >
                  <Icon name={t.icon} size={t.featured ? 26 : 22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;