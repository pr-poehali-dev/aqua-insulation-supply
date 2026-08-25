import { ReactNode } from 'react';

/** Маленький моноширинный лейбл-эйбров с тонкой линией слева */
export const MonoLabel = ({
  children,
  className = '',
  centered = false,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) => (
  <span
    className={`label-mono inline-flex items-center gap-3 text-[11px] text-steel ${className}`}
  >
    <span className="h-px w-6 bg-garnet/70" />
    {centered ? <span className="-me-[0.2em]">{children}</span> : children}
    {centered && <span className="h-px w-6 bg-garnet/70" />}
  </span>
);

/**
 * Фоновое видео секции. Растягивается на всю секцию под контентом (z-0).
 * Пока src нет — нейтральная заливка + маленькая подпись-плейсхолдер в углу.
 */
export const VideoBg = ({ src }: { src?: string }) => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    {src ? (
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <span className="label-mono absolute bottom-3 right-4 text-[9px] text-steel/25">
        видео-фон
      </span>
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/30 to-bg/70" />
  </div>
);

/** Регистрационная крестовая метка (как на печатных выкройках) */
export const RegMark = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 text-steel/50 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="12" cy="12" r="6" />
    <line x1="12" y1="0" x2="12" y2="24" />
    <line x1="0" y1="12" x2="24" y2="12" />
  </svg>
);

/** 4 регистрационные метки по углам блока */
export const CornerRegs = () => (
  <>
    <RegMark className="pointer-events-none absolute -left-2 -top-2" />
    <RegMark className="pointer-events-none absolute -right-2 -top-2" />
    <RegMark className="pointer-events-none absolute -bottom-2 -left-2" />
    <RegMark className="pointer-events-none absolute -bottom-2 -right-2" />
  </>
);

/** Стрелка grainline — вертикальная линия долевой нити */
export const Grainline = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 12 120"
    className={`text-steel/60 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <line x1="6" y1="8" x2="6" y2="112" />
    <path d="M6 2 L2 10 L10 10 Z" fill="currentColor" stroke="none" />
    <path d="M6 118 L2 110 L10 110 Z" fill="currentColor" stroke="none" />
  </svg>
);

/** Треугольная засечка-нотч */
export const Notch = ({ className = '' }: { className?: string }) => (
  <span
    className={`inline-block h-0 w-0 border-x-[5px] border-t-[8px] border-x-transparent border-t-brass ${className}`}
  />
);

/** Горизонтальная пунктирная линия «припуск на шов» */
export const SeamLine = ({ className = '' }: { className?: string }) => (
  <div className={`seam-dashed h-px w-full ${className}`} />
);