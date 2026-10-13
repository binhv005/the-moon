// DỮ LIỆU MINH HỌA – nội dung phòng dưới đây do đội phát triển soạn tạm, CHƯA được khách hàng xác nhận.
// Khi có dữ liệu thật: thay nội dung và đặt placeholder: false. (Giao diện hiện không hiển thị nhãn minh họa.)
// price để null → hiển thị "Liên hệ để nhận báo giá" (không tự đặt giá).
export const rooms = [
  {
    id: 'room-sample-1',
    placeholder: true,
    name: 'Phòng hai giường',
    property: null,
    description: 'Phòng nghỉ tông màu xanh nhẹ nhàng, phù hợp cho nhóm bạn hoặc gia đình.',
    capacity: '2–4 khách',
    bed: '2 giường đôi',
    amenities: ['Điều hòa'],
    price: null,
    checkIn: null,
    checkOut: null,
    images: [{ src: 'bedroom', alt: 'Phòng ngủ với hai giường và tông màu xanh nhạt' }],
  },
  {
    id: 'room-sample-2',
    placeholder: true,
    name: 'Phòng cửa sổ vòm',
    property: null,
    description: 'Phòng có cửa sổ vòm nhìn ra khu hồ nước trong sân, dành cho cặp đôi.',
    capacity: '2 khách',
    bed: '1 giường đôi',
    amenities: ['Cửa sổ nhìn ra hồ'],
    price: null,
    checkIn: null,
    checkOut: null,
    images: [
      { src: 'courtyard-arch', alt: 'Cửa sổ vòm nhìn ra hồ nước trong sân' },
      { src: 'pool-dining', alt: 'Khu hồ nước và bàn ăn ngoài trời' },
    ],
  },
];
