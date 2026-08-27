import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { label: 'Главная', href: '#top' },
  { label: 'О компании', href: '#about' },
  { label: 'Продукция', href: '#product' },
  { label: 'Области применения', href: '#applications' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Примеры объектов', href: '#objects' },
  { label: 'Как мы работаем', href: '#services' },
  { label: 'Документация', href: '#docs' },
  { label: 'Контакты', href: '#contacts' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center gap-6 xl:gap-10">
        <a
          href="#top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex shrink-0 items-center"
          aria-label="На главную"
        >
          <img
            src="https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/bucket/4236fddd-6edc-4ec4-ba04-e809caf68bbc.png"
            alt="Панцирь"
            className="h-12 w-auto md:h-[52px]"
          />
        </a>

        <nav className="ml-auto hidden items-center lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-sm px-2.5 py-2 text-[13px] font-medium leading-none text-[#1B2C42] transition-colors hover:bg-garnet/10 hover:text-garnet xl:px-3.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="ml-auto text-[#1B2C42] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="container flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[13px] font-medium text-[#1B2C42] hover:text-garnet"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;