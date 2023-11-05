const inputElement = document.getElementById("add-btn");
const submitButton = document.getElementById("submitButton");
const filters = document.querySelectorAll(".filters span");
const taskBox = document.getElementById("task-box");

let todos = JSON.parse(localStorage.getItem("todo-list")) || [];

submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputElement.value.trim();

  if (inputValue !== "") {
    inputElement.value = "";
    const taskInfo = { name: inputValue, status: "active" };
    todos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo("add");
  } else {
    console.error("por favor ingrese una tarea");
  }
});

function updateFilters() {
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeActiveFilters();
      btn.classList.add("active");
      showTodo(btn.id);
    });
  });
}

function removeActiveFilters() {
  document.querySelectorAll("span.active").forEach((activeSpan) => {
    activeSpan.classList.remove("active");
  });
}

function showTodo(filter) {
  let taskList = "";
  todos.forEach((todo, id) => {
    if (
      filter === todo.status ||
      filter === "add" ||
      (filter === "completed" && todo.status === "completed")
    ) {
      const isCompleted = todo.status === "completed" ? "checked" : "";
      const textDecorationStyle =
        todo.status === "completed"
          ? 'style="text-decoration: line-through;"'
          : "";

      taskList += `<li class="task">
          <label for="${id}">
            <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted} />
            <p ${isCompleted} ${textDecorationStyle}>${todo.name}</p>
          </label>
        </li>`;
    }
  });
  taskBox.innerHTML = taskList;
}

function updateStatus(selectedTask) {
  const taskName = selectedTask.parentElement.querySelector("p");
  const taskId = selectedTask.id;

  if (selectedTask.checked) {
    taskName.classList.add("checked");
    todos[taskId].status = "completed";
  } else {
    taskName.classList.remove("checked");
    todos[taskId].status = "active";
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

updateFilters();
showTodo("add");

// submitButton.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputValue = inputElement.value.trim();
//   if (inputValue !== "") {
//     console.log("Tarea agregada: " + inputValue);
//   } else {
//     console.log("Por favor, ingrese una tarea válida.");
//   }
// });
