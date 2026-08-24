import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';
import ContactForm from './ContactForm';
import ContactsMap from './ContactsMap';

type InfoBlock = {
  icon: string;
  label: string;
  lines?: string[];
  links?: { text: string; href: string }[];
};

const INFO: InfoBlock[] = [
  {
    icon: 'Building2',
    label: 'Офис',
    lines: [
      '196158, Санкт-Петербург',
      'Московское шоссе 46Б',
      'Офисный центр М-46',
      'ООО «АкваРос СПб»',
    ],
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
        <MonoLabel>Связь</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Контакты
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Оставьте заявку — рассчитаем стоимость термочехлов под ваше
          оборудование и пришлём коммерческое предложение.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <ContactForm />

          <div className="grid gap-5 sm:grid-cols-2 lg:content-start">
            {INFO.map((b) => (
              <div
                key={b.label}
                className="rounded-sm border border-white/12 p-7 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-brass/35"
                style={{ backgroundColor: '#111f35' }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-brass/10 ring-1 ring-brass/20">
                  <Icon name={b.icon} size={20} className="text-brass" />
                </span>
                <div className="label-mono mt-5 text-[10px] text-brass-soft">
                  {b.label}
                </div>
                <div className="mt-3 space-y-1.5">
                  {b.lines?.map((l) => (
                    <div
                      key={l}
                      className="text-[15px] leading-relaxed text-ink-muted"
                    >
                      {l}
                    </div>
                  ))}
                  {b.links?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block font-display text-[17px] font-medium tracking-[0.01em] text-white transition-colors hover:text-brass-soft"
                    >
                      {l.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ContactsMap />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
