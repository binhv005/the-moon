import { Facebook, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, primaryPhone } from '../data/contact.js';
import { properties, mapLink } from '../data/properties.js';
import { EXTERNAL, scrollToId } from '../utils.js';
import Logo from './Logo.jsx';

const go = (id) => (e) => {
  e.preventDefault();
  scrollToId(id);
};

const EXPLORE = [
  ['Giới thiệu homestay', 'gioi-thieu'],
  ['Danh sách phòng', 'phong'],
  ['Hình ảnh', 'hinh-anh'],
  ['Bảng giá', 'bang-gia'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Logo height={56} />
          <p>Homestay tại Mũi Né và Phan Thiết.</p>
          <ul className="footer__social">
            <li>
              <a href={primaryPhone.tel} aria-label={`Gọi ${primaryPhone.display}`}>
                <Phone size={18} aria-hidden="true" />
              </a>
            </li>
            {CONTACT.zalo && (
              <li>
                <a href={CONTACT.zalo} aria-label="Zalo" {...EXTERNAL}>
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
              </li>
            )}
            {CONTACT.facebook && (
              <li>
                <a href={CONTACT.facebook} aria-label="Facebook" {...EXTERNAL}>
                  <Facebook size={18} aria-hidden="true" />
                </a>
              </li>
            )}
            <li>
              <a href={mapLink(properties[0])} aria-label="Google Maps" {...EXTERNAL}>
                <MapPin size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer__col footer__col--explore" aria-labelledby="f-explore">
          <h2 id="f-explore">Khám phá</h2>
          <ul>
            {EXPLORE.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={go(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Cơ sở</h2>
          <ul>
            {properties.map((p) => (
              <li key={p.id}>
                <a href={mapLink(p)} {...EXTERNAL}>
                  {p.short}: {p.address.replace(/, (Mũi Né|Phan Thiết)$/, '')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2>Liên hệ</h2>
          <ul>
            {CONTACT.phones.map((p) => (
              <li key={p.display}>
                <a href={p.tel}>{p.display}</a>
              </li>
            ))}
            <li>
              <a href="#dat-phong" onClick={go('dat-phong')}>
                Đặt phòng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {CONTACT.brand}.
        </p>
        <p>Mũi Né · Phan Thiết</p>
      </div>
    </footer>
  );
}
