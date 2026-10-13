import { Clock, Compass, Home, MoonStar } from 'lucide-react';
import { imgSmall } from '../data/gallery.js';
import { nb } from '../utils.js';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';

const ICONS = { Home, Clock, MoonStar, Compass };

export default function ServiceCard({ icon, image, title, text, delay = 0 }) {
  const Icon = ICONS[icon] ?? Home;
  return (
    <Reveal as="li" delay={delay} className="service-card">
      {/* Ảnh nền mang tính trang trí */}
      <SafeImage src={imgSmall(image)} w={800} h={533} alt="" className="service-card__bg" />
      <div className="service-card__content">
        <span className="service-card__icon">
          <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <h3>{nb(title)}</h3>
        <p>{nb(text)}</p>
      </div>
    </Reveal>
  );
}
