import { MonoLabel, SeamLine } from './PatternDecor';

const ATELIER_IMG =
  'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/2e21b767-e8e9-412d-9672-d11fc72f939f.jpg';

const CDN =
  'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files';

const STEPS = [
  { title: 'Обсуждение и ТЗ', hint: 'Фиксируем задачу и требования к изоляции.', img: `${CDN}/008c50ed-a82f-43e1-a689-9620ee92aa74.jpg` },
  { title: 'Опросный лист', hint: 'Собираем параметры объекта и оборудования.', img: `${CDN}/4c95812b-1524-4880-8550-99b1b7ca2e59.jpg` },
  { title: 'Предварительное КП', hint: 'Состав, материалы и стоимость проекта.', img: `${CDN}/63796d43-6a9b-4f6a-9fc9-dd2bbac8c946.jpg` },
  { title: 'Выезд и замер', hint: 'Снимаем размеры на объекте, в т.ч. 3D-сканером.', img: `${CDN}/a2133b51-147e-4d7f-baed-36f7f6033c3d.jpg` },
  { title: 'Эскиз и лекало', hint: 'Строим крой под конкретную единицу оборудования.', img: `${CDN}/72b53501-7449-4ab7-848a-5cc7572ed969.jpg` },
  { title: 'Пошив', hint: 'Собственное производство, срок 3–14 дней.', img: `${CDN}/f1dc16c0-aebf-4e2d-9cdf-dc93fe21894c.jpg` },
  { title: 'Шеф-монтаж', hint: 'Устанавливаем изделие на объекте.', img: `${CDN}/39e9fec1-af19-49a2-bef5-ce870fcdc63b.jpg` },
  { title: 'Гарантия и документация', hint: 'Паспорт изделия и гарантия 24 месяца.', img: `${CDN}/d892312b-483c-4ec3-8c54-b77641c615b3.jpg` },
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
          <MonoLabel>Процесс работы</MonoLabel>
          <h3 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
            От лекала до шеф-монтажа
          </h3>

          <ol className="relative mt-16 space-y-16 md:space-y-24">
            {/* Вертикальная соединительная линия по центру (desktop) */}
            <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brass/40 via-brass/15 to-transparent lg:block" />

            {STEPS.map((s, i) => {
              const reversed = i % 2 === 1;
              return (
                <li
                  key={i}
                  className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Фото */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-alt/60 to-transparent" />
                    </div>
                  </div>

                  {/* Текст */}
                  <div
                    className={
                      reversed
                        ? 'lg:order-1 lg:pr-12 lg:text-right'
                        : 'lg:pl-12'
                    }
                  >
                    <div
                      className={`flex items-center gap-4 ${
                        reversed ? 'lg:justify-end' : ''
                      }`}
                    >
                      <span className="font-display text-5xl font-semibold text-brass md:text-6xl">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-12 bg-brass/50" />
                    </div>
                    <h4 className="mt-5 font-display text-2xl font-medium text-ink md:text-3xl">
                      {s.title}
                    </h4>
                    <p className="mt-3 max-w-md text-ink-muted lg:inline-block">
                      {s.hint}
                    </p>
                  </div>

                  {/* Золотая точка на линии (desktop) */}
                  <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass ring-4 ring-bg-alt lg:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;