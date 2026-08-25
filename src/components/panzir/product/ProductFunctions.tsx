import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MonoLabel } from '../PatternDecor';
import { BADGES, FUNCTIONS } from './productData';

const ProductFunctions = () => {
  const [activeFunction, setActiveFunction] = useState<
    (typeof FUNCTIONS)[number] | null
  >(null);

  return (
    <>
      {/* Термочехлы «Панцирь» */}
      <div
        id="thermocovers"
        className="mt-20 scroll-mt-24 border-t border-white/10 pt-16 md:mt-24"
      >
        <div className="text-center">
          <MonoLabel centered>Продукт</MonoLabel>
          <h3 className="mx-auto mt-6 max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            Термочехлы «Панцирь»
          </h3>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center text-lg leading-relaxed text-ink-muted">
          <p>
            Съёмные тепло- и шумоизоляционные чехлы для арматуры, фланцевых
            соединений, клапанов, оборудования и трубопроводных узлов.
          </p>
          <p>
            Изготавливаются под конкретный узел и применяются для снижения
            теплопотерь, защиты персонала и обслуживания оборудования без
            демонтажа постоянной изоляции.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {BADGES.map((b, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 rounded-sm border border-brass/30 bg-[#0E1B2B] px-4 py-3"
            >
              <Icon name={b.icon} size={18} className="text-brass-soft" />
              <span className="text-sm font-medium text-ink">{b.text}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-ink-muted">
          Функции термочехлов опираются на требования нормативных документов.
          Подробности и ссылки на стандарты — внутри плакатов.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
          {FUNCTIONS.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveFunction(f)}
              aria-label={f.title}
              className="group block cursor-pointer overflow-hidden rounded-lg border-2 border-[#050B13] text-left shadow-lg shadow-black/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-brass/25 hover:ring-brass/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                className="w-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={!!activeFunction}
        onOpenChange={(open) => !open && setActiveFunction(null)}
      >
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-white/15 bg-[#0E1B2B] text-white">
          <DialogHeader>
            <DialogTitle className="pr-6 font-display text-2xl font-semibold leading-snug text-white">
              {activeFunction?.modalTitle}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {activeFunction?.title}
            </DialogDescription>
          </DialogHeader>

          {activeFunction && (
            <>
              <p className="text-base leading-relaxed text-slate-300">
                {activeFunction.text}
              </p>
              <a
                href={activeFunction.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brass-soft underline underline-offset-4 transition-colors hover:text-brass"
              >
                <Icon name="ExternalLink" size={16} />
                {activeFunction.linkLabel}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductFunctions;