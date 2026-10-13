import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../utils.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import MobileMenu from './MobileMenu.jsx';

export const NAV = [
  ['Trang chủ', 'trang-chu'],
  ['Giới thiệu homestay', 'gioi-thieu'],
  ['Danh sách phòng', 'phong'],
  ['Hình ảnh', 'hinh-anh'],
  ['Bảng giá', 'bang-gia'],
  ['Liên hệ', 'lien-he'],
];

const NAV_IDS = NAV.map(([, id]) => id);

export default function Header() {
  const active = useActiveSection(NAV_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`header ${scrolled ? 'header--shadow' : ''}`}>
      <div className="container header__inner">
        <a href="#trang-chu" className="header__brand" onClick={go('trang-chu')} aria-label="The Moon Muine Homestay – về đầu trang">
          <Logo height={54} />
        </a>
        <nav className="header__nav" aria-label="Điều hướng chính">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <Button to="dat-phong" className="header__cta">
            Đặt phòng
          </Button>
          <button type="button" className="header__burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Đóng menu' : 'Mở menu'} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <MobileMenu active={active} open={open} onClose={() => setOpen(false)} onNavigate={go} />
    </header>
  );
}
