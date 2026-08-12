import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

type Tile = {
  icon: string;
  title: string;
  text: string;
  image: string;
  tone: 'light' | 'dark';
  featured?: boolean;
};

const TILES: Tile[] = [
  {
    icon: 'ShieldCheck',
    title: 'Термочехлы «Панцирь»',
    text: 'Разработка и производство съёмных термочехлов',
    image: '/about/panzir.webp',
    tone: 'light',
    featured: true,
  },
  {
    icon: 'Thermometer',
    title: 'Теплоизоляция',
    text: 'Для инженерных систем и судостроения',
    image: '/about/thermal.webp',
    tone: 'light',
  },
  {
    icon: 'Layers',
    title: 'Защитные покрытия',
    text: 'Покрытия для теплоизоляции',
    image: '/about/protective.webp',
    tone: 'dark',
  },
  {
    icon: 'Volume2',
    title: 'Шумоизоляция',
    text: 'Материалы и решения по снижению шума',
    image: '/about/noise.webp',
    tone: 'light',
  },
  {
    icon: 'Flame',
    title: 'Огнезащита',
    text: 'Огнезащитные материалы и системы',
    image: '/about/fire.webp',
    tone: 'light',
  },
  {
    icon: 'Boxes',
    title: 'Системные решения',
    text: 'Комплексные поставки теплоизоляция + покрытия',
    image: '/about/systems.webp',
    tone: 'dark',
  },
];

const FeaturedCard = ({ t }: { t: Tile }) => {
  const light = t.tone === 'light';
  return (
    <div className="relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl border-2 border-garnet-bright shadow-2xl shadow-garnet/30">
      <img
        src={t.image}
        alt={t.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex flex-col p-8">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-lg border-2 border-garnet-bright ${
            light ? 'bg-garnet text-white' : 'bg-garnet text-white'
          }`}
        >
          <Icon name={t.icon} size={28} />
        </div>
        <h3
          className={`mt-5 font-display text-2xl font-semibold md:text-3xl ${
            light ? 'text-white' : 'text-[#0A1420]'
          }`}
        >
          {t.title}
        </h3>
        <p
          className={`mt-3 text-base font-medium leading-relaxed ${
            light ? 'text-slate-100' : 'text-[#243447]'
          }`}
        >
          {t.text}
        </p>
      </div>
    </div>
  );
};

const TileCard = ({ t }: { t: Tile }) => {
  const light = t.tone === 'light';
  return (
    <div
      className={`group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-xl border transition-colors duration-300 ${
        light
          ? 'border-white/25 hover:border-brass/60'
          : 'border-[#0A1420]/20 hover:border-garnet/50'
      }`}
    >
      <img
        src={t.image}
        alt={t.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex flex-col p-5">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-md border-2 ${
            light
              ? 'border-brass bg-brass/30 text-brass-soft'
              : 'border-[#0A1420]/70 bg-white/70 text-[#0A1420]'
          }`}
        >
          <Icon name={t.icon} size={20} />
        </div>
        <h3
          className={`mt-4 font-display text-base font-semibold leading-snug ${
            light ? 'text-white' : 'text-[#0A1420]'
          }`}
        >
          {t.title}
        </h3>
        <p
          className={`mt-2 text-sm font-medium leading-relaxed ${
            light ? 'text-slate-100' : 'text-[#243447]'
          }`}
        >
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
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Текст слева */}
          <div className="flex flex-col lg:col-span-7">
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
          <div className="lg:col-span-5">
            <FeaturedCard t={featured} />
          </div>
        </div>

        {/* 5 плиток одной полосой */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {restTiles.map((t, i) => (
            <TileCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;