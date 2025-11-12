---
phase: implementation
title: Hướng Dẫn Triển Khai
description: Ghi chú triển khai kỹ thuật, mẫu và hướng dẫn mã
---

# Hướng Dẫn Triển Khai

## Thiết Lập Phát Triển

**Chúng ta bắt đầu như thế nào?**

- Cài đặt Python 3.12+
- Tạo virtual environment: python -m venv venv
- Kích hoạt venv: source venv/bin/activate (Linux/Mac) hoặc venv\Scripts\activate (Windows)
- Cài đặt dependencies: pip install -r requirements.txt

## Cấu Trúc Mã

**Mã được tổ chức như thế nào?**

- backend/src/ chứa source code
- Modules theo domain trong src/
- Core config trong src/core/
- Tests trong tests/

## Ghi Chú Triển Khai

**Chi tiết kỹ thuật chính cần nhớ:**

### Cấu Trúc Module

- Mỗi module có: **init**.py, router.py, models.py, schemas.py, service.py, dependencies.py
- Router được include trong main.py
- Models sử dụng SQLModel

### Mẫu & Thực Tiễn Tốt Nhất

- Sử dụng async/await cho database operations
- Validate JWT trong dependencies
- Sử dụng Pydantic cho schemas

## Điểm Tích Hợp

**Các phần kết nối như thế nào?**

- FastAPI app trong main.py
- Routers được include với prefix
- Database connection trong database.py

## Xử Lý Lỗi

**Chúng ta xử lý thất bại như thế nào?**

- HTTPException cho API errors
- Logging với Python logging module

## Cân Nhắc Hiệu Suất

**Chúng ta giữ tốc độ như thế nào?**

- Async operations
- Redis cache cho data thường dùng

## Ghi Chú Bảo Mật

**Các biện pháp bảo mật nào đang được áp dụng?**

- Supabase JWT validation
- Không store sensitive data trong code
