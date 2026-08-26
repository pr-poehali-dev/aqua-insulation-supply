import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';
import ContactForm from './ContactForm';
import ContactsMap from './ContactsMap';

type Tile = {
  icon: string;
  label: string;
  lines?: string[];
  links?: { text: string; href: string }[];
  href?: string;
  external?: boolean;
};

const MAP_URL =
  'https://yandex.ru/maps/?text=' +
  encodeURIComponent(
    '196158, Санкт-Петербург, Московское шоссе 46Б, Офисный центр М-46',
  );

const TILES: Tile[] = [
  {
    icon: 'Building2',
    label: 'Офис',
    lines: ['Московское шоссе 46Б, ОЦ М-46', '196158, Санкт-Петербург'],
    href: MAP_URL,
    external: true,
  },
  {
    icon: 'Phone',
    label: 'Телефоны',
    links: [
      { text: '8 (800) 700-84-81', href: 'tel:+78007008481' },
      { text: '+7 (812) 703-16-44', href: 'tel:+78127031644' },
    ],
  },
  {
    icon: 'Mail',
    label: 'Email',
    href: 'mailto:sale@a-ros.ru',
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
          <MonoLabel centered>Связь</MonoLabel>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Контакты
          </h2>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-ink-muted">
          Оставьте заявку — рассчитаем стоимость термочехлов под ваше
          оборудование и пришлём коммерческое предложение.
        </p>

        {/* 4 компактные плитки */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((t) => {
            const clickable = Boolean(t.href || t.links);
            const Wrapper = t.href ? 'a' : 'div';

            return (
              <Wrapper
                key={t.label}
                {...(t.href
                  ? {
                      href: t.href,
                      ...(t.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {}),
                    }
                  : {})}
                className={`group flex items-start gap-4 rounded-sm border border-white/12 px-6 py-5 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-brass/35 ${
                  clickable ? 'cursor-pointer hover:bg-white/[0.04]' : ''
                }`}
                style={{ backgroundColor: '#111f35' }}
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-brass/10 ring-1 ring-brass/20 transition-colors duration-300 group-hover:bg-brass/20">
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
                        className={`text-[13px] leading-snug text-ink-muted ${
                          t.href ? 'transition-colors group-hover:text-white' : ''
                        }`}
                      >
                        {l}
                      </div>
                    ))}
                    {t.links?.map((l) =>
                      t.href ? (
                        <span
                          key={l.href}
                          className="block text-[14px] font-medium leading-snug text-white transition-colors group-hover:text-brass-soft"
                        >
                          {l.text}
                        </span>
                      ) : (
                        <a
                          key={l.href}
                          href={l.href}
                          className="block text-[14px] font-medium leading-snug text-white transition-colors hover:text-brass-soft"
                        >
                          {l.text}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
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