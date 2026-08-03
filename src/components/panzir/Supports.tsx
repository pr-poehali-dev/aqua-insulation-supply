import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

const PERIMETR_CONSTRUCTION = [
  {
    icon: 'Box',
    title: 'Опорная вставка',
    text: 'Прочная термоизоляционная опорная вставка.',
  },
  {
    icon: 'Layers',
    title: 'Слои каучука',
    text: 'Два внешних слоя вспененного каучука.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Пароизоляция',
    text: 'Наружная ПВХ-плёнка для пароизоляции.',
  },
];

const PERIMETR_PURPOSE = [
  'Предотвращает образование мостиков холода в местах крепления труб',
  'Сохраняет толщину и термическое сопротивление изоляционного слоя',
  'Разгружает теплоизоляцию от веса тяжёлых покровных и защитных материалов',
];

const BAZIS_VARIANTS = [
  { icon: 'CircleDot', title: 'Кольца с прямыми ногами' },
  { icon: 'GitFork', title: 'Кольца с изогнутыми ногами' },
  { icon: 'Circle', title: 'Двойные кольца' },
];

const Supports = () => {
  return (
    <section id="supports" className="relative bg-bg pb-24 md:pb-36">
      <div className="container relative z-10">
        <div className="border-t border-white/10 pt-16 md:pt-24">
          <MonoLabel>Продукт</MonoLabel>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            Системы опор и подвесов
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Опорные и подвесные системы предназначены для крепления
            трубопроводов с сохранением целостности теплоизоляционного слоя и
            предотвращением образования мостиков холода.
          </p>

          {/* СОП «Периметр» */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
              СОП «Периметр»
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
              Опорно-подвесная система для трубопроводов.
            </p>

            <div className="mt-10">
              <MonoLabel>Конструкция</MonoLabel>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {PERIMETR_CONSTRUCTION.map((c, i) => (
                  <div
                    key={i}
                    className="flex h-full flex-col rounded-lg border border-white/15 bg-[#0E1B2B] p-7 transition-colors duration-300 hover:border-brass/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                      <Icon name={c.icon} size={22} />
                    </div>
                    <h4 className="mt-5 font-display text-xl font-semibold text-white">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <MonoLabel>Назначение</MonoLabel>
              <ul className="mt-8 space-y-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-8 md:p-10">
                {PERIMETR_PURPOSE.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="mt-0.5 shrink-0 text-brass-soft"
                    />
                    <span className="leading-relaxed text-slate-100">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 max-w-3xl leading-relaxed text-ink-muted">
              Применяется в системах отопления, ГВС, кондиционирования,
              холодильных установках, а также на промышленных и судовых
              объектах. Подходит для каучуковой изоляции различных
              производителей.
            </p>
          </div>

          {/* СОП «Базис» */}
          <div className="mt-16 border-t border-white/10 pt-16">
            <h3 className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
              СОП «Базис»
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
              Система металлических опорных колец для трубопроводов.
            </p>
            <p className="mt-6 max-w-3xl leading-relaxed text-ink-muted">
              Изготавливается из оцинкованной стали, нержавеющей стали или
              алюминия.
            </p>

            <div className="mt-10">
              <MonoLabel>Исполнения</MonoLabel>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {BAZIS_VARIANTS.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-white/15 bg-[#0E1B2B] p-6 transition-colors duration-300 hover:border-brass/40"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brass/40 bg-brass/10 text-brass-soft">
                      <Icon name={v.icon} size={22} />
                    </div>
                    <span className="font-medium text-white">{v.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
              Обеспечивает надёжную опору и фиксацию трубопроводов с сохранением
              целостности теплоизоляционного слоя. Применяется на промышленных,
              энергетических и судовых объектах. Подбирается под диаметр трубы,
              толщину изоляции и требуемую нагрузку.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supports;
