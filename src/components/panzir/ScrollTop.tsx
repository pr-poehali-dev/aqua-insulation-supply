import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-brass/40 text-brass-soft shadow-xl shadow-black/40 backdrop-blur transition-all duration-300 hover:border-brass hover:bg-brass/20 hover:text-white md:bottom-8 md:right-8 md:h-14 md:w-14 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(17,31,53,0.92)' }}
    >
      <Icon name="ArrowUp" size={20} />
    </button>
  );
};

export default ScrollTop;
