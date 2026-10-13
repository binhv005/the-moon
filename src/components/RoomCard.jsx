import { BedDouble, Users } from 'lucide-react';
import { imgSmall } from '../data/gallery.js';
import Button from './Button.jsx';
import Reveal from './Reveal.jsx';
import SafeImage from './SafeImage.jsx';

export const roomTitle = (room, index) => room.name ?? `Phòng minh họa ${String(index + 1).padStart(2, '0')}`;

export default function RoomCard({ room, index, onDetail, onBook }) {
  const cover = room.images[0];
  return (
    <Reveal as="article" delay={index * 100} className="room">
      <div className="room__media">
        <SafeImage src={imgSmall(cover.src)} w={800} h={533} alt={cover.alt} />
      </div>
      <div className="room__body">
        <h3>{roomTitle(room, index)}</h3>
        {room.description && <p>{room.description}</p>}
        <ul className="room__facts">
          <li>
            <Users size={16} aria-hidden="true" />
            Sức chứa: {room.capacity ?? <em>—</em>}
          </li>
          <li>
            <BedDouble size={16} aria-hidden="true" />
            Giường: {room.bed ?? <em>—</em>}
          </li>
        </ul>
        {room.amenities.length > 0 && (
          <ul className="room__tags">
            {room.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        <p className="room__price">{room.price ?? 'Liên hệ để nhận báo giá'}</p>
        <div className="room__cta">
          <Button variant="secondary" onClick={() => onDetail(index)}>
            Xem chi tiết
          </Button>
          <Button to="dat-phong" onClick={() => onBook(room)}>
            Yêu cầu đặt phòng
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
