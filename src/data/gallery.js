// Ảnh thật từ thư mục khách hàng (ảnh gốc của khách đã được tối ưu vào public/images).
// Chưa xác định chắc cơ sở của từng ảnh trong thư viện chung nên không gắn nhãn cơ sở.
export const gallery = [
  { src: 'courtyard-arch', alt: 'Cửa sổ vòm nhìn ra hồ nước trong sân', w: 1600, h: 1067, wide: true },
  { src: 'muine-facade', alt: 'Mặt tiền The Moon Muine Homestay với hoa giấy', w: 1290, h: 964 },
  { src: 'bedroom', alt: 'Phòng ngủ với hai giường và tông màu xanh nhạt', w: 1600, h: 1067 },
  { src: 'pool-dining', alt: 'Khu hồ nước và bàn ăn ngoài trời', w: 1600, h: 1067, wide: true },
  { src: 'pool-wall', alt: 'Hồ nước và bức tường trong sân', w: 1600, h: 1067, wide: true },
];

export const imgLarge = (s) => `${import.meta.env.BASE_URL}images/${s}.webp`;
export const imgSmall = (s) => `${import.meta.env.BASE_URL}images/${s}-sm.webp`;
