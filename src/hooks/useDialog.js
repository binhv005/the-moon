import { useEffect } from 'react';

// Quản lý hộp thoại: khóa cuộn nền, focus vào hộp thoại, giữ Tab trong hộp thoại, Escape để đóng, trả focus khi đóng.
export function useDialog(ref, onClose) {
  useEffect(() => {
    const opener = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector('[data-autofocus]')?.focus();
    return () => {
      document.body.style.overflow = prev;
      opener?.focus?.();
    };
  }, [ref]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab' && ref.current) {
        const nodes = ref.current.querySelectorAll('button:not([disabled]), a[href]');
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [ref, onClose]);
}
