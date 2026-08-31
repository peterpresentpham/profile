# Peter Present — Code Review

Đánh giá kiến trúc, chất lượng code, hiệu năng và thiết kế giao diện của trang portfolio cá nhân (`peter-present.xyz`, Next.js 16 · React 19 · Tailwind CSS v4), kèm đề xuất tối ưu và làm đẹp theo thứ tự ưu tiên.

_Khảo sát dựa trên trạng thái repo tại nhánh `main`, commit `6143043` — 22/08/2026._

> **Cập nhật 31/08/2026:** Toàn bộ Track 1 đã được triển khai (xem ghi chú ✅ ở từng mục). Hai điểm trong bản khảo sát gốc đã được xác minh và điều chỉnh: `typescript: 6.0.2` là bản phát hành hợp lệ (không phải lỗi), và màu hex trong `ShootingStars.tsx`/`background-beams.tsx` là màu hiệu ứng trang trí riêng biệt (không trùng token thương hiệu `#c778dd`/`#abb2bf`) nên không cần centralize.

## Tóm tắt điều hành

Nhìn chung codebase sạch, không có lỗi nghiêm trọng: không `console.log` sót lại, gần như không dùng `any`, alt text đầy đủ, code-splitting hợp lý. Các đề xuất dưới đây là cải thiện tăng dần, không phải sửa lỗi khẩn cấp.

**Điểm mạnh**
- Stack hiện đại: Next.js 16 (App Router), React 19, TypeScript strict, Tailwind v4.
- Tổ chức thư mục theo section rõ ràng, nhất quán (`views/<section>`).
- Animation dùng đúng thuộc tính hiệu năng tốt (transform/opacity), có `next/dynamic` cho phần dưới màn hình.
- Có commitlint, ESLint, Prettier, Husky — quy trình đã được thiết lập.

**Cần cải thiện**
- Chưa có hệ thống design token đầy đủ — màu và cỡ chữ hardcode rải rác.
- Pre-commit hook chạy full production build, làm chậm mỗi lần commit.
- Ba component overlay gần như trùng lặp hoàn toàn.
- Chỉ có một theme (tối cố định), 4 hiệu ứng nền chạy cùng lúc mọi thiết bị.

---

## Track 1 — Tối ưu code & hiệu năng

### Ưu tiên cao

**✅ Pre-commit chạy full production build trước khi lint**
Mỗi lần commit đang chạy toàn bộ `next build` rồi mới eslint — chậm và sai thứ tự (bản gốc còn có bug: nếu build fail, hook vẫn pass vì exit code cuối cùng là của eslint). Đã đổi thành `bunx tsc --noEmit && bunx eslint ...`, chạy nhanh và block đúng khi có lỗi.
`.husky/pre-commit` · Đã sửa

**✅ Build script format toàn repo trước khi build production**
Đã bỏ `prettier --write .` khỏi script `build`; `next build` giờ chỉ build. `format` vẫn còn để chạy thủ công khi cần, ESLint (đã có `eslint-plugin-prettier`) tiếp tục enforce style qua `--fix`.
`package.json` · Đã sửa

**✅ Tồn tại song song hai lockfile**
Đã xoá `yarn.lock` (README chỉ hướng dẫn `bun install`/`bun dev`, `bun.lockb` là lockfile thật sự được cập nhật liên tục) và thêm `yarn.lock` vào `.gitignore` để tránh tái phát nếu ai đó lỡ chạy `yarn install`.
`bun.lockb`, `yarn.lock`, `.gitignore` · Đã sửa

**~~Version TypeScript bất thường~~ — đã xác minh, không phải lỗi**
Kiểm tra registry npm xác nhận `typescript@6.0.2` là bản phát hành thật (dòng 6.x/7.x hiện có trên npm), và có commit `feat: update typescriptv6` chủ đích nâng cấp. Không cần sửa.
`package.json:47`

### Ưu tiên trung bình

