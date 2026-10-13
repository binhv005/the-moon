import SectionHeading from './SectionHeading.jsx';
import { nb } from '../utils.js';
import Reveal from './Reveal.jsx';

const STEPS = [
  { title: 'Chọn cơ sở', text: 'Mũi Né hoặc Phan Thiết.' },
  { title: 'Gửi yêu cầu', text: 'Nhập ngày ở, số khách và thông tin liên hệ.' },
  { title: 'Xác nhận với homestay', text: 'Homestay liên hệ lại xác nhận phòng và giá.' },
];

export default function BookingSteps() {
  return (
    <section id="quy-trinh" className="section section--sand" aria-labelledby="steps-title">
      <div className="container">
        <SectionHeading id="steps-title" eyebrow="Quy trình" title="Đặt phòng đơn giản" />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="step">
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>
                <span className="sr-only">Bước {i + 1}: </span>
                {s.title}
              </h3>
              <p>{nb(s.text)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
