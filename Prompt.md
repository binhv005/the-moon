# PROMPT THIẾT KẾ LANDING PAGE THE MOON MUINE HOMESTAY BẰNG REACT

## 1. VAI TRÒ VÀ MỤC TIÊU

Bạn là Senior Frontend Developer, UI/UX Designer và chuyên gia tối ưu chuyển đổi website trong lĩnh vực du lịch, homestay và khách sạn.

Hãy xây dựng một website landing page chuyên nghiệp cho **The Moon Muine Homestay**, sử dụng React, có giao diện hiện đại, tươi sáng, mang lại cảm giác thư giãn, gần gũi với biển Mũi Né và Phan Thiết.

Mục tiêu chính:

- Giới thiệu thương hiệu The Moon Muine Homestay và The Moon Phan Thiet Homestay.
- Trình bày hình ảnh, loại phòng, tiện nghi, bảng giá và vị trí của hai cơ sở.
- Giúp khách hàng dễ dàng tìm hiểu thông tin và lựa chọn phòng phù hợp.
- Tăng số lượng khách liên hệ trực tiếp qua điện thoại, Zalo và Messenger.
- Hỗ trợ khách gửi yêu cầu đặt phòng nhanh chóng trên điện thoại và máy tính.
- Tối ưu giao diện cho SEO địa phương với các từ khóa liên quan đến homestay Mũi Né, homestay Phan Thiết, thuê phòng ngắn ngày và lưu trú du lịch.

**Yêu cầu quan trọng:** Đây là website giới thiệu và hỗ trợ tiếp nhận yêu cầu đặt phòng. Không được tự tuyên bố rằng phòng đã được đặt thành công nếu chưa có hệ thống xác nhận đặt phòng thực tế.

---

## 2. CÔNG NGHỆ SỬ DỤNG

Sử dụng các công nghệ sau:

- React để xây dựng giao diện.
- Vite để khởi tạo và chạy dự án.
- JavaScript hoặc TypeScript, ưu tiên TypeScript nếu dự án chưa có cấu trúc cố định.
- CSS Modules, CSS thuần hoặc Tailwind CSS để thiết kế giao diện.
- React Router nếu cần điều hướng giữa các trang hoặc đường dẫn chi tiết phòng.
- Lucide React để sử dụng hệ thống icon đồng nhất.
- Framer Motion hoặc Motion để triển khai animation nhẹ nhàng.
- Google Maps hoặc liên kết Google Maps để hỗ trợ khách tìm đường.
- React Hook Form nếu cần quản lý biểu mẫu đặt phòng.

Nếu dự án hiện tại đã có cấu trúc và thư viện phù hợp, hãy ưu tiên sử dụng những gì đang có. Không cài đặt thư viện trùng lặp hoặc thay đổi công nghệ không cần thiết.

Trong giai đoạn đầu, chỉ triển khai frontend React. Không tự tạo backend, database hoặc API giả lập như thể chúng đã hoạt động thực tế.

Có thể tạo dữ liệu phòng mẫu để minh họa bố cục trong quá trình phát triển, nhưng phải đánh dấu rõ dữ liệu minh họa và thay thế bằng dữ liệu thật khi có thông tin.

---

## 3. NGUỒN THÔNG TIN CHÍNH THỨC

Sử dụng chính xác những thông tin được cung cấp dưới đây.

### 3.1. Thông tin thương hiệu

- Tên thương hiệu chính: The Moon Muine Homestay.
- Ngành nghề: Du lịch / Lưu trú.
- Khu vực: Phan Thiết, Bình Thuận, Việt Nam.
- Phong cách thiết kế: Hiện đại, tươi sáng.
- Mô hình dịch vụ: Cho thuê phòng homestay và lưu trú du lịch.

### 3.2. Thông tin liên hệ

- Số điện thoại liên hệ thứ nhất: 975141372.
- Số điện thoại liên hệ thứ hai: 0933309981.
- Kênh liên hệ được cung cấp: Facebook.
- Tên địa điểm trên Google Maps: The Moon Muine Homestay - Google Maps.

Lưu ý về số điện thoại:

- Giữ nguyên số liệu được cung cấp.
- Số 975141372 chưa có mã quốc gia hoặc số 0 ở đầu. Không tự ý chuyển thành một số điện thoại hoàn chỉnh khác.
- Số 0933309981 phải được giữ nguyên.
- Chỉ thiết lập liên kết gọi điện `tel:` cho số đã được xác minh.
- Có thể hiển thị số liên hệ thứ nhất để quản trị viên kiểm tra, nhưng không tự khẳng định đó là số điện thoại Việt Nam đầy đủ.
- Chỉ triển khai Zalo hoặc Messenger bằng liên kết chính xác khi đã có URL hoặc tài khoản chính thức. Không tạo liên kết giả.

### 3.3. Địa chỉ hai cơ sở

**Cơ sở 1 — THE MOON MUINE HOMESTAY**

195/8 Huỳnh Thúc Kháng, Mũi Né.

**Cơ sở 2 — THE MOON PHAN THIET HOMESTAY**

344 Thủ Khoa Huân, Phan Thiết.

Phải trình bày hai cơ sở thành hai khu vực riêng biệt, có tiêu đề, hình ảnh, địa chỉ và nút xem bản đồ tương ứng.

Không gộp hai địa chỉ thành một địa điểm. Không tự bổ sung phường, xã, mã bưu chính hoặc tọa độ nếu chưa xác minh.

### 3.4. Dịch vụ

