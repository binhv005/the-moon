import { imgLarge } from '../data/gallery.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import BookingForm from './BookingForm.jsx';
import SafeImage from './SafeImage.jsx';

export default function BookingSection() {
  return (
    <section id="dat-phong" className="section section--sky" aria-labelledby="booking-title">
      <div className="container">
        <SectionHeading id="booking-title" eyebrow="Đặt phòng" title="Lên kế hoạch cho kỳ nghỉ của bạn" text="Gửi thông tin để The Moon có thể liên hệ tư vấn phòng phù hợp với nhu cầu lưu trú của bạn." />
        <Reveal className="booking">
          <div className="booking__photo">
            <SafeImage src={imgLarge('pool-wall')} w={1600} h={1067} alt="Hồ nước và bức tường trong sân của The Moon" />
          </div>
          <div className="booking__main">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
