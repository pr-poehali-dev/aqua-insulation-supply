import { ReactNode } from 'react';

/** Маленький моноширинный лейбл-эйбров с гранатовым квадратом */
export const MonoLabel = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`label-mono inline-flex items-center gap-2 text-[11px] text-steel ${className}`}
  >
    <span className="h-1.5 w-1.5 rotate-45 bg-garnet" />
    {children}
  </span>
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
