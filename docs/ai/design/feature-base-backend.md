---
phase: design
title: System Design & Architecture
description: Define the technical architecture, components, and data models
---

# System Design & Architecture

## Architecture Overview

**What is the high-level system structure?**

- Include a mermaid diagram that captures the main components and their relationships. Example:
  ```mermaid
  graph TD
    Frontend -->|HTTPS| FastAPI_Backend
    FastAPI_Backend -->|JWT Auth| Supabase_Auth
    FastAPI_Backend -->|SQL| Supabase_PostgreSQL[(PostgreSQL)]
    FastAPI_Backend -->|Cache| Redis[(Redis)]
    FastAPI_Backend --> SocketIO_Manager
  ```
- Key components: FastAPI app với modular monolith, Supabase cho DB/Auth, Redis cho caching, SocketIO cho real-time.
- Technology stack: Python 3.12+, FastAPI, SQLModel, Supabase, Redis, python-socketio.

## Data Models

**What data do we need to manage?**

- Core entities: User (liên kết với Supabase sub), cơ bản cho nghiệp vụ (customers, appointments, etc. – để sau).
- Data schemas: Sử dụng SQLModel cho models.
- Data flow: Frontend gửi JWT → Backend validate → Truy cập DB/Cache.

## API Design

**How do components communicate?**

- External APIs: Không có, chỉ internal.
- Internal interfaces: REST API với FastAPI, async.
- Request/response: JSON, với Authorization header chứa Supabase JWT.
- Authentication: Validate JWT từ Supabase, không xử lý login/register.

## Component Breakdown

**What are the major building blocks?**

- Backend: app/core/ (DB, Cache, Configs), app/auth/ (JWT validation), app/ (modules nghiệp vụ – cơ bản).
- Database: Supabase PostgreSQL.
- Caching: Redis.
- Real-time: python-socketio (cơ bản).

## Design Decisions

**Why did we choose this approach?**

- Modular monolith với FastAPI để dễ mở rộng.
- Supabase cho BaaS, giảm quản lý infra.
- Redis cho caching hiệu suất.
- Tuân theo quy tắc dự án.

## Non-Functional Requirements

**How should the system perform?**

- Performance: Response < 500ms cho API cơ bản.
- Scalability: Sử dụng async, cache.
- Security: Validate JWT, không expose secrets.
- Reliability: Error handling cơ bản.
