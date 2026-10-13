import { useState } from 'react';
import { gallery, imgSmall } from '../data/gallery.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';
import Lightbox from './Lightbox.jsx';

export default function GallerySection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="hinh-anh" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading id="gallery-title" eyebrow="Hình ảnh" title="Không gian tại The Moon" />
        <ul className="gallery">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.src} delay={(i % 3) * 80} className={`gallery__item ${g.wide ? 'gallery__item--wide' : ''}`}>
              <button type="button" onClick={() => setOpen(i)} aria-label={`Xem ảnh lớn: ${g.alt}`}>
                <SafeImage src={imgSmall(g.src)} w={g.w} h={g.h} alt={g.alt} />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
      {open !== null && <Lightbox items={gallery} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </section>
  );
}