**✅ Ba overlay component trùng lặp gần hoàn toàn**
Sau khi đọc kỹ, nội dung 3 overlay (glyph, màu, animation) khác nhau thật sự — phần trùng lặp chỉ nằm ở lớp wrapper (mask theo con trỏ, class ẩn/hiện) và cách chọn overlay theo id string trong `item.tsx`. Đã chuyển sang map `id → component` (`OVERLAY_BY_PROJECT_ID`) thay cho 3 biến `isXxxProject` + JSX rẽ nhánh; giữ nguyên nội dung riêng của từng overlay.
`views/projects/item.tsx` · Đã sửa

**✅ Sáu handler pointer/touch gần giống hệt nhau**
Đã gộp toàn bộ logic mouse/touch enter/leave/move vào hook dùng chung `usePointerOverlay()`, trả về `isVisible`, `position`, `handlers`. `item.tsx` giờ chỉ spread `handlers` khi project có overlay.
`hooks/usePointerOverlay.ts` (mới), `views/projects/item.tsx` · Đã sửa

**✅ Màu hex hardcode ngoài theme (phạm vi đã điều chỉnh)**
Rà lại: `ShootingStars.tsx`/`background-beams.tsx` dùng màu hiệu ứng riêng (`#9E00FF`, `#18CCFC`...), không trùng token thương hiệu nên giữ nguyên — sửa những chỗ đó sẽ đổi giao diện hiệu ứng chứ không phải dọn trùng lặp. Đã thay toàn bộ `#c778dd`/`#abb2bf` lặp lại thật (trong `globals.css` và `icons/index.tsx`) bằng `var(--color-purple-50)`/`var(--color-gray-50)`; phần gradient theo % opacity chuyển sang `color-mix()` (đã dùng sẵn ở nhiều chỗ khác trong Tailwind v4 output nên an toàn với target browser hiện tại).
`styles/globals.css`, `components/icons/index.tsx` · Đã sửa

**✅ Kiểu `any` còn sót**
`utils.ts`: viết lại `throttle` theo generic `Args extends unknown[]`, bỏ `this: any`/`.apply` (chỉ có một chỗ gọi, dùng arrow function nên không cần preserve `this`). `sparkles.tsx`: `resize: true as any` thực ra là bug — kiểu đúng của tsparticles là `{ enable: boolean }`, không phải `boolean`; đã sửa đúng kiểu, particles giờ mới thật sự bật lại khi resize viewport.
`utils.ts`, `components/aceternity/sparkles.tsx` · Đã sửa

**✅ z-index bất thường**
Tailwind v4 thực ra compile được `z-1000000` (namespace hỗ trợ số nguyên tuỳ ý), nên đây không phải lỗi hiển thị — nhưng vẫn là magic number khó đọc/khó bảo trì. Đã thêm thang token ngữ nghĩa (`--z-decor`, `--z-header-accent`, `--z-header`, `--z-overlay`, `--z-overlay-panel`) trong `globals.css` và áp dụng bằng cú pháp arbitrary-value tham chiếu biến, ví dụ `z-[var(--z-header)]`, ở header, popover mobile, `QuoteSpot`.
`styles/globals.css`, `views/headers/index.tsx`, `views/headers/SmallPopover/index.tsx`, `views/banner/QuoteSpot.tsx` · Đã sửa

### Ưu tiên thấp / nice-to-have

**4 hiệu ứng nền chạy đồng thời trên mọi thiết bị**
Particles, beams, shooting stars và constellation dots đều mount cùng lúc kể cả trên mobile — tốn CPU/pin. Chi tiết cách xử lý nằm trong Track 2, mục 4.
`views/BackgroundEffects.tsx:5-16` · Công sức: vừa

**Dependency particle khá nặng**
`@tsparticles/*` (~22MB unpacked) chỉ để vẽ vài hạt trang trí. Nếu muốn giảm bundle, có thể thay bằng canvas tự viết nhẹ hơn — nhưng chỉ đáng làm nếu đã đo được ảnh hưởng thực tế đến bundle size.
`package.json:15-17` · Công sức: lớn

