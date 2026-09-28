CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Пара тестовых задач
INSERT INTO tasks (title) VALUES 
    ('Выучить Linux'),
    ('Развернуть приложение'),
    ('Стать DevOps-инженером');
