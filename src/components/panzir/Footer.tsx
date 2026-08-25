import { Link } from 'react-router-dom';
import { SeamLine } from './PatternDecor';

const Footer = () => {
  return (
    <footer className="bg-bg-alt py-12">
      <div className="container">
        <SeamLine className="mb-10" />
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="font-display text-2xl font-semibold text-ink">
              ПАНЦИРЬ
            </div>
            <div className="label-mono mt-1 text-[10px] text-steel">
              ООО «АкваРос СПб» · термочехлы
            </div>
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