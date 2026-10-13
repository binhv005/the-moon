import { Check } from 'lucide-react';
import { audiences, services } from '../data/services.js';
import { imgSmall } from '../data/gallery.js';
import SectionHeading from './SectionHeading.jsx';
import ServiceCard from './ServiceCard.jsx';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';

export default function IntroSection() {
  return (
    <section id="gioi-thieu" className="section section--sky" aria-labelledby="intro-title">
      <div className="container">
        <div className="intro">
          <div>
            <SectionHeading
              id="intro-title"
              eyebrow="Giới thiệu homestay"
              title="Chào mừng bạn đến với The Moon"
              text="The Moon Muine Homestay mang đến lựa chọn lưu trú dành cho khách du lịch đến Mũi Né và Phan Thiết, từ những chuyến đi ngắn ngày đến kỳ nghỉ cùng người thân và bạn bè."
            />
            <Reveal delay={120}>
              <ul className="audience">
                {audiences.map((a) => (
                  <li key={a}>
                    <Check size={16} aria-hidden="true" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal kind="right" className="intro__photo">
            <SafeImage src={imgSmall('pool-dining')} w={800} h={533} alt="Khu hồ nước và bàn ăn ngoài trời tại The Moon" />
          </Reveal>
        </div>
        <ul className="services">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 90} />
          ))}
        </ul>
      </div>
    </section>
  );
}
