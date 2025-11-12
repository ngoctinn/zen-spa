---
phase: requirements
title: Yêu Cầu & Hiểu Vấn Đề
description: Làm rõ không gian vấn đề, thu thập yêu cầu và xác định tiêu chí thành công
---

# Yêu Cầu & Hiểu Vấn Đề

## Phát Biểu Vấn Đề

**Chúng ta đang giải quyết vấn đề gì?**

- Người dùng (khách hàng, nhân viên spa, quản trị viên) không thể truy cập hệ thống ZenSpa do thiếu giao diện đăng nhập/đăng ký an toàn và thân thiện.
- Hiện tại, hệ thống chưa có giao diện frontend cho xác thực, dẫn đến trải nghiệm người dùng kém và rủi ro bảo mật.
- Ai bị ảnh hưởng: Khách hàng cuối muốn đặt lịch hẹn, nhân viên spa cần quản lý dịch vụ, quản trị viên cần truy cập admin panel.

## Mục Tiêu & Mục Đích

**Chúng ta muốn đạt được gì?**

- Mục tiêu chính: Tạo giao diện frontend hoàn chỉnh cho đăng nhập, đăng ký và quên mật khẩu, tích hợp với Supabase Auth.
- Mục tiêu phụ: Đảm bảo giao diện responsive, accessible, sử dụng tiếng Việt, tuân thủ nguyên tắc UI/UX hiện đại.
- Không mục tiêu: Không triển khai backend auth (đã có Supabase), không xử lý logic nghiệp vụ ngoài auth.

## Câu Chuyện Người Dùng & Trường Hợp Sử Dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- Là khách hàng, tôi muốn đăng nhập để đặt lịch hẹn và xem lịch sử dịch vụ.
- Là người dùng mới, tôi muốn đăng ký tài khoản để sử dụng dịch vụ spa.
- Là nhân viên spa, tôi muốn đăng nhập để quản lý lịch hẹn và khách hàng.
- Là quản trị viên, tôi muốn đăng nhập để truy cập bảng điều khiển quản lý.
- Quy trình: Người dùng truy cập trang auth, chọn đăng nhập/đăng ký, nhập thông tin, xác thực, chuyển hướng đến dashboard.
- Trường hợp biên: Email đã tồn tại, mật khẩu yếu, quên mật khẩu, tài khoản bị khóa.

## Tiêu Chí Thành Công

**Chúng ta sẽ biết khi nào hoàn thành?**

- Giao diện đăng nhập/đăng ký/quên mật khẩu hoạt động đầy đủ với Supabase Auth.
- Responsive trên mobile/desktop, contrast màu tốt, keyboard navigation.
- Tất cả label/thông báo bằng tiếng Việt, thân thiện.
- Validation realtime, thông báo lỗi cụ thể, loading states.
- Tích hợp OAuth nếu cần (tùy chọn).

## Ràng Buộc & Giả Định

**Chúng ta cần làm việc trong giới hạn nào?**

- Ràng buộc kỹ thuật: Next.js 16+ App Router, TypeScript, Shadcn/UI, @supabase/ssr.
- Ràng buộc kinh doanh: Giao diện bắt buộc tiếng Việt, tối giản, tập trung UX.
- Giả định: Supabase Auth đã cấu hình, backend FastAPI validate JWT.

## Câu Hỏi & Vấn Đề Mở

**Chúng ta vẫn cần làm rõ gì?**

- Có cần tích hợp OAuth (Google, Facebook) không?
- Thiết kế UI cụ thể (mockup) cho các trang auth?
- Xử lý trường hợp email chưa xác thực hoặc tài khoản bị khóa?
