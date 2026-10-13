import { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { primaryPhone } from '../data/contact.js';
import { NAV } from './Header.jsx';
import Button from './Button.jsx';

export default function MobileMenu({ open, active, onClose, onNavigate }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector('a')?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div id="mobile-menu" ref={ref} className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
      <nav aria-label="Điều hướng di động">
        {NAV.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={onNavigate(id)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <div className="mobile-menu__cta">
        <Button to="dat-phong" onClick={onClose}>
          Đặt phòng
        </Button>
        <Button variant="secondary" icon={Phone} href={primaryPhone.tel}>
          {primaryPhone.display}
        </Button>
      </div>
    </div>
  );
}