Giữ đầy đủ các dịch vụ sau:

- Cho thuê phòng homestay.
- Phòng nghỉ ngắn ngày.
- Phòng nghỉ theo ngày/đêm.
- Lưu trú du lịch.

### 3.5. Khách hàng mục tiêu

- Khách du lịch đến Phan Thiết.
- Các cặp đôi.
- Nhóm bạn.
- Gia đình.
- Khách cần thuê phòng ngắn ngày.

Hãy thiết kế nội dung và bố cục phù hợp với những nhóm khách hàng này, nhưng không tự thêm các cam kết như giá rẻ nhất, gần biển nhất, view biển 100%, miễn phí mọi dịch vụ hoặc ưu đãi chưa được cung cấp.

### 3.6. Tài nguyên hình ảnh

Sử dụng thư mục ảnh do khách hàng cung cấp:

https://drive.google.com/drive/u/0/folders/1un46fvaexRh1MUIRjKNrnX-dvqK8EcuD

Đây là nguồn hình ảnh ưu tiên cho website.

Hãy kiểm tra và phân loại hình ảnh thành các nhóm:

- Ảnh tổng thể homestay.
- Ảnh mặt tiền và không gian bên ngoài.
- Ảnh phòng ngủ.
- Ảnh giường và khu vực nghỉ ngơi.
- Ảnh phòng tắm và tiện nghi.
- Ảnh các không gian sinh hoạt chung.
- Ảnh chi tiết trang trí.
- Ảnh khác có liên quan đến cơ sở lưu trú.

Nếu môi trường lập trình không thể truy cập trực tiếp Google Drive, hãy yêu cầu người triển khai tải ảnh về dự án hoặc cung cấp các file ảnh. Không giả định rằng đã đọc được nội dung thư mục.

Tạo cấu trúc tài nguyên dễ quản lý, ví dụ:

`public/images/hero/`

`public/images/muine/`

`public/images/phan-thiet/`

`public/images/rooms/`

`public/images/amenities/`

`public/images/gallery/`

Không sử dụng đường dẫn ảnh giả, không để ảnh bị lỗi và không thay ảnh thật bằng hình ảnh không liên quan.

Nếu chưa có ảnh thật, sử dụng placeholder rõ ràng trong giai đoạn phát triển và ghi chú vị trí cần thay thế.

---

## 4. ĐỊNH HƯỚNG THIẾT KẾ UI/UX

### 4.1. Phong cách tổng thể

Thiết kế một website có cảm giác:

- Hiện đại.
- Tươi sáng.
- Thư giãn.
- Gọn gàng.
- Thân thiện với khách du lịch.
- Có tính thẩm mỹ của một thương hiệu lưu trú chuyên nghiệp.
- Ưu tiên hình ảnh thực tế và trải nghiệm đặt phòng thuận tiện.

Tham khảo phong cách thiết kế của các website boutique hotel, homestay ven biển và khách sạn nghỉ dưỡng hiện đại.

Không sao chép nguyên mẫu của một website khác.

### 4.2. Bảng màu

Sử dụng bảng màu sáng, có liên hệ với biển và không gian nghỉ dưỡng:

- Trắng: màu nền chủ đạo.
- Xanh biển nhạt: màu phụ.
- Xanh ngọc nhạt: màu nhấn.
- Be hoặc màu cát: màu nền bổ trợ.
- Xám đậm: màu văn bản chính.
- Màu xanh đậm: dùng cho nút CTA hoặc các điểm nhấn quan trọng.

Có thể tham khảo:

- `#FFFFFF`
- `#EAF6F8`
- `#DDF1F0`
- `#F5EFE5`
- `#263746`
- `#176B75`

Đây là màu định hướng thiết kế, có thể tinh chỉnh dựa trên ảnh thật và nhận diện thương hiệu.

Tránh sử dụng quá nhiều màu đậm, gradient rực rỡ hoặc màu neon.

### 4.3. Typography

- Sử dụng font chữ hiện đại, dễ đọc, hỗ trợ đầy đủ tiếng Việt.
- Có thể sử dụng Be Vietnam Pro, Inter hoặc một font tương đương.
- Tiêu đề lớn, rõ ràng, có khoảng thở.
- Nội dung mô tả ngắn gọn, dễ đọc trên màn hình nhỏ.
- Phân cấp tiêu đề H1, H2, H3 rõ ràng.
- Hạn chế viết toàn bộ nội dung bằng chữ in hoa.
- Bảo đảm độ tương phản tốt giữa chữ và nền.

### 4.4. Hình ảnh

Hình ảnh là thành phần quan trọng nhất của landing page.

Yêu cầu:

- Sử dụng ảnh thật từ thư mục khách hàng.
- Ảnh phòng phải đủ lớn để nhìn rõ không gian.
- Ưu tiên ảnh ngang tỷ lệ 16:9 hoặc 3:2 cho hero và khu vực giới thiệu.
- Ảnh thẻ phòng có tỷ lệ nhất quán.
- Không kéo giãn ảnh sai tỷ lệ.
- Dùng `object-fit: cover` cho ảnh trang trí và `object-position` phù hợp để không cắt mất nội dung quan trọng.
- Tạo hiệu ứng hover zoom nhẹ cho ảnh phòng.
- Tối ưu dung lượng ảnh bằng WebP hoặc AVIF khi có thể.
- Thiết lập kích thước ảnh để tránh layout shift.
- Dùng lazy loading cho ảnh bên dưới màn hình đầu tiên.
- Không lazy load ảnh hero chính nếu điều đó làm chậm thời gian hiển thị ảnh đầu tiên.

