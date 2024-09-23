document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const taskHeading = document.getElementById("taskHeading");

    if (taskText === "") {
      return;
    }

    taskHeading.classList.add("active");

    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">Remove</button>
        `;

    li.querySelector("span").addEventListener("click", () => {
      li.classList.toggle("done");
    });

    li.querySelector(".remove-btn").addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });
});
