import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { CONTACT, primaryPhone } from '../data/contact.js';
import { EXTERNAL, scrollToId } from '../utils.js';

// Desktop: cụm nút nổi góc dưới trái. Mobile: thanh CTA cố định phía dưới.
// Chỉ hiện kênh đã có URL/số điện thoại.
export default function ContactButtons() {
  const book = (e) => {
    e.preventDefault();
    scrollToId('dat-phong');
  };
  return (
    <div className="float-contact" role="region" aria-label="Liên hệ nhanh">
      <a href={primaryPhone.tel} className="float-contact__btn" aria-label="Gọi điện" title="Gọi điện">
        <Phone size={18} aria-hidden="true" />
        <span>Gọi điện</span>
      </a>
      {CONTACT.zalo && (
        <a href={CONTACT.zalo} className="float-contact__btn float-contact__btn--opt" {...EXTERNAL}>
          <MessageCircle size={18} aria-hidden="true" />
          <span>Zalo</span>
        </a>
      )}
      {CONTACT.messenger && (
        <a href={CONTACT.messenger} className="float-contact__btn float-contact__btn--opt" {...EXTERNAL}>
          <MessageCircle size={18} aria-hidden="true" />
          <span>Messenger</span>
        </a>
      )}
      <a href="#dat-phong" className="float-contact__btn float-contact__btn--primary" onClick={book} aria-label="Đặt phòng" title="Đặt phòng">
        <CalendarCheck size={18} aria-hidden="true" />
        <span>Đặt phòng</span>
      </a>
    </div>
  );
}