### 4.5. Nguyên tắc bố cục

- Website dạng landing page một trang, cuộn dọc.
- Header có điều hướng đến các section.
- Có thể sử dụng các đường dẫn anchor như `#gioi-thieu`, `#phong`, `#bang-gia`, `#vi-tri`, `#lien-he`.
- Các section có sự phân biệt nhẹ về màu nền.
- Giữ khoảng trắng hợp lý.
- Không nhồi nhét quá nhiều card vào cùng một section.
- Nội dung quan trọng không bị che bởi header cố định.
- Mỗi section cần có chiều cao phù hợp với nội dung, không ép tất cả section thành chiều cao màn hình nếu nội dung quá dài.
- Hiển thị đẹp trên desktop, tablet và mobile.

---

## 5. CẤU TRÚC LANDING PAGE CHI TIẾT

### SECTION 1 — HEADER / THANH ĐIỀU HƯỚNG

Thiết kế header sạch, hiện đại.

Bên trái:

- Logo hoặc wordmark: THE MOON.
- Dòng tên đầy đủ: The Moon Muine Homestay.

Nếu khách hàng chưa cung cấp logo riêng, dùng wordmark bằng chữ, không tự vẽ một logo chính thức khác.

Bên phải:

- Trang chủ.
- Giới thiệu homestay.
- Danh sách phòng.
- Hình ảnh.
- Bảng giá.
- Tiện nghi.
- Vị trí.
- Liên hệ.

CTA chính: **Đặt phòng**.

Yêu cầu tương tác:

- Header có thể sticky khi cuộn.
- Nền trắng hoặc trắng bán trong suốt.
- Khi cuộn, thêm bóng đổ nhẹ.
- Menu desktop không bị tràn.
- Menu mobile chuyển thành hamburger menu.
- Khi nhấn menu trên mobile, điều hướng đúng đến section.
- Đóng menu sau khi người dùng chọn mục.
- Tạo trạng thái hover và focus rõ ràng.
- Không để header che tiêu đề section khi cuộn đến anchor.

### SECTION 2 — HERO BANNER

Đây là khu vực quan trọng nhất và phải tạo ấn tượng ngay khi khách truy cập.

Bố cục đề xuất:

- Ảnh homestay chất lượng cao chiếm phần lớn diện tích.
- Có thể sử dụng layout ảnh lớn kết hợp một ảnh phụ nếu ảnh thực tế cho phép.
- Overlay nhẹ để bảo đảm chữ dễ đọc.
- Nội dung giới thiệu ngắn gọn.
- CTA đặt phòng nổi bật.

Nội dung:

Eyebrow:

`WELCOME TO THE MOON`

Tiêu đề H1:

`The Moon Muine Homestay`

Tiêu đề phụ:

`Không gian nghỉ ngơi dành cho chuyến đi của bạn tại Mũi Né và Phan Thiết`

Mô tả:

`Khám phá không gian lưu trú phù hợp cho các cặp đôi, nhóm bạn, gia đình và những chuyến đi ngắn ngày.`

Hai CTA:

- `Khám phá phòng`
- `Liên hệ đặt phòng`

Có thể bổ sung nhãn vị trí:

`Mũi Né · Phan Thiết`

Không tự thêm số sao, đánh giá khách hàng, số lượng phòng, giá từ hoặc thành tích thương hiệu khi chưa có dữ liệu.

Hiệu ứng:

- Ảnh hero xuất hiện mượt mà.
- Tiêu đề fade-up.
- Mô tả và CTA xuất hiện lần lượt với độ trễ ngắn.
- Có thể dùng hiệu ứng parallax rất nhẹ trên desktop.
- Tránh hiệu ứng làm chậm tải trang hoặc gây giật trên mobile.

Trên mobile, nội dung phải dễ đọc và CTA phải nằm trong vùng nhìn thấy sớm.

### SECTION 3 — GIỚI THIỆU HOMESTAY

Tiêu đề:

`Chào mừng bạn đến với The Moon`

Mô tả:

`The Moon Muine Homestay mang đến lựa chọn lưu trú dành cho khách du lịch đến Mũi Né và Phan Thiết, từ những chuyến đi ngắn ngày đến kỳ nghỉ cùng người thân và bạn bè.`

Trình bày 4 dịch vụ thành các khối nội dung có icon:

1. Cho thuê phòng homestay.
2. Phòng nghỉ ngắn ngày.
3. Phòng nghỉ theo ngày/đêm.
4. Lưu trú du lịch.

Mỗi khối có icon, tiêu đề và mô tả ngắn. Phần mô tả là nội dung biên tập hỗ trợ diễn đạt đúng dịch vụ, không bổ sung các cam kết chưa được xác nhận.

Bố cục:

- Desktop: 2 cột giữa ảnh và nội dung hoặc 4 khối dịch vụ trên một hàng.
- Tablet: 2 cột.
- Mobile: 1 cột hoặc 2 cột nếu đủ không gian.

Có thể sử dụng nền trắng xen kẽ nền xanh biển nhạt.

### SECTION 4 — GIỚI THIỆU HAI CƠ SỞ

Tiêu đề:

`Khám phá hai cơ sở của The Moon`

Tạo hai card lớn, mỗi card đại diện cho một cơ sở.

CARD A:

Tên:

`THE MOON MUINE HOMESTAY`

Địa chỉ:

`195/8 Huỳnh Thúc Kháng, Mũi Né`

CTA:

