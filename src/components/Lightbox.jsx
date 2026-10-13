import { useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { imgLarge } from '../data/gallery.js';
import { useDialog } from '../hooks/useDialog.js';

// items: [{ src, alt }]. Hỗ trợ phím mũi tên, Escape và vuốt trên điện thoại.
export default function Lightbox({ items, index, onIndex, onClose }) {
  const ref = useRef(null);
  const touchX = useRef(null);
  const count = items.length;
  const go = (d) => onIndex((index + d + count) % count);
  useDialog(ref, onClose);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const item = items[index];
  return (
    <div
      ref={ref}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh lớn"
      onClick={onClose}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" data-autofocus className="lightbox__btn lightbox__close" aria-label="Đóng" onClick={onClose}>
        <X size={22} />
      </button>
      {count > 1 && (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" aria-label="Ảnh trước" onClick={(e) => (e.stopPropagation(), go(-1))}>
            <ChevronLeft size={26} />
          </button>
          <button type="button" className="lightbox__btn lightbox__next" aria-label="Ảnh tiếp theo" onClick={(e) => (e.stopPropagation(), go(1))}>
            <ChevronRight size={26} />
          </button>
        </>
      )}
      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={imgLarge(item.src)} alt={item.alt} />
        <figcaption>
          {item.alt} <span aria-live="polite">· {index + 1}/{count}</span>
        </figcaption>
      </figure>
    </div>
  );
}