**Favicon 116KB**
File `.ico` hiện khá nặng so với vai trò của nó. Nén lại hoặc tạo bộ favicon multi-size chuẩn.
`public/favicon.ico` · Công sức: nhỏ

**Asset tham chiếu không khớp**
`images.ts` map key `star` về `/favicon.ico`, trong khi README (bản chưa commit) vừa xoá badge trỏ tới `public/star.svg` — dấu hiệu asset đã đổi tên nhưng chưa dọn hết chỗ tham chiếu cũ.
`configs/images.ts:45`, `README.md (uncommitted)` · Công sức: nhỏ

**Chưa có CI**
Không có `.github/workflows` — lint/typecheck/build chỉ chạy local qua Husky. Thêm một workflow GitHub Actions chạy trên mỗi PR giúp bắt lỗi trước khi merge, độc lập với máy dev.
`.github/workflows (chưa có)` · Công sức: nhỏ

**A11y còn thiếu vài chỗ nhỏ**
Nút filter công nghệ chưa có `aria-pressed` để báo trạng thái chọn cho screen reader; iframe GTM trong `<noscript>` thiếu `title`.
`views/projects/index.tsx:25-51`, `app/layout.tsx:16-23` · Công sức: nhỏ

---

## Track 2 — Làm đẹp (redesign vừa phải)

> **Cập nhật 31/08/2026:** Mục 1, 2, 4, 5 đã triển khai. Mục 3 (dark/light mode) **chủ động bỏ qua** theo quyết định của chủ dự án — công sức lớn, ROI thấp cho một trang portfolio một theme cố định; giữ trong danh sách để cân nhắc lại sau nếu cần.

### ✅ 1. Xây hệ thống design token đầy đủ

Rà lại toàn bộ cỡ chữ đặt cứng theo pixel trong codebase: 3/5 giá trị (18px, 20px, 24px) trùng khớp sẵn với thang mặc định của Tailwind nên đổi thẳng sang `text-lg`/`text-xl`/`text-2xl` — không cần token mới. Riêng 32px (heading lớn, dùng lặp lại ở cả hero banner và `CssHeading`) không khớp thang mặc định nên thêm một token ngữ nghĩa `--text-heading: 2rem` kèm `--text-heading--line-height: 1.25` (tương đương line-height 40px cũ) trong `@theme`.

`styles/globals.css` · Đã sửa

### ✅ 2. Typography hierarchy nhất quán

Áp dụng scale ở mục 1: `CssHeading.tsx`, `banner/index.tsx` (hero) dùng `text-heading`; `QuoteSpot.tsx` dùng `text-xl`; `footer/index.tsx` dùng `text-lg`; `projects/item.tsx` (tiêu đề project) dùng `text-2xl`. Cỡ chữ trong `CaroOverlay.tsx` (glyph X/O trang trí trên overlay game) giữ nguyên arbitrary value — đây là nội dung trang trí, không phải phân cấp văn bản nên không thuộc phạm vi type scale.

`components/CssHeading.tsx`, `views/banner/index.tsx`, `views/banner/QuoteSpot.tsx`, `views/footer/index.tsx`, `views/projects/item.tsx` · Đã sửa

### ⏭️ 3. Thêm dark/light mode toggle — bỏ qua theo quyết định của chủ dự án

Giữ nguyên đề xuất gốc để tham khảo sau: cần CSS variable theo `@theme` của Tailwind v4 + `prefers-color-scheme`/toggle thủ công, và kiểm tra lại toàn bộ hiệu ứng nền (particles, beams) hiện thiết kế riêng cho nền tối.

Chưa làm — bỏ qua có chủ đích

### ✅ 4. Giảm tải hiệu ứng nền trên mobile