`Xem vị trí`

CARD B:

Tên:

`THE MOON PHAN THIET HOMESTAY`

Địa chỉ:

`344 Thủ Khoa Huân, Phan Thiết`

CTA:

`Xem vị trí`

Mỗi card bao gồm:

- Ảnh thật tương ứng với cơ sở.
- Tên cơ sở.
- Địa chỉ đầy đủ theo thông tin đã cung cấp.
- Nút xem bản đồ.
- Nút liên hệ hoặc yêu cầu đặt phòng.

Không sử dụng ảnh của một cơ sở để khẳng định là ảnh của cơ sở còn lại nếu chưa xác định được nguồn ảnh.

Không tự tạo hai đường dẫn Google Maps khác nhau từ cùng một URL khi chưa có link riêng cho từng địa điểm.

### SECTION 5 — DANH SÁCH PHÒNG

Tiêu đề:

`Tìm không gian nghỉ ngơi phù hợp`

Mô tả:

`Khám phá các lựa chọn phòng lưu trú phù hợp với nhu cầu của bạn.`

Thiết kế các thẻ phòng có tính thẩm mỹ cao.

Mỗi thẻ phòng có thể bao gồm:

- Ảnh đại diện.
- Tên phòng.
- Mô tả ngắn.
- Sức chứa.
- Loại giường.
- Tiện nghi.
- Giá phòng.
- Nút xem chi tiết.
- Nút yêu cầu đặt phòng.

Tuy nhiên, tên phòng, sức chứa, loại giường, tiện nghi cụ thể và giá phòng hiện chưa được cung cấp.

Vì vậy:

- Không tự bịa tên phòng như Deluxe, Superior, Family Room hoặc Sea View Room để trình bày như dữ liệu thật.
- Không tự đặt giá.
- Không tự gán sức chứa hoặc loại giường.
- Không tự tuyên bố phòng có ban công, view biển, bồn tắm hoặc tiện ích cụ thể.
- Nếu chưa có dữ liệu, tạo giao diện mẫu có chú thích `Dữ liệu phòng cần cập nhật`.
- Có thể sử dụng cấu trúc dữ liệu mẫu dễ thay thế trong tương lai.

Nếu có nhiều phòng, hiển thị grid 3 cột trên desktop, 2 cột trên tablet và 1 cột trên mobile.

Thẻ phòng cần đồng nhất chiều cao, ảnh có cùng tỷ lệ và CTA nằm ở vị trí hợp lý.

Bổ sung bộ lọc nếu dữ liệu thực tế cho phép:

- Cơ sở.
- Loại phòng.
- Số khách.
- Khoảng giá.

Không hiển thị bộ lọc giả không có chức năng.

### SECTION 6 — CHI TIẾT PHÒNG

Tạo khu vực xem chi tiết phòng khi khách nhấn vào một thẻ phòng.

Có thể triển khai bằng modal, drawer hoặc section chi tiết trên cùng trang.

Nội dung:

- Gallery ảnh.
- Tên phòng.
- Mô tả.
- Tiện nghi.
- Sức chứa.
- Giá phòng.
- Quy định nhận/trả phòng nếu có dữ liệu.
- Nút yêu cầu đặt phòng.

Các thông tin chưa được cung cấp phải được ẩn hoặc để trạng thái chờ cập nhật, không hiển thị như sự thật.

Tính năng:

- Chuyển ảnh trước/sau.
- Mở ảnh lớn.
- Đóng modal bằng nút đóng hoặc phím Escape.
- Khóa cuộn nền khi modal mở.
- Hỗ trợ thao tác bằng bàn phím.
- Hiển thị tốt trên mobile.

### SECTION 7 — THƯ VIỆN HÌNH ẢNH

Tiêu đề:

`Không gian tại The Moon`

Tạo gallery có tính thẩm mỹ, ưu tiên hình ảnh thật.

Bố cục:

- Một ảnh lớn kết hợp nhiều ảnh nhỏ.
- Hoặc masonry grid với kích thước ảnh đa dạng nhưng có kiểm soát.
- Mobile chuyển thành grid 2 cột hoặc carousel tùy số lượng ảnh.

Tính năng:

- Nhấn ảnh để mở lightbox.
- Có nút trước/sau.
- Hỗ trợ đóng bằng Escape.
- Hiển thị chỉ số ảnh nếu cần.
- Có thể vuốt trên điện thoại.
- Tải ảnh lớn khi người dùng mở ảnh.

Không đưa văn bản quảng cáo lên ảnh. Không sử dụng hình ảnh minh họa không liên quan đến homestay.

Nếu có đủ ảnh và xác định được cơ sở, có thể chia thành hai tab:

- The Moon Muine Homestay.
- The Moon Phan Thiet Homestay.

Nếu chưa xác định được cơ sở của từng ảnh, chỉ sử dụng gallery chung và không gắn nhãn sai.

### SECTION 8 — BẢNG GIÁ

Tiêu đề:

`Bảng giá phòng`

Mô tả:

`Liên hệ với The Moon để được tư vấn lựa chọn phòng và thông tin giá phù hợp với thời gian lưu trú của bạn.`

Do chưa có bảng giá chính thức, hãy thiết kế một khu vực bảng giá có khả năng cập nhật dữ liệu sau này.

Không được:

- Tự đặt giá phòng.
- Tạo giá khuyến mãi không có thật.
- Tạo giá cuối tuần hoặc ngày lễ khi chưa được cung cấp.
- Tự tạo giá gạch ngang và giá giảm.
- Hiển thị giá `0đ` như giá thật.

