import { useEffect, useState } from 'react';

const TOP_THRESHOLD_PX = 8;

/** True while the page is scrolled to (nearly) the top. */
export function useIsAtTop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const update = () => setIsAtTop(window.scrollY <= TOP_THRESHOLD_PX);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return isAtTop;
}
