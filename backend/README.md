# ZenSpa Backend

Backend cho hệ thống ZenSpa sử dụng FastAPI.

## Cài Đặt

### 1. Tạo Virtual Environment

````bash
# Tạo venv
python -m venv venv

# Kích hoạt venv (Git Bash)
source venv/Scripts/activate


### 2. Cài Đặt Dependencies

```bash
pip install -r requirements.txt
````

### 3. Thiết Lập Environment Variables

```bash
cp .env.example .env
# Chỉnh sửa .env với thông tin thực tế
```

### 4. Thiết Lập Database

```bash
# Tạo migration đầu tiên
alembic revision --autogenerate -m "Initial migration"

# Chạy migration
alembic upgrade head
```

### 5. Chạy Server

```bash
uvicorn src.main:app --reload
```

Server sẽ chạy tại http://localhost:8000

## Cấu Trúc Dự Án

- `src/`: Source code
  - `auth/`: Module xác thực
  - `appointments/`: Module lịch hẹn
  - `treatments/`: Module liệu trình
  - `customers/`: Module khách hàng
  - `realtime/`: Module Socket.io
  - `core/`: Cấu hình core
- `tests/`: Unit tests
- `alembic/`: Database migrations