Nếu chưa có dữ liệu, thay bảng giá cụ thể bằng một khối CTA đẹp:

`Bạn đang tìm phòng tại Mũi Né hoặc Phan Thiết?`

`Liên hệ với chúng tôi để nhận thông tin phòng và giá theo ngày lưu trú.`

CTA:

`Yêu cầu báo giá`

Sau này, khi có dữ liệu, bảng giá có thể hỗ trợ:

- Tên phòng.
- Giá ngày thường.
- Giá cuối tuần.
- Giá ngày lễ.
- Giá theo ngày/đêm.
- Ghi chú phụ thu.

Chỉ hiển thị những trường có dữ liệu đã xác minh.

### SECTION 9 — TIỆN NGHI

Tiêu đề:

`Tiện nghi dành cho kỳ nghỉ`

Thiết kế khu vực tiện nghi bằng icon và mô tả ngắn.

Lưu ý quan trọng: Chưa có danh sách tiện nghi chính thức. Không tự khẳng định có Wi-Fi, điều hòa, bãi đỗ xe, bếp, hồ bơi, máy sấy tóc hoặc các tiện ích cụ thể khác.

Có thể xây dựng component để quản trị viên dễ cập nhật danh sách sau này.

Nếu chưa có dữ liệu, chỉ hiển thị lời mời liên hệ:

`Bạn muốn tìm hiểu thêm về tiện nghi và dịch vụ của phòng?`

CTA:

`Liên hệ tư vấn`

Khi khách hàng cung cấp dữ liệu thật, bổ sung các tiện nghi tương ứng và icon phù hợp.

### SECTION 10 — VỊ TRÍ VÀ BẢN ĐỒ

Tiêu đề:

`Tìm đường đến The Moon`

Trình bày hai địa điểm riêng biệt.

Địa điểm 1:

- THE MOON MUINE HOMESTAY.
- 195/8 Huỳnh Thúc Kháng, Mũi Né.
- Nút `Xem trên Google Maps`.

Địa điểm 2:

- THE MOON PHAN THIET HOMESTAY.
- 344 Thủ Khoa Huân, Phan Thiết.
- Nút `Xem trên Google Maps`.

Sử dụng URL Google Maps chính xác khi được cung cấp.

Hiện tại chỉ có tên địa điểm `The Moon Muine Homestay - Google Maps`, chưa có URL cụ thể cho cả hai cơ sở. Vì vậy, cần yêu cầu khách hàng xác nhận link chính thức của từng địa điểm trước khi triển khai nút điều hướng cuối cùng.

Không tự đặt tọa độ hoặc hiển thị bản đồ với vị trí không được xác minh.

Có thể chuẩn bị sẵn component bản đồ để tích hợp sau.

### SECTION 11 — QUY TRÌNH ĐẶT PHÒNG

Tiêu đề:

`Đặt phòng đơn giản`

Trình bày 3 bước:

**Bước 1 — Chọn cơ sở**

Khách lựa chọn The Moon Muine Homestay hoặc The Moon Phan Thiet Homestay.

**Bước 2 — Gửi yêu cầu**

Khách nhập ngày nhận phòng, ngày trả phòng, số lượng khách và thông tin liên hệ.

**Bước 3 — Xác nhận với homestay**

Homestay liên hệ lại để xác nhận tình trạng phòng, giá và các thông tin liên quan.

Lưu ý: Đây là quy trình đề xuất cho giao diện. Không tuyên bố rằng hệ thống đã xác nhận tình trạng phòng theo thời gian thực.

### SECTION 12 — FORM ĐẶT PHÒNG / YÊU CẦU TƯ VẤN

Tiêu đề:

`Lên kế hoạch cho kỳ nghỉ của bạn`

Mô tả:

`Gửi thông tin để The Moon có thể liên hệ tư vấn phòng phù hợp với nhu cầu lưu trú của bạn.`

Các trường dữ liệu:

1. Họ và tên — bắt buộc.
2. Số điện thoại — bắt buộc.
3. Cơ sở muốn đặt — bắt buộc.
4. Ngày nhận phòng.
5. Ngày trả phòng.
6. Số lượng khách.
7. Loại phòng mong muốn — tùy chọn.
8. Ghi chú thêm — tùy chọn.

Nút submit:

`Gửi yêu cầu đặt phòng`

Yêu cầu UX:

- Có label rõ ràng cho từng trường.
- Có validation.
- Ngày trả phòng phải sau ngày nhận phòng.
- Ngày nhận phòng không được trước ngày hiện tại.
- Hiển thị lỗi ngay bên dưới trường tương ứng.
- Có trạng thái đang gửi.
- Chặn gửi nhiều lần liên tiếp.
- Trên mobile, input không bị che bởi bàn phím.
- Có thông báo rõ ràng sau khi xử lý.

Vì giai đoạn hiện tại chỉ triển khai frontend:

- Có thể tạo giao diện form và validation.
- Không giả lập gửi thành công đến homestay nếu chưa tích hợp backend.
- Khi chưa có API, hiển thị thông báo rằng form chưa được kết nối và cung cấp nút gọi điện hoặc kênh liên hệ đã xác minh.
- Thiết kế component để sau này dễ tích hợp API hoặc dịch vụ gửi thông báo.
- Không lưu thông tin cá nhân vào localStorage nếu không cần thiết.

### SECTION 13 — LIÊN HỆ NHANH

Tiêu đề:

`The Moon luôn sẵn sàng hỗ trợ bạn`

