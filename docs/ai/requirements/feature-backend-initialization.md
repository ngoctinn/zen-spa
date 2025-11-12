---
phase: requirements
title: Yêu Cầu & Hiểu Vấn Đề
description: Làm rõ không gian vấn đề, thu thập yêu cầu và xác định tiêu chí thành công
---

# Yêu Cầu & Hiểu Vấn Đề

## Phát Biểu Vấn Đề

**Chúng ta đang giải quyết vấn đề gì?**

- Thiếu cấu trúc thư mục chuẩn cho backend FastAPI, dẫn đến khó khăn trong tổ chức mã nguồn và phát triển.
- Developer phải tự tạo cấu trúc mỗi lần bắt đầu dự án mới, gây mất thời gian và có thể dẫn đến lỗi tổ chức.
- Khó khăn trong việc thêm module mới như auth, appointments, treatments một cách nhất quán.

## Mục Tiêu & Mục Đích

**Chúng ta muốn đạt được gì?**

- Tạo cấu trúc thư mục chuẩn cho backend FastAPI theo kiến trúc Modular Monolith.
- Đảm bảo dễ dàng thêm module mới mà không ảnh hưởng đến cấu trúc hiện có.
- Cung cấp template cho các file cần thiết như requirements.txt, .gitignore, và hướng dẫn cài đặt môi trường.

**Không mục tiêu:**

- Không triển khai logic nghiệp vụ cụ thể, chỉ cấu trúc cơ bản.
- Không tích hợp với frontend hoặc database thực tế.

## Câu Chuyện Người Dùng & Trường Hợp Sử Dụng

**Người dùng sẽ tương tác với giải pháp như thế nào?**

- Là một developer, tôi muốn có cấu trúc thư mục chuẩn để dễ dàng thêm module mới như auth, appointments, treatments. Để tôi có thể bắt đầu phát triển backend nhanh chóng mà không lo lắng về tổ chức file.
- Khi thêm module mới, tôi có thể sao chép cấu trúc từ module hiện có và chỉ cần thay đổi tên và logic.
- Khi khởi tạo dự án, tôi chạy lệnh để tạo venv, cài đặt dependencies, và thiết lập alembic.

## Tiêu Chí Thành Công

**Chúng ta sẽ biết khi nào hoàn thành?**

- Cấu trúc thư mục backend/ được tạo với tất cả thư mục và file **init**.py cần thiết.
- Có thể chạy uvicorn để khởi động server FastAPI cơ bản.
- Có thể thêm module mới bằng cách sao chép cấu trúc từ module mẫu.
- Requirements.txt, .gitignore, và hướng dẫn venv được cung cấp.

## Ràng Buộc & Giả Định

**Chúng ta cần làm việc trong giới hạn nào?**

- Tuân thủ stack công nghệ: Python 3.12+, FastAPI, SQLModel, Alembic, Redis.
- Sử dụng kiến trúc Modular Monolith.
- Giả định developer có kiến thức cơ bản về Python và FastAPI.

## Câu Hỏi & Vấn Đề Mở

**Chúng ta vẫn cần làm rõ gì?**

- Cần xác nhận cấu trúc thư mục có phù hợp với quy tắc dự án không?
- Có cần thêm module nào khác ngoài auth, appointments, treatments, customers, realtime không?
