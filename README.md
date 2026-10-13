# The Moon Muine Homestay – Landing page

React + Vite, landing page một trang theo `Prompt.md`. Chỉ frontend, chưa có backend.

## Chạy dự án
```
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Cấu trúc
- `src/components/` – Header, Hero, các section, RoomCard, RoomDetailModal, Lightbox, BookingForm, ContactButtons, BackToTop, Footer…
- `src/data/` – `contact.js` (điện thoại, Facebook, Zalo, Messenger), `properties.js` (hai cơ sở + link bản đồ), `rooms.js`, `gallery.js`, `services.js`.
- `public/images/` – ảnh WebP đã tối ưu từ ảnh gốc của khách (`*.webp` ảnh lớn, `*-sm.webp` ảnh nhỏ). Logo: `src/assets/logo.png` (tách nền từ logo gốc). Ảnh gốc không nằm trong repo.
- `src/services/bookingApi.js` – adapter để nối API đặt phòng sau này.

## Dữ liệu còn chờ khách hàng
- **Phòng**: tên, sức chứa, loại giường, tiện nghi, giá, giờ nhận/trả → `src/data/rooms.js` (hiện là 2 thẻ dữ liệu minh họa do đội phát triển soạn tạm, chưa được khách xác nhận).
- **Bảng giá**: chưa có dữ liệu nên chỉ hiển thị khối mời yêu cầu báo giá. Section tiện nghi đã được gỡ bỏ.
- **Facebook / Zalo / Messenger**: chưa có URL → nút tự ẩn. Điền vào `src/data/contact.js`.
- **Link Google Maps chính thức** từng cơ sở: điền `mapUrl` trong `src/data/properties.js`. Tạm thời nút dùng liên kết tìm kiếm Google Maps theo địa chỉ đã cung cấp (không dùng tọa độ).
- **Số điện thoại**: `0933309981` do khách cung cấp; `0975141372` suy ra từ poster Phan Thiết của khách (prompt ghi `975141372`) – cần xác nhận.
- **Ảnh theo cơ sở**: chỉ ảnh mặt tiền (Mũi Né) và ảnh tường có chữ "The Moon Phan Thiet" được gán cho cơ sở; các ảnh còn lại dùng trong thư viện chung, chưa gắn nhãn cơ sở.

## Form đặt phòng
Có validation (ngày nhận không trước hôm nay, ngày trả sau ngày nhận…). Khi chưa có API, form **không** báo gửi thành công: hiển thị "Biểu mẫu chưa được kết nối", bản tóm tắt để sao chép và nút gọi điện. Không lưu dữ liệu cá nhân vào localStorage.
