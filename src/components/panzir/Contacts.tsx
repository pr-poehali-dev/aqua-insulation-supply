import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';
import ContactForm from './ContactForm';
import ContactsMap from './ContactsMap';

type Tile = {
  icon: string;
  label: string;
  lines?: string[];
  links?: { text: string; href: string }[];
};

const TILES: Tile[] = [
  {
    icon: 'Building2',
    label: 'Офис',
    lines: ['Московское шоссе 46Б, ОЦ М-46', '196158, Санкт-Петербург'],
  },
  {
    icon: 'Phone',
    label: 'Телефоны',
    links: [
      { text: '8 (800) 700-84-81', href: 'tel:88007008481' },
      { text: '+7 (812) 703-16-44', href: 'tel:+78127031644' },
    ],
  },
  {
    icon: 'Mail',
    label: 'Email',
    links: [{ text: 'sale@a-ros.ru', href: 'mailto:sale@a-ros.ru' }],
  },
  {
    icon: 'Clock',
    label: 'График работы',
    lines: ['Пн–Пт, 9:00–17:00'],
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="relative bg-bg py-24 md:py-36">
      <div className="container relative z-10">
        <div className="text-center">
          <MonoLabel>Связь</MonoLabel>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Контакты
          </h2>
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Оставьте заявку — рассчитаем стоимость термочехлов под ваше
          оборудование и пришлём коммерческое предложение.
        </p>

        {/* 4 компактные плитки */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t) => (
            <div
              key={t.label}
              className="flex items-start gap-4 rounded-sm border border-white/12 px-6 py-5 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-brass/35"
              style={{ backgroundColor: '#111f35' }}
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-brass/10 ring-1 ring-brass/20">
                <Icon name={t.icon} size={17} className="text-brass" />
              </span>
              <div className="min-w-0">
                <div className="label-mono text-[9px] text-brass-soft">
                  {t.label}
                </div>
                <div className="mt-1.5 space-y-0.5">
                  {t.lines?.map((l) => (
                    <div
                      key={l}
                      className="text-[13px] leading-snug text-ink-muted"
                    >
                      {l}
                    </div>
                  ))}
                  {t.links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block text-[14px] font-medium leading-snug text-white transition-colors hover:text-brass-soft"
                    >
                      {l.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Карта + форма в две колонки, выровнены по высоте */}
        <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-2">
          <ContactsMap />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;