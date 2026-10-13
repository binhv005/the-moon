import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition.js';
import { scrollToId } from '../utils.js';

export default function BackToTop() {
  const y = useScrollPosition();
  return (
    <button type="button" className={`to-top ${y > 600 ? 'is-visible' : ''}`} aria-label="Quay về đầu trang" tabIndex={y > 600 ? 0 : -1} onClick={() => scrollToId('trang-chu')}>
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
