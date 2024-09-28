document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");
  const taskHeading = document.getElementById("taskHeading");

  // Add click event listener to the 'Add Task' button
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      return;
    }

    // Activate the task heading by adding a class
    taskHeading.classList.add("active");

    // Create a new list item for the task
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">Remove</button>
        `;

    // Toggle the 'done' class when the task text is clicked
    li.querySelector("span").addEventListener("click", () => {
      li.classList.toggle("done");
    });

    // Remove the task from the list when the 'Remove' button is clicked
    li.querySelector(".remove-btn").addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
  });

  // Add event listener to handle 'Enter' key press on the input field
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });
});
