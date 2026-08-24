import Icon from '@/components/ui/icon';
import { MonoLabel } from './PatternDecor';

type Step = {
  num: string;
  title: string;
  text: string;
  icon: string;
  photo: string;
};

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Обсуждение / ТЗ',
    text: 'Фиксируем задачу, тип оборудования, условия эксплуатации, температурный режим и требования к обслуживанию узла.',
    icon: 'MessagesSquare',
    photo: '/process/step-01.webp',
  },
  {
    num: '02',
    title: 'Опросный лист',
    text: 'Получаем исходные параметры по узлу: размеры, температура, место установки, количество, требования к съёмности и креплению.',
    icon: 'ClipboardList',
    photo: '/process/step-02.webp',
  },
  {
    num: '03',
    title: 'Предварительное КП',
    text: 'Готовим предварительное коммерческое предложение на основании исходных данных и предполагаемой конструкции термочехла.',
    icon: 'FileText',
    photo: '/process/step-03.webp',
  },
  {
    num: '04',
    title: 'Предварительный договор',
    text: 'Согласовываем предварительные условия, состав работ, сроки и порядок дальнейшего обследования объекта.',
    icon: 'FileSignature',
    photo: '/process/step-04.webp',
  },
  {
    num: '05',
    title: 'Выезд на объект / Подготовка КП',
    text: 'Техспециалист выезжает на объект, уточняет размеры и особенности узлов, при необходимости выполняет замеры или сканирование.',
    icon: 'Ruler',
    photo: '/process/step-05.webp',
  },
  {
    num: '06',
    title: 'Создание эскизов / Лекал',
    text: 'На основании замеров подготавливаются эскизы, лекала и техническая основа для изготовления термочехлов.',
    icon: 'PenTool',
    photo: '/process/step-06.webp',
  },
  {
    num: '07',
    title: 'Изготовление чехлов / Доставка',
    text: 'После согласования выполняется изготовление термочехлов и поставка готовых изделий на объект.',
    icon: 'Factory',
    photo: '/process/step-07.webp',
  },
  {
    num: '08',
    title: 'Шеф-монтаж / Передача документации',
    text: 'При необходимости выполняется сопровождение монтажа, проверка установки и передача документации по изделию.',
    icon: 'ShieldCheck',
    photo: '/process/step-08.webp',
  },
];

const Process = () => {
  return (
    <section id="services" className="relative bg-bg py-24 md:py-36">
      <div className="container relative z-10">
        <MonoLabel>Услуги</MonoLabel>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
          Как мы работаем
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Восемь последовательных этапов — от первого обсуждения задачи до
          передачи документации на объекте.
        </p>

        <div className="relative mt-16 md:mt-20">
          {/* Вертикальная линия */}
          <span className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brass/50 via-white/15 to-brass/50 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {STEPS.map((step, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={step.num}
                  className="relative pl-14 md:grid md:grid-cols-2 md:items-center md:gap-14 md:pl-0"
                >
                  {/* Точка */}
                  <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-brass/40 bg-bg md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brass/15 text-brass-soft">
                      <Icon name={step.icon} size={14} />
                    </span>
                  </span>

                  {/* Текст */}
                  <div
                    className={
                      reversed
                        ? 'md:col-start-2 md:pl-6'
                        : 'md:col-start-1 md:row-start-1 md:pr-6 md:text-right'
                    }
                  >
                    <span className="label-mono text-[11px] tracking-[0.2em] text-brass-soft">
                      Этап {step.num}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                      {step.text}
                    </p>
                  </div>

                  {/* Фото */}
                  <div
                    className={`mt-6 md:mt-0 ${
                      reversed
                        ? 'md:col-start-1 md:row-start-1 md:pr-6'
                        : 'md:col-start-2 md:pl-6'
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-lg border border-white/15 transition-colors duration-300 hover:border-brass/40">
                      <img
                        src={step.photo}
                        alt={step.title}
                        loading="lazy"
                        className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-md border border-brass/40 bg-bg/80 px-3 py-1.5 label-mono text-[10px] tracking-[0.22em] text-brass-soft backdrop-blur">
                        ЭТАП {step.num}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;