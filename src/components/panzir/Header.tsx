import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { label: 'О нас', href: '#about' },
  { label: 'Коллекции', href: '#collections' },
  { label: 'Документация', href: '#docs' },
  { label: 'Контакты', href: '#contacts' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl font-semibold tracking-[0.12em] text-ink">
            ПАНЦИРЬ
          </span>
          <span className="label-mono hidden text-[9px] text-steel/70 sm:inline">
            АкваРос СПб
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden rounded-sm border border-brass/40 px-5 py-2.5 text-sm font-medium text-brass-soft transition-colors hover:border-brass hover:bg-brass/10 md:inline-block"
        >
          Записаться на замер
        </a>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-bg md:hidden">
          <nav className="container flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-garnet px-5 py-3 text-center font-medium text-ink"
            >
              Записаться на замер
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;