Hiển thị:

- Tên thương hiệu.
- Hai cơ sở.
- Địa chỉ từng cơ sở.
- Số điện thoại đã xác minh.
- Liên kết Facebook chính thức khi được cung cấp.
- Liên kết Google Maps chính thức khi được cung cấp.

Thiết kế các nút CTA:

- Gọi điện.
- Zalo.
- Messenger.
- Google Maps.
- Đặt phòng.

Yêu cầu:

- Nút gọi điện sử dụng liên kết `tel:` chính xác.
- Nút Zalo cần URL hoặc số tài khoản đã xác minh.
- Nút Messenger cần URL trang Facebook hoặc Messenger chính thức.
- Nút Google Maps cần link địa điểm chính xác.
- Không để các nút tương tác dẫn đến `#` hoặc URL không tồn tại.
- Nếu thiếu URL, ẩn nút hoặc hiển thị trạng thái cần cấu hình trong môi trường phát triển.

### SECTION 14 — FOOTER

Footer cần có:

- The Moon Muine Homestay.
- Giới thiệu ngắn về dịch vụ lưu trú.
- Điều hướng nhanh đến các section.
- Địa chỉ cơ sở Mũi Né.
- Địa chỉ cơ sở Phan Thiết.
- Các kênh liên hệ đã xác minh.
- Bản quyền website.

Không tự tạo mã số thuế, tên pháp nhân, chính sách pháp lý hoặc thông tin doanh nghiệp chưa được cung cấp.

---

## 6. CÁC TÍNH NĂNG TƯƠNG TÁC

Triển khai các tính năng sau:

### 6.1. Điều hướng cuộn trang

- Menu điều hướng đến đúng section.
- Cuộn mượt.
- Tính toán offset của header sticky.
- Không che tiêu đề section.
- Trên mobile, menu đóng sau khi chọn mục.
- Có thể đánh dấu mục menu đang được xem nếu triển khai ổn định.

### 6.2. Nút đặt phòng nổi

Tạo nhóm nút liên hệ nhanh cố định ở góc dưới màn hình.

Desktop:

- Các nút có icon và nhãn.
- Không che nội dung quan trọng.
- Không che nút submit của form.

Mobile:

- Có thể sử dụng thanh CTA cố định phía dưới gồm `Gọi điện` và `Đặt phòng`.
- Chừa khoảng an toàn cho thiết bị có tai thỏ hoặc thanh điều hướng.
- Không làm giảm diện tích đọc nội dung quá nhiều.

Chỉ bật những kênh đã có URL hoặc số điện thoại hợp lệ.

### 6.3. Nút quay về đầu trang

- Xuất hiện sau khi người dùng cuộn xuống một khoảng nhất định.
- Đặt ở góc dưới bên phải.
- Không chồng lấn với nhóm nút liên hệ.
- Nhấn để cuộn về đầu trang.
- Có aria-label.
- Có animation nhẹ.

### 6.4. Animation khi cuộn

Sử dụng Framer Motion hoặc Intersection Observer để tạo hiệu ứng:

- Fade-up cho tiêu đề.
- Fade-in cho đoạn mô tả.
- Slide-in nhẹ cho ảnh từ trái hoặc phải.
- Stagger cho nhóm card phòng.
- Zoom nhẹ khi hover ảnh.
- Chuyển cảnh nhẹ giữa các thành phần.

Nguyên tắc:

- Animation ngắn, mượt và tinh tế.
- Không làm nội dung biến mất nếu JavaScript lỗi.
- Không chạy animation nặng trên toàn bộ ảnh cùng lúc.
- Tránh animation khiến trang bị giật.
- Tôn trọng `prefers-reduced-motion`.
- Nội dung phải hiển thị được ngay cả khi người dùng tắt hiệu ứng chuyển động.

### 6.5. Trạng thái tương tác

Mọi nút phải có chức năng rõ ràng:

- Hover.
- Focus.
- Active.
- Disabled khi cần.
- Loading khi xử lý.
- Error và success khi có quy trình xử lý thật.

Không tạo các nút chỉ để trang trí nhưng không thực hiện hành động.

---

## 7. RESPONSIVE DESIGN

Triển khai theo phương pháp mobile-first.

### Desktop — từ 1200px trở lên

- Header nằm trên một hàng.
- Hero có ảnh lớn và nội dung rõ ràng.
- Danh sách phòng hiển thị 3 cột nếu không gian phù hợp.
- Hai cơ sở hiển thị cân đối.
- Gallery có bố cục đa dạng.
- Form đặt phòng có thể chia thành 2 cột.

### Tablet — khoảng 768px đến 1199px

- Header được tinh gọn.
- Danh sách phòng hiển thị 2 cột.
- Khoảng cách section được điều chỉnh.
- Hero ưu tiên hình ảnh và CTA.
- Form có thể chuyển sang một hoặc hai cột tùy chiều rộng.

### Mobile — dưới 768px

- Menu hamburger.
- Nội dung một cột.
- Ảnh không tràn màn hình.
- Tiêu đề tự co giãn bằng `clamp()`.
- Nút CTA đủ lớn để thao tác bằng ngón tay.
- Không xuất hiện horizontal scroll.
- Form dễ nhập liệu.
- Card phòng không quá dài.
- Gallery hỗ trợ vuốt.
- Các nút liên hệ không che nội dung.
- Footer hiển thị theo từng nhóm.

Kiểm tra ít nhất tại các độ rộng 360px, 390px, 768px, 1024px, 1280px và 1440px.