Phân loại lại 4 hiệu ứng trong `BackgroundEffects.tsx` theo chi phí thực tế: `Sparkles` (tsparticles, vòng lặp canvas liên tục), `ShootingStars` (2 vòng `requestAnimationFrame` chạy vô hạn kể cả khi không có gì để vẽ) và `BackgroundBeams` (50 phần tử `linearGradient` được Framer Motion animate đồng thời) là 3 hiệu ứng nặng nhất — tắt hẳn (không mount, không chỉ ẩn bằng CSS) trên màn hình ≤767px hoặc khi bật `prefers-reduced-motion`, qua hook mới `useMediaQuery`. Giữ `ScrollScanBeam` (chỉ chạy theo sự kiện scroll, animate transform/opacity) và các chấm constellation (CSS-only) ở mọi kích thước màn hình vì đã rẻ sẵn. Đồng thời thêm rule CSS `@media (prefers-reduced-motion: reduce)` toàn cục để tôn trọng cài đặt hệ điều hành cho mọi animation trên trang, không riêng background effects.

`hooks/useMediaQuery.ts` (mới), `views/BackgroundEffects.tsx`, `styles/globals.css` · Đã sửa

### ✅ 5. Polish chi tiết nhỏ

Rà lại: `GlowingCard` tự nó không phải phần tử focusable (không có `tabIndex`/`role`) nên thêm focus ring trực tiếp vào đó sẽ không có tác dụng — thay vào đó thêm `focus-visible:ring-2 focus-visible:ring-purple-50/60` (theo đúng pattern đã có ở `HeaderItem`) cho các control thực sự nhận focus: nút filter công nghệ (`projects/index.tsx`, kèm `aria-pressed` theo trạng thái chọn), nút logo/scroll-to-top, nút mở/đóng menu mobile. Thêm indicator động (gạch chân trượt `scale-x` theo trạng thái active) cho `HeaderItem` qua prop `showActiveIndicator` mới — chỉ bật ở nav desktop (`headers/index.tsx`), không ảnh hưởng các nơi khác đang dùng `HeaderItem` (section heading, popover mobile). Đổi hiệu ứng hover của `CssHeading` từ animate `width` (gây reflow) sang `transform: scaleX()` theo đúng tỉ lệ phóng to cũ ở từng breakpoint.

`components/CssHeading.tsx`, `views/projects/index.tsx`, `views/headers/index.tsx`, `views/headers/SmallPopover/index.tsx` · Đã sửa

*`components/CssHeading.tsx`, `components/GlowingCard.tsx` · Công sức: nhỏ*

---

## Bảng ưu tiên tổng hợp

| Hạng mục | Track | Ưu tiên | Công sức | Trạng thái |
|---|---|---|---|---|
| Pre-commit chạy full build trước lint | Tối ưu | Cao | Nhỏ | ✅ Đã sửa |
| Build script format toàn repo | Tối ưu | Cao | Nhỏ | ✅ Đã sửa |
| Hai lockfile song song | Tối ưu | Cao | Nhỏ | ✅ Đã sửa |
| Version TypeScript bất thường | Tối ưu | Cao | Nhỏ | ✅ Không phải lỗi |
| Ba overlay trùng lặp | Tối ưu | Trung bình | Vừa | ✅ Đã sửa |
| Sáu handler trùng lặp | Tối ưu | Trung bình | Nhỏ | ✅ Đã sửa |
| Màu hex hardcode | Tối ưu | Trung bình | Vừa | ✅ Đã sửa (phạm vi điều chỉnh) |
| Kiểu `any` còn sót | Tối ưu | Trung bình | Nhỏ | ✅ Đã sửa |
| z-index bất thường | Tối ưu | Trung bình | Nhỏ | ✅ Đã sửa |
| Xây design token | Làm đẹp | Trung bình | Vừa | ✅ Đã sửa |
| Typography hierarchy | Làm đẹp | Trung bình | Vừa | ✅ Đã sửa |
| Giảm hiệu ứng nền mobile | Cả hai | Trung bình | Vừa | ✅ Đã sửa |
| Polish chi tiết nhỏ (focus, nav indicator) | Làm đẹp | Thấp | Nhỏ | ✅ Đã sửa |
| Dark/light mode toggle | Làm đẹp | Thấp | Lớn | ⏭️ Bỏ qua (chủ đích) |
| Dependency particle nặng | Tối ưu | Thấp | Lớn | Chưa làm |
