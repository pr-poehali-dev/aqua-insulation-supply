import { MonoLabel, SeamLine } from './PatternDecor';

const ATELIER_IMG =
  'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/2e21b767-e8e9-412d-9672-d11fc72f939f.jpg';

const STEPS = [
  { title: 'Обсуждение и ТЗ', hint: 'фиксируем задачу' },
  { title: 'Опросный лист', hint: 'параметры объекта' },
  { title: 'Предварительное КП', hint: 'состав и стоимость' },
  { title: 'Выезд и замер', hint: '3D-сканер' },
  { title: 'Эскиз и лекало', hint: 'крой под объект' },
  { title: 'Пошив', hint: '3–14 дней' },
  { title: 'Шеф-монтаж', hint: 'установка на объекте' },
  { title: 'Гарантия', hint: 'паспорт, 24 месяца' },
];

const FACTS = [
  { value: 'с 2018', label: 'шьём термочехлы' },
  { value: 'своя', label: 'инженерная служба' },
  { value: 'вся Россия', label: 'география поставок' },
];

const About = () => {
  return (
    <section id="about" className="relative bg-bg-alt py-24 md:py-36">
      <div className="container">
        <MonoLabel>О нас</MonoLabel>

        {/* Такт 1 — манифест */}
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
              Первое промышленное ателье России
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              С 2018 года разрабатываем и шьём съёмные термочехлы. Работаем как
              ателье: снимаем мерки на объекте и делаем индивидуальный крой.
              Собственная инженерная служба. Поставляем по всей России — от
              котельных до НПЗ и верфей.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {FACTS.map((f, i) => (
                <div
                  key={i}
                  className="rounded-sm border border-brass/20 p-7"
                  style={{ backgroundColor: '#0f1a2e' }}
                >
                  <div className="font-display text-2xl font-semibold text-brass-soft">
                    {f.value}
                  </div>
                  <div className="label-mono mt-3 text-[10px] text-steel">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Атмосферный визуал */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={ATELIER_IMG}
                alt="Крой термочехла ПАНЦИРЬ"
                className="h-full w-full object-cover"
              />
              {/* Тёмный оверлей по левому краю для читаемости */}
              <div className="absolute inset-0 bg-gradient-to-r from-bg-alt via-bg-alt/30 to-transparent" />
            </div>
          </div>
        </div>

        <SeamLine className="my-16 md:my-20" />

        {/* Такт 2 — процесс */}
        <div>
          <MonoLabel>Как мы работаем</MonoLabel>
          <h3 className="mt-4 font-display text-2xl font-medium text-ink">
            От лекала до шеф-монтажа
          </h3>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={i}
                className="rounded-sm border border-white/10 bg-surface p-6"
              >
                <span className="font-mono text-sm text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-3 font-display text-lg font-semibold text-ink">
                  {s.title}
                </div>
                <div className="mt-1.5 text-sm text-ink-muted">{s.hint}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;