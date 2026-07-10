import { MonoLabel, SeamLine } from './PatternDecor';

const STEPS = [
  { title: 'Обсуждение и ТЗ', hint: 'фиксируем задачу' },
  { title: 'Опросный лист', hint: 'собираем параметры объекта' },
  { title: 'Предварительное КП', hint: 'состав и стоимость' },
  { title: 'Выезд и замер', hint: 'в т.ч. 3D-сканером' },
  { title: 'Эскиз и лекало', hint: 'крой под объект' },
  { title: 'Пошив', hint: 'на собственном производстве' },
  { title: 'Шеф-монтаж', hint: 'установка на месте' },
  { title: 'Гарантия и документация', hint: 'паспорт изделия' },
];

const About = () => {
  return (
    <section id="about" className="relative bg-bg-alt py-20 md:py-28">
      <div className="container">
        <MonoLabel>О нас</MonoLabel>

        {/* Такт 1 — манифест */}
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium leading-snug text-ink">
              Технологическое ателье термочехлов
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-ink-muted">
              {/* Плейсхолдер манифеста */}
              ООО «АкваРос СПб» с 2018 года шьёт съёмную тепло- и шумоизоляцию
              под брендом ПАНЦИРЬ. Свои инженеры, свой крой, работа по всей
              России.
            </p>
          </div>

          {/* Медиа-плейсхолдер (видео) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video overflow-hidden rounded-sm bg-surface">
              <span className="label-mono absolute bottom-3 right-4 text-[9px] text-steel/30">
                видео
              </span>
            </div>
          </div>
        </div>

        <SeamLine className="my-14" />

        {/* Такт 2 — процесс */}
        <div>
          <MonoLabel>Как мы работаем</MonoLabel>
          <h3 className="mt-4 font-display text-2xl font-medium text-ink">
            От лекала до шеф-монтажа
          </h3>

          <ol className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={i} className="relative">
                <span className="font-mono text-sm text-garnet">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-3 font-display text-lg font-medium text-ink">
                  {s.title}
                </div>
                <div className="mt-1 text-sm text-ink-muted">{s.hint}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
