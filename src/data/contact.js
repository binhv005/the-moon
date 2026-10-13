// Toàn bộ thông tin liên hệ nằm ở đây. Giá trị null = chưa có link/tài khoản xác minh → giao diện ẩn nút tương ứng.
export const CONTACT = {
  brand: 'The Moon Muine Homestay',
  // 0933309981 do khách cung cấp. 0975141372: prompt ghi "975141372", poster Phan Thiết của khách in 0975141372 – cần khách xác nhận.
  phones: [
    { display: '0933309981', tel: 'tel:0933309981' },
    { display: '0975141372', tel: 'tel:0975141372' },
  ],
  facebook: null, // chờ URL Facebook chính thức
  zalo: null, // chờ URL/tài khoản Zalo chính thức
  messenger: null, // chờ URL Messenger chính thức
};

export const primaryPhone = CONTACT.phones[0];
