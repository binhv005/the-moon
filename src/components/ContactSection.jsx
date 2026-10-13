import { CalendarCheck, Facebook, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '../data/contact.js';
import { properties, mapLink } from '../data/properties.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import Button from './Button.jsx';

export default function ContactSection() {
  return (
    <section id="lien-he" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" eyebrow="Liên hệ nhanh" title="The Moon luôn sẵn sàng hỗ trợ bạn" />
        <Reveal className="contact">
          <ul className="contact__sites">
            {properties.map((p) => (
              <li key={p.id}>
                <strong>{p.name}</strong>
                <span>{p.address}</span>
              </li>
            ))}
          </ul>
          <div className="contact__buttons">
            {CONTACT.phones.map((p) => (
              <Button key={p.display} icon={Phone} href={p.tel}>
                Gọi {p.display}
              </Button>
            ))}
            {/* Các nút dưới đây chỉ hiện khi có URL chính thức trong data/contact.js */}
            {CONTACT.zalo && (
              <Button variant="secondary" icon={MessageCircle} href={CONTACT.zalo} external>
                Zalo
              </Button>
            )}
            {CONTACT.messenger && (
              <Button variant="secondary" icon={MessageCircle} href={CONTACT.messenger} external>
                Messenger
              </Button>
            )}
            {CONTACT.facebook && (
              <Button variant="secondary" icon={Facebook} href={CONTACT.facebook} external>
                Facebook
              </Button>
            )}
            {properties.map((p) => (
              <Button key={p.id} variant="secondary" icon={MapPin} href={mapLink(p)} external>
                Google Maps – {p.short}
              </Button>
            ))}
            <Button variant="secondary" icon={CalendarCheck} to="dat-phong">
              Đặt phòng
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
