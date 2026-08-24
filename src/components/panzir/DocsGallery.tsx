import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Doc = {
  slug: string;
  title: string;
  meta: string;
};

const DOCUMENTS: Doc[] = [
  {
    slug: 'sert-sootvetstviya-3m',
    title: 'Сертификат соответствия',
    meta: 'действует до 03.2028',
  },
  {
    slug: 'pozharnye-sertifikaty',
    title: 'Пожарные сертификаты Г1 / НГ',
    meta: 'класс горючести',
  },
  {
    slug: 'sertenergo',
    title: 'Сертификат СЕРТЭНЕРГО',
    meta: 'добровольная сертификация',
  },
  {
    slug: 'sert-sootvetstviya-chehly',
    title: 'Сертификат соответствия ГОСТ Р',
    meta: 'термочехлы «Панцирь»',
  },
  {
    slug: 'instrukciya',
    title: 'Инструкция по монтажу и эксплуатации',
    meta: 'руководство пользователя',
  },
  {
    slug: 'ekspertnoe-zaklyuchenie',
    title: 'Экспертное заключение',
    meta: 'гигиена, 07.2025',
  },
];

const DocsGallery = () => {
  const [active, setActive] = useState<Doc | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCUMENTS.map((doc) => (
          <div
            key={doc.slug}
            className="group flex flex-col overflow-hidden rounded-sm border border-white/12 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-brass/40"
            style={{ backgroundColor: '#111f35' }}
          >
            <button
              type="button"
              onClick={() => setActive(doc)}
              className="relative block w-full overflow-hidden border-b border-white/10 bg-black/30 p-4"
              aria-label={`Открыть: ${doc.title}`}
            >
              <span className="block overflow-hidden rounded-[2px] bg-white/5">
                <img
                  src={`/docs/${doc.slug}-thumb.webp`}
                  alt={doc.title}
                  loading="lazy"
                  className="block aspect-[1/1.35] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </span>
              <span className="pointer-events-none absolute inset-4 rounded-[2px] ring-1 ring-inset ring-white/10" />
            </button>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-base font-medium leading-snug text-white">
                {doc.title}
              </h3>
              <p className="label-mono mt-2 text-[10px] text-steel">
                {doc.meta}
              </p>

              <button
                type="button"
                onClick={() => setActive(doc)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brass/35 bg-brass/10 px-5 py-3 text-sm font-medium text-brass-soft transition-colors duration-300 hover:bg-brass/20 hover:text-white"
              >
                <Icon name="Eye" size={16} />
                Смотреть
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-white/15 bg-[#0f1a2e] p-0">
          {active && (
            <div className="flex max-h-[88vh] flex-col">
              <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5 pr-14">
                <Icon name="FileBadge" size={20} className="shrink-0 text-brass" />
                <span className="font-display text-base font-medium text-white md:text-lg">
                  {active.title}
                </span>
              </div>
              <div className="overflow-auto bg-black/30 p-4 md:p-6">
                <img
                  src={`/docs/${active.slug}.webp`}
                  alt={active.title}
                  className="mx-auto block w-full max-w-2xl rounded-sm"
                />
              </div>
              <div className="border-t border-white/10 px-6 py-4">
                <a
                  href={`/docs/${active.slug}.webp`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brass-soft transition-colors hover:text-white"
                >
                  <Icon name="ExternalLink" size={15} />
                  Открыть в новой вкладке
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DocsGallery;
