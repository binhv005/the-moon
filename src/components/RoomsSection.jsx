import { useState } from 'react';
import { rooms } from '../data/rooms.js';
import { emit } from '../utils.js';
import SectionHeading from './SectionHeading.jsx';
import RoomCard from './RoomCard.jsx';
import RoomDetailModal from './RoomDetailModal.jsx';

export default function RoomsSection() {
  const [open, setOpen] = useState(null);
  const onBook = (room) => emit('moon:room', room.name ?? '');

  return (
    <section id="phong" className="section section--sand" aria-labelledby="rooms-title">
      <div className="container">
        <SectionHeading id="rooms-title" eyebrow="Danh sách phòng" title="Tìm không gian nghỉ ngơi phù hợp" text="Khám phá các lựa chọn phòng lưu trú phù hợp với nhu cầu của bạn." />
        <div className="rooms">
          {rooms.map((r, i) => (
            <RoomCard key={r.id} room={r} index={i} onDetail={setOpen} onBook={onBook} />
          ))}
        </div>
      </div>
      {open !== null && <RoomDetailModal room={rooms[open]} index={open} onClose={() => setOpen(null)} onBook={onBook} />}
    </section>
  );
}
