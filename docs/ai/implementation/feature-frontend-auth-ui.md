---
phase: implementation
title: Hướng Dẫn Triển Khai
description: Ghi chú triển khai kỹ thuật, mẫu và hướng dẫn mã
---

# Hướng Dẫn Triển Khai

## Thiết Lập Phát Triển

**Chúng ta bắt đầu như thế nào?**

- Cài đặt @supabase/ssr, cấu hình env SUPABASE_URL, SUPABASE_ANON_KEY.
- Tạo thư mục app/(auth)/login, register, forgot-password.

## Cấu Trúc Mã

**Mã được tổ chức như thế nào?**

- Pages: app/(auth)/page.tsx
- Components: components/auth/LoginForm.tsx
- Hooks: hooks/useAuth.ts

## Ghi Chú Triển Khai

**Chi tiết kỹ thuật chính cần nhớ:**

### Tính Năng Cốt Lõi

- Login: signInWithPassword, redirect /dashboard
- Register: signUp với metadata, redirect /login với message
- Forgot Password: resetPasswordForEmail, success state
- Forms: react-hook-form + zod validation, Shadcn/UI components
- Supabase: createBrowserSupabaseClient cho client, createClient cho server (tách file)

### Mẫu & Thực Tiễn Tốt Nhất

- Client Components cho forms interactive
- Error handling với form.setError, console.error
- Loading states với isLoading
- Accessibility: aria-label, role="alert", keyboard nav

## Điểm Tích Hợp

**Các phần kết nối như thế nào?**

- Supabase client trong lib/supabase.ts và lib/supabase-server.ts
- Redirect sau auth: useRouter.push
- Styling: Tailwind + Shadcn consistent

## Xử Lý Lỗi

**Chúng ta xử lý thất bại như thế nào?**

- Validation errors: Inline FormMessage
- Auth errors: root error với message cụ thể
- Network errors: Generic message + console.error

## Cân Nhắc Hiệu Suất

**Chúng ta giữ tốc độ như thế nào?**

- Validation realtime nhưng không overkill
- Forms nhỏ, no heavy computations

## Ghi Chú Bảo Mật

**Các biện pháp bảo mật nào đang được áp dụng?**

- Supabase handle JWT, no sensitive data in client
- Password show/hide, secure transmission via HTTPS
