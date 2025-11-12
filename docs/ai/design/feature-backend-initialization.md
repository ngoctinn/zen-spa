---
phase: design
title: Thiết Kế Hệ Thống & Kiến Trúc
description: Xác định kiến trúc kỹ thuật, các thành phần và mô hình dữ liệu
---

# Thiết Kế Hệ Thống & Kiến Trúc

## Tổng Quan Kiến Trúc

**Cấu trúc hệ thống cấp cao là gì?**

- Backend sử dụng kiến trúc Modular Monolith với FastAPI.
- Các module được tổ chức theo domain: auth, appointments, treatments, customers, realtime.
- Sử dụng SQLModel cho ORM, PostgreSQL qua Supabase, Redis cho cache, Socket.io cho real-time.

  ```mermaid
  graph TD
    Client -->|HTTPS| FastAPI
    FastAPI --> Auth[Auth Module]
    FastAPI --> Appointments[Appointments Module]
    FastAPI --> Treatments[Treatments Module]
    FastAPI --> Customers[Customers Module]
    FastAPI --> Realtime[Realtime Module]
    Auth --> Supabase[(Supabase Auth)]
    Appointments --> PostgreSQL[(PostgreSQL)]
    Treatments --> PostgreSQL
    Customers --> PostgreSQL
    Realtime --> SocketIO[Socket.io]
    FastAPI --> Redis[(Redis Cache)]
  ```

## Mô Hình Dữ Liệu

**Chúng ta cần quản lý dữ liệu nào?**

- Models được định nghĩa trong từng module với SQLModel.
- Global models trong src/models.py nếu cần.
- Sử dụng Alembic cho migrations.

## Thiết Kế API

**Các thành phần giao tiếp như thế nào?**

- REST API với FastAPI routers trong từng module.
- Xác thực qua Supabase JWT trong header Authorization.
- Real-time qua Socket.io với namespaces.

## Phân Tích Thành Phần

**Các khối xây dựng chính là gì?**

- Core: config, security, cache, socketio_config.
- Modules: auth, appointments, treatments, customers, realtime.
- Database: connection và global models.
- Main: FastAPI app setup.

## Quyết Định Thiết Kế

**Tại sao chúng ta chọn cách tiếp cận này?**

- Modular Monolith phù hợp với quy mô dự án hiện tại.
- Dễ mở rộng thành microservices sau này.
- Tuân thủ quy tắc dự án với Supabase Auth và Redis.

## Yêu Cầu Phi Chức Năng

**Hệ thống nên hoạt động như thế nào?**

- Hiệu suất: Sử dụng async operations.
- Bảo mật: Validate Supabase JWT.
- Khả mở rộng: Module-based architecture.
