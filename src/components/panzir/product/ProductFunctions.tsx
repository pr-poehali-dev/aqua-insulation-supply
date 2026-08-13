import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FUNCTIONS } from './productData';

const ProductFunctions = () => {
  const [activeFunction, setActiveFunction] = useState<
    (typeof FUNCTIONS)[number] | null
  >(null);

  return (
    <>
      {/* Основные функции */}
      <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
        <h3 className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
          Основные функции термочехлов
        </h3>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Съёмные термочехлы применяются для изоляции отдельных узлов
          оборудования и трубопроводов, где требуется доступ для обслуживания,
          снижение теплопотерь и защита персонала.
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
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
              <img
                src={activeFunction.image}
                alt={activeFunction.title}
                className="w-full rounded-md border border-white/10"
              />
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