---

## 8. SEO VÀ TỐI ƯU HIỆU SUẤT

### 8.1. SEO on-page

Tối ưu theo các từ khóa tự nhiên:

- The Moon Muine Homestay.
- Homestay Mũi Né.
- Homestay Phan Thiết.
- Thuê phòng homestay Mũi Né.
- Phòng nghỉ ngắn ngày Phan Thiết.
- Lưu trú du lịch Phan Thiết.

Không nhồi nhét từ khóa.

Thiết lập:

- Title.
- Meta description.
- Canonical nếu đã xác định domain chính thức.
- Open Graph.
- Favicon khi có tài nguyên.
- Heading hierarchy rõ ràng.
- Alt text mô tả đúng nội dung ảnh.
- Internal anchor links.
- URL thân thiện nếu triển khai các trang chi tiết.

Tiêu đề SEO gợi ý:

`The Moon Muine Homestay | Lưu trú tại Mũi Né, Phan Thiết`

Meta description gợi ý:

`Khám phá The Moon Muine Homestay và The Moon Phan Thiet Homestay. Tìm hiểu thông tin lưu trú, hình ảnh, các cơ sở và liên hệ đặt phòng tại Phan Thiết.`

Đây là nội dung gợi ý, cần kiểm tra độ dài và thông tin thực tế trước khi xuất bản.

Không tự tạo đánh giá, xếp hạng sao hoặc dữ liệu cấu trúc giả. Chỉ thêm LocalBusiness, Hotel hoặc LodgingBusiness structured data khi các trường dữ liệu có căn cứ.

### 8.2. Tối ưu tốc độ

- Tối ưu ảnh bằng WebP/AVIF khi phù hợp.
- Lazy load ảnh bên dưới fold.
- Tránh tải thư viện nặng không cần thiết.
- Chia component hợp lý.
- Tránh render lại toàn bộ trang khi không cần thiết.
- Dùng `loading="lazy"` và `decoding="async"` cho ảnh phù hợp.
- Đặt `width` và `height` hoặc `aspect-ratio` cho ảnh.
- Giảm layout shift.
- Hạn chế hiệu ứng blur lớn, backdrop-filter nặng và parallax phức tạp.
- Không tải nhiều font hoặc nhiều biến thể font không cần thiết.
- Mục tiêu Lighthouse: Performance, Accessibility, Best Practices và SEO đạt mức cao nhất có thể trong điều kiện triển khai thực tế.

### 8.3. Accessibility

- Dùng semantic HTML.
- Có label cho input.
- Có alt text phù hợp.
- Đảm bảo độ tương phản.
- Nút thao tác bằng bàn phím được.
- Focus indicator rõ ràng.
- Không chỉ sử dụng màu sắc để truyền đạt trạng thái.
- Modal và menu có quản lý focus phù hợp.

---

## 9. CẤU TRÚC COMPONENT ĐỀ XUẤT

Tổ chức mã nguồn thành các component có thể tái sử dụng.

Ví dụ:

`src/`
- `components/`
  - `Header.jsx`
  - `MobileMenu.jsx`
  - `HeroSection.jsx`
  - `SectionHeading.jsx`
  - `ServiceCard.jsx`
  - `PropertyCard.jsx`
  - `RoomCard.jsx`
  - `RoomDetailModal.jsx`
  - `GallerySection.jsx`
  - `Lightbox.jsx`
  - `PricingSection.jsx`
  - `AmenitiesSection.jsx`
  - `LocationSection.jsx`
  - `BookingSteps.jsx`
  - `BookingForm.jsx`
  - `ContactButtons.jsx`
  - `BackToTop.jsx`
  - `Footer.jsx`
- `data/`
  - `properties.js`
  - `rooms.js`
  - `amenities.js`
  - `gallery.js`
  - `contact.js`
- `hooks/`
  - `useScrollPosition.js`
- `styles/`
  - `global.css`
  - `variables.css`
  - `animations.css`
- `App.jsx`
- `main.jsx`

Đây là cấu trúc tham khảo. Có thể thay đổi nếu dự án hiện tại có kiến trúc tốt hơn.

Yêu cầu:

- Không viết toàn bộ website trong một component duy nhất.
- Không lặp lại markup giống nhau cho các card.
- Dùng dữ liệu cấu hình để quản lý thông tin hai cơ sở.
- Tách dữ liệu phòng khỏi giao diện.
- Tách URL liên hệ ra một file cấu hình.
- Không hardcode số điện thoại hoặc link ở nhiều component.
- Tạo component dễ cập nhật khi khách hàng bổ sung ảnh, giá và tiện nghi.

---

## 10. CẤU TRÚC DỮ LIỆU

Thiết kế dữ liệu có khả năng mở rộng.

Ví dụ cấu trúc cho hai cơ sở:

```js
export const properties = [
  {
    id: "moon-muine",
    name: "THE MOON MUINE HOMESTAY",
    address: "195/8 Huỳnh Thúc Kháng, Mũi Né",
    mapUrl: null,
    images: [],
  },
  {
    id: "moon-phan-thiet",
    name: "THE MOON PHAN THIET HOMESTAY",
    address: "344 Thủ Khoa Huân, Phan Thiết",
    mapUrl: null,
    images: [],
  },
];
```

Các trường chưa được xác minh phải để trạng thái chưa cấu hình, không thay bằng dữ liệu bịa.

Danh sách phòng, giá, tiện nghi, Facebook, Zalo và Google Maps cũng nên được lưu tập trung trong các file cấu hình riêng.

