import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import { MonoLabel } from './PatternDecor';

type Block = { t: 'h2' | 'h3' | 'p' | 'li'; v: string };
type Doc = { title: string; blocks: Block[] };

const EMAIL_RE = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

const withLinks = (text: string) =>
  text.split(EMAIL_RE).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="text-brass-soft underline underline-offset-4 transition-colors hover:text-brass"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );

const LegalPage = ({ file, label }: { file: string; label: string }) => {
  const [doc, setDoc] = useState<Doc | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/legal/${file}.json`)
      .then((r) => r.json())
      .then(setDoc)
      .catch(() => setDoc(null));
  }, [file]);

  return (
    <div className="min-h-screen bg-bg">
      <div className="border-b border-white/10 bg-bg-alt">
        <div className="container flex h-20 items-center justify-between">
          <Link
            to="/"
            className="font-display text-xl font-semibold tracking-wide text-ink transition-colors hover:text-brass-soft"
          >
            ПАНЦИРЬ
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-brass-soft"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>
      </div>

      <main className="py-16 md:py-24">
        <div className="container">
          <MonoLabel>{label}</MonoLabel>
          <h1 className="mt-6 max-w-4xl font-display text-3xl font-medium leading-snug text-ink md:text-4xl">
            {doc?.title ?? 'Загрузка…'}
          </h1>
          <div className="label-mono mt-5 text-[10px] text-steel">
            ООО «АкваРос СПб» · Санкт-Петербург
          </div>

          <article className="mt-12 max-w-4xl">
            {doc?.blocks.map((b, i) => {
              if (b.t === 'h2')
                return (
                  <h2
                    key={i}
                    className="mt-12 border-t border-white/10 pt-9 font-display text-[22px] font-semibold leading-snug text-white first:mt-0 first:border-0 first:pt-0 md:text-2xl"
                  >
                    {b.v}
                  </h2>
                );
              if (b.t === 'h3')
                return (
                  <h3
                    key={i}
                    className="label-mono mt-9 text-[11px] leading-relaxed text-brass-soft"
                  >
                    {b.v}
                  </h3>
                );
              if (b.t === 'li')
                return (
                  <div key={i} className="mt-2.5 flex gap-3 pl-1">
                    <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-brass" />
                    <span className="text-[15px] leading-relaxed text-ink-muted">
                      {withLinks(b.v)}
                    </span>
                  </div>
                );
              return (
                <p
                  key={i}
                  className="mt-5 text-[15px] leading-relaxed text-ink-muted md:text-base"
                >
                  {withLinks(b.v)}
                </p>
              );
            })}
          </article>
        </div>
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
};

export default LegalPage;