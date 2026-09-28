# Task Manager

Простое приложение для управления задачами: backend на Node.js + Express, frontend на чистом JS, PostgreSQL, Nginx, всё в Docker.

## Стек
- **Backend:** Node.js 20, Express
- **Frontend:** HTML, CSS, JavaScript
- **БД:** PostgreSQL 16
- **Веб-сервер:** Nginx
- **Контейнеризация:** Docker, docker-compose

## Архитектура
[Браузер] → [Nginx :80] → [Backend :3000] → [PostgreSQL :5432]

## Запуск
```bash
git clone https://github.com/твой_логин/task-manager.git
cd task-manager
docker compose up -d --build
Открыть: http://localhost:8080

API
GET /api/tasks — список задач

POST /api/tasks — создать задачу

PUT /api/tasks/:id — переключить статус

DELETE /api/tasks/:id — удалить задачу

<img width="1000" height="500" alt="Screenshot_1" src="https://github.com/user-attachments/assets/9fd4c499-2a67-4161-9d97-3024965ac206" />
