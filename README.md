# SHOWROOM TOTO PHÚ CƯỜNG
## Landing Page Chương Trình Tri Ân Khách Hàng – Bốc Thăm Trúng Thưởng

Website tĩnh chuyên nghiệp (Static Advertising Landing Page) giới thiệu chương trình tri ân khách hàng và bốc thăm trúng thưởng thiết bị vệ sinh cao cấp TOTO tại **Showroom TOTO Phú Cường**.

Tên miền dự kiến: `phucuongtt.com`  
Nền tảng triển khai: GitHub + Vercel / Cloudflare Pages / Static Hosting

---

## 1. Điểm Nổi Bật Của Ứng Dụng

- **100% Thuần Tĩnh (Static)**: Không cần backend, cơ sở dữ liệu hay tài khoản quản trị. Tốc độ tải trang siêu tốc, bảo mật tuyệt đối, chi phí vận hành $0 trên Vercel.
- **Tập Trung Cấu Hình Duy Nhất**: Toàn bộ nội dung, số điện thoại, ngày giờ, cơ cấu giải thưởng, điều kiện tham gia và hình ảnh đều nằm tại:
- **Tập Trung Cấu Hình Duy Nhất**: Toàn bộ nội dung, số điện thoại, ngày giờ, cơ cấu giải thưởng, điều kiện tham gia và hình ảnh đều nằm tại:
  `src/config/campaign.ts`
- **Địa Chỉ Showroom Chính Thức**: `748 Nguyễn Văn Linh - P.Hiến Nam - TP.Hưng Yên` (tích hợp đầy đủ trên Hero, phần liên hệ, bản đồ Google Maps, thể lệ và chân trang).
- **Font Chữ Chuẩn Tiếng Việt Cao Cấp (Inter)**:
  `font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;`
  Đảm bảo 100% hiển thị hoàn hảo dấu tiếng Việt Unicode, không bao giờ bị lỗi font (tofu), nhảy dòng hay lệch dấu trên mọi màn hình máy tính và điện thoại.
- **Thiết Kế Đẳng Cấp Chuẩn TOTO**: Màu sắc trang nhã (Trắng ngà `#FAF7F2`, Nâu đậm `#35271F`, Đỏ trầm `#800F21`, Vàng champagne `#C5A36A`).
- **Tự Động Cập Nhật Trạng Thái Theo Thời Gian Thực (Asia/Ho_Chi_Minh)**:
  - Trước `01/11/2026`: Tự động gắn nhãn "Sắp diễn ra".
  - Từ `01/11/2026` đến `19/12/2026`: Gắn nhãn "Đang diễn ra".
  - Sau `19/12/2026`: Gắn nhãn "Chương trình đã kết thúc" và chuyển đổi thông điệp phù hợp.
- **Hình Ảnh Thực Tế Có Lightbox**: Tích hợp toàn bộ 14 ảnh không gian showroom và trải nghiệm thực tế của khách hàng, hỗ trợ phóng to toàn màn hình và đóng bằng phím `Escape`.
- **Thanh Tác Vụ Cố Định Trên Điện Thoại**: Nút "Gọi tư vấn" và "Xem giải thưởng" bám chân màn hình giúp tối ưu tỷ lệ chuyển đổi khi chạy quảng cáo (Facebook Ads, Google Ads).

---

## 2. Hướng Dẫn Chạy Cục Bộ (Local Development)

### Cài đặt dependencies:
```bash
npm install
```

### Chạy máy chủ thử nghiệm:
```bash
npm run dev
```
Trình duyệt sẽ mở tại `http://localhost:3000` (hoặc cổng hiển thị trên terminal).

### Kiểm tra bản dựng xuất xưởng (Production Build):
```bash
npm run build
```
Thư mục `dist/` sẽ được tạo ra với toàn bộ mã nguồn HTML/CSS/JS đã nén gọn và tối ưu hóa sẵn sàng tải lên hosting.

---

## 3. Cách Tùy Chỉnh Nội Dung & Hình Ảnh

Chỉ cần mở tệp `src/config/campaign.ts` để chỉnh sửa mọi thông số:

### Thay đổi số hotline hoặc thông tin mạng xã hội:
```typescript
brand: {
  hotline: "tel:0912056534",
  hotlineDisplay: "0912 056 534",
  // Khi có thông tin chính thức, hãy điền vào các trường dưới đây (nếu để trống "" sẽ tự động ẩn trên giao diện):
  address: "Địa chỉ showroom chính thức...",
  fanpageUrl: "https://facebook.com/...",
  zaloUrl: "https://zalo.me/...",
  googleMapsUrl: "https://maps.google.com/...",
}
```

