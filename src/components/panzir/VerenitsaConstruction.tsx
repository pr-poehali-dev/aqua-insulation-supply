import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

type MatCard = {
  title: string;
  text?: string;
  image?: string;
};

const CONTACT_LAYER: MatCard[] = [
  {
    title: 'Стеклоткань с силиконовой пропиткой',
    text: 'Высокопрочная стеклоткань типа «Э» плотностью 150–200 г/м². Водо- и газонепроницаемая, устойчива к химическим воздействиям и ультрафиолету.',
    image: '/verenitsa/inner.webp',
  },
];

const DAMPING_LAYER: MatCard[] = [
  { title: 'Вспененный полиэтилен', image: '/verenitsa/polyethylene.webp' },
  { title: 'Вспененный каучук', image: '/construction/2_1_foamed_rubber.webp' },
  {
    title: 'Мягкий полиуретан (закрытоячеистый)',
    image: '/verenitsa/polyurethane.webp',
  },
];

const OUTER_LAYER: MatCard[] = [
  {
    title: 'Стеклоткань с силиконовой пропиткой',
    text: 'Защищает конструкцию от влаги, грунта и механических повреждений. Возможны исполнения с тефлоном, неопреном или армированным ПВХ.',
    image: '/verenitsa/outer1.webp',
  },
  {
    title: 'Стеклоткань с силиконовой пропиткой',
    text: 'Исполнение с усиленным покрытием — тефлон, неопрен или армированный ПВХ по условиям эксплуатации.',
    image: '/verenitsa/outer2.webp',
  },
];

const FASTENERS: MatCard[] = [
  { title: 'Ремни', image: '/construction/3_5_multifilament_strap.webp' },
  { title: 'D-образные кольца', image: '/construction/3_4_d_rings.webp' },
  { title: 'Липучки ВЕЛКРО', image: '/construction/3_6_velcro_tapes.webp' },
  { title: 'Пружинный замок', image: '/construction/3_1_spring_latch.webp' },
  { title: 'Люверсы', image: '/construction/3_2_grommets.webp' },
  { title: 'Металлические крючки', image: '/construction/3_3_metal_hooks.webp' },
];

const MatTile = ({ card }: { card: MatCard }) => (
  <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-[#0E1B2B] transition-colors duration-300 hover:border-brass/40">
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/10 bg-[#0A1420]">
      {card.image ? (
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <Icon name="Image" size={28} className="text-steel/40" />
      )}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h4 className="font-display text-lg font-semibold leading-snug text-white">
        {card.title}
      </h4>
      {card.text && (
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {card.text}
        </p>
      )}
    </div>
  </div>
);

const VerenitsaConstruction = () => (
  <div className="mt-16">
    <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
      Конструкция
    </h3>

    <div className="mt-10">
      <MonoLabel>01 — Слой</MonoLabel>
      <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
        Контактный (внутренний) слой
      </h4>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACT_LAYER.map((c, i) => (
          <MatTile key={i} card={c} />
        ))}
      </div>
    </div>

    <div className="mt-16">
      <MonoLabel>02 — Слой</MonoLabel>
      <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
        Амортизирующий слой
      </h4>
      <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
        Основной рабочий слой. Слои толщиной 2–20 мм чередуются между собой.
        Толщина слоя — 50–200 мм (по расчёту). Максимальная степень сжатия — 58%.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DAMPING_LAYER.map((c, i) => (
          <MatTile key={i} card={c} />
        ))}
      </div>
    </div>

    <div className="mt-16">
      <MonoLabel>03 — Слой</MonoLabel>
      <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
        Внешний (покровный) слой
      </h4>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {OUTER_LAYER.map((c, i) => (
          <MatTile key={i} card={c} />
        ))}
      </div>
    </div>

    <div className="mt-16">
      <MonoLabel>04 — Крепление</MonoLabel>
      <h4 className="mt-4 font-display text-xl font-medium text-ink md:text-2xl">
        Элементы крепления
      </h4>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FASTENERS.map((c, i) => (
          <MatTile key={i} card={c} />
        ))}
      </div>
    </div>
  </div>
);

export default VerenitsaConstruction;