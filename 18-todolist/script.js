const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#form-wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count");

let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

// invoked when add button clicked
const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";

  // if no task then set error div to display block
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  // create new task element
  const task = `<div class="task">
    <input type="checkbox" class="task-check"/>
    <span class="taskname">${taskName}</span>
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task);
};

addBtn.addEventListener("click", addTask);