### Thay đổi thời gian chương trình:
```typescript
timeline: {
  startDateStr: "2026-11-01T00:00:00+07:00",
  endDateStr: "2026-12-19T23:59:59+07:00",
  dateDisplay: "Từ 01/11/2026 đến hết 19/12/2026",
}
```

### Thay thế hoặc cập nhật ảnh:
- Thư mục chứa ảnh: `/public/assets/aistudio/`
- Khi thay ảnh mới, bạn chỉ cần chép tệp ảnh vào thư mục trên và đổi đường dẫn trong `src/config/campaign.ts`.

---

## 4. Hướng Dẫn Triển Khai Lên GitHub & Vercel (Tên Miền `phucuongtt.com`)

### Bước 1: Đẩy mã nguồn lên kho lưu trữ GitHub
```bash
git init
git add .
git commit -m "Khoi tao landing page Showroom TOTO Phu Cuong"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/toto-phu-cuong-landing.git
git push -u origin main
```

### Bước 2: Liên kết với Vercel
1. Đăng nhập vào [Vercel](https://vercel.com) bằng tài khoản GitHub.
2. Chọn **"Add New Project"** -> Chọn repository vừa tải lên.
3. Phần **Framework Preset**: Chọn **Vite**.
4. Nhấn **"Deploy"**. Vercel sẽ tự động build và cung cấp liên kết truy cập tức thì (HTTPS miễn phí).

### Bước 3: Cấu hình tên miền `phucuongtt.com` trên Vercel
1. Trong bảng điều khiển dự án trên Vercel, vào mục **Settings** -> **Domains**.
2. Nhập `phucuongtt.com` và `www.phucuongtt.com`.
3. Đăng nhập trang quản trị nhà cung cấp tên miền của bạn (PA Việt Nam, Mắt Bão, Cloudflare, Namecheap, v.v.):
   - Thêm bản ghi **A Record**: Host `@` trỏ về IP của Vercel (`76.76.21.21`).
   - Thêm bản ghi **CNAME**: Host `www` trỏ về `cname.vercel-dns.com`.
4. Vercel sẽ tự động cấp chứng chỉ bảo mật SSL (HTTPS) trong vòng 5-15 phút.

---

## 5. Danh Sách Vấn Đề Cần Ban Tổ Chức Phú Cường Xác Nhận (Checklist)

Trong quá trình chuẩn hóa dữ liệu, có một số điểm kỹ thuật cần chủ showroom xác nhận lại:

1. **Chênh lệch tổng giá trị giải thưởng**:
   - Banner truyền thông ghi: *"TỔNG GIÁ TRỊ GIẢI THƯỞNG LÊN ĐẾN 80.000.000 VNĐ"*.
   - Tổng cộng giá trị thực tế của 5 giải thưởng danh mục đã công bố:
     - Giải Đặc Biệt: `34.354.000 VNĐ`
     - Giải Nhất: `17.192.000 VNĐ`
     - Giải Nhì: `13.900.000 VNĐ`
     - Giải Ba: `4.500.000 VNĐ`
     - Giải Khuyến Khích: `3.300.000 VNĐ`
     - **Tổng cộng**: `73.246.000 VNĐ` (Chênh lệch: `6.754.000 VNĐ`).
   - *Khuyến nghị*: Xác nhận lại xem 6.754.000 VNĐ này là các giải phụ/quà tặng check-in showroom chưa liệt kê mã, hay là làm tròn truyền thông, để cập nhật chính xác vào `src/config/campaign.ts`.

2. **Thời gian và hình thức tổ chức bốc thăm**:
   - Cần bổ sung ngày giờ tổ chức buổi lễ quay số chính xác (ví dụ: ngày 20/12/2026 lúc mấy giờ) và hình thức (trực tiếp tại showroom hay có livestream fanpage).

3. **Địa chỉ showroom & Đường dẫn Fanpage/Zalo**:
   - Hiện hệ thống đang để các trường mạng xã hội và địa chỉ là tùy chọn trong `src/config/campaign.ts`. Chỉ cần điền địa chỉ và link chính thức khi có để hiển thị lên chân trang và thanh liên hệ.
