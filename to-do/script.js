const taskInput = document.getElementById("task-input");
const formElement = document.getElementById("form");
const taskList = document.querySelector(".task-list");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const deleteAllBtn = document.querySelector(".clear-all");
const summaryText = document.querySelector(".summary-text");
const formWrapper = document.querySelector(".form-wrapper");
const addBtn = document.querySelector(".add-btn");

window.onload = () => {
  render();
  updateSummary();
};

const updateSummary = () => {
  summaryText.textContent = `You have ${tasks.length} pending tasks`;
};

formElement.onsubmit = (event) => {
  event.preventDefault();
  const task = {
    id: Math.floor(Math.random() * (10000 - 1000) + 1000),
    description: taskInput.value,
  };

  if (taskInput.value.trim().length === 0) {
    return;
  }

  tasks.unshift(task);
  taskInput.value = "";
  taskInput.focus();
  taskList.innerHTML = "";

  render();
  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateSummary();
};

const render = () => {
  tasks.forEach((task) => {
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";
    const editButton = document.createElement("button");
    editButton.className = "btn btn-success ms-1";
    editButton.textContent = "Edit";

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "button-wrap p-3";
    buttonWrapper.appendChild(deleteButton);
    buttonWrapper.appendChild(editButton);

    const li = document.createElement("li");
    li.className = "list-group-item task-item mt-2";
    li.textContent = task.description;
    li.appendChild(buttonWrapper);

    deleteButton.addEventListener("click", () => {
      const id = task.id;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
          tasks.splice(i, 1);
        }
      }
      taskList.removeChild(li);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      updateSummary();
    });

    editButton.addEventListener("click", () => {
      const editForm = document.createElement("form");
      const submitEditBtn = document.createElement("button");
      submitEditBtn.className = "btn btn-success";
      const cancelEditBtn = document.createElement("button");
      cancelEditBtn.className = "btn btn-danger";
      cancelEditBtn.textContent = "Cancel";
      submitEditBtn.textContent = "Confirm";
      const editInput = document.createElement("input");
      editInput.className = "form-control";
      editInput.setAttribute("placeholder", "Edit Task...");

      formWrapper.innerHTML = "";
      formWrapper.appendChild(submitEditBtn);
      formWrapper.appendChild(cancelEditBtn);
      formWrapper.appendChild(editInput);
      submitEditBtn.onclick = () => {
        task.description = editInput.value;
        li.textContent = task.description;
        li.appendChild(buttonWrapper);
        formWrapper.innerHTML = "";
        formWrapper.appendChild(addBtn);
        formWrapper.appendChild(taskInput);
      };
      cancelEditBtn.onclick = () => {
        formWrapper.innerHTML = "";
        formWrapper.appendChild(addBtn);
        formWrapper.appendChild(taskInput);
      };
    });

    taskList.appendChild(li);
  });
};

deleteAllBtn.addEventListener("click", () => {
  tasks.length = 0;
  taskList.innerHTML = "";
  updateSummary();
  localStorage.removeItem("tasks");
});
