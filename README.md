# Employee Task List

## Description

This project is a simple web-based application that allows employees to maintain a task list. The application demonstrates the use of HTML5 local storage to persist data across browser sessions. The user can add new tasks, view the list of tasks, and remove tasks from the list.

## Features

- Add new tasks
- View tasks in a list
- Delete tasks
- Persistent storage using HTML5 local storage

## Installation

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.

## Usage

1. Open `index.html` in your preferred web browser.
2. Use the input field to add new tasks by typing task descriptions and clicking the "Add Task" button.
3. View your list of tasks displayed below the input field.
4. Click the "Delete" button next to any task to remove it from the list.

## File Structure

```
Employee-Task-List/
├── index.html
├── script.js
└── README.md
```

## Code Overview

### HTML Structure

The HTML file includes a form for adding new tasks and an unordered list for displaying the tasks.

```html
<form id="task-form">
  <input type="text" id="task-input" placeholder="Add a new task" required>
  <button type="submit">Add Task</button>
</form>
<ul id="task-list"></ul>
```

### JavaScript

Tasks are managed using JavaScript to add, remove, and persist data in local storage.

```javascript
document.addEventListener("DOMContentLoaded", function() {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  loadTasks();

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      saveTask(taskText);
      taskInput.value = '';
    }
  });

  function addTask(taskText) {
    const li = document.createElement('li');
    li.className = "task";
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
      removeTask(taskText);
    }

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
  }

  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
```

## Note

**Remark**: These codes are pseudo-code and should be validated thoroughly in a formal test environment before using them in production. The implementation provided is simplistic and may require enhancements for handling edge cases and ensuring security, specifically when dealing with user inputs and local storage operations.

## License

This project is licensed under the Common CC.

---

Feel free to improve this project by adding more features or optimizing the existing code! Happy coding!
