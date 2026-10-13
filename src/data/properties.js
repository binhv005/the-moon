// mapUrl: link Google Maps chính thức của từng cơ sở (chưa được cung cấp → null).
// Khi null, giao diện dùng liên kết tìm kiếm Google Maps theo địa chỉ đã cung cấp (không dùng tọa độ).
export const properties = [
  {
    id: 'moon-muine',
    name: 'THE MOON MUINE HOMESTAY',
    short: 'Mũi Né',
    address: '195/8 Huỳnh Thúc Kháng, Mũi Né',
    mapUrl: null,
    image: 'muine-facade',
    imageAlt: 'Mặt tiền The Moon Muine Homestay với hoa giấy và bảng hiệu',
    imageSize: [1290, 964],
  },
  {
    id: 'moon-phan-thiet',
    name: 'THE MOON PHAN THIET HOMESTAY',
    short: 'Phan Thiết',
    address: '344 Thủ Khoa Huân, Phan Thiết',
    mapUrl: null,
    image: 'pool-wall',
    imageAlt: 'Hồ nước và bức tường có dòng chữ The Moon Phan Thiet',
    imageSize: [1600, 1067],
  },
];

export const mapLink = (p) => p.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.name} ${p.address}`)}`;
