const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#form-wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");

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
      <i class="fas fa-trash"></i>
    </button>
  </div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task);

  // select all delete buttons
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    // add event handler function that removes parent (div task)
    button.onclick = () => {
      button.parentNode.remove();
      // update taskCount variable
      taskCount -= 1;
      console.log(taskCount);
      displayCount(taskCount);
    };
  });

  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((button) => {
    button.onclick = (e) => {
      let targetElement = e.target;
      // get parent element of span which is button
      if (!(targetElement.className == "edit")) {
        targetElement = e.target.parentElement;
      }

      // console.log(targetElement);
      // change the value of the input to be the task name
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      // remove task
      targetElement.parentNode.remove();
      taskCount -= 1;
      displayCount(taskCount);
    };
  });

  // select all task checkboxes
};

addBtn.addEventListener("click", addTask);
