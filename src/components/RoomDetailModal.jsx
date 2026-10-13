import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { imgLarge } from '../data/gallery.js';
import { useDialog } from '../hooks/useDialog.js';
import { roomTitle } from './RoomCard.jsx';
import Button from './Button.jsx';

const Row = ({ label, value }) => (
  <div>
    <dt>{label}</dt>
    <dd>{value ?? <em>Chờ cập nhật</em>}</dd>
  </div>
);

export default function RoomDetailModal({ room, index, onClose, onBook }) {
  const ref = useRef(null);
  const [shot, setShot] = useState(0);
  const touchX = useRef(null);
  const count = room.images.length;
  const go = (d) => setShot((shot + d + count) % count);
  useDialog(ref, onClose);
  const img = room.images[shot];
  const checkRule = room.checkIn || room.checkOut ? [room.checkIn && `Nhận phòng: ${room.checkIn}`, room.checkOut && `Trả phòng: ${room.checkOut}`].filter(Boolean).join(' · ') : null;

  return (
    <div className="modal" onClick={onClose}>
      <div
        ref={ref}
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="room-modal-title"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => (e.key === 'ArrowRight' ? go(1) : e.key === 'ArrowLeft' ? go(-1) : null)}
      >
        <button type="button" data-autofocus className="modal__close" aria-label="Đóng" onClick={onClose}>
          <X size={22} />
        </button>
        <div
          className="modal__gallery"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
            if (touchX.current !== null && Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <img key={img.src} src={imgLarge(img.src)} alt={img.alt} width="1600" height="1067" />
          {count > 1 && (
            <>
              <button type="button" className="modal__nav modal__nav--prev" aria-label="Ảnh trước" onClick={() => go(-1)}>
                <ChevronLeft size={22} />
              </button>
              <button type="button" className="modal__nav modal__nav--next" aria-label="Ảnh tiếp theo" onClick={() => go(1)}>
                <ChevronRight size={22} />
              </button>
              <span className="modal__count" aria-live="polite">
                {shot + 1}/{count}
              </span>
            </>
          )}
        </div>
        <div className="modal__body">
          <h3 id="room-modal-title">{roomTitle(room, index)}</h3>
          {room.description && <p>{room.description}</p>}
          <dl className="facts">
            <Row label="Sức chứa" value={room.capacity} />
            <Row label="Loại giường" value={room.bed} />
            <Row label="Tiện nghi" value={room.amenities.length ? room.amenities.join(', ') : null} />
            <Row label="Giá phòng" value={room.price ?? 'Liên hệ để nhận báo giá'} />
            {checkRule && <Row label="Nhận/trả phòng" value={checkRule} />}
          </dl>
          <Button to="dat-phong" onClick={() => (onClose(), onBook(room))}>
            Yêu cầu đặt phòng
          </Button>
        </div>
      </div>
    </div>
  );
}
