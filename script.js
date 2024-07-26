document.addEventListener("DOMContentLoaded", function() {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from local storage
  loadTasks();

  // Event Listener for form submission
  taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      saveTask(taskText);
      taskInput.value = '';
    }
  });

  // Add new task to the DOM
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

  // Save task to local storage
  function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Load tasks from local storage and display them
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
  }

  // Remove task from local storage
  function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
