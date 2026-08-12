import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

type Tile = {
  icon: string;
  title: string;
  text: string;
  image: string;
  featured?: boolean;
};

const TILES: Tile[] = [
  {
    icon: 'ShieldCheck',
    title: 'Термочехлы «Панцирь»',
    text: 'Разработка и производство съёмных термочехлов',
    image: '/about/panzir.webp',
    featured: true,
  },
  {
    icon: 'Thermometer',
    title: 'Теплоизоляция',
    text: 'Для инженерных систем и судостроения',
    image: '/about/thermal.webp',
  },
  {
    icon: 'Layers',
    title: 'Защитные покрытия',
    text: 'Покрытия для теплоизоляции',
    image: '/about/protective.webp',
  },
  {
    icon: 'Volume2',
    title: 'Шумоизоляция',
    text: 'Материалы и решения по снижению шума',
    image: '/about/noise.webp',
  },
  {
    icon: 'Flame',
    title: 'Огнезащита',
    text: 'Огнезащитные материалы и системы',
    image: '/about/fire.webp',
  },
  {
    icon: 'Boxes',
    title: 'Системные решения',
    text: 'Комплексные поставки теплоизоляция + покрытия',
    image: '/about/systems.webp',
  },
];

const FeaturedCard = ({ t }: { t: Tile }) => {
  return (
    <div className="relative flex h-full min-h-[420px] w-full flex-col justify-end overflow-hidden rounded-2xl border-2 border-garnet-bright shadow-2xl shadow-garnet/30">
      <img
        src={t.image}
        alt={t.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-2/5 bg-gradient-to-t from-[#050B13]/95 via-[#050B13]/70 to-transparent" />

      <div className="relative z-10 flex flex-col p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-garnet-bright bg-garnet text-white">
            <Icon name={t.icon} size={20} />
          </div>
          <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
            {t.title}
          </h3>
        </div>
        <p className="mt-3 text-base font-medium leading-relaxed text-slate-100">
          {t.text}
        </p>
      </div>
    </div>
  );
};

const TileCard = ({ t }: { t: Tile }) => {
  return (
    <div className="group relative flex aspect-[15/16] min-h-[340px] w-full flex-col justify-end overflow-hidden rounded-xl border border-white/25 transition-colors duration-300 hover:border-brass/60">
      <img
        src={t.image}
        alt={t.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-1/2 bg-gradient-to-t from-[#050B13]/95 via-[#050B13]/70 to-transparent" />

      <div className="relative z-10 flex flex-col justify-end p-5">
        <div className="flex min-h-[3rem] items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-brass bg-brass/25 text-brass-soft">
            <Icon name={t.icon} size={16} />
          </div>
          <h3 className="font-display text-base font-semibold leading-snug text-white">
            {t.title}
          </h3>
        </div>
        <p className="mt-2 min-h-[3.75rem] text-sm font-medium leading-relaxed text-slate-200">
          {t.text}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const featured = TILES[0];
  const restTiles = TILES.slice(1);

  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt py-24 md:py-36">
      <div className="container relative z-10">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Текст слева */}
          <div className="flex flex-col lg:col-span-6">
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

          {/* Большая плитка справа */}
          <div className="flex lg:col-span-6">
            <FeaturedCard t={featured} />
          </div>
        </div>

        {/* 5 плиток одной полосой */}
        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {restTiles.map((t, i) => (
            <TileCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;