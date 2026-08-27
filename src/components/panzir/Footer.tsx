import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white py-12">
      <div className="container">
        <div className="mb-10 h-px w-full bg-black/10" />
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          <div className="flex items-center gap-5">
            <div>
              <div className="label-mono text-[10px] text-[#5A6472]">
                ООО «АкваРос СПб»
              </div>
              <div className="mt-2.5 flex flex-col gap-1.5">
                <a
                  href="tel:+78007008481"
                  className="text-sm font-medium text-[#232B33] transition-colors hover:text-[#8B1E2D]"
                >
                  8 (800) 700-84-81
                </a>
                <a
                  href="tel:+78127031644"
                  className="text-sm font-medium text-[#232B33] transition-colors hover:text-[#8B1E2D]"
                >
                  +7 (812) 703-16-44
                </a>
              </div>
            </div>
            <img
              src="https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/bucket/4236fddd-6edc-4ec4-ba04-e809caf68bbc.png"
              alt="Панцирь"
              className="h-[72px] w-auto shrink-0"
            />
          </div>

          <nav className="flex flex-col gap-2.5 md:items-end">
            <Link
              to="/privacy"
              className="text-sm text-[#3A434F] transition-colors hover:text-[#8B1E2D]"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/personal-data"
              className="text-sm text-[#3A434F] transition-colors hover:text-[#8B1E2D]"
            >
              Политика обработки персональных данных
            </Link>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-[13px] leading-relaxed text-[#5A6472]">
            Сайт носит информационный характер и не является публичной офертой.
          </p>
          <div className="label-mono text-[10px] text-[#5A6472]">
            © {new Date().getFullYear()} · Санкт-Петербург
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;