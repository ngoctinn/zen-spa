---
phase: design
title: Thiết Kế Hệ Thống & Kiến Trúc
description: Xác định kiến trúc kỹ thuật, các thành phần và mô hình dữ liệu
---

# Thiết Kế Hệ Thống & Kiến Trúc

## Tổng Quan Kiến Trúc

**Cấu trúc hệ thống cấp cao là gì?**

- Bao gồm sơ đồ mermaid nắm bắt các thành phần chính và mối quan hệ của chúng. Ví dụ:
  ```mermaid
  graph TD
    User -->|Truy cập| AuthPages[Trang Auth Frontend]
    AuthPages -->|Đăng nhập/Đăng ký| SupabaseAuth[Supabase Auth]
    SupabaseAuth -->|JWT| BackendAPI[FastAPI Backend]
    BackendAPI -->|Validate JWT| UserDashboard[Dashboard]
  ```
- Các thành phần chính: Trang auth (login/register/forgot-password), Supabase Auth, Backend validation.
- Lựa chọn stack: Next.js App Router, Shadcn/UI, @supabase/ssr.

## Mô Hình Dữ Liệu

**Chúng ta cần quản lý dữ liệu nào?**

- Form data: email, password, fullName (cho register).
- Không cần DB mới, chỉ state local và Supabase user metadata.
- Luồng dữ liệu: Form input -> Validation -> Supabase API -> JWT storage.

## Thiết Kế API

**Các thành phần giao tiếp như thế nào?**

- Sử dụng @supabase/ssr cho auth flows (signIn, signUp, resetPassword).
- Không có API custom, chỉ Supabase client.
- Định dạng: JSON responses từ Supabase.
- Xác thực: Supabase JWT, gửi trong headers cho backend.

## Phân Tích Thành Phần

**Các khối xây dựng chính là gì?**

- Frontend: Pages trong app/(auth)/, components auth với Shadcn/UI.
- Hooks: useAuth cho state management.
- Tích hợp: @supabase/ssr client.

## Quyết Định Thiết Kế

**Tại sao chúng ta chọn cách tiếp cận này?**

- Server Components cho SEO/loading, Client cho forms interactive.
- Shadcn/UI đảm bảo consistent UI, accessible.
- Supabase Auth đơn giản hóa, secure.
- Lựa chọn thay thế: Custom auth (phức tạp hơn).

## Yêu Cầu Phi Chức Năng

**Hệ thống nên hoạt động như thế nào?**

- Hiệu suất: Load nhanh, validation realtime.
- Khả năng mở rộng: Dễ thêm OAuth.
- Bảo mật: Supabase handle encryption, JWT secure.
- Độ tin cậy: Error handling tốt, fallback messages.
