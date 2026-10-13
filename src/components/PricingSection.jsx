import { imgLarge } from '../data/gallery.js';
import { nb } from '../utils.js';
import Reveal from './Reveal.jsx';
import Button from './Button.jsx';
import SafeImage from './SafeImage.jsx';

// Chưa có bảng giá chính thức. Khi có, thêm component bảng giá (tên phòng, giá ngày thường, cuối tuần, ngày lễ, phụ thu)
// và chỉ hiển thị các trường đã xác minh.
export default function PricingSection() {
  return (
    <section id="bang-gia" className="pricing" aria-labelledby="pricing-title">
      <SafeImage src={imgLarge('themoon')} w={736} h={1308} alt="" className="pricing__bg" />
      <Reveal className="container pricing__content">
        <p className="eyebrow eyebrow--light">Bảng giá phòng</p>
        <h2 id="pricing-title">{nb('Bạn đang tìm phòng tại Mũi Né hoặc Phan Thiết?')}</h2>
        <p>{nb('Liên hệ với chúng tôi để nhận thông tin phòng và giá theo ngày lưu trú.')}</p>
        <Button to="dat-phong" variant="light">
          Yêu cầu báo giá
        </Button>
      </Reveal>
    </section>
  );
}
