import { Link } from 'react-router-dom';
import { SeamLine } from './PatternDecor';

const Footer = () => {
  return (
    <footer className="bg-bg-alt py-12">
      <div className="container">
        <SeamLine className="mb-10" />
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          <div className="flex items-center gap-5">
            <div>
              <div className="label-mono text-[10px] text-steel">
                ООО «АкваРос СПб»
              </div>
              <div className="mt-2.5 flex flex-col gap-1.5">
                <a
                  href="tel:+78007008481"
                  className="text-sm font-medium text-ink transition-colors hover:text-brass-soft"
                >
                  8 (800) 700-84-81
                </a>
                <a
                  href="tel:+78127031644"
                  className="text-sm font-medium text-ink transition-colors hover:text-brass-soft"
                >
                  +7 (812) 703-16-44
                </a>
              </div>
            </div>
            <img
              src="/pancir-logo-light.png"
              alt="Панцирь"
              className="h-[72px] w-auto shrink-0"
            />
          </div>

          <nav className="flex flex-col gap-2.5 md:items-end">
            <Link
              to="/privacy"
              className="text-sm text-ink-muted transition-colors hover:text-brass-soft"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/personal-data"
              className="text-sm text-ink-muted transition-colors hover:text-brass-soft"
            >
              Политика обработки персональных данных
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-[13px] leading-relaxed text-steel">
            Сайт носит информационный характер и не является публичной офертой.
          </p>
          <div className="label-mono text-[10px] text-steel">
            © {new Date().getFullYear()} · Санкт-Петербург
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;