document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input"); // Gets all Input properties
  const taskList = document.getElementById("task-list"); // Gets unordered Lists
  const addButton = document.getElementById("add-task-btn"); // Gets add button properties

  loadTasks();

  /**
   * Adds a task to the current item.
   */

  function addTask(taskText = taskInput.value, save = true) {
    if (taskText !== "") {
      const list = document.createElement("li"); //Creates a list
      list.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      list.appendChild(removeButton);

      /**
       * Removes a task to the current item.
       */
      removeButton.addEventListener("click", function () {
        let updatedTasks = JSON.parse(localStorage.getItem("tasks"));

        updatedTasks = updatedTasks.filter((task) => task !== taskText);
        console.log("🚀 ~ updatedTasks:", updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        console.log("🚀 ~ addTask ~ taskText:", taskText);

        taskList.removeChild(list);
      });

      taskList.appendChild(list);

      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        if (taskText) storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
      }

      // taskText = "";
    } else {
      alert("Enter a Task ");
    }
  }

  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }
});
