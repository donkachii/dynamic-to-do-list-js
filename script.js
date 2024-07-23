document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn"); // Gets add button properties
  const taskInput = document.getElementById("task-input"); // Gets all Input properties
  const taskList = document.getElementById("task-list"); // Gets unordered Lists

  /**
   * Adds a tack to the current item.
   */
  function addTask() {
    const taskText = taskInput.value.trim(); // Gets input value

    if (taskText !== "") {
      const list = document.createElement("li"); //Creates a list
      list.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      list.appendChild(removeButton);

      removeButton.addEventListener("click", function () {
        taskList.removeChild(list);
      });

      taskList.appendChild(list);

      taskInput.value = "";
    } else {
      alert("Enter a Task ");
    }
  }

  addTask();

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
