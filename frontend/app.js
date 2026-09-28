const API_URL = '/api/tasks';

async function loadTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        const span = document.createElement('span');
        span.textContent = task.title;
        span.onclick = () => toggleTask(task.id);

        const delBtn = document.createElement('button');
        delBtn.textContent = '✕';
        delBtn.onclick = () => deleteTask(task.id);

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    const title = input.value.trim();
    if (!title) return;

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });

    input.value = '';
    loadTasks();
}

async function toggleTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'PUT' });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}

// Загрузка при старте
loadTasks();
