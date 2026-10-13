import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { imgLarge } from '../data/gallery.js';
import { nb } from '../utils.js';
import Button from './Button.jsx';
import SafeImage from './SafeImage.jsx';

export default function HeroSection() {
  const bgRef = useRef(null);

  // Parallax rất nhẹ, chỉ trên màn hình rộng và khi không giảm chuyển động.
  useEffect(() => {
    const q = window.matchMedia('(min-width: 1000px) and (prefers-reduced-motion: no-preference)');
    if (!q.matches) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translateY(${Math.min(window.scrollY, 700) * 0.12}px) scale(1.06)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="trang-chu" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" ref={bgRef}>
        <SafeImage src={imgLarge('courtyard-arch')} w={1600} h={1067} alt="Cửa sổ vòm nhìn ra hồ nước trong sân của The Moon Homestay" priority />
      </div>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light hero-anim" style={{ '--d': '100ms' }}>
          WELCOME TO THE MOON
        </p>
        <h1 id="hero-title" className="hero-anim" style={{ '--d': '220ms' }}>
          The Moon Muine Homestay
        </h1>
        <p className="hero__sub hero-anim" style={{ '--d': '340ms' }}>
          {nb('Không gian nghỉ ngơi dành cho chuyến đi của bạn tại Mũi Né và Phan Thiết')}
        </p>
        <div className="hero__cta hero-anim" style={{ '--d': '560ms' }}>
          <Button to="phong" variant="light">
            Khám phá phòng
          </Button>
          <Button to="dat-phong" variant="ghost">
            Liên hệ đặt phòng
          </Button>
        </div>
        <p className="hero__loc hero-anim" style={{ '--d': '680ms' }}>
          <MapPin size={16} aria-hidden="true" /> Mũi Né · Phan Thiết
        </p>
      </div>
    </section>
  );
}
