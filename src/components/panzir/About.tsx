import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

type Tile = {
  icon: string;
  title: string;
  text: string;
  image: string;
  bg: string;
  tone: 'light' | 'dark';
  featured?: boolean;
};

const TILES: Tile[] = [
  {
    icon: 'ShieldCheck',
    title: 'Термочехлы «Панцирь»',
    text: 'Разработка и производство съёмных термочехлов',
    image: '/about/panzir.webp',
    bg: '#36302B',
    tone: 'light',
    featured: true,
  },
  {
    icon: 'Thermometer',
    title: 'Теплоизоляция',
    text: 'Для инженерных систем и судостроения',
    image: '/about/thermal.webp',
    bg: '#363539',
    tone: 'light',
  },
  {
    icon: 'Layers',
    title: 'Защитные покрытия',
    text: 'Покрытия для теплоизоляции',
    image: '/about/protective.webp',
    bg: '#C9C9C9',
    tone: 'dark',
  },
  {
    icon: 'Volume2',
    title: 'Шумоизоляция',
    text: 'Материалы и решения по снижению шума',
    image: '/about/noise.webp',
    bg: '#222222',
    tone: 'light',
  },
  {
    icon: 'Flame',
    title: 'Огнезащита',
    text: 'Огнезащитные материалы и системы',
    image: '/about/fire.webp',
    bg: '#676766',
    tone: 'light',
  },
  {
    icon: 'Boxes',
    title: 'Системные решения',
    text: 'Комплексные поставки теплоизоляция + покрытия',
    image: '/about/systems.webp',
    bg: '#929396',
    tone: 'dark',
  },
];

const FeaturedCard = ({ t }: { t: Tile }) => {
  const light = t.tone === 'light';
  return (
    <div
      className="flex h-full min-h-[420px] w-full flex-col overflow-hidden rounded-2xl border-2 border-garnet-bright shadow-2xl shadow-garnet/30"
      style={{ backgroundColor: t.bg }}
    >
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <img
          src={t.image}
          alt={t.title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-col p-8">
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
      className={`group flex h-full w-full flex-col overflow-hidden rounded-xl border transition-colors duration-300 ${
        light
          ? 'border-white/25 hover:border-brass/60'
          : 'border-[#0A1420]/20 hover:border-garnet/50'
      }`}
      style={{ backgroundColor: t.bg }}
    >
      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden">
        <img
          src={t.image}
          alt={t.title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-2 border-brass bg-brass/20 text-brass">
          <Icon name={t.icon} size={22} />
        </div>
        <h3
          className={`mt-4 flex min-h-[2.75rem] items-start font-display text-base font-semibold leading-snug ${
            light ? 'text-white' : 'text-[#0A1420]'
          }`}
        >
          {t.title}
        </h3>
        <p
          className={`mt-1 min-h-[3.75rem] text-sm font-medium leading-relaxed ${
            light ? 'text-slate-200' : 'text-[#243447]'
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
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
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
          <div className="flex lg:col-span-5">
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