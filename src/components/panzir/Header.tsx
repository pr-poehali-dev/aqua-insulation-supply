import { useEffect, useRef, useState } from 'react';
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
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [active, setActive] = useState('#top');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 120 || open) {
        setHidden(false);
      } else if (Math.abs(y - lastY.current) > 8) {
        setHidden(y > lastY.current);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      let current = '#top';
      for (const item of NAV) {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top <= 120) current = item.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl transition-transform duration-300 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1560px] items-center gap-4 px-5 lg:px-7">
        <a
          href="#top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex shrink-0 items-center"
          aria-label="На главную"
        >
          <img
            src="https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/bucket/4236fddd-6edc-4ec4-ba04-e809caf68bbc.png"
            alt="Панцирь"
            className="h-[54px] w-auto md:h-[60px]"
          />
        </a>

        <nav className="ml-auto hidden items-center lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-sm px-2 py-2 text-[14px] font-medium leading-none transition-colors hover:bg-[#8B1E2D]/10 hover:text-[#8B1E2D] xl:px-3 xl:text-[17px] ${
                active === item.href
                  ? 'bg-[#8B1E2D]/10 text-[#8B1E2D]'
                  : 'text-[#232B33]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="ml-auto text-[#232B33] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1560px] flex-col px-5 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[16px] font-medium text-[#232B33] hover:text-[#8B1E2D]"
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