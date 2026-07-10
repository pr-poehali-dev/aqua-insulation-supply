import { SeamLine } from './PatternDecor';

const Footer = () => {
  return (
    <footer className="bg-bg-alt py-12">
      <div className="container">
        <SeamLine className="mb-10" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-display text-2xl font-semibold text-ink">
              ПАНЦИРЬ
            </div>
            <div className="label-mono mt-1 text-[10px] text-steel">
              ООО «АкваРос СПб» · термочехлы
            </div>
          </div>
          <div className="label-mono text-[10px] text-steel">
            © {new Date().getFullYear()} · Санкт-Петербург
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
