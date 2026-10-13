import { MapPin, Phone } from 'lucide-react';
import { mapLink } from '../data/properties.js';
import { imgSmall } from '../data/gallery.js';
import { emit } from '../utils.js';
import Button from './Button.jsx';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';

export default function PropertyCard({ property, delay = 0 }) {
  const [w, h] = property.imageSize;
  return (
    <Reveal as="article" delay={delay} className="property">
      <div className="property__media">
        <SafeImage src={imgSmall(property.image)} w={w} h={h} alt={property.imageAlt} />
      </div>
      <div className="property__body">
        <h3>{property.name}</h3>
        <p className="property__addr">
          <MapPin size={18} aria-hidden="true" /> {property.address}
        </p>
        <div className="property__cta">
          <Button variant="secondary" href={mapLink(property)} external>
            Xem vị trí
          </Button>
          <Button to="dat-phong" icon={Phone} onClick={() => emit('moon:property', property.id)}>
            Yêu cầu đặt phòng
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
