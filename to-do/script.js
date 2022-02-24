const formElement = document.querySelector("form");
const addBtn = document.getElementById("add-button");
const clearBtn = document.getElementById("clear-button");
const taskContainer = document.querySelector(".task-container");
const taskInput = document.querySelector("#task-id");
const tasks = [];

// Adding a task
const addTaskHandler = (event) => {
  event.preventDefault();
  const task = {
    title: taskInput.value,
    id: Math.random().toFixed(0),
  };
  tasks.push(task);
};

addBtn.onclick = addTaskHandler;

// Delete a task
const deleteTaskHandler = (taskId) => {
  const filterTask = tasks.filter((task) => task.id !== taskId);
  return filterTask;
};

// tasks render
const render = (tasks) => {
  const html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += `<div>
          <span>Task ${i}</span>
          <button>Clear</button>
        </div>`;
  }
};