Khi tích hợp URL thực tế, xác thực URL trước khi tạo liên kết.

---

## 11. QUY TẮC BẮT BUỘC: KHÔNG LÀM SAI LỆCH THÔNG TIN

Đây là yêu cầu ưu tiên cao nhất.

1. Không tự ý thay đổi tên thương hiệu.
2. Không xóa hai địa chỉ cơ sở.
3. Không bỏ sót dịch vụ.
4. Không bỏ sót nhóm khách hàng mục tiêu.
5. Không tự tạo số điện thoại mới.
6. Không tự tạo giá phòng.
7. Không tự tạo danh sách tiện nghi.
8. Không tạo review hoặc testimonial giả.
9. Không tự tạo số sao đánh giá.
10. Không tự tuyên bố phòng còn trống.
11. Không tự tạo chương trình khuyến mãi.
12. Không tự tạo liên kết Facebook, Zalo hoặc Google Maps không được xác minh.
13. Không tự gán sai ảnh cho từng cơ sở.
14. Không dùng placeholder như thể đó là thông tin thật.
15. Không tự xóa nội dung được cung cấp vì lý do bố cục.
16. Có thể chỉnh sửa câu văn để tự nhiên, dễ đọc hơn nhưng phải giữ nguyên ý nghĩa.
17. Nếu thiếu thông tin, hãy tạo vị trí chờ cập nhật và ghi rõ nội dung cần khách hàng bổ sung.
18. Không thay đổi thông tin gốc chỉ để làm cho giao diện trông đầy đủ hơn.

---

## 12. KIỂM TRA TRƯỚC KHI HOÀN THÀNH

Sau khi triển khai, hãy tự kiểm tra toàn bộ website.

### Kiểm tra giao diện

- [ ] Header hoạt động trên desktop và mobile.
- [ ] Hero hiển thị đúng ảnh.
- [ ] Nội dung tiếng Việt không bị lỗi font.
- [ ] Hai cơ sở có địa chỉ riêng.
- [ ] Danh sách phòng không hiển thị dữ liệu giả như thông tin thật.
- [ ] Gallery mở và đóng ảnh đúng cách.
- [ ] Khu vực bảng giá không có giá tự bịa.
- [ ] Tiện nghi không có thông tin chưa xác minh.
- [ ] Form đặt phòng có validation.
- [ ] Footer đầy đủ thông tin.
- [ ] Không có section bị tràn ngang.
- [ ] Không có ảnh bị vỡ.
- [ ] Không có nút bấm vô tác dụng.

### Kiểm tra kỹ thuật

- [ ] Không có lỗi trong console.
- [ ] Không có lỗi import hoặc thiếu dependency.
- [ ] Không có React key warning.
- [ ] Không có lỗi khi reload trang.
- [ ] Không có lỗi khi truy cập anchor.
- [ ] Không có lỗi responsive.
- [ ] Không có liên kết giả.
- [ ] Không hiển thị thông báo gửi form thành công khi chưa có tích hợp thực tế.
- [ ] Không làm hỏng cấu trúc dự án hiện có.

### Kiểm tra trải nghiệm

- [ ] Khách dễ tìm thấy CTA đặt phòng.
- [ ] Khách dễ phân biệt hai cơ sở.
- [ ] Khách dễ xem ảnh.
- [ ] Khách dễ liên hệ.
- [ ] Nội dung dễ đọc trên điện thoại.
- [ ] Animation mượt và không gây cản trở thao tác.

---

## 13. YÊU CẦU ĐẦU RA

Hãy trực tiếp triển khai website hoàn chỉnh trong dự án React, không chỉ trả về bản mô tả thiết kế hoặc một đoạn code minh họa.

Thứ tự thực hiện:

1. Kiểm tra cấu trúc dự án hiện tại.
2. Xác định framework, thư viện và các tài nguyên đã có.
3. Kiểm tra ảnh được cung cấp và phân loại theo cơ sở nếu xác minh được.
4. Xây dựng hệ thống màu, typography và responsive layout.
5. Triển khai đầy đủ các section của landing page.
6. Xây dựng component tái sử dụng.
7. Triển khai tương tác và animation.
8. Thêm cấu hình liên hệ, vị trí và dữ liệu phòng.
9. Kiểm tra responsive và lỗi kỹ thuật.
10. Chạy thử dự án và khắc phục lỗi phát sinh.
11. Tổng kết những gì đã hoàn thành và những dữ liệu còn cần khách hàng cung cấp.

Nếu đang làm việc trong repository có sẵn, hãy ưu tiên chỉnh sửa trực tiếp trên cấu trúc hiện tại. Không xóa file hoặc thay đổi cấu hình quan trọng khi chưa có lý do.

Nếu chưa có dự án, hãy khởi tạo React + Vite với cấu trúc dễ bảo trì.

Kết quả mong muốn là một landing page **hiện đại, tươi sáng, giàu hình ảnh, chuyên nghiệp, tải nhanh, responsive, có khả năng tiếp nhận yêu cầu đặt phòng và sẵn sàng mở rộng trong tương lai**.

Ưu tiên theo thứ tự:

1. Chính xác thông tin.
2. Giao diện đẹp và nhất quán.
3. Hình ảnh chân thực.
4. Trải nghiệm đặt phòng thuận tiện.
5. Responsive.
6. SEO.
7. Hiệu suất và khả năng bảo trì.

Không hy sinh tính chính xác của dữ liệu để làm giao diện trông đầy đủ hơn.